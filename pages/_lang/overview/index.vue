<template>
  <div class="overview">
    <Header />
    <div class="uk-container uk-container-large">
      <p class="overview__head">{{ $t('header.overview')}}</p>
      <div class="overview__block">
        <img :src="overview.main_block.image_url" alt="">
        <div class="uk-container">
          <p class="overview__block__head">{{ overview.main_block.title }}</p>
          <p class="overview__block__text" v-html="overview.main_block.description" />
          <div class="overview__block__values">
            <p class="overview__block__values__head">{{ $t('overview.values')}}</p>
            <div class="uk-grid uk-child-width-1-2@s uk-grid-match" uk-grid>
              <div>
                <div class="overview__block__values__item">
                  <p v-for="(value, key) in overview.our_values_block.values" :key="key">{{ value }}</p>
                </div>
              </div>
              <div>
                <div class="overview__block__values__item">
                  <div>
                    <img :src="overview.our_values_block.image_1" alt="">
                    <img :src="overview.our_values_block.image_2" alt="">
                  </div>
                  <div>
                    <img :src="overview.our_values_block.image_3" alt="">
                    <img :src="overview.our_values_block.image_4" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="overview__block__slider">
          <div class="uk-grid uk-child-width-1-2@s uk-grid-match" uk-grid>
            <div>
              <div class="overview__block__slider__left">
                <p class="overview__block__slider__left__text">{{ overview.slider_block.description }}</p>
                <div class="uk-grid uk-child-width-1-2" uk-grid>
                  <div v-for="(feature, key) in overview.slider_block.features" :key="key">
                    <p class="overview__block__slider__left__list">{{ feature }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="overview__block__slider__right">
                <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>
                  <ul class="uk-slideshow-items">
                    <li v-for="(slide, key) in overview.slider_block.gallery" :key="key">
                      <img :src="slide.image_url" alt="" uk-cover>
                    </li>
                  </ul>
                  <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                  <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="overview__block__location">
          <div class="uk-container">
            <p class="overview__block__location__head">{{ $t('overview.location')}}</p>
            <div class="uk-grid uk-child-width-1-2@s" uk-grid>
              <div>
                <div class="overview__block__location__item">
                  <p>{{ overview.location_block.description_1 }}</p>
                </div>
              </div>
              <div>
                <div class="overview__block__location__item">
                  <p>{{ overview.location_block.description_2 }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="overview__map">
        <div class="uk-container">
          <!--<div style="position:relative;overflow:hidden;"><a
            href="https://yandex.ru/maps/10309/bishkek/?utm_medium=mapframe&utm_source=maps"
            style="color:#eee;font-size:12px;position:absolute;top:0px;">Бишкек</a><a
            href="https://yandex.ru/maps/10309/bishkek/house/Y00Ycw9hTEUDQFpofXRwcHlqZQ==/?ll=74.581247%2C42.811565&utm_medium=mapframe&utm_source=maps&z=17.8"
            style="color:#eee;font-size:12px;position:absolute;top:14px;">Улица Самойленко, 7 — Яндекс.Карты</a>
            <iframe src="https://yandex.ru/map-widget/v1/-/CCUAZJfRSA" width="100%" height="400" frameborder="1"
                    allowfullscreen="true" style="position:relative;"></iframe>
          </div>-->
          <div id="map" style="width: 100%; height: 400px;" />
        </div>
      </div>
      <div class="overview__loyality">
        <div class="uk-grid uk-child-width-1-2@s uk-flex-middle" uk-grid>
          <div>
            <div class="overview__loyality__item">
              <p class="overview__loyality__item__head">{{ overview.last_block.title }}</p>
              <p class="overview__loyality__item__text">{{ overview.last_block.description }}</p>
            </div>
          </div>
          <div>
            <div class="overview__loyality__item">
              <img :src="overview.last_block.image_url" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header";

  export default {
    name: "overview",
    components: {
      Header
    },
    async asyncData({$axios}) {
      return await $axios.get('/about/')
        .then(response => {
          let overview = response.data
          return { overview }
        })
        .catch(err => {
          console.log(err)
        })
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
.uk-slideshow-items
  min-height: 572px !important
.overview
  &__head
    margin-top: 30px
    color: #3B3B3B
    font-size: 40px
    line-height: 53px
    font-family: "SFProDisplay-Semibold", sans-serif
    margin-bottom: 50px
  &__block
    background: #F5F5F5
    border-radius: 4px
    padding-bottom: 68px
    img
      width: 100%
      height: 320px
      object-fit: cover
    &__head
      text-align: center
      margin-top: 56px
      color: #131317
      font-size: 32px
      line-height: 40px
      letter-spacing: 0.64px
      font-family: "SFProDisplay-Semibold", sans-serif
    &__text
      margin-top: 30px
      font-size: 18px
      line-height: 30px
      color: #222222
    &__values
      margin-top: 72px
      &__head
        font-size: 24px
        line-height: 16px
        color: #263238
        font-family: "SFProDisplay-Semibold", sans-serif
        position: relative
        padding-bottom: 25px
        &:before
          position: absolute
          bottom: 0
          left: 0
          width: 126px
          height: 2px
          background: #BAA68B
          content: ''
          border-radius: 1.5px
      &__item
        p
          font-size: 24px
          line-height: 36px
          color: #222222
          font-weight: 500
          margin-bottom: 40px
          &:last-child
            margin-bottom: 0
        div:first-child
          margin-bottom: 17px
        img:first-child
          width: 179px
          height: 172px
          margin-right: 15px
        img:last-child
          width: 374px
          height: 172px
    &__slider
      margin-top: 200px
      background: #3B3B3B
      &__left
        padding: 140px 88px 74px
        &__text
          font-size: 20px
          line-height: 36px
          color: #ffffff
          font-weight: 500
          margin-bottom: 42px
        &__list
          font-size: 18px
          line-height: 16px
          color: white
    &__location
      margin-top: 83px
      &__head
        font-size: 24px
        line-height: 46px
        font-family: "SFProDisplay-Semibold", sans-serif
        margin-bottom: 40px
        color: #222222
      &__item
        p
          font-size: 18px
          line-height: 32px
          color: #222222
  &__map
    margin: 80px 0
  &__loyality
    padding: 90px 0
    background: #F5F5F5
    border-radius: 4px
    &__item
      p
        padding-left: 100px
      &__head
        font-family: "SFProDisplay-Semibold", sans-serif
        font-size: 24px
        line-height: 46px
        color: #222222
      &__text
        font-size: 16px
        line-height: 32px
        color: #222222
      img
        width: 100%
        height: 640px
@media screen and (max-width: 960px)
  .uk-container
    padding: 0 2rem
  .overview
    &__block
      &__values
        &__item
          img:first-child
            width: 100px
            height: 100px
          img:last-child
            height: 100px
            width: 274px
          p
            font-size: 18px
            line-height: 28px
            margin-bottom: 10px
        &__slider
          margin-top: 100px
      &__slider
        &__left
          padding: 80px 30px 30px
    &__loyality
      padding: 40px 0
      &__item
        p
          padding-left: 50px
        img
          object-fit: cover
@media screen and (max-width: 700px)
  .uk-slideshow-items
    min-height: 350px !important
  .overview
    &__block
      &__head
        margin-top: 30px
        font-size: 30px
        line-height: 40px
      &__text
        margin-top: 15px
        font-size: 16px
        line-height: 26px
      &__values
        margin-top: 35px
        &__head
          font-size: 20px
        &__item
          img:first-child
            width: 70px
          img:last-child
            width: 155px
      &__slider
        margin-top: 100px
        &__left
          &__list
            line-height: 24px
    &__loyality
      padding: 40px 0 0 0
      &__item
        p
          padding: 0 1rem
        img
          height: 300px
</style>
