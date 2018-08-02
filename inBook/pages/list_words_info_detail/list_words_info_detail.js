// pages/list_words_info_detail/list_words_info_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word: {},
    images: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var utils = require('../../utils/util.js');
    wx.showLoading({
      title: '查询中',
    });
    var that = this;
    console.log(options.url)
    console.log(options.from)
    console.log(options.word)
    wx.request({
      url: 'https://www.zhuomutech.com/index.php/getUrlDetail',
      method: 'POST',
      data: {
        url: options.url,
        word: options.word,
        userID: getApp().globalData.userID,
        from_: options.from,
        // url: 'http://baike.baidu.com/item/%E7%9B%9B%E5%AE%A3%E6%80%80/594770',
        // word: '盛宣怀',
        // userID: getApp().globalData.userID,
        // from_: 'baidubaike'
      },
      header: {
        "content-type": "application/json"
      },
      success: function (res) { 
        console.log(res.data);
        var this_word = {};
        // this_word.title = res.data.data[0].title;
        this_word.title = options.title;
        console.log(res.data.data[0].from_);
        this_word.from = utils.parseFrom(res.data.data[0].from_);
        this_word.url = res.data.data[0].url;
        // 分段内容
        var raw_content = res.data.data[0].content;
        this_word.content = raw_content.split('|||');
        // 多张图片
        var raw_image = res.data.data[0].images;
        var image = []
        console.log(raw_image.split('|||').length)
        for (var i = 0; i < raw_image.split('|||').length; i++) {
          var img = {};
          img.src = raw_image.split('|||')[i]
          img.index = i;
          image.push(img);
        }
        this_word.image = image;
        // 写入data
        that.setData({
          word: this_word,
          images: raw_image.split('|||'),
        })
        wx.hideLoading();
      },
      fail: function (err) {
        console.log(err.errMsg);
      },
    });
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
  clipUrl: function(event){
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

  //图片预览
  previewImage: function (e) {
    var index = e.currentTarget.dataset.index;
    wx.previewImage({
      current: this.data.images[index],
      urls: this.data.images,
    })
  }
})