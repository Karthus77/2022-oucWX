Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['山东省','青岛市','崂山区'],
    now:{
        temp:0,
        text:'未知',
        humidity:0,
        vis:0,
        pressure:0,
        windDir:'未知',
        windSpeed:0,
        windScale:0
    }
  },
  regionChange:function(e){
      this.setData({region:e.detail.value});
      this.getWeather();
  },
  getDetail:function(e)
  {
    var that =this;  
    wx.request({
        url: 'https://devapi.qweather.com/v7/weather/now?',
        data:{
            location:e,
            key:'2564295dec8c42b492af99a322785999',
        },
        success:function(res){
            console.log(res.data);
            that.setData({now:res.data.now});
        }
      })
  },
  getWeather:function()
  {
      var that =this;
      var id;
      wx.request({
        url: 'https://geoapi.qweather.com/v2/city/lookup?',
        data:{
            location:that.data.region[2],
            key:'2564295dec8c42b492af99a322785999',
        },
        success:function(res){
            console.log(res.data);
            id=res.data.location[0].id;
            that.getDetail(id);
        }
      })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.getWeather();
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