export const state = () => ({
    pages: [],
})

export const mutations = {
    updatePages: (state, pages) => {
        state.pages = pages
    }
}

export const actions = {
    getPages({ commit }, context) {
        return this.$storyapi.get(`cdn/stories`,{starts_with:`pages`}).then((res) => {
            commit('updatePages', res.data.stories)
        })
    }
}