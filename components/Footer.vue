<template>
  <div class="footer">
    <div class="uk-container uk-container-large">
      <div class="uk-grid uk-child-width-1-3@s uk-child-width-1-2 uk-grid-match" uk-grid>
        <div>
          <div class="first-link">
            <nuxt-link :to="$i18n.path('apart-hotel')"
                       :class="{'header__pages': true , 'header__active': ($route.path === '/apart-hotel')}"
            >
              {{ $t('header.apart_hotel')}}
            </nuxt-link>
            <nuxt-link :to="$i18n.path('apartments')"
                       :class="{'header__pages': true , 'header__active': ($route.path === '/apartments')}"
            >
              {{ $t('header.apartments')}}
            </nuxt-link>
            <nuxt-link :to="$i18n.path('impressions')"
                       :class="{'header__pages': true , 'header__active': ($route.path === '/impressions')}"
            >
              {{ $t('header.impressions')}}
            </nuxt-link>
            <nuxt-link :to="$i18n.path('overview')"
                       :class="{'header__pages': true , 'header__active': ($route.path === '/overview')}"
            >
              {{ $t('header.overview')}}
            </nuxt-link>
            <nuxt-link :to="$i18n.path('spa')"
                       :class="{'header__pages': true , 'header__active': ($route.path === '/spa')}"
            >
              {{ $t('header.spa')}}
            </nuxt-link>
          </div>
        </div>
        <div class="second-column">
          <div class="second-link">
            <div>
              <a href="">
                <img src="@/assets/img/home.svg" alt=""> {{ contacts.address }}
              </a>
            </div>
            <div>
              <a href="tel: +996555899864">
                <img src="@/assets/img/phone-white.svg" alt=""> {{ contacts.phone_number }}
              </a>
            </div>
            <div>
              <a href="mailto: casablancaapartkg@gmail.com">
                <img src="@/assets/img/mail-white.svg" alt=""> {{ contacts.email }}
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/107814787627312/">
                <img src="@/assets/img/facebook.svg" alt=""> <!--{{ contacts.fb }}-->facebook
              </a>
            </div>
            <div>
              <a href="https://instagram.com/casablanca.apart.hotel?igshid=idc96q8c7xok" target="_blank">
                <img src="@/assets/img/instagram.svg" alt=""> <!--{{ contacts.igm }}-->instagram
              </a>
            </div>
            <div>
              <a href="https://www.booking.com/hotel/kg/casablanca-apart-bishkek.ru.html?aid=898224&app_hotel_id=6475861&checkin=2020-11-18&checkout=2020-11-19&from_sn=ios&group_adults=2&group_children=0&label=Share-nbXG1t%401605704619&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA%2C" class="booking" target="_blank">
                <img src="@/assets/img/booking-white.png" alt="" class="booking-link">booking.com
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="third-link">
            <img src="@/assets/img/logo-footer.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="copyright uk-text-center">
      <img src="@/assets/img/logo-footer.svg" alt="" class="uk-hidden@s">
      <span>&copy; 2020 Casablanca</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        contacts: {}
      }
    },
    methods: {
      getContacts() {
        this.$axios.get('/main/contacts')
          .then(response => {
            this.contacts = response.data
          })
          .catch(err => {
            console.log(err.response.data.message)
          })
      }
    },
    created() {
      this.getContacts()
    }
  }
</script>

<style lang="sass" scoped>
.footer
  margin-top: 150px
  background: #3B3B3B
  padding: 49px 0 0 20px
  .first-link
    a
      display: block
      color: white
      font-family: "SFProDisplay-Semibold", sans-serif
      font-size: 24px
      line-height: 34px
      letter-spacing: 0.96px
      margin-bottom: 10px
      transition: 0.3s
      &:hover
        text-decoration: none
      &:last-child
        margin-bottom: 0
  .second-link
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
  .third-link
    img
      width: 100%
      height: 200px
  .copyright
    margin-top: 40px
    span
      color: white
      font-size: 12px
      line-height: 20px
@media screen and (max-width: 960px)
  .footer
    .first-link
      a
        font-size: 20px
        line-height: 30px
    .second-link
      div
        a
          font-size: 12px
          line-height: 12px
          img
            margin-right: 15px
            width: 15px
            height: 15px
    .third-link
      img
        height: 150px
@media screen and (max-width: 700px)
  .footer
    padding: 2rem 0
    margin-top: 30px
    .uk-first-column
      width: 35%
    .second-column
      width: 65%
    .first-link
      a
        font-size: 14px
        line-height: 24px
        margin-bottom: 10px
    .second-link
      div
        margin-bottom: 5px
        a
          font-size: 9px
          .booking-link
            width: 18px
            height: 18px
    .third-link
      display: none
    .copyright
      margin-top: 0
      display: flex
      align-items: flex-end
      img
        width: 15%
        margin-left: 15px
      span
        margin-left: 85px
</style>
