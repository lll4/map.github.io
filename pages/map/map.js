// pages/map/map.js
var app = getApp()
// 引用高德地图微信小程序JSAPI模块
var amapFile = require('../../libs/amap-wx.js');
var amapKey = "9cb32a4540ed5ada2ecdd081ad53cabe";
var config = require('../../libs/config.js');
var myAmapFun = new amapFile.AMapWX({
  key: amapKey
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: '111.62852107566833',
    latitude: '26.42142999357519',
    //为了获取中心之后才渲染地图
    hasMarkers: false,
    // 缩放级别
    scaleData: 16,
    markers: [
      {
        "id": 1,
        'iconPath': '/assets/img/location.png',
        "name": "永州市心医院",
        "longitude": "111.62252107566833",
        "latitude": "26.42142999357519"
      },
      {
        "id": 2,
        'iconPath': '/assets/img/location.png',
        "name": "永州市中医院",
        "longitude": "111.62552107566833",
        "latitude": "26.42470581245983"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    //授权获取当前定位
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        console.log(res)
        _this.setData({
          hasMarkers: true
        })
        // 通过高德接口获取当前定位的省市区名称等
        myAmapFun.getRegeo({
          location: `${_this.data.longitude},${_this.data.latitude}`,
          success: function (data) {
            console.log('定位信息')
            console.log(data)
          },
          fail: function (res) {

          }
        });
        // 获取当前实时天气

        myAmapFun.getWeather({
          success: function (data) {
           console.log('天气信息')
           console.log(data)
          },
          fail: function (info) {

          }
        });
      }
    })
  },
  onReady: function(){
    // 创建 map 上下文 MapContext 对象。map_area为map的id
    this.mapCtx = wx.createMapContext('map_area');
    
  },
  //点击marker
  makertap(e){
   console.log(e)
    let markerId = e.markerId
    let latitude = e.currentTarget.dataset.marker[1].latitude
    console.log(latitude)
    let longitude = e.currentTarget.dataset.marker[1].longitude

    //平移marker带动画
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      // rotate: 90,
      destination: {
        latitude: latitude,
        longitude: longitude,
      },
      animationEnd() {
        console.log('动画结束回调')
      },
      success(res){
        console.log('chengong')
        console.log(res)
      }
    })
  },
  // 移动地图时触发,会执行两次开始和结束
  handleregionchange(res){
    console.log(res)
    let that = this
    if(res.type == 'end'){
      // 获取中心位置的经纬度
      that.mapCtx.getCenterLocation({
        success: function (res) {
        console.log('中心位置')
        console.log(res)
        }
      })
      //获取当前地图的视野范围
      that.mapCtx.getRegion({
        success: function (res) {
        console.log('当前视野范围')
        console.log(res)
        }
      })
      //获取当前地图的缩放级别
      that.mapCtx.getScale({
        success: function (res) {
          console.log('当前缩放级别')
        console.log(res)
        }
      })
      //缩放视野展示所有经纬度
      that.mapCtx.includePoints({
        success: function (res) {
          console.log('缩放视野展示所有经纬度')
        console.log(res)
        }
      })
    }
  },
 
})