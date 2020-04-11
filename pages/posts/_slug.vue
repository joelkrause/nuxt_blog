<template>
    <article class="post container">
        <header class="hero">
            <img v-if="story.content.post_icon" :src="story.content.post_icon" class="post_icon"/>
            <h1>{{story.name}}</h1>
            <div class="date">
                <div>Published on {{$moment(story.created_at).format('dddd Do MMMM YYYY')}}</div>
                <div class="sep"></div>
                <div>Updated about {{$moment(story.published_at).startOf().fromNow()}}</div>
            </div>
            <div class="excerpt" v-if="story.content.excerpt" v-html="excerpt"></div>
        </header>
        <div class="content" v-if="story.content.body" v-html="richtext"></div>
    </article>
</template>

<style lang="scss" scoped>
header{
    min-height: 20vw;
    padding:5vw 0;
    margin: 0 0 5vw;
    display: flex;
    flex-direction: column;
    .date{
        display: flex;
        align-items: flex-start;
        font-size: 0.775rem;
        .sep{
            padding:0 5px;
        }
    }
    .excerpt{
        margin:2.5rem 0 0;
        max-width: 65%;
        color: #999;
    }
    .categories{
        margin:0 0 1rem;
    }
    .post{
        &_icon{
            max-width: 3rem;
            height: auto;
            margin:0 0 1rem;
        }
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
            return this.story.content ? this.$storyapi.richTextResolver.render(this.story.content.body) : ''
        },
        excerpt(){
            return this.story.content.excerpt ? this.$storyapi.richTextResolver.render(this.story.content.excerpt) : ''
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