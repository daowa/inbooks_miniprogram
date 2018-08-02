// pages/tab_mine/tab_mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    words: [],
    explain: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    console.log(getApp().globalData.userID);
    wx.request({
      url: 'https://www.zhuomutech.com/index.php/getLearned',
      method: 'POST',
      data: {
        userID: getApp().globalData.userID,
      },
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        console.log(res.data);
        var this_words = [];
        var this_explain = '数字表示已阅读的数量';
        if (res.data.data.length == 0) { //用户还没有知识点的情况
          this_explain = '找不到阅读过的知识点，去书架里翻翻？'
        }
        for (var i in res.data.data) {
          var word = {};
          word.title = res.data.data[i].word;
          word.count = res.data.data[i].count;
          word.url = res.data.data[i].url;
          this_words.push(word);
        }
        that.setData({
          words: that.data.words = this_words,
          explain: this_explain,
        });
      },
      fail: function (err) {
        console.log(err.errMsg);
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },


  viewDetail: function(e){
    wx.navigateTo({
      url: '../mine_network/mine_network?word=' + e.currentTarget.dataset.title,
    })
  }
})