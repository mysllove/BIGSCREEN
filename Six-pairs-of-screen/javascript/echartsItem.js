function vehicleAccreditation(x, y) {
  var vehicleAccreditation = echarts.init(document.getElementById("vehicleAccreditation"));
  option = {
    color: ['#ee6e47'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: '13%',
      left: 0,
      right: '5%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: x,
      axisLine: {
        lineStyle: {
          color: 'rgba(53,153,196,0.6)'
        }
      },
      axisLabel: {
        interval: 0,
        color: '#fff',
        fontSize: 12
      },
      axisTick: {
        show: false,
        alignWithLabel: true
      }
    },
    yAxis: {
      axisLabel: {
        interval: 0,
        color: '#fff',
        fontSize: 12
      },
    },
    series: [{
      name: '处罚起数',
      type: 'bar',
      barWidth: '50%',
      data: y
    }],
  };

  vehicleAccreditation.on("click", function (param) {
    var num = "punish1" + (param.dataIndex + 1);
    layer.open({
      type: 2,
      title: false,
      shadeClose: true, //点击遮罩关闭层
      area: ["53.3vw", "95%"],
      offset: "4.63vh",
      content: "./layerHtml/punish1Month.html?num=" + num
    });
  });
  vehicleAccreditation.setOption(option);
}


function coverageRate(num) {
  //检查覆盖率
  var coverageRate = echarts.init(document.getElementById("coverageRate"));
  option = {
    title: {
      text: num + "%",
      x: "center",
      y: "center",
      textStyle: {
        fontWeight: "normal",
        color: "#fff",
        fontSize: "16"
      }
    },
    color: "#252970",

    series: [{
      name: "Line 1",
      type: "pie",
      clockWise: true,
      radius: ["60%", "86%"],
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      },
      hoverAnimation: false,
      data: [{
        value: num,
        name: "01",
        itemStyle: {
          normal: {
            color: {
              // 完成的圆环的颜色
              colorStops: [{
                offset: 0,
                color: "#0f8cf2" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#0f8cf2" // 100% 处的颜色
              }
              ]
            },
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        }
      },
      {
        name: "02",
        value: 100 - num
      }
      ]
    }]
  };
  coverageRate.setOption(option);
}

function cfRate(num) {
  var cf = echarts.init(document.getElementById("cfRate"));
  option10 = {
    title: {
      text: num + "%",
      x: "center",
      y: "center",
      textStyle: {
        fontWeight: "normal",
        color: "#fff",
        fontSize: "16"
      }
    },
    color: "#252970",

    series: [{
      name: "Line 1",
      type: "pie",
      clockWise: true,
      radius: ["60%", "86%"],
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      },
      hoverAnimation: false,
      data: [{
        value: num,
        name: "01",
        itemStyle: {
          normal: {
            color: {
              // 完成的圆环的颜色
              colorStops: [{
                offset: 0,
                color: "#0f8cf2" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#0f8cf2" // 100% 处的颜色
              }
              ]
            },
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        }
      },
      {
        name: "02",
        value: 100 - num
      }
      ]
    }]
  };
  cf.setOption(option10);
}

function licenceChart(x, y) {
  var licenceChart = echarts.init(document.getElementById("licenceChart"));
  option4 = {
    color: ['#d32a21'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: '10%',
      left: '2%',
      right: '3%',
      bottom: '1%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: x,
      axisLine: {
        lineStyle: {
          color: 'rgba(53,153,196,0.6)'
        }
      },
      axisLabel: {
        interval: 0,
        color: '#fff',
        fontSize: 12
      },
      axisTick: {
        show: false,
        alignWithLabel: true
      }
    },
    yAxis: {
      axisLabel: {
        color: '#fff',
        fontSize: 12
      },
    },
    series: [{
      name: '证照过期',
      type: 'bar',
      barWidth: '70%',
      data: y,
      itemStyle: {
        normal: {
          color: function (params) {
            // build a color map as your need.
            var colorList = [
              "red",
              "orange",
              "yellow"
            ];
            return colorList[params.dataIndex];
          }
        }
      }
    }],
  };
  licenceChart.on("click", function (param) {
    var num = "licence1" + (param.dataIndex + 1);
    layer.open({
      type: 2,
      title: false,
      shadeClose: true, //点击遮罩关闭层
      area: ["53.3vw", "95%"],
      offset: "4.63vh",
      content: "./layerHtml/licence1Month.html?num=" + num
    });
  });
  licenceChart.setOption(option4);
}

