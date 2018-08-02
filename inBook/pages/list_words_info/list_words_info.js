// pages/list_words_info/list_words_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    entitys: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var utils = require('../../utils/util.js');
    wx.showLoading({
      title: '聚合检索',
    });
    var that = this;
    console.log(options.word);
    wx.request({
      url: 'https://www.zhuomutech.com/index.php/getAggregateSearch',
      method: 'POST',
      data: {
        word: options.word,
        // word: '日本',
      },
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        console.log(res.data);
        var fs = [];
        for(var i in res.data.data){
          var entity = {};
          entity.id = i;
          entity.title = res.data.data[i].title.replace('?','');
          entity.introduce = res.data.data[i].introduce, 1000;
          entity.from = res.data.data[i].from_;
          entity.from_cn = utils.parseFrom(res.data.data[i].from_); //中文化的网页来源
          entity.image = res.data.data[i].image;
          entity.url = res.data.data[i].url;
          console.log(res.data.data[i].url);
          entity.word = options.word;
          fs.push(entity);
        }
        that.setData({
          entitys: that.data.entitys.concat(fs)
        });
        wx.hideLoading();
        if (res.data.data == null || res.data.data.length == 0) { //用户还没有知识点的情况
          wx.showToast({
            title: '查询结束，未找到相关资源',
            icon: 'success',
            duration: 2000
          })
        }
      },
      fail: function (err) {
        console.log(err.errMsg);
      },
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

  //跳转介绍详情
  viewDetail: function (e) {
    wx.navigateTo({
      url: '../list_words_info_detail/list_words_info_detail?url=' + e.currentTarget.dataset.url
       + "&from=" + e.currentTarget.dataset.from
       + "&word=" + e.currentTarget.dataset.word
       + "&title=" + e.currentTarget.dataset.title,
    })
  }
})