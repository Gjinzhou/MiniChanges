// app.js
import calendar from "./pages/utils/calendar";
import dayjs from "./pages/utils/day";
import lifeCase from "./pages/utils/lifeCase";

wx.calendar = calendar;
wx.dayjs = dayjs;
wx.lifeCase = lifeCase;
App({});
