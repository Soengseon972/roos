// 作者：陈麒先
// 时间：2019.5.11

function addLineChart() {
    let oLineGraph = document.getElementsByClassName('line_chart')[0];
    let myLineGraph = echarts.init(oLineGraph, 'dark');

    let data = [["2019-05-01", 116], ["2019-05-02", 129], ["2019-05-03", 135], ["2019-05-04", 86], ["2019-05-05", 73], ["2019-05-06", 85], ["2019-05-07", 73], ["2019-05-08", 68], ["2019-05-09", 92], ["2019-05-10", 130], ["2019-05-11", 245], ["2019-05-12", 139], ["2019-05-13", 115], ["2019-05-14", 111], ["2019-05-15", 309], ["2019-05-16", 205], ["2019-05-17", 137], ["2019-05-18", 128], ["2019-05-19", 129],["2019-05-20", 110],["2019-05-21", 101],["2019-05-22", 133],["2019-05-23", 85], ["2019-05-24", 94], ["2019-05-25", 71], ["2019-05-26", 105], ["2019-05-27", 84], ["2019-05-28", 93], ["2019-05-29", 85], ["2019-05-30", 73], ["2019-06-01", 83], ["2019-06-02", 125], ["2019-06-03", 106], ["2019-06-04", 82], ["2019-06-05", 44], ["2019-06-05", 72], ["2019-06-06", 105], ["2019-06-08", 106], ["2019-06-09", 66], ["2019-06-10", 91], ["2019-06-11", 92], ["2019-06-12", 113], ["2019-06-13", 106], ["2019-06-14", 131], ["2019-06-15", 111], ["2019-06-16", 64], ["2019-06-17", 69], ["2019-06-18", 88], ["2019-06-19", 77], ["2019-06-20", 83]];

    let dateList = data.map(function (item) {
        return item[0];
    });
    let valueList = data.map(function (item) {
        return item[1];
    });
    let lineOption = {
        // Make gradient line here
        visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
        }, {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: dateList.length - 1
        }],


        title: [{
            top:'5%',
            left: 'center',
            text: '用户使用时长'
        }, {
            top: '55%',
            left: 'center',
            text: '设备占用时长'
        }],
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [{
            name: 'date',
            data: dateList
        }, {
            name: 'date',
            data: dateList,
            gridIndex: 1
        }],
        yAxis: [{
            name: 'min/Day',
            splitLine: { show: false }
        }, {
            name: 'min/Day',
            splitLine: { show: false },
            gridIndex: 1
        }],
        grid: [{
            bottom: '60%'
        }, {
            top: '60%'
        }],
        series: [{
            type: 'line',
            showSymbol: false,
            data: valueList
        }, {
            type: 'line',
            showSymbol: false,
            data: valueList,
            xAxisIndex: 1,
            yAxisIndex: 1
        }]
    };

    myLineGraph.setOption(lineOption);
}

// 初始化函数
function init() {
    addLineChart();
}
// 执行JS脚本
init();