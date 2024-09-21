//交通流量
var data = {
    id: 'multipleBarsLines',
    legendBar: ['长江学者', '中科院院士'],
    symbol: ' ', //数值是否带百分号        --默认为空 ''
    // legendLine: ['环比', '同比'],
    xAxis: ['自然科学', '工程技术', '社会科学', '人文学科'],
    yAxis: [
        [495, 627, 260, 168],
        [276, 106, 0, 0]
    ],
    // lines: [
    //     [10, 10, 9, 11, 7, 4],
    //     [6, 12, 12, 2, 4, 4]
    // ],
    barColor: ['#009883', '#e66922'], //柱子颜色 必填参数
    lineColor: ['#fd6665', '#fba73b'], // 折线颜色

}

var myData = (function test() {
    let yAxis = data.yAxis || []
    // let lines = data.lines || []
    let legendBar = data.legendBar || []
    // let legendLine = data.legendLine || []
    var symbol = data.symbol || ' '
    let seriesArr = []
    let legendArr = []
    yAxis && yAxis.forEach((item, index) => {
        legendArr.push({
            name: legendBar && legendBar.length > 0 && legendBar[index]
        })
        seriesArr.push({
            name: legendBar && legendBar.length > 0 && legendBar[index],
            type: 'bar',
            barGap: '0.5px',
            data: item,
            barWidth: data.barWidth || 12,
            label: {
                normal: {
                    show: false,
                    formatter: '{c}' + symbol,
                    position: 'top',
                    textStyle: {
                        color: '#000',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        textAlign: 'left',
                        fontSize: 11,
                    },
                },
            },
            itemStyle: { //图形样式
                normal: {
                    barBorderRadius:0,
                    borderWidth:1,
                    borderColor:'#ddd',
                    color: data.barColor[index]
                },
            }
        })
    })

    // lines && lines.forEach((item, index) => {
    //     legendArr.push({
    //         name: legendLine && legendLine.length > 0 && legendLine[index]
    //     })
    //     seriesArr.push({
    //         name: legendLine && legendLine.length > 0 && legendLine[index],
    //         type: 'line',
    //         data: item,
    //         itemStyle: {
    //             normal: {
    //                 color: data.lineColor[index],
    //                 lineStyle: {
    //                     width: 2,//折线宽度
    //                     type: 'solid',
    //                 }
    //             }
    //         },
    //         label: {
    //             normal: {
    //                 show: false, //折线上方label控制显示隐藏
    //                 position: 'top',
    //             }
    //         },
    //         symbol: 'circle',
    //         symbolSize: 5
    //     })
    // })

    return {
        seriesArr,
        legendArr
    }
})()
option1 = {
    title: {
        show: true,
        text: data.title,
        subtext: data.subTitle,
        link: '1111'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var time = '';
            var str = '';
            for (var i of params) {
                time = i.name.replace(/\n/g, '') + '<br/>';
                if (i.data == 'null' || i.data == null) {
                    str += i.seriesName + '：无数据' + '<br/>'
                } else {
                    str += i.seriesName + '：' + i.data + '人<br/>'
                }

            }
            return time + str;
        },
        axisPointer: {
            type: 'none'
        },
    },
    legend: {
        right: data.legendRight || '30%',
        top: 0,
        right:10,
        itemGap: 16,
        itemWidth: 10,
        itemHeight: 10,
        data: myData.legendArr,
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    grid: {
        x: 0,
        y: 30,
        x2: 0,
        y2: 25,
    },
    xAxis: {
        type: 'category',
        data: data.xAxis,
        axisTick: {
            show: true,
        },

        axisLine: {
            show: false,
        },
        axisLabel: {       //轴标
            show: true,
            interval: '-1',
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 12,
                color:'#fff',
            },
            // rich: {
            //     Sunny: {
            //         height: 50,
            //         // width: 60,
            //         padding: [0, 5, 0, 5],
            //         align: 'center',
            //     },
            // },
            // formatter: function(params, index) {
            //     var newParamsName = "";
            //     var splitNumber = 5;
            //     var paramsNameNumber = params && params.length;
            //     if (paramsNameNumber && paramsNameNumber <= 4) {
            //         splitNumber = 4;
            //     } else if (paramsNameNumber >= 5 && paramsNameNumber <= 7) {
            //         splitNumber = 4;
            //     } else if (paramsNameNumber >= 8 && paramsNameNumber <= 9) {
            //         splitNumber = 5;
            //     } else if (paramsNameNumber >= 10 && paramsNameNumber <= 14) {
            //         splitNumber = 5;
            //     } else {
            //         params = params && params.slice(0, 15);
            //     }
            //
            //     var provideNumber = splitNumber; //一行显示几个字
            //     var rowNumber = Math.ceil(paramsNameNumber / provideNumber) || 0;
            //     if (paramsNameNumber > provideNumber) {
            //         for (var p = 0; p < rowNumber; p++) {
            //             var tempStr = "";
            //             var start = p * provideNumber;
            //             var end = start + provideNumber;
            //             if (p == rowNumber - 1) {
            //                 tempStr = params.substring(start, paramsNameNumber);
            //             } else {
            //                 tempStr = params.substring(start, end) + "\n";
            //             }
            //             newParamsName += tempStr;
            //         }
            //
            //     } else {
            //         newParamsName = params;
            //     }
            //     params = newParamsName
            //     return '{Sunny|' + params + '}';
            // },
            color: '#687284',
        },
        splitNumber: 4,
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F1F3F5',
                type: 'solid'
            },
            interval: 2
        },
        splitNumber: 4,
    },
    series: myData.seriesArr
}
//////////////////////交通流量 end

