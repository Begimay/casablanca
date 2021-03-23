<template>
  <div class="apart">
    <Header />
    <div class="uk-container uk-container-large">
      <p class="apart__head">{{ $t('header.favourites')}}</p>
      <transition-group name="fade" class="uk-grid uk-child-width-1-3@m uk-child-width-1-2@s" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .apart__item; delay: 500; repeat: false">
        <div v-for="(hotel, idx, key) in $store.state.favorites" :key="key + 0">
          <nuxt-link :to="hotel.type == 'apart-hotel' ? ($store.state.locale === 'en' ? `/apart-hotel/about-apart-hotel/${hotel.id}` : `/ru/apart-hotel/about-apart-hotel/${hotel.id}`) : ($store.state.locale === 'en' ? `/apartments/about-apartment/${hotel.id}` : `/ru/apartments/about-apartment/${hotel.id}`)">
            <img :src="hotel.main_image_url" alt="">
          </nuxt-link>
          <nuxt-link :to="hotel.type == 'apart-hotel' ? `/apart-hotel/about-apart-hotel/${hotel.id}` : `/apartments/about-apartment/${hotel.id}`">
            <p class="apart__item__head">{{ hotel.title }}</p>
          </nuxt-link>
          <div class="apart__item">
            <div class="uk-flex uk-flex-between">
              <p class="apart__item__price" v-if="hotel.has_discounted_price">
                <span v-if="$store.state.currency == 'usd'">$</span>
                {{ $store.state.currency == 'usd' ? hotel.discounted_price.usd : hotel.discounted_price.kgs }}
                <span class="zeros" v-if="$store.state.currency == 'usd'">.00</span>
                <span v-else>сом</span>
                <span class="uk-text-meta" style="text-decoration: line-through;">
                  {{ $store.state.currency == 'usd' ? hotel.price.usd : hotel.price.kgs }}
                  <span class="zeros" v-if="$store.state.currency == 'usd'">.00</span>
                  <span v-else>сом</span>
                </span>
                <span class="price_discount">{{ $t('discount')}}</span>
              </p>
              <p class="apart__item__price" v-else>
                <span v-if="$store.state.currency == 'usd'">$</span>
                {{ $store.state.currency == 'usd' ? hotel.price.usd : hotel.price.kgs }}
                <span class="zeros" v-if="$store.state.currency == 'usd'">.00</span>
                <span v-else>сом</span>
              </p>
              <div class="heart" @click="deleteFromFavs(idx)" :title="$store.state.locale === 'en' ? 'Delete from favourites' : 'Удалить из избранного'">
                <font-awesome-icon :icon="['fa', 'heart']" color="#BAA68B" />
              </div>
            </div>
            <p class="apart__item__text" v-html="hotel.description" />
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "favourites",
  components: {
    Header
  },
  methods: {
    deleteFromFavs(idx) {
      setTimeout(() => {
        this.$store.commit('DELETE_FAVOURITES', idx)
      }, 200);
      this.$uikit.notification({
        message: this.$t('deleted'),
        pos: 'bottom-center'
      });
    }
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
  img
    width: 100%
    height: 220px
    object-fit: cover
  &__item
    position: relative
    .price_discount
      position: absolute
      top: -16rem
      right: 1rem
      padding: 5px 10px
      color: white
      background: #baa78b
      font-family: "SFProDisplay-Semibold", sans-serif
      font-weight: bold
      font-size: 12px
      line-height: 12px
      letter-spacing: 1px
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
      span.zeros
        color: #D1D1D1
        font-weight: bold
    &__text
      margin-top: 18px
      color: #A0A0A0
      font-size: 12px
      line-height: 18px
  .heart
    cursor: pointer
    width: 30px
    height: 30px
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
    transition: all .3s ease
    &:hover
      background-color: #f2f2f2
  .fade-leave-active
    transition: all .5s
  .fade-leave-to
    opacity: 0
</style>
