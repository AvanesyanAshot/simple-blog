<template>
    <div>
        <el-card
            shadow='hover'
            :body-style="{padding: 0}"
            class='post'
        >
            <header slot="header" class="post-header">
                <h3>header</h3>

                <small>
                    <i class="ei-icon-time"></i>
                    {{ new Date().toLocaleString() }}
                </small>
            </header>
            <div class="post-body">
                <img src="https://avatars.mds.yandex.net/get-pdb/2883918/1938b612-fbe0-43bc-bc82-e5d90e533f42/s1200?webp=false" 
                    alt="post" 
                    class='post-img'
                >
            </div>
            <footer class='post-footer'>
                <small>
                    <el-button size="small" @click="openPost">Открыть</el-button>

                    <span><i class='el-icon-message'></i>12</span>
                </small>
            </footer>
        </el-card>
    </div>

</template> 

<script>

export default {
    methods: {
        openPost() {
            const id = "textID" 
            this.$router.push(`/post/${id}`)
        }
    }
}
</script>

<style lang="scss" scoped>
    .post {
        margin-bottom: 1.5rem;
    }

    .post-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .post-body{
        margin-bottom: 1rem;
    }

    .post-img{
        width: 100%;
        height: auto;
    }

    .post-footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }
</style>