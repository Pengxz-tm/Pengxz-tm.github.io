var labelOption = {
  show: true,
  position: 'insideBottom',
  distance: 15,
  color:"#FFFFFF",
  align: 'left',
  verticalAlign: 'middle',
  rotate: 90,
  formatter: '{c}  {name|{a}}',
  fontSize: 10,
  rich: {
    name: {}
  }
};
option1 = {
    tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid:{
        top:"20%", bottom:"10%",left:"10%","right":"10%"
  },
  legend: {
    data: ['P-Ⅰ', 'P-Ⅱ', 'P-Ⅲ', 'P-Ⅳ', 'P-Ⅴ'],
      textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: ['自然科学', '工程技术', '社会科学', '人文学科'],
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
            color: '#687284',
        },
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            lineHeight:5,
            padding: [0, 2, 0, 2],
            height: 50,
            fontSize: 12,
            color:'#fff',
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F1F3F5',
                type: 'solid'
            },
            interval: 2
        },
    }
  ],
  series: [
    {
      name: 'P-Ⅰ',
      type: 'bar',
      label: labelOption,
      barGap: 0,
      emphasis: {
        focus: 'series'
      },
      data: [68,39,34,34]
    },
    {
      name: 'P-Ⅱ',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [284,299,69,37]
    },
    {
      name: 'P-Ⅲ',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [83,151,61,31]
    },
    {
      name: 'P-Ⅳ',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [86,116,21,19]
    },
    {
      name: 'P-Ⅴ',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [122,35,49,29]
    },
  ]
};


option2 = {
    tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid:{
        top:"20%", bottom:"10%",left:"10%","right":"10%"
  },
  legend: [{
    // data: ['Z-Ⅰ', 'Z-Ⅱ', 'Z-Ⅲ', 'Z-Ⅳ', 'Z-Ⅴ', 'Z-Ⅵ'],
    //   textStyle: {
    //         color: '#fff',
    //         fontStyle: 'normal',
    //         fontFamily: '微软雅黑',
    //         fontSize: 12,
    //     }
    orient: 'horizontal',
    itemWidth: 10,
    itemHeight: 10,
    left:'15%',
    top:'top',
    textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontFamily: '微软雅黑',
        fontSize: 12,
    },
    data: ['Z-Ⅰ', 'Z-Ⅱ', 'Z-Ⅲ', 'Z-Ⅳ']
    },
    {
        orient: 'horizontal',//水平排列。（vertical为垂直排列}
        itemWidth: 10,
        itemHeight:10,
        left:'29.3%',
        top:'10%',
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        },
        data: ['Z-Ⅴ', 'Z-Ⅵ']
    },
  ],
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: ['自然科学', '工程技术', '社会科学', '人文学科'],
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
            color: '#687284',
        },
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            lineHeight:5,
            padding: [0, 2, 0, 2],
            height: 50,
            fontSize: 12,
            color:'#fff',
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F1F3F5',
                type: 'solid'
            },
            interval: 2
        },
    }
  ],
  series: [
    {
      name: 'Z-Ⅰ',
      type: 'bar',
      label: labelOption,
      barGap: 0,
      emphasis: {
        focus: 'series'
      },
      data: [68,39,34,34]
    },
    {
      name: 'Z-Ⅱ',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [40,28,21,18]
    },
    {
      name: 'Z-Ⅲ',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [113,43,46,40]
    },
    {
      name: 'Z-Ⅳ',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [179,121,44,30]
    },
    {
      name: 'Z-Ⅴ',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [105,101,33,18]
    },
    {
      name: 'Z-Ⅵ',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [147,330,71,19]
    },
  ]
};


option22 = {
    tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid:{
        top:"20%", bottom:"10%",left:"10%","right":"10%"
  },
  legend: {
      data: ['S-Ⅰ', 'S-Ⅱ', 'S-Ⅲ', 'S-Ⅳ'],
      textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }},
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: ['自然科学', '工程技术', '社会科学', '人文学科'],
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
            color: '#687284',
        },
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            lineHeight:5,
            padding: [0, 2, 0, 2],
            height: 50,
            fontSize: 12,
            color:'#fff',
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F1F3F5',
                type: 'solid'
            },
            interval: 2
        },
    }
  ],
  series: [
    {
      name: 'S-Ⅰ',
      type: 'bar',
      label: labelOption,
      barGap: 0,
      emphasis: {
        focus: 'series'
      },
      data: [41,34,26,29]
    },
    {
      name: 'S-Ⅱ',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [261,296,84,37]
    },
    {
      name: 'S-Ⅲ',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [223,205,60,38]
    },
    {
      name: 'S-Ⅳ',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [103,80,32,30]
    }
  ]
};

option3 =  {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  title: {
    text: '科研生产力',
      textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 15,
        }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      },
      // formatter: '{b}年 {a} {c}% {d} {e}% '
    },
  },
  legend: {
      top:"10%",
    data: ['P-Ⅰ', 'P-Ⅱ', 'P-Ⅲ', 'P-Ⅳ', 'P-Ⅴ'],
      textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
        axisLabel: {       //轴标
            show: true,
            interval: '-1',
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 10,
                color:'#fff',
            },
            rotate:40,
            color: '#687284',
        },
      data: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2011,2012,2013,2015,2016,2017,2019]
    }
  ],
  yAxis: [
    {
      type: 'value',
        max:100,
        axisLabel: {       //轴标
            show: true,
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 10,
                color:'#fff',
            },
            formatter: '{value}%',
            color: '#687284',
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#F1F3F5',
                type: 'solid'
            },
            interval: 2
        },
    }
  ],
  series: [
    {
      name: 'P-Ⅰ',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [10,6,6,9,4,4,5,13,7,13,9,10,10,15,15,16,13,14,14]
    },
    {
      name: 'P-Ⅱ',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [58,53,48,53,51,61,50,52,39,51,36,41,41,31,31,28,31,17,27]
    },
    {
      name: 'P-Ⅲ',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [6,12,19,7,15,9,9,12,15,13,18,19,22,32,26,29,25,48,23]
    },
    {
      name: 'P-Ⅳ',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)'
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [6,13,16,16,15,17,12,12,21,17,17,17,13,8,16,12,17,16,18]
    },
    {
      name: 'P-Ⅴ',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 191, 0)'
          },
          {
            offset: 1,
            color: 'rgb(224, 62, 76)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [19,16,11,15,15,9,24,10,18,7,21,14,14,15,11,15,15,5,18]
    }
  ]
};

option31 =  {
  color: ["rgb(202, 138, 137)",'#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00',
      ],
  title: {
    text: '学术影响力',
      textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 15,
        }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      },
      // formatter: '{b}年 {a} {c}% {d} {e}% '
    },
  },
  legend: {
      top:"14%",
    data: ['Z-Ⅰ', 'Z-Ⅱ', 'Z-Ⅲ', 'Z-Ⅳ', 'Z-Ⅴ', 'Z-Ⅵ'],
      textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 8,
        }
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
        axisLabel: {       //轴标
            show: true,
            interval: '-1',
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 10,
                color:'#fff',
            },
            rotate:40,
            color: '#687284',
        },
      data: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2011,2012,2013,2015,2016,2017,2019]
    }
  ],
  yAxis: [
    {
      type: 'value',
        max:100,
        axisLabel: {       //轴标
            show: true,
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 10,
                color:'#fff',
            },
            formatter: '{value}%',
            color: '#687284',
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#F1F3F5',
                type: 'solid'
            },
            interval: 2
        },
    }
  ],
  series: [
    {
      name: 'Z-Ⅰ',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#dc77dc'
          },
          {
            offset: 1,
            color: 'rgb(202, 138, 137)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [6,7,3,7,9,4,8,5,11,10,17,4,9,7,4,7,11,5,0]
    },
    {
      name: 'Z-Ⅱ',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [6,9,6,7,6,4,9,7,3,1,3,4,4,9,10,3,4,12,0]
    },
    {
      name: 'Z-Ⅲ',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [15,13,16,12,21,20,15,14,16,15,14,15,18,17,13,17,10,5,14]
    },
    {
      name: 'Z-Ⅳ',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [

          {
            offset: 0,
            color: 'rgb(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [23,26,21,30,26,22,24,24,16,21,24,24,19,14,25,24,22,12,23]
    },
    {
      name: 'Z-Ⅴ',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)'
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [17,18,22,17,11,22,10,16,18,23,8,17,12,12,15,15,18,12,23]
    },
    {
      name: 'Z-Ⅵ',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 191, 0)'
          },
          {
            offset: 1,
            color: 'rgb(224, 62, 76)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [33,28,32,28,28,28,33,33,34,30,33,37,37,41,32,35,35,55,41]
    }
  ]
};

option32 =  {
  color: [
      '#80FFA5',
      '#00DDFF', '#37A2FF', '#FF0087',
      // '#FFBF00',
      // "rgb(202, 138, 137)","rgb(154,96,180)",'rgb(59, 162, 114)'
  ],
  title: {
    text: '学术创新力',
      textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 15,
        }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      },
      // formatter: '{b}年 {a} {c}% {d} {e}% '
    },
  },
  legend: {
      top:"14%",
    data: ['S-Ⅰ', 'S-Ⅱ', 'S-Ⅲ', 'S-Ⅳ'],
      textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
        axisLabel: {       //轴标
            show: true,
            interval: '-1',
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 10,
                color:'#fff',
            },
            rotate:40,
            color: '#687284',
        },
      data: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2011,2012,2013,2015,2016,2017,2019]
    }
  ],
  yAxis: [
    {
      type: 'value',
        max:100,
        axisLabel: {       //轴标
            show: true,
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 10,
                color:'#fff',
            },
            formatter: '{value}%',
            color: '#687284',
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#F1F3F5',
                type: 'solid'
            },
            interval: 2
        },
    }
  ],
  series: [
    // {
    //   name: 'J-Ⅰ',
    //   type: 'line',
    //   stack: 'Total',
    //   smooth: true,
    //   lineStyle: {
    //     width: 0
    //   },
    //   showSymbol: false,
    //   areaStyle: {
    //     opacity: 0.8,
    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //       {
    //         offset: 0,
    //         color: '#dc77dc'
    //       },
    //       {
    //         offset: 1,
    //         color: 'rgb(202, 138, 137)'
    //       }
    //     ])
    //   },
    //   emphasis: {
    //     focus: 'series'
    //   },
    //   data: [6,7,3,7,9,4,8,5,11,10,17,4,9,7,4,7,11,5,0]
    // },
    {
      name: 'S-Ⅰ',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [6,6,3,3,2,2,9,13,9,8,11,6,10,10,7,13,13,15,5]
    },
    {
      name: 'S-Ⅱ',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [49,46,57,37,46,37,32,39,36,56,38,43,42,42,47,46,43,43,32]
    },
    {
      name: 'S-Ⅲ',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [

          {
            offset: 0,
            color: 'rgb(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [32,34,38,37,33,42,41,30,43,17,36,38,33,29,31,28,31,31,41]
    },
    {
      name: 'S-Ⅳ',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)'
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [13,14,2,22,20,19,19,18,12,20,15,13,15,19,15,13,13,12,23]
    },
    // {
    //   name: 'J-Ⅵ',
    //   type: 'line',
    //   stack: 'Total',
    //   smooth: true,
    //   lineStyle: {
    //     width: 0
    //   },
    //   showSymbol: false,
    //   label: {
    //     show: true,
    //     position: 'top'
    //   },
    //   areaStyle: {
    //     opacity: 0.8,
    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //       {
    //         offset: 0,
    //         color: 'rgb(255, 191, 0)'
    //       },
    //       {
    //         offset: 1,
    //         color: 'rgb(224, 62, 76)'
    //       }
    //     ])
    //   },
    //   emphasis: {
    //     focus: 'series'
    //   },
    //   data: [33,28,32,28,28,28,33,33,34,30,33,37,37,41,32,35,35,55,41]
    // },{
    //   name: 'J-Ⅶ',
    //   type: 'line',
    //   stack: 'Total',
    //   smooth: true,
    //   lineStyle: {
    //     width: 0
    //   },
    //   showSymbol: false,
    //   label: {
    //     show: true,
    //     position: 'top'
    //   },
    //   areaStyle: {
    //     opacity: 0.8,
    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //       {
    //         offset: 0,
    //         color: 'rgb(234, 124, 204)'
    //       },
    //       {
    //         offset: 1,
    //         color: 'rgb(59, 162, 114)'
    //       }
    //     ])
    //   },
    //   emphasis: {
    //     focus: 'series'
    //   },
    //   data: [33,28,32,28,28,28,33,33,34,30,33,37,37,41,32,35,35,55,41]
    // },
  ]
};


var data1 = {
    "科研生产力":[
        [19,19,19,20,20,20,20,20,21,21,21,21,21,21,21,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,29,29,29,30,30,30,31,31,31,31,31,31,32,32,32,33,33,33,33,33,34,34,34,34,34,34,35,35,35,35,35,35,37,37,37,37,37,40,40,42,44,44],
        [18,19,19,19,19,19,19,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,34,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,38,38,38,38,38,38,38,38,38,38,38,38,39,39,39,39,39,39,39,39,39,39,39,39,39,39,40,40,40,40,40,40,40,40,41,41,41,41,41,42,42,42,42,42,43,43,43,43,50,60],
        [19,19,19,19,19,19,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,33,33,33,33,34,34,34,34,34,35,35,35,35,35,35,35,36,36,36,36,37,37,37,37,37,38,38,45,47],
        [19,19,20,20,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,30,30,30,30,30,30,30,31,31,31,31,31,31,31,31,31,32,32,32,32,32,32,32,32,33,33,33,33,33,33,33,34,34,34,34,34,34,34,34,34,35,35,35,35,35,35,35,35,35,36,36,36,36,36,36,37,37,37,38,38,38,39,39,39,39,40,40,41,41,41,42,44],
        [18,18,19,19,19,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,27,27,27,27,27,27,28,28,28,28,28,28,28,29,29,29,29,29,29,29,30,30,30,30,30,30,31,31,31,31,31,31,31,32,32,32,32,32,32,32,33,33,33,33,33,33,33,34,34,35,35,35,35,35,36,36,36,36,37,37,37,37,40]
    ],
    "学术影响力":[
        [37,23,25,23,28,19,25,34,25,20,22,33,25,33,25,25,25,25,38,19,37,29,23,25,24,32,24,19,33,25,23,27,35,23,22,25,28,27,25,33,34,25,24,23,25,22,22,23,25,27,30,24,20,20,34,20,20,25,31,23,20,24,28,24,24,27,25,39,25,35,25,26,29,28,25,30,30,23,33,21,30,25,28,33,25,24],
        [34,24,24,25,25,31,20,27,24,35,20,24,23,27,19,28,24,30,24,35,38,25,27,20,36,32,20,41,25,24,23,36,41,21,24,23,37,24,32,30,25,20,21,30,30,40,24,35,24,21,25,21,30,25,21,25,33,25,36,24,21,37,19,22,24,22,41,20,23,39,36,29,23,25,31,24,23,36,25,20],
        [30,24,37,44,25,24,25,34,34,40,29,36,25,37,33,28,24,25,25,30,25,44,24,31,35,28,28,25,26,29,24,35,25,32,25,29,31,25,38,21,34,30,24,27,34,25,33,19,26,29,28,35,23,42,37,37,33,23,24,35,27,24,28,20,35,19,36,28,35,21,35,34,25,35,33,25,25,25,28,33,41,31,40,25,23,39,40,36,25,25,24,33,25,32,23,25,25,32,23,30,34,25,36,25,21,24,26,27,25,29,27,28,28,25,33,33,34,27,27,23,37,38,36,24,27,41,35,29,25,23,45,23,25,32,23,29,34,25,32,29,25,25,25,50,35,30,30,27,36,25,23,24,29,36,25,25,20,34,27,25,27,20,24,29,38,32,33,25,23,39,32,32,25,25],
        [32,27,19,42,23,38,31,28,37,30,25,26,25,33,34,21,37,35,22,28,37,30,28,25,29,29,27,31,39,26,37,30,40,30,39,21,39,37,34,22,25,25,34,21,23,25,33,25,25,31,26,24,24,25,33,24,26,27,34,34,39,42,25,31,26,25,42,36,33,25,21,27,24,33,25,24,32,24,24,26,35,38,27,26,24,38,28,34,25,33,29,22,32,35,37,36,32,27,24,28,23,36,37,34,33,33,33,24,33,31,27,19,24,34,29,23,23,37,24,31,35,32,35,24,23,37,32,24,38,32,25,23,34,26,33,21,27,25,29,28,22,22,31,34,40,27,20,21,32,24,25,36,27,25,25,24,23,24,35,29,21,30,43,32,19,29,25,34,23,32,36,25,20,24,21,23,27,35,40,33,31,34,41,24,32,21,37,31,25,33,20,26,28,25,23,25,26,27,22,28,25,32,38,24,26,25,24,29,23,23,25,25,36,37,37,24,39,34,25,25,34,25,23,25,34,44,35,28,32,31,23,32,31,29,28,26,31,25,28,27,25,23,29,31,38,33,41,25,29,28,34,28,31,34,35,37,32,23,29,29,36,25,34,21,26,27,25,35,28,34,28,24,38,38,21,33,40,21,22,27,24,25,20,23,25,31,28,21,24,33,25,39,26,28,28,37,28,30,31,28,33,25,35,33,38,24,27],
        [25,19,23,26,25,22,34,25,36,33,34,30,34,40,22,25,25,24,25,39,39,28,31,24,35,26,43,29,25,26,30,24,22,36,39,42,32,26,62,34,34,32,26,24,27,24,35,38,22,25,21,23,25,38,28,30,40,30,23,23,25,28,29,31,25,43,35,35,26,22,28,30,31,32,27,32,30,32,23,31,26,24,31,41,33,37,38,21,24,25,26,24,25,31,40,26,25,34,25,25,33,25,37,30,35,27,25,23,28,29,21,38,33,29,21,42,30,23,47,24,33,23,28,37,24,32,29,35,37,39,20,31,36,22,26,21,26,32,26,29,21,24,24,28,25,26,25,34,22,24,29,34,26,23,31,43,26,31,37,24,32,28,39,35,25,36,32,43,34,34,36,26,24,26,36,26,35,32,29,32,28,33,33,24,35,25,22,31,26,29,25,27,26,24,28,33,22],
        [26,23,22,25,35,30,28,24,25,24,22,24,21,23,32,36,30,31,23,26,24,24,25,25,25,35,24,34,26,27,27,28,18,27,23,30,21,24,34,25,24,31,24,29,18,25,22,23,30,24,20,21,28,21,34,26,19,23,29,33,20,21,32,27,21,36,29,27,37,26,26,22,25,30,24,35,25,32,19,40,20,32,19,27,24,28,21,25,26,30,28,23,23,28,32,26,21,24,30,28,25,31,24,35,26,29,19,39,27,25,25,28,30,33,30,33,43,34,25,32,37,25,21,22,31,26,25,25,27,23,25,24,30,22,31,27,20,23,27,18,36,35,25,29,21,38,26,28,33,20,28,29,21,35,35,18,24,25,35,26,25,23,27,29,29,20,23,24,27,23,21,24,31,22,20,23,30,18,29,31,30,32,25,24,25,29,29,24,20,26,31,25,34,23,30,36,29,29,22,25,24,28,30,29,28,32,27,24,33,21,29,27,23,24,39,23,22,27,26,24,24,24,28,25,33,22,24,24,31,30,27,22,35,20,24,22,21,29,21,36,22,24,37,31,23,19,28,26,24,29,39,36,21,30,33,22,23,29,23,25,26,20,32,25,23,33,35,32,22,21,28,23,24,24,23,26,25,31,25,26,23,27,23,23,33,21,23,28,31,25,26,28,19,30,26,33,36,36,26,23,24,32,34,39,22,26,36,35,25,32,40,29,25,37,25,25,25,22,29,30,19,22,21,20,24,26,32,24,22,28,28,26,29,32,31,26,21,25,20,24,35,29,30,19,23,24,28,24,21,32,23,25,18,19,29,23,22,24,28,24,35,35,37,22,27,23,25,30,23,30,23,28,24,29,23,25,32,34,32,25,31,32,30,30,25,22,29,24,23,23,23,22,41,22,24,31,30,34,37,33,31,19,36,24,23,24,28,28,21,23,25,42,20,25,24,35,28,36,23,21,20,24,24,25,22,27,26,32,26,24,34,29,22,25,26,26,23,30,31,27,25,22,31,23,29,26,29,27,27,30,23,26,22,21,23,22,22,20,25,27,28,21,23,32,30,31,26,21,30,30]
    ],
    "学术创新力":[
        [17,30,31,24,15,11,16,20,24,14,17,20,16,19,15,16,14,18,20,13,21,24,22,15,21,25,11,14,17,19,17,12,20,30,20,18,18,20,16,19,22,12,17,41,20,12,9,20,17,16,12,22,10,24,21,14,20,17,28,14,13,24,15,15,16,15,20,18,19,23,14,16,17,12,26,18,32,17,20,18,23,16,18,14,20,20,19,29,34,21,15,30,18,23,18,36,15,33],
        [24,23,21,31,36,25,24,21,26,35,29,22,24,35,31,13,24,30,28,24,23,24,30,34,19,34,28,25,21,26,21,34,35,25,27,27,26,20,19,26,37,16,26,20,32,32,22,23,25,30,39,40,32,20,30,26,39,25,38,24,33,24,30,19,26,22,12,25,26,24,11,18,27,19,15,26,26,29,23,29,28,21,33,25,28,23,37,26,25,23,35,39,27,21,30,30,21,37,33,27,26,23,27,30,25,32,20,28,33,34,21,37,29,13,20,22,32,18,29,26,24,22,22,31,33,20,27,19,26,32,23,30,19,25,28,27,33,32,24,36,32,32,37,19,24,19,26,35,18,20,27,27,21,27,29,27,31,32,21,26,37,38,21,29,20,35,33,21,23,23,30,20,25,28,24,26,25,28,26,32,25,21,25,29,25,17,28,31,26,15,29,32,32,31,28,28,31,33,31,24,36,21,21,35,32,31,19,24,21,16,28,22,19,35,27,26,19,32,35,23,20,25,19,25,27,24,24,19,24,27,14,22,24,19,19,31,27,34,33,21,25,24,19,25,22,37,20,28,28,31,26,21,22,23,28,26,28,25,17,40,21,33,20,23,20,28,25,25,27,23,20,22,29,30,32,35,35,39,19,23,19,26,30,30,22,41,19,32,19,27,28,36,19,20,21,21,22,25,16,30,36,38,22,32,27,20,29,20,18,35,28,32,21,16,19,40,30,35,29,25,23,23,23,16,24,26,29,21,37,31,35,37,19,24,30,22,20,21,20,36,20,24,23,26,22,19,20,31,22,20,33,25,33,21,32,19,37,33,18,21,19,28,27,25,25,26,26,24,29,21,26,24,35,26,33,23,39,27,16,20,24,22,22,26,20,32,34,24,25,32,25,28,34,20,31,24,26,28,27,31,23,21,32,24,23,23,32,20,28,25,22,27,27,23,20,30,20,21,20,22,21,22,22,33,29,30,36,23,29,24,25,28,20,36,22,20,31,23,30,20,29,17,27,37,22,32,33,23,26,19,15,27,29,24,37,23,27,45,25,35,28,21,25,32,21,25,19,21,20,32,27,27,29,26,23,28,27,33,27,21,24,24,21,30,33,22,21,29,37,19,26,23,32,34,32,20,35,36,35,21,34,25,24,50,23,26,22,24,26,31,26,23,31,29,25,16,32,24,27,36,32,23,29,27,22,27,21,27,25,28,20,27,27,28,22,29,23,28,22,28,24,25,24,26,25,30,24,37,31,26,27,24,27,32,23,27,28,22,37,21,21,24,25,24,29,20,27,23,23,28,12,32,23,18,32,20,24,20,25,21,25],
        [29,21,25,31,22,27,23,18,24,21,22,33,22,20,19,29,19,19,36,37,33,32,20,25,22,21,28,27,38,36,20,19,18,37,21,32,24,29,25,29,24,27,23,17,24,39,28,24,32,21,35,28,26,14,43,17,21,27,33,25,28,20,30,19,44,24,21,17,20,17,22,23,62,23,24,18,37,21,32,37,16,29,30,27,38,23,25,22,19,25,17,24,15,17,28,26,25,21,24,22,20,22,24,37,16,41,22,17,26,27,25,20,31,30,16,27,29,19,27,36,20,21,20,31,32,36,34,26,19,29,32,32,19,20,15,18,24,32,26,31,37,28,20,21,32,15,28,29,30,21,18,19,37,17,21,16,32,20,23,32,17,29,29,24,30,20,19,31,33,25,18,21,23,31,28,23,32,19,29,29,18,24,27,20,37,25,31,19,27,22,19,23,29,35,28,37,24,21,25,21,23,23,20,15,18,26,24,18,20,19,19,22,15,26,27,23,20,30,19,32,20,40,27,37,18,29,27,23,25,37,20,34,39,21,26,21,18,20,26,35,29,24,26,47,20,24,27,26,23,21,19,17,27,37,33,26,18,21,32,20,17,21,18,25,23,13,31,19,25,21,30,22,15,16,36,16,35,18,24,34,20,31,20,39,20,30,24,29,27,21,22,23,20,28,22,22,21,16,39,32,24,44,33,22,34,24,25,32,24,22,22,18,16,31,27,36,36,27,21,30,22,20,23,16,20,23,21,22,27,24,20,27,21,30,19,26,25,24,22,21,22,40,30,29,27,27,21,17,28,25,29,28,31,38,22,22,22,31,30,32,32,32,28,38,20,29,18,20,33,23,23,38,24,17,32,18,21,29,21,33,26,22,24,22,30,33,19,26,18,23,44,25,36,27,34,27,36,38,21,19,23,22,20,19,40,20,31,18,23,27,27,22,27,22,20,17,19,23,26,21,30,31,28,33,28,16,22,23,25,19,20,23,29,28,27,18,35,22,23,33,28,35,25,32,19],
        [20,18,20,27,17,20,30,33,25,36,18,23,20,25,29,17,26,26,28,29,35,37,24,23,27,24,31,12,29,20,17,19,21,13,23,16,29,28,25,23,20,31,25,18,26,36,31,16,34,30,23,19,32,23,21,31,13,21,31,17,32,21,29,28,18,23,21,26,32,34,42,25,28,20,26,16,16,22,19,19,21,29,26,27,20,23,18,18,22,25,17,20,16,20,21,28,20,27,23,26,30,25,32,21,31,14,24,14,18,15,27,16,23,28,20,26,37,21,23,20,19,20,25,11,26,17,22,24,24,20,35,22,19,27,26,27,23,25,30,29,18,18,23,21,14,23,24,24,14,19,21,25,20,37,22,21,27,27,21,21,20,19,34,33,22,16,22,26,33,15,31,20,21,25,19,33,25,23,21,27,28,25,14,19,29,19,30,30,27,19]
    ]
}

