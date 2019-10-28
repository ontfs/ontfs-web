<template>
  <div class="home">
    <div class="logo_title">
      <h1></h1>
    </div>
    <div class="sub_title">Self-sovereign Identity & Personal Claims Tool</div>
    <div class="download_box">
      <div class="media_btn">
        <img src="../assets/images/apple.png" alt />
      </div>
      <div class="media_btn ml21">
        <img src="../assets/images/google.png" alt />
      </div>
      <div class="qrcode_box ml21" @mouseenter="flag && fadeIn()" @mouseleave="flag && fadeLeave()">
        <img class="s_code_img" src="../assets/images/qrcode.png" alt />
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
  .logo_title {
    // width: 778px;
    height: 73px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      width: 778px;
      background: url(../assets/images/logo_bg.png) no-repeat;
      background-size: contain;
      height: 73px;
    }
  }
  .sub_title {
    text-align: center;
    height: 25px;
    font-size: 22px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    line-height: 25px;
    margin-top: 30px;
  }
  .download_box {
    margin-top: 50px;
    height: 41px;
    display: flex;
    justify-content: center;

    .media_btn {
      width: 127px;
      height: 41px;
      cursor: pointer;
      transition: all 0.5s;
      img {
        width: 100%;
      }
      &:hover {
        opacity: 0.8;
      }
    }
    .qrcode_box {
      width: 41px;
      height: 41px;
      cursor: pointer;
      position: relative;
      .s_code_img {
        width: 100%;
      }
    }
    .qrcode {
      position: absolute;
      left: -122%;
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
      margin-left: 21px;
    }
  }
}
@media only screen and (max-width: 767px) {
  .home {
    .logo_title {
      height: 34px;
      h1 {
        height: 34px;
        width: 310px;
      }
    }
    .sub_title {
      font-size: 15px;
      margin-top: 16px;
    }
    .download_box {
      margin-top: 25px;
      .qrcode_box {
        display: none;
      }
      .media_btn {
        width: 120px;
      }
      .ml21 {
        margin-left: 16px;
      }
    }
  }
}
</style>

