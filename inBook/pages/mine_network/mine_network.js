// pages/mine_network/mine_network.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    words: [],
    network: '',
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
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '绘制网络图',
    });
    var that = this;
    console.log(options.word);
    wx.request({
      url: 'https://www.zhuomutech.com/index.php/getLearnedNet',
      method: 'POST',
      data: {
        userID: getApp().globalData.userID,
        word: options.word,
      },
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        console.log(res.data);
        var this_words = [];
        var this_network = res.data.data.net;
        console.log('api:' + this_network);
        for (var i in res.data.data.words) {
          var word = {};
          word.title = res.data.data.words[i].word;
          word.count = res.data.data.words[i].count;
          word.relate = res.data.data.words[i].relate;
          this_words.push(word);
        }
        that.setData({
          network: this_network,
          words: that.data.words.concat(this_words)
        });
        console.log('nowData:' + that.data.network);
        wx.hideLoading();
      },
      fail: function (err) {
        console.log(err.errMsg);
      },
    });
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



  //点击一个词，跳转聚合搜索列表
  viewDetail: function (e) {
    wx.navigateTo({    
      url: '../list_words_info/list_words_info?word=' + e.currentTarget.dataset.title,
    })
  },

  //图片预览
  previewImage: function () {
    console.log('previewImage:' + this.data.network);
    console.log([this.data.network]);
    wx.previewImage({
      urls: [this.data.network]
    })
  }
})