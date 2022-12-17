// pages/LifeCase.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    date: "",
    calendar: {},
    fate: "",
    sex: "男",
  },
  sexChange() {
    if (this.data.sex == "男") {
      this.setData({ sex: "女" });
    } else {
      this.setData({ sex: "男" });
    }
    this.bindDateChange({ detail: { value: this.data.date } });
  },
  bindDateChange({ detail }) {
    const [year, month, date] = detail.value.split("-");
    const calendar = wx.calendar.solar2lunar(year, month, date);
    this.setData({
      ...calendar,
      date: detail.value,
      fate: wx.lifeCase.resGatter(this.data.sex, calendar.lYear),
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.bindDateChange({ detail: { value: "1995-07-27" } });
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
