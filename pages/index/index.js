// index.js
Page({
  data: {
    menuList: [
      {
        title: "命格简算",
        icon: "../images/icon_nav_form.png",
        path: "/pages/LifeCase/LifeCase",
      },
      {
        title: "穿衣颜色",
        icon: "../images/icon_nav_search.png",
        path: "/pages/ClothingColor/ClothingColor",
      },
      // {
      //   title: "命格合婚",
      //   icon: "../images/icon_nav_nav.png",
      //   path: "/pages/Marriage/Marriage",
      // },
      {
        title: "号码分析",
        icon: "../images/icon_nav_special.png",
        path: "/pages/Phone/Phone",
      },
      {
        title: "卦象查询",
        icon: "../images/icon_nav_feedback.png",
        path: "/pages/EightDiagrams/EightDiagrams",
      },
      {
        title: "房间布局",
        icon: "../images/icon_nav_layout.png",
        path: "/pages/HouseLayout/HouseLayout",
      },
    ],
  },
  handleMenuClick(e) {
    const item = e?.currentTarget?.dataset?.item;
    wx.navigateTo({
      url: item?.path,
    });
  },
});
