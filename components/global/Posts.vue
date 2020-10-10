<template>
  <main>
    <div v-if="include_search" class="filter">
      <div v-for="tag in tags" :key="tag.index" class="filters">
        <button
          :class="selectedTag == 'All' ? 'selected' : ''"
          @click="clearFilter()"
        >
          All
        </button>
        <button
          v-for="option in tag"
          :key="option.index"
          :class="selectedTag == option.name ? 'selected' : ''"
          @click="filterPosts(option.name)"
        >
          {{ option.name }}
        </button>
      </div>
    </div>
    <section class="posts" :data-layout="layout">
      <nuxt-link
        v-for="post in filteredPosts.length > 0 ? filteredPosts : posts"
        :key="post.index"
        class="post"
        :to="`/posts/${post.slug}`"
      >
        <img :src="post.content.post_icon" class="post_icon" />
        <div class="post-content">
          <div class="post-name">
            {{ post.name }}
          </div>
          <div class="post-date">
            {{ $moment(post.created_at).format("dddd Do MMMM YYYY") }}
          </div>
        </div>
      </nuxt-link>
    </section>
  </main>
</template>

<script>
export default {
  props: ["layout", "tag", "include_search", "amount"],
  data() {
    return {
      filteredPosts: [],
      selectedTag: "All",
    };
  },
  computed: {
    posts() {
      if (this.amount) {
        return this.$store.state.posts.posts.slice(0, this.amount);
      } else {
        return this.$store.state.posts.posts;
      }
    },
    tags() {
      return this.$store.state.posts.tags;
    },
  },
  created() {
    this.$store.dispatch("posts/getPosts");
    this.$store.dispatch("posts/getTags");
  },
  methods: {
    filterPosts(searchFilter) {
      this.selectedTag = searchFilter;

      this.filteredPosts = this.posts.filter(function (post) {
        return post.tag_list.includes(searchFilter);
      });
    },
    clearFilter() {
      this.selectedTag = "All";
      this.filteredPosts = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  input {
    width: 100%;
    border: 1px solid #212121;
    padding: 1rem;
    display: block;
    height: auto;
    background: rgba(0, 0, 0, 0);
    appearance: none;
    border-radius: 3px;
    margin: 0 0 1rem;
  }

  .filters {
    display: flex;

    button {
      color: var(--color-text);
      background: var(--accent-color);
      padding: 0.5rem;
      border-radius: 3px;

      &:not(:last-of-type) {
        margin-right: 0.5rem;
      }

      &.selected {
        background: #27ae60;
      }
    }
  }
}

.posts {
  width: 100%;
  padding-top: 25px;

  .post {
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.35s;

    /deep/ &:not(:last-of-type) {
      margin: 0 0 2rem;
      padding: 0 0 2rem;
      border-bottom: 1px solid var(--accent-color);
    }

    &-date {
      font-size: 0.775rem;
    }

    &_icon {
      max-height: 2rem;
      max-width: 2rem;
      margin: 0 1.5rem 0 0;
    }

    &-name {
      padding: 0 0 0.5rem;
      font-family: var(--accent-font);
      font-size: 1.15rem;
      font-weight: bold;
    }
  }
}
</style>
