<template>
  <div class="home">
    <div class="iconbox">
      <i></i>
    </div>
    <div class="pcLogo"></div>
    <div class="logo_title">
      <h1>Ontology File Service Client</h1>
    </div>
    <div class="download_box">
      <div
        :class="isPC ? 'media_btn hoveraction' : 'media_btn'"
        @click="openNewPage(windowLink)"
      >
        <img src="../assets/images/windows.svg" alt />
      </div>
      <div
        :class="isPC ? 'media_btn ml21 hoveraction' : 'media_btn ml21'"
        @click="openNewPage(macLink)"
      >
        <img src="../assets/images/macicon.svg" alt />
      </div>
      <div
        :class="isPC ? 'media_btn ml21 hoveraction' : 'media_btn ml21'"
        @click="openNewPage(linuxLink)"
      >
        <img src="../assets/images/linux.svg" alt />
      </div>
    </div>
    <!-- <div class="doc_link" @click="openNewPage(docUrl)">
        Click here to see API Documenation
      </div> -->
    <div class="doc_link" @click="openNewPage(demoUrl)">
      Visit our interactive demo showcase of ONTFS!
    </div>
    <div class="doc_link explorer_btn" @click="openNewPage(explorerUrl)">
      ONTFS Explorer
    </div>
    <!-- <div class="down_btn hover1"></div> -->
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      flag: true,
      windowLink: 'http://128.1.40.44:13000/ontfs-client-windows-amd64.exe',
      macLink: 'http://128.1.40.44:13000/ontfs-client-darwin-amd64.zip',
      linuxLink: 'http://128.1.40.44:13000/ontfs-client-linux-amd64.zip',
      weixin: {
        youshangjiao: 'Click here',
        openinexplorer: 'Open from browser'
      },
      isWeiXinShow: false,
      demoUrl: 'http://demo.ontfs.io',
      docUrl: 'https://github.com/ontfs/documentation',
      explorerUrl: 'http://explorer.ontfs.io/'
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

  position: relative;
  .pcLogo {
    width: 1.36rem;
    height: 0.3rem;
    position: absolute;
    left: 2.4rem;
    top: 0.8rem;
    background: #fff;
    background: url(../assets/images/ontfslogo.svg) no-repeat center;
    background-size: cover;
  }
  .iconbox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 56px;
    background: #0e0e0e;
    display: none;
    i {
      display: block;
      width: 20px;
      height: 20px;
      background: url(../assets/images/smalllogow.svg) no-repeat;
      background-size: contain;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .logo_title {
    width: 100%;
    max-width: 820px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    h1 {
      font-family: samsungsharpsans-bold, 'PingFang SC', 'Microsoft Yahei',
        Helvetica Neue, Helvetica, Arial, sans-serif;
      text-align: center;
      font-size: 0.6rem;
      font-weight: 900;
      line-height: 0.8rem;
      color: #fff;
    }
  }
  .sub_title {
    text-align: center;
    font-size: 0.22rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    line-height: 0.25rem;
    margin-top: 0.3rem;
  }
  .download_box {
    margin-top: 0.6rem;
    display: flex;
    justify-content: center;
    .media_btn {
      width: 1.32rem;
      height: 0.42rem;
      cursor: pointer;
      transition: all 0.5s;
      opacity: 0.9;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .media_btn.hoveraction:hover {
      opacity: 1;
    }
    .apkbtn {
      display: none;
    }

    .ml21 {
      margin-left: 0.2rem;
    }
  }
  .doc_link {
    margin: 0 auto;
    font-size: 0.14rem;
    margin-top: 0.3rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 0.2rem;
    cursor: pointer;
    text-decoration: underline;
    transition: all 0.5s;
    text-align: center;
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
  .down_btn {
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    right: 50%;
    bottom: 0.6rem;
    transform: translateX(50%);
    background: url(../assets/images/shubiao.svg) no-repeat center;
    background-size: contain;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
}
.explorer_btn {
  color: #eee !important;
}
@media only screen and (max-width: 768px) {
  .home {
    .pcLogo {
      display: none;
    }
    .iconbox {
      display: block;
    }
    .logo_title {
      h1 {
        font-size: 0.5rem;
        line-height: 0.7rem;
      }
    }
    .download_box {
      margin-top: 1rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .media_btn {
        margin-left: 0;
        width: 2.6rem;
        height: 0.8rem;
        margin-bottom: 0.6rem;
      }
    }
    .doc_link {
      font-size: 0.3rem;
      padding: 0 0.8rem;
      line-height: 0.5rem;
    }
    .down_btn {
      width: 0.6rem;
      height: 0.6rem;
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      bottom: 0.6rem;
    }
  }
}
</style>
