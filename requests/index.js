const BASE_URL = 'http://www.xiongmaoyouxuan.com'
const get = (URL) => {
  wx.showLoading({
    title: '加载中.....',
    mask: true,
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + URL,
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        resolve(res)
      },
      fail: function (res) { 
        reject(res)
      },
      complete: function (res) {
        wx.hideLoading()
       },
    })
  })
}
//列表页接口
export const getList = (start = 0) => {
  return get(`/api/tab/5/feeds?${start}&sort=0`)
}
//详情页接口
export const getDetail = (id) => {
  return get(`/api/detail?id=${id}`)
}