<template>
  <main class="container">
    <div class="home_hero">
      <p>Hey, I'm Joel. I build lightning ⚡️ fast websites with nuxt.js and storyblok.</p>
      <p>I currently work at Raak Creative.</p>
    </div>
    <h2>Latest Posts</h2>
    <section class="posts" v-if="posts">
        <div class="post" v-for="post in posts" :key="post.index">
            <div class="post-categories">
              <Category v-for="category in post.content.categories" :key="category.index" :category="category"/>
            </div>
            <div class="post-date">{{post.created_at}}</div>
            <div class="post-name">{{post.name}}</div>
            <div class="post-continue">
              <nuxt-link :to="`/posts/${post.slug}`">Continue Reading</nuxt-link>
            </div>
        </div>
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
      const { data } = await context.app.$storyapi.get(`cdn/stories/`,{starts_with:`posts`})
      return { posts: data.stories }
  }
}
</script>

<style lang="scss" scoped>
.home_hero{
  padding:0 0 25px;
  margin:0 0 25px;
  width: 50%;
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