//交通工具流量
option2 = {
    
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['长江学者', '中科院院士'],
        right: '10px',
        top: '0px',
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    grid: {
        x: 35,
        y: 25,
        x2: 8,
        y2: 25,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            textStyle: {
                color:'#fff',
            },
        },
        data: ['1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            },
            textStyle: {
                color:'#fff',
            },
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [{
        name: '长江学者',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(137, 189, 27, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)'
            }
        },
        data: [59,95,67,89,50,0,93,67,65,58,94,92,0,135,99,159,0,87,81,85,0,0,0,0]
    }, {
        name: '中科院院士',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)'
            }
        },
        data: [0,46,0,47,0,51,0,45,0,24,0,20,0,32,0,50,0,12,0,5,0,49,0,1]
    }, ]
};
//////////////////////交通工具流量 end

//本月发生事件1
var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
var data = [{
        "name": "超速",
        "value": 30
    },
    {
        "name": "闯红灯",
        "value": 30
    },
    {
        "name": "闯禁行",
        "value": 42
    },
    {
        "name": "违停",
        "value": 50
    },
    {
        "name": "逆行",
        "value": 34
    }
];

var max = data[0].value;
data.forEach(function(d) {
    max = d.value > max ? d.value : max;
});

var renderData = [{
    value: [],
    name: "告警类型TOP5",
    symbol: 'none',
    lineStyle: {
        normal: {
            color: '#ecc03e',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: 'rgba(203, 158, 24, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(190, 96, 20, 0.8)'
                }],
                false)
        }
    }
}];


data.forEach(function(d, i) {
    var value = ['', '', '', '', ''];
    value[i] = max,
    renderData[0].value[i] = d.value;
    renderData.push({
        value: value,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
            }
        }
    })
})
var indicator = [];

data.forEach(function(d) {
    indicator.push({
        name: d.name,
        max: max,
        color: '#fff'
    })
})


option3 = {
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}
//////////////////////本月发生事件1 end
//本月发生事件2
var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
var data = [{
        "name": "超速",
        "value": 15
    },
    {
        "name": "闯红灯",
        "value": 14
    },
    {
        "name": "闯禁行",
        "value": 23
    },
    {
        "name": "违停",
        "value": 2
    },
    {
        "name": "逆行",
        "value": 50
    }
];

var max = data[0].value;
data.forEach(function(d) {
    max = d.value > max ? d.value : max;
});

var renderData = [{
    value: [],
    name: "告警类型TOP5",
    symbol: 'none',
    lineStyle: {
        normal: {
            color: '#ecc03e',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: 'rgba(203, 158, 24, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(190, 96, 20, 0.8)'
                }],
                false)
        }
    }
}];


data.forEach(function(d, i) {
    var value = ['', '', '', '', ''];
    value[i] = max,
    renderData[0].value[i] = d.value;
    renderData.push({
        value: value,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
            }
        }
    })
})
var indicator = [];

data.forEach(function(d) {
    indicator.push({
        name: d.name,
        max: max,
        color: '#fff'
    })
})


option31 = {
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}
//////////////////////本月发生事件2 end



