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
    this_word.poster = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    this_word.name = '啊哈',
    this_word.author = 'xxx',
    this_word.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    // 写入data
    this.setData({
      word: this_word,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
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

  //播放器
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }

})