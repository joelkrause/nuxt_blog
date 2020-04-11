<template>
    <section class="posts" v-if="posts" :data-layout="layout">
        <nuxt-link class="post" v-for="post in posts" :key="post.index" :to="`/posts/${post.slug}`">
            <div class="post-date">{{post.created_at}}</div>
            <div class="post-name">{{post.name}}</div>
            <div class="categories" v-if="post.content.categories">
              <div v-for="category in post.tag_list" :key="category.index" class="category" :style="`background-color:${category.color};`">
                {{category}}
              </div>
            </div>
        </nuxt-link>
    </section>
</template>

<style lang="scss" scoped>
.posts{
    width: 100%;
    padding-top: 25px;
    &[data-layout="grid"]{
      border-top: 1px solid #212121;
      @include breakpoint(up,tablet-landscape){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
      }
      .post{
          border-radius: 3px;
          padding: 1rem;
          border: 1px solid #212121;
          &:not(:last-of-type){
            margin:0 0 1rem;
            @include breakpoint(up,tablet-landscape){
              margin:0;
            }
          }
      }
    }
    &[data-layout="list"]{
        .post{
            border-bottom: 1px solid #212121;
            &:not(:last-of-type){
                margin: 0 0 1rem;
            }
        }
    }
    .post{
      display: flex;
      flex-direction: column;
      transition: all 0.35s;
      &:hover{
        box-shadow: 0 5px 10px rgba(#000,0.35);
        transform: translateY(-10px);
      }
      &-date{
        font-size: 0.775rem;
      }
      &-name{
        padding:1rem 0;
        font-weight: bold;
        font-size: 1.15rem;
      }
      &-continue{
        margin-top: auto;
        a{
          font-size: 0.775rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      }
    }
}
</style>

<script>
export default {
    props: [
        'layout',
        'tag'
    ],
    computed:{
        posts(){
            return this.$store.state.posts.posts;
        },
    },
    created() {
        this.$store.dispatch("posts/getPosts");
    },
}
</script>