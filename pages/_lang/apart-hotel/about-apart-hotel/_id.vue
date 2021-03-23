<template>
  <div class="apart">
    <Header />
    <div class="uk-container uk-container-large">
      <div class="apart__images uk-margin-bottom">
        <div class="uk-grid uk-child-width-1-2@s uk-grid-match uk-visible@m" uk-grid>
          <div>
            <div class="apart__images__left">
              <img :src="hotel.main_image_url" alt="">
            </div>
          </div>
          <div>
            <div class="apart__images__right">
              <div class="uk-grid uk-child-width-1-2@s uk-grid-match" uk-grid>
                <div v-for="(image, index, key) in hotel.gallery" :key="key" v-if="index <= 3">
                  <img :src="image.image_url" alt="">
                </div>
              </div>
              <div class="uk-visible@s" v-if="hotel.gallery.length">
                <a :href="'#showAllPhotos' + hotel.id" uk-toggle class="uk-button uk-button-default gallery__button">{{ $t('main.gallery.all')}}</a>
                <div :id="'showAllPhotos' + hotel.id" class="uk-modal-full" uk-modal>
                  <div class="uk-modal-dialog">
                    <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                    <div class="slideshow">
                      <div uk-slideshow="max-height: 100vh" class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
                        <div class="uk-position-relative">
                          <ul class="uk-slideshow-items uk-child-width-1-1">
                            <li v-for="(image, key) in hotel.gallery" :key="key" class="uk-flex uk-flex-center uk-margin-medium-top">
                              <img :src="image.image_url" alt="" style="height: 100%;">
                            </li>
                          </ul>
                          <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous
                             uk-slideshow-item="previous"></a>
                          <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next
                             uk-slideshow-item="next"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-hidden@m">
          <h1 style="font-family: 'SFProDisplay-Semibold', sans-serif">{{ hotel.title }}</h1>
          <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="min-height: 600px; max-height: 600px">
            <ul class="uk-slideshow-items">
              <li v-for="(slide, key) in hotel.gallery" :key="key">
                <img :src="slide.image_url" alt="">
              </li>
            </ul>
            <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
          </div>
        </div>
      </div>
      <div class="apart__hotel">
        <div class="uk-grid uk-child-width-1-2@s" uk-grid>
          <div>
            <div class="apart__hotel__left">
              <span class="price_discount" v-if="hotel.has_discounted_price">{{ $t('discount')}}</span>
              <p class="apart__hotel__left__head">{{ hotel.title }}</p>
              <p class="apart__hotel__left__description">{{ $t('apart.description')}}</p>
              <p class="apart__hotel__left__text" v-html="hotel.description" />
            </div>
          </div>
          <div>
            <div class="apart__hotel__right">
              <div class="apart__hotel__right__buttons">
                <div class="uk-flex uk-flex-between uk-flex-middle">
                  <a href="#scroll" class="uk-button uk-button-default" uk-scroll>{{ $t('apart.contact')}}</a>
                  <button class="uk-button uk-button-default" @click="addToFavs(hotel)">
                    <font-awesome-icon v-if="$store.state.favorites.some(el => el.slug === hotel.slug)" :icon="['fa', 'check']" color="#000000" class="icon" />
                    <font-awesome-icon v-else :icon="['fa', 'heart']" color="#BAA68B" class="icon" />
                    {{ $store.state.favorites.some(el => el.slug === hotel.slug) ? $t('apart.inFavourites') : $t('apart.favourites') }}
                  </button>
                </div>
              </div>
              <div class="apart__hotel__right__about">
                <div class="uk-flex uk-flex-between uk-flex-middle">
                  <div v-if="hotel.has_discounted_price">
                    <p class="apart__hotel__right__about__price" v-if="$store.state.currency == 'usd'">${{ hotel.discounted_price.usd }} <span class="uk-text-meta" style="text-decoration: line-through;">${{ hotel.price.usd }}</span></p>
                    <p class="apart__hotel__right__about__price" v-else>{{ hotel.discounted_price.kgs }} сом <span class="uk-text-meta" style="text-decoration: line-through;">{{ hotel.price.kgs }} сом</span></p>
                  </div>
                  <div v-else>
                    <p class="apart__hotel__right__about__price" v-if="$store.state.currency == 'usd'">${{ hotel.price.usd }}</p>
                    <p class="apart__hotel__right__about__price" v-else>{{ hotel.price.kgs }} сом</p>
                  </div>
                  <div>
                    <p class="apart__hotel__right__about__head">{{ $t('apart.category')}}</p>
                    <p class="apart__hotel__right__about__text">{{ hotel.category.title }}</p>
                  </div>
                  <div>
                    <p class="apart__hotel__right__about__head">{{ $t('apart.accomodation')}}</p>
                    <p class="apart__hotel__right__about__text">{{ hotel.accommodation }}  {{ $t('apart.people')}}</p>
                  </div>
                  <div>
                    <p class="apart__hotel__right__about__head">{{ $t('apart.style')}}</p>
                    <p class="apart__hotel__right__about__text">{{ hotel.style.title }}</p>
                  </div>
                </div>
              </div>
              <div class="apart__hotel__right__conv">
                <p class="apart__hotel__right__conv__head">{{ $t('apart.convinience')}}</p>
                <div class="uk-grid uk-child-width-1-2@s" uk-grid>
                  <div v-for="(facility, idx, key) in hotel.facilities" :key="key" v-if="idx <= 5">
                    <div class="apart__hotel__right__conv__item">
                      <p><img :src="facility.icon_url" alt="" style="width: 50px;">{{ facility.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="apart__hotel__right__showAll">
                <a href="#allFacilities" class="uk-button uk-button-default" uk-toggle>{{ $t('apart.showAll') }} ({{ hotel.facilities.length }})</a>
                <div id="allFacilities" uk-modal>
                  <div class="uk-modal-dialog">
                    <button class="uk-modal-close-default" type="button" uk-close></button>
                    <div class="uk-modal-header">
                      <h2 class="uk-modal-title">{{ $t('apart.convinience')}}</h2>
                    </div>
                    <div class="uk-modal-body" uk-overflow-auto>
                      <div class="apart__hotel__right__conv">
                        <div class="uk-grid uk-child-width-1-2@s" uk-grid>
                          <div v-for="(facility, key) in hotel.facilities" :key="key">
                            <div class="apart__hotel__right__conv__item">
                              <p><img :src="facility.icon_url" alt="" style="width: 50px;">{{ facility.title }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="apart__like" id="scroll">
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
          <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
            <li v-for="(item, key) in hotel.related_items" :key="key">
              <div class="uk-panel">
                <img :src="item.main_image_url" alt="">
                <div class="uk-position-cover uk-panel">
                  <div class="apart__like__about">
                    <p class="apart__like__about__name">{{ item.title }}</p>
                    <div class="uk-position-bottom">
                      <hr>
                      <nuxt-link :to="$store.state.locale === 'en' ? `/apart-hotel/about-apart-hotel/${item.id}` : `/ru/apart-hotel/about-apart-hotel/${item.id}`">{{ $t('apart.more')}} <i uk-icon="icon: arrow-right"></i></nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
          <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "aboutApart",
  components: {
    Header
  },
  async asyncData({$axios, params}) {
    return await $axios.get(`/apart_hotel/hotels/${params.id}`)
      .then(response => {
        let hotel = response.data
        return { hotel }
      })
  },
  methods: {
    addToFavs(hotel) {
      hotel['type'] = 'apart-hotel';
      hotel.favs = true;
      if (!this.$store.state.favorites.some(fav => fav.slug === hotel.slug)) {
        this.$store.commit('SET_FAVORITES', hotel);
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.uk-light .uk-slidenav
  color: #000 !important
.uk-modal-full .uk-modal-dialog
  height: 100vh
.uk-modal.uk-open
  .uk-slider
    padding-top: 135px
    text-align: center
    img
      width: 100%
      height: 750px
      object-fit: contain
.gallery__button
  margin-top: 15px
  display: block
  width: 100%
  padding: 5px
  bottom: 0
  color: white
  font-size: 14px
  line-height: 25px
  letter-spacing: 1.17px
  font-family: "SFProDisplay-Semibold", sans-serif
  background: #BAA68B
  border: none
.price_discount
  padding: 5px 10px
  color: white
  background: #baa78b
  font-family: "SFProDisplay-Semibold", sans-serif
  font-weight: bold
  font-size: 12px
  line-height: 12px
  letter-spacing: 1px
.apart
  &__images
    margin-top: 36px
    &__left
      img
        width: 100%
        height: 490px
        object-fit: cover
    &__right
      img
        width: 100%
        height: 200px
        object-fit: cover
  &__hotel
    background: #F5F5F5
    border-radius: 4px
    padding: 35px 30px
    &__left
      &__head
        font-family: "SFProDisplay-Semibold", sans-serif
        color: #3B3B3B
        font-size: 32px
        line-height: 43px
        margin-bottom: 50px
      &__description
        font-weight: 600
        color: #263238
        font-size: 16px
        line-height: 16px
        margin-bottom: 17px
      &__text
        color: #000000
        font-size: 14px
        line-height: 24px
    &__right
      &__buttons
        a
          border: 2px solid #BAA68B
          background: #3B3B3B
          padding: 15px 70px
          color: white
          font-weight: 500
          font-size: 14px
          line-height: 18px
        button
          border: none
          color: #000000
          font-size: 14px
          line-height: 18px
          .icon
            margin-right: 10px
      &__about
        margin-top: 35px
        &__price
          color: #3B3B3B
          font-size: 32px
          line-height: 43px
          font-weight: bold
        &__head
          color: #BCBBBB
          font-size: 15px
          line-height: 20px
          font-weight: 500
          margin: 0
        &__text
          margin-top: 0
          margin-bottom: 10px
          color: #3B3B3B
          font-size: 16px
          line-height: 26px
      &__conv
        margin-top: 38px
        &__head
          color: #3B3B3B
          font-size: 16px
          line-height: 20px
          font-weight: 700
          margin-bottom: 22px
          font-family: "SFProDisplay-Semibold", sans-serif
        .uk-grid>.uk-grid-margin
          margin-top: 20px
        &__item
          p
            color: #263238
            font-size: 14px
            line-height: 24px
            margin: 0
            img
              margin-right: 10px
      &__showAll
        margin-top: 35px
        .uk-button.uk-button-default
          width: 100%
          border: 1px solid #BAA68B
          text-transform: none
          padding: 14px
          color: #000000
          font-size: 14px
          line-height: 24px
  &__like
    margin-top: 67px
    img
      width: 100%
      height: 242px
      object-fit: cover
    &__about
      padding: 35px
      &__name
        font-size: 25px
        line-height: 38px
        color: white
        font-weight: bold
      .uk-position-bottom
        padding: 35px
        text-align: right
        a
          font-weight: 500
          font-size: 17px
          line-height: 17px
          color: white
          transition: 0.3s
          i
            margin-left: 10px
          &:hover
            text-decoration: none
            color: white
@media screen and (max-width: 700px)
  .uk-slideshow-items
    min-height: 500px !important
    img
      height: 500px
      object-fit: cover
  .apart
    &__hotel
      &__right
        &__buttons
          .uk-flex
            display: block
            text-align: center
          button
            &:last-child
              padding: 15px 50px
        &__about
          .uk-flex
            display: block
            text-align: center
</style>
