let wechatConfig = require('../../../config/').wechat;
var http = require('http'); 
var fs = require('fs');
var sha = require('sha1');
// 获取
function getTokenFromWX(){
  let getTokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + wechatConfig.appid + '&secret=' + wechatConfig.secret;
  let reqConfig = {
    appId : wechatConfig.appid,
    timestamp : new Date().getTime(),
    nonceStr:'xulovema',
    signature:'',
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
  };
  // 获取token
  http.get(getTokenUrl,function(_req,_res){  

    _req.on('data',function(data){
      console.log(data);
      // 将token储存在token.txt中
      reqConfig.token = data.access_token;

      let getTicketUrl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+token+'&type=jsapi';

      // 获取ticket
      http.get(getTicketUrl,function(request,response){
        request.on('data',function(_data){
          reqConfig.ticket = _data.ticket;
          let str = 'jsapi_ticket='+reqConfig.ticket+'&noncestr='+reqConfig.nonceStr+'×tamp='+reqConfig.timestamp+'&url=http://wedding.xushaoweisite.com/wedding'

          reqConfig.signature = sha(str);
          
          
        })

      })
      
    });  
    _req.on('end',function(){  
          
    });  
  });
}

function writeFile(){
  console.log('准备写入文件');
  fs.writeFile('input.txt', '我是新写入的内容', function (err) {
      if (err) console.error(err);
      console.log('数据写入的数据');
      console.log('-------------------');
  });
}
writeFile();



let getToken = function(req,res){
  // 请求接口获取token
  res.json({
    token:'123123'
  })
}

module.exports = getToken;