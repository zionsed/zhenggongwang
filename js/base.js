/**
 * Created by overflow on 2016/4/21.
 * version: 1.0
 */



$(function () {
  //section-one 新闻动态轮播
  var _slideItem=$('.section-one-slide-item');
  var key=0;
  function setPos() {
      _slideItem.each(function (i, e) {
            $(e).removeClass('active');
          if(i===key){
              $(e).addClass('active');
              var _showItem=$(e);
              var op=0.1;
              var opInterval=setInterval(function () {
                  op+=0.1;
                  _showItem.css('opacity',op);
                  if(op>=1){
                      clearInterval(opInterval);
                  }
              },50);
          }
      })
  }
  function slide() {
      key++;
      if(key>=4){
          key=0;
      }
      setPos();
  }
    setPos();
    setInterval(slide,5000);

});