//收费站收费排行1
var spirit = '../images.ksh45.png';

var maxData = 200;

option4 = {
   "title": {
      "text": " ",
      "left": "center",
      "y": "10",
      "textStyle": {
        "color": "#fff"
      }
    },
    
    "grid": {
      "left": 30,
      "top": 0,
      "bottom": 10
    },
    "tooltip": {
      "trigger": "item",
      "textStyle": {
        "fontSize": 12
      },
      "formatter": "{b0}:{c0}"
    },
    "xAxis": {
      "max": 100,
      "splitLine": {
        "show": false
      },
      "axisLine": {
        "show": false
      },
      "axisLabel": {
        "show": false
      },
      "axisTick": {
        "show": false
      }
    },
    "yAxis": [
      {
        "type": "category",
        "inverse": false,
        "data": [
          "晋城",
          "太旧",
          "太原",
          "吕梁",
          "长治",
        ],
        "axisLine": {
          "show": false
        },
        "axisTick": {
          "show": false
        },
        "axisLabel": {
          "margin": -4,
          "textStyle": {
            "color": "#fff",
            "fontSize": 16.25
          }
        }
      },
    
    ],
    "series": [
      {
        "type": "pictorialBar",
        "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
        "symbolRepeat": "fixed",
        "symbolMargin": "5%",
        "symbolClip": true,
        "symbolSize": 22.5,
        "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        "symbolBoundingData": 300,
        "data": [
          13,
          42,
          67,
          81,
          86,
          
        ],
        "z": 10
      },
      {
        "type": "pictorialBar",
        "itemStyle": {
          "normal": {
            "opacity": 0.3
          }
        },
        "label": {
          "normal": {
            "show": false
          }
        },
        "animationDuration": 0,
        "symbolRepeat": "fixed",
        "symbolMargin": "5%",
        "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
        "symbolSize": 22.5,
        "symbolBoundingData": 300,
        "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        "data": [
          13,
          42,
          67,
          81,
          86,
          
        ],
        "z": 5
      }
    ]
};


// Make dynamic data.
function random() {
    return +(Math.random() * (maxData - 10)).toFixed(1);
}
setInterval(function () {
    var dynamicData = [random(), random(), random(), random(),random(), random(), random(), random(),random(),random()];
    myChart.setOption({
        series: [{
            data: dynamicData.slice()
        }, {
            data: dynamicData.slice()
        }]
    })
}, 3000)
//////////////////////收费站收费排行2 end

//收费站收费排行2
var spirit = '../images.ksh45.png';

var maxData = 200;

option41 = {
   "title": {
      "text": " ",
      "left": "center",
      "y": "10",
      "textStyle": {
        "color": "#fff"
      }
    },
    
    "grid": {
      "left": 30,
      "top": 0,
      "bottom": 10
    },
    "tooltip": {
      "trigger": "item",
      "textStyle": {
        "fontSize": 12
      },
      "formatter": "{b0}:{c0}"
    },
    "xAxis": {
      "max": 100,
      "splitLine": {
        "show": false
      },
      "axisLine": {
        "show": false
      },
      "axisLabel": {
        "show": false
      },
      "axisTick": {
        "show": false
      }
    },
    "yAxis": [
      {
        "type": "category",
        "inverse": false,
        "data": [
          "朔州",
          "大同",
          "运城",
          "忻州",
          "临汾",
        ],
        "axisLine": {
          "show": false
        },
        "axisTick": {
          "show": false
        },
        "axisLabel": {
          "margin": -4,
          "textStyle": {
            "color": "#fff",
            "fontSize": 16.25
          }
        }
      },
    
    ],
    "series": [
      {
        "type": "pictorialBar",
        "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
        "symbolRepeat": "fixed",
        "symbolMargin": "5%",
        "symbolClip": true,
        "symbolSize": 22.5,
        "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        "symbolBoundingData": 300,
        "data": [
          51,
          32,
          82,
          42,
          81,
          
        ],
        "z": 10
      },
      {
        "type": "pictorialBar",
        "itemStyle": {
          "normal": {
            "opacity": 0.3
          }
        },
        "label": {
          "normal": {
            "show": false
          }
        },
        "animationDuration": 0,
        "symbolRepeat": "fixed",
        "symbolMargin": "5%",
        "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
        "symbolSize": 22.5,
        "symbolBoundingData": 300,
        "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        "data": [
          51,
          32,
          82,
          42,
          81,
          
        ],
        "z": 5
      }
    ]
};


