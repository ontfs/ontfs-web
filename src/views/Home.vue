<template>
  <div class="home">
    <div class="iconbox"></div>
    <div class="logo_title">
      <h1></h1>
    </div>
    <div class="sub_title">Self-sovereign Identity & Personal Claims Tool</div>
    <div class="download_box">
      <div
        :class="isPC ? 'media_btn hoveraction': 'media_btn'"
        @click="openNewPage('https://apps.apple.com/hk/app/ontology-authenticator/id1483309693')"
      >
        <img src="../assets/images/apple.svg" alt />
      </div>
      <div :class="isPC ? 'media_btn ml21 hoveraction': 'media_btn ml21'" @click="openNewPage()">
        <img src="../assets/images/google.svg" alt />
      </div>
      <div class="media_btn apkbtn" @click="openNewPage()">
        <img src="../assets/images/apkbtn.svg" alt />
      </div>
      <div class="qrcode_box ml21" @mouseenter="flag && fadeIn()" @mouseleave="flag && fadeLeave()">
        <img class="s_code_img" src="../assets/images/qrcode.svg" alt />
        <div class="qrcode" ref="qrcode_l" id="qrcode_d">
          <img src="../assets/images/qrcode.jpg" alt srcset />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'home',
  data() {
    return {
      flag: true
    }
  },
  methods: {
    fadeIn: function () {
      $('#qrcode_d').stop(false, true).fadeIn()
    },
    fadeLeave: function () {
      $('#qrcode_d').stop(false, true).hide()
    },
    openNewPage(url) {
      window.open(url)
    },
    openNewPageAp() {
      let width = document.documentElement.clientWidth
      if (width < 640) {
        this.$router.push({ name: 'Download' })
      } else {
        this.openNewPage('https://apps.apple.com/us/app/onto-an-ontology-dapp/id1436009823')
      }
    },
    openNewPageAd() {
      let width = document.documentElement.clientWidth
      if (width < 640) {
        this.$router.push({ name: 'Download' })
      } else {
        this.openNewPage('https://onto.app/android/ONTO.apk')
      }
    }
  },
  computed: {
    isPC() {
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  .iconbox {
    width: 60px;
    height: 60px;
    background: url(../assets/images/iconbg.svg) no-repeat;
    background-size: contain;
    margin: 0 auto;
    margin-bottom: 40px;
    display: none;
  }
  .logo_title {
    // width: 778px;
    height: 73px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      width: 778px;
      background: url(../assets/images/logo_bg.svg) no-repeat;
      background-size: contain;
      height: 73px;
    }
  }
  .sub_title {
    text-align: center;
    // height: 25px;
    font-size: 22px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    line-height: 25px;
    margin-top: 30px;
  }
  .download_box {
    margin-top: 50px;
    // height: 41px;
    display: flex;
    justify-content: center;

    .media_btn {
      width: 159px;
      height: 50px;
      cursor: pointer;
      transition: all 0.5s;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .media_btn.hoveraction:hover {
      background: #fafafa;
    }
    .apkbtn {
      display: none;
    }
    .qrcode_box {
      width: 50px;
      height: 50px;
      cursor: pointer;
      position: relative;
      transition: all 0.5s;
      &:hover {
        background: #fafafa;
      }
      .s_code_img {
        width: 100%;
      }
    }
    .qrcode {
      position: absolute;
      left: -88%;
      top: 130%;
      width: 140px;
      height: 140px;
      background: #fff;
      transform: translateX(4%);
      display: none;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 10px #ccc;
      // transition: all 1s;
      // opacity: 0;
      img {
        display: block;
        width: 120px;
        height: 120px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .ml21 {
      margin-left: 20px;
    }
  }
}
@media only screen and (max-width: 767px) {
  .home {
    transform: translateY(-20px);
    .iconbox {
      display: block;
    }
    .logo_title {
      height: 34px;
      h1 {
        height: 34px;
        width: 310px;
      }
    }
    .sub_title {
      font-size: 15px;
      margin: 0 auto;
      margin-top: 16px;
      width: 260px;
    }
    .download_box {
      margin: 0 auto;
      margin-top: 32px;
      width: 274px;
      justify-content: space-around;
      flex-wrap: wrap;
      // flex-direction: column;
      // align-items: center;
      .qrcode_box {
        display: none;
      }
      .media_btn {
        width: 130px;
        margin-bottom: 10px;
        img {
          height: auto;
        }
      }
      .apkbtn {
        display: block;
      }
      .ml21 {
        margin-left: 12px;
        // margin-top: 6px;
      }
    }
  }
}
</style>

