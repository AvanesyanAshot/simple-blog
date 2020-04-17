<template>
    <el-form 
        :model="controls" 
        :rules="rules" 
        ref="form"
        @submit.native.prevent="onSubmit"
    >
        <el-form-item label="Ваше имя" prop="name">
            <el-input v-model.trim="controls.name" />
        </el-form-item>
        <el-form-item label=Комментарий prop="name">
            <el-input 
                type="textarea"
                v-model.trim="controls.text" 
                resize="none"
                :rows="2"
            />
        </el-form-item>
        <el-form-item>
            <el-button 
                type="primary" 
                round
                native-type="submit"
            >
            Добавить коментарий
            </el-button>

        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            controls: {
                name: "",
                text: ''
            },
            rules: {
                name: [
                    { required: true, message: 'Имя не должно быть пустым', trigger: 'blur' },
                ],
                text: [
                    { required: true, message: 'Введите коментарий', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        onSubmit() {
            console.log('brug')
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(responce => console.log(responce))
        }
      
    }
}
</script>

<style lang="scss" scoped>

</style>