// var echarts = require('../echarts/lib/echarts')
// echarts.dataTool = require('../echarts/dist/extension/dataTool')
var data2 =echarts.dataTool.prepareBoxplotData(data1["科研生产力"]);
var data3 =echarts.dataTool.prepareBoxplotData(data1["学术影响力"]);
var data4 =echarts.dataTool.prepareBoxplotData(data1["学术创新力"]);

var xAxisList = [], yAxisList = [], yData = [];
var varList1 = ['P-Ⅰ', 'P-Ⅱ', 'P-Ⅲ', 'P-Ⅳ', 'P-Ⅴ'];
var varList2 = ['Z-Ⅰ', 'Z-Ⅱ', 'Z-Ⅲ', 'Z-Ⅳ', 'Z-Ⅴ',"Z-Ⅵ"];
var varList3 = ['S-Ⅰ', 'S-Ⅱ', 'S-Ⅲ', 'S-Ⅳ'];
data2 = data2['boxData']
data3 = data3['boxData']
data4 = data4['boxData']
for(var i=0;i<data2.length;i++){
    // if(i==0){
    //     xAxisList[i] = {
    //         type: 'value',
    //         min:10,
    //         bottom:"-100%",
    //         gridIndex:i,
    //         nameTextStyle: {
    //             color: '#3259B8',
    //             fontSize: 14,
    //         },
    //         axisLabel: {
    //             show:true,
    //             formatter: '{value} 岁',
    //             interval: '-1',
    //             textStyle: {
    //                 lineHeight:5,
    //                 padding: [0, 2, 0, 2],
    //                 height: 50,
    //                 fontSize: 10,
    //                 color:'rgba(255,255,255,0.5)',
    //             },
    //             rotate:0,
    //             color: '#687284',
    //         },
    //         axisTick:{
    //             show:false,
    //         },
    //         axisLine: {
    //             show:false,
    //             lineStyle: {
    //                 color: '#3259B8',
    //             }},
    //         splitLine: {
    //             show:true,
    //             lineStyle: {
    //                 color: 'rgba(255,255,255,0.5)',
    //             },
    //         }
    //     }
    // }else{
        xAxisList[i] = {
            type: 'value',
            min:10,
            gridIndex:i,
            nameTextStyle: {
                color: '#3259B8',
                fontSize: 14,
            },
            axisLabel: {
                show:false,
                formatter: '{value} 岁'
            },
            axisTick:{
                show:false,
            },
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#3259B8',
                }},
            splitLine: {
                show:false,
                lineStyle: {
                    color: '#A7BAFA',
                },
            }
        }
    // };
    yAxisList[i] = {
        type: 'category',
        left:'80%',
        gridIndex:i,
        data: [varList1[i]],
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 16,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#3259B8',
            }
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            rotate:0,
            interval: '-1',
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 10,
                color:'#956FD4',
            },
            color: '#687284',
        },
        splitLine: {
            show: false
        }
    }
    yData[i] = {
            name: varList1[i],
            type: 'boxplot',
            xAxisIndex:i,
            yAxisIndex:i,
            padding:[20,0],
            boxWidth:['1%','3%'],
            data: [data2[i]],
            itemStyle: {
                normal:{
                    borderColor: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#F02FC2' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#956FD4' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth:2,
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color:  'rgba(240,47,194,0.7)'// 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(149,111,212,0.7)'  // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
            },


            tooltip: {
                formatter: function(param) {
                    return [
                        '科研生产力类型: ' + param.name,
                        'upper: ' + param.data[5] + "岁",
                        'Q3: ' + param.data[4] + "岁",
                        'median: ' + param.data[3] + "岁",
                        'Q1: ' + param.data[2] + "岁",
                        'lower: ' + param.data[1] + "岁"
                    ].join('<br/>')
                }
            }
        }
};

for(var i=0;i<data3.length;i++){
    xAxisList[i+data2.length] = {
        type: 'value',
        min:10,
        gridIndex:i+data2.length,
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 14,
        },
        axisLabel: {
            show:false,
            formatter: '{value} 岁'
        },
        axisTick:{
            show:false,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#3259B8',
            }},
        splitLine: {
            show:false,
            lineStyle: {
                color: '#A7BAFA',
            },
        }
    };
    yAxisList[i+data2.length] = {
        type: 'category',
        gridIndex:i+data2.length,
        data: [varList2[i]],
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 16,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#3259B8',
            }
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            rotate:0,
            interval: '-1',
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 10,
                color:'rgb(62,172,299)',
            },
        },
        splitLine: {
            show: false
        }
    };
    yData[i+data2.length]={
            name: varList2[i],
            type: 'boxplot',
            xAxisIndex:i+data2.length,
            yAxisIndex:i+data2.length,
            padding:[20,0],
            boxWidth:['1%','3%'],
            data: [data3[i]],
            itemStyle: {
                normal:{
                    borderColor: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgb(149,111,212)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgb(62,172,299)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth:2,
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(149,111,212,0.7)'  // 0% 处的颜色
                    }, {
                        offset: 1,
                        color:'rgba(62,172,299,0.7)'  // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
            },
            tooltip: {
                formatter: function(param) {
                    return [
                        '学术影响力类型: ' + param.name,
                        'upper: ' + param.data[5] + "岁",
                        'Q3: ' + param.data[4] + "岁",
                        'median: ' + param.data[3] + "岁",
                        'Q1: ' + param.data[2] + "岁",
                        'lower: ' + param.data[1] + "岁"
                    ].join('<br/>')
                }
            }
        }
};

for(var i=0;i<data4.length;i++){
    xAxisList[i+data2.length+data3.length] = {
        type: 'value',
        min:10,
        gridIndex:i+data2.length+data3.length,
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 14,
        },
        axisLabel: {
            show:false,
            formatter: '{value} 岁'
        },
        axisTick:{
            show:false,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#3259B8',
            }},
        splitLine: {
            show:false,
            lineStyle: {
                color: '#A7BAFA',
            },
        }
    };
    yAxisList[i+data2.length+data3.length] = {
        type: 'category',
        gridIndex:i+data2.length+data3.length,
        data: [varList3[i]],
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 16,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#fff',
            }
        },
        axisTick:{
            show:true,
            lineStyle: {
                color: '#fff',
            },
            width:10,
        },
        axisLabel:{
            rotate:0,
            interval: '-1',
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 10,
                color:'rgb(128, 255, 165)',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F1F3F5',
                type: 'solid'
            },
            interval: 0
        },
    };
    yData[i+data2.length+data3.length]={
            name: varList3[i],
            type: 'boxplot',
            xAxisIndex:i+data2.length+data3.length,
            yAxisIndex:i+data2.length+data3.length,
            padding:[20,0],
            boxWidth:['1%','3%'],
            data: [data4[i]],
            itemStyle: {
                normal:{
                    borderColor: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgb(202, 138, 137)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgb(128, 255, 165)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth:2,
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(202, 138, 137, 0.7)'  // 0% 处的颜色
                    }, {
                        offset: 1,
                        color:'rgba(128, 255, 165,0.7)'  // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
            },
            tooltip: {
                formatter: function(param) {
                    return [
                        '学术创新力类型: ' + param.name,
                        'upper: ' + param.data[5] + "岁",
                        'Q3: ' + param.data[4] + "岁",
                        'median: ' + param.data[3] + "岁",
                        'Q1: ' + param.data[2] + "岁",
                        'lower: ' + param.data[1] + "岁"
                    ].join('<br/>')
                }
            }
        }
};

