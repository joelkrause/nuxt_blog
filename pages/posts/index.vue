<template>
  <main>
    <header class="post_header hero">
      <div class="container">
      <h1>All Posts</h1>
      </div>
    </header>
    <div class="container">
      <Posts layout="list" :tag="selectedTag" include_search="true"/>
    </div>
  </main>
</template>

<script>
import Posts from '~/components/global/Posts'

export default {
  components:{
    Posts
  },
  head () {
      return {
      title: 'Home',
      }
  },
}
</script>