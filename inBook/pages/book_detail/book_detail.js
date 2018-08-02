// pages/book_detail/book_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: {},
    words: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.id);
    wx.request({
      url: 'https://www.zhuomutech.com/index.php/getBookDetail',
      method: 'POST',
      data: {
        bookID : options.id,
      },
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        //书本信息
        var this_book = {};
        this_book.image = res.data.data[0].image;
        this_book.title = res.data.data[0].title;
        this_book.callno = res.data.data[0].callno;
        this_book.content = res.data.data[0].introduce;
        //知识点列表
        var this_words = []
        var words = res.data.data[0].words.split('|||');
        for (var i in words) {
          var word = {};
          word.title = words[i];
          this_words.push(word);
        }
        that.setData({
          words: this_words,
          book: this_book
        });
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
  viewDetail: function (e) {
    wx.navigateTo({
      url: '../list_words_info/list_words_info?word=' + e.currentTarget.dataset.title,
    })
  },

  //图片预览
  previewImage: function () {
    wx.previewImage({
      current: this.data.book.image,
      urls: [this.data.book.image]
    })
  }
})