<template>
    <footer>
        <div class="container">
            <div class="meta">
                &copy; Joel Krause {{new Date().getFullYear()}} | Built with <a href="https://nuxtjs.org" target="_blank">nuxt.js</a> &amp; <a href="https://storyblok.com" target="_blank">storyblok</a>
            </div>
            <div class="social">
                social links
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer{
    padding: 2rem 0;
    .container{
        display: flex;
        justify-content: space-between;
    }
}
</style>