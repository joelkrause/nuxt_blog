<template>
  <main>
    <div class="hero home_hero">
      <div class="container">
        <div class="image">
          <img src="/images/joel.png"/>
        </div>
        <div class="content">
          <div v-html="richtext"></div>
          <gh-btns-follow user="joelkrause" show-count></gh-btns-follow>
        </div>
      </div>
    </div>
    <div class="container">
      <header class="post_header">
        <h2>Latest Posts</h2>
        <nuxt-link to="/posts">See All Posts</nuxt-link>
      </header>
      <Posts layout="list" amount="6"/>
    </div>
  </main>
</template>

<script>
import Posts from '~/components/global/Posts'

export default {
  components:{
    Posts
  },
  computed:{
    home(){
      return this.$store.state.pages.pages.find(el => el.slug === 'home');
    },
    richtext() {
        return this.$storyapi.richTextResolver.render(this.home.content.hero_content)
    }
  },
  created() {
    this.$store.dispatch("pages/getPages");
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
  min-height: 20vw;
  margin: 0 0 5vw;
  .container{    
    padding-top: 10vw;
    padding-bottom: 10vw;
    @include breakpoint(up, tablet-landscape){
      padding-top: 5vw;
      padding-bottom: 5vw;
      display: flex;
      align-items: center;
    }
  }
  .content{
    padding:2rem 0;
    @include breakpoint(up, tablet-landscape){
      max-width: 65%;
      padding:0 0 0 5rem;        
    }
  }
  img{
    width: 25vw;
    @include breakpoint(up, tablet-landscape){
      width: 15vw;
    }
  }
}
.post_header{
  display: flex;
  justify-content: space-between;
}
h2{
  margin:0 0 25px;
}
</style>