var funnel = echarts.init(document.getElementById("funnel"));
var colors = ['#f36119', '#ff9921', '#20c8ff', '#2cb7ff', '#1785ef'];
option2 = {
    color: colors,
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "cross",
            "label": {
                "backgroundColor": "red"
            },
            "lineStyle": {
                "color": "#9eb2cb"
            }
        }
    },
    series: [{
        type: 'funnel',
        top: 0,
        left: '-5%',
        width: '100%',
        height: 140,
        gap: 2,
        minSize: 200,
        maxSize: 100,
        label: {
            show: true,
            position: 'inside',
            fontSize: 15,
            color: '#fff',
            formatter: '{b}  {c}个'
        },
        itemStyle: {
            emphasis: {
                barBorderRadius: [10, 10, 10, 10]
            },
            normal: {
                color: function(params) {
                    var colorList = [
                        ['#5ca1c9', '#2d95f8', '#2693ff'],
                        ['#f5c630', '#bcb869', '#83aaa2'],
                        ['#ffa84a', '#ffb53d', '#ffc22e'],
                        ['#ff9540', '#ff7729', '#ff621a']
                    ];
                    var index = params.dataIndex;
                    if (params.dataIndex >= colorList.length) {
                        index = params.dataIndex - colorList.length;
                    }
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: colorList[index][0]
                    }, {
                        offset: 0.5,
                        color: colorList[index][1]
                    }, {
                        offset: 1,
                        color: colorList[index][2]
                    }, ]);
                }
            }
        },
        data: [{
                value: 20,
                name: '四级'
            },
            {
                value: 40,
                name: '三级'
            },
            {
                value: 60,
                name: '二级'
            },
            {
                value: 80,
                name: '一级'
            },
        ]
    }, ]
};
var pieChart = echarts.init(document.getElementById("pieChart"));
option3 = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    grid: {
        top: '10%',
    },
    series: [{
        label: {
            show: true,
            formatter: "{b}  {c}个",
            textStyle: {
                color: '#000'
            }
        },
        color: ['#ff9326', '#42c3ff'],
        name: '访问来源',
        type: 'pie',
        radius: '73%',
        center: ['50%', '50%'],
        data: [
            { value: 3, name: '重点工艺', selected: true },
            { value: 9, name: '重点危化品' },

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


funnel.setOption(option2);
pieChart.setOption(option3);
window.addEventListener('resize', function() {
    funnel.resize();
    pieChart.resize();
})