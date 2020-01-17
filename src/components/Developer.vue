<template>
  <div
    :class="!isPC ? 'developer_wrap wechat' : 'developer_wrap'"
    id="developer_wrap"
  >
    <div class="dev_layout">
      <div class="main_title colorB">
        Developer Center
      </div>
      <div class="item_box">
        <div class="item">
          <div class="sub_title colorB">Documentation</div>
          <div class="sub_desc ">
            Learn everything about ONTFS! For nerds like us who want to get
            their hands dirty.
          </div>
          <div
            @click="openNewPage(docsUrl)"
            class="doc_btn hover1 colorB"
          ></div>
        </div>
        <div class="item">
          <div class="sub_title colorB">GitHub</div>
          <div class="sub_desc ">
            Come check out our code and resources on GitHub!
          </div>
          <div @click="openNewPage(github)" class="doc_btn hover1 colorB"></div>
        </div>
      </div>
    </div>
    <!-- <div class="down_btn hover1"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      github: 'https://github.com/ontfs',
      docsUrl: 'https://docs.ontfs.io/'
    }
  },
  methods: {
    openNewPage(url) {
      window.open(url, '_blank')
    }
  },
  computed: {
    isPC: function() {
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
  }
}
</script>

<style lang="less" scoped>
.colorB {
  color: #fff;
}
.developer_wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .dev_layout {
    width: 100%;
    max-width: 1220px;
    .main_title {
      font-family: samsungsharpsans-bold, 'PingFang SC', 'Microsoft Yahei',
        Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 0.4rem;
      text-align: center;
    }
    .item_box {
      margin-top: 2.4rem;
      display: flex;
      justify-content: space-between;
    }
    .item {
      width: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .sub_title {
        font-size: 0.3rem;
        font-weight: 500;
        text-align: center;
      }
      .sub_desc {
        margin-top: 0.6rem;
        font-size: 0.16rem;
        text-align: center;
        color: rgba(255, 255, 255, 0.6);
        height: 0.66rem;
        line-height: 0.22rem;
      }
      .doc_btn {
        margin-top: 0.36rem;
        width: 0.6rem;
        height: 0.6rem;
        background: url(../assets/images/right_arrow.svg) no-repeat center;
        transform: rotate(-90deg);
        background-size: contain;
        font-size: 0.2rem;
        line-height: 0.46rem;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
.down_btn {
  width: 0.6rem;
  height: 0.6rem;
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
@media only screen and (max-width: 768px) {
  .developer_wrap {
    padding: 0 0.4rem;
    .dev_layout {
      .main_title {
        font-size: 0.5rem;
      }
      .item_box {
        margin-top: 0.6rem;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
      }
      .item {
        width: 100%;
        margin-top: 1.6rem;

        .sub_title {
          font-size: 0.4rem;
          margin-top: 0.3rem;
        }
        .sub_desc {
          padding: 0 0.3rem;
          font-size: 0.3rem;
          line-height: 0.42rem;
          height: 1.26rem;
        }
        .doc_btn {
          margin-top: 0.6rem;
          width: 1.4rem;
          height: 0.8rem;
        }
      }
    }
  }
}
@media only screen and (max-width: 330px) {
  .developer_wrap.wechat {
    padding: 0 0.4rem;
    .dev_layout {
      .main_title {
        font-size: 0.5rem;
      }
      .item_box {
        margin-top: 0.2rem;
      }
      .item {
        margin-top: 0.4rem;

        .sub_title {
          margin-top: 0.3rem;
        }
        .doc_btn {
          margin-top: 0.2rem;
        }
      }
    }
  }
}
@media only screen and (min-width: 330px) and (max-width: 380px) {
  .developer_wrap.wechat {
    padding: 0 0.4rem;
    .dev_layout {
      .main_title {
        font-size: 0.5rem;
      }
      .item_box {
        margin-top: 0.2rem;
      }
      .item {
        margin-top: 0.4rem;

        .sub_title {
          margin-top: 0.3rem;
        }
        .doc_btn {
          margin-top: 0.2rem;
        }
      }
    }
  }
}
@media only screen and (min-width: 380px) and (max-width: 450px) {
  .developer_wrap.wechat {
    padding: 0 0.4rem;
    .dev_layout {
      .main_title {
        font-size: 0.5rem;
      }
      .item_box {
        margin-top: 0.2rem;
      }
      .item {
        margin-top: 0.6rem;

        .sub_title {
          margin-top: 0.3rem;
        }
        .doc_btn {
          margin-top: 0.4rem;
        }
      }
    }
  }
}
@media only screen and (min-width: 1441px) and (max-width: 1680px) {
  .developer_wrap {
    .dev_layout {
      .main_title {
        margin-top: 0.2rem;
      }
      .item_box {
        margin-top: 0.2rem;
      }
      .item {
        margin-top: 0.6rem;

        .sub_title {
          margin-top: 0.3rem;
        }
        .doc_btn {
          margin-top: 0.4rem;
        }
      }
    }
  }
}

// @media only screen and (min-height: 750px) and (max-height: 808px) {
//   html body #app .wechat {
//     height: 808px !important;
//   }
// }
// @media only screen and (min-height: 951px) and (max-height: 1280px) {
//   html body #app .wechat {
//     height: 1024px !important;
//   }
// }
// @media only screen and (min-height: 1281px) {
//   html body #app .wechat {
//     height: 1366px !important;
//   }
// }
</style>
