var equipmentA = echarts.init(document.getElementById("equipmentA"));
var dataAll = [110, 120, 160, 140, 120, 160, 150, 120];
var data1 = []; //放第二级
var data2 = [] //放最下级
var data3 = []; //放第三级
for (let a = 0; a < dataAll.length; a++) {
    data3.push(dataAll[a] - 70);
}
for (let i = 0; i < dataAll.length; i++) {
    data2.push(30);
    data1.push(dataAll[i] - data3[i] - 30);
}

option1 = {
    "color": ["#3cefff"],
    "tooltip": {},
    "grid": {
        "containLabel": true,
        left: '2%',
        top: '15%',
        bottom: '5%'
    },
    "legend": {
        "data": ["故障", "维修", "正常"],
        itemWidth: 30,
        itemHeight: 16,
        itemGap: 30,
        padding: [5, 10, 5, 10, 5],
        "textStyle": {
            "color": '#000',
            fontSize: 15
        }
    },
    "xAxis": [{
        "type": "category",
        "data": ["摄像头", "温湿度", "烟雾感应", "消防喷淋"],
        "axisTick": {
            "alignWithLabel": true
        },
        "nameTextStyle": {
            "color": "#000"
        },
        "axisLine": {
            "lineStyle": {
                "color": "#f1f1f1"
            }
        },
        "axisLabel": {
            "textStyle": {
                "color": "#000",
                fontSize: 16
            }
        }
    }],
    "yAxis": [{
        "type": "value",
        "axisLabel": {
            "textStyle": {
                "color": "#000",
                fontSize: 16
            },
            "formatter": "{value}"
        },
        "splitLine": {
            "lineStyle": {
                "color": "#f1f1f1"
            }
        },
        "axisLine": {
            "show": false,
        }
    }],
    "series": [{
        "type": "bar",
        "name": "故障",
        "stack": 2,
        "itemStyle": {
            "normal": {
                "color": '#ff7373'
            }
        },
        "barWidth": "50",
        "data": data2,
    }, {
        "type": "bar",
        "name": "维修",
        "stack": 2,
        "itemStyle": {
            "normal": {
                "color": '#ffa107'
            },
            "emphasis": {
                "color": '#FD5916'
            }
        },
        "barWidth": "50",
        "data": data1,
    }, {
        "type": "bar",
        "name": "正常",
        "stack": 2,
        "itemStyle": {
            "normal": {
                "color": '#5db0ff'
            },
        },
        "barWidth": "50",
        "data": data3,
    }]
}
var equipmentB = echarts.init(document.getElementById("equipmentB"));
option2 = {
    title: {
        text: '发现问题',
        subtext: '24  ',
        textStyle: {
            color: '#000',
            fontSize: 16,
            align: 'center'
        },
        subtextStyle: {
            fontSize: 16,
            color: ['#000']
        },
        x: 'center',
        y: '55%',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        top: 10,
        left: 'center',
        data: ['已处理', '直接访问']
    },
    series: [{
        name: '访问来源',
        color: ['#329eff', '#f0f1f5'],
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['50%', '60%'],
        data: [{
            value: 8,
            name: '已处理',
            selected: true
        }, {
            value: 20,
            name: '直接访问'
        }, ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};
var population1 = echarts.init(document.getElementById("population1"));
option3 = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',

    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '68%',
        center: ['50%', '40%'],
        color: ['#56c49f', '#5db0ff', '#ff0000'],
        labelLine: {
            normal: {
                lineStyle: {
                    color: '#555'
                }
            }
        },
        label: {
            normal: {
                formatter: '{b}\n  (党员数{c}）',
                textStyle: {
                    fontSize: 16,
                    color: '#555'
                }
            }
        },
        data: [
            { value: 53, name: '来沪人员 863' },
            { value: 291, name: '本市人口 3922' },
            { value: '', name: '党员数  344' }
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

var population2 = echarts.init(document.getElementById("population2"));
option4 = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '68%',
        center: ['50%', '45%'],
        color: ['#ffa107', '#7a6fcb', '#a49bdb', '#ff4d4d'],
        labelLine: {
            normal: {
                lineStyle: {
                    color: '#319dff'
                }
            }
        },
        label: {
            normal: {
                formatter: '{b}\n ',
                textStyle: {
                    fontSize: 16,
                    color: '#555'
                }
            }
        },
        data: [
            { value: 932, name: '自住 932' },
            { value: 285, name: '出租 285' },
            { value: 2, name: '群租 2' },
            { value: 165, name: '空关 165' },
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};



equipmentA.setOption(option1);
equipmentB.setOption(option2);
population1.setOption(option3);
population2.setOption(option4);
window.addEventListener('resize', function() {
    equipmentA.resize();
    equipmentB.resize();
    population1.resize();
    population2.resize();
})