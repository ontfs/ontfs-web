<template>
  <div id="browser" style="z-index: 1;    background-repeat: no-repeat;background-size: 100%;">
        <!-- <mobilenav-div v-if="!isPC"></mobilenav-div> -->
        <div :class="isWeiXin?'container home-detail zindex9': 'container home-detail zindex'" v-if="!isPC">
<!--                         <div v-if="isWeiXin" class="weixin-wrapper">
                            <div id="weixin-notice">
                                <span id="top"></span>
                                <div style="display:flex">
                                    <img class ="weixin-img" src="../assets/images/download/open.svg" />
                                    <div class="weixin-text-wrapper">
                                        <div class="weixin-text">{{download.weixin.youshangjiao}}</div>
                                        <div class="weixin-text">{{download.weixin.openinexplorer}}</div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    <!-- <div class="col-sm-12 " style="padding:0;"> -->
                        <div class="img-wrapper">
                            <img class="img-wrapper-logo img-logo" src="../assets/images/download/logo.svg"/>
                        </div>
                        <img class="img-people" src="../assets/images/download/people.svg"/>
                        <div v-if="isIOS">
                            <div class="store-download">
                                <a class="no-underline" @click="downloadClick(appstoreurl,0,1)">
                                    <div class="store-wrapper">
                                        <img class="img-appstore" src="../assets/images/download/App Store.svg"/>
                                        <span class="font-store">{{download.ios.appstore}}</span>
                                    </div> 
                                </a>
                            </div>
                            <!-- <div class="now-download">
                                <a class="no-underline" @click="downloadClick(iosplist,0,0)">
                                    <div class="now-wrapper">
                                        <span class="font-now">{{download.ios.enterprise}}</span>
                                    </div>
                                </a>
                            </div> -->
                            <!-- <div class="ios-notice1">
                                <p class="ios-notice-text">{{download.ios.notice1}}</p>

                            </div>
                            <div class="ios-notice2">
                                <p class="ios-notice-text">{{download.ios.notice2}}</p>

                            </div>
                            <div class="cutoffwrapper">
                                <span class="ios-cutoff-text">{{download.ios.cutoff}}</span>

                            </div> -->
                            <!-- <div class="cutoffimgwrapper">
                                <img v-if="lang == 'cn'" class="cutoffimg" src="../assets/images/download/trust1.jpg"/>
                                <img v-else-if="lang == 'ko'" class="cutoffimg" src="../assets/images/download/trustko1.jpg"/>
                                <img v-else-if="lang == 'ja'" class="cutoffimg" src="../assets/images/download/trustja1.png"/>
                                <img v-else class="cutoffimg" src="../assets/images/download/trust1en.jpg"/>
                            </div>
                            <div class="cutoffimgwrapper">
                                <img v-if="lang == 'cn'" class="cutoffimg" src="../assets/images/download/trust2.jpg"/>
                                <img v-else-if="lang == 'ko'" class="cutoffimg" src="../assets/images/download/trustko2.jpg"/>
                                <img v-else-if="lang == 'ja'" class="cutoffimg" src="../assets/images/download/trustja2.jpg"/>
                                <img v-else class="cutoffimg" src="../assets/images/download/trust2en.jpg"/>
                            </div>
                            <div style="margin-top:35px;"></div> -->
                        </div>
                        <div v-if="isAndroid">
                            <div class="store-download">
                                <!-- <a class="no-underline" href="https://play.google.com/store/apps/details?id=com.github.ontio.onto"> -->
                                <a class="no-underline" @click="downloadClick(googleplayurl,1,1)">
                                    <div class="play-wrapper">
                                        <img class="img-appstore" src="../assets/images/download/Google Play.svg"/>
                                        <span class="font-store">{{download.android.googleplay}}</span>
                                    </div> 
                                </a>
                            </div>
                            <!-- <div class="now-download">
                                <a class="no-underline" @click="downloadClick(apkurl,1,0)" >
                                    <div class="now-wrapper">
                                        <span class="font-now">{{download.android.apk}}</span>
                                    </div>  
                                </a>
                            </div> -->
                        </div>
        </div>
        <div v-else>
            <div>{{download.pc.sorryMsg}}</div>
        </div>
    </div>
<!--     <Bottom></Bottom> -->
  <!-- </div> -->
