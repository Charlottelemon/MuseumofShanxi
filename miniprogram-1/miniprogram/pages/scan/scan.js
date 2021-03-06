// miniprogram/pages/scan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: './scan.jpg',
    description: '点击扫描展品二维码'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    // wx.hideToast() // 隐藏Toast
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

  click: function() {
    var that = this;
    wx.scanCode({
      success: (res) => {
        wx.showToast({ // 显示Toast
          title: '扫码成功',
          icon: 'success',
          duration: 1500
        })
        setTimeout(function(){
          wx.navigateTo({
            url: '../'+res.result,
          })
        },1500);
      }
    })
  }
})