option99 = {
    title: {
            text: '',
            left: 'center',
            top:"0%",
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 15,
            }
        },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: [
        {
        top:'-42%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-36%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-30%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-24%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-18%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-8%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-2%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'4%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'10%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'16%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'22%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'32%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'38%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'44%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'50%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    }],
    legent:{
        show:false,
        // data:['P-Ⅰ', 'P-Ⅱ', 'P-Ⅲ', 'P-Ⅳ', 'P-Ⅴ'],
        textStyle: {
            color: '#3259B8',
        },
        top:20,
    },
    yAxis: yAxisList,
    xAxis: xAxisList,
    series:yData
};


data11 = {
    "科研生产力":[
        [74,9,5,5,6,7,8,11,6,4,7,5,10,9,9.2,11,2,8,6,5,9.5,2,10,10,9,17,6,2,4,18,15,34,24,40,12,14,23,28,14,18,24,18,6,20,26,10,24,16,8,19,18,10,2,16,20,16,6,14.5,4,5,12,11,16,10,5,8.5,6,1,9,3,17,4,8,8,4,6,16,4,10,3.5,13,21,9,4,8,9,26,41,4,40,10,36,12.5,10,11,21.5,10,30,45,18,18,40,23,12,14,18,12,41,10,12,17,39,14,14,4,18,16,19,8,26,13,14,19,22,17,16,27,17,8,18,23.5,8,22,8],
        [10,8,7,8,9,14,3,4,2,10,6,14,6,13,4,4,10,8,9,40,8,3,7,7,9,3,5,7,6,10,2,6,6,6.5,4,6,10,2,14,8,22,9,24,26,21,30,20,1,26.5,26,8,18,17,13,18,18,17,4,10,27,29,2,12,8,10,16,8,20,38,4,4,1,20,22,6,4,1.5,12,20,20,17,24,40,38,2,18,40,10,32,17,22,40,30,22,21,8,2,15,4,14,20.5,14.5,16,36,24,38,14,20,6,16,34,20,6,18,2,18,16,6,8,2,4,10,9,4,13,28,18,21,22,28,40,16,16,15,18,28,2,20,8,12,16,18.5,2,5,36,40,9,34,18,18,18.5,22,44,22,29,8,4,12,10,8,40,8,8,8,22,16,8,2,6,8,5,2,16,4,6,6,12,34,32,26,20,2,26,4,36,14,14,2,38,24,15,20,26,22.5,18,2,32,28,21,20,14,2,16,24,20,2,15,15,22,40,15,38,41,18,30,15,21,28,15,2,22,38,40,14,26,10,8,6,20,6,25,12,30,18,24,1,12,26,40,4,10,22,18,34,38,36,4,18,40,26,22,43,32,6,2,16,10,10,21,20,22,10,11,14,34,4,6,8,12,16,18,23,32,15,6,20.5,19,14,2,16,8,18,41,13,20,13,9,18.5,16.5,2,2,23,16,2,13,15.5,14,8,15,4,8,18,11,24,3.5,22.2,7,149,12,9,17.5,42.5,10,11,31,19,3,14,10,14,12,16,12,11,31,29.5,9.5,9,2.5,3,2,2,18.5,7,34.5,32,6,34,21,10,1,29.5,12,16.5,7,14,10,31.5,26,20,14,16,16,10,2,21,10,12,20,8,24,24,40,24,13.5,16,4,42,28,28,18,24,12,36,29,18,22,4,4,33,2,1,6,12,2,32,14,16,20,20.5,24,6,38,40,16,44,36,12.5,36,22,14,28,20,40,36,31,30,2,36,24,40,38,3,28,36,2,32,48,18,22,6,22,14,24,16,10,38,30.5,8,23,40,23,2,41,2,26,16,20,22,18,21,18,16,16,12,40,16,24,40,32,30,24,20,40,38,40,14,4,20,26,30,30,36,18,29,16,12,18,30,28,26,4,30,12,12,10,16,2,14,14,26,4,15,6,18,6,20,40,26,40,14,12,19,2,24,30,24,28,24,20,4,22,26,16,6,10,25,12,13,19,20,29,39,12,8,15,16,16,4,14,10,16,10,14,2,18,40,40,2,7,30,1,24,12,18,20,24,6.5],
        [8,8,6,16,163.7,18,2,8,9,14,4,23.5,5,7,4,6,10,7,23.5,3,8,29,7,4,17,20,22,7,4,18,33,16.5,4,6,19,21,21,24,13,2,45,8,18,18,16,12,14,22,8,14,14,2,41,17,20,24,21,8,23,34,7,16,12,18,6,18,14,22,4,13,40,7,8,4,1,6,8,10.2,11,16,16,4,32,18,18,8,18,27,2,26.5,5,36,10,30,10,15,14,1,9,18,8,34,24,5.5,34,18,20,10,15,11.5,21,20,14,35,14,12,18,30,40,4,5,28,19,20,11,5,10,14,10,18,2,40,22,7,4,10,14,33,17,24,16,4,30,10.5,14,18,14,12,15,10,2,16,4,19.5,10.5,12,8,8,15,12,7,14,10.5,30.5,6,6,7,4,14,19.5,13,12,14,10,7,4,5,8,12.5,6,37,8,14,12,8,12,44.5,6,4,14,2,1,8,11,16,7,15,13.5,18,13,3,7,14,4,2,28.5,52,15,12,8,13,5,20,23.5,12,18,2,4,14,10,3,30,5,29.5,40,14,34,10,26,40,24,14,10,4,20,18,10,32,14,16,28,18,28,23,20,22,32,12,28,4,38,38,4,22,23,20,15,24,14,19,23.5,6.5,16,10,2,18,19,20,20,12,17,30,18,14,13,2.5],
        [2,36.5,6,3,4,2,10,29,184.5,2,2,11.5,11,13,98.5,7,6,12,19,11,8,41,18.5,16,2,34,18,16,10,14,4,17,20,6,10,34,29,6,13.5,22,7,11,41,35,25,6,10,14,9,43,4,16,41,1,4,8,19.5,37,22,27,26,6,8,12,20,8,20,39,2,17,22,18,10,18,2,14,12,6,16,12,30,20,30,41,24,40,17,40,32,13,20,17,15,14,24.5,17,18,12,21,26,15,22,41,8,12,26,13,18,52,24,14,22,24,18,6.5,18,27,19,22,4,7,10,16,461,6,14,14,18,8,21,11,11,19.5,12,4,68,4,2,30,8,18,10,3,10,20.5,12,10,22,22,16,2,26,2,2,28,42,4,38.5,12,22,2,42,31,24.5,4,41,40,43,48,2,8,22,14,40,14,22,22,26,19,24.5,10,14,14,19,18,14,31.5,26,17,26,41,20,16,20,22,23,15,1.5,20,13,6],
        [4,8,2,7.5,5,11,12,9.5,2,8.2,8,4,10,7,1,5,10,3,9.5,10,13,10.5,6,6,8,6,14,16,9,12,18,17.5,23,12,30,8,6,10,4,14,12,15,13,12,2,20,30,16.5,14,12,27,20,2,6,13,2,9,26,19.5,20,5,2,30,28,14,4,7,10,12,14,2,5,4,7,4,7,1,8,20,2,30,16,6,12,10,10,15,5.5,2,18,16,24,14,8,28,20,38,2,6,8,4,4,6,18,14.5,14,3,1,12,18,24,14,2,24,14,26,24,26,18,14,23,8,12,32,6,11,8,14,30,10,8,10,16,2,2,35,14,14,14,21,20,34,10,12,38,16,28,18,40,17,24,12,30,8,25,26,14,17,20,40,4,12,14,12,19,18,20,9,8,8,12,14,16,14,18,10,6,14]
    ],
    "学术影响力":[
        [10,8,2,8,14,4,5,11,2,9,8,8,5,10,11.5,7,3,6,6,8,8,14,8,22,2,12,6,14,9,26,14,4,18,10,2,5,11,8,8.5,5,2,10,17.5,9.5,4,4,7,29.5,18,16,10,16,12,22,14.5,20,14,14,2,14,26,11,30,36,8,22,6,30,10,16,35,2,12,30,23,19,14,31.5,12,18,9,12,14,18,22,40,2.5],
        [4,16,29,18,8,4,5,6,7,3,1,10,98.5,8,17,21,18,6,1.5,17.5,23,8,22,18,12,2,18,2,10,13,40,11,22,32,30,18,10.5,6,10,14,8,31,12,10,14,29.5,8,8,6,10,15,13,9,5.5,16,4,24,14,2,26,40,12,14,20,28,32,17,4,28,4,22,20,14,12,16,10,18,8,16,6,18,6.5],
        [5,8,5,8,7,6,9,6,8,6,11,9.5,9,2,8.2,10,11,10,2,7,9,5,10,10,13,7,10.5,6,9,10,17,6,6,2,21,2,34,17,20,20,18,18,20,4,4,8,2,6,14,2,17,2,21,38,12,18,26,10,12,18,12,24,19,13,2,12,27,13,20,16,14,9,19.5,5,7,9,6,37,14,6,17,9,2.5,8,5,1,8,2,3.5,13,4,6,15,21,10,9,1,12,7,4,2,20,16,10,24,14,8,13.5,2,18,41,4,2,28,4,16,6,4,20,24,10,26,14,10,38.5,12,11,26,2,36,18,14,16,2,14,2,14,14,2,18,18,16,12,14,4,20,12,26,16,18,40,14,2,4,14,26,18,8,25,14,2,24,30,40,26,26,4,22,2,17,20,8,8,15,16,10,23,10,14,18,1,22],
        [74,2,9,2,10,7.5,2,163.7,10,2,4,10,8,4,5,7,2,6,9,8,11,9.5,13,29,7,6,6.5,10,2,22,22,16,26,8,6,4,27,8,18,22,38,20,9,22,6,12,20,2,41,34,24,17,22,40,30,2,2,10,8,21,23,8,17,40,18,18,2,24,14,6,6,10,8,22,16,8,26,36,26,18,28,17,18,41,18,21,15,26,14,15,6,4,2,41,8,40,43,20,6,26,16,10,10,22,4,8,16,52,18,14,30,2,18.5,16.5,2,8,12,2,15.5,10,13,13,2,3.5,22.2,10,20,28,14,12,4,14,8,42.5,3,12,16,12,11,31,14,12,16,18,3,13,7,6,2,20,12,4,14,2,14,5,10,2,21,8,8,12,40,18,6,20.5,10,22,29,8,4,4,4,33,2,3,12,42,6,18,24,38,40,44,36,12.5,36,22,24,14,36,24,40,18,36,31,24,32,10,8,3,28,2,45,32,48,18,6,24.5,22,10,18,40,30.5,8,20,23,23,40,10,23,2,14,8,21,18,16,16,16,10,12,40,14,24,40,32,30,12,40,10,30,22,4,18,26,19,10,24.5,38,14,19,16,15,17,24,4,26,20,14,17,40,12,24,14,28,13,12,16,27,19,8,19,29,23.5,16,12,14,20,16,10,14,7,1.5,8,18,24,6,8],
        [36.5,4,8,7,3,6,14,4,184.5,13,14,4,4,2,10,6,4,6,12,8,26,30,20,1,26.5,10,13,18,13,45,29,12,13.5,14,4,14,20,17,18,10,32,6,8,10,16,14,16,40,1,14,6,16,20,18,7,6,22,8,6,28,18.5,9,18,10,44,29,2,36,4,12,12,15,2,20,4,12,26,24,10,40,32,13,8,22,12,30,28,21,38,8,28,18,20,34,38,10,36,18,26,32,2,10,24,18,9,22,23,8,15,7,16,7,149,30,4,5,6,14,12,8,11,19.5,2,1,4,2,3,10,32,4,16,2,8,10,28,3,10,42,2,28,28,18,10,6,2,32,14,20.5,1,12,5,29.5,28,23,14,30,10,42,8,4,14,12,43,48,41,26,14,22,21,18,20,22,40,24,20,40,38,36,22,26,30,12,14,18,30,18,6,26,8,19,26,17,14,22,26,14,25,17,19,39,20,14,2,12,20],
        [6,3,6,12,7,23.5,9.2,40,9.5,23.5,7,3,3,5,6,2,7,4,14,19,11,20,9,24,41,18.5,16,7,4,18,33,16.5,18,18,4,16,17,14,19,21,24,4,17,10,2,2,10,10,8,34,29,16,18,4,6,18,16,12,15,8,4,1,14,7,4,41,11,17,24,21,20,24,40,38,35,40,22,21,8,23,25,34,7,15,14,4,12,9,43,4,20.5,14.5,16,36,24,18,38,41,4,14,34,12,19.5,6,18,37,2,16,13,40,6,8,22,4,4,13,1,28,27,26,28,40,16,12,16,15,10.2,18,11,8,2,20,20,8,16,12,16,20,39,2,5,30,16,4,36,22,34,32,18,28,18,14,18.5,18,8,27,22,22,26.5,18,8,5,10,30,18,16,10,14,1,40,8,8,8,8,12,6,8,30,5,9,16,6,18,20,6,30,34,32,41,34,20,4,24,40,38,24,15,5.5,34,24,18,20,22.5,32,20,14,20,2,10,16,20,15,17,11.5,16,21,24,20,2,15,20,15,14,15,24.5,14,40,19,15,35,15,14,2,12,22,40,14,30,40,6,4,20,5,25,12,30,24,1,12,26,19,10,22,5,18,15,10,14,22,4,2,12,40,13,21,20,10,11,14,34,22,7,4,18,14,6,16,23,33,14,17,22,24,15,16,4,20,6.5,10.5,16,6,14,20.5,18,6,14,16,16.5,8,12,18,27,41,15,10,2,14,20,16,4,13,19,19.5,10.5,12,8,14.5,15,4,4,16,14,12,7,14,7,30.5,2,6,4,6,4,19.5,18,11,24,12,26,461,7,18,8,21,1,10,12.5,9,6,14,11,12,3,19,44.5,11,14,4,2,4,11,7,15,13.5,16,18.5,7,7,4,34.5,30,14,21,28.5,52,34,10,68,12,8,16.5,31.5,26,30,20,12,20,24,24,23.5,18,24,20,38,26,4,12,36,16,22,1,2,30,3,40,16,18,12.5,34,2,40,38,21.5,40,22,31,24,24,10,10,4,38,41,18,40,32,20,22,34,28,23,16,41,38,28,14,30,18,39,29,16,38,12,28,12,10,16,14,15,6,40,24,20,19,24,20,23.5,6.5,41,19,4,16,6,10,20,18,12,13,20,16,4,20,12,15,40,2,30,17,24,30,13,14,20,13]
    ],
    "学术创新力":[
        [6,3,10,5,7,9,3,4,11,18,6,7,2,8,4,2,8,40,10,7,10,10,13,6,6,2,4,2,26,30,18,20,20,18,2,14,22,28,10,12,6,8,2,20,26,26,10,10,40,12,14,19,14,13,16,26,20,8.5,2,6,21,9,11,3,11,12,16,9.5,4,4,18.5,20,32,34,12,9,2,16,24,14,12,24,41,14,8,32,24,2,4,18,12,30,18,40,4,4,14,26,17,8,8,12,16,6],
        [2,9,4,8,8,6,163.7,29,8,6,4,9,4,8.2,23.5,11,7,6,9,23.5,9,10,3,98.5,17,6,6,6.5,4,14,19,17,20,16,41,20,18.5,16,7,4,26.5,34,18,33,16.5,4,17,10,6,19,21,24,4,2,45,2,10,8,34,16,18,4,18,16,13.5,12,8,18,15,8,1,14,22,7,4,41,11,17,20,24,20,17,12,24,40,34,35,18,17.5,17,30,22,23,34,6,7,4,12,4,14.5,6,16,36,24,41,40,1,14,20,22,19.5,6,18,37,2,13,6,8,2,4,10,8,4,13,1,26,21,23,6,16,12,16,10.2,11,8,2,8,16,20,39,30,2,17,16,4,36,40,9,34,32,18,28,18,18,14,18,18,8,27,44,29,24,26.5,18,8,5,36,30,12,16,15,14,30,5,20,9,16,30,32,41,34,20,2,14,40,2,17,24,40,5.5,34,24,26,22.5,13,2,15,17,11.5,16,21,24,20,15,8,24.5,14,17,15,41,35,15,28,21,12,14,22,40,14,30,40,8,4,25,12,30,18,24,12,19,20,4,10,22,18,15,10,22,34,41,36,26,22,43,32,12,40,6,2,10,20,22,11,14,22,7,10,8,16,16,18,33,24,17,32,22,24,4,30,6.5,14,20.5,18,6,14,16,16.5,18,12,18,41,10,2,16,4,13,19.5,9,22,8,15,12,4,4,16,12,14,8,12,7,14,7,10.5,30.5,6,11,8,7,24,10,12,14,7,7,149,4,5,7,10,18,9,17.5,6,8,6,14,12,8,31,12,19,44.5,6,19.5,4,12,29.5,9,8,11,12,16,7,15,13.5,8,8,3,4,13,6,2,7,4,3.5,16,2,28.5,52,68,12,9,8,4,4,8,13,26,30,10,20,12,18,24,18,28,40,10,3,20,16,2,20.5,2,28,18,12,14,36,16,29,18,10,6,12,2,2,42,14,20.5,24,38,12,5,16,44,18,24,36,24,40,12.5,26,36,14,34,24,22,6,26,2,3,14,21.5,10,30,42,48,18,18,40,22,31,24.5,22,24,14,10,4,38,20,41,18,23,14,43,32,48,41,2,8,26,21,20,14,16,20,28,18,21,34,28,23,12,22,41,40,40,32,32,20,40,38,40,14,4,14,12,30,22,17,18,39,29,26,38,30,28,4,19,12,24.5,16,14,14,22,19,16,6,18,26,14,26,40,8,26,17,24,14,20,26,26,28,23.5,4,6.5,13,16,41,19,22,26,4,10,16,12,14,17,18,13,19,17,8,18,23.5,12,8,15,14,20,20,10,16,12,23,6,40,2,30,17,30,12,20,24],
        [74,36.5,4,5,8,10,7.5,14,2,16,5,10,11,8,13,2,14,10,10,4,8,5,10,11,7,7,3,5,10.5,6,8,8,10,7,6,10,7,8,11,8,24,22,21,1,8,18,14,4,13,21,18,17,17,10,13,27,29,12,20,29,14,22,9,6,2,1.5,12,21,38,2,24,40,40,23,21,8,25,8,15,16,14,9,14,43,20.5,18,16,18,4,8,14,6,16,34,20,12,18,40,7,9,4,27,18,40,6,18,20,8,18.5,5,18,22,10,22,2,14,6,10,10,8,1,8,8,16,8,2,12,4,6,6,34,26,36,24,14,38,15,18,2,32,32,21,20,14,20,10,16,20,15,14,22,40,18,12,18,30,14,15,2,38,12,15,18,26,10,6,6,26,13,5,2,8,18,2,40,2,20,26,16,13,10,10,34,4,4,6,52,23,24,16,18,10.5,30,8,27,15,14,20,10.5,18.5,16.5,2,12,8,2,20,15,2,10,4,6,4,18,9,22.2,10,461,5,30,28,14,12,14,14,8,1,12.5,37,3,11,14,10,14,14,11,31,17,4,1,2.5,5,16,7,3,8,10,14,13,4,21,15,21,10,10,15,29.5,16.5,14,5.5,20,14,5,2,21,10,20,8,24,23.5,12,24,13.5,26,4,6,42,4,28,10,22,22,2,8,4,4,4,33,2,3,4,1,2,32,6,18,14.5,20,1,40,29.5,12.5,14,28,20,24,26,31,10,23,11,38.5,2,36,40,12,32,10,38,28,36,30,2,45,10,6,8,10,16,2,40,35,8,23,14,40,40,14,14,2,18,16,22,18,18,16,10,20,40,14,24,24,20,26,36,22,12,18,26,12,10,2,23,14,15,17,18,19,4,12,30,6,40,14,31.5,14,19,2,24,30,40,19,20,14,6,10,2,12,20,25,16,27,12,19,19,9,20,39,16,16,16,14,14,10,10,14,2,18,15,40,14,7,1,8,18,13,14,20,22,8,2.5],
        [2,8,8,2,6,7,6,2,14,184.5,9,5,9.2,4,6,2,9.5,8,11.5,7,5,10,9.5,13,7,29,6,6,12,9,18,8,10,6,6,20,22,38,4,41,10,32,22,10,38,16,28,22,28,8,15,12,20,16,2,22,18,18.5,2,18,40,8,22,6,8,12,8,4,6,24,18,20,28,2,20,15,4,19,21,18,26,20,28,1,11,14,38,10,18,21,18,14,15,20,16,2,19,14.5,23,5,15.5,14,6,19.5,13,13,2,16,11,3.5,19.5,4,12,42.5,10,8,14,2,7,34.5,30,4,6,6,1,2,10,31.5,16,8,16,38,10,18,22,26,28,16,30,14,3,6,40,36,36,22,14,4,2,10,40,18,30,12,11,8,16,14,10,30.5,23,10,22,16,12,16,30,12,10,28,30,38,16,4,16,28,38,10,14,20,18,14,24,15,8,25,20,24,22,18,20,29,20,4,18,22,1.5,24,18,13]
    ]
}
var data2 =echarts.dataTool.prepareBoxplotData(data11["科研生产力"]);
var data3 =echarts.dataTool.prepareBoxplotData(data11["学术影响力"]);
var data4 =echarts.dataTool.prepareBoxplotData(data11["学术创新力"]);

var xAxisList = [], yAxisList = [], yData = [];
var varList1 = ['P-Ⅰ', 'P-Ⅱ', 'P-Ⅲ', 'P-Ⅳ', 'P-Ⅴ'];
var varList2 = ['Z-Ⅰ', 'Z-Ⅱ', 'Z-Ⅲ', 'Z-Ⅳ', 'Z-Ⅴ',"Z-Ⅵ"];
var varList3 = ['S-Ⅰ', 'S-Ⅱ', 'S-Ⅲ', 'S-Ⅳ'];
data2 = data2['boxData']
data3 = data3['boxData']
data4 = data4['boxData']
for(var i=0;i<data2.length;i++){
    // if(i==0){
    //     xAxisList[i] = {
    //         type: 'value',
    //         min:10,
    //         bottom:"-100%",
    //         gridIndex:i,
    //         nameTextStyle: {
    //             color: '#3259B8',
    //             fontSize: 14,
    //         },
    //         axisLabel: {
    //             show:true,
    //             formatter: '{value} 岁',
    //             interval: '-1',
    //             textStyle: {
    //                 lineHeight:5,
    //                 padding: [0, 2, 0, 2],
    //                 height: 50,
    //                 fontSize: 10,
    //                 color:'rgba(255,255,255,0.5)',
    //             },
    //             rotate:0,
    //             color: '#687284',
    //         },
    //         axisTick:{
    //             show:false,
    //         },
    //         axisLine: {
    //             show:false,
    //             lineStyle: {
    //                 color: '#3259B8',
    //             }},
    //         splitLine: {
    //             show:true,
    //             lineStyle: {
    //                 color: 'rgba(255,255,255,0.5)',
    //             },
    //         }
    //     }
    // }else{
        xAxisList[i] = {
            type: 'value',
            min:0,
            gridIndex:i,
            nameTextStyle: {
                color: '#3259B8',
                fontSize: 14,
            },
            axisLabel: {
                show:false,
                formatter: '{value} 岁'
            },
            axisTick:{
                show:false,
            },
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#3259B8',
                }},
            splitLine: {
                show:false,
                lineStyle: {
                    color: '#A7BAFA',
                },
            }
        }
    // };
    yAxisList[i] = {
        type: 'category',
        left:'80%',
        gridIndex:i,
        data: [varList1[i]],
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 16,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#3259B8',
            }
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            rotate:0,
            interval: '-1',
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 10,
                color:'#956FD4',
            },
            color: '#687284',
        },
        splitLine: {
            show: false
        }
    }
    yData[i] = {
            name: varList1[i],
            type: 'boxplot',
            xAxisIndex:i,
            yAxisIndex:i,
            padding:[20,0],
            boxWidth:['1%','3%'],
            data: [data2[i]],
            itemStyle: {
                normal:{
                    borderColor: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#F02FC2' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#956FD4' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth:2,
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color:  'rgba(240,47,194,0.7)'// 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(149,111,212,0.7)'  // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
            },


            tooltip: {
                formatter: function(param) {
                    return [
                        '科研生产力类型: ' + param.name,
                        'upper: ' + param.data[5] + "分",
                        'Q3: ' + param.data[4] + "分",
                        'median: ' + param.data[3] + "分",
                        'Q1: ' + param.data[2] + "分",
                        'lower: ' + param.data[1] + "分"
                    ].join('<br/>')
                }
            }
        }
};

for(var i=0;i<data3.length;i++){
    xAxisList[i+data2.length] = {
        type: 'value',
        min:0,
        gridIndex:i+data2.length,
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 14,
        },
        axisLabel: {
            show:false,
            formatter: '{value} 岁'
        },
        axisTick:{
            show:false,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#3259B8',
            }},
        splitLine: {
            show:false,
            lineStyle: {
                color: '#A7BAFA',
            },
        }
    };
    yAxisList[i+data2.length] = {
        type: 'category',
        gridIndex:i+data2.length,
        data: [varList2[i]],
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 16,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#3259B8',
            }
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            rotate:0,
            interval: '-1',
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 10,
                color:'rgb(62,172,299)',
            },
        },
        splitLine: {
            show: false
        }
    };
    yData[i+data2.length]={
            name: varList2[i],
            type: 'boxplot',
            xAxisIndex:i+data2.length,
            yAxisIndex:i+data2.length,
            padding:[20,0],
            boxWidth:['1%','3%'],
            data: [data3[i]],
            itemStyle: {
                normal:{
                    borderColor: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgb(149,111,212)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgb(62,172,299)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth:2,
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(149,111,212,0.7)'  // 0% 处的颜色
                    }, {
                        offset: 1,
                        color:'rgba(62,172,299,0.7)'  // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
            },
            tooltip: {
                formatter: function(param) {
                    return [
                        '科研生产力类型: ' + param.name,
                        'upper: ' + param.data[5] + "分",
                        'Q3: ' + param.data[4] + "分",
                        'median: ' + param.data[3] + "分",
                        'Q1: ' + param.data[2] + "分",
                        'lower: ' + param.data[1] + "分"
                    ].join('<br/>')
                }
            }
        }
};

