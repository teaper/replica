// 一言
function gitHitokoto(){
  fetch('https://v1.hitokoto.cn?c=e')
        .then(function (res){
          return res.json();
        })
        .then(function (data) {
          var hitokoto = document.getElementById('hitokoto');
          var text= data.hitokoto;
          var regR = /\r/g;
          var regN = /\n/g;
          text = text.replace(regR,"").replace(regN,"");
          if(text.length <= 74){
            hitokoto.innerText = text; 
          }else{
            hitokoto.innerText = "我们不生产代码,我们只是github的搬运工"; 
          }
        })
        .catch(function (err) {
          console.error(err);
        })
}
$(function(){ 
// 一言,引入index.js
window.setInterval("gitHitokoto();", 3000); 
});