</template>
<script src="node_modules/tinymce/tinymce.min.js"></script>
<script>  
//   import '../assets/ebro/css/site1.css'
//   import '../assets/ebro/css/navigation.css'
//   import '../assets/ebro/css/common.css'
//   import '../assets/ebro/css/homepage.css'
//   import https from '../https.js'
//   import mobilenavDiv from '@/components/MobileTopNav.vue'
//   import { mapGetters, mapActions } from 'vuex'
//   import Bottom from './appbottom.vue'
//   import Global from './Global.vue'
//   import Top from './head.vue'
/*   import VueTinymce from './vue-tinymce.vue'; */

  export default {
    mounted: function() {
        window.addEventListener('scroll', this.chooseId)
        if (window.history && window.history.pushState) {
            history.pushState(null, null, document.URL);
            window.addEventListener('popstate', this.goBack, false);
        }
    },
    computed: {
      isPC:function() {
            if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                return false
            }
            else {
                return true
            }
      },
      isAndroid:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
            if (isAndroid) {
                return true
            }else{
                return false
            }
      },
      isIOS:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            var iphone = u.indexOf("iphone");
            var ipad = u.indexOf("ipad");
            if (isIOS) {
        　　    return true
            }else{
                return false
            }
      },
      isWeiXin:function(){
            var ua = navigator.userAgent.toLowerCase();
        　　var isWeixin = ua.indexOf('micromessenger') != -1;
        　　if (isWeixin) {
                // document.body.style.overflow = "hidden";
                document.body.classList.add('hidden')
        　　    return true;
        　　}else{
                // document.body.style.overflow = "auto";
                document.body.classList.remove('hidden')
        　　    return false;      
        　　}
      }
    },
    created:function() {
        var params = this.$route.params
        this.getLanguage()
    },
    watch:{
    },
    methods: {
        getLanguage:function(){
            // var lang = this.$i18n.locale
            let lang = 'en'
            localStorage.setItem('user_lang', lang)
            // this.$i18n.locale = lang
            if(lang.indexOf('zh')>-1){
                this.download = this.cn
                this.lang = 'cn'
            }else if(lang.indexOf('en')>-1){
                this.download = this.en
                this.lang = 'en'
            }else if(lang.indexOf('ko')>-1){
                this.download = this.ko
                this.lang = 'ko'
            }else if(lang.indexOf('ja')>-1){
                this.download = this.ja
                this.lang = 'ja'
            } else {
                this.download = this.en
                this.lang = 'en'
            }
            
        },
        downloadClick:function($url,$os_type,$download_source){
            window.open($url, "_self")
            console.log("download",$url)
            console.log("download",$os_type)
            console.log("download",$download_source)
            let code = this.$route.params.code
            if(this.$route.params.code){   
                this.saveData($os_type,$download_source)
            }
        },
        saveData:function($saveos_type,$savedownload_source){
            console.log("save",$saveos_type)
            console.log("save",$savedownload_source)
            let reference_code = this.$route.params.code
            console.log("save",reference_code)
            let params ={'reference_code': reference_code, 'os_type': $saveos_type, 'download_source': $savedownload_source}
            https.fetchPost('/v1/onto_stat/refer-source',params ).then((data) => {

            }).catch(err=>{
                    console.log(err)
                }
            )
        },
        goBack:function(){
            document.body.classList.remove('hidden')
            this.$router.replace({path: '/'});
            //replace替换原路由，作用是避免回退死循环
        }
    },
    data:function() {
      return {
          lang:'en',
          download:{},
          appstoreurl:"https://itunes.apple.com/cn/app/onto-an-ontology-dapp/id1436009823?mt=8",
          iosplist:"itms-services://?action=download-manifest&url=https://onto.app/mainfest.plist",
          googleplayurl:"https://play.google.com/store/apps/details?id=com.github.ontio.onto",
          apkurl:"https://onto.app/android/ONTO.apk",
          cn:{
              weixin:{
                  youshangjiao:"点击右上角",
                  openinexplorer:"选择从浏览器中打开"
              },
              ios:{
                  appstore:"App Store",
                  enterprise:"安装企业版",
                  notice1:"安装企业版后，请返回桌面查看",
                  notice2:"安装成功后，请至【设置】-【通用】-【设备管理】中选择信任",
                  cutoff:"设置过程截图",
                  img1:"../assets/images/download/trust1.jpg",
                  img2:"../assets/images/download/trust2.jpg",
              },
              android:{
                  googleplay:"Google Play",
                  apk:"下载 APK 安装包",
              },
              pc:{
                  sorryMsg:"抱歉，本页面不支持非移动端访问"
              }
          },
          en:{
              weixin:{
                  youshangjiao:"Click here",
                  openinexplorer:"Open from browser"
              },
              ios:{
                  appstore:"App Store",
                  enterprise:"Install Enterprise Version",
                  notice1:"Please return to your home screen to check if the Enterprise Version has installed.",
                  notice2:"After the installing, please trust the developer in [Settings] - [General] - [Device Management].",
                  cutoff:"Setup process screenshot",
                  img1:"../assets/images/download/trust1en.jpg",
                  img2:"../assets/images/download/trust2en.jpg",
              },
              android:{
                  googleplay:"Google Play",
                  apk:"Download APK",
              },
              pc:{
                  sorryMsg:"Sorry, this page does not support non-mobile access"
              }
          },
          ko:{
              weixin:{
                  youshangjiao:"오른쪽 상단을 클릭하세요.",
                  openinexplorer:"브라우저로 열어주세요."
              },
              ios:{
                  appstore:"App Store",
                  enterprise:"기업 버전으로 다운받기",
                  notice1:"기업 버전 다운로드 후, 바탕화면으로 가서 확인해 주세요.",
                  notice2:"다운로드 후, 【설정】-【일반】-【기기 관리】에서 디바이스을 선택하세요.",
                  cutoff:"설정 과정",
                  img1:"../assets/images/download/trustko1.jpg",
                  img2:"../assets/images/download/trustko2.jpg",
              },
              android:{
                  googleplay:"Google Play",
                  apk:"APK 다운로드 하기",
              },
              pc:{
                  sorryMsg:"본 페이지는 모바일 방문을 지원하지 않습니다."
              }
          },
          ja:{
              weixin:{
                  youshangjiao:"Click here",
                  openinexplorer:"Open from browser"
              },
              ios:{
                  appstore:"App Store",
                  enterprise:"企業版をインストールする",
                  notice1:"企業版をインストールしたら、デスクトップに戻って確認してください。",
                  notice2:"インストールが成功したら、【設定】-【共通】-【設備管理】で信頼を選択してください。",
                  cutoff:"設定過程のスクリーンショット",
                  img1:"../assets/images/download/trust1en.jpg",
                  img2:"../assets/images/download/trust2en.jpg",
              },
              android:{
                  googleplay:"Google Play",
                  apk:"Download APK",
              },
              pc:{
                  sorryMsg:"Sorry, this page does not support non-mobile access"
              }
          },
      }
    },
    components: {
        // mobilenavDiv
    //   Bottom,
    //   Top,
    //   Global
    },
    beforeDestroy() {
    }
  }