for(var i=0;i<data4.length;i++){
    xAxisList[i+data2.length+data3.length] = {
        type: 'value',
        min:0,
        gridIndex:i+data2.length+data3.length,
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 14,
        },
        axisLabel: {
            show:false,
            formatter: '{value} 岁'
        },
        axisTick:{
            show:false,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#3259B8',
            }},
        splitLine: {
            show:false,
            lineStyle: {
                color: '#A7BAFA',
            },
        }
    };
    yAxisList[i+data2.length+data3.length] = {
        type: 'category',
        gridIndex:i+data2.length+data3.length,
        data: [varList3[i]],
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 16,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#fff',
            }
        },
        axisTick:{
            show:true,
            lineStyle: {
                color: '#fff',
            },
            width:10,
        },
        axisLabel:{
            rotate:0,
            interval: '-1',
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 10,
                color:'rgb(128, 255, 165)',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F1F3F5',
                type: 'solid'
            },
            interval: 0
        },
    };
    yData[i+data2.length+data3.length]={
            name: varList3[i],
            type: 'boxplot',
            xAxisIndex:i+data2.length+data3.length,
            yAxisIndex:i+data2.length+data3.length,
            padding:[20,0],
            boxWidth:['1%','3%'],
            data: [data4[i]],
            itemStyle: {
                normal:{
                    borderColor: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgb(202, 138, 137)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgb(128, 255, 165)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth:2,
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(202, 138, 137, 0.7)'  // 0% 处的颜色
                    }, {
                        offset: 1,
                        color:'rgba(128, 255, 165,0.7)'  // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
            },
            tooltip: {
                formatter: function(param) {
                    return [
                        '科研生产力类型: ' + param.name,
                        'upper: ' + param.data[5] + "分",
                        'Q3: ' + param.data[4] + "分",
                        'median: ' + param.data[3] + "分",
                        'Q1: ' + param.data[2] + "分",
                        'lower: ' + param.data[1] + "分"
                    ].join('<br/>')
                }
            }
        }
};