function riskChart(x, y) {
  var echart = echarts.init(document.getElementById("riskChart"));
  option3 = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      width: "100%",
      left: "-3%",
      right: "4%",
      top: "25%",
      bottom: 0,
      containLabel: true
    },
    xAxis: {
      type: "category",
      data: x,
      axisLine: {
        lineStyle: {
          color: "rgba(53,153,196,0.6)"
        }
      },
      axisLabel: {
        interval: 0,
        color: "#fff",
        fontSize: 12
      },
      axisTick: {
        show: false,
        alignWithLabel: true
      }
    },
    yAxis: {
      name: "家数",
      show: false
    },
    series: [{
      name: "家数",
      type: "bar",
      barWidth: "40%",
      data: y,
      itemStyle: {
        normal: {
          color: function (params) {
            // build a color map as your need.
            var colorList = [
              "red",
              "orange",
              "yellow",
              "blue",
            ];
            return colorList[params.dataIndex];
          },
          label: {
            show: true, //开启显示
            position: "top", //在上方显示
            textStyle: {
              //数值样式
              color: "#fff",
              fontSize: 16
            }
          }
        }
      }
    }]
  };
  echart.on("click", function (param) {
    var name = param.name;
    if (name == "A级") {
      layer.open({
        type: 2,
        title: false,
        content: "./layerHtml/risk1A.html",
        area: ["53.3vw", "95%"],
        offset: "4.63vh"
      });
    }
    if (name == "B级") {
      layer.open({
        type: 2,
        title: false,
        content: "./layerHtml/risk1B.html",
        area: ["53.3vw", "95%"],
        offset: "4.63vh"
      });
    } else if (name == "C级") {
      layer.open({
        type: 2,
        title: false,
        content: "./layerHtml/risk1C.html",
        area: ["53.3vw", "95%"],
        offset: "4.63vh"
      });
    } else if (name == "D级") {
      layer.open({
        type: 2,
        title: false,
        content: "./layerHtml/risk1D.html",
        area: ["53.3vw", "95%"],
        offset: "4.63vh"
      });
    }
  });
  echart.setOption(option3);
}


function accessLeft(x, y) {
  var accessLeft = echarts.init(document.getElementById("accessLeft"));
  option5 = {
    color: [
      new echarts.graphic.LinearGradient(
        0,
        0,
        1,
        0,
        [{
          offset: 0,
          color: "#0167e8"
        },
        {
          offset: 1,
          color: "#13ace8"
        }
        ],
        false
      )
    ],
    grid: {
      left: "20%",
      right: "10%",
      top: "15%",
      containLabel: true
    },
    tooltip: {
      show: "true",
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    yAxis: {
      type: "category",
      position: "right",
      data: x,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 0,
        color: "#fff",
        fontSize: 13
      },
    },
    xAxis: [{
      axisTick: {
        show: false
      },
      type: "value",
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    }],
    series: [{
      name: "数量",
      type: "bar",
      barWidth: "55%",
      label: {
        normal: {
          show: true,
          position: "left",
          formatter: "{c}条",
          textStyle: {
            color: "#fff"
          }
        }
      },
      data: y
    }]
  };
  accessLeft.setOption(option5);
}


function accessRight(x, y) {
  var accessRight = echarts.init(document.getElementById("accessRight"));
  option6 = {
    color: ["#c307c6"],
    grid: {
      left: "1%",
      right: "30%",
      top: "15%",
      height: '60%',
      containLabel: true
    },
    tooltip: {
      show: "true",
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    yAxis: {
      data: x,
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      interval: 300,
      axisLabel: {
        show: true,
        interval: 0,
        color: "#fff",
        fontSize: 13
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#fff"
        }
      }
    },

    xAxis: [{
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false //让Y轴数据不显示
      },
      axisTick: {
        show: false
      },
      type: "value"
    }],
    series: [{
      name: "数量",
      type: "bar",
      barWidth: "45%",
      boundaryGap: false,
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: "{c}条",
          textStyle: {
            color: "#fff"
          }
        }
      },
      data: y
    }]
  };



  accessRight.setOption(option6);
}

var chartCf = echarts.init(document.getElementById("chartCf"));
var data = [12, 7, 12, 6];
var dataShadow = [];
var yMax = 12;
for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}
option100 = {

    color: ['#fff'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '15%',
        containLabel: true,

    },
    xAxis: [{
        type: 'category',
        data: ['15年', '16年', '17年', '18年'],

        axisTick: {
            alignWithLabel: true,
            show: false,
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        }
    }],
    yAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        },
        splitLine: { //保留网格线
            show: true,
            lineStyle: { //y轴网格线设置
                color: '#fff',
                width: 1,
                type: 'solid'
            }
        },
    },
    series: [{ // For shadow
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(100,100,100,0.05)'
                }
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow,
            animation: false
        },
        {
            name: '监控个数',
            type: 'bar',
            barWidth: '60%', //去掉这个则会显示柱状阴影
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#ef6e46'
                            },
                            {
                                offset: 0.5,
                                color: '#ef6e46'
                            },
                            {
                                offset: 1,
                                color: '#ef6e46'
                            }
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#ef6e46'
                            },
                            {
                                offset: 0.7,
                                color: '#ef6e46'
                            },
                            {
                                offset: 1,
                                color: '#ef6e46'
                            }
                        ]
                    )
                }
            },
            data: data,
        }
    ]
};
chartCf.setOption(option100);
