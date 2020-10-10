<template>
  <main class="contact container">
    <h1>{{ page.name }}</h1>
    <form action="">FORM</form>
  </main>
</template>

<script>
export default {
  async asyncData(context) {
    const { data } = await context.app.$storyapi.get(
      `cdn/stories/pages/contact`
    );
    return { page: data.story };
  },
  head() {
    return {
      title: this.page.name,
    };
  },
};
</script>