option101 = {
    title: {
            text: '科\n研\n项\n目\n得\n分',
            right: 'right',
            top:"middle",
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 15,
            }
        },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: [{
        top:'-42%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-36%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-30%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-24%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-18%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-8%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-2%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'4%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'10%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'16%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'22%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'32%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'38%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'44%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'50%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    }],
    legent:{
        show:false,
        // data:['P-Ⅰ', 'P-Ⅱ', 'P-Ⅲ', 'P-Ⅳ', 'P-Ⅴ'],
        textStyle: {
            color: '#3259B8',
        },
        top:20,
    },
    yAxis: yAxisList,
    xAxis: xAxisList,
    series:yData
};



data22 = {
    "科研生产力":[
        [13.6399855699856,15.625,3,5.23636363636364,5.5,7,2.61666666666667,2,6.10909090909091,1,4,5.38452380952381,5,10,3,2.61926406926407,10,4.33333333333333,4,7,5,5,2,4,0.127272727272727,7,0.0151515151515152,9.27142857142857,9.16666666666667,5.36666666666667,3.28571428571429,4.075,17.0719696969697,20.2167832167832,3.60137085137085,0.181818181818182,35.4,20.4444444444444,40,11.0853701853702,14.1516339869281,24.3141858141858,29.4666666666667,14,19,17.2825396825397,19.2929292929293,4.41071428571429,23.9333333333333,27.3294372294372,13.030303030303,22.3357142857143,14.4,0.459523809523809,8.4,0.495757575757576,19.5714285714286,18.3333333333333,0.158333333333333,6,14.2666666666667,20.1636363636364,12.9816017316017,1.94974025974026,16.8333333333333,5,4,2.66666666666667,1,1,6.19047619047619,9,6,4.18181818181818,8.67575757575758,2,14.2380952380952,4.39545454545455,2,15.5,11.6666666666667,9,6.93333333333333,3,16.6659663865546,12.1111111111111,4.5,12.6666666666667,8,12,20,6.33333333333333,4,2.09090909090909,7.1,0.791666666666667,29.9535575535576,5.86666666666667,0.427777777777778,41.2993939393939,1.26666666666667,0.866666666666667,2.56804029304029,2,0.571428571428571,8.26297258297258,5.93333333333333,3.6,0.2,0.4,3.26666666666667,1,44.1357142857143,10.1333333333333,36.2666666666667,12.875,10.2502645502645,10,18.9026984126984,10,30.1515151515152,20.2,18,1.35411255411255,40,26.7301587301587,12.125,12.4104166666667,21.3005355276907,12.6666666666667,40.3333333333333,8.18888888888889,8.25,4.35595238095238,40.725,14,16.23614996115,4,18.4,8.66666666666667,11.8,8,30.8444444444444,13.3333333333333,16.880303030303,21.6,22,17.2039186303892,18.3333333333333,30.2969696969697,21.2254329004329,12.7333333333333,18,23.9337662337662,2.2,23.2380952380952,1.3],
        [2,2.2,10.1,4,7.2,14,3,2,9.5,4,5.34444444444444,3,3.23055555555556,4.13333333333333,4,4,5,5.2,17.9682433579492,5,1,5.16666666666667,3,10,1.1,7,2,7.66666666666667,15,5.6,1,6.60714285714286,4.05238095238095,6.5,5,4,10.3809523809524,2.01818181818182,15.3253968253968,4.18181818181818,24,10.3453463203463,25.3984848484848,27.24,16.7484848484848,32.1,14,1.86050420168067,20.0090909090909,26,8,15.4348484848485,18.1238095238095,13.2636363636364,18.9162114845938,0.787619047619048,14,4.34949494949495,0.0311111111111111,26.3720390720391,30.5127960927961,3.24444444444444,13.2835497835498,8,11.5272727272727,19.5227938727939,9,18,5.70608835608836,41.6531385281385,1.42122877122877,4,0.08,4.07727272727273,18.0059523809524,22,3.08454545454545,2.46666666666667,0.812987012987013,3.71471861471861,3.86666666666667,3.08095238095238,0.535384615384615,2.86666666666667,2.17142857142857,3.76666666666667,6.04545454545454,0.2,1,4.84994172494172,12,16,0.290909090909091,23.5398268398268,22.9261882561883,24.1051282051282,44.0341991341991,46.759777999778,2,22.0888888888889,40.9544372294372,10.5238095238095,29.6318348318348,17.4798534798535,22.6285714285714,40.8666666666667,30.8952380952381,1.96666666666667,22.8204545454545,20,8.82940582293523,2,13.3549783549784,7.84887612387612,12.6996336996337,17.5416666666667,16.9621367521368,16.8888888888889,36.4477855477855,7.46233766233766,38,14.2,20,6.36309523809524,20.6034632034632,35.1011904761905,23.4710539460539,1.13333333333333,18.1102941176471,2,22.1943722943723,18.6857142857143,5.0036075036075,8.11904761904762,0.02,5.14848484848485,1.19047619047619,11.0952380952381,9.85714285714286,6.85324675324675,17.99222999223,32.3571428571429,21.4730519480519,24.6,22.1246753246753,28,21.4587412587413,18.5510256410256,2.4,16.3555555555556,18.5,28.1183600713012,2,10.7757575757576,12.2457792207792,9.16363636363636,17.504329004329,10.0234432234432,4.75324675324675,2.33,36.2,45.5909090909091,9.2,32.1271284271284,10.4666666666667,17.0222222222222,19.0785714285714,2.72738095238095,22.0619047619048,29.9951426024955,22.1666666666667,29.7714285714286,11.0793650793651,2,13.0511904761905,12,8,46.1876551226551,10.5871212121212,8.7910989010989,8.97012987012987,22.3333333333333,14.1904761904762,11.2887445887446,8.9,8,3.57142857142857,0.353333333333333,18.8792929292929,4.06666666666667,6.87181152181152,9.17142857142857,14.8619047619048,37.3005928853755,33.5761904761905,27.5047619047619,21.6921356421356,2.24761904761905,26.5,4,41.5333333333333,14.5636363636364,11.791810966811,2.02274509803922,38.6666666666667,24.6133333333333,15.7619047619048,22.6126984126984,30.4,23.2,15.0931068931069,2,33.3160173160173,37.0222222222222,3.62565656565657,24.9930236430236,4,2,26.7479797979798,0.533333333333333,23.0142857142857,2.2,12.9621774467363,17.0352924852925,21.6333333333333,41.7048319327731,15.772027972028,38.6666666666667,45.4134199134199,20.3333333333333,30.4,17.9953102453102,22.3333333333333,31.75781995782,19.568947457771,2.4,24.180303030303,41.1714285714286,44.2138888888889,15.0911319073084,26.6136507936508,10,12.0382395382395,7.69480519480519,20.2404761904762,6.60515151515152,25.1367965367965,13.7601787101787,27.0666666666667,20.379898989899,24.6380952380952,3.82954545454545,12.5485714285714,19.2,40.1666666666667,5.61230158730159,10.1090909090909,23.2545454545455,21.2189393939394,34,41.9264402264402,41.4184183463595,21.9181128050693,46.0333333333333,28.3967171717172,23.4984126984127,43,32.1666666666667,5.61904761904762,2,17.5075757575758,10.4,10,6.85714285714286,22.6666666666667,23.8,0.2,11.468556998557,14.9995670995671,34.1980519480519,4.03571428571429,2,8.43614718614719,11.1761904761905,0.279220779220779,19.9346681096681,20.5357142857143,23.6333333333333,36.9572510822511,15.6994949494949,6.16666666666667,24.5924603174603,20.0571428571429,10,2.36363636363636,12,9.50952380952381,18.167619047619,49.0357142857143,6.30699300699301,21.8730158730159,17.6436507936508,5,15.6833333333333,14.012987012987,2.96363636363636,4.05396825396825,3,6.48030303030303,15.1069518716578,2.09166666666667,14.1333333333333,16.5,10.7921536796537,17.4011904761905,9,0.00606060606060606,4,6,17.2888888888889,2,6.16666666666667,4.16666666666667,5.08571428571429,3.8969696969697,21.0691919191919,7,50.3171629540051,11,8.00952380952381,12.8787878787879,40.5,9.80952380952381,12.3239538239538,31.75,14.792069042069,5.125,19,12.7030303030303,21.6666666666667,14,16.1666666666667,7,8,25.6666666666667,30.8428571428571,24.4285714285714,3,2,0.333333333333333,2.28571428571429,1.125,0.1,2,14.1111111111111,3,28.1401709401709,31.3333333333333,6.2,21.2857142857143,17.4371017871018,10.2095238095238,1,11.5812749342161,0.321212121212121,11.8,12,8.26140350877193,31.3973194933721,26.5153846153846,22,14.7350649350649,18.6,16.5230769230769,11.4,2,23.2424242424242,10.3,13.1333333333333,22.4,8.13333333333333,24.1545454545455,24.0181818181818,45.5689393939394,25.7901515151515,15.9282467532468,6,0.6,0.0666666666666667,0.715151515151515,42.7,1.82532467532468,31.0666666666667,35,18,24,12,35.1206349206349,30.2666666666667,19.3666666666667,22.3333333333333,1,4.16363636363636,2,0.866666666666667,0.866666666666667,0.823076923076923,1.93333333333333,0.2,1,2.66666666666667,0.666666666666667,1.07878787878788,2.2,2.86666666666667,0.380952380952381,0.666666666666667,0.2,1.28088023088023,0.4,5.73333333333333,8.73809523809524,0.133333333333333,0.5,1.04800307219662,1.28666666666667,2.24761904761905,3,0.866666666666667,5.66111111111111,2,0.866666666666667,2.68528138528139,0.2,0.428571428571428,2.5,3.28046642899584,0.2,2.25454545454545,35.1785714285714,17.1325396825397,17.1333333333333,20.8666666666667,21.3444444444444,25.4642424242424,7.06666666666667,41.8809523809524,41.152380952381,7.84569892473118,16.3914141414141,0.2,43.9533333333333,32.6666666666667,12.8392857142857,30,14,14.08,28.5277777777778,23.2333333333333,40,37.2705128205128,21.6,32.0416666666667,2,38.3333333333333,24.4222222222222,40.3454545454545,39.044474969475,3.38030303030303,28,38,2,34,42.8010101010101,17.0666666666667,0.290909090909091,6,18.3,8.2,24.8333333333333,14.2,11.2477272727273,34.1333333333333,29.3714285714286,2.09090909090909,0.0333333333333333,8,13.3333333333333,43.7777777777778,26.102380952381,2,41.9939393939394,2.71666666666667,27.2380952380952,16.3333333333333,20,22.2151515151515,16.8,20.6666666666667,18.8816738816739,10.5333333333333,16.6857142857143,12.1428571428571,40.2,16.8333333333333,24.1321428571429,40.8600122100122,32.4,32.6,22,20,40.3333333333333,39.3333333333333,42.4,16.2555555555556,2,20.2,27.4,30.3611111111111,30.3333333333333,38.3611111111111,4.3031746031746,21.7422161172161,29.0892857142857,12.2,12.1166666666667,20.2280441780442,14.4,22,32.5610805860806,4,32.6666666666667,13.5892857142857,16.1609307359307,10.2,17.6190476190476,2,0.333333333333333,14.6666666666667,14.1428571428571,26,4,13.6511266511267,6.57142857142857,16.8124542124542,6,20,46.5880952380952,26,40.2,13.0848484848485,14.4,19,2,24,30.2,14.850937950938,0.794250194250194,28,23.1428571428571,20.1900432900433,23,26.6666666666667,15.5424242424242,2,10.1,25.8888888888889,6,13.3655844155844,19.2380952380952,20,30,36.4045954045954,12,8,15.2909090909091,17.155303030303,18.963082437276,4.12820512820513,14,11.1833333333333,16,10,14.5047619047619,4,18,0.2,44.2444444444444,40.7311827956989,2.01166666666667,4.89580770107086,1.46785714285714,0.325,2.84587912087912,0.5,13.2944444444444,18.8666666666667,20.7090909090909,1.21818181818182,0.2,2.2,4.2,0.6,0.666666666666667],
        [1.13333333333333,4,8.66666666666667,4.1,8,11.0042246642247,18,4,4.12727272727273,9.03333333333333,7,11.4190476190476,18.5272727272727,4,9.06666666666667,3,6,14,9.94090909090909,7,0.0972222222222222,5,0.118181818181818,5,8.66666666666667,0.0222222222222222,29.1666666666667,2.66666666666667,7.94141414141414,4,16.1242424242424,13.4843073593074,23.8795093795094,10.4391233766234,6.09523809523809,20.942291042291,36.0608280608281,21.4762265512266,1.37619047619048,20.8018939393939,20.345367965368,21.8530952380952,25.3878246753247,13.6939393939394,2.02,27.7260683760684,10.1203740703741,19.4761904761905,22.6488761238761,18.5775335775336,13.6696608946609,17.3767676767677,25.5480519480519,8.70363636363636,0.181818181818182,0.174242424242424,3.82162337662338,8.21438561438561,15.2344444444444,15.7085714285714,2.51515151515152,4.98113912231559,7.1005772005772,1.73321526957891,4.76176470588235,2.4537349904997,22.5978354978355,24.2666666666667,24.662814962815,11.6014368964369,23.8731601731602,37.7397419247419,9.62380952380952,17.5095682095682,12.5974025974026,18.2857142857143,6.10976190476191,15.0555555555556,14.4,20.4154270480122,4,15.8943722943723,40.9551820728291,7.35238095238095,8,4.22423576423576,7.39393939393939,2.2052380952381,11.5336435786436,12.1496464646465,16.1111111111111,13.3145454545455,8.26983016983017,31.4094017094017,19.1095238095238,14.2909090909091,9.14285714285714,14.3583694083694,25.2524741924742,2,4.00008658008658,4.19047619047619,42.2961904761905,10.3497835497835,33.2398851148851,10.3857142857143,15.4669786096257,16.3425597409127,0.754511278195489,7.45757575757576,25.496176046176,14.0142857142857,36.4579365079365,24,6.7,38.4952380952381,19.4362770562771,20.6236237704504,11.1300505050505,15.2,8.18712121212121,21.3333333333333,22.4214141414141,0.666666666666667,15.1240626040626,31.6666666666667,14.9898629148629,14.952380952381,18.8747863247863,27.2549062049062,41.6488095238095,4.36363636363636,5.13333333333333,26.1454545454545,22.350222000222,21.6922510822511,12.2854545454545,8.43221611721612,12.9312097812098,16.1944444444444,11.3361471861472,18.5848484848485,2,42.2145998445998,25.434595959596,7,4.16071428571429,10.1818181818182,16.2422077922078,4.13333333333333,38.3255411255411,16.3701298701299,28.8178958107596,17.2540909090909,2,36.2002164502165,12.9165007215007,16.0547619047619,18.4916666666667,15.3910755910756,16.3714285714286,15.047619047619,8.90476190476191,0.390476190476191,13.7705555555556,0.229390054390054,24.1349350649351,14.0132135408451,13.8025252525253,8.59880952380952,9.06580086580087,3.35753968253968,1.29090909090909,11.9207792207792,7,0.202020202020202,13.4805555555556,9.83333333333333,11.1060606060606,5,5,4.08888888888889,5,14.0777777777778,10,5.41515151515152,5.87445887445887,12.5755050505051,12.3333333333333,3.15277777777778,8.73333333333333,9.28571428571429,0.166666666666667,7.13333333333333,0.2,11.3142857142857,10.5818181818182,9.28571428571429,13.0573737373737,11.6666666666667,4.5,8.65384615384615,15.852380952381,13.1428571428571,15.1,8.02380952380952,11.3333333333333,7,12,2,4,16.4583333333333,3.96388888888889,20,11.2916666666667,13.4727272727273,11.2833333333333,21.8571428571429,14.2434343434343,6.11111111111111,9,15.9666666666667,6,4,35,22.6666666666667,10,18.4396825396825,14.0119047619048,2,7.32301587301587,17.541889483066,24.1360195360195,13.5111111111111,0.765476190476191,0.666666666666667,2.81212121212121,2.38015873015873,1.03982683982684,0.666666666666667,14.7214285714286,1.6,1.6969696969697,2.35833333333333,3.2,1.84444444444444,0.2,0.133333333333333,1.53333333333333,4.2,4.21212121212121,2.39206349206349,30.5333333333333,6.36630036630037,29.3311188811189,42.2,14.674358974359,34.0952380952381,10,5.93015873015873,43.6733333333333,24.2809523809524,15.1787878787879,10,2,21.8444444444444,18.4027777777778,10.2305555555556,35.4174025974026,14.0571428571429,18.5333333333333,28.2333333333333,20.6666666666667,28.6,1.21901154401154,22.4583333333333,24.2857142857143,25,12.952380952381,28,8.98888888888889,38.5333333333333,41.5761904761905,4.19047619047619,22.6755411255411,23.6,20,15.0166666666667,25.2205128205128,0.0666666666666667,14.8333333333333,19.7151515151515,23.0035714285714,6.5,16.6925806219924,1.26666666666667,8,2,26.9895382395382,17.7333333333333,20.3333333333333,20.8076923076923,15.2727272727273,18.7444444444444,1.22640692640693,33.7062770562771,18.5333333333333,16.8939393939394,16.3393939393939,3.14411421911422,2.51515151515152],
        [1,19.4372155622156,0.4,1.2,2,2,4.32272727272727,5,12.3619047619048,15.757437007437,2.2,9.69393939393939,0.666666666666667,10,8.85638528138528,7,6,12.7948051948052,21.0880952380952,13.525,8,44.7047619047619,19.8631313131313,16.7603896103896,2,21.330303030303,19.2666666666667,12.5828571428571,12,14,2,21.8952380952381,9.67936507936508,2,12.2396897546898,7.74401154401154,35.2142135642136,10.5252918145432,17.6071428571429,23.4305555555556,0.388039215686275,3.09116161616162,0.941269841269841,44.5493506493507,34,25.8125874125874,8.97207792207792,10.7545454545455,16.9821428571429,9,21.6254834054834,4.70855810855811,15.9902097902098,43.8832251082251,2.41904761904762,4.5,8,0.142857142857143,18.4662041467305,29.6949134199134,10.5932178932179,27.8780885780886,14.8001803751804,6.51868686868687,8.31298701298701,12.6,21.1139393939394,8,10,35.488961038961,2,17.6152347652348,22.7538461538462,24.0699327369808,0.163636363636364,14.8809523809524,7.18181818181818,14,12.4472222222222,6.81335331335331,16.7106643356643,12.4,33.6749250749251,22.7300505050505,24.4190476190476,45.6851370851371,26.1818181818182,40.7857142857143,5.80952380952381,40.7199222999223,32,15.6031746031746,20.5714285714286,11.2722222222222,15.4429292929293,1.49206349206349,15.1642857142857,25.8928571428571,19.5154761904762,18.1515151515152,11,22.2888888888889,31.1838661338661,20.4138528138528,23.4857142857143,44.6722444222444,8,0.0277777777777778,12.1666666666667,28.0731601731602,18.6524364524365,18.5231608770633,23.2220418470418,24.4072222222222,14.4666666666667,22.7827496175322,25.3333333333333,18.5324242424242,4.45242424242424,19.0333333333333,31.9892496392496,22.4244422244422,22.6545454545455,3.09722222222222,1.14102564102564,8,12,0.223232323232323,50.9042450887033,5,10.0666666666667,12.2939393939394,7.60909090909091,8.21428571428571,22.3761904761905,12.0127206127206,11.6805555555556,24.3833333333333,5.33333333333333,4,23.2253427128427,4.30952380952381,2,33.5409090909091,6.66666666666667,18.8848484848485,10.6051515151515,3.75854978354978,12.9116883116883,20.7497474747475,0.563636363636364,12.3333333333333,8.05714285714286,22.8666666666667,27.5333333333333,19.7,2,0.733333333333333,0.606451612903226,4.10909090909091,0.338888888888889,2.97560606060606,4.09365079365079,2.91082972582973,12.2186868686869,45.5166666666667,0.133333333333333,4,25.347619047619,12.2857142857143,25.2315018315018,2,40.1666666666667,33.9568181818182,25.1284759358289,1.26666666666667,4.13333333333333,42.1454545454545,44.0348124098124,43.9333333333333,30.4742063492063,2.0247113997114,8.45,23.5428571428571,15.4666666666667,41.5333333333333,18.9986813186813,22.3333333333333,23.3738095238095,1,8.55555555555556,25.2658008658009,10.9073593073593,14.3333333333333,14.2,21.9714285714286,4,14.4318181818182,32.1997835497835,26.25,18.7828282828283,27.054797979798,42.3333333333333,20.3272727272727,16,2,20.3581780538302,25.4,23.9079365079365,13.3484848484848,2.53333333333333,2.2,0.125,20.2,14.3493506493506,0.2,0.0303030303030303,0.394602300636783],
        [2,4,2,4.6,3,9.27777777777778,8,8.5,1.2,5.08181818181818,7.09090909090909,2,12.5,4.80952380952381,0.0833333333333333,1,4.11111111111111,6.16666666666667,3.59090909090909,10.8333333333333,5,14.8333333333333,8.16666666666667,2,5,4,6.70714285714286,15.7428571428571,6,0.133333333333333,11.9314790764791,1.2,12.3833333333333,20,22.7333333333333,23.8380952380952,16.3115218115218,40.5457792207792,8,6,12,2.5,14.7492063492064,12,16.0266666666667,12.1559523809524,12.0833333333333,2,24.6723758125932,0.266666666666667,18,22.8766233766234,2.66666666666667,12.2666666666667,26.5211038961039,2.16666666666667,14,6.30909090909091,13.3761904761905,1,8.05555555555556,24.2393939393939,8.33333333333333,14.1333333333333,5.66666666666667,30,27.5090909090909,10.5333333333333,4.14545454545455,4,5.61471861471861,2,16,2,3,4.24166666666667,2,6.1,7,1,2,20.0972222222222,24.6666666666667,7.53333333333333,14,8,12,8.2,9.16666666666667,15.1666666666667,0.285714285714286,2,4.70833333333333,17.0666666666667,24,14,8,30,22,38.4,0.888311688311688,0.698484848484848,3.33333333333333,8.13333333333333,2.02777777777778,0.2,0.181818181818182,0.133333333333333,0.666666666666667,0.0857142857142857,1.15238095238095,0.2,3.41666666666667,4.7,7.3047619047619,18.421645021645,17.35,14,4.77142857142857,1.53571428571429,0.2,10,2.68831168831169,19.8606060606061,24,16,2,24,14.2666666666667,29.7333333333333,24.5333333333333,30.3666666666667,18.4,16.3333333333333,14.8666666666667,12.2,14.1507936507937,36,11,11.2380952380952,16,30,10,4,2,16,0.619047619047619,2.46969696969697,0.2,35.2,14,4,14,20.1624542124542,20,2.70826534576535,14.1333333333333,10,0.866666666666667,1.7093137254902,12.3333333333333,41.6190476190476,17.0666666666667,0.151515151515151,31.7969696969697,18.3333333333333,40.4675324675325,16.7636363636364,27.4666666666667,12,32.5636363636364,8.4,10,26,14,16.8761904761905,20.2,43,4,12,14.8666666666667,11.1666666666667,19.8447552447552,20.6666666666667,20.3666666666667,9,8,8.2,2,16.6666666666667,16.3777777777778,14.6857142857143,18.2,10.2,6,17.9333333333333,0.0818181818181818,0.142857142857143,3.26439393939394]
    ],
    "学术影响力":[
        [2,4,2,8.66666666666667,14,2.61666666666667,2,3,6.10909090909091,1.2,3,5,4,5,12.5,9.69393939393939,9.94090909090909,0.0833333333333333,1.1,7.66666666666667,2,4,0.0222222222222222,15.7428571428571,8,25.5480519480519,4.98113912231559,12.3833333333333,6.10976190476191,14.1516339869281,9.85714285714286,26.5,11.791810966811,2.5,18.3333333333333,10,2,4.13333333333333,4,0.202020202020202,0.00606060606060606,1,6,8.67575757575758,5.66666666666667,5.61471861471861,12.8787878787879,24.4285714285714,3,6.1,3,11.5812749342161,4.70833333333333,17.0666666666667,10.6051515151515,6,0.888311688311688,12.3333333333333,27.5333333333333,0.866666666666667,2.2,0.733333333333333,5.73333333333333,17.35,20.8666666666667,14,16,2,14.2666666666667,29.7333333333333,10,32.0416666666667,38.3333333333333,12.2,25.2315018315018,30.1515151515152,10,16,35.2,2.71666666666667,2.70826534576535,12.3333333333333,0.151515151515151,32.6666666666667,23.6,11.8,14.4318181818182,32.1997835497835,11.1666666666667,20.6666666666667,9,2,14.6857142857143,18.2,25.4,44.2444444444444,0.0818181818181818,4.2,2.51515151515152],
        [1.13333333333333,2,8,12.3619047619048,18,9.03333333333333,4,5,7,4.80952380952381,1,1,6.16666666666667,8.85638528138528,5.6,4.18181818181818,16.1242424242424,21.8530952380952,0.787619047619048,2,1.2,3.08095238095238,4.84994172494172,22.7333333333333,23.8380952380952,8,20.4154270480122,21.4730519480519,12.6,2,14.3583694083694,13.030303030303,12.1559523809524,40.1666666666667,12.2854545454545,23.4984126984127,36.9572510822511,36.2002164502165,18.167619047619,2.16666666666667,9.83333333333333,6.30909090909091,6,12.3333333333333,11.6666666666667,31.75,13.1428571428571,12.7030303030303,16,30.8428571428571,16.4583333333333,9,8,9.16666666666667,15.1666666666667,2,7.1,0.285714285714286,16.5230769230769,0.6,24,14.7214285714286,2,1.07878787878788,2.68831168831169,40,12.2857142857143,16,20,28.2333333333333,25,1.7093137254902,4.35595238095238,4,31.7969696969697,4,22.6755411255411,20,14.1428571428571,12,0.794250194250194,16.6925806219924,8,18,8.2,16.3777777777778,6,0.325,18.5333333333333,0.6],
        [3,2.2,5.23636363636364,4,10.1,5.5,7.2,4.1,2,4,4,9.27777777777778,8.5,7,5.08181818181818,4,10,14,2,5.16666666666667,10,0.0972222222222222,4.11111111111111,0.127272727272727,7,5,10,2,8.16666666666667,5,0.0151515151515152,9.27142857142857,15,9.16666666666667,6.60714285714286,5.36666666666667,3.28571428571429,16.7484848484848,2,21.330303030303,14,9.67936507936508,18,0.181818181818182,2.51515151515152,1,20,18.2857142857143,20,4,5.14848484848485,2,8,6,14.5636363636364,2.02274509803922,5.80952380952381,2,3.62565656565657,38.6666666666667,12,18.8747863247863,26.6136507936508,0.158333333333333,6,12.0833333333333,18.5848484848485,11.1761904761905,24.4072222222222,20.0571428571429,6.30699300699301,12.2666666666667,26.5211038961039,14.1333333333333,14,12,14.0777777777778,8.05555555555556,8.33333333333333,4.18181818181818,4,8.00952380952381,13.0573737373737,19,8.02380952380952,15.5,3,6.93333333333333,3,1,2,8,12,4,6.2,10,17.4371017871018,8.2,6.33333333333333,1,0.321212121212121,4,2,22,18.6,10.3,24,14,8,15.9282467532468,0.0666666666666667,0.698484848484848,18,41.2993939393939,2,2.66666666666667,0.666666666666667,3.6,0.2,4.2,0.2,12.2186868686869,4.7,17.1333333333333,7.06666666666667,0.2,4,23.2333333333333,24,10.1333333333333,30.3666666666667,16.3333333333333,10.2502645502645,25.347619047619,14.1507936507937,11,5.93015873015873,2,38,18,8.2,14.2,0.619047619047619,15.1787878787879,2.46969696969697,2.09090909090909,12.4104166666667,4,2.0247113997114,16.8,18.8816738816739,16.6857142857143,12.6666666666667,16.2555555555556,2,20.2,8.25,27.4,17.0666666666667,4.3031746031746,18.3333333333333,40.4675324675325,14,2,4.19047619047619,14.6666666666667,26,4,8.4,10,13.0848484848485,2,25.2205128205128,30.2,43,27.054797979798,30.8444444444444,1.26666666666667,23,2,17.2039186303892,20.3666666666667,8,8,15.2909090909091,18.963082437276,11.1833333333333,23.9079365079365,10,14.5047619047619,18,0.2,0.125,23.2380952380952,0.0303030303030303],
        [13.6399855699856,1,15.625,4.32272727272727,5,4.6,11.0042246642247,9.5,4.12727272727273,4.13333333333333,10,7.09090909090909,4,9.06666666666667,2.2,6,5.2,5,0.666666666666667,5,0.118181818181818,10.8333333333333,14.8333333333333,29.1666666666667,7,4.05238095238095,6.5,10.3809523809524,2.01818181818182,24,23.8795093795094,6,26,8,1.37619047619048,2,26.3720390720391,9,5.70608835608836,17.0719696969697,23.4305555555556,0.133333333333333,41.6531385281385,1.42122877122877,3.60137085137085,18.0059523809524,11.9314790764791,22,3.08454545454545,0.2,4.76176470588235,12,0.290909090909091,23.5398268398268,2,44.5493506493507,35.4,20.4444444444444,17.4798534798535,22.6285714285714,40.8666666666667,30.8952380952381,1.96666666666667,2,0.02,1.19047619047619,11.0952380952381,8,24.6,24.3141858141858,8,17.6152347652348,45.5909090909091,10.4666666666667,14.2909090909091,2,17.2825396825397,14,6.81335331335331,4.41071428571429,12,8,22.3333333333333,14.1904761904762,14.0142857142857,27.5047619047619,2.24761904761905,41.5333333333333,30.4,15.0931068931069,37.0222222222222,0.459523809523809,0.533333333333333,19.5154761904762,18.1515151515152,45.4134199134199,20.3333333333333,22.3333333333333,19.568947457771,31.1838661338661,14.7492063492064,16.0266666666667,6.60515151515152,5.61230158730159,44.6722444222444,8,0.0277777777777778,46.0333333333333,43,24.6723758125932,5.61904761904762,28.0731601731602,17.5075757575758,10.4,10,23.8,4.16071428571429,0.266666666666667,8.43614718614719,14.2666666666667,23.2220418470418,20.5357142857143,10,18,2.36363636363636,15.6833333333333,14.012987012987,2.96363636363636,9.06580086580087,2.66666666666667,2.09166666666667,16.5,8,5.41515151515152,2,13.3761904761905,1,3.8969696969697,3.15277777777778,21.0691919191919,8.73333333333333,14.1333333333333,27.5090909090909,10.5333333333333,11,4.14545454545455,10.0666666666667,8.21428571428571,40.5,5.125,14,16.1666666666667,7,8,25.6666666666667,12,5.33333333333333,20,21.8571428571429,2,2.28571428571429,14.2434343434343,2,16.6659663865546,0.1,2,20.0972222222222,12,4.30952380952381,12,2,14.7350649350649,7.32301587301587,11.4,2,23.2424242424242,6.66666666666667,8.13333333333333,13.5111111111111,45.5689393939394,2.81212121212121,0.715151515151515,3.33333333333333,0.427777777777778,20.7497474747475,8.05714285714286,22.8666666666667,30.2666666666667,8.13333333333333,2.02777777777778,4.16363636363636,1.26666666666667,0.2,0.866666666666667,0.823076923076923,1.93333333333333,0.2,2.56804029304029,2.86666666666667,0.606451612903226,3.2,0.2,0.2,1.53333333333333,4.10909090909091,1.28088023088023,0.4,0.5,4.21212121212121,1.28666666666667,2.24761904761905,3,0.866666666666667,0.428571428571428,2.39206349206349,45.5166666666667,7.3047619047619,18.421645021645,25.4642424242424,41.8809523809524,41.152380952381,7.84569892473118,43.9533333333333,32.6666666666667,12.8392857142857,30,14,24,14.08,36.2666666666667,24.5333333333333,42.2,18.4,37.2705128205128,21.6,24.4222222222222,36,10,11.2380952380952,3.38030303030303,28,2,20.2,34,42.8010101010101,17.0666666666667,6,25.1284759358289,18.3,2,1.35411255411255,40,29.3714285714286,8,21.8444444444444,13.3333333333333,26.7301587301587,43.7777777777778,10.2305555555556,26.102380952381,2,14,8.45,20.1624542124542,21.3005355276907,18.5333333333333,16.3333333333333,10.5333333333333,10,12.1428571428571,40.2,15.4666666666667,24.1321428571429,40.8600122100122,32.4,32.6,12.952380952381,42.4,8.18888888888889,30.3611111111111,22.3333333333333,8.98888888888889,20.2280441780442,32.5610805860806,8.55555555555556,10.2,25.2658008658009,41.5761904761905,14.2,21.9714285714286,8.66666666666667,15.0166666666667,16.7636363636364,27.4666666666667,4,26,20,14,16.8761904761905,46.5880952380952,14.4,14.850937950938,0.0666666666666667,14.8333333333333,28,13.3333333333333,12,18.3333333333333,30.2969696969697,19.8447552447552,12.7333333333333,19.2380952380952,30,23.9337662337662,16,12,2,14,20.8076923076923,16,10.2,17.9333333333333,4.89580770107086,2.53333333333333,0.142857142857143,2.2,18.8666666666667,2.2,0.394602300636783,1.3,0.666666666666667],
        [19.4372155622156,2,4,7,3,1,5.34444444444444,4,15.757437007437,3.23055555555556,11.4190476190476,2,3,4.33333333333333,4,6,5,4,12.7948051948052,8,27.24,32.1,14,1.86050420168067,20.0090909090909,12,13.2636363636364,18.9162114845938,13.6939393939394,27.7260683760684,30.5127960927961,13.2835497835498,17.6071428571429,17.3767676767677,0.174242424242424,0.08,15.2344444444444,2.46666666666667,0.812987012987013,2.86666666666667,2.17142857142857,3.76666666666667,6.04545454545454,22.5978354978355,22.9261882561883,22.0888888888889,10.5238095238095,29.6318348318348,8.97207792207792,8.82940582293523,10.7545454545455,17.5095682095682,12.6996336996337,16.8888888888889,40,2.41904761904762,14.4,6.36309523809524,20.6034632034632,23.4710539460539,22.1943722943723,7.35238095238095,7.39393939393939,22.1246753246753,2.2052380952381,6.51868686868687,28.1183600713012,10.0234432234432,9.2,17.0222222222222,0.163636363636364,29.9951426024955,29.7714285714286,7.18181818181818,42.2961904761905,12.4472222222222,13.0511904761905,15.4669786096257,0.353333333333333,23.9333333333333,4.06666666666667,14.8619047619048,27.3294372294372,26.1818181818182,12,40.7199222999223,32,15.6031746031746,8.4,21.6333333333333,11,30.4,31.75781995782,22.2888888888889,41.1714285714286,12.0382395382395,26.1454545454545,20.379898989899,21.6922510822511,34,41.9264402264402,11.3361471861472,41.4184183463595,21.9181128050693,28.3967171717172,32.1666666666667,2,10.1818181818182,0.279220779220779,25.3333333333333,18.5324242424242,5,22.6545454545455,4.05396825396825,6.48030303030303,1.29090909090909,17.4011904761905,9,4.08888888888889,9,9.28571428571429,50.3171629540051,30,0.166666666666667,7.13333333333333,5,12.2939393939394,2,15.852380952381,11.6805555555556,24.3833333333333,2,4,0.333333333333333,4.24166666666667,1.125,6.11111111111111,12.6666666666667,31.3333333333333,6,14,4,2.09090909090909,8.26140350877193,30,3.75854978354978,12.9116883116883,0.765476190476191,5.86666666666667,42.7,2.38015873015873,31.0666666666667,35,19.3666666666667,1,1.6969696969697,2.35833333333333,0.571428571428571,5.93333333333333,1.84444444444444,0.666666666666667,0.4,0.133333333333333,0.338888888888889,2.97560606060606,5.66111111111111,2,4.09365079365079,2.5,2.91082972582973,35.1785714285714,17.1325396825397,21.3444444444444,1.53571428571429,10,6.36630036630037,0.133333333333333,29.3311188811189,28.5277777777778,14.8666666666667,14.674358974359,30,10,40.1666666666667,4,1.26666666666667,0.2,2,14,12.125,43.9333333333333,30.4742063492063,41.9939393939394,27.2380952380952,14.0571428571429,22.2151515151515,20.6666666666667,20.6666666666667,22.4583333333333,24.2857142857143,41.5333333333333,22,20,40.3333333333333,41.6190476190476,38.3611111111111,23.3738095238095,1,14.4,13.5892857142857,16.23614996115,0.333333333333333,18.4,32.5636363636364,16.8124542124542,6,26,8,19,26.25,18.7828282828283,16.880303030303,22,26.6666666666667,14.8666666666667,25.8888888888889,21.2254329004329,17.7333333333333,36.4045954045954,20.3333333333333,16.6666666666667,4,2.2,13.2944444444444,20.2,0.2,3.26439393939394,0.2],
        [0.4,1.2,2,3,8,5.38452380952381,18.5272727272727,2.61926406926407,17.9682433579492,5,7,3,3.59090909090909,5,7,8.66666666666667,6.70714285714286,2.66666666666667,1,7.94141414141414,4,15.3253968253968,21.0880952380952,13.525,13.4843073593074,10.3453463203463,25.3984848484848,44.7047619047619,19.8631313131313,16.7603896103896,10.4391233766234,6.09523809523809,20.942291042291,36.0608280608281,21.4762265512266,19.2666666666667,15.4348484848485,12.5828571428571,18.1238095238095,14,20.8018939393939,20.345367965368,25.3878246753247,4.34949494949495,21.8952380952381,0.0311111111111111,2.02,3.24444444444444,11.5272727272727,12.2396897546898,10.1203740703741,7.74401154401154,35.2142135642136,19.5227938727939,19.4761904761905,4.075,10.5252918145432,22.6488761238761,18.5775335775336,13.6696608946609,20.2167832167832,8.70363636363636,0.388039215686275,3.82162337662338,4,8.21438561438561,4.07727272727273,15.7085714285714,3.09116161616162,0.181818181818182,3.71471861471861,3.86666666666667,7.1005772005772,1.73321526957891,0.535384615384615,0.941269841269841,2.4537349904997,24.2666666666667,24.662814962815,16,24.1051282051282,44.0341991341991,46.759777999778,34,40.9544372294372,22.8204545454545,20,11.6014368964369,23.8731601731602,25.8125874125874,37.7397419247419,9.62380952380952,13.3549783549784,16.9821428571429,7.84887612387612,12.5974025974026,9,21.6254834054834,4.70855810855811,17.5416666666667,16.9621367521368,15.9902097902098,36.4477855477855,7.46233766233766,15.0555555555556,38,43.8832251082251,4.5,0.142857142857143,14.2,35.1011904761905,11.0853701853702,18.4662041467305,1.13333333333333,18.1102941176471,29.6949134199134,2,18.6857142857143,15.8943722943723,40.9551820728291,5.0036075036075,8.11904761904762,10.5932178932179,6.85324675324675,17.99222999223,4.22423576423576,32.3571428571429,27.8780885780886,14.8001803751804,28,21.4587412587413,18.5510256410256,16.3115218115218,2.4,16.3555555555556,11.5336435786436,18.5,12.1496464646465,8.31298701298701,2,21.1139393939394,10.7757575757576,12.2457792207792,16.1111111111111,9.16363636363636,17.504329004329,10,35.488961038961,4.75324675324675,2.33,40.5457792207792,13.3145454545455,8.26983016983017,36.2,22.7538461538462,32.1271284271284,31.4094017094017,24.0699327369808,29.4666666666667,19.1095238095238,14,19.0785714285714,19,9.14285714285714,2.72738095238095,25.2524741924742,22.0619047619048,22.1666666666667,4.00008658008658,14.8809523809524,11.0793650793651,4.19047619047619,10.3497835497835,33.2398851148851,19.2929292929293,16.7106643356643,10.3857142857143,16.3425597409127,0.754511278195489,46.1876551226551,10.5871212121212,8.7910989010989,8.97012987012987,11.2887445887446,12.4,8.9,8,33.6749250749251,3.57142857142857,7.45757575757576,18.8792929292929,6.87181152181152,25.496176046176,22.7300505050505,9.17142857142857,24.4190476190476,37.3005928853755,33.5761904761905,45.6851370851371,36.4579365079365,21.6921356421356,4,24,40.7857142857143,38.6666666666667,24.6133333333333,15.7619047619048,6.7,38.4952380952381,22.3357142857143,19.4362770562771,22.6126984126984,23.2,33.3160173160173,24.9930236430236,4,20.6236237704504,11.1300505050505,14.4,20.5714285714286,15.2,11.2722222222222,8.18712121212121,2,21.3333333333333,26.7479797979798,23.0142857142857,2.2,15.4429292929293,22.4214141414141,12.9621774467363,1.49206349206349,15.1642857142857,17.0352924852925,0.495757575757576,25.8928571428571,0.666666666666667,15.1240626040626,41.7048319327731,19.5714285714286,15.772027972028,31.6666666666667,17.9953102453102,14.9898629148629,2.4,14.952380952381,24.180303030303,44.2138888888889,15.0911319073084,27.2549062049062,41.6488095238095,7.69480519480519,4.36363636363636,20.2404761904762,5.13333333333333,25.1367965367965,13.7601787101787,27.0666666666667,24.6380952380952,3.82954545454545,12.5485714285714,19.2,22.350222000222,10.1090909090909,23.2545454545455,8.43221611721612,21.2189393939394,20.4138528138528,12.9312097812098,16.1944444444444,23.4857142857143,2,12.1666666666667,42.2145998445998,18.6524364524365,6.85714285714286,22.6666666666667,0.2,11.468556998557,14.9995670995671,34.1980519480519,25.434595959596,7,4.03571428571429,18.5231608770633,16.2422077922078,2,19.9346681096681,23.6333333333333,38.3255411255411,14.4666666666667,16.3701298701299,22.7827496175322,28.8178958107596,15.6994949494949,17.2540909090909,2,20.1636363636364,4.45242424242424,12.9165007215007,12.9816017316017,6.16666666666667,16.0547619047619,24.5924603174603,18.4916666666667,1.94974025974026,15.3910755910756,12,22.8766233766234,9.50952380952381,16.3714285714286,19.0333333333333,31.9892496392496,49.0357142857143,15.047619047619,8.90476190476191,0.390476190476191,2.66666666666667,21.8730158730159,13.7705555555556,0.229390054390054,17.6436507936508,22.4244422244422,24.1349350649351,14.0132135408451,13.8025252525253,8.59880952380952,16.8333333333333,3.35753968253968,3,5,3.09722222222222,15.1069518716578,1,10.7921536796537,11.9207792207792,7,13.4805555555556,1.14102564102564,11.1060606060606,5,4,5,6.19047619047619,5,10,17.2888888888889,6.16666666666667,0.223232323232323,4.16666666666667,5.08571428571429,5.87445887445887,12.5755050505051,24.2393939393939,50.9042450887033,7,0.2,7.60909090909091,11.3142857142857,22.3761904761905,2,9.80952380952381,10.5818181818182,14.2380952380952,9.28571428571429,4.5,12.3239538239538,8.65384615384615,4.39545454545455,14.792069042069,15.1,12.0127206127206,21.6666666666667,11.3333333333333,7,2,2,11.6666666666667,3.96388888888889,11.2916666666667,13.4727272727273,11.2833333333333,12.1111111111111,14.1111111111111,9,7,4.5,28.1401709401709,24.6666666666667,15.9666666666667,7.53333333333333,20,35,22.6666666666667,21.2857142857143,10.2095238095238,23.2253427128427,18.4396825396825,14.0119047619048,11.8,31.3973194933721,26.5153846153846,33.5409090909091,17.541889483066,13.1333333333333,22.4,24.1545454545455,24.0181818181818,24.1360195360195,0.791666666666667,18.8848484848485,25.7901515151515,22,38.4,29.9535575535576,0.666666666666667,1.03982683982684,1.82532467532468,0.666666666666667,0.563636363636364,12,35.1206349206349,19.7,22.3333333333333,0.181818181818182,0.866666666666667,2,0.133333333333333,1,1.6,0.666666666666667,8.26297258297258,0.380952380952381,0.133333333333333,0.0857142857142857,8.73809523809524,1.04800307219662,0.866666666666667,3.26666666666667,1,1.15238095238095,0.2,2.68528138528139,3.41666666666667,3.28046642899584,0.2,2.25454545454545,30.5333333333333,4.77142857142857,44.1357142857143,16.3914141414141,0.2,19.8606060606061,12.875,34.0952380952381,2,40.3454545454545,39.044474969475,18.9026984126984,43.6733333333333,0.290909090909091,33.9568181818182,24.2809523809524,24.8333333333333,11.2477272727273,10,4.13333333333333,34.1333333333333,0.0333333333333333,42.1454545454545,18.4027777777778,44.0348124098124,35.4174025974026,20,23.5428571428571,14.1333333333333,28.6,1.21901154401154,16.8333333333333,40.3333333333333,0.866666666666667,39.3333333333333,28,18.9986813186813,30.3333333333333,21.7422161172161,40.725,29.0892857142857,12.2,38.5333333333333,12.1166666666667,22,16.1609307359307,10.9073593073593,17.6190476190476,14.3333333333333,13.6511266511267,6.57142857142857,40.2,24,20.2,19.7151515151515,23.1428571428571,20.1900432900433,23.0035714285714,6.5,42.3333333333333,21.6,4,15.5424242424242,2,10.1,20.3272727272727,26.9895382395382,6,13.3655844155844,20,17.155303030303,4.12820512820513,20.3581780538302,15.2727272727273,13.3484848484848,40.7311827956989,2.01166666666667,1.46785714285714,18.7444444444444,2.84587912087912,1.22640692640693,0.5,33.7062770562771,14.3493506493506,16.8939393939394,20.7090909090909,16.3393939393939,3.14411421911422,1.21818181818182]
    ],
    "学术创新力":[
        [0.4,1.2,2,1.13333333333333,3,10.1,7.2,3,2,6.10909090909091,18,4,5.38452380952381,7.09090909090909,2,2.2,4,17.9682433579492,12.5,4.80952380952381,4,0.118181818181818,5,14.8333333333333,2,5,3.28571428571429,5,2.01818181818182,27.24,32.1,18.9162114845938,0.388039215686275,18.0059523809524,16,0.290909090909091,20,2,14.1516339869281,10.5932178932179,28.1183600713012,10.3497835497835,13.0511904761905,4.41071428571429,8.97012987012987,0.353333333333333,22.7300505050505,27.5047619047619,26.5,13.030303030303,6,40.1666666666667,11.1761904761905,4.13333333333333,14.4666666666667,20.0571428571429,10,4.05396825396825,1.29090909090909,14.1333333333333,12,4.16666666666667,24.2393939393939,14.1333333333333,8.67575757575758,5,22.3761904761905,14.2380952380952,12.3239538239538,4.39545454545455,11.6805555555556,14,16.1666666666667,24.4285714285714,4.24166666666667,6.1,14.1111111111111,20.0972222222222,31.3333333333333,21.2857142857143,0.321212121212121,7.1,2,18.6,24,14,0.666666666666667,0.715151515151515,12.3333333333333,24,41.2993939393939,1.07878787878788,0.2,14.2666666666667,12.2,34,24.8333333333333,2.46969696969697,2,1.35411255411255,12.125,32.6666666666667,18.3333333333333,40.4675324675325,4.19047619047619,4,14.2,26,16.8761904761905,8,8.2,2,16,0.142857142857143,0.394602300636783],
        [1,15.625,2,2,2.2,4,4.1,11.0042246642247,12.3619047619048,2,4,3,4.13333333333333,7,4,5.08181818181818,18.5272727272727,10,9.06666666666667,7,5.2,7,0.0833333333333333,10,7,5,8.66666666666667,8.85638528138528,9.16666666666667,2.66666666666667,5.36666666666667,4.05238095238095,6.5,4,15.3253968253968,21.0880952380952,16.1242424242424,13.4843073593074,6,44.7047619047619,14,19.8631313131313,16.7603896103896,10.4391233766234,6.09523809523809,20.0090909090909,21.330303030303,20.942291042291,36.0608280608281,21.4762265512266,18.1238095238095,12,1.37619047619048,20.8018939393939,20.345367965368,25.3878246753247,4.34949494949495,2.02,27.7260683760684,3.24444444444444,12.2396897546898,10.1203740703741,7.74401154401154,19.5227938727939,19.4761904761905,4.075,22.6488761238761,18.5775335775336,17.6071428571429,13.6696608946609,9,5.70608835608836,17.0719696969697,20.2167832167832,8.70363636363636,0.181818181818182,0.174242424242424,3.82162337662338,8.21438561438561,3.60137085137085,4.07727272727273,15.7085714285714,22,3.09116161616162,0.181818181818182,3.71471861471861,7.1005772005772,3.08095238095238,0.535384615384615,0.941269841269841,6.04545454545454,0.2,4.76176470588235,2.4537349904997,22.5978354978355,24.2666666666667,23.5398268398268,22.9261882561883,12.3833333333333,24.1051282051282,44.0341991341991,35.4,34,22.0888888888889,22.7333333333333,17.4798534798535,30.8952380952381,22.8204545454545,23.8731601731602,37.7397419247419,8.97207792207792,9.62380952380952,7.84887612387612,12.5974025974026,4.70855810855811,16.9621367521368,6.10976190476191,15.9902097902098,36.4477855477855,7.46233766233766,43.8832251082251,40,2.41904761904762,14.4,20,20.4154270480122,18.4662041467305,1.13333333333333,18.1102941176471,29.6949134199134,2,15.8943722943723,5.0036075036075,8.11904761904762,0.02,5.14848484848485,11.0952380952381,8,17.99222999223,4.22423576423576,14.8001803751804,24.6,24.3141858141858,7.39393939393939,18.5510256410256,16.3115218115218,2.4,11.5336435786436,12.1496464646465,8.31298701298701,2,12.2457792207792,17.504329004329,10,35.488961038961,40.5457792207792,2,17.6152347652348,13.3145454545455,8.26983016983017,36.2,45.5909090909091,9.2,32.1271284271284,31.4094017094017,24.0699327369808,29.4666666666667,17.0222222222222,19.1095238095238,14,14.2909090909091,19,9.14285714285714,25.2524741924742,29.9951426024955,29.7714285714286,17.2825396825397,4.00008658008658,14.8809523809524,11.0793650793651,4.19047619047619,42.2961904761905,33.2398851148851,12.4472222222222,16.7106643356643,15.4669786096257,16.3425597409127,33.6749250749251,3.57142857142857,23.9333333333333,7.45757575757576,18.8792929292929,24.4190476190476,33.5761904761905,45.6851370851371,36.4579365079365,21.6921356421356,14.5636363636364,40.7857142857143,2.02274509803922,5.80952380952381,24.6133333333333,40.7199222999223,6.7,38.4952380952381,22.3357142857143,30.4,23.2,15.6031746031746,15.2,11.2722222222222,8.18712121212121,2,21.3333333333333,26.7479797979798,0.533333333333333,23.0142857142857,12.9621774467363,8.4,0.495757575757576,25.8928571428571,0.666666666666667,15.1240626040626,19.5154761904762,15.772027972028,45.4134199134199,31.6666666666667,17.9953102453102,31.75781995782,22.2888888888889,14.952380952381,14.7492063492064,24.180303030303,44.2138888888889,15.0911319073084,27.2549062049062,41.6488095238095,12.0382395382395,4.36363636363636,25.1367965367965,13.7601787101787,27.0666666666667,20.379898989899,24.6380952380952,12.5485714285714,22.350222000222,21.6922510822511,5.61230158730159,10.1090909090909,23.2545454545455,21.2189393939394,20.4138528138528,12.9312097812098,23.4857142857143,34,44.6722444222444,41.4184183463595,28.3967171717172,23.4984126984127,43,32.1666666666667,12.1666666666667,42.2145998445998,5.61904761904762,2,10.4,22.6666666666667,23.8,11.468556998557,14.9995670995671,25.434595959596,7,10.1818181818182,8.43614718614719,14.2666666666667,19.9346681096681,20.5357142857143,38.3255411255411,24.4072222222222,16.3701298701299,36.9572510822511,22.7827496175322,28.8178958107596,2,36.2002164502165,4.45242424242424,16.0547619047619,24.5924603174603,18.4916666666667,1.94974025974026,15.3910755910756,12,22.8766233766234,18.167619047619,16.3714285714286,19.0333333333333,49.0357142857143,8.90476190476191,0.390476190476191,13.7705555555556,0.229390054390054,17.6436507936508,24.1349350649351,5,22.6545454545455,8.59880952380952,3.35753968253968,3,12.2666666666667,5,3.09722222222222,15.1069518716578,2.66666666666667,10.7921536796537,17.4011904761905,11.9207792207792,7,0.202020202020202,13.4805555555556,1.14102564102564,9.83333333333333,11.1060606060606,5,1,6,4.08888888888889,2,0.223232323232323,5.08571428571429,6,5.87445887445887,12.5755050505051,12.3333333333333,7,9.28571428571429,50.3171629540051,0.166666666666667,7.13333333333333,4,5.61471861471861,7.60909090909091,8.00952380952381,12.8787878787879,11.3142857142857,9.28571428571429,4.5,8.65384615384615,15.852380952381,31.75,13.1428571428571,14.792069042069,15.1,8.02380952380952,24.3833333333333,7,7,2,30.8428571428571,3,16.4583333333333,3.96388888888889,5.33333333333333,20,11.2916666666667,13.4727272727273,11.2833333333333,9,6.93333333333333,2,3,14.2434343434343,16.6659663865546,1.125,0.1,9,4.5,8,7.53333333333333,14,4,35,22.6666666666667,23.2253427128427,18.4396825396825,6.33333333333333,14.0119047619048,4.30952380952381,4,2.09090909090909,2,26.5153846153846,33.5409090909091,11.4,17.541889483066,13.1333333333333,4.70833333333333,24.0181818181818,0.791666666666667,18.8848484848485,30,45.5689393939394,10.6051515151515,3.75854978354978,22,6,0.765476190476191,0.0666666666666667,0.888311688311688,0.698484848484848,20.7497474747475,2.38015873015873,0.563636363636364,35,18,12,14.7214285714286,35.1206349206349,19.7,30.2666666666667,19.3666666666667,0.866666666666667,2.56804029304029,0.133333333333333,1.6,2.66666666666667,0.571428571428571,8.26297258297258,2.2,2.86666666666667,0.380952380952381,1.84444444444444,0.666666666666667,0.133333333333333,1.53333333333333,5.73333333333333,0.133333333333333,0.5,0.338888888888889,4.21212121212121,1.28666666666667,2.24761904761905,0.866666666666667,3.26666666666667,2,4.09365079365079,2.5,2.39206349206349,2.91082972582973,3.28046642899584,0.2,2.25454545454545,45.5166666666667,17.1325396825397,21.3444444444444,25.4642424242424,41.8809523809524,10,6.36630036630037,7.84569892473118,16.3914141414141,0.2,43.9533333333333,19.8606060606061,24,36.2666666666667,24.5333333333333,42.2,12.875,30.3666666666667,37.2705128205128,14.674358974359,34.0952380952381,24.4222222222222,25.2315018315018,5.93015873015873,2,3.38030303030303,16,18.9026984126984,10,30.1515151515152,40.1666666666667,42.8010101010101,17.0666666666667,18,43.6733333333333,0.290909090909091,33.9568181818182,25.1284759358289,18.3,24.2809523809524,8.2,1.26666666666667,11.2477272727273,4.13333333333333,34.1333333333333,21.8444444444444,42.1454545454545,18.4027777777778,26.102380952381,12.4104166666667,43.9333333333333,35.4174025974026,30.4742063492063,41.9939393939394,2.71666666666667,8.45,27.2380952380952,20.1624542124542,20,2.70826534576535,14.0571428571429,16.3333333333333,20,28.2333333333333,16.8,20.6666666666667,14.1333333333333,28.6,1.21901154401154,12.1428571428571,24.2857142857143,40.3333333333333,41.5333333333333,40.8600122100122,32.4,25,20,40.3333333333333,39.3333333333333,42.4,16.2555555555556,2,18.9986813186813,8.25,30.3611111111111,22.3333333333333,4.3031746031746,4.35595238095238,21.7422161172161,40.725,29.0892857142857,1,38.5333333333333,0.151515151515151,14.4,22,4,8.55555555555556,16.1609307359307,25.2658008658009,17.6190476190476,14,14.3333333333333,22.6755411255411,21.9714285714286,8.66666666666667,6.57142857142857,16.8124542124542,26,14,26,40.2,8,26.25,18.7828282828283,14.850937950938,0.0666666666666667,0.794250194250194,14.8333333333333,20.2,27.054797979798,30.8444444444444,28,23.0035714285714,6.5,13.3333333333333,16.6925806219924,42.3333333333333,21.6,22,26.6666666666667,4,8,15.5424242424242,12,14.8666666666667,17.2039186303892,26.9895382395382,13.3655844155844,19.8447552447552,21.2254329004329,12.7333333333333,18,23.9337662337662,12,8,15.2909090909091,2,16.6666666666667,20.8076923076923,20.3581780538302,11.1833333333333,16,15.2727272727273,23.9079365079365,6,44.2444444444444,2.01166666666667,1.46785714285714,18.7444444444444,2.2,0.325,1.22640692640693,0.125,0.0818181818181818,33.7062770562771,13.2944444444444,20.2,0.2,3.14411421911422,3.26439393939394,1.21818181818182,0.2,0.0303030303030303],
        [13.6399855699856,19.4372155622156,2,5.23636363636364,8.66666666666667,5,4.6,14,8,3,9.5,9.27777777777778,9.03333333333333,3.23055555555556,1.2,11.4190476190476,10,4,5,5,14,0.666666666666667,5.16666666666667,3,1.1,5,7,8.16666666666667,7.66666666666667,4,0.0222222222222222,15,5.6,7,4,10.3809523809524,7.94141414141414,4.18181818181818,13.525,8,25.3984848484848,23.8795093795094,16.7484848484848,1.86050420168067,8,15.4348484848485,14,2,13.2636363636364,21.8530952380952,0.787619047619048,14,21.8952380952381,0.0311111111111111,13.6939393939394,26.3720390720391,30.5127960927961,13.2835497835498,9.67936507936508,35.2142135642136,17.3767676767677,23.4305555555556,0.133333333333333,11.9314790764791,3.08454545454545,2.46666666666667,0.812987012987013,1.2,3.86666666666667,4.98113912231559,1.73321526957891,2.86666666666667,2.17142857142857,3.76666666666667,4.84994172494172,12,24.662814962815,46.759777999778,2,20.4444444444444,40.9544372294372,40.8666666666667,23.8380952380952,20,11.6014368964369,25.8125874125874,8.82940582293523,13.3549783549784,17.5095682095682,16.9821428571429,9,12.6996336996337,21.6254834054834,17.5416666666667,18.2857142857143,16.8888888888889,15.0555555555556,4.5,8,0.142857142857143,14.2,6.36309523809524,20.6034632034632,35.1011904761905,23.4710539460539,11.0853701853702,22.1943722943723,40.9551820728291,7.35238095238095,9.85714285714286,6.85324675324675,27.8780885780886,21.4730519480519,21.4587412587413,6.51868686868687,18.5,10.7757575757576,8,10.0234432234432,2.33,14.3583694083694,22.0619047619048,0.163636363636364,22.1666666666667,2,14,6.81335331335331,10.3857142857143,12,8,0.754511278195489,8,8.7910989010989,14.1904761904762,11.2887445887446,12.4,4.06666666666667,6.87181152181152,9.17142857142857,37.3005928853755,27.3294372294372,2.24761904761905,41.5333333333333,24,11.791810966811,38.6666666666667,15.7619047619048,15.0931068931069,2,32,33.3160173160173,3.62565656565657,24.9930236430236,4,20.6236237704504,11.1300505050505,14.4,20.5714285714286,0.459523809523809,15.4429292929293,1.49206349206349,15.1642857142857,21.6333333333333,41.7048319327731,18.1515151515152,11,20.3333333333333,30.4,14.9898629148629,19.568947457771,2.4,41.1714285714286,12,16.0266666666667,18.8747863247863,26.6136507936508,10,7.69480519480519,0.158333333333333,6.60515151515152,19.2,12.1559523809524,8.43221611721612,8,21.9181128050693,2,46.0333333333333,2,24.6723758125932,28.0731601731602,17.5075757575758,18.6524364524365,10,0.2,34.1980519480519,4.16071428571429,4.03571428571429,0.266666666666667,2,0.279220779220779,23.2220418470418,23.6333333333333,25.3333333333333,17.2540909090909,18.5324242424242,12.9165007215007,18,9.50952380952381,31.9892496392496,15.047619047619,2.66666666666667,21.8730158730159,14.0132135408451,15.6833333333333,14.012987012987,2.96363636363636,13.8025252525253,9.06580086580087,14,9,8,4,5,6.19047619047619,5,17.2888888888889,8.05555555555556,21.0691919191919,8.73333333333333,50.9042450887033,5.66666666666667,30,27.5090909090909,10.5333333333333,11,0.2,10.0666666666667,12.2939393939394,8.21428571428571,2,10.5818181818182,13.0573737373737,5.125,12.0127206127206,19,12.7030303030303,16,21.6666666666667,11.3333333333333,8,25.6666666666667,15.5,11.6666666666667,4,3,2.28571428571429,12.1111111111111,3,6.11111111111111,2,12.6666666666667,15.9666666666667,12,4,20,10,17.4371017871018,8.2,9.16666666666667,15.1666666666667,11.5812749342161,11.8,12,0.285714285714286,22,14.7350649350649,7.32301587301587,2,23.2424242424242,10.3,22.4,8.13333333333333,24.1545454545455,24.1360195360195,13.5111111111111,25.7901515151515,15.9282467532468,29.9535575535576,0.6,5.86666666666667,3.33333333333333,42.7,1.03982683982684,0.666666666666667,31.0666666666667,8.05714285714286,22.8666666666667,27.5333333333333,2,8.13333333333333,2.02777777777778,1,4.16363636363636,1.26666666666667,2,0.2,0.866666666666667,0.823076923076923,1.93333333333333,0.2,2,1,1.6969696969697,0.666666666666667,0.606451612903226,0.2,0.2,3.6,4.10909090909091,1.28088023088023,0.0857142857142857,4.2,8.73809523809524,1.04800307219662,2.97560606060606,3,5.66111111111111,1,0.866666666666667,0.2,2.68528138528139,0.2,0.428571428571428,35.1785714285714,7.3047619047619,18.421645021645,17.35,20.8666666666667,1.53571428571429,41.152380952381,29.3311188811189,12.8392857142857,14.08,28.5277777777778,23.2333333333333,24,29.7333333333333,21.6,10.2502645502645,14.8666666666667,10,25.347619047619,2,38.3333333333333,40.3454545454545,14.1507936507937,36,10,39.044474969475,28,38,30,2,20.2,10,6,4,2,16,0.619047619047619,0.2,40,35.2,2.09090909090909,0.0333333333333333,8,13.3333333333333,14,43.7777777777778,44.0348124098124,4,14,2.0247113997114,21.3005355276907,18.5333333333333,23.5428571428571,18.8816738816739,20.6666666666667,16.6857142857143,10,22.4583333333333,40.2,15.4666666666667,24.1321428571429,22,20.2,27.4,38.3611111111111,23.3738095238095,12.1166666666667,20.2280441780442,32.5610805860806,13.5892857142857,10.2,2,0.333333333333333,23.6,14.6666666666667,15.0166666666667,16.7636363636364,4,11.8,4,12,32.5636363636364,6,46.5880952380952,14.4318181818182,32.1997835497835,13.0848484848485,19,2,25.2205128205128,30.2,43,19.7151515151515,20.1900432900433,16.880303030303,2,10.1,2,11.1666666666667,20.3272727272727,25.8888888888889,18.3333333333333,30.2969696969697,6,17.7333333333333,19.2380952380952,9,20,36.4045954045954,17.155303030303,18.963082437276,16.3777777777778,14,14.6857142857143,10,10.2,14.5047619047619,4,18,13.3484848484848,40.7311827956989,17.9333333333333,4.89580770107086,2.2,0.5,18.8666666666667,14.3493506493506,16.8939393939394,20.7090909090909,23.2380952380952,1.3,4.2,2.51515151515152,0.666666666666667],
        [4.32272727272727,4,4,2,5.5,7,1,4.12727272727273,5.34444444444444,15.757437007437,3,4,2.61926406926407,3,6,4.33333333333333,5,5,9.69393939393939,9.94090909090909,0.0972222222222222,4.11111111111111,6.16666666666667,0.127272727272727,10.8333333333333,10,2,29.1666666666667,6.70714285714286,6,12.7948051948052,10.3453463203463,19.2666666666667,8,11.5272727272727,2,10.5252918145432,18,25.5480519480519,41.6531385281385,1.42122877122877,0.08,2.51515151515152,1,44.5493506493507,10.5238095238095,29.6318348318348,22.6285714285714,1.96666666666667,10.7545454545455,38,18.6857142857143,1.19047619047619,32.3571428571429,22.1246753246753,28,2.2052380952381,16.3555555555556,12.6,21.1139393939394,16.1111111111111,4.75324675324675,22.7538461538462,10.4666666666667,19.0785714285714,2.72738095238095,7.18181818181818,19.2929292929293,46.1876551226551,10.5871212121212,22.3333333333333,8.9,8,14.8619047619048,14.0142857142857,4,6,26.1818181818182,19.4362770562771,22.6126984126984,37.0222222222222,2.2,22.4214141414141,17.0352924852925,2.5,19.5714285714286,22.3333333333333,18.3333333333333,31.1838661338661,20.2404761904762,26.1454545454545,3.82954545454545,12.2854545454545,16.1944444444444,41.9264402264402,11.3361471861472,18.5848484848485,6.85714285714286,18.5231608770633,16.2422077922078,15.6994949494949,20.1636363636364,12.9816017316017,2.36363636363636,22.4244422244422,16.8333333333333,6.48030303030303,4,2.16666666666667,16.5,14.0777777777778,6.30909090909091,10,5.41515151515152,13.3761904761905,1,9,6.16666666666667,3.8969696969697,3.15277777777778,8.33333333333333,4.14545454545455,2,40.5,9.80952380952381,11.6666666666667,12,2,7,28.1401709401709,24.6666666666667,6,8,6.2,1,2,8.26140350877193,31.3973194933721,16.5230769230769,6.66666666666667,17.0666666666667,38.4,12.9116883116883,2.81212121212121,0.427777777777778,1.82532467532468,22.3333333333333,0.866666666666667,0.181818181818182,2.35833333333333,0.733333333333333,5.93333333333333,0.666666666666667,0.2,0.4,0.4,1.15238095238095,3.41666666666667,12.2186868686869,17.1333333333333,30.5333333333333,14,4.77142857142857,7.06666666666667,44.1357142857143,2.68831168831169,0.133333333333333,32.6666666666667,30,14,16,4,2,10.1333333333333,40,18.4,32.0416666666667,12.2857142857143,11,11.2380952380952,14.2,15.1787878787879,10,29.3714285714286,26.7301587301587,10.2305555555556,22.2151515151515,10.5333333333333,12.6666666666667,16.8333333333333,32.6,12.952380952381,8.18888888888889,28,1.7093137254902,30.3333333333333,41.6190476190476,17.0666666666667,8.98888888888889,12.2,31.7969696969697,41.5761904761905,10.9073593073593,16.23614996115,20,18.4,14.1428571428571,27.4666666666667,13.6511266511267,8.4,10,20,24,23,20.6666666666667,20.3666666666667,30,20.3333333333333,4.12820512820513,18.2,25.4,0.2,2.53333333333333,2.84587912087912,18.5333333333333,16.3393939393939,2.2]
    ]
}
var data2 =echarts.dataTool.prepareBoxplotData(data22["科研生产力"]);
var data3 =echarts.dataTool.prepareBoxplotData(data22["学术影响力"]);
var data4 =echarts.dataTool.prepareBoxplotData(data22["学术创新力"]);

var xAxisList = [], yAxisList = [], yData = [];
var varList1 = ['P-Ⅰ', 'P-Ⅱ', 'P-Ⅲ', 'P-Ⅳ', 'P-Ⅴ'];
var varList2 = ['Z-Ⅰ', 'Z-Ⅱ', 'Z-Ⅲ', 'Z-Ⅳ', 'Z-Ⅴ',"Z-Ⅵ"];
var varList3 = ['S-Ⅰ', 'S-Ⅱ', 'S-Ⅲ', 'S-Ⅳ'];
data2 = data2['boxData']
data3 = data3['boxData']
data4 = data4['boxData']
for(var i=0;i<data2.length;i++){
    // if(i==0){
    //     xAxisList[i] = {
    //         type: 'value',
    //         min:10,
    //         bottom:"-100%",
    //         gridIndex:i,
    //         nameTextStyle: {
    //             color: '#3259B8',
    //             fontSize: 14,
    //         },
    //         axisLabel: {
    //             show:true,
    //             formatter: '{value} 岁',
    //             interval: '-1',
    //             textStyle: {
    //                 lineHeight:5,
    //                 padding: [0, 2, 0, 2],
    //                 height: 50,
    //                 fontSize: 10,
    //                 color:'rgba(255,255,255,0.5)',
    //             },
    //             rotate:0,
    //             color: '#687284',
    //         },
    //         axisTick:{
    //             show:false,
    //         },
    //         axisLine: {
    //             show:false,
    //             lineStyle: {
    //                 color: '#3259B8',
    //             }},
    //         splitLine: {
    //             show:true,
    //             lineStyle: {
    //                 color: 'rgba(255,255,255,0.5)',
    //             },
    //         }
    //     }
    // }else{
        xAxisList[i] = {
            type: 'value',
            min:0,
            gridIndex:i,
            nameTextStyle: {
                color: '#3259B8',
                fontSize: 14,
            },
            axisLabel: {
                show:false,
                formatter: '{value} 岁'
            },
            axisTick:{
                show:false,
            },
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#3259B8',
                }},
            splitLine: {
                show:false,
                lineStyle: {
                    color: '#A7BAFA',
                },
            }
        }
    // };
    yAxisList[i] = {
        type: 'category',
        left:'80%',
        gridIndex:i,
        data: [varList1[i]],
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 16,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#3259B8',
            }
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            rotate:0,
            interval: '-1',
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 10,
                color:'#956FD4',
            },
            color: '#687284',
        },
        splitLine: {
            show: false
        }
    }
    yData[i] = {
            name: varList1[i],
            type: 'boxplot',
            xAxisIndex:i,
            yAxisIndex:i,
            padding:[20,0],
            boxWidth:['1%','3%'],
            data: [data2[i]],
            itemStyle: {
                normal:{
                    borderColor: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#F02FC2' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#956FD4' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth:2,
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color:  'rgba(240,47,194,0.7)'// 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(149,111,212,0.7)'  // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
            },


            tooltip: {
                formatter: function(param) {
                    return [
                        '科研生产力类型: ' + param.name,
                        'upper: ' + param.data[5] + "分",
                        'Q3: ' + param.data[4] + "分",
                        'median: ' + param.data[3] + "分",
                        'Q1: ' + param.data[2] + "分",
                        'lower: ' + param.data[1] + "分"
                    ].join('<br/>')
                }
            }
        }
};

