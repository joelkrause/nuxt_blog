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
    async asyncData (context) {
        const { data } = await context.app.$storyapi.get(`cdn/stories/`,{starts_with:`posts`})
        return { posts: data.stories }
    }
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