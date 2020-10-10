<template>
  <footer>
    <div class="container">
      <div class="meta">
        &copy; Joel Krause {{ new Date().getFullYear() }} | Built with
        <a href="https://nuxtjs.org" target="_blank">nuxt.js</a> &amp;
        <a href="https://storyblok.com" target="_blank">storyblok</a>
      </div>
      <div class="social">
        <a href="https://twitter.com/Joel_Krause" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://github.com/joelkrause" target="_blank">
          <GitHubIcon />
        </a>
        <a href="https://instagram.com/developer_joel" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://ko-fi.com/joelkrause" target="_blank">
          <KoFiIcon />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import TwitterIcon from "@/assets/icons/twitter.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import KoFiIcon from "@/assets/icons/coffee.svg";

export default {
  components: {
    TwitterIcon,
    GitHubIcon,
    InstagramIcon,
    KoFiIcon,
  },
};
</script>

<style lang="scss" scoped>
footer {
  padding: 2rem 0;
  font-size: 0.875rem;

  @include breakpoint(up, tablet-landscape) {
    font-size: 1rem;
    margin: 5vw 0 0;
  }

  .container {
    display: flex;
    justify-content: space-between;
  }

  .social {
    display: flex;

    a {
      &:not(:last-of-type) {
        margin-right: 0.875rem;
      }

      svg {
        width: 1rem;
        height: auto;
      }
    }
  }
}
</style>
