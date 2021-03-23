<template>
  <div class="apart">
    <Header />
    <div class="uk-container uk-container-large">
      <p class="apart__head">{{ $t('header.apart_hotel')}}</p>
      <div class="uk-grid uk-child-width-1-3@m uk-child-width-1-2@s" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .apart__item; delay: 500; repeat: false">
        <div v-for="(hotel, key) in hotels" :key="key">
          <nuxt-link :to="$store.state.locale === 'en' ? `/apart-hotel/about-apart-hotel/${hotel.id}` : `/ru/apart-hotel/about-apart-hotel/${hotel.id}`">
            <div class="apart__item">
              <img :src="hotel.main_image_url" alt="">
              <p class="apart__item__head">{{ hotel.title }}</p>
              <p class="apart__item__price" v-if="!hotel.has_discounted_price">
                <span v-if="$store.state.currency == 'usd'" class="uk-text-lead">$</span>
                <span class="uk-text-lead">{{ $store.state.currency == 'usd' ? hotel.price.usd : hotel.price.kgs + ' сом' }}</span>
<!--                <span class="uk-text-lead" v-if="$store.state.currency == 'usd'">00</span>-->
<!--                <span v-else>сом</span>-->
              </p>
              <p class="apart__item__price" v-else>
                <span v-if="$store.state.currency == 'usd'" class="uk-text-lead">$</span>
                <span class="uk-text-lead">{{ $store.state.currency == 'usd' ? hotel.discounted_price.usd : hotel.discounted_price.kgs + ' сом' }}</span>
<!--                <span class="uk-text-lead uk-margin-small-right" v-if="$store.state.currency == 'usd'">00</span>-->
<!--                <span v-else class="uk-margin-small-right">сом</span>-->
                <span class="uk-text-meta" style="text-decoration: line-through;">
                  <span v-if="$store.state.currency == 'usd'">$</span>
                  {{ $store.state.currency == 'usd' ? hotel.price.usd : hotel.price.kgs + ' сом' }}
<!--                  <span class="zeros" v-if="$store.state.currency == 'usd'">00</span>-->
<!--                  <span v-else>сом</span>-->
                </span>
                <span class="price_discount">{{ $t('discount')}}</span>
              </p>
              <p class="apart__item__text" v-html="hotel.description.slice(0, 100) + '...'" />
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
  name: "apartHotel",
  components: {
    Header
  },
  async asyncData({$axios}) {
    return await $axios.get('/apart_hotel/hotels/')
      .then(response => {
        let hotels = response.data
        return { hotels }
      })
  }
}
</script>

<style lang="sass" scoped>
  .uk-text-meta
    font-size: 14px
    display: inline
  .apart
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
        height: 220px
        object-fit: cover
      &__head
        margin-top: 15px
        color: #3B3B3B
        font-size: 16px
        line-height: 21px
        font-family: "SFProDisplay-Semibold", sans-serif
      &__price
        margin-top: 10px
        color: #3B3B3B
        font-size: 14px
        line-height: 18px
        font-family: "SFProDisplay-Semibold", sans-serif
        /*span.zeros
          color: #D1D1D1
          font-weight: bold*/
      &__text
        margin-top: 18px
        color: #A0A0A0
        font-size: 12px
        line-height: 18px
</style>
