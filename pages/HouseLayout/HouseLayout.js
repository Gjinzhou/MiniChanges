// pages/HouseLayout/HouseLayout.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    direction: "南",
    shadow: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.onCompassChange(({ direction }) => {
      let degree = direction.toFixed(0);
      this.getDirection(degree);
    });
  },
  getDirection: function (deg) {
    let shadow = "box-shadow: 0 0 20rpx #F56C6C;";
    let dir = "未知";
    if (deg >= 340 || deg <= 20) {
      dir = "北";
    } else if (deg > 20 && deg < 70) {
      dir = "东北";
    } else if (deg >= 70 && deg <= 110) {
      dir = "东";
    } else if (deg > 110 && deg < 160) {
      dir = "东南";
    } else if (deg >= 160 && deg <= 200) {
      dir = "南";
      shadow = "box-shadow: 0 0 20rpx #67C23A;";
    } else if (deg > 200 && deg < 250) {
      dir = "西南";
    } else if (deg >= 250 && deg <= 290) {
      dir = "西";
    } else if (deg > 290 && deg < 340) {
      dir = "西北";
    }
    this.setData({
      transform: ` transform:rotate(-${deg}deg);`,
      degree: deg,
      direction: dir,
      shadow,
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
