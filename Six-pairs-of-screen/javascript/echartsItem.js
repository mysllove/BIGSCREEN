var pieChart1 = echarts.init(document.getElementById("pieChart1"));
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: '50%',
        y: 'center',
        align: 'left',
        textStyle: {
            fontSize: 15,
            fontWeight: 'bold'
        },
        formatter: function(name) {
            var oa = option.series[0].data;
            var num = oa[0].value
            for (var i = 0; i < option.series[0].data.length; i++) {
                if (name == oa[i].name) {
                    return name + ' ' + oa[i].value
                }
            }
        },
        data: ['内环内', '内中环', '中外环', '外环外'],

    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['55%', '80%'],
        center: ['30%', '50%'],
        color: ['#26e2f4', '#ff0511', '#fee014', '#0f8200'],
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
        data: [
            { value: 9, name: '内环内' },
            { value: 20, name: '内中环' },
            { value: 51, name: '中外环' },
            { value: 155, name: '外环外' },

        ]
    }]
};


pieChart1.setOption(option);
// window.addEventListener('resize', function() {
//     pieChart1.resize();
// })