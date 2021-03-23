<template>
  <div class="impressions">
    <Header />
    <div class="uk-container uk-container-large">
      <p class="impressions__head">{{ $t('header.impressions')}}</p>
      <div class="impressions__block">
        <div class="impressions__block__first">
          <img :src="imp.main_block.image_url" alt="">
          <div class="uk-container uk-container-small">
            <p class="impressions__block__first__head">{{ imp.main_block.title }}</p>
            <p class="impressions__block__first__text">{{ imp.main_block.description }}</p>
            <div class="uk-grid uk-child-width-1-2@s uk-flex-middle" uk-grid>
              <div>
                <div class="impressions__block__first__item">
                  <p class="impressions__block__first__item__head">{{ imp.blocks[0].title }}</p>
                  <p class="impressions__block__first__item__text">{{ imp.blocks[0].description }}</p>
                </div>
              </div>
              <div>
                <div class="impressions__block__first__item">
                  <img :src="imp.blocks[0].image_url" alt="">
                </div>
              </div>
              <div>
                <div class="impressions__block__first__item">
                  <p class="impressions__block__first__item__head">{{ imp.blocks[1].title }}</p>
                  <p class="impressions__block__first__item__text">{{ imp.blocks[1].description }}</p>
                </div>
              </div>
              <div>
                <div class="impressions__block__first__item">
                  <img :src="imp.blocks[1].image_url" alt="">
                </div>
              </div>
            </div>
            <div class="impressions__block__first__divider">
              <img src="@/assets/img/spa_divider.png" alt="">
            </div>
            <div class="impressions__block__first__list">
              <div class="uk-grid" uk-grid v-for="(feature, key) in imp.features" :key="key" uk-scrollspy="cls: uk-animation-fade; target: div; delay: 500; repeat: false">
                <div class="uk-width-1-3@s">
                  <div class="impressions__block__first__list__item">
                    <p class="impressions__block__first__list__item__left">
                      <img :src="feature.icon" alt="">
                      {{ feature.main_title }}
                    </p>
                  </div>
                </div>
                <div class="uk-width-2-3@s">
                  <div class="impressions__block__first__list__item">
                    <p class="impressions__block__first__list__item__head">{{ feature.secondary_title }}</p>
                    <p class="impressions__block__first__list__item__text" v-html="feature.description" />
                  </div>
                </div>
              </div>
              <div class="impressions__block__first__list__bg">
                <img :src="imp.image_url" alt="">
              </div>
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
    name: 'impressions',
    components: {
      Header
    },
    async asyncData({$axios}) {
      return await $axios.get('/impressions/')
        .then(response => {
          let imp = response.data
          return { imp }
        })
    }
  }
</script>

<style lang="sass" scoped>
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
        margin-bottom: 60px
      &__item
        text-align: left
        &__head
          font-size: 22px
          line-height: 24px
          color: black
          font-family: "SFProDisplay-Semibold", sans-serif
          margin-bottom: 36px
        &__text
          font-size: 16px
          line-height: 24px
          color: black
        img
          width: 100%
          height: 211px
          object-fit: cover
      &__divider
        margin: 45px 0
        img
          width: 100%
          height: 64px
          object-fit: cover
      &__list
        &__item
          text-align: left
          &__left
            font-family: "SFProDisplay-Semibold", sans-serif
            font-size: 22px
            line-height: 22px
            color: black
            img
              margin-right: 10px
              width: 64px
              height: 31px
              object-fit: contain
          &__head
            position: relative
            font-size: 18px
            line-height: 30px
            color: black
            font-weight: bold
            font-family: "SFProDisplay-Semibold", sans-serif
          &__text
            margin-top: 24px
            font-size: 16px
            line-height: 24px
            color: black
        &__bg
          margin: 30px 0
          img
            width: 100%
            height: 391px
            object-fit: cover
@media screen and (max-width: 960px)
  .uk-container.uk-container-small
    padding: 0 2rem
@media screen and (max-width: 700px)
  .impressions
    &__block
      &__first
        &__divider
          margin: 30px 0
          img
            height: 30px
        &__head
          margin-top: 30px
          font-size: 30px
          line-height: 40px
        &__text
          margin-top: 15px
          margin-bottom: 30px
          font-size: 16px
          line-height: 26px
        &__item
          &__head
            font-size: 20px
            line-height: 22px
            margin-bottom: 15px
          img
            height: 150px
        &__list
          &__item
            &__left
              font-size: 20px
              line-height: 22px
          &__bg
            img
              height: 200px
</style>
