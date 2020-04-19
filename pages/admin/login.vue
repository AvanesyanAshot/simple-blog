<template>
    <el-card 
        shadow='always'
        :style="{width: '500px'}"
    >
        <h1>Login</h1>
        <el-form 
        :model="controls" 
        :rules="rules" 
        ref="form"
        @submit.native.prevent="onSubmit"
    >
        <el-form-item label="Логин" prop="name">
            <el-input v-model.trim="controls.login" />
        </el-form-item>

        <div class="mb">
            <el-form-item label=Пароль prop="name">
                <el-input v-model.trim="controls.password" type='password'/>
            </el-form-item>
        </div>

        <el-form-item>
            <el-button 
                type="primary" 
                round
                native-type="submit"
                :loading="loading"
            >
            Войти
            </el-button>

        </el-form-item>
    </el-form>
    </el-card>
</template>

<script>
export default {
    layout:'empty',
    data() {
        return {
            loading: false,
            controls: {
                login: "",
                password: ''
            },
            rules: {
                login: [
                    { required: true, message: 'Введите логин', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: 'Введите пароль', trigger: 'blur' },
                    { min:6 , message:'Пароль должен быть не менее 6 символов', trigger: 'blur'}
                ]
            }
        };
    },
    methods: {
        onSubmit(){
            console.log('brug')
        }
    }
}
</script>
