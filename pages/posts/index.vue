<template>
    <section class="posts">
        <nuxt-link class="post" v-for="post in posts" :key="post.index" :to="`/posts/${post.slug}`">
            <div class="post-name">{{post.name}}</div>
        </nuxt-link>
        <pre>{{posts}}</pre>
    </section>
</template>

<script>
export default {
  computed:{
    home(){
      return this.$store.state.posts.posts.find(el => el.slug === 'home');
    }
  },
}
</script>

<style lang="scss" scoped>
.posts{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}
</style>