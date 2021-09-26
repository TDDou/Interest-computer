// index.js
var money,lilv,sum;
Page({
  moneyNum:function(e){
    money=parseInt(e.detail.value);
  },
  lilvNum:function(e){
    lilv=parseInt(e.detail.value);
  },
  calc:function(){
    for(var i=1;i<=5;i++){
      money*=(1+lilv/100)
    }
    this.setData({
      sum:money
    })
  }
})
