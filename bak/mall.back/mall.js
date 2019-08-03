// pages/mall/mall.js
Page({
  // input输入
  handelInput(e){
    console.log(e.detail.value)
    // 使用setData的方式去修改数据
    this.setData({
      inputValue: e.detail.value
    })
  },
  // 添加
  handleAdd() {
    const todos = this.data.todos.concat({
      id: Math.random(),
      title: this.data.inputValue,
      isCompleted: true
    })
    this.setData({
      todos,
      inputValue: ''
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
   inputValue: '',
   todos: [{
     id: Math.random(),
     title: '抽烟',
     isCompleted: true
   }, {
       id: Math.random(),
       title: '喝酒',
       isCompleted: true
     }, {
       id: Math.random(),
       title: '烫头',
       isCompleted: true
     },]
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