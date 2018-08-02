// pages/tab_mine/tab_mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    hasMore: false,
    showLoading: false,
    start: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://www.zhuomutech.com/index.php/getBooks',
      method: 'POST',
      data: {
      },
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        var fs = []
        for (var i in res.data.data) {
          var book = {};
          book.id = res.data.data[i].id;
          book.title = res.data.data[i].title;
          book.introduce = res.data.data[i].introduce;
          book.image = res.data.data[i].image;
          fs.push(book);
        }
        that.setData({
          books: that.data.books.concat(fs)
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


  //跳转介绍详情
  viewDetail: function(e){
    wx.navigateTo({
      url: '../book_detail/book_detail?id=' + e.currentTarget.dataset.id,
    })
  }
})