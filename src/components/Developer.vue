<template>
  <div class="developer_wrap" id="developer_wrap">
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
  background: #000;
  .dev_layout {
    width: 100%;
    max-width: 1220px;
    .main_title {
      font-family: samsungsharpsans-bold;
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
@media only screen and (max-width: 768px) {
  .developer_wrap {
    height: auto;
    padding: 3.5rem 0.4rem 3.5rem;
    .dev_layout {
      .main_title {
        font-size: 0.5rem;
      }
      .item_box {
        margin-top: 1.4rem;
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
          margin-top: 1.4rem;
          width: 1.4rem;
          height: 0.8rem;
        }
      }
    }
  }
}
</style>
