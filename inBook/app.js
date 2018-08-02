//app.js
App({
  onLaunch: function() {
    var that = this;
    wx.login({
      success: function (res) {
        console.log(res);
        if (res.code) {
          wx.request({
            url: 'https://www.zhuomutech.com/index.php/code_openID',
            method: 'POST',
            data: {
              openID: res.code,
            },
            header: {
              "content-type": "application/json"
            },
            success: function (res) {
              that.globalData.userID = res.data.openid;
              console.log(res.data.openid);
            }
          });
        } 
        else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
    //调用API从本地缓存中获取数据
    //var logs = wx.getStorageSync('logs') || []
    //logs.unshift(Date.now())
    //wx.setStorageSync('logs', logs)
  },

  globalData: {
    userID: 'tester001324156'
  }
})
