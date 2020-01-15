<template>
  <div class="footer_wrap">
    <div class="main_title">Apply for ONTFS Test Net tokens</div>
    <!-- <div class="main_desc">
      If you need ONT&ONG for TestNet, please apply here.
    </div> -->
    <div class="apply_btn hover1" @click="goApply()">Apply here</div>
    <div class="line"><i></i></div>
    <div class="rights">© 2018 - 2020 Ontology. All rights reserved</div>

    <el-dialog
      title="ONTFS Test Net Token Application"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <div class="apply-wrapper">
        <div class="desc">
          You will receive the following Test Net tokens instantly (you can only
          initiate one application per address):
        </div>
        <div class="item">Limit: 50 Test Net tokens per application</div>
        <!-- <div class="item">{{$t('ONGApplication.applyMultiChain')}}</div>
        <div class="item">{{$t('ONGApplication.applySharding')}}</div> -->
      </div>
      <span slot="footer" class="dialog-footer">
        <div class="desc">Test Net Address:</div>
        <input v-model="testaddress" id="input-address" />
        <div class="apply-btn" @click="onSubmit()">Apply</div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
export default {
  data() {
    return {
      dialogVisible: false,
      testaddress: ''
    }
  },
  methods: {
    handleClose(done) {
      this.dialogVisible = false
    },
    goApply() {
      this.dialogVisible = true
      //在对话框先创建后才能使其focus
      setTimeout(() => {
        $('#input-address').focus()
      })
    },
    onSubmit() {
      if (this.testaddress) {
        const address = this.testaddress.trim()
        if (address.length !== 34 || address[0] !== 'A') {
          this.$alert('', 'Invalid TestNet address.', {
            confirmButtonText: 'Confirm',
            callback: action => {}
          })
          return
        }
        const url = 'https://ont.io/api/v1/asset/transfer/' + address
        let data = {
          addr: this.testaddress
        }
        axios
          .post('http://128.1.40.243:10665/transfer', data, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
            console.log(res)
            let mgs = 'Application successful!'
            if (res.data.code !== 0) {
              mgs = res.data.mgs
            }
            /* this.$confirm('Application successful!') */
            this.$alert('', mgs, {
              confirmButtonText: 'Confirm',
              callback: action => {
                this.testaddress = ''
                this.dialogVisible = false
              }
            })
          })
          .catch(err => {
            let errMsg = 'Network Error!'
            // console.log('err', err.response)
            const data = err.response && err.response.data
            if (data && data.msg) {
              errMsg = data.msg
            }
            this.$alert('', errMsg, {
              confirmButtonText: 'Confirm',
              callback: action => {}
            })
          })
      } else {
        this.$alert('', 'Invalid TestNet address.', {
          confirmButtonText: 'Confirm',
          callback: action => {}
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.footer_wrap {
  height: 100vh;
  background: rgba(250, 250, 250, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.main_title {
  font-family: samsungsharpsans-bold;
  font-size: 0.4rem;
  text-align: center;
}
.main_desc {
  margin: 0.3rem 0 0.8rem;
  font-size: 0.16rem;
  color: rgba(0, 0, 0, 0.6);
  line-height: 0.22rem;
}
.apply_btn {
  margin-top: 0.8rem;
  width: 2.2rem;
  height: 0.6rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.06rem;
  border: 0.02rem solid rgba(0, 0, 0, 1);
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.54rem;
  cursor: pointer;
  &:hover {
    background: #000;
    color: #fff;
  }
}
.line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1.13rem;
  width: 100%;
  i {
    width: 100%;
    display: block;
    max-width: 1280px;
    height: 1px;
    background: #f2f2f2;
    margin: 0 auto;
  }
}
.rights {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0.5rem;
  font-size: 0.12rem;
  color: rgba(0, 0, 0, 0.3);
}
/deep/.el-dialog {
  display: flex;
  flex-direction: column;
  margin: 0 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/deep/.el-dialog .el-dialog__body {
  flex: 1;
  overflow: auto;
}

/deep/ .el-dialog__header {
  padding: 0.5rem 0.5rem 0.3rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  background: rgba(250, 250, 250, 1);
}
/deep/ .el-dialog__title {
  font-size: 0.42rem;
  font-family: Graphik-Semibold;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  line-height: 0.56rem;
  text-align: left;
}
/deep/ .el-dialog__headerbtn {
  position: relative;
  width: 0.29rem;
  height: 0.46rem;
  top: 0px;
  right: 0px;
}
/deep/ .el-dialog__footer {
  padding: 0.5rem;
  display: flex;
  flex-flow: column;
  text-align: left;
  .desc {
    font-size: 0.14rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    line-height: 0.16rem;
    padding-bottom: 0.1rem;
    text-align: left;
  }
}
/deep/ .el-dialog__body {
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
.footer_wrap {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  padding: 1.2rem 0;
  color: rgba(0, 0, 0, 1);
  .cent_box {
    text-align: center;
    .main_title {
      font-size: 0.26rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      line-height: 0.3rem;
      padding-bottom: 0.3rem;
    }
    .main_desc {
      max-width: 90.6rem;
      margin: 0 auto;
      font-size: 0.14rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.6);
      line-height: 0.2rem;
      padding-bottom: 0.6rem;
    }
    .applybtn {
      cursor: pointer;
      border-radius: 1px;
      border: 2px solid #f2f2f2;
      font-size: 0.14rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      line-height: 0.54rem;
      width: 2.2rem;
      height: 0.54rem;
      transition: all ease 0.5s;
      margin: auto;
    }
    .applybtn:hover {
      border-radius: 1px;
      border: 2px solid rgba(0, 0, 0, 1);
      background-color: rgba(0, 0, 0, 1);
      font-size: 0.14rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 0.54rem;
      width: 2.2rem;
      height: 0.54rem;
      transition: all ease 0.5s;
    }
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
  /deep/ .el-dialog__wrapper {
    /deep/ .el-dialog {
      width: 11.6rem !important;
      /deep/ .el-dialog__header {
        padding: 0.5rem 0.5rem 0.3rem;
        text-align: left;
        display: flex;
        justify-content: space-between;
        background: rgba(250, 250, 250, 1);
        .el-dialog__title {
          font-size: 42px;
          font-family: Graphik-Semibold;
          font-weight: 600;
          color: rgba(0, 0, 0, 1);
          line-height: 46px;
          text-align: left;
        }
        /deep/ .el-dialog__headerbtn {
          position: relative;
          width: 29px;
          height: 46px;
          top: 0px;
          right: 0px;
        }
      }
      /deep/ .el-dialog__body {
        padding: 0px 0.5rem 40px;
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
      .el-dialog__body {
        padding: 0px 0.5rem 40px;
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
      /deep/ .el-dialog__footer {
        padding: 0.5rem;
        display: flex;
        flex-flow: column;
        text-align: left;
        .desc {
          font-size: 0.14rem;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 0.16rem;
          padding-bottom: 0.1rem;
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
          width: 1.85rem;
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
          padding-bottom: 0.1rem;
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
          width: 1.85rem;
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
}
.hidenone {
  visibility: hidden;
}

@media only screen and (max-width: 768px) {
  .footer_wrap {
    height: auto;
    padding: 3rem 0 0.6rem !important;
    .main_title {
      padding: 0 1.3rem;
      font-size: 0.5rem;
      line-height: 0.63rem;
    }
    .main_desc {
      margin: 0.9rem 0;
      padding: 0 0.75rem;
      font-size: 0.3rem;
      line-height: 0.42rem;
      text-align: center;
    }
  }
  .apply_btn {
    margin-bottom: 3.48rem;
    width: 3rem;
    height: 0.9rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.06rem;
    border: 0.02rem solid rgba(0, 0, 0, 1);
    line-height: 0.86rem;
    font-size: 0.3rem;
  }
  .line {
    padding: 0 0.2rem;
    bottom: 1.47rem;
  }
  .rights {
    font-size: 0.24rem;
    width: 100%;
    text-align: center;
    bottom: 0.6rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1200px) {
  /deep/ .el-dialog {
    width: 568px;
  }
  /deep/ .el-dialog__header {
    padding: 50px 50px 30px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    background: rgba(250, 250, 250, 1);
  }
  /deep/ .el-dialog__title {
    font-size: 32px;
    font-family: Graphik-Semibold;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    line-height: 36px;
    text-align: left;
  }
  /deep/ .el-dialog__headerbtn {
    position: relative;
    width: 29px;
    height: 46px;
    top: 0px;
    right: 0px;
  }
  /deep/ .el-dialog__footer {
    padding: 50px;
    display: flex;
    flex-flow: column;
    text-align: left;
    .desc {
      font-size: 14px;
      font-family: Roboto-Regular;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      line-height: 16px;
      padding-bottom: 10px;
      text-align: left;
    }
  }
  /deep/ .el-dialog__body {
    padding: 0px 50px 40px;
    background: rgba(250, 250, 250, 1);
    .apply-wrapper {
      display: flex;
      flex-flow: column;
      text-align: left;
      .desc {
        font-size: 16px;
        font-family: Graphik-Regular;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 24px;
        padding-bottom: 30px;
      }
      .item {
        font-size: 16px;
        font-family: Graphik-Regular;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 24px;
      }
    }
  }
  .footer_wrap {
    .cent_box {
      .desc_box {
        .sub_task {
          .sub_title {
            height: 50px;
          }
          .sub_title_desc {
            height: 144px;
          }
        }
      }
    }
    /deep/ .el-dialog__wrapper {
      /deep/ .el-dialog {
        width: 768px !important;
      }
    }
    .el-dialog__wrapper {
      .el-dialog {
        width: 768px !important;
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  /deep/ .el-dialog {
    width: 90%;
    margin: auto;
  }
  /deep/ .el-dialog__header {
    padding: 50px 50px 30px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    background: rgba(250, 250, 250, 1);
  }
  /deep/ .el-dialog__title {
    font-size: 32px;
    font-family: Graphik-Semibold;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    line-height: 36px;
    text-align: left;
  }
  /deep/ .el-dialog__headerbtn {
    position: relative;
    width: 29px;
    height: 46px;
    top: 0px;
    right: 0px;
  }
  /deep/ .el-dialog__footer {
    padding: 50px;
    display: flex;
    flex-flow: column;
    text-align: left;
    .desc {
      font-size: 14px;
      font-family: Roboto-Regular;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      line-height: 16px;
      padding-bottom: 10px;
      text-align: left;
    }
  }
  /deep/ .el-dialog__body {
    padding: 0px 50px 40px;
    background: rgba(250, 250, 250, 1);
    .apply-wrapper {
      display: flex;
      flex-flow: column;
      text-align: left;
      .desc {
        font-size: 16px;
        font-family: Graphik-Regular;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 24px;
        padding-bottom: 30px;
      }
      .item {
        font-size: 16px;
        font-family: Graphik-Regular;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 24px;
      }
    }
  }
  .footer_wrap {
    padding: 40px 0 50px;
    .cent_box {
      .main_title {
        font-size: 20px;
      }
      .desc_box {
        .sub_task {
          width: 100%;
          border: none !important;
          margin-bottom: 80px;
          .top_img {
            width: 80px;
            height: 80px;
            // background: #fff;
          }
          .sub_title {
            font-size: 18px;
            margin: 20px 0;
          }
          .sub_title_desc {
            font-size: 12px;
            padding: 0 20px;
            height: 90px;
          }
          .to_more {
            margin-top: 10px;
            a {
              font-size: 12px;
            }
          }
        }
        .sub_task:nth-of-type(3) {
          margin-bottom: 0;
        }
      }
    }
    /deep/ .el-dialog__wrapper {
      /deep/ .el-dialog {
        width: 90% !important;
        /deep/ .el-dialog__header {
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
          /deep/ .el-dialog__headerbtn {
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
  .container {
    padding: 0 20px;
  }
  .applyont_layout {
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
}
</style>
