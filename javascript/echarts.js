const chartStatistics = echarts.init(document.getElementById('chartStatistics'));
option1 = {
    grid: {
        top: "25%",
        left: "15%",
        top: "5%",
        bottom: "10%"
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            label: {
                show: true
            }
        }
    },
    xAxis: {
        data: [
            "甲类危化品",
            "乙类危化品",
            "丙类危化品",


        ],
        gridIndex: 0,
        axisLine: {
            show: true //隐藏X轴轴线
        },
        axisTick: {
            show: true, //隐藏X轴刻度
            alignWithLabel: true
        },
        axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
                color: '#fff' //X轴文字颜色
            }
        },
        axisLine: {
            lineStyle: {
                color: '#01FCE3'
            }
        },
    },
    yAxis: [{
            type: "value",
            name: "",
            nameTextStyle: {
                color: "#ebf8ac"
            },
            position: "left",
            splitLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff"
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
        },
        {
            type: "value",
            name: "",
            nameTextStyle: {
                color: "#ebf8ac"
            },
            position: "left",
            splitLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                formatter: "{value} 吨", //右侧Y轴文字显示
                textStyle: {
                    color: "#fff"
                }
            }
        },
        {
            type: "value",
            gridIndex: 0,
            min: 0,
            max: 5000,
            splitNumber: 8,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                }
            }
        }
    ],
    series: [{
            name: "危化品数量",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#fff"
            },
            lineStyle: {
                color: "#058cff"
            },
            areaStyle: {
                color: "rgba(4,57,149, 0.2)"
            },
            data: [800, 4000, 1900]
        }

    ]
};
const trend = echarts.init(document.getElementById('trend'));

