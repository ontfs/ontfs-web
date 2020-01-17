<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: true
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
    }
  },
  mounted() {
    if (this.isPC) {
      setTimeout(() => {
        this.isshow = false
      }, 1500)
    } else {
      this.isshow = false
    }
    ;(function(doc, win) {
      var docEl = doc.documentElement,
        resizeEvt =
          'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
          var clientWidth = docEl.clientWidth > 750 ? 750 : docEl.clientWidth

          if (!clientWidth) {
            return
          }

          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
        }

      recalc()

      if (!doc.addEventListener) return

      win.addEventListener(resizeEvt, recalc, false)

      doc.addEventListener('DOMContentLoaded', recalc, false)
    })(document, window)
  }
}
</script>

<style lang="less">
html {
  background: #fff;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .loading {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .icons {
      width: 80px;
      height: 80px;
      background: url(./assets/images/loading.svg) no-repeat;
      background-size: contain;
      animation: spin ease-in-out 1.5s 10;
      transform-origin: center;
    }
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.fade-enter-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.el-dialog__wrapper {
  .el-dialog {
    width: 11.6rem !important;
    .el-dialog__header {
      padding: 0.5rem 0.5rem 0.3rem;
      text-align: left;
      display: flex;
      justify-content: space-between;
      background: rgba(250, 250, 250, 1);
      .el-dialog__title {
        font-size: 0.42rem;
        font-family: Graphik-Semibold;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        line-height: 0.46rem;
        text-align: left;
      }
      .el-dialog__headerbtn {
        position: relative;
        width: 0.26rem;
        height: 0.46rem;
        top: 0px;
        right: 0px;
      }
    }
    .el-dialog__body {
      padding: 0px 0.5rem 0.4rem;
      background: rgba(250, 250, 250, 1);
      .apply-wrapper {
        display: flex;
        flex-flow: column;
        text-align: left;
        .desc {
          font-size: 0.16rem;
          font-family: Graphik-Regular;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 0.24rem;
          padding-bottom: 0.3rem;
        }
        .item {
          font-size: 0.16rem;
          font-family: Graphik-Regular;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 0.24rem;
        }
      }
    }
    .el-dialog__footer {
      padding: 0.5rem;
      display: flex;
      flex-flow: column;
      text-align: left;
      .desc {
        font-size: 0.14rem;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 0.16rem;
        padding-bottom: 10px;
      }
      input {
        width: 100%;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #f2f2f2;
      }
      .apply-btn {
        margin-top: 0.4rem;
        cursor: pointer;
        font-size: 0.16rem;
        font-family: Graphik-Semibold;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 0.56rem;
        width: 185px;
        height: 0.56rem;
        text-align: center;
        background-color: #000;
        transition: all ease 0.5s;
      }
      .apply-btn:hover {
        background-color: rgba(0, 0, 0, 0.6);
        color: rgba(255, 255, 255, 1);
        transition: all ease 0.5s;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1200px) {
  .el-dialog__wrapper .el-dialog {
    width: 568px !important;
  }
}
@media only screen and (max-width: 767px) {
  .container {
    padding: 0 20px;
  }
  .el-dialog__wrapper {
    .el-dialog {
      min-width: 320px;
      width: 90% !important;
      .el-dialog__header {
        padding: 50px 50px 30px;
        text-align: left;
        display: flex;
        justify-content: space-between;
        background: rgba(250, 250, 250, 1);
        .el-dialog__title {
          font-size: 32px;
          font-family: Graphik-Semibold;
          font-weight: 600;
          color: rgba(0, 0, 0, 1);
          line-height: 36px;
          text-align: left;
        }
        .el-dialog__headerbtn {
          position: relative;
          width: 29px;
          height: 46px;
          top: 0px;
          right: 0px;
        }
      }
    }
  }
}
</style>
