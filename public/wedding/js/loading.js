// 计算机打字效果
var article = [
    '故事从石家庄开始。。。',
    '在开元花园的一个小公司里面我们相识'
]

var $text = $('.loading > .text > p');
var strArr = []

for(var line = 0; line < article.length;line++){
    var linearr = article[line].split('');
    for(var t = 0;t<linearr.length;t++){
        strArr.push(linearr[t])
        if(t === (linearr.length - 1)){
            strArr.push('<br>')
        }
        
    }
   
}

// var str = article.join('<br>');
var max = strArr.length;
var times = 0;
var str = ''
function setStr(times){
  if(times !== max){
    str += strArr[times];
    var delay = 150;
    if(strArr[times] === '<br>'){
      delay = 550
    }
    setTimeout(function(){
      $text.html(str);
      times ++;
      setStr(times);
    },delay)
  }
}
//setStr(times)

// 滚动效果
var divheight = $('.loading > .text')[0].clientHeight;
var textheight = $('.loading > .text > p')[0].clientHeight;

$text.css({
  'transform': 'translate3d(0,'+divheight+'px,0)'
})
setTimeout(function(){
  $text.css({
    //'transform': 'translate3d(0,'+(0-textheight)+'px,0)',
    'transform': 'translate3d(0,0,0)',
    'transition':'transform 18s linear',
    'visibility':'visible'
  })
  setTimeout(function(){
    $('.start').css('display','block').addClass('container-show');
  },18000)
},2000)

$('.start').click(function(){
  $('.loading').addClass('loading-hide');
  $('.container').show().addClass('container-show');   
} )
 
// var media = document.getElementById('music');
// var media = $('#music')[0];
//  media.play();  

// 自动播放音乐
function audioAutoPlay(id){
  var audio = document.getElementById(id);
  audio.play();
  document.addEventListener("WeixinJSBridgeReady", function () {
    audio.play();
  }, false);
}
// audioAutoPlay('music');