for(var i=0;i<data3.length;i++){
    xAxisList[i+data2.length] = {
        type: 'value',
        min:0,
        gridIndex:i+data2.length,
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 14,
        },
        axisLabel: {
            show:false,
            formatter: '{value} 岁'
        },
        axisTick:{
            show:false,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#3259B8',
            }},
        splitLine: {
            show:false,
            lineStyle: {
                color: '#A7BAFA',
            },
        }
    };
    yAxisList[i+data2.length] = {
        type: 'category',
        gridIndex:i+data2.length,
        data: [varList2[i]],
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 16,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#3259B8',
            }
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            rotate:0,
            interval: '-1',
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 10,
                color:'rgb(62,172,299)',
            },
        },
        splitLine: {
            show: false
        }
    };
    yData[i+data2.length]={
            name: varList2[i],
            type: 'boxplot',
            xAxisIndex:i+data2.length,
            yAxisIndex:i+data2.length,
            padding:[20,0],
            boxWidth:['1%','3%'],
            data: [data3[i]],
            itemStyle: {
                normal:{
                    borderColor: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgb(149,111,212)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgb(62,172,299)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth:2,
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(149,111,212,0.7)'  // 0% 处的颜色
                    }, {
                        offset: 1,
                        color:'rgba(62,172,299,0.7)'  // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
            },
            tooltip: {
                formatter: function(param) {
                    return [
                        '科研生产力类型: ' + param.name,
                        'upper: ' + param.data[5] + "分",
                        'Q3: ' + param.data[4] + "分",
                        'median: ' + param.data[3] + "分",
                        'Q1: ' + param.data[2] + "分",
                        'lower: ' + param.data[1] + "分"
                    ].join('<br/>')
                }
            }
        }
};

