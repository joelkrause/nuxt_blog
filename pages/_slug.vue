<template>
    <div>
        {{page.name}}
    </div>
</template>

<script>
export default {
computed:{
    page(){
        return this.$store.state.pages.pages.find(el => el.slug === this.$route.params.slug);
    },
},
created(){
    this.$store.dispatch("pages/getPages");
},
  head () {
      return {
        title: this.page.name,
      }
  },
}
</script>