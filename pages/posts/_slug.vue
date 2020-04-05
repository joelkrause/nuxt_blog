<template>
    <article class="container">
        <h1>{{story.name}}</h1>
        <h2>{{date}}</h2>
        <h2>{{difference}}</h2>
        <h2>{{story.content.post_category}}</h2>
        <div class="content" v-html="body"></div>
        <pre>
        <!-- {{story}} -->
        </pre>
    </article>
</template>

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
}
</script>