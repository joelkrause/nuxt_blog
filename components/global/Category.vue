<template>
    <div>
        {{categoryContent}}
    </div>
</template>

<script>
export default {
    props:['category'],
    async asyncData (context) {
        const { data } = await context.app.$storyapi.get(`cdn/stories/`,{starts_with:`posts`})
        return { categoryContent: data.stories }
    }
}
</script>