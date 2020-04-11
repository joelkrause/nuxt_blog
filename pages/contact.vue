<template>
    <main class="contact container">
        <h1>{{page.name}}</h1>
        <form action="">
            FORM
        </form>
    </main>
</template>

<script>
export default {
computed:{
    page(){
        return this.$store.state.pages.pages.find(el => el.slug === 'contact');
    },
},
created(){
    this.$store.dispatch("pages/getPages");
},
head () {
    return {
    title: this.page.name,
    }
},
}
</script>