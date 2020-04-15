<template>
  <el-container>
    <el-header>
      <AppNavigaion />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template> 

<script>
import AppNavigaion from '@/components/main/Navigation'

export default {
  components:{
    AppNavigaion
  }
}
</script>
<style>

</style>
