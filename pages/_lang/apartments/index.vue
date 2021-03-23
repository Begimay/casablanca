<template>
  <div class="apartments">
    <Header />
    <div class="uk-container uk-container-large">
      <p class="apartments__head">{{ $t('header.apartments')}}</p>
      <div class="uk-grid uk-child-width-1-3@m uk-child-width-1-2@s" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .apart__item; delay: 500; repeat: false">
        <div v-for="(apartment, key) in apartments" :key="key">
          <nuxt-link :to="$store.state.locale === 'en' ? `/apartments/about-apartment/${apartment.id}` : `/ru/apartments/about-apartment/${apartment.id}`" v-if="apartment.has_discounted_price">
            <div class="apartments__item">
              <img :src="apartment.main_image_url" alt="">
              <div class="apartments__item__text">
                <p class="apartments__item__text___head">{{ apartment.title }}</p>
                <p class="apartments__item__text___description" v-html="apartment.description.slice(0, 50)" />
              </div>
              <p class="apartments__item__price" v-if="$store.state.currency == 'usd'">${{ apartment.discounted_price.usd }} <span class="uk-text-meta" style="text-decoration: line-through;">${{ apartment.price.usd }}</span></p>
              <p class="apartments__item__price" v-else>{{ apartment.discounted_price.kgs }} сом <span class="uk-text-meta" style="text-decoration: line-through;">{{ apartment.price.kgs }} сом</span></p>
              <span class="price_discount">{{ $t('discount')}}</span>
            </div>
          </nuxt-link>
          <nuxt-link :to="$store.state.locale === 'en' ? `/apartments/about-apartment/${apartment.id}` : `/ru/apartments/about-apartment/${apartment.id}`" v-else>
            <div class="apartments__item">
              <img :src="apartment.main_image_url" alt="">
              <div class="apartments__item__text" style="bottom: -4.7rem;">
                <p class="apartments__item__text___head">{{ apartment.title }}</p>
                <p class="apartments__item__text___description" v-html="apartment.description.slice(0, 50)" />
              </div>
              <p class="apartments__item__price" v-if="$store.state.currency == 'usd'">${{ apartment.price.usd }}</p>
              <p class="apartments__item__price" v-else>{{ apartment.price.kgs }} сом</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header";

  export default {
    name: "apartments",
    components: {
      Header
    },
    async asyncData({$axios}) {
      return await $axios.get('/apartments/hotels/')
        .then(response => {
          let apartments = response.data
          console.log(apartments)
          return { apartments }
        })
    },
    computed: {
      spliceString(str) {
        return str.splice(10, 50);
      }
    }
  }
</script>

<style lang="sass" scoped>
.apartments
  &__head
    margin-top: 30px
    color: #3B3B3B
    font-size: 40px
    line-height: 53px
    font-family: "SFProDisplay-Semibold", sans-serif
    margin-bottom: 50px
  a:hover
    text-decoration: none
  &__item
    position: relative
    .price_discount
      position: absolute
      top: 1rem
      right: 1rem
      padding: 5px 10px
      color: white
      background: #baa78b
      font-family: "SFProDisplay-Semibold", sans-serif
      font-weight: bold
      font-size: 12px
      line-height: 12px
      letter-spacing: 1px
    img
      width: 100%
      height: 325px
      object-fit: cover
    &__text
      position: absolute
      bottom: -3rem
      left: 0
      padding: 37px 11px 25px 14px
      background: #F5F5F5
      width: 240px
      height: 200px
      color: #263238
      &__head
        font-family: "SFProDisplay-Semibold", sans-serif
        font-size: 18px
        line-height: 24px
        color: #263238
        margin-bottom: 15px
      &__description
        font-size: 12px
        line-height: 15px
        color: #263238
    &__price
      margin-right: 5px
      text-align: right
      font-size: 28px
      line-height: 37px
      color: #000000CC
@media screen and (max-width: 700px)
  .apartments
    &__item
      &__text
        bottom: 0 !important
        padding: 10px
        width: 190px
        height: 170px
        p
          margin: 0
      img
        height: 225px
</style>
