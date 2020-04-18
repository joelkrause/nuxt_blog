<template>
    <article class="post container">
        <header class="hero">
            <div class="post_meta">
                <img v-if="story.content.post_icon" :src="story.content.post_icon" class="post_icon"/>
                <div class="tag" v-for="tag in story.tag_list" :key="tag.index">{{tag}}</div>
                <div>Published on {{$moment(story.created_at).format('dddd Do MMMM YYYY')}}</div>
            </div>
            <h1>{{story.name}}</h1>
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
    
    h1{
        position: relative;
        &:after{
            content: '';
            width: 25px;
            height: 3px;
            background:var(--text-color);
            position: absolute;
            bottom:-40px;
            left: 0;
        }
    }
    .excerpt{
        margin:2.5rem 0 0;
        max-width: 65%;
        color: #999;
    }
    .post{
        &_meta{
            display: flex;
            align-items: center;
            .tag{
                &:after{
                    content: '/';
                    padding:0 0.5rem;
                }
            }
        }
        &_icon{
            max-width: 3rem;
            max-height: 3rem;
            margin:0 1.5rem 0 0;
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