<template>
  <main class="container">
    <div class="home_hero">
      <div class="image">
        <img src="/images/joel.png"/>
      </div>
      <div class="content">
        <p>Hey, I'm Joel. I build lightning ⚡️ fast websites with nuxt.js and storyblok.</p>
        <p>I currently work at Raak Creative.</p>
        <nuxt-link to="/contact" class="button">Get In Touch</nuxt-link>
      </div>
    </div>
    <header class="post_header">
      <h2>Latest Posts</h2>
      <nuxt-link to="/posts">See All Posts</nuxt-link>
    </header>
    <section class="posts" v-if="posts">
        <nuxt-link class="post" v-for="post in posts" :key="post.index" :to="`/posts/${post.slug}`">
            <div class="post-date">{{post.created_at}}</div>
            <div class="post-name">{{post.name}}</div>
            <div class="post-categories">
              <div v-for="category in post.content.categories" :key="category.index" class="category" :style="`background-color:${category.color};`">
                {{category.title}}
              </div>
            </div>
        </nuxt-link>
    </section>
  </main>
</template>

<script>
import moment from 'moment'
import Category from '~/components/global/Category';

export default {
  components:{
    Category
  },
  async asyncData (context) {
      const { data } = await context.app.$storyapi.get(`cdn/stories/`,{starts_with:`posts`,per_page: 6})
      return { posts: data.stories }
  }
}
</script>

<style lang="scss" scoped>
.home_hero{
  /* width: 50%; */
  min-height: 20vw;
  padding:5vw 0;
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  /* justify-content: center; */
  .content{
    padding-left: 3rem;
    max-width: 35%;
  }
  img{
    width: 12.5vw;
  }
}
.post_header{
  display: flex;
  justify-content: space-between;
}
.posts{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    border-top: 1px solid #212121;
    padding-top: 25px;
    .post{
      border-radius: 3px;
      padding: 1rem;
      border: 1px solid #212121;
      display: flex;
      flex-direction: column;
      transition: all 0.35s;
      &:hover{
        box-shadow: 0 5px 10px rgba(#000,0.35);
        transform: translateY(-10px);
      }
      &-categories{
        display: flex;
        .category{
          font-size: 0.775rem;
          border-radius: 2px;
          padding: 0.175rem 0.25rem;
          letter-spacing: 0.5px;
          &:not(:last-of-type){
            margin-right: 0.5rem;
          }
        }
      }
      &-date{
        font-size: 0.775rem;
      }
      &-name{
        padding:1rem 0;
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
h2{
  margin:0 0 25px;
}
</style>