// Make dynamic data.
function random() {
    return +(Math.random() * (maxData - 10)).toFixed(1);
}
setInterval(function () {
    var dynamicData = [random(), random(), random(), random(),random(), random(), random(), random(),random(),random()];
    myChart.setOption({
        series: [{
            data: dynamicData.slice()
        }, {
            data: dynamicData.slice()
        }]
    })
}, 3000)
//////////////////////收费站收费排行2 end

//今日实时收费

var shadowColor = '#374b86';
var value = allData2['Ⅴ-当选科技人才 → -Ⅵ-2024年']['流失'];
option5 = {
    
    title: {
        //text: `${value}万辆`,
        text: `人才流失\n省份数量`,
        subtext: '',
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
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
            value: value,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: { 
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' || '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' || '#367bec' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' || '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' || '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - value,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}

var shadowColor = '#374b86';
var value = allData2['Ⅴ-当选科技人才 → -Ⅵ-2024年']['中转'];
option6 = {
    
    title: {
        //text: `${value}万辆`,
        text: `人才中转\n省份数量`,
        subtext: '',
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
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
            value: value,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: { 
                        colorStops: [{
                            offset: 0,
                            color: '#02df94' || '#25d6bc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#28d3d0' || '#14dbaa' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#02df94' || '#25d6bc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#28d3d0' || '#14dbaa' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - value,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}

var shadowColor = '#374b86';
var value = allData2['Ⅴ-当选科技人才 → -Ⅵ-2024年']['引进'];
option7 = {
    
    title: {
        //text: `${value}万辆`,
        text: `人才引进\n省份数量`,
        subtext: '',
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
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
            value: value,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: { 
                    colorStops: [{
                            offset: 0,
                            color: '#eb3600' || '#cc9a00' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#d0a00e' || '#d0570e' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#eb3600' || '#cc9a00' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#d0a00e' || '#d0570e' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - value,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}
//////////////////////今日实时收费 end

option22 = {
    color: [{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#2C8179' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#18C4B9' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#ACBF95' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#7CBF2B' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#508097' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#1C3979' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#DBB8B2' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#DBB8B2' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#FD76F3' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#FD76F3' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#2C8179' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#18C4B9' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#ACBF95' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#7CBF2B' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#508097' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#1C3979' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#DBB8B2' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#DBB8B2' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#FD76F3' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#FD76F3' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    },{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#85D0FF' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#85D0FF' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }],
    title: [{
        top: 60,
        left: 60,
        textStyle: {
            fontSize: 16,
            color: 'rgba(255,255,255,.6)'
        },
        text: '生产力'
    },{
        top: 130,
        right: 145,
        textStyle: {
            fontSize: 16,
            color: 'rgba(255,255,255,.6)'
        },
        text: '影响力'
    },{
        top: 60,
        right: 58,
        textStyle: {
            fontSize: 16,
            color: 'rgba(255,255,255,.6)'
        },
        text: '创新力'
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#508097' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#1C3979' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        show:false,
        left: 10,
        textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.7)'
        },
        data: ['P-Ⅰ', 'P-Ⅱ','P-Ⅲ', 'P-Ⅳ','P-Ⅴ',
            'Z-Ⅰ', 'Z-Ⅱ','Z-Ⅲ', 'Z-Ⅳ','Z-Ⅴ','Z-Ⅵ',
            'S-Ⅰ', 'S-Ⅱ','S-Ⅲ', 'S-Ⅳ']
    },
    grid: {
        containLabel: true
    },
    series: [{
        name: '科研生产力成长类型',
        type: 'pie',
        radius: ['25%', '45%'],
        center: ['25%', '35%'],
        avoidLabelOverlap: false,
        label: {
            // show: false,
            position: 'inner',
            fontSize: '10',
            formatter: '{b} {c} 人'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 175, name: 'P-Ⅰ' },
            { value: 689, name: 'P-Ⅱ' },
            { value: 326, name: 'P-Ⅲ' },
            { value: 242, name: 'P-Ⅳ' },
            { value: 235, name: 'P-Ⅴ' },
        ]
    }, {
        name: '学术影响力成长类型',
        type: 'pie',
        radius: ['25%', '45%'],
        center: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
            // show: false,
            position: 'inner',
            fontSize: '10',
            formatter: '{b} {c} 人'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 120, name: 'Z-Ⅰ' },
            { value: 107, name: 'Z-Ⅱ' },
            { value: 242, name: 'Z-Ⅲ' },
            { value: 374, name: 'Z-Ⅳ' },
            { value: 257, name: 'Z-Ⅴ' },
            { value: 567, name: 'Z-Ⅵ' },
        ]
    }, {
        name: '学术创新力成长类型',
        type: 'pie',
        radius: ['25%', '45%'],
        center: ['75%', '35%'],
        avoidLabelOverlap: false,
        label: {
            // show: false,
            position: 'inner',
            fontSize: '10',
            formatter: '{b} {c} 人'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 130, name: 'S-Ⅰ' },
            { value: 678, name: 'S-Ⅱ' },
            { value: 526, name: 'S-Ⅲ' },
            { value: 245, name: 'S-Ⅳ' },
        ]
    }]
};



option3 = {
     	color:["#fd8f1e","#7cb5ec","#4280f1","#957bde"],
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
	        },
	    },
   		grid: {
	        left: '10%',
	        right: '15%',
	        bottom: '15%',
	        top: '5%',
	        containLabel: true,
	        z: 22
	    },

	    legend: {
	        data: ['R-Ⅰ', 'R-Ⅱ', 'R-Ⅲ', 'R-Ⅳ'],
	        textStyle: {
	            fontSize: 12,
	            color:"#fff"
	        },
	        icon:"rect",
	        itemWidth:10,
	        itemHeight:10,
	        bottom:"1%"
	    },

	    xAxis: {
	    	name:'人数',
	    	nameTextStyle:{
	    		color:"#fff"
	    	},
	        axisLabel:{
	            textStyle: {
	                color:'#fff',
	                 fontSize:12,
	            }
	        },
	        splitLine: {
	            lineStyle: {
	                color: "#24214e",
	            }
	        },
			 axisLine: {
	            lineStyle: {
	                type: 'solid',
	                color:'#24214e',
	                width:'1',                                                //坐标线的宽度
	            }
	        }
	    },
	    yAxis: {
	        data: ['自然科学', '工程技术', '社会科学', '人文学科'],
	        axisLabel: {
		            textStyle: {
		                color: '#fff',
		                 fontSize:12,//坐标值得具体的颜色
		            }
		        },
		        axisLine: {
		             lineStyle: {
		                type: 'solid',
		                color:'#24214e',
		                width:'1',                                                //坐标线的宽度

		            }
		        },
	    },
	    series: [{
	            name: 'R-Ⅰ',
	            type: 'bar',
	            stack: '总量',
	            barWidth:20,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [104, 88, 32, 18]
	        }, {
	            name: 'R-Ⅱ',
	            type: 'bar',
	            barWidth:20,
	            stack: '总量',
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [241, 279, 69, 37]
	        }, {
	            name: 'R-Ⅲ',
	            type: 'bar',
	            stack: '总量',
	            barWidth:20,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [158, 106, 42, 23]
	        }, {
	            name: 'R-Ⅳ',
	            type: 'bar',
	            stack: '总量',
	            barWidth:20,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [111, 157, 39, 9]
	        },

	    ]
	}



option31 = {
     	color:["#fd8f1e","#7cb5ec","#4280f1","#957bde","#009883"],
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
	        },
	    },
   		grid: {
	        left: '10%',
	        right: '15%',
	        bottom: '15%',
	        top: '5%',
	        containLabel: true,
	        z: 22
	    },

	    legend: {
	        data: ['e-Ⅰ', 'e-Ⅱ', 'e-Ⅲ', 'e-Ⅳ',"e-Ⅴ"],
	        textStyle: {
	            fontSize: 12,
	            color:"#fff"
	        },
	        icon:"rect",
	        itemWidth:10,
	        itemHeight:10,
	        bottom:"1%"
	    },

	    xAxis: {
	    	name:'人数',
	    	nameTextStyle:{
	    		color:"#fff"
	    	},
	        axisLabel:{
	            textStyle: {
	                color:'#fff',
	                 fontSize:12,
	            }
	        },
	        splitLine: {
	            lineStyle: {
	                color: "#24214e",
	            }
	        },
			 axisLine: {
	            lineStyle: {
	                type: 'solid',
	                color:'#24214e',
	                width:'1',                                                //坐标线的宽度
	            }
	        }
	    },
	    yAxis: {
	        data: ['自然科学', '工程技术', '社会科学', '人文学科'],
	        axisLabel: {
		            textStyle: {
		                color: '#fff',
		                 fontSize:12,//坐标值得具体的颜色
		            }
		        },
		        axisLine: {
		             lineStyle: {
		                type: 'solid',
		                color:'#24214e',
		                width:'1',                                                //坐标线的宽度

		            }
		        },
	    },
	    series: [{
	            name: 'e-Ⅰ',
	            type: 'bar',
	            stack: '总量',
	            barWidth:20,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [299, 434, 90, 24]
	        }, {
	            name: 'e-Ⅱ',
	            type: 'bar',
	            barWidth:20,
	            stack: '总量',
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [118, 73, 26, 24]
	        }, {
	            name: 'e-Ⅲ',
	            type: 'bar',
	            stack: '总量',
	            barWidth:20,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [18, 11, 13, 11]
	        }, {
	            name: 'e-Ⅳ',
	            type: 'bar',
	            stack: '总量',
	            barWidth:20,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [35, 5, 22, 16]
	        },{
	            name: 'e-Ⅴ',
	            type: 'bar',
	            stack: '总量',
	            barWidth:20,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [144, 107, 31, 12]
	        },

	    ]
	}



option32 = {
     	color:["#fd8f1e","#7cb5ec","#4280f1","#957bde","#009883","#eb3600","#e9df3d"],
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
	        },
	    },
   		grid: {
	        left: '10%',
	        right: '15%',
	        bottom: '15%',
	        top: '5%',
	        containLabel: true,
	        z: 22
	    },

	    legend: {
	        data: ['J-Ⅰ', 'J-Ⅱ', 'J-Ⅲ', 'J-Ⅳ',"J-Ⅴ", 'J-Ⅵ',"J-Ⅶ"],
	        textStyle: {
	            fontSize: 12,
	            color:"#fff"
	        },
	        icon:"rect",
	        itemWidth:10,
	        itemHeight:10,
	        bottom:"1%"
	    },

	    xAxis: {
	    	name:'人数',
	    	nameTextStyle:{
	    		color:"#fff"
	    	},
	        axisLabel:{
	            textStyle: {
	                color:'#fff',
	                 fontSize:12,
	            }
	        },
	        splitLine: {
	            lineStyle: {
	                color: "#24214e",
	            }
	        },
			 axisLine: {
	            lineStyle: {
	                type: 'solid',
	                color:'#24214e',
	                width:'1',                                                //坐标线的宽度
	            }
	        }
	    },
	    yAxis: {
	        data: ['自然科学', '工程技术', '社会科学', '人文学科'],
	        axisLabel: {
		            textStyle: {
		                color: '#fff',
		                 fontSize:12,//坐标值得具体的颜色
		            }
		        },
		        axisLine: {
		             lineStyle: {
		                type: 'solid',
		                color:'#24214e',
		                width:'1',                                                //坐标线的宽度

		            }
		        },
	    },
	    series: [{
	            name: 'J-Ⅰ',
	            type: 'bar',
	            stack: '总量',
	            barWidth:20,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [110, 76, 34, 11]
	        }, {
	            name: 'J-Ⅱ',
	            type: 'bar',
	            barWidth:20,
	            stack: '总量',
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [145, 185, 34, 15]
	        }, {
	            name: 'J-Ⅲ',
	            type: 'bar',
	            stack: '总量',
	            barWidth:20,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [60, 50, 26, 11]
	        }, {
	            name: 'J-Ⅳ',
	            type: 'bar',
	            stack: '总量',
	            barWidth:20,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [78, 71, 25, 25]
	        },{
	            name: 'J-Ⅴ',
	            type: 'bar',
	            stack: '总量',
	            barWidth:20,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [27, 37, 8, 3]
	        },{
	            name: 'J-Ⅵ',
	            type: 'bar',
	            stack: '总量',
	            barWidth:20,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [114, 126, 26, 6]
	        },{
	            name: 'J-Ⅶ',
	            type: 'bar',
	            stack: '总量',
	            barWidth:20,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [80, 84, 29, 16]
	        },
	    ]
	}




option99 = {
    color:["#fd8f1e","#7cb5ec","#4280f1","#957bde","#009883"],
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 1)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 1)"
            }
        },
        indicator: [
                { name: 'CB-Ⅰ', max: 530},
                { name: 'CB-Ⅱ', max: 130},
                { name: 'CB-Ⅲ', max: 40},
            ],
    },
    series: [{
        type: "radar",
        data: [
            {
                value : [482, 122, 39],
                name : '自然科学'
            },
            {
                value : [527, 96, 17],
                name : '工程技术'
            },
            {
                value : [148, 67, 15],
                name : '社会科学'
            },
            {
                value : [82, 32, 34],
                name : '人文学科'
            },
        ]
    }]
}

