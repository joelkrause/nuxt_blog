<template>
  <main class="contact container">
    <h1>{{ page.name }}</h1>
    <div class="body" v-html="richtext" />
  </main>
</template>

<script>
export default {
  async asyncData(context) {
    const { data } = await context.app.$storyapi.get(`cdn/stories/pages/about`);
    return { page: data.story };
  },
  computed: {
    richtext() {
      return this.$storyapi.richTextResolver.render(this.page.content.body);
    },
  },
  head() {
    return {
      title: this.page.name,
    };
  },
};
</script>
