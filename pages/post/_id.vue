<template>
    <article class='post'>
        <header class='post-header'>
            <main class="post-title">
                <h1>Post Title</h1>
                <nuxt-link to='/'>
                    <i class="el-icon-back"></i>
                </nuxt-link>
            </main>
            <div class="post-info">
                <small>
                    <span><i class='el-icon-message'></i>12</span>
                </small>
                <small>
                    <i class="el-icon-view"></i>
                    42   
                </small>
            </div>
            <div class="post-image">
                <img src="https://avatars.mds.yandex.net/get-pdb/2883918/1938b612-fbe0-43bc-bc82-e5d90e533f42/s1200?webp=false" 
                        alt="post" 
                        class='post-img'
                    >
            </div>
        </header>
        <main class="post-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nostrum officiis dolore earum possimus autem. Veritatis, esse officiis! Tenetur, quod. Possimus officia necessitatibus, aliquam nihil maxime molestiae sint exercitationem cumque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nostrum officiis dolore earum possimus autem. Veritatis, esse officiis! Tenetur, quod. Possimus officia necessitatibus, aliquam nihil maxime molestiae sint exercitationem cumque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nostrum officiis dolore earum possimus autem. Veritatis, esse officiis! Tenetur, quod. Possimus officia necessitatibus, aliquam nihil maxime molestiae sint exercitationem cumque.</p>
        </main>
        <footer>
            <app-comment-form></app-comment-form>
            <div class="comments" v-if='true'>
                <app-comment
                 v-for='comment in 4'
                 :key='comment'
                 :comment= 'comment'
                 />
            </div>
            <div class="text-center" v-else>
                Комментариев нет
            </div>
        </footer>
    </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'
export default {
    validate({params}) {
        return !!params.id
    },
    components:{
        AppComment,
        AppCommentForm
    }
}
</script>

<style lang="scss" scoped>
    .post{
        max-width: 600px;
        margin: 0 auto;
    }
    .post-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .5rem;
    }
    .post-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .5rem;

    }
    .post-image img{
        width: 100%;
        height: auto;
    }
    .post-header {
        margin-bottom: 1.5rem;
    }
    .post-content{
        margin-bottom: 2rem;
    }
</style>