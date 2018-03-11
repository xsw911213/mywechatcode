function setWxConfig(config){
  //var timestamp = date.getFullYear().toString()+date.getMonth()+date.getDate()+date.getHours()+date.getMinutes()+date.getSeconds();
  wx.config(config);
  wx.ready(function () {
    var title = '不负韶华，不负卿'
    var link = window.location.href;
    var imgUrl = 'http://www.xushaoweisite.com/wedding/src/images/share-img.jpeg'
    wx.onMenuShareTimeline({
      title: title, // 分享标题
      link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
    wx.onMenuShareAppMessage({
      title: title, // 分享标题
      desc:'123123',
      link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: imgUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
  });
  
}
var appConfig = {
  appid:'wxc44904eab574bf47',
  secret:'051c7b65bddf0a78a42c77022507a492'
}


$.ajax({
  url:'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxc44904eab574bf47&secret=051c7b65bddf0a78a42c77022507a492',
  type:'get',
  success:function(res){
    console.log(res);
    var token = res.access_token;

    $.ajax({
      url:'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+token+'&type=jsapi',
      type:'get',
      success:function(res){
        console.log(res);
        var ticket = res.ticket;
        var date = new Date();
        var wxjssdkconfig = {
          //debug: false,
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: 'wx0dbe4a309cc0963a', // 必填，公众号的唯一标识
          timestamp:date.getTime() , // 必填，生成签名的时间戳
          nonceStr: 'xushaowei', // 必填，生成签名的随机串
          signature: '',// 必填，签名
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
        }
        var str = 'jsapi_ticket='+ticket+'&noncestr='+wxjssdkconfig.nonceStr+'&timestamp='+wxjssdkconfig.timestamp+'&url='+window.location.href
        wxjssdkconfig.signature = $.sha1(str)
        
        setWxConfig(wxjssdkconfig);
      }
    })
  }
})
