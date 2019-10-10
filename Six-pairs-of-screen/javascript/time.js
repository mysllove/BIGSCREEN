




window.onload = function () {
  //定时器每秒调用一次fnDate()
  setInterval(function () {
    fnDate();
  }, 1000);
}

//js 获取当前时间
function fnDate() {
  var oDiv = document.getElementById("platformTime");
  var date = new Date();
  var year = date.getFullYear(); //当前年份
  var month = date.getMonth(); //当前月份
  var data = date.getDate(); //天
  var str = date.toLocaleDateString();

  var Week = ['日', '一', '二', '三', '四', '五', '六'];
  var ws = str += ' 周' + Week[date.getDay()];
  var hours = date.getHours(); //小时
  var minute = date.getMinutes(); //分
  var second = date.getSeconds(); //秒
  var time = fnW(ws) + "&nbsp;" + fnW(hours) + ":" + fnW(minute);
  oDiv.innerHTML = time;
}
//补位 当某个字段不是两位数时补0
function fnW(str) {
  var num;
  str >= 10 ? num = str : num = "" + str;
  return num;
  if (showWeek) {
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    str += ' 周' + Week[date.getDay()];
  }
  return str;
}

function fns(showWeek) {
  var date = new Date();
  var str = '';
  if (showWeek) {
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    str += ' 周' + Week[date.getDay()];
  }
  return str;
}

function addMonth(id) {
  var s = parseInt(document.getElementById(id + "Month").innerHTML);
  $("#" + id + s + "Div").css("display", "none");
  //判断month
  if (s == 12) {
    s = 1
  } else {
    s = s + 1;
  }
  document.getElementById(id + "Month").innerHTML = s;
  $("#" + id + s + "Div").css("display", "inline-block");
}

function reduceMonth(id) {
  var s = parseInt(document.getElementById(id + "Month").innerHTML);
  $("#" + id + s + "Div").css("display", "none");
  if (s == 1) {
    s = 12;
  } else {
    s = s - 1;
  }
  document.getElementById(id + "Month").innerHTML = s;
  $("#" + id + s + "Div").css("display", "inline-block");
}