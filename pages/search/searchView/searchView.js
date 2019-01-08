// pages/search/searchView/searchView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: ["无限制", "未婚", "离异","丧偶","已婚"],
    statusIndex: 0,

    more:["更多"],

  },
  bindStatusChange: function (e) {
    this.setData({
      statusIndex: e.detail.value
    })
  },
  bindMore:function(e){
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },  
  showTopTips:function(e){

  },//查询按钮
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    showView: (options.showView == "true" ? true : false)
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
  
  }
})