option99 = {
    color: ["#fd8f1e","#7cb5ec","#4280f1","#957bde"],
    legend: {
        show:false,
    	textStyle:{//图例文字的样式
                color:'#fff',
                fontSize:12
            },
        data: ['自然科学','工程技术', '社会科学', '人文学科']
    },
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: [
        {
            name: {
                formatter:'{value}',
                textStyle: {
                    color:'#72ACD1',
                    fontSize:10
                },
            },
            radius: "35%",
            center: ['26%', '25%'],
            startAngle: 40, // 起始角度
            splitNumber: 4,
            shape: "circle",
            splitArea: {
                areaStyle: {
                    color: 'transparent'
                }
            },
            axisLabel: {
                show: false,
                fontSize: 20,
                color: "#000",
                fontStyle: "normal",
                fontWeight: "normal"
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255, 255, 255, 1)"
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255, 255, 255, 1)"
                }
            },
            indicator: [
                { name: 'CB-Ⅰ', max: 530},
                { name: 'CB-Ⅱ', max: 130},
                { name: 'CB-Ⅲ', max: 40},
            ]
        },
        {
            name: {
                formatter:'{value}',
                textStyle: {
                    color:'#72ACD1',
                    fontSize:10
                }
            },
            radius: "35%",
            center: ['55%', '70%'],
            startAngle: 40, // 起始角度
            splitNumber: 4,
            shape: "circle",
            splitArea: {
                areaStyle: {
                    color: 'transparent'
                }
            },
            axisLabel: {
                show: false,
                fontSize: 20,
                color: "#000",
                fontStyle: "normal",
                fontWeight: "normal"
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255, 255, 255, 1)"
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255, 255, 255, 1)"
                }
            },
            indicator: [
                    { name: 'CD-Ⅰ', max: 300},
                    { name: 'CD-Ⅱ', max: 170},
                    { name: 'CD-Ⅲ', max: 60},
                    { name: 'CD-Ⅳ', max: 150},
                    { name: 'CD-Ⅴ', max: 30},
            ],
        },
        {
            name: {
                formatter:'{value}',
                textStyle: {
                    color:'#72ACD1',
                    fontSize:10
                }
            },
            type: 'rader',
            radius: "35%",
            center: ['75%', '25%'],
            startAngle: 40, // 起始角度
            splitNumber: 4,
            shape: "circle",
            splitArea: {
                areaStyle: {
                    color: 'transparent'
                }
            },
            axisLabel: {
                show: false,
                fontSize: 20,
                color: "#000",
                fontStyle: "normal",
                fontWeight: "normal"
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255, 255, 255, 1)"
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255, 255, 255, 1)"
                }
            },
            indicator: [
                    { name: 'C-Ⅰ', max: 170},
                    { name: 'C-Ⅱ', max: 480},
                    { name: 'C-Ⅲ', max: 50},
                    { name: 'C-Ⅳ', max: 30},
            ]
        }
    ],
    series: [
        {
            name: '合作广度',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 4
                    }
                }
            },
            data: [
                {
                    value : [482, 122, 39],
                    name : '自然科学',
                    // symbol: 'rect',
                    // symbolSize: 5,
                    // lineStyle: {
                    //     normal: {
                    //         type: 'dashed'
                    //     }
                    // }
                },
                {
                    value : [527, 96, 17],
                    name : '工程技术'
                },
                {
                    value : [148, 67, 15],
                    name : '社会科学'
                },
                {
                    value : [82, 32, 34],
                    name : '人文学科'
                },
                // {
                //     value: [60, 5, 0.30, -100, 1500],
                //     name: '图二',
                //     areaStyle: {
                //         normal: {
                //             color: 'rgba(255, 255, 255, 0.5)'
                //         }
                //     }
                // }
            ]
        },
        {
            name: '合作深度',
            type: 'radar',
            radarIndex: 1,
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 4
                    }
                }
            },
            data: [
                {
                    value : [285, 163, 43, 143, 9],
                    name : '自然科学'
                },
                {
                    value : [271, 166, 53, 146, 4],
                    name : '工程技术'
                },
                {
                    value : [72, 52, 47, 38, 22],
                    name : '社会科学'
                },
                {
                    value : [35, 38, 33, 23, 18],
                    name : '人文学科'
                },
            ]
        },
        {
            name: '合作持续性',
            type: 'radar',
            radarIndex: 2,
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 4
                    }
                }
            },
            data: [
                {
                    value : [167, 424, 48, 4],
                    name : '自然科学'
                },
                {
                    value : [117, 473, 47, 3],
                    name : '工程技术'
                },
                {
                    value : [82, 86, 35, 24],
                    name : '社会科学'
                },
                {
                    value : [78, 19, 21, 19],
                    name : '人文学科'
                },
            ]
        }
    ]
};