option1s = {

    grid: {
        top: "25%",
        left: "15%",
        top: "15%",
        bottom: "10%"
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            label: {
                show: true
            }
        }
    },
    xAxis: {
        data: [
            "10/1",
            "10/5",
            "10/9",
            "10/13",
            "10/17",
            "10/21",
            "10/25",
            "10/29",
        ],
        gridIndex: 0,
        axisLine: {
            show: true //隐藏X轴轴线
        },
        axisTick: {
            show: true, //隐藏X轴刻度
            alignWithLabel: true
        },
        axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
                color: '#fff' //X轴文字颜色
            }
        },
        axisLine: {
            lineStyle: {
                color: '#01FCE3'
            }
        },
    },
    yAxis: [{
            type: "value",
            name: "",
            nameTextStyle: {
                color: "#ebf8ac"
            },
            position: "left",
            splitLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff"
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
        },
        {
            type: "value",
            name: "",
            nameTextStyle: {
                color: "#ebf8ac"
            },
            position: "left",
            splitLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                formatter: "{value} ", //右侧Y轴文字显示
                textStyle: {
                    color: "#fff"
                }
            }
        },
        {
            type: "value",
            gridIndex: 0,
            min: 0,
            max: 5000,
            splitNumber: 8,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                }
            }
        }
    ],
    series: [{
            name: "危化品数量",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#fff"
            },
            lineStyle: {
                color: "#058cff"
            },
            areaStyle: {
                color: "rgba(4,57,149, 0.2)"
            },
            data: [750, 850, 900, 1400, 1200, 920, 300, 940]
        }

    ]
};
const StatisticsOne = echarts.init(document.getElementById('StatisticsOne'));
option2 = {
    title: {
        text: "46%",
        x: 'center',
        y: 'center',
        textStyle: {
            color: "#fff",
            fontSize: 20,
            fontWeight: 'normal'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose3', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    calculable: true,
    series: [

        {
            name: '储罐数量',
            type: 'pie',
            radius: ['45%', '75%'],
            center: ['50%', '50%'],
            data: [{
                    value: 34,
                    name: '储罐',
                    itemStyle: {

                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#1072d3'
                        }, {
                            offset: 1,
                            color: '#1072d3'
                        }])
                    },
                    labelLine: {
                        normal: {
                            length: 5,
                            length2: 5,
                            lineStyle: {
                                color: '#266998'
                            }
                        }

                    },
                    label: {
                        color: "rgba(255,255,255,.45)",
                        fontSize: 14,
                        formatter: '已用',
                        rich: {
                            a: {
                                color: "#fff",
                                fontSize: 20,
                                lineHeight: 30
                            },
                        }
                    }
                },
                {
                    value: 52,
                    name: 'rose2',
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            name: '仓库面积',
            type: 'pie',
            radius: ['45%', '65%'],
            center: ['50%', '50%'],
            data: [{
                    value: 34,
                    name: '仓库',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 52,
                    name: 'rose2',
                    itemStyle: {

                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#2f8c5d'
                        }, {
                            offset: 1,
                            color: '#2f8c5d'
                        }])
                    },
                    labelLine: {
                        normal: {
                            length: 5,
                            length2: 5,
                            lineStyle: {
                                color: '#266998'
                            }
                        }

                    },
                    label: {
                        color: "rgba(255,255,255,.45)",
                        fontSize: 14,
                        formatter: '未用',
                        rich: {
                            a: {
                                color: "#fff",
                                fontSize: 20,
                                lineHeight: 30
                            },
                        }
                    }
                }
            ]
        }
    ]
};
const StatisticsTwo = echarts.init(document.getElementById('StatisticsTwo'));
option3 = {
    title: {
        text: "66.5%",
        x: 'center',
        y: 'center',
        textStyle: {
            color: "#fff",
            fontSize: 20,
            fontWeight: 'normal'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose3', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    calculable: true,
    series: [

        {
            name: '储罐数量',
            type: 'pie',
            radius: ['45%', '75%'],
            center: ['50%', '50%'],
            data: [{
                    value: 34,
                    name: '储罐',
                    itemStyle: {

                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#1072d3'
                        }, {
                            offset: 1,
                            color: '#1072d3'
                        }])
                    },
                    labelLine: {
                        normal: {
                            length: 5,
                            length2: 5,
                            lineStyle: {
                                color: '#1a2650'
                            }
                        }
                    },
                    label: {
                        color: "rgba(255,255,255,.45)",
                        fontSize: 14,
                        formatter: '已用',
                        rich: {
                            a: {
                                color: "#fff",
                                fontSize: 20,
                                lineHeight: 30
                            },
                        }
                    }
                },
                {
                    value: 52,
                    name: 'rose2',
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            name: '仓库面积',
            type: 'pie',
            radius: ['45%', '65%'],
            center: ['50%', '50%'],
            data: [{
                    value: 34,
                    name: '仓库',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 52,
                    name: 'rose2',
                    itemStyle: {

                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#2f8c5d'
                        }, {
                            offset: 1,
                            color: '#2f8c5d'
                        }])
                    },
                    labelLine: {
                        normal: {
                            length: 5,
                            length2: 5,
                            lineStyle: {
                                color: '#1a2650'
                            }
                        }
                    },
                    label: {
                        color: "rgba(255,255,255,.45)",
                        fontSize: 14,
                        formatter: '未用',
                        rich: {
                            a: {
                                color: "#fff",
                                fontSize: 20,
                                lineHeight: 30
                            },
                        }
                    }
                }
            ]
        }
    ]
};
const topChart = echarts.init(document.getElementById('topChart'));
option4 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ["#186dda", "#1b9540", "#dfb42a"],
    legend: {
        orient: 'vertical',
        x: 'right',
        data: ['已整改', '整改中', '未改正'],
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 0
        },
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '80%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '16',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 335,
                name: '已整改'
            },
            {
                value: 310,
                name: '整改中'
            },
            {
                value: 234,
                name: '未改正'
            },
        ]
    }]
};
const bottomChart = echarts.init(document.getElementById('bottomChart'));
var data = [{
        name: '1',
        count1: 500,
        count2: 200,
        count3: 200,
    },
    {
        name: '2',
        count1: 560,
        count2: 220,
        count3: 220,
    },
    {
        name: '3',
        count1: 200,
        count2: 560,
        count3: 300,
    },
    {
        name: '4',
        count1: 200,
        count2: 560,
        count3: 300,
    },
    {
        name: '5',
        count1: 200,
        count2: 560,
        count3: 300,
    },
    {
        name: '6',
        count1: 200,
        count2: 560,
        count3: 300,
    },
    {
        name: '7',
        count1: 200,
        count2: 560,
        count3: 300,
    },
    {
        name: '8',
        count1: 200,
        count2: 560,
        count3: 300,
    },
    {
        name: '9',
        count1: 200,
        count2: 560,
        count3: 300,
    },
    {
        name: '10',
        count1: 200,
        count2: 560,
        count3: 300,
    },
]
var names = data.map(v => {
    return v.name
});
var count1 = data.map(v => {
    return v.count1
});
var count2 = data.map(v => {
    return v.count2
});
var count3 = data.map(v => {
    return v.count3
});
var count4 = data.map(v => {
    return v.count4
});
option5 = {

    color: ['#0f51dd', '#bf9e37', '#2c805f'],
    barWidth: '30%',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: '#fff',
        extraCssText: 'box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);',
        textStyle: {
            color: "#333",
        }
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '3%',
        top: '10%',
        containLabel: true
    },

    xAxis: {
        type: 'category',
        axisLabel: {
            formatter: function (name) {
                return echarts.format.truncateText(name, 60, '10px Microsoft Yahei', '…');
            },
            textStyle: {
                color: "#fff"
            }
        },
        axisTick: {
            show: true, //隐藏X轴刻度
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#1a2650'
            }
        },
        data: names
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#1a2650']
            }
        },
        axisLine: {
            lineStyle: {
                color: '#1a2650'
            }
        },
        axisLabel: {
            textStyle: {
                color: "#fff"
            }
        },
    },
    series: [{
            type: 'bar',
            name: '上报统计',
            stack: '总量',
            data: count1
        },
        {
            type: 'bar',
            name: '上报统计2',
            stack: '总量',
            data: count2
        },
        {
            type: 'bar',
            name: '上报统计3',
            stack: '总量',
            data: count3
        }
    ]
};


chartStatistics.setOption(option1);
StatisticsOne.setOption(option2);
StatisticsTwo.setOption(option3);
trend.setOption(option1s);
topChart.setOption(option4);
bottomChart.setOption(option5);
window.addEventListener("resize", function () {
    chartStatistics.resize();
    StatisticsOne.resize();
    StatisticsTwo.resize();
    trend.resize();
    topChart.resize();
    bottomChart.resize();
})