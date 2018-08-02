// pages/list_words/list_words.js
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
    wx.showLoading({
      title: '文字识别',
    });
    var that = this;
    wx.request({
      url: 'https://www.zhuomutech.com/index.php/getEntityList',
      method: 'POST',
      data: {
        userID: getApp().globalData.userID,
      },
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        var this_words = [];
        var this_explain = '目前仅支持文本内容的识别';
        console.log(res.data);
        if (res.data.data.length == 1) { //用户还没有知识点的情况
          this_explain = '未识别出知识点，\r\n我们会努力扩充知识库的'
        }
        for (var i in res.data.data) {
          var word = {};
          word.title = res.data.data[i];
          this_words.push(word);
        }
        that.setData({
          words: that.data.words.concat(this_words),
          explain: this_explain,
        });
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


  //点击一个词，跳转聚合搜索列表
  viewDetail: function(e){
    wx.navigateTo({
      url: '../list_words_info/list_words_info?word=' + e.currentTarget.dataset.title,
    })
  }
})