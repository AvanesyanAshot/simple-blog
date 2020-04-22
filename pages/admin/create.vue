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
                    v-model.trim="controls.text" 
                    resize="none"
                    :rows="10"
                />
            </el-form-item>

            <el-form-item>
                <el-button 
                    type="primary" 
                    round
                    native-type="submit"
                    :loading="loading"
                >
                Обновить
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
        onSubmit() {
            this.$refs.form.validate(async valid =>{
                if(valid) {
                    this.loading = true
                    const FormData = {
                        text: this.controls.text,
                        title: this.controls.title 
                    }
                    try {
                        await this.$store.dispatch('post/create', FormData)
                        this.controls.text = ''
                        this.controls.title = ''
                        this.$message.success('Пост успешно создан')
                    } catch (error) {

                        this.$message.warning('Произошла ошибка попробуйте снова')
                    } finally {
                        this.loading = false
                    }

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