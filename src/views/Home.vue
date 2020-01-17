<template>
  <div class="home_wrap">
    <swiper :options="swiperOption">
      <swiper-slide class="s_item"> <MainScr-div></MainScr-div></swiper-slide>
      <swiper-slide class="s_item"
        ><Developer-div></Developer-div
      ></swiper-slide>
      <swiper-slide class="s_item"><Footer-div></Footer-div></swiper-slide>
    </swiper>
    <div class="down_btn"></div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import MainScrDiv from '@/components/MainScr'
import DeveloperDiv from '@/components/Developer'
import FooterDiv from '@/components/Footer'

export default {
  name: 'home',
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        height: document.documentElement.clientHeight,
        observeParents: true,
        mousewheelControl: true
      }
    }
  },
  methods: {
    fadeIn: function() {
      $('#qrcode_d')
        .stop(false, true)
        .fadeIn()
    },
    fadeLeave: function() {
      $('#qrcode_d')
        .stop(false, true)
        .hide()
    },
    openNewPage(url) {
      window.open(url, '_blank')
    },
    openNewPageAp() {
      let width = document.documentElement.clientWidth
      if (width < 640) {
        this.$router.push({ name: 'Download' })
      } else {
        this.openNewPage(
          'https://apps.apple.com/us/app/onto-an-ontology-dapp/id1436009823'
        )
      }
    },
    openNewPageAd() {
      if (this.isWeiXin) {
        this.isWeiXinShow = true
      } else {
        this.openNewPage(this.andapkUrl)
      }
    },
    turnShow(ele) {
      $('html, body').animate(
        {
          scrollTop: $(ele).offset().top + 'px'
        },
        {
          duration: 500,
          easing: 'swing'
        }
      )
      return false
    }
  },
  computed: {
    isPC() {
      if (
        navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
      ) {
        return false
      } else {
        return true
      }
    },
    isWeiXin: function() {
      var ua = navigator.userAgent.toLowerCase()
      var isWeixin = ua.indexOf('micromessenger') != -1
      if (isWeixin) {
        // document.body.style.overflow = "hidden";
        document.body.classList.add('hidden')
        return true
      } else {
        // document.body.style.overflow = "auto";
        document.body.classList.remove('hidden')
        return false
      }
    }
  },
  components: { DeveloperDiv, FooterDiv, MainScrDiv, swiper, swiperSlide }
}
</script>

<style lang="less" scoped>
body.hidden {
  overflow: hidden;
}
.home_wrap {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url(../assets/images/fs_bg.png) no-repeat center;
  background-size: cover;
  position: relative;
  .down_btn {
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    right: 50%;
    bottom: 0.6rem;
    transform: translateX(50%);
    background: url(../assets/images/shubiao.svg) no-repeat center;
    background-size: contain;
    z-index: 9;
  }
}
@media only screen and (max-width: 768px) {
  .home_wrap {
    .down_btn {
      width: 0.8rem;
      height: 0.8rem;
      bottom: 0.6rem;
    }
  }
}
</style>
