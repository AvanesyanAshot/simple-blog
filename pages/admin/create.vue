<template>
    <div class="page-wrap">
        <h1 class="mb">Создать новый пост</h1>
        <el-form 
            :model="controls" 
            :rules="rules" 
            ref="form"
            @submit.native.prevent="onSubmit"
        >
            <el-form-item label="Введите название поста" prop="title">
                <el-input 
                    v-model.trim="controls.title" 
                />
            </el-form-item>

            <el-form-item label="Текст в формате .md или .html" prop="text">
                <el-input 
                    type="textarea"
                    v-model="controls.text" 
                    resize="none"
                    :rows="10"
                />
            </el-form-item>

            <el-button class="mb" type='success' plain @click='previewDialog = true'>Предпросмотр</el-button>

            <el-dialog title="Предпросмотр" :visible.sync="previewDialog">
                <div  :key="controls.text"><!--После изменени controls.text vue вынужден перерендерить vue-markdown -->
                    <vue-markdown>{{controls.text}}</vue-markdown>
                </div>
            </el-dialog>

            <el-upload
                class="mb"
                drag
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleImageChange"
                :auto-upload="false"
            >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">Перетащите картинку <em>или нажмите</em></div>
                <div class="el-upload__tip" slot="tip">Файлы с разрешением jpg/png</div>
            </el-upload>

            <el-form-item>
                <el-button 
                    type="primary" 
                    round
                    native-type="submit"
                    :loading="loading"
                >
                Создать
                </el-button>

            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ["admin-auth"],
    data() {
        return {
            image: null,
            previewDialog: false,
            loading: false,
            controls: {
                title: '',
                text: ""
            },
            rules: {
                text: [
                    { required: true, message: 'Поле текст не должен быть пустым', trigger: 'blur' },
                ],
                title: [
                    { required: true, message: 'Название поста не может быть пустым', trigger: 'blur' },
                ]

            }
        };
    },
    methods: {
        handleImageChange(file, fileList){
            this.image = file.raw
        },
        onSubmit() {
            this.$refs.form.validate(async valid =>{
                if(valid && this.image) {
                    this.loading = true
                    const FormData = {
                        text: this.controls.text,
                        title: this.controls.title,
                        image: this.image 
                    }
                    try {
                        await this.$store.dispatch('post/create', FormData)
                        this.controls.text = ''
                        this.controls.title = ''
                        this.image = null
                        this.$refs.upload.clearFiles()
                        this.$message.success('Пост успешно создан')
                    } catch (error) {
                        this.$message.warning('Произошла ошибка попробуйте снова')
                    } finally {
                        this.loading = false
                    }   
                } else {
                    this.$message.warning('Эта форма не валидна')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .page-wrap{
        width: 600px;
    }
</style>