for(var i=0;i<data4.length;i++){
    xAxisList[i+data2.length+data3.length] = {
        type: 'value',
        min:0,
        gridIndex:i+data2.length+data3.length,
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 14,
        },
        axisLabel: {
            show:false,
            formatter: '{value} 岁'
        },
        axisTick:{
            show:false,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#3259B8',
            }},
        splitLine: {
            show:false,
            lineStyle: {
                color: '#A7BAFA',
            },
        }
    };
    yAxisList[i+data2.length+data3.length] = {
        type: 'category',
        gridIndex:i+data2.length+data3.length,
        data: [varList3[i]],
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 16,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#fff',
            }
        },
        axisTick:{
            show:true,
            lineStyle: {
                color: '#fff',
            },
            width:10,
        },
        axisLabel:{
            rotate:0,
            interval: '-1',
            textStyle: {
                lineHeight:5,
                padding: [0, 2, 0, 2],
                height: 50,
                fontSize: 10,
                color:'rgb(128, 255, 165)',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F1F3F5',
                type: 'solid'
            },
            interval: 0
        },
    };
    yData[i+data2.length+data3.length]={
            name: varList3[i],
            type: 'boxplot',
            xAxisIndex:i+data2.length+data3.length,
            yAxisIndex:i+data2.length+data3.length,
            padding:[20,0],
            boxWidth:['1%','3%'],
            data: [data4[i]],
            itemStyle: {
                normal:{
                    borderColor: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgb(202, 138, 137)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgb(128, 255, 165)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth:2,
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(202, 138, 137, 0.7)'  // 0% 处的颜色
                    }, {
                        offset: 1,
                        color:'rgba(128, 255, 165,0.7)'  // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
            },
            tooltip: {
                formatter: function(param) {
                    return [
                        '科研生产力类型: ' + param.name,
                        'upper: ' + param.data[5] + "分",
                        'Q3: ' + param.data[4] + "分",
                        'median: ' + param.data[3] + "分",
                        'Q1: ' + param.data[2] + "分",
                        'lower: ' + param.data[1] + "分"
                    ].join('<br/>')
                }
            }
        }
};

