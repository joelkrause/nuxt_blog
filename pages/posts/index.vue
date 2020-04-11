<template>
  <main class="container">
    <header class="post_header">
      <h2>Archive</h2>
    </header>
    <div class="filter">
      <pre>
        {{tags}}
      </pre>
      {{selectedTag}}
      <select v-for="tag in tags" :key="tag.index" v-model="selectedTag">
        <option value="All">All</option>
        <option v-for="option in tag" :key="option.index" :value="option.name">{{option.name}}</option>
      </select>
      <input type="search" placeholder="Search posts...">
    </div>
    <Posts layout="list" :tag="selectedTag"/>
  </main>
</template>

<script>
import Posts from '~/components/global/Posts'

export default {
  components:{
    Posts
  },
  computed:{
    tags(){
      return this.$store.state.posts.tags
    }
  },
  created() {
    this.$store.dispatch("posts/getTags");
  },
  data(){
    return{
      selectedTag:'All'
    }
  },
  head () {
      return {
      title: 'Home',
      }
  },
}
</script>