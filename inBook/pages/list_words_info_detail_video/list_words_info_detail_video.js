// pages/list_words_info_detail/list_words_info_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var this_word = {};
    this_word.title = '《盛宣怀办学》余成、李宏烨——新语相声俱乐部精品相声';
    this_word.from = 'bilibili视频';
    this_word.url = 'https://www.bilibili.com/video/av3651572/?from=search&seid=9234750188219709295';
    this_word.src = 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
    // 写入data
    this.setData({
      word: this_word,
    })
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



  // 点击复制url
  clipUrl: function (event) {
    wx.setClipboardData({
      data: event.currentTarget.dataset.url,
      success: function (res) {
        wx.showToast({
          title: '复制到剪贴板',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },

})