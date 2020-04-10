<template>
  <main class="container">
    <div class="home_hero">
      <div class="image">
        <img src="/images/joel.png"/>
      </div>
      <div class="content">
        <div v-html="$storyapi.richTextResolver.render(home.content.hero_content)"></div>
        <nuxt-link to="/contact" class="button">Get in Touch</nuxt-link>
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
            <div class="categories" v-if="post.content.categories">
              <div v-for="category in post.content.categories" :key="category.index" class="category" :style="`background-color:${category.color};`">
                {{category.title}}
              </div>
            </div>
        </nuxt-link>
    </section>
  </main>
</template>

<script>
export default {
  computed:{
    posts(){
      return this.$store.state.posts.posts;
    },
    home(){
      return this.$store.state.posts.posts.find(el => el.slug === 'home');
    }
  },
  head () {
      return {
      title: 'Home',
      }
  },
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