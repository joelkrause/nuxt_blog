export const state = () => ({
    posts: [],
})

export const mutations = {
    updatePosts: (state, posts) => {
        state.posts = posts
    }
}

export const actions = {
    async getPosts({
        state,
        commit,
        dispatch,
        context
    }) {
        const {
            data
        } = await this.$storyapi.get(`cdn/stories/`, {
            starts_with: `posts`,
            per_page: 500
        }).then(() => {
            posts = data.stories
            commit("updatePosts", posts)
        })
    }
}