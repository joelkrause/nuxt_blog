<template>
    <article class="container">
        <header>
            <h1>{{story.name}}</h1>
            <div class="date">
                <div>Published on {{date}}</div>
                <div class="sep"></div>
                <div>Updated {{difference}}</div>
            </div>
            <div class="categories">
              <div v-for="category in story.content.categories" :key="category.index" class="category" :style="`background-color:${category.color};`">
                {{category.title}}
              </div>
            </div>
            <div class="excerpt">
                hey this is a piece of info to describe the blog post
            </div>
        </header>
        <div class="content" v-html="body"></div>
        <pre>
        <!-- {{story}} -->
        </pre>
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
        margin:1rem 0 0;
    }
}
</style>

<script>
import moment from 'moment'

export default {
    computed: {
        body() {
            return this.story ? this.$storyapi.richTextResolver.render(this.story.content.body) : ''
        },
        date(){
            return moment(this.story.created_at).format('dddd Do MMMM YYYY')
        },
        difference(){
            return moment(this.story.created_at).startOf().fromNow()
        }
    },
    data () {
        return {
            story: { content: {} }}
    },
    asyncData (context) {
        // Check if we are in the editor mode
        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

        // Load the JSON from the API
        return context.app.$storyapi.get(`cdn/stories/posts/${context.params.slug}`, {
        version: version
        }).then((res) => {
        return res.data
        }).catch((res) => {
        context.error({ statusCode: res.response.status, message: res.response.data })
        })
    },
    head () {
        return {
        title: this.story.name,
        }
    },
}
</script>