</script>

<style>
html, body {
    -webkit-overflow-scrolling:touch;
}
body.hidden {
    overflow: hidden;
}
@media only screen and (max-width: 400px) {
    .head-float{
        float:left;
        width: 100%;
    }    
}
.img-people{
    width: 229px;
    margin-left: 74px;
}
.img-logo{
    animation-name: gt;
    animation-timing-function: ease;
}

.img-wrapper {
	width: 100%;
	height: 136px;
}
.img-wrapper-logo{
    width: 73px;
    left: 179px;
    top: 113px;
    position: absolute;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    z-index: -1;
}
 
@keyframes bk {
	0% {
		opacity: 0.1;
	}
	100% {
		opacity: 1;
	}
}
 
@keyframes gt {
	0% {
		transform: translateY(0);
		/*margin-left: 0px;*/
	}
	50% {
		transform: translateY(-25px);
		/*margin-left: 0px;*/
	}
	100% {
		transform: translateY(0);
		/*margin-left: 0px;*/
	}
}
.store-download{
    margin:0 35px;
    height:45px;
    background:rgba(0,105,224,1);
    border-radius:5px;
    margin-top:57px;
    text-align: center;
}
.now-download{
    margin:0 35px;
    height:45px;
    background:rgba(0,0,0,1);
    border-radius:5px;
    margin-top:15px;
    text-align: center;
}
.ios-notice1{
    margin:0 35px;
    margin-top:25px;
    text-align: center;
}
.ios-notice2{
    margin:0 35px;
    margin-top:25px;
    text-align: center;
}
.ios-notice-text{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:20px;
}
.cutoffwrapper{
    margin-top:25px;
    text-align: center;
    background:rgba(250,250,250,1);
    height: 50px;
}
.cutoffimgwrapper{
    
    margin-top:35px;
    text-align: center;
    padding-left:35px;
    padding-right:35px;
}
.cutoffimg{
    
    width:100%;
}
.ios-cutoff-text{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:800 !important;
    color:rgba(0,0,0,1);
    line-height:50px;
}
.img-appstore{
    width:23px;
    height:20px;
    margin-right:10px;
    transform: translateY(5px);
}
.font-store{
    font-size:14px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(255,255,255,1);
    line-height:20px;
}
.store-wrapper{
    padding:7px 0;
}
.play-wrapper{
    padding:8px 0;
}
.now-wrapper{
    padding:8px 0;
}
.font-now{
    font-size:14px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(255,255,255,1);
    line-height:20px;
}
.weixin-wrapper{
    position: fixed;
    width: 100%;
    height:100%;
    z-index:100000;
    background-color: rgba(0, 0, 0, 0.5);
}
#top {  
   
    position: absolute;  
    width: 0px;  
    height: 0px;  
    line-height: 0px;/*为了防止ie下出现题型*/  
    border-bottom: 8px solid #fff;  
    border-left: 8px solid rgba(0, 0, 0, 0);  
    border-right: 8px solid rgba(0, 0, 0, 0);  
    left: 195px;  
    top: -8px;  
}  
#weixin-notice {  
    border-radius:10px;  
    -moz-border-radius:10px;-ms-border-radius:10px;-o-border-radius:10px;-webkit-border-radius:10px;  
    position: absolute; 
    width:230px;
    height: 80px;
    background: #fff;
    right:25px;
    top:25px;
}  
.weixin-img{
    width:40px;
    height: 40px;
    margin: 20px;
}
.weixin-text-wrapper{
    display:flex;
    flex-flow:column;
    height:80px;
    padding-top: 18px;
}
.weixin-text{
    font-size:15px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:21px;
}
.no-underline{
    text-decoration: none !important;
}
</style>