var app = {};
var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: echarts.util.reduce(posList, function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        var labelOption = {
            normal: {
                rotate: app.config.rotate,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                position: app.config.position,
                distance: app.config.distance
            }
        };
    }
};
var labelOption = {
    normal: {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: '{c}  {name|{a}}',
        fontSize: 6,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    }
};

option101 = option = {
    color: ["#fd8f1e","#7cb5ec","#4280f1","#957bde"],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    title: [{
        top: 30,
        right: 40,
        textStyle: {
            fontSize: 16,
            color: 'rgba(255,255,255,.6)'
        },
        text: '科研项目申请状况'
    }],
    grid: {
        left: '5%',
        right: '5%',
        bottom: '2%',
        top: '15%',
        containLabel: true,
        z: 22
    },
    legend: {
    	textStyle:{//图例文字的样式
                color:'#dbdbdb',
                fontSize:10
           },
        data: ['自然科学', '工程技术', '社会科学', '人文学科']
    },
    textStyle:{//图例文字的样式
                color:'#dbdbdb',
                fontSize:6
           },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['国家级', '省级', '部级', '市级', '厅级',
            '高校','团体协会'],
            axisLabel: {       //轴标
            show: true,
            interval: '-1',
            rotate:40,
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 12,
                color:'#fff',
            },
        },
        }
    ],
    yAxis: [
        {
            type: 'value',
        }
    ],
    series: [
        {
            name: '自然科学',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            data: [4572,205,18,4,31,0,1]
        },
        {
            name: '工程技术',
            type: 'bar',
            label: labelOption,
            data: [4847,264,37,10,33,0,1]
        },
        {
            name: '社会科学',
            type: 'bar',
            label: labelOption,
            data: [1590,171,233,10,68,1,2]
        },
        {
            name: '人文学科',
            type: 'bar',
            label: labelOption,
            data: [735,74,125,2,37,0,3]
        }
    ]
};



