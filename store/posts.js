export const state = () => ({
  posts: [],
  tags: {},
});

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts;
  },
  updateTags: (state, tags) => {
    state.tags = tags;
  },
};

export const actions = {
  getPosts({ commit }) {
    return this.$storyapi
      .get(`cdn/stories`, { starts_with: `posts` })
      .then((res) => {
        commit("updatePosts", res.data.stories);
      });
  },
  getTags({ commit }) {
    return this.$storyapi.get(`cdn/tags`).then((res) => {
      commit("updateTags", res.data);
    });
  },
};