option102 = {
    title: {
            text: '科\n研\n奖\n励\n得\n分',
            right: 'right',
            top:"middle",
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 15,
            }
        },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: [{
        top:'-42%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-36%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-30%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-24%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-18%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-8%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-2%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'4%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'10%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'16%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'22%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'32%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'38%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'44%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'50%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    }],
    legent:{
        show:false,
        // data:['P-Ⅰ', 'P-Ⅱ', 'P-Ⅲ', 'P-Ⅳ', 'P-Ⅴ'],
        textStyle: {
            color: '#3259B8',
        },
        top:20,
    },
    yAxis: yAxisList,
    xAxis: xAxisList,
    series:yData
};

var option8 = {
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        tooltip: {},
        ribbonType: true,
        layout: 'circular',

        circular: {
            rotateLabel: true
        },
        symbolSize: 30,
        roam: true,
        focusNodeAdjacency: true,

        label: {
            normal: {
                position: 'center',
                fontWeight: 'bold',
                formatter: '{b}',
                normal: {
                    textStyle: {
                        fontFamily: '宋体'
                    }
                }
            }
        },

        edgeSymbol: ['circle'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
            normal: {
                textStyle: {
                    fontSize: 13,
                    fontWeight: 'bold',
                    fontFamily: '宋体'
                }
            }
        },

        itemStyle: {
            normal: {
                label: {
                    rotate: true,
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold'
                    }
                },
                color: ["#393f51", "#393f51", "#393f51",
                    "#393f51", "#393f51","#393f51", "#393f51",
                    "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7",
                    "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7",
                    "#85d6f7", "#85d6f7"] /* 内的颜色#393f51，外的颜色#85d6f7 */
            },
            emphasis: {
                label: {
                    show: true
                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                }
            }
        },

        data: [
    {
      "name": "P-Ⅱ",
      "symbolSize": 68.9,
      "itemStyle": {
        "normal": {
          "color": "#f56e12"
        }
      }
    },
    {
      "name": "P-Ⅴ",
      "symbolSize": 23.5,
      "itemStyle": {
        "normal": {
          "color": "#f56e12"
        }
      }
    },
    {
      "name": "P-Ⅲ",
      "symbolSize": 32.6,
      "itemStyle": {
        "normal": {
          "color": "#f56e12"
        }
      }
    },
    {
      "name": "P-Ⅳ",
      "symbolSize": 24.2,
      "itemStyle": {
        "normal": {
          "color": "#f56e12"
        }
      }
    },
    {
      "name": "P-Ⅰ",
      "symbolSize": 17.5,
      "itemStyle": {
        "normal": {
          "color": "#f56e12"
        }
      }
    },
    {
      "name": "Z-Ⅴ",
      "symbolSize": 25.7,
      "itemStyle": {
        "normal": {
          "color": "#f5c312"
        }
      }
    },
    {
      "name": "Z-Ⅵ",
      "symbolSize": 56.7,
      "itemStyle": {
        "normal": {
          "color": "#f5c312"
        }
      }
    },
    {
      "name": "Z-Ⅳ",
      "symbolSize": 37.4,
      "itemStyle": {
        "normal": {
          "color": "#f5c312"
        }
      }
    },
    {
      "name": "Z-Ⅱ",
      "symbolSize": 10.7,
      "itemStyle": {
        "normal": {
          "color": "#f5c312"
        }
      }
    },
    {
      "name": "Z-Ⅰ",
      "symbolSize": 12,
      "itemStyle": {
        "normal": {
          "color": "#f5c312"
        }
      }
    },
    {
      "name": "Z-Ⅲ",
      "symbolSize": 24.2,
      "itemStyle": {
        "normal": {
          "color": "#f5c312"
        }
      }
    },
    {
      "name": "S-Ⅱ",
      "symbolSize": 67.8,
      "itemStyle": {
        "normal": {
          "color": "#6ac439"
        }
      }
    },
    {
      "name": "S-Ⅲ",
      "symbolSize": 52.6,
      "itemStyle": {
        "normal": {
          "color": "#6ac439"
        }
      }
    },
    {
      "name": "S-Ⅳ",
      "symbolSize": 24.5,
      "itemStyle": {
        "normal": {
          "color": "#6ac439"
        }
      }
    },
    {
      "name": "S-Ⅰ",
      "symbolSize": 13,
      "itemStyle": {
        "normal": {
          "color": "#6ac439"
        }
      }
    }
  ],
        // links: [],
        links: [
        {
            'source': 'P-Ⅰ',
            'target': 'Z-Ⅰ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 1.5,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅰ',
            'target': 'Z-Ⅱ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 1.1,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅰ',
            'target': 'Z-Ⅲ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 4.2,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅰ',
            'target': 'Z-Ⅳ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 3.6,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅰ',
            'target': 'Z-Ⅴ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 2.6,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅰ',
            'target': 'Z-Ⅵ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 4.5,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅰ',
            'target': 'S-Ⅰ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 1.8,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅰ',
            'target': 'S-Ⅱ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 7.6,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅰ',
            'target': 'S-Ⅲ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 4.0,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅰ',
            'target': 'S-Ⅳ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 2.9,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅱ',
            'target': 'Z-Ⅰ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 3.2,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅱ',
            'target': 'Z-Ⅱ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 3.2,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅱ',
            'target': 'Z-Ⅲ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 9.8,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅱ',
            'target': 'Z-Ⅳ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 18.6,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅱ',
            'target': 'Z-Ⅴ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 11.4,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅱ',
            'target': 'Z-Ⅵ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 22.7,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅱ',
            'target': 'S-Ⅰ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 5.2,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅱ',
            'target': 'S-Ⅱ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 25.0,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅱ',
            'target': 'S-Ⅲ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 25.8,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅱ',
            'target': 'S-Ⅳ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 9.8,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅴ',
            'target': 'Z-Ⅰ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 5.1,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅴ',
            'target': 'Z-Ⅱ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 2.7,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅴ',
            'target': 'Z-Ⅲ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 5.4,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅴ',
            'target': 'Z-Ⅳ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 5.2,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅴ',
            'target': 'Z-Ⅴ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 2.2,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅴ',
            'target': 'Z-Ⅵ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 2.9,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅴ',
            'target': 'S-Ⅰ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 3.3,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅴ',
            'target': 'S-Ⅱ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 4.6,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅴ',
            'target': 'S-Ⅲ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 8.2,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅴ',
            'target': 'S-Ⅳ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 4.3,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅲ',
            'target': 'Z-Ⅰ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 1.0,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅲ',
            'target': 'Z-Ⅱ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 2.6,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅲ',
            'target': 'Z-Ⅲ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 2.5,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅲ',
            'target': 'Z-Ⅳ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 4.9,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅲ',
            'target': 'Z-Ⅴ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 4.6,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅲ',
            'target': 'Z-Ⅵ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 17.0,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅲ',
            'target': 'S-Ⅰ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 1.0,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅲ',
            'target': 'S-Ⅱ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 18.8,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅲ',
            'target': 'S-Ⅲ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 7.5,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅲ',
            'target': 'S-Ⅳ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 4.3,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅳ',
            'target': 'Z-Ⅰ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 1.2,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅳ',
            'target': 'Z-Ⅱ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 1.1,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅳ',
            'target': 'Z-Ⅲ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 2.3,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅳ',
            'target': 'Z-Ⅳ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 5.1,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅳ',
            'target': 'Z-Ⅴ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 4.9,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅳ',
            'target': 'Z-Ⅵ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 9.6,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅳ',
            'target': 'S-Ⅰ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 1.7,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅳ',
            'target': 'S-Ⅱ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 11.8,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅳ',
            'target': 'S-Ⅲ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 7.1,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'P-Ⅳ',
            'target': 'S-Ⅳ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 3.2,
                    'curveness': 0.2,
                    'color': '#f56e12'
                }
            }
        },
        {
            'source': 'Z-Ⅰ',
            'target': 'S-Ⅰ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 2.1,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅰ',
            'target': 'S-Ⅱ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 2.6,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅰ',
            'target': 'S-Ⅲ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 4.1,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅰ',
            'target': 'S-Ⅳ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 2.1,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅱ',
            'target': 'S-Ⅰ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 1.1,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅱ',
            'target': 'S-Ⅱ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 4.1,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅱ',
            'target': 'S-Ⅲ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 3.0,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅱ',
            'target': 'S-Ⅳ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 1.8,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅲ',
            'target': 'S-Ⅰ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 3.0,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅲ',
            'target': 'S-Ⅱ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 6.5,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅲ',
            'target': 'S-Ⅲ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 7.8,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅲ',
            'target': 'S-Ⅳ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 3.8,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅳ',
            'target': 'S-Ⅰ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 2.4,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅳ',
            'target': 'S-Ⅱ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 12.5,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅳ',
            'target': 'S-Ⅲ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 15.2,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅳ',
            'target': 'S-Ⅳ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 5.8,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅴ',
            'target': 'S-Ⅰ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 2.1,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅴ',
            'target': 'S-Ⅱ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 10.8,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅴ',
            'target': 'S-Ⅲ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 8.2,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅴ',
            'target': 'S-Ⅳ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 3.8,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅵ',
            'target': 'S-Ⅰ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 2.3,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅵ',
            'target': 'S-Ⅱ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 31.3,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅵ',
            'target': 'S-Ⅲ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 14.3,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        },
        {
            'source': 'Z-Ⅵ',
            'target': 'S-Ⅳ',
            'name': '',
            'tooltip': {
                'trigger': 'item',
                'formatter': function(params,
                ticket,
                callback){
                    return params.data.name;
                }
            },
            'symbolSize': [
                5,
                20
            ],
            'label': {
                'normal': {
                    'formatter': function(params,
                    ticket,
                    callback){
                        params.name=params.data.name;return params.name;
                    },
                    'show': true
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 7.2,
                    'curveness': 0.2,
                    'color': '#f5c312'
                }
            }
        }
    ]
    }]
};

option5 = {
    backgroundColor: "transparent",
    tooltip: {
        trigger: 'axis',
        show: true,
    },
    legend: {
        show: true,
        icon: 'circle',
        top: 5,
        left:10,
        textStyle: {
            fontSize: 12,
            color: '#c8c8c8'
        },
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          magicType: { show: true, type: ['line', 'bar', 'stack'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '35%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show:false,
            interval: 0,
        },
        data: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
    },
    yAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show:false,
            interval: 0,
        },
    },
    series: [{
        name:'P-Ⅰ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#fb7636",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                }
            },
            markPoint: {
                label: {
                    normal: {
                        show: true,
                        align: 'center',
                        color: 'WHITE',
                        fontWeight: 100,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.4,
                            y: 0.4,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#fb7636'
                            }, {
                                offset: 1,
                                color: '#fb7636'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: 'P-Ⅰ',
                    value: 0.5,
                    coord: [18, 0.07]
                }]
            },
            itemStyle: {
                color: '#fb7636',
                borderColor: "#fff",
                borderWidth: 2,
            },
            data: [0.039321347,0.039321347,0.212986182,0.455370005,0.745184869,0.745184869,0.745184869,0.745184869,0.745184869,0.543509577,0.543509577,0.543509577,0.543509577,0.391612869,0.391612869,0.391612869,0.156325028,0.235287841,0.05906205,0.188710452,0.271621405,0.669956784,0.781998613,1,0.978231873]
        },
        {
            name:'P-Ⅱ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#24b314",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                }
            },
            itemStyle: {
                color: '#24b314',
                borderColor: "#fff",
                borderWidth: 2,
            },
            markPoint: {
                label: {
                    normal: {
                        show: true,
                        align: 'center',
                        color: 'WHITE',
                        fontWeight: 100,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.4,
                            y: 0.4,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#24b314'
                            }, {
                                offset: 1,
                                color: '#24b314'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: 'P-Ⅱ',
                    value: 0.5,
                    coord: [10, 0.84]
                }]
            },
            data: [0.022296514,0.081886129,0.19220683,0.457951349,0.749828058,0.877668206,1,0.958869111,0.958869111,0.958869111,0.816830113,0.79643697,0.685780748,0.516942211,0.516942211,0.516942211,0.516942211,0.516942211,0.516942211,0.516942211,0.516942211,0.516942211,0.516942211,0.516942211,0.516942211]
        },
        {
            name:'P-Ⅲ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#027ad7",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                }
            },
            itemStyle: {
                color: '#027ad7',
                borderColor: "#fff",
                borderWidth: 2,
            },
            markPoint: {
                label: {
                    normal: {
                        show: true,
                        align: 'center',
                        color: 'WHITE',
                        fontWeight: 100,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.4,
                            y: 0.4,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#027ad7'
                            }, {
                                offset: 1,
                                color: '#027ad7'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: 'P-Ⅲ',
                    value: 0.6,
                    coord: [17, 0.8]
                }]
            },
            data: [0,0.027027027,0.274774775,0.459459459,0.689189189,0.851351351,0.851351351,0.837837838,0.702702703,0.567567568,0.567567568,0.567567568,0.567567568,0.567567568,0.567567568,0.648648649,0.648648649,0.810810811,1,0.837837838,0.675675676,0.783783784,0.817938818,0.736857737,0.817938818]
        },
        {
            name:'P-Ⅳ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#8452e7",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                }
            },
            itemStyle: {
                color: '#8452e7',
                borderColor: "#fff",
                borderWidth: 2,
            },
            markPoint: {
                label: {
                    normal: {
                        show: true,
                        align: 'center',
                        color: 'WHITE',
                        fontWeight: 100,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.4,
                            y: 0.4,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#8452e7'
                            }, {
                                offset: 1,
                                color: '#8452e7'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: 'P-Ⅳ',
                    value: 0.6,
                    coord: [19, 0.55]
                }]
            },
            data: [0.033353702,0.071285363,0.195059812,0.557827286,0.77477168,0.925880663,0.980158874,0.845868772,0.706331852,0.634301663,0.557784347,0.557784347,0.557784347,0.557784347,0.557784347,0.557784347,0.557784347,0.557784347,0.557784347,0.557784347,0.557784347,0.557784347,0.557784347,0.557784347,0.63902113]
        },
        {
            name:'P-Ⅴ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#91c7ae",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(158,135,255, .4)',
                }
            },
            itemStyle: {
                color: '#91c7ae',
                borderColor: "#fff",
                borderWidth: 2,
            },
            markPoint: {
                label: {
                    normal: {
                        show: true,
                        align: 'center',
                        color: 'WHITE',
                        fontWeight: 100,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.4,
                            y: 0.4,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#91c7ae'
                            }, {
                                offset: 1,
                                color: '#91c7ae'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: 'P-Ⅴ',
                    value: 0.6,
                    coord: [22, 0.25]
                }]
            },
            data: [0.502697007,0.502697007,0.502697007,0.502697007,0.961745924,0.961745924,1,0.780058671,0.780058671,0.492904695,0.492904695,0.492904695,0.492904695,0.456790707,0.456790707,0.456790707,0.456790707,0.05496483,0,0.072495274,0.270068668,0.286265178,0.256970549,0.198207505,0.198207505]
        },
    ],
};

// var color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
option6 = {
    backgroundColor: "transparent",
    tooltip: {
        trigger: 'axis',
        show: true,
    },
    legend: {
        show: true,
        icon: 'circle',
        top: 5,
        left:10,
        textStyle: {
            fontSize: 12,
            color: '#c8c8c8'
        },
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          magicType: { show: true, type: ['line', 'bar', 'stack'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '35%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show:false,
            interval: 0,
        },
        data: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
    },
    yAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show:false,
            interval: 0,
        },
    },
    series: [{
        name:'Z-Ⅰ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#fb7636",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                }
            },
            markPoint: {
                label: {
                    normal: {
                        show: true,
                        align: 'center',
                        color: 'WHITE',
                        fontWeight: 100,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.4,
                            y: 0.4,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#fb7636'
                            }, {
                                offset: 1,
                                color: '#fb7636'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: 'Z-Ⅰ',
                    value: 0.5,
                    coord: [3, 1]
                }]
            },
            itemStyle: {
                color: '#fb7636',
                borderColor: "#fff",
                borderWidth: 2,
            },
            data: [0.66297809,0.845541225,0.917446139,1,0.523178382,0.523178382,0.523178382,0.523178382,0.523178382,0.523178382,0.523178382,0.523178382,0.296607235,0.296607235,0.296607235,0.24113997,0.226291614,0.197561973,0.132537475,0.125320392,0.057408321,0.049238225,0.025176794,0.007191071,0]
        },
        {
            name:'Z-Ⅱ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#24b314",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                }
            },
            itemStyle: {
                color: '#24b314',
                borderColor: "#fff",
                borderWidth: 2,
            },
            markPoint: {
                label: {
                    normal: {
                        show: true,
                        align: 'center',
                        color: 'WHITE',
                        fontWeight: 100,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.4,
                            y: 0.4,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#24b314'
                            }, {
                                offset: 1,
                                color: '#24b314'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: 'Z-Ⅱ',
                    value: 0.5,
                    coord: [18, 0.78]
                }]
            },
            data: [0.514257449,0.556452543,1,0.841883483,0.333607482,0.146876656,0.208056037,0.306114134,0.37944271,0.37944271,0.37944271,0.37944271,0.37944271,0.37944271,0.37944271,0.37944271,0.37944271,0.37944271,0.766153027,0.546645308,0.546645308,0.392712278,0.285677622,0.104632251,0]
        },
        {
            name:'Z-Ⅲ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#027ad7",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                }
            },
            itemStyle: {
                color: '#027ad7',
                borderColor: "#fff",
                borderWidth: 2,
            },
            markPoint: {
                label: {
                    normal: {
                        show: true,
                        align: 'center',
                        color: 'WHITE',
                        fontWeight: 100,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.4,
                            y: 0.4,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#027ad7'
                            }, {
                                offset: 1,
                                color: '#027ad7'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: 'Z-Ⅲ',
                    value: 0.6,
                    coord: [6, 1]
                }]
            },
            data: [0.366782461,0.366782461,0.366782461,0.366782461,0.366782461,0.78635748,1,0.933128563,0.742787216,0.406310827,0.436836095,0.436836095,0.436836095,0.246397697,0.339446763,0.339446763,0.339446763,0.339446763,0.545112696,0.545998824,0.545998824,0.400011455,0.259740869,0.08061267,0]
        },
        {
            name:'Z-Ⅳ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#8452e7",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                }
            },
            itemStyle: {
                color: '#8452e7',
                borderColor: "#fff",
                borderWidth: 2,
            },
            markPoint: {
                label: {
                    normal: {
                        show: true,
                        align: 'center',
                        color: 'WHITE',
                        fontWeight: 100,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.4,
                            y: 0.4,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#8452e7'
                            }, {
                                offset: 1,
                                color: '#8452e7'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: 'Z-Ⅳ',
                    value: 0.6,
                    coord: [2, 0.08]
                }]
            },
            data: [0.258143283,0.391535748,0.062339157,0.079663846,0.197899143,0.161009533,0.244223628,0.280808638,0.288059362,0.312484337,0.312484337,0.312484337,0.312484337,0.312484337,0.312484337,0.312484337,0.312484337,0.235482595,0.184778507,0.16539766,0.112463038,0.108460539,0.068701157,0.005488608,0.001252896]
        },
        {
            name:'Z-Ⅴ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#91c7ae",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(158,135,255, .4)',
                }
            },
            itemStyle: {
                color: '#91c7ae',
                borderColor: "#fff",
                borderWidth: 2,
            },
            markPoint: {
                label: {
                    normal: {
                        show: true,
                        align: 'center',
                        color: 'WHITE',
                        fontWeight: 100,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.4,
                            y: 0.4,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#91c7ae'
                            }, {
                                offset: 1,
                                color: '#91c7ae'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: 'Z-Ⅴ',
                    value: 0.6,
                    coord: [10, 0.82]
                }]
            },
            data: [0.470695933,0.470695933,0.470695933,0.470695933,0.470695933,0.470695933,0.470695933,0.470695933,0.492526143,0.492526143,0.816142429,0.504306948,0.394580062,0.394580062,0.394580062,0.394580062,0.394580062,0.32638762,0.48179471,0.533775865,0.84496921,0.84496921,0.545553541,0.25677601,0]
        },
        {
            name:'Z-Ⅵ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#ca8622",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(158,135,255, .4)',
                }
            },
            itemStyle: {
                color: '#ca8622',
                borderColor: "#fff",
                borderWidth: 2,
            },
            markPoint: {
                label: {
                    normal: {
                        show: true,
                        align: 'center',
                        color: 'WHITE',
                        fontWeight: 100,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.4,
                            y: 0.4,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#ca8622'
                            }, {
                                offset: 1,
                                color: '#ca8622'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: 'Z-Ⅵ',
                    value: 0.6,
                    coord: [21, 1]
                }]
            },
            data: [0.709245194,0.973112753,0.818376392,0.14985775,0.205671123,0.205671123,0.23868903,0.321278753,0.321278753,0.321278753,0.321278753,0.321278753,0.321278753,0.321278753,0.321278753,0.321278753,0.321278753,0.321278753,0.646014731,0.646014731,0.758337335,1,1,0.777133001,0.303772124]
        },
    ],
};

option7 = {
    backgroundColor: "transparent",
    tooltip: {
        trigger: 'axis',
        show: true,
    },
    legend: {
        show: true,
        icon: 'circle',
        top: 5,
        left:10,
        textStyle: {
            fontSize: 12,
            color: '#c8c8c8'
        },
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          magicType: { show: true, type: ['line', 'bar', 'stack'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '35%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show:false,
            interval: 0,
        },
        data: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
    },
    yAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show:false,
            interval: 0,
        },
    },
    series: [{
        name:'S-Ⅰ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#fb7636",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                }
            },
            markPoint: {
                label: {
                    normal: {
                        show: true,
                        align: 'center',
                        color: 'WHITE',
                        fontWeight: 100,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.4,
                            y: 0.4,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#fb7636'
                            }, {
                                offset: 1,
                                color: '#fb7636'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: 'S-Ⅰ',
                    value: 0.5,
                    coord: [6, 0.8]
                }]
            },
            itemStyle: {
                color: '#fb7636',
                borderColor: "#fff",
                borderWidth: 2,
            },
            data: [1,1,0.95840161,0.95840161,0.95840161,0.775101724,0.775101724,0.775101724,0.775101724,0.775101724,0.775101724,0.775101724,0.775101724,0.883061306,0.883061306,0.883061306,0.883061306,0.883061306,0.883061306,0.883061306,0.883061306,0.883061306,0.176543397,0.152755323,0.070431036]
        },
        {
            name:'S-Ⅱ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#24b314",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                }
            },
            itemStyle: {
                color: '#24b314',
                borderColor: "#fff",
                borderWidth: 2,
            },
            markPoint: {
                label: {
                    normal: {
                        show: true,
                        align: 'center',
                        color: 'WHITE',
                        fontWeight: 100,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.4,
                            y: 0.4,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#24b314'
                            }, {
                                offset: 1,
                                color: '#24b314'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: 'S-Ⅱ',
                    value: 0.5,
                    coord: [11, 0.98]
                }]
            },
            data: [1,1,1,1,1,0.256627295,0,0.321389266,0.321389266,0.321389266,0.321389266,0.961180694,0.961180694,0.961180694,0.961180694,0.961180694,0.961180694,0.961180694,0.961180694,0.961180694,0.961180694,0.961180694,0.961180694,0.961180694,0.961180694]
        },
        {
            name:'S-Ⅲ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#027ad7",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                }
            },
            itemStyle: {
                color: '#027ad7',
                borderColor: "#fff",
                borderWidth: 2,
            },
            markPoint: {
                label: {
                    normal: {
                        show: true,
                        align: 'center',
                        color: 'WHITE',
                        fontWeight: 100,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.4,
                            y: 0.4,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#027ad7'
                            }, {
                                offset: 1,
                                color: '#027ad7'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: 'S-Ⅲ',
                    value: 0.6,
                    coord: [8, 0.02]
                }]
            },
            data: [0.847681942,0.847681942,0.847681942,0.847681942,0.816087674,0.713650749,0.713650749,0.713650749,0,0.372766809,0.747752129,0.747752129,0.747752129,1,1,1,1,1,1,1,1,0.873745313,0.693892133,0.693892133,0.693892133]
        },
        {
            name:'S-Ⅳ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#8452e7",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                }
            },
            itemStyle: {
                color: '#8452e7',
                borderColor: "#fff",
                borderWidth: 2,
            },
            markPoint: {
                label: {
                    normal: {
                        show: true,
                        align: 'center',
                        color: 'WHITE',
                        fontWeight: 100,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.4,
                            y: 0.4,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#8452e7'
                            }, {
                                offset: 1,
                                color: '#8452e7'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: 'S-Ⅳ',
                    value: 0.6,
                    coord: [2, 0.02]
                }]
            },
            data: [0,0,0,0.341677551,0.348936103,0.713805715,0.713805715,0.713805715,0.713805715,0.599452065,0.686343993,0.82110616,0.82110616,0.82110616,1,1,1,1,1,1,1,0.8511366,0.619262604,0.619262604,0.619262604]
        },
    ],
};



map1 = function (str1) {
    var myChart5 = echarts.init(document.getElementById('main5'));
    myChart5.clear();
    if(str1=="科研生产力"){
        myChart5.setOption(option5);
    }else{
        if(str1=="学术影响力"){
            myChart5.setOption(option6);
        }else{
            myChart5.setOption(option7);
        }
    }
}