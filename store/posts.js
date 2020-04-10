export const state = () => ({
    posts: [],
})

export const mutations = {
    updatePosts: (state, posts) => {
        state.posts = posts
    }
}

export const actions = {
    getPosts({ commit }, context) {
        return this.$storyapi.get(`cdn/stories`).then((res) => {
            commit('updatePosts', res.data.stories)
        })
    }
  }