option102 = option = {
    color: ["#fd8f1e","#7cb5ec","#4280f1","#957bde"],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    title: [{
        top: 30,
        right: 40,
        textStyle: {
            fontSize: 16,
            color: 'rgba(255,255,255,.6)'
        },
        text: '科研奖励授予状况'
    }],
    grid: {
        left: '5%',
        right: '5%',
        bottom: '2%',
        top: '15%',
        containLabel: true,
        z: 22
    },
    legend: {
    	textStyle:{//图例文字的样式
                color:'#dbdbdb',
                fontSize:10
           },
        data: ['自然科学', '工程技术', '社会科学', '人文学科']
    },
    textStyle:{//图例文字的样式
                color:'#dbdbdb',
                fontSize:6
           },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['国家级', '省级', '部级', '市级', '厅级',
            '高校','团体协会','其他'],
            axisLabel: {       //轴标
            show: true,
            interval: '-1',
            rotate:40,
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 12,
                color:'#fff',
            },
        },
        }
    ],
    yAxis: [
        {
            type: 'value',
        }
    ],
    series: [
        {
            name: '自然科学',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            data: [9,58,3,4,24,1,32,2]
        },
        {
            name: '工程技术',
            type: 'bar',
            label: labelOption,
            data: [7,73,6,3,32,0,60,1]
        },
        {
            name: '社会科学',
            type: 'bar',
            label: labelOption,
            data: [10,62,3,4,36,1,22,1]
        },
        {
            name: '人文学科',
            type: 'bar',
            label: labelOption,
            data: [6,54,3,3,26,0,16,0]
        }
    ]
};