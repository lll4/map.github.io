// pages/Home/home.js
const app = getApp();//获取app里的数据
Page({
  // 通过event来获取
  handleTap(e) {
    console.log(e.currentTarget.dataset)
  },
  handleInput(e) {
    console.log(e.currentTarget.dataset)
  },
  tap1() {
    console.log('tap1')
  },
  tap2() {
    console.log('tap2')
  },
  tap3() {
    console.log('tap3')
  },
  /**
   * 页面的初始数据
   */
  data: {
    title: '干啥',
    list: [
      {
        id: Math.random(),
        title: 'yiyangqianxi'
      }, {
        id: Math.random(),
        title: 'xiena'
      }, {
        id: Math.random(),
        title: 'zhangjie'
      }, {
        id: Math.random(),
        title: 'lixiagcai'
      }
    ]
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