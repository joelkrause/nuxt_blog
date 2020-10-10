<template>
  <header>
    <div class="logo">
      <nuxt-link to="/">Joel Krause.</nuxt-link>
    </div>
    <nav>
      <nuxt-link to="/posts">Posts</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </nav>
    <div class="socials" data-type="socials">socials</div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  letter-spacing: 0.0125rem;

  @include breakpoint(up, tablet-landscape) {
    padding: 2rem;
  }

  nav {
    display: flex;

    @include breakpoint(up, laptop) {
      padding-left: 2rem;
    }

    a {
      position: relative;
      font-size: 0.875rem;

      &:not(:last-of-type) {
        margin-right: 1.25rem;
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        height: 1px;
        width: 100%;
        background: var(--text-color);
        transition: all 0.35s;
        opacity: 0;
        bottom: -10px;
      }

      &:hover,
      &.nuxt-link-exact-active {
        &::after {
          bottom: -5px;
          opacity: 1;
        }
      }
    }

    button {
      margin-left: 1rem;

      svg {
        width: 1.25rem;
        height: auto;
        color: var(--text-color);
      }
    }
  }

  .socials {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }
}
</style>

<script>
export default {
  data() {
    return {
      darkMode: true,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>
