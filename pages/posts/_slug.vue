<template>
    <article class="container">
        <header>
            <h1>{{story.name}}</h1>
            <div class="categories">
              <div v-for="category in story.tag_list" class="category" :key="category.index">
                {{category}}
              </div>
            </div>
            <div class="date">
                <div>Published on {{date}}</div>
                <div class="sep"></div>
                <div>Updated {{difference}}</div>
            </div>
            <div class="excerpt">
                hey this is a piece of info to describe the blog post
            </div>
        </header>
        <div class="content" v-html="richtext"></div>
    </article>
</template>

<style lang="scss" scoped>
header{
    min-height: 20vw;
    padding:5vw 0;
    display: flex;
    flex-direction: column;
    .date{
        display: flex;
        align-items: flex-start;
        font-size: 0.775rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        .sep{
            padding:0 10px;
        }
    }
    .excerpt{
        margin:5rem 0 0;
        max-width: 50%;
        color: #ccc;
    }
    .categories{
        margin:0 0 1rem;
    }
}
</style>

<script>
export default {
    computed: {
        posts() {
            return this.$store.state.posts.posts;
        },
        story() {
            return this.posts.find(el => el.slug === this.slug);
        },
        richtext() {
            return this.$storyapi.richTextResolver.render(this.story.content.body)
        }
    },
    data() {
        return {
            slug: this.$route.params.slug,
            
        };
    },
    created() {
        this.$store.dispatch("posts/getPosts");
    },
    head () {
        return {
        title: this.story.name,
        }
    },
}
</script>