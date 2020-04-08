<template>
    <header>
        <div class="logo">
            <nuxt-link to="/">Joel Krause.</nuxt-link>
        </div>
        <nav>
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/posts">Posts</nuxt-link>
            <nuxt-link to="/contact">Contact</nuxt-link>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header{
    position: sticky;
    top:0;
    padding:2rem 2rem 0;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    nav{
        display: flex;
        a{
            position: relative;
            &:not(:last-of-type){
                margin-right: 1.25rem;
            }
            &:after{
                content: '';
                position: absolute;
                left: 0;
                height: 1px;
                width: 100%;
                background:#fff;
                transition: all 0.35s;
                opacity: 0;
                bottom:-10px;
            }
            &:hover,
            &.nuxt-link-exact-active {
                &:after{
                    bottom: -5px;
                    opacity: 1;
                }
            }
        }
    }
}
</style>