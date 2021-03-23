<template>
  <div>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
  import Footer from "@/components/Footer";

  export default {
    name: 'App',
    components: {
      Footer
    }
  }
</script>

<style lang="sass">
  @import '../assets/css/uikit.min.css'

  @font-face
    font-family: "SFProDisplay-Regular", sans-serif
    src: url("../assets/fonts/SFProDisplay-Regular/SF-Pro-Display-Regular.ttf") format('truetype'),
    url("../assets/fonts/SFProDisplay-Regular/SF-Pro-Display-Regular.woff") format('woff')

  @font-face
    font-family: "SFProDisplay-Semibold", sans-serif
    src: url("../assets/fonts/SFProDisplay-Semibold/SF-Pro-Display-Semibold.ttf") format('truetype'),
    url("../assets/fonts/SFProDisplay-Semibold/SF-Pro-Display-Semibold.woff") format('woff')

  *
    margin: 0
    padding: 0
    box-sizing: border-box
  body
    color: #3B3B3B
    font-family: "SFProDisplay-Regular", sans-serif
  .uk-notification-message
    text-align: center !important
    border-radius: 5px !important
  .uk-text-meta
    font-size: 20px
    display: block
</style>
