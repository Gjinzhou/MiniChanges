export default {
  resGatter(getSex, getYear) {
    if (getSex == "男") {
      if (getYear < 2000) {
        var calcResult = (2000 - getYear) % 9;
      } else {
        var calcResult = (2099 - getYear) % 9;
      }
    } else {
      if (getYear < 2000) {
        var calcResult = (getYear - 1900 + 5) % 9;
      } else {
        var calcResult = (getYear - 2000 + 6) % 9;
      }
    }
    if (calcResult == 5 && getSex == "男") {
      calcResult = 2;
    } else if (calcResult == 5 && getSex == "女") {
      calcResult = 8;
    }
    switch (calcResult) {
      case 0:
        var fate = "离火九";
        break;
      case 1:
        var fate = "坎水一";
        break;
      case 2:
        var fate = "坤土二";
        break;
      case 3:
        var fate = "震木三";
        break;
      case 4:
        var fate = "巽木四";
        break;
      case 6:
        var fate = "乾金六";
        break;
      case 7:
        var fate = "兑金七";
        break;
      case 8:
        var fate = "艮土八";
        break;
    }
    return fate;
  },
};
