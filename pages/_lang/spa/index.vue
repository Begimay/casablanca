<template>
  <div class="impressions">
    <Header />
    <div class="uk-container uk-container-large">
      <p class="impressions__head">{{ $t('header.spa')}}</p>
      <div class="impressions__block">
        <div class="impressions__block__first">
          <img :src="spa.main_block.image_url" alt="">
          <div class="uk-container uk-container-small">
            <p class="impressions__block__first__head">{{ spa.main_block.title }}</p>
            <p class="impressions__block__first__text">{{ spa.main_block.description }}</p>
          </div>
        </div>
        <div class="impressions__block__second">
          <div class="uk-container uk-container-small">
            <p class="impressions__block__second__head">{{ spa.blocks[0].title }}</p>
            <p class="impressions__block__second__text">{{ spa.blocks[0].description }}</p>
          </div>
        </div>
        <div class="impressions__block__second__gallery">
          <div class="uk-grid uk-grid-match" uk-grid>
            <div class="uk-width-1-3@s">
              <div>
                <img :src="spa.main_image_1" alt="" class="impressions__block__second__gallery__image1">
              </div>
            </div>
            <div class="uk-width-2-3@s">
              <div>
                <img :src="spa.main_image_2" alt="" class="impressions__block__second__gallery__image2">
                <div class="uk-grid uk-grid-match uk-child-width-1-2@s impressions__block__second__gallery__lastImages" uk-grid>
                  <div>
                    <img :src="spa.main_image_3" alt="" class="impressions__block__second__gallery__image3">
                  </div>
                  <div>
                    <img :src="spa.main_image_4" alt="" class="impressions__block__second__gallery__image3">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="impressions__block__third">
          <div class="uk-container uk-container-small">
            <p class="impressions__block__third__head">{{ spa.blocks[1].title }}</p>
            <p class="impressions__block__third_text">{{ spa.blocks[1].description }}</p>
          </div>
        </div>
        <div class="impressions__block__fourth">
          <div class="uk-container">
            <div class="main__bg__booking">
              <div class="uk-flex uk-flex-between uk-flex-middle">
                <div>
                  <p>
                    <img src="@/assets/img/logo-white.svg" alt="">
                    {{ $t('spa.perfectPlace')}}
                  </p>
                </div>
                <div>
                  <a href="#scroll" class="uk-button uk-button-default" uk-scroll>{{ $t('main.booking.link')}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="impressions__block__fifth">
          <div class="uk-container uk-container-small">
            <p class="impressions__block__fifth__head">{{ spa.blocks[2].title }}</p>
            <p class="impressions__block__fifth__text">{{ spa.blocks[2].description }}</p>
          </div>
          <div class="uk-container">
            <div class="uk-grid uk-grid-small uk-grid-match uk-child-width-1-5@s" uk-grid>
              <div v-for="(slide, key) in spa.sliders" :key="key">
                <div class="uk-inline impressions__block__fifth__aboutMassage">
                  <img :src="slide.image_url" alt="">
                  <div class="uk-position-bottom uk-overlay uk-overlay-default uk-text-left">{{ slide.title }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="uk-container uk-container-small">
            <p id="scroll" class="impressions__block__fifth__last">{{ spa.footer_text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "impressions",
  components: {
    Header
  },
  async asyncData({$axios}) {
    return await $axios.get('/spa/')
      .then(response => {
        let spa = response.data
        return { spa }
      })
  }
}
</script>

<style lang="sass" scoped>
.main
  &__bg
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
        border: 2px solid #BAA68B
.impressions
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
    &__first
      text-align: center
      img
        width: 100%
        height: 320px
        object-fit: cover
      &__head
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
    &__second
      margin-top: 50px
      &__head
        color: #131317
        font-size: 24px
        line-height: 40px
        letter-spacing: 0.48px
        font-family: "SFProDisplay-Semibold", sans-serif
      &__text
        margin-top: 30px
        font-size: 18px
        line-height: 30px
        color: #222222
      &__gallery
        margin-top: 20px
        img
          width: 100%
          object-fit: cover
        &__image1
          height: 660px
        &__image2
          height: 320px
        &__lastImages
          margin-top: 30px
          img
            width: 100%
            height: 310px
    &__third
      margin-top: 140px
      &__head
        font-family: "SFProDisplay-Semibold", sans-serif
        font-size: 24px
        line-height: 40px
        color: #131317
        letter-spacing: 0.48px
      &__text
        margin-top: 34px
        font-size: 18px
        line-height: 30px
        color: #222222
    &__fourth
      margin-top: 74px
    &__fifth
      margin-top: 70px
      &__head
        font-size: 24px
        line-height: 40px
        color: #131317
        font-family: "SFProDisplay-Semibold", sans-serif
      &__text
        margin-top: 34px
        font-size: 18px
        line-height: 30px
        color: #222222
      &__aboutMassage
        margin-top: 32px
        img
          width: 100%
          height: 209px
          object-fit: cover
        .uk-overlay.uk-overlay-default
          background: transparent
          color: white
          font-size: 18px
          line-height: 28px
          font-family: "SFProDisplay-Semibold", sans-serif
      &__last
        margin-top: 30px
        font-size: 24px
        line-height: 46px
        color: #222222
@media screen and (max-width: 960px)
  .uk-container.uk-container-small
    padding: 0 2rem
  .main
    &__bg
      &__booking
        a
          margin-right: 30px
          padding: 15px 40px
        p
          img
            margin-right: 10px
@media screen and (max-width: 700px)
  .impressions
    &__block
      &__first
        &__head
          margin-top: 30px
          font-size: 30px
          line-height: 40px
        &__text
          margin-top: 15px
          margin-bottom: 30px
          font-size: 16px
          line-height: 26px
      &__second
        margin-top: 25px
        &__text
          margin-top: 15px
        &__gallery
          img
            height: 200px
      &__third
        margin-top: 50px
  .main
    &__bg
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
</style>
