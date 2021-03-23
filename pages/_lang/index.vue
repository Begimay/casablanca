<template>
  <div class="main">
    <div class="uk-grid uk-grid-collapse main__block uk-grid-match" uk-grid>
      <div class="uk-width-auto uk-visible@s">
        <div class="main__block__left">
          <nuxt-link :to="$i18n.path('')" class="main__block__left__logo">
            <img src="@/assets/img/logo.svg" alt="">
          </nuxt-link>
          <div class="main__block__left__socials">
            <a href="https://www.booking.com/hotel/kg/casablanca-apart-bishkek.ru.html?aid=898224&app_hotel_id=6475861&checkin=2020-11-18&checkout=2020-11-19&from_sn=ios&group_adults=2&group_children=0&label=Share-nbXG1t%401605704619&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA%2C" class="booking" target="_blank">
              <img src="@/assets/img/booking.png" alt="">
            </a>
            <a href="https://instagram.com/casablanca.apart.hotel?igshid=idc96q8c7xok" target="_blank">
              <img src="@/assets/img/instagram-side.svg" alt="">
            </a>
            <a href="https://www.facebook.com/107814787627312/" target="_blank">
              <img src="@/assets/img/fb.svg" alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="uk-width-expand@s uk-width-1-1">
        <div class="main__banner"
             :style="{'background-image': `url(${main.main_block.image_url})`}">
          <div class="header" id="header">
            <div>
              <div class="uk-container uk-container-xlarge">
                <nav class="uk-navbar-container" uk-navbar style="position: relative; z-index: 980;">
                  <div class="uk-navbar-left uk-visible@m">
                    <ul class="uk-navbar-nav">
                      <li>
                        <nuxt-link :to="$i18n.path('apart-hotel')"
                                   :class="{'header__pages': true , 'header__active': ($route.path === $i18n.path('apart-hotel'))}"
                        >
                          {{ $t('header.apart_hotel')}}
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link :to="$i18n.path('apartments')"
                                   :class="{'header__pages': true , 'header__active': ($route.path === $i18n.path('apartments'))}"
                        >
                          {{ $t('header.apartments')}}
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link :to="$i18n.path('impressions')"
                                   :class="{'header__pages': true , 'header__active': ($route.path === $i18n.path('impressions'))}"
                        >
                          {{ $t('header.impressions')}}
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link :to="$i18n.path('spa')"
                                   :class="{'header__pages': true , 'header__active': ($route.path === $i18n.path('spa'))}"
                        >
                          {{ $t('header.spa')}}
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link :to="$i18n.path('overview')"
                                   :class="{'header__pages': true , 'header__active': ($route.path === $i18n.path('overview'))}"
                        >
                          {{ $t('header.overview')}}
                        </nuxt-link>
                      </li>
                    </ul>
                  </div>
                  <div class="uk-navbar-left uk-hidden@m">
                    <ul class="uk-navbar-nav">
                      <li>
                        <nuxt-link :to="$i18n.path('')" class="header__logo">
                          <img src="@/assets/img/logo.svg" alt="">
                        </nuxt-link>
                      </li>
                    </ul>
                  </div>
                  <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav">
                      <li class="uk-visible@m">
                        <nuxt-link :to="$i18n.path('favourites')"
                                   :class="{'header__pages': true , 'header__active': ($route.path === $i18n.path('favourites'))}"
                        >
                          <img src="@/assets/img/heart.svg" alt="">
                          {{ $t('header.favourites')}}
                        </nuxt-link>
                      </li>
                      <li>
                        <a href="" class="header__money" uk-toggle>
                          <span v-show="$store.state.currency == 'usd'">$</span>
                          <span v-show="$store.state.currency == 'som'" style="text-decoration: underline">C</span>
                        </a>
                        <div uk-dropdown="mode: click" class="header__money__dropdown">
                          <ul class="uk-nav uk-dropdown-nav">
                            <li class="uk-active" @click="changeCurrency('usd')"><a href="#">$</a></li>
                            <li @click="changeCurrency('som')"><a href="#" class="header__money__som">C</a></li>
                          </ul>
                        </div>
                      </li>
                      <li class="header__locales__left uk-visible@s" @click="sayHello">
                        <nuxt-link :class="{'header__sectors__links': true, 'disabled': (this.$i18n.locale === 'en')}"
                                   :to="$route.fullPath.replace(/^\/[^\/]+/, '')">EN
                        </nuxt-link>
                      </li>
                      <li class="header__locales__divider uk-visible@s">
                        <a>|</a>
                      </li>
                      <li class="header__locales__right uk-visible@s">
                        <nuxt-link v-show="this.$i18n.locale === 'en'" :class="{'header__sectors__links': true, 'disabled': (this.$i18n.locale === 'ru')}"
                                   :to="'/ru' + $route.fullPath">RU
                        </nuxt-link>
                        <nuxt-link v-show="this.$i18n.locale !== 'en'" :class="{'header__sectors__links': true, 'disabled': (this.$i18n.locale === 'ru')}"
                                   :to="'/ru' + $route.fullPath.replace(/^\/[^\/]+/, '')">RU
                        </nuxt-link>
                      </li>
                    </ul>
                    <div class="mobile uk-hidden@m">
                      <button class="uk-button uk-button-default" style="width: 50px; height: 41px;"><i uk-icon="icon: menu"></i></button>
                      <div uk-dropdown="mode: click; pos: bottom-right">
                        <ul class="uk-nav uk-dropdown-nav">
                          <li>
                            <nuxt-link :to="$i18n.path('apart-hotel')"
                                       :class="{'header__pages': true , 'header__active': ($route.path === '/apart-hotel')}"
                            >
                              {{ $t('header.apart_hotel')}}
                            </nuxt-link>
                          </li>
                          <li class="uk-nav-divider"></li>
                          <li>
                            <nuxt-link :to="$i18n.path('apartments')"
                                       :class="{'header__pages': true , 'header__active': ($route.path === '/apartments')}"
                            >
                              {{ $t('header.apartments')}}
                            </nuxt-link>
                          </li>
                          <li class="uk-nav-divider"></li>
                          <li>
                            <nuxt-link :to="$i18n.path('impressions')"
                                       :class="{'header__pages': true , 'header__active': ($route.path === '/impressions')}"
                            >
                              {{ $t('header.impressions')}}
                            </nuxt-link>
                          </li>
                          <li class="uk-nav-divider"></li>
                          <li>
                            <nuxt-link :to="$i18n.path('spa')"
                                       :class="{'header__pages': true , 'header__active': ($route.path === '/spa')}"
                            >
                              {{ $t('header.spa')}}
                            </nuxt-link>
                          </li>
                          <li class="uk-nav-divider"></li>
                          <li>
                            <nuxt-link :to="$i18n.path('overview')"
                                       :class="{'header__pages': true , 'header__active': ($route.path === '/overview')}"
                            >
                              {{ $t('header.overview')}}
                            </nuxt-link>
                          </li>
                          <li class="uk-nav-divider"></li>
                          <li>
                            <nuxt-link :to="$i18n.path('favourites')"
                                       :class="{'header__pages': true , 'header__active': ($route.path === '/favourites')}"
                            >
                              <img src="@/assets/img/heart.svg" alt="">
                              {{ $t('header.favourites')}}
                            </nuxt-link>
                          </li>
                          <li class="uk-nav-divider"></li>
                          <li class="header__locales__left">
                            <nuxt-link :class="{'header__sectors__links': true, 'disabled': (this.$i18n.locale === 'en')}"
                                       :to="$route.fullPath.replace(/^\/[^\/]+/, '')">EN
                            </nuxt-link>
                            <a>|</a>
                            <nuxt-link v-show="this.$i18n.locale === 'en'"
                                       :class="{'header__sectors__links': true, 'disabled': (this.$i18n.locale === 'ru')}"
                                       :to="'/ru' + $route.fullPath">RU
                            </nuxt-link>
                            <nuxt-link v-show="this.$i18n.locale !== 'en'"
                                       :class="{'header__sectors__links': true, 'disabled': (this.$i18n.locale === 'ru')}"
                                       :to="'/ru' + $route.fullPath.replace(/^\/[^\/]+/, '')">RU
                            </nuxt-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div class="main__banner__logo">
            <img src="@/assets/img/big_logo.svg" alt="">
          </div>
          <div class="main__banner__footer">
            <div class="uk-container uk-container-large uk-flex uk-flex-between">
              <div>
                <p class="main__banner__footer__text">{{ main.main_block.description }}</p>
              </div>
              <div class="main__banner__footer__link">
                <a href="tel: +996555899864" class="main__banner__footer__link__phone uk-margin-small-bottom">
                  <img src="@/assets/img/phone.svg" alt="">
                  {{ main.contacts.phone_number }}
                </a>
                <a href="mailto: casablancaapartkg@gmail.com" class="main__banner__footer__link__mail">
                  <img src="@/assets/img/mail.svg" alt="">
                  {{ main.contacts.email }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main__bg" :style="{'background-image': 'url(' + require('@/assets/img/bg_main.png') + ')'}">
      <div class="uk-container uk-container-large">
        <div class="main__bg__services">
          <div class="uk-grid uk-child-width-1-4@s uk-child-width-1-2" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .uk-inline; delay: 500; repeat: false">
            <nuxt-link :to="$i18n.path('apart-hotel')">
              <div class="uk-inline">
                <img :src="main.blocks[0].image_url" alt="">
                <div class="uk-position-bottom uk-overlay uk-overlay-default uk-text-left">
                  <p class="main__bg__services__head">{{ main.blocks[0].title }} <span uk-icon="chevron-double-right" class="uk-hidden@s" /></p>
                  <p class="main__bg__services__text uk-visible@s">{{ main.blocks[0].description }}</p>
                </div>
              </div>
            </nuxt-link>
            <nuxt-link :to="$i18n.path('apartments')">
              <div class="uk-inline">
                <img :src="main.blocks[1].image_url" alt="">
                <div class="uk-position-bottom uk-overlay uk-overlay-default uk-text-left">
                  <p class="main__bg__services__head">{{ main.blocks[1].title }} <span uk-icon="chevron-double-right" class="uk-hidden@s" /></p>
                  <p class="main__bg__services__text uk-visible@s">{{ main.blocks[1].description }}</p>
                </div>
              </div>
            </nuxt-link>
            <nuxt-link :to="$i18n.path('spa')">
              <div class="uk-inline">
                <img :src="main.blocks[2].image_url" alt="">
                <div class="uk-position-bottom uk-overlay uk-overlay-default uk-text-left">
                  <p class="main__bg__services__head">{{ main.blocks[2].title }} <span uk-icon="chevron-double-right" class="uk-hidden@s" /></p>
                  <p class="main__bg__services__text uk-visible@s">{{ main.blocks[2].description }}</p>
                </div>
              </div>
            </nuxt-link>
            <nuxt-link :to="$i18n.path('overview')">
              <div class="uk-inline">
                <img :src="main.blocks[3].image_url" alt="">
                <div class="uk-position-bottom uk-overlay uk-overlay-default uk-text-left">
                  <p class="main__bg__services__head">{{ main.blocks[3].title }} <span uk-icon="chevron-double-right" class="uk-hidden@s" /></p>
                  <p class="main__bg__services__text uk-visible@s">{{ main.blocks[3].description }}</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="main__bg__about" uk-scrollspy="cls: uk-animation-slide-bottom; delay: 1000; repeat: false">
          <div class="uk-grid uk-child-width-1-2@s uk-flex-middle" uk-grid>
            <div>
              <video autoplay muted loop>
                <source :src="main.video.video_url">
              </video>
            </div>
            <div>
              <div class="main__bg__about__text">
                <p class="main__bg__about__text__head">{{ main.video.title }}</p>
                <p class="main__bg__about__text__description">{{ main.video.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="main__bg__booking" uk-scrollspy="cls: uk-animation-slide-bottom; delay: 1000; repeat: false">
          <div class="uk-flex uk-flex-between uk-flex-middle">
            <div>
              <p>
                <img src="@/assets/img/logo-white.svg" alt="">
                {{ $t('main.booking.head')}}
              </p>
            </div>
            <div>
              <a href="#form" class="uk-button uk-button-default" uk-scroll>{{ $t('main.booking.link')}}</a>
            </div>
          </div>
        </div>
        <div class="main__bg__gallery">
          <div class="uk-grid-small uk-grid-match" uk-grid>
            <div class="uk-width-2-3@s first-block-img1">
              <img :src="main.main_image_1" alt="">
            </div>
            <div class="uk-width-1-3@s first-block-img2">
              <img :src="main.main_image_2" alt="">
            </div>
            <div class="uk-width-1-3@s two-image uk-visible@s">
              <div>
                <img :src="main.main_image_3" alt="">
              </div>
              <div>
                <img :src="main.main_image_4" alt="">
              </div>
            </div>
            <div class="uk-width-1-3@s one-image uk-visible@s">
              <img :src="main.main_image_5" alt="">
            </div>

            <div class="uk-width-1-3@s two-image uk-visible@s">
              <div>
                <img :src="main.main_image_6" alt="">
              </div>
              <div>
                <img :src="main.main_image_7" alt="">
              </div>
            </div>
          </div>
          <a href="#full_gallery" class="uk-button uk-button-default main__bg__gallery__button" uk-toggle>{{
            $t('main.gallery.more')}}</a>
          <div id="full_gallery" class="uk-modal-full" uk-modal>
            <div class="uk-modal-dialog">
              <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
              <div class="slideshow">
                <div uk-slider>
                  <div class="uk-position-relative">
                    <div class="uk-slider-container uk-light">
                      <ul class="uk-slider-items uk-child-width-1-1">
                        <li v-for="(slide, key) in main.gallery" :key="key">
                          <img :src="slide.image_url" alt="">
                        </li>
                      </ul>
                    </div>
                    <div class="uk-light">
                      <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous
                         uk-slider-item="previous"></a>
                      <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next
                         uk-slider-item="next"></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal_bottom uk-slider-container">
                <div class="uk-flex uk-flex-between">
                  <p>CASABLANCA</p>
<!--                  <p>2 | {{ main.gallery.length }}</p>-->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main__bg__contacts" uk-scrollspy="cls: uk-animation-slide-bottom; delay: 1000; repeat: false">
          <div class="uk-grid uk-child-width-1-2@s uk-grid-collapse uk-grid-match" uk-grid>
            <div>
              <div class="map">
                <div id="map" style="width: 100%; height: 400px;" />
                <div class="main__bg__contacts__list">
                  <p class="main__bg__contacts__list__head">{{ $t('main.contacts.head')}}</p>
                  <div>
                    <a href="">
                      <img src="@/assets/img/home.svg" alt=""> {{ main.contacts.address }}
                    </a>
                  </div>
                  <div>
                    <a href="tel: +996555899864">
                      <img src="@/assets/img/phone-white.svg" alt=""> {{ main.contacts.phone_number }}
                    </a>
                  </div>
                  <div>
                    <a href="mailto: casablancaapartkg@gmail.com">
                      <img src="@/assets/img/mail-white.svg" alt=""> {{ main.contacts.email }}
                    </a>
                  </div>
                  <div>
                    <a href="https://www.facebook.com/107814787627312/">
                      <img src="@/assets/img/facebook.svg" alt=""> <!--{{ main.contacts.fb }}-->facebook
                    </a>
                  </div>
                  <div>
                    <a href="https://instagram.com/casablanca.apart.hotel?igshid=idc96q8c7xok">
                      <img src="@/assets/img/instagram.svg" alt=""> <!--{{ main.contacts.igm }}-->instagram
                    </a>
                  </div>
                  <div>
                    <a href="https://www.booking.com/hotel/kg/casablanca-apart-bishkek.ru.html?aid=898224&app_hotel_id=6475861&checkin=2020-11-18&checkout=2020-11-19&from_sn=ios&group_adults=2&group_children=0&label=Share-nbXG1t%401605704619&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA%2C" class="booking" target="_blank">
                      <img src="@/assets/img/booking-white.png" alt="" class="booking-link">booking.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="main__bg__contacts__book" id="form">
                <p class="main__bg__contacts__book__bookHead">{{ $t('main.contacts.bookHead')}}</p>
                <form @submit.prevent="sendMessage">
                  <div class="uk-margin">
                    <input type="text" class="uk-input uk-input-default" v-model="name"
                           :placeholder="$t('main.contacts.name')" required>
                  </div>
                  <div class="uk-margin">
                    <input type="text" class="uk-input uk-input-default" v-model="email"
                           :placeholder="$t('main.contacts.phone')" required>
                  </div>
                  <div class="uk-margin">
                    <textarea class="uk-textarea" rows="5" v-model="message" :placeholder="$t('main.contacts.message')"
                              required/>
                  </div>
                  <div class="uk-margin uk-text-right">
                    <button class="uk-button uk-button-default" type="submit">{{ $t('main.contacts.send')}}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Main',
    async asyncData({$axios}) {
      return await $axios.get('/main/')
        .then(response => {
          let main = response.data
          return {
            main
          }
        })
    },
    data() {
      return {
        email: '',
        name: '',
        message: ''
      }
    },
    methods: {
      sendMessage() {
        this.$axios.post('/main/application/', {
          email: this.email,
          name: this.name,
          message: this.message
        })
          .then(() => {
            alert('Your message has been sent successfully')
          })
          .catch(err => {
            console.log(err)
          })
      },
      sayHello() {
        this.$forceUpdate()
      },
      changeCurrency(cur) {
        this.$store.commit('SET_CURRENCY', cur);
        this.$uikit.dropdown('.header__money__dropdown.uk-dropdown.uk-open').hide();
        location.reload()
      }
    },
    mounted() {
      DG.then(function () {
        let mapCasablanca = DG.map('map', {
          center: [42.81077, 74.578708],
          zoom: 17
        });

        DG.marker([42.81077, 74.578708]).addTo(mapCasablanca).bindPopup('Casablanca Apart Hotel');
      });
    }
  }
</script>

<style lang="sass" scoped>
  .booking
    margin-left: 4px
  .uk-light .uk-slidenav
    color: black !important
  .uk-dropdown.uk-open
    a
      color: black !important
  .uk-modal-full .uk-modal-dialog
    height: 100vh
  .uk-modal.uk-open
    .uk-slider
      padding-top: 135px
      text-align: center
      img
        width: 450px
        height: 650px
        object-fit: cover
    .modal_bottom
      margin-top: 50px
      padding: 0 145px
      p
        color: black
        font-size: 14px
        line-height: 15px
  .header
    background: transparent
    nav.uk-navbar-container
      background: transparent
      a
        min-height: 100px
        color: white
        font-weight: bold
        font-family: "SFProDisplay-Semibold", sans-serif
    &__logo
      padding: 10px
      img
        width: 30px
        height: 50px
    &__money
      span
        border: 1px solid #BAA68B
        padding: 20px 15px
        color: white
      &__dropdown.uk-dropdown.uk-open
        min-width: 60px
        a
          color: black
          min-height: auto !important
      &__som
        color: black
        text-transform: uppercase
        text-decoration: underline
    &__locales
      &__divider
        a
          padding: 0
          color: #BAA68B !important
      &__left
        a
          padding-right: 5px !important
      &__right
        a
          padding-left: 5px !important
    &__pages
      font-weight: bold
      font-size: 12px
      line-height: 15px
      letter-spacing: 1.5px
      img
        width: 19px
        height: 16px
        margin-right: 10px
    &__active
      position: relative
      &:before
        position: absolute
        content: ''
        bottom: 30px
        left: 14px
        width: 30px
        height: 4px
        background: #BAA68B
  .main
    &__block
      &__left
        background: #3B3B3B
        padding: 15px 25px
        position: relative
        &__logo
          width: 30px
          height: 50px
        &__socials
          position: absolute
          bottom: 8rem
          a
            display: block
            margin-bottom: 15px
            &:last-child
              margin-bottom: 0
            img
              width: 32px
              height: 32px
    &__banner
      height: 100vh
      background-size: cover
      background-repeat: no-repeat
      position: relative
      &__logo
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
      &__footer
        position: absolute
        bottom: 8rem
        width: 100%
        &__text
          font-family: "SFProDisplay-Semibold", sans-serif
          font-size: 20px
          line-height: 24px
          letter-spacing: 0.8px
          width: 406px
          text-align: left
          color: white
          margin: 0
        &__link
          text-align: right
          a
            font-family: "SFProDisplay-Semibold", sans-serif
            font-size: 18px
            line-height: 16px
            letter-spacing: 0.72px
            color: white
            border-bottom: 1px solid transparent
            transition: 0.3s
            display: block
            &:hover
              text-decoration: none
              border-color: white
            img
              margin-right: 10px
    &__bg
      background-repeat: no-repeat
      background-position: 0px 30rem
      &__services
        margin-top: 80px
        .uk-overlay.uk-overlay-default
          background: rgba(0, 0, 0, 0)
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.72) 100%)
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#000000', GradientType=0)
        img
          width: 100%
          height: 500px
          object-fit: cover
        &__head
          color: white
          font-family: "SFProDisplay-Semibold", sans-serif
          font-size: 24px
          line-height: 32px
          letter-spacing: 0.48px
          margin-bottom: 8px
        &__text
          margin: 0
          color: white
          font-size: 14px
          line-height: 18px
      &__about
        margin-top: 80px
        &__img
          img
            width: 100%
            height: 788px
        &__text
          &__head
            font-size: 38px
            line-height: 51px
            letter-spacing: 0.76px
            margin: 0
          &__description
            margin-top: 8px
            font-size: 18px
            line-height: 24px
            letter-spacing: 0.36px
            color: #626262
      &__booking
        margin-top: 80px
        background: #3B3B3B
        padding: 30px 0
        p
          margin: 0
          color: white
          text-transform: capitalize
          font-family: "SFProDisplay-Semibold", sans-serif
          font-size: 30px
          line-height: 38px
          letter-spacing: 0.6px
          img
            background: #BAA68B
            padding: 40px 34px
            margin-right: 50px
        a
          color: white
          margin-right: 110px
          border-radius: 2px
          padding: 15px 80px
          font-family: "SFProDisplay-Semibold", sans-serif
          font-size: 14px
          line-height: 25px
          letter-spacing: 1.17px
      &__gallery
        margin-top: 80px
        position: relative
        &__button.uk-button.uk-button-default
          /*position: absolute*/
          margin-top: 15px
          display: block
          width: 100%
          padding: 14px
          bottom: 0
          color: white
          font-size: 14px
          line-height: 25px
          letter-spacing: 1.17px
          font-family: "SFProDisplay-Semibold", sans-serif
          background: #BAA68B
          border: none
        img
          object-fit: cover
          border-radius: 10px
        .first-block-img1
          img
            width: 100%
            height: 450px
        .first-block-img2
          img
            width: 100%
            height: 450px
        .two-image
          div
            margin-bottom: 15px
            &:last-child
              margin-bottom: 0
            img
              width: 100%
              height: 221px
        .one-image
          img
            width: 100%
            height: 457px
            object-fit: cover
      &__contacts
        margin-top: 60px
        &__list
          background: #BAA88B
          padding: 32px 46px
          &__head
            margin-left: 20px
            color: white
            font-size: 32px
            line-height: 22px
            letter-spacing: 0.64px
            font-family: "SFProDisplay-Semibold", sans-serif
            margin-bottom: 28px
          div
            margin-bottom: 20px
            &:last-child
              margin-bottom: 0
            a
              color: white
              transition: 0.3s
              text-transform: uppercase
              font-size: 14px
              line-height: 23px
              letter-spacing: 0.14px
              font-family: "SFProDisplay-Semibold", sans-serif
              &:hover
                text-decoration: none
                color: white
              img
                width: 22px
                height: 22px
                margin-right: 25px
              .booking-link
                width: 25px
                height: 25px
                margin-left: -4px
        &__book
          background: #3B3B3B
          padding: 90px 78px
          &__bookHead
            font-size: 32px
            line-height: 40px
            letter-spacing: 0.64px
            color: white
            font-family: "SFProDisplay-Semibold", sans-serif
            margin-bottom: 100px
            /*text-transform: capitalize*/
          &__formHead
            font-size: 16px
            line-height: 30px
            color: white
            margin-bottom: 30px
          .uk-input.uk-input-default, .uk-textarea
            border: none
            border-bottom: 1px solid white
            color: white
            font-size: 14px
            line-height: 14px
            background: transparent
          .uk-button.uk-button-default
            margin-top: 30px
            border: 2px solid #BAA78B
            border-radius: 2px
            padding: 13px 80px
            color: white
            font-family: "SFProDisplay-Semibold", sans-serif
  @media screen and (max-width: 960px)
    .header
      &__active
        &:before
          background: transparent
      nav.uk-navbar-container
        .uk-dropdown.uk-open
          a
            color: black
            min-height: auto
            text-align: center
      .mobile
        margin-left: 1rem
        button.uk-button.uk-button-default
          border: 1px solid #BAA68B
          color: white
          padding: 0 15px
    .main
      &__block
        &__left
          padding: 25px 25px
          &__socials
            bottom: 3rem
      &__banner
        &__footer
          bottom: 1.7rem
      &__bg
        &__services
        .uk-overlay.uk-overlay-default
          padding: 10px
        &__about
          &__img
            img
              height: 400px
              object-fit: cover
        &__booking
          a
            margin-right: 35px
  @media screen and (max-width: 700px)
    .header
      nav.uk-navbar-container
        a
          font-weight: 500
          padding: 0
      &__money
        span
          padding: 9px 20px
          color: white
          margin-top: 0
      &__locales
        &__left
          text-align: center
          a
            display: inline
    .main
      &__banner
        background-color: rgba(0, 0, 0, 0.4)
        &:before
          content: ''
          position: absolute
          left: 0
          right: 0
          background: rgba(0, 0, 0, 0.3)
          top: 0
          bottom: 0
        &__logo
          width: 300px
        &__footer
          .uk-flex.uk-flex-between
            display: block
          &__text
            width: auto
            font-size: 16px
            line-height: 25px
            text-align: center
            margin-bottom: 200px
          &__link
            margin-top: 20px
            text-align: left
            a
              font-size: 15px
              img
                margin-right: 5px
                width: 15px
      &__bg
        &__services
          margin-top: 30px
          img
            height: 300px
            filter: grayscale(45%)
          &__text
            color: white
            font-family: "SFProDisplay-Semibold", sans-serif
            font-size: 12px
            line-height: 20px
            letter-spacing: 0.48px
          &__head
            color: white
            font-family: "SFProDisplay-Semibold", sans-serif
            font-size: 18px
            line-height: 42px
            letter-spacing: 0.48px
            font-weight: 700
        &__about
          margin-top: 30px
          &__text
            &__head
              font-size: 28px
              line-height: 35px
              text-align: center
            &__description
              font-size: 14px
              line-height: 20px
              text-align: center
        &__booking
          padding: 20px 0 20px 0
          margin-top: 30px
          .uk-flex
            display: block
          p
            font-size: 18px
            line-height: 30px
            text-align: center
            img
              padding: 12px
              margin-right: 10px
              display: none
          a
            padding: 10px 15px
            width: 70%
            margin: 20px 1rem 0 4rem
            text-align: center
        &__gallery
          margin-top: 30px
          img
            height: 200px !important
          &__button.uk-button.uk-button-default
            padding: 10px
        &__contacts
          margin-top: 30px
          &__list
            padding: 20px
            div
              margin-bottom: 10px
            &__head
              font-size: 30px
              line-height: 20px
            div
              a
                font-size: 12px
                line-height: 22px
                img
                  width: 15px
                  height: 15px
                  margin-right: 10px
          &__book
            padding: 30px
            .uk-button.uk-button-default
              margin-top: 10px
              padding: 0 20px
            form
              .uk-margin
                margin-bottom: 0
            &__bookHead
              font-size: 20px
              line-height: 40px
              margin-bottom: 30px
    #map
      height: 200px !important
</style>
