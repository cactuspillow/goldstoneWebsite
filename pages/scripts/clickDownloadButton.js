
// <script type="text/javascript">

      // 为webapp增加监听事件
    document.body.addEventListener('touchstart', function () { }); 

    // 链接地址
        var QQ_APP_STORE = 'https://at.umeng.com/C8HHLb';
        var APP_STORE = 'https://at.umeng.com/C8HHLb';
        var APK_Download = 'https://at.umeng.com/C8HHLb';


        var browser={
          versions:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            return {         
                trident: u.indexOf('Trident') > -1, //IE內核
                presto: u.indexOf('Presto') > -1, //opera內核
                webKit: u.indexOf('AppleWebKit') > -1, //蘋果、谷歌內核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐內核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否為移動終端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios終端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android終端或uc瀏覽器
                iPhone: u.indexOf('iPhone') > -1 , //是否iPhone
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1 ,//是否web
                 //是否wechat
                weixin: u.indexOf('MicroMessenger') > -1
            };
         }(),
         language:(navigator.browserLanguage || navigator.language).toLowerCase()
         };

      
        $(".download").click(function(e){
            
            if(typeof WeixinJSBridge !== "undefined"){
               window.location.href = QQ_APP_STORE;

            }else if(browser.versions.ios == true ){
                window.location.href = APP_STORE;

            }else if(browser.versions.android == true){
                window.location.href = APK_Download;

            }else{
                window.location.href = QQ_APP_STORE;
                
            }
    
        });

    

    // </script>