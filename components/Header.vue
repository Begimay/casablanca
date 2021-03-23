<template>
  <div class="header" id="header">
    <div uk-sticky>
      <nav class="uk-navbar-container" uk-navbar style="position: relative; z-index: 980;">
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li>
              <nuxt-link :to="$i18n.path('')" class="header__logo">
                <img src="@/assets/img/logo.svg" alt="">
              </nuxt-link>
            </li>
            <li class="uk-visible@m">
              <nuxt-link :to="$i18n.path('apart-hotel')"
                         :class="{'header__pages': true , 'header__active': ($route.path === $i18n.path('apart-hotel'))}"
              >
                {{ $t('header.apart_hotel')}}
              </nuxt-link>
            </li>
            <li class="uk-visible@m">
              <nuxt-link :to="$i18n.path('apartments')"
                         :class="{'header__pages': true , 'header__active': ($route.path === $i18n.path('apartments'))}"
              >
                {{ $t('header.apartments')}}
              </nuxt-link>
            </li>
            <li class="uk-visible@m">
              <nuxt-link :to="$i18n.path('impressions')"
                         :class="{'header__pages': true , 'header__active': ($route.path === $i18n.path('impressions'))}"
              >
                {{ $t('header.impressions')}}
              </nuxt-link>
            </li>
            <li class="uk-visible@m">
              <nuxt-link :to="$i18n.path('spa')"
                         :class="{'header__pages': true , 'header__active': ($route.path === $i18n.path('spa'))}"
              >
                {{ $t('header.spa')}}
              </nuxt-link>
            </li>
            <li class="uk-visible@m">
              <nuxt-link :to="$i18n.path('overview')"
                         :class="{'header__pages': true , 'header__active': ($route.path === $i18n.path('overview'))}"
              >
                {{ $t('header.overview')}}
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
            <li class="header__locales__left uk-visible@s">
              <nuxt-link :class="{'header__sectors__links': true, 'disabled': (this.$i18n.locale === 'en')}"
                         :to="$route.fullPath.replace(/^\/[^\/]+/, '')">EN
              </nuxt-link>
            </li>
            <li class="header__locales__divider uk-visible@s">
              <a>|</a>
            </li>
            <li class="header__locales__right uk-visible@s">
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
          <div class="mobile uk-hidden@m">
            <button class="uk-button uk-button-default" style="width: 40px; height: 41px; padding: 0"><i uk-icon="icon: menu" /></button>
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
</template>

<script>
  export default {
    name: "Header",
    mounted() {
      this.$uikit.sticky('#header', {
        'sel-target': '.uk-navbar-container',
        'cls-active': 'uk-navbar-sticky',
        'bottom': '#transparent-sticky-navbar'
      });
    },
    methods: {
      changeCurrency(cur) {
        this.$uikit.dropdown('.header__money__dropdown.uk-dropdown.uk-open').hide();
        this.$store.commit('SET_CURRENCY', cur);
      }
    }
  }
</script>

<style lang="sass" scoped>
.uk-dropdown.uk-open
  a
    color: black !important
.uk-sticky-fixed
  background: #fff !important
.header
  background: transparent
  nav.uk-navbar-container
    background: transparent
    a
      min-height: 100px
  &__logo
    background: #3B3B3B
    padding: 25px
    margin-right: 60px
    img
      width: 30px
      height: 50px
  &__money
    span
      border: 1px solid #BAA68B
      padding: 20px 15px
      color: black
      width: 40px
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
    &__left
      a
        padding-right: 5px
    &__right
      padding-right: 81px
      a
        padding-left: 5px
  &__pages
    font-size: 12px
    line-height: 15px
    letter-spacing: 1.5px
    img
      width: 19px
      height: 16px
      margin-right: 10px
  &__active
    font-weight: bold
    position: relative
    &:before
      position: absolute
      content: ''
      bottom: 30px
      left: 14px
      width: 30px
      height: 4px
      background: #BAA68B
@media screen and (max-width: 960px)
  .header
    &__locales
      &__right
        padding-right: 0
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
      padding-right: 2rem
      margin-left: 1rem
      button.uk-button.uk-button-default
        border: 1px solid #BAA68B
        color: black
@media screen and (max-width: 700px)
  .header
    &__money
      span
        padding: 9px 15px
        margin-top: 0
    &__logo
      padding: 20px
    &__locales
      &__left
        text-align: center
        a
          display: inline
</style>
