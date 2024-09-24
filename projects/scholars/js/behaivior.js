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
    data: ['R-Ⅰ', 'R-Ⅱ', 'R-Ⅲ', 'R-Ⅳ'],
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
  series: [{'name': 'R-Ⅰ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [104, 88, 32, 18]},
 {'name': 'R-Ⅱ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [241, 279, 69, 37]},
 {'name': 'R-Ⅲ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [158, 106, 42, 23]},
 {'name': 'R-Ⅳ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [111, 157, 39, 9]}]
};

option11 = {
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
    data: ['e-Ⅰ', 'e-Ⅱ', 'e-Ⅲ', 'e-Ⅳ', 'e-Ⅴ'],
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
      {'name': 'e-Ⅰ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [299, 434, 90, 24]},
 {'name': 'e-Ⅱ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [118, 73, 26, 24]},
 {'name': 'e-Ⅲ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [18, 11, 13, 11]},
 {'name': 'e-Ⅳ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [35, 5, 22, 16]},
 {'name': 'e-Ⅴ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [144, 107, 31, 12]}]
};

var labelOption = {
  show: true,
  position: 'insideBottom',
  distance: 15,
  color:"#FFFFFF",
  align: 'left',
  verticalAlign: 'middle',
  rotate: 90,
  formatter: '{c}  {name|{a}}',
  fontSize: 8,
  rich: {
    name: {}
  }
};
option111 = {
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
    data: ['J-Ⅰ', 'J-Ⅱ', 'J-Ⅲ', 'J-Ⅳ', 'J-Ⅴ', 'J-Ⅵ', 'J-Ⅶ'],
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
  series: [{'name': 'J-Ⅰ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [110, 76, 34, 11]},
 {'name': 'J-Ⅱ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [145, 185, 34, 15]},
 {'name': 'J-Ⅲ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [60, 50, 26, 11]},
 {'name': 'J-Ⅳ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [78, 71, 25, 25]},
 {'name': 'J-Ⅴ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [27, 37, 8, 3]},
 {'name': 'J-Ⅵ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [114, 126, 26, 6]},
 {'name': 'J-Ⅶ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [80, 84, 29, 16]}]
};

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
  legend: {
    data: ['CB-Ⅰ', 'CB-Ⅱ', 'CB-Ⅲ'],
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
  series: [{'name': 'CB-Ⅰ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [482, 527, 148, 82]},
 {'name': 'CB-Ⅱ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [122, 96, 67, 32]},
 {'name': 'CB-Ⅲ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [39, 17, 15, 34]}]
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
    data: ['CD-Ⅰ', 'CD-Ⅱ', 'CD-Ⅲ', 'CD-Ⅳ', 'CD-Ⅴ'],
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
  series: [{'name': 'CD-Ⅰ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [285, 271, 72, 35]},
 {'name': 'CD-Ⅱ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [163, 166, 52, 38]},
 {'name': 'CD-Ⅲ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [43, 53, 47, 33]},
 {'name': 'CD-Ⅳ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [143, 146, 38, 23]},
 {'name': 'CD-Ⅴ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [9, 4, 22, 18]}]
};

option222 = {
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
    data: ['C-Ⅰ', 'C-Ⅱ', 'C-Ⅲ', 'C-Ⅳ'],
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
  series: [{'name': 'C-Ⅰ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [167, 117, 82, 78]},
 {'name': 'C-Ⅱ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [424, 473, 86, 19]},
 {'name': 'C-Ⅲ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [48, 47, 35, 21]},
 {'name': 'C-Ⅳ',
  'type': 'bar',
  'label': labelOption,
  'emphasis': {'focus': 'series'},
  'data': [4, 3, 24, 19]}]
};


var data1 = {'研究方向广度':[[31,31,33,28,31,26,24,27,20,23,25,27,21,25,32,31,34,25,33,25,23,25,29,29,24,31,26,25,25,24,26,29,37,34,31,25,25,34,23,34,25,25,33,22,26,27,25,24,24,26,25,32,29,23,35,28,21,35,24,23,30,37,23,27,28,42,27,31,30,25,23,30,32,30,31,40,22,37,36,32,28,24,33,26,29,35,26,34,25,31,28,33,21,22,26,31,29,22,34,26,26,25,25,28,22,28,27,30,28,25,36,36,31,24,25,20,24,25,37,44,31,26,25,25,24,28,24,29,24,23,25,28,28,29,24,32,22,25,25,26,30,30,30,32,27,35,32,25,35,25,37,40,37,22,47,25,29,25,30,23,33,20,26,26,31,35,19,27,27,31,25,32,26,22,21,25,24,21,25,35,36,29,25,25,30,22,41,38,25,24,37,22,35,21,19,34,27,23,33,40,22,32,43,28,36,25,25,26,25,29,27,33,20,25,26,37,34,34,36,25,29,25,25,25,34,34,25],  [28,27,40,23,23,22,26,31,25,30,35,22,37,21,29,31,23,25,30,22,32,41,36,26,28,20,30,35,29,22,22,36,34,27,31,23,34,25,23,35,20,23,17,32,36,24,34,24,30,36,27,32,28,34,23,29,27,31,23,21,23,30,35,31,23,29,24,23,30,32,35,29,24,26,24,25,39,36,29,30,34,31,22,31,34,36,23,30,21,30,28,36,22,32,21,25,24,26,29,31,36,25,27,30,21,24,27,25,22,31,32,18,30,23,22,24,21,27,26,24,25,29,20,32,29,32,23,29,28,35,32,33,25,26,38,34,29,37,21,33,26,23,30,23,30,21,23,29,18,25,45,24,27,31,25,21,31,31,33,31,23,33,31,33,25,25,31,23,26,33,22,33,26,23,26,42,38,24,34,38,21,33,29,27,25,18,36,22,38,30,19,29,31,34,22,27,28,31,21,28,25,37,24,21,32,23,27,21,24,24,25,26,33,29,41,43,32,28,33,37,30,25,25,25,24,19,24,25,27,31,25,22,27,32,22,37,27,26,38,29,36,25,22,26,32,23,29,25,29,25,27,33,25,29,33,24,36,19,38,35,21,39,28,32,27,24,25,33,32,23,33,31,27,23,28,20,26,30,24,35,22,22,19,20,39,36,33,30,32,24,27,26,24,30,21,21,33,30,25,34,30,30,33,26,38,19,25,36,34,29,23,22,27,31,20,34,33,31,32,26,26,29,33,36,30,40,29,31,24,33,31,23,20,21,39,32,35,23,36,27,25,28,34,24,24,35,27,23,24,30,35,24,22,29,28,25,35,23,18,29,34,31,29,32,21,36,26,25,19,24,25,33,31,22,30,23,29,28,21,26,28,35,27,32,32,25,24,25,30,26,36,41,32,24,23,31,25,20,37,24,26,26,27,24,23,34,18,32,33,24,37,21,34,24,28,23,33,36,34,35,34,27,24,41,27,35,25,23,31,25,36,33,36,25,19,20,19,28,24,23,28,33,30,21,22,30,27,33,27,28,33,32,26,25,25,27,38,46,32,23,26,26,25,30,32,26,28,25,35,35,25,26,23,33,23,19,34,34,32,27,25,38,21,28,36,25,22,28,33,37,25,23,28,33,26,35,33,31,28,42,36,21,23,29,19,37,23,33,22,22,35,33,35,32,23,37,30,25,30,21,26,26,22,32,31,32,33,33,22,20,41,31,30,22,25,26,27,31,22,23,34,23,36,30,36,23,24,24,29,28,25,23,28,38,25,32,30,21,28,35,28,37,24,30,23,31,22,36,23,28,35,23,36,24,26,22,34,24,32,32,34,22,18,21,24,21,23,41,31,24,31,20,30,23,31,32],  [36,29,31,27,30,23,23,28,24,24,30,23,37,24,21,23,37,36,35,24,26,28,39,33,41,31,28,31,27,37,33,32,34,29,36,20,28,28,22,24,19,40,30,32,22,38,30,33,37,24,27,29,32,23,38,21,31,35,23,30,22,60,35,30,23,36,30,26,28,32,19,22,29,24,21,43,34,29,23,21,23,32,27,30,26,28,38,19,26,33,20,23,28,27,23,26,23,38,30,23,25,29,26,23,30,25,23,32,21,37,28,30,36,25,33,23,23,33,22,21,23,23,30,35,25,26,37,23,22,22,23,24,23,33,22,36,23,31,35,35,32,39,39,24,26,25,29,30,31,23,39,30,32,22,26,33,29,32,21,39,32,35,30,37,31,34,35,23,23,23,34,26,23,25,35,31,23,26,23,25,30,38,23,37,33,33,34,28,33,37,23,29,32,35,29,26,23,32,32,24,33,39,22,22,29,34,30,22,26,30,30,32,28,31,27,36,17,22,23,22,19,32,36,26,29,30,35,26,33,30,27,32,24,25,23,31,48,27,39,26,25,23,23,18,19,26,34,23,22,24,35,24,30,22,30,29,40,29,27,21,21,27,40,32,35,34,30,32,32,31,24,24,35,29,36,31,21,27,32,33,28,31,32,40,23,24,35,24,30,18,25,26,33,42,30,31,32,32,29,30,30,36,24,35,22,26,34,24,26,26,22,29,17],  [29,28,30,24,29,39,34,32,26,36,19,21,33,23,28,20,24,34,25,24,31,18,27,24,29,33,22,28,32,44,25,35,28,27,28,33,35,26,29,34,21,22,35,22,25,30,20,36,25,23,33,26,32,44,25,25,38,27,30,27,39,25,27,26,24,27,19,25,24,22,23,29,24,25,21,29,30,34,20,26,32,20,32,23,25,31,22,21,28,26,32,28,29,29,25,23,24,20,28,31,26,32,28,33,25,32,31,34,23,27,28,22,27,28,18,24,24,25,30,19,33,35,28,26,36,40,21,21,34,26,32,34,27,26,24,33,24,32,30,40,31,30,25,19,28,24,38,25,27,24,25,38,28,25,30,23,26,29,26,30,25,27,19,29,24,26,21,19,26,20,24,32,20,20,22,34,30,26,24,30,22,19,20,26,27,23,46,26,25,31,22,24,28,24,34,26,31,29,31,23,32,23,36,31,34,29,25,37,31,32,21,29,24,24,31,39,24,41,24,26,25,31,28,30,26,42,34,19,32,32,29,32,27,28,26,23,30,31,26,20,26,38,22,30,30,36,27,36,24,26,23,24,26,36,25,36,26,25,19,21,31,38,30,26,24,28,31,28,31,28,28,27,26,23,23,22,25,27,22,29,28,35,24,22,28,23,25,29,40,40,33,25,23,23,33,19,29,29]], '研究方向深度':[[28,26,26,27,30,21,26,29,25,28,39,26,32,29,34,22,33,25,20,35,18,21,25,24,28,23,28,26,22,20,24,22,33,23,24,39,29,34,34,25,29,27,20,26,30,20,28,32,20,27,27,28,22,21,31,25,30,42,24,32,23,26,25,26,20,27,21,21,26,31,31,30,40,34,34,25,27,24,29,35,26,31,31,25,29,32,19,23,24,20,26,33,27,24,29,20,23,23,27,28,37,23,20,36,23,32,24,29,30,30,37,27,24,25,24,30,24,28,23,32,24,36,25,28,33,22,30,34,25,31,21,29,37,27,32,25,26,27,24,30,30,25,26,23,27,24,25,30,21,22,22,20,26,25,23,25,25,24,23,30,19,28,28,22,19,26,19,34,25,22,22,21,27,22,32,30,35,23,22,27,26,35,29,29,32,34,19,24,38,32,24,31,30,19,30,22,28,29,37,21,30,32,20,24,21,22,30,22,26,30,30,19,24,21,18,28,43,24,31,26,23,30,25,27,31,36,23,32,24,30,32,21,27,29,24,25,24,31,31,29,26,35,33,25,30,26,23,38,23,23,31,29,38,21,35,31,27,25,18,22,26,38,26,17,29,31,23,22,23,25,27,26,27,18,26,34,22,25,24,23,27,25,28,37,22,30,21,26,29,19,26,31,25,23,25,30,34,35,25,26,37,21,33,33,30,26,24,24,26,17,29,33,28,19,22,23,26,29,22,23,25,25,31,21,33,24,24,25,36,29,21,32,25,21,26,23,25,25,23,35,32,26,32,28,31,27,28,20,39,26,29,26,33,29,29,33,22,29,28,35,24,25,31,23,34,39,22,22,22,30,32,29,22,25,21,27,26,24,20,29,25,18,23,22,22,39,23,23,23,19,27,29,28,35,24,36,23,32,25,29,32,24,22,26,22,27,26,29,37,25,21,21,34,31,29,33,27,17,23,26,28,25,19,24,35,21,27,23,22,20,28,26,24,19,23,31,35,33,18,23,32,27,20,27,34,30,25,30,24,24,30,26,31,25,29,38,27,29,25,30,30,23,21,20,20,28,20,21,23,37,30,23,24,35,25,28,23,35,27,28,33,23,18,19,25,25,30,33,34,25,20,26,29,28,27,33,23,28,32,24,29,32,20,35,24,29,23,25,32,29,22,22,25,35,28,28,21,27,38,26,23,24,33,29,26,30,24,29,29,29,36,32,30,25,23,30,30,30,46,29,34,24,29,25,27,24,36,36,27,32,31,32,23,29,36,19,27,29,23,29,31,22,24,23,20,29,35,25,24,37,25,22,20,32,24,32,21,30,25,25,29,20,23,26,26,31,32,29,24,27,23,39,25,23,22,31,19,33,26,20,28,24,17,22,33,26,21,26,29,27,27,23,27,25,31,30,25,27,31,30,25,27,24,24,19,23,25,36,25,28,46,24,23,24,25,21,29,29,24,28,26,20,25,20,33,35,23,25,25,23,24,17,24,34,28,23,37,19,20,29,34,30,24,30,34,25,24,34,41,24,23,27,19,20,21,22,26,40,35,24,19,32,34,25,22,23,34,31,32,24,33,27,18,29,20,25,23,29,26,29,31,21,41,31,30,27,20,27,21,22,31,29,26,20,29,24,27,32,23,41,27,27,24,25,35,23,23,25,23,26,23,26,22,23,24,25,21,27,21,26,25,29,34,26,31,22,29,20,30,28,25,28,36,21,36,21,33,30,23,24,28,34,35,38,35,38,25,22,27,22,23,24,31,31,21,31,35,23,33,18,18,20,24,23,40,29,32,24,31,29,17,20,25,27,21,29],  [38,32,23,25,25,24,26,32,31,39,33,25,25,39,37,41,25,43,33,35,39,35,35,23,31,23,20,21,26,32,34,31,40,32,25,22,35,31,30,26,25,32,32,25,40,36,25,23,33,24,25,36,22,62,25,38,28,35,34,28,31,23,29,31,25,34,29,28,24,30,27,27,40,35,22,30,29,28,40,23,25,25,28,32,44,34,39,36,29,32,38,30,33,23,25,43,33,27,26,24,25,38,34,37,26,28,27,19,22,25,36,32,24,28,24,34,37,44,32,37,24,30,33,40,21,23,27,23,28,26,36,39,30,34,32,35,25,20,31,36,31,25,25,41,23,30,25,34,42,33,24,23,24,24,36,38,27,28,37,19,32,31,33,50,29,41,33,27,28,25,21,25,20,28,35,38,24,37,36,34,30,30,38,33,25,37,26,23,35,37,37,27,32,23,34,33,33,32,38,31,38,24,29,28,34,40,32,24,19,27,30,25,34,44,34,34,36,24,31,30,32,37,24,30,24,33,28,25,25,28,24,32,32],  [22,18,19,26,23,24,23,20,33,23,23,25,22,22,24,25,24,21,18,23,23,23,41,23,35,23,24,25,24,32,38,30,25,19,22,23,18,28,23,22,22,29,26,21,19,25,31],  [28,26,37,25,20,31,33,24,34,38,34,24,37,34,23,25,31,23,24,28,22,25,32,29,24,25,23,27,25,24,27,24,37,25,23,30,24,36,28,25,32,25,25,36,22,27,25,35,31,29,25,25,28,36,25,24,35,25,29,25,36,34,34,24,30,37,24,29,25,22,26,25,30],  [31,41,33,23,28,31,33,30,25,34,23,26,37,32,30,26,25,34,25,31,35,25,33,38,29,36,29,35,30,30,23,19,24,25,25,32,35,33,24,44,34,38,41,29,24,25,25,35,37,24,37,32,24,32,19,33,34,22,23,21,22,25,45,26,34,36,29,21,21,30,28,42,27,21,30,24,25,23,25,33,28,31,30,31,29,35,34,21,25,33,35,33,28,27,35,36,34,35,24,35,29,31,25,23,34,25,24,33,31,43,21,39,23,42,34,21,26,25,35,37,27,31,34,41,25,27,25,25,29,27,28,21,31,38,41,29,28,34,27,38,33,34,31,35,34,32,37,39,22,26,39,25,30,33,27,30,25,24,23,35,31,20,28,36,33,30,25,27,25,35,25,36,46,25,35,39,29,34,25,25,24,34,32,26,35,23,34,23,23,27,37,30,19,26,25,26,27,41,33,37,34,23,33,37,35,32,37,42,36,35,24,37,33,19,35,33,23,34,34,22,26,28,32,25,28,36,26,29,34,27,24,25,32,35,39,42,41,35,37,28,29,38,31,36,32,39,19,24,34,27,26,26,37,35,35,26,22,35,32,33,42,23,25,32,36,32,38,22,40,35,29,20,29,26,31,25,36,34,25,37,28,29,24,36,34]], 'JS散度':[[28,28,24,34,26,37,30,31,41,43,32,31,34,22,30,36,34,37,35,29,37,32,31,25,25,34,32,25,30,24,22,37,30,40,21,25,33,30,26,24,24,22,25,31,35,32,31,30,34,33,25,25,24,30,45,30,34,37,28,26,28,24,33,28,27,33,39,28,20,30,27,27,24,23,27,25,32,33,36,25,27,32,27,19,28,29,26,37,38,33,30,26,22,33,25,40,24,25,27,38,23,34,35,24,32,31,30,37,43,37,37,23,29,24,30,20,28,32,25,24,30,29,36,32,32,25,39,25,29,32,25,27,38,25,20,31,21,25,35,31,25,32,31,47,23,38,27,24,25,35,34,34,25,36,21,34,24,33,19,27,31,34,29,32,22,31,30,41,25,28,35,33,35,36,30,24,26,35,30,24,32,31,31,24,36,27,23,31,37,34,35,32,24,43,32,32,29,32,39,25,37,35,36,34,26,23,22,25,43,33,33,24,26,30,32,25,29,24,33,24,23,43,30,30],  [22,37,33,21,24,33,25,28,20,39,27,24,23,26,35,36,27,28,26,34,29,33,29,28,27,31,36,26,28,28,26,24,26,22,27,40,29,25,31,25,25,34,33,26,25,21,25,25,35,27,24,23,29,23,37,29,37,28,36,26,24,25,37,27,29,23,24,27,19,25,24,33,31,28,22,22,20,28,35,26,29,22,34,31,37,34,24,29,28,26,28,23,20,33,22,30,32,26,23,29,24,27,22,31,25,29,40,22,31,23,25,25,32,32,25,26,25,32,31,29,34,24,24,29,26,28,24,22,25,32,25,31,33,24,26,35,31,43,28,22,25,26,28,26,36,24,21,23,26,27,24,28,26,22,28,26,33,27,31,35,24,30,37,31,25,23,35,22,29,27,24,23,23,29,25,35,26,20,30,24,23,21,26,25,25,24,28,35,33,31,26,25,24,23,20,24,34,25,27,32,28,21,22,31,27,26,26,31,22,26,27,36,34,20,32,36,22,29,26,25,21,26,23,34,22,25,22,41,29,28,23,24,26,28,26,29,37,31,25,27,26,31,23,29,29,34,32,19,23,31,25,27,27,26,32,22,26,25,28,23,33,38,28,32,26,37,42,27,25,36,37,27,19,35,25,23,25,33,26,34,32,26,21,24,27,47,32,26,26,28,30,26,31,28,26,28,29,19,31,25,38,18,32,35,39,24,38,25,37,25,36,24,21,24,29,42,21,21,31,37,30,27,26,37,26,22,29,23,22,32,28,25,27,25,27,23,28,30,21,32,24,30,23,25,30,25,37,25,24,33,28,25,24,32,31,19,23,31,32],  [24,28,29,31,30,28,31,20,21,31,25,23,23,23,20,33,31,21,28,35,37,31,24,27,62,24,23,37,30,20,23,22,23,23,26,28,28,34,26,21,29,27,25,27,31,28,28,29,35,27,26,25,31,25,28,25,23,21,20,32,26,25,21,37,41,27,33,23,33,26,25,30,30,30,21,33,26,35,24,23,25,25,29,34,33,31,31,28,22,25,25,32,25,30,22,22,28,25,30,23,26,24,24,29,30,35,24,23,38,32,37,23,19,21,25,25,31,26,23,32,28,31,37,24,24,22,20,31,34,37,22,25,34,21,23,25,32,21],  [32,23,25,26,30,26,25,23,25,20,24,29,41,28,33,23,23,33,34,30,29,23,24,19,24,21,24,22,25,36,23,34,25,34,23,31,25,25,30,24,28,26,45,25,23,25,20,22,23,23,23,28,29,19,25,33,25,22,22,23,31,38,33,24,31,25,32,28,43,39,23,24,24,21,25,24,29,31,33,37,29,28,25,23,23,24,34,24,30,25,37,25,33,25,26,27,24,23,29,20,19,28,27,24,34,19,24,22,25,33,34,24,24,34,23,29,30,24,41,29,24,25,24,18,23,27,35,28,17,28,22,27,27,29,26,29,28,26,50,21,24,27,25,36,24,25,27,30,22,30,43,25,22,26,23,24,34,37,15,34,32,23,38,29,33,30,24,25,26,25,29,24,34,28,35,28,23,24,20,17,26,25],  [31,31,26,26,30,24,24,31,23,32,21,25,25,24,24,30,29,28,25,26,20,29,30,32,25,31,25,30,36,24,24,27,28,27,39,28,30,27,24,28,21,23,22,22,25,30,27,24,28,24,31,31,34,20,26,22,26,32,35,31,22,27,32,33,28,37,26,24,32,23],  [30,28,31,40,23,31,33,30,41,28,34,26,32,21,39,24,25,24,35,25,35,21,32,29,35,25,26,37,33,42,34,27,32,34,25,32,32,31,29,30,31,31,38,29,26,32,44,34,34,26,29,30,32,32,36,36,31,39,27,32,27,32,23,35,28,21,23,24,24,29,29,30,42,38,32,40,29,25,32,29,23,32,24,21,31,37,33,31,27,44,40,36,32,34,25,28,40,28,34,24,35,20,26,25,20,27,33,35,39,31,42,22,33,25,35,26,37,27,26,38,22,25,25,34,41,25,31,25,21,41,28,34,33,32,27,39,25,22,31,28,39,30,30,19,40,36,25,33,32,26,36,27,40,31,25,38,25,30,37,35,35,25,29,34,31,29,34,36,31,31,24,37,34,28,40,35,34,36,29,31,37,32,36,34,30,38,38,21,23,33,25,31,26,25,33,32,31,34,41,36,35,23,35,33,32,24,32,28,31,33,28,23,21,20,25,28,35,25,26,37,34,29,27,28,28,31,35,39,25,34,36,19,22,32,31,26,32,25,24,33,41,24,34,25,32,29,29,40,29,36,37,38,40,36,40,24,33,33,36,28,34,29,32],  [38,28,25,28,24,36,24,20,31,25,25,31,23,44,32,23,22,35,28,27,34,29,25,33,22,24,32,24,36,40,24,27,22,26,25,27,28,34,30,25,20,28,37,32,18,27,26,23,29,28,39,30,21,29,34,29,25,26,24,25,23,35,35,27,26,18,24,31,30,39,23,25,26,29,22,23,35,27,34,32,26,27,28,30,19,34,36,32,31,24,22,31,24,25,21,37,39,25,34,25,27,30,24,21,29,25,32,20,37,26,22,24,27,25,26,29,27,36,26,23,35,39,34,25,31,28,25,26,32,34,25,25,32,21,35,20,25,24,34,29,20,33,27,25,38,30,25,25,20,37,25,25,23,36,24,20,30,30,42,31,35,28,26,24,29,26,30,30,30,22,35,25,24,27,34,28,28,26,27,18,26,23,30,25,35,32,26,36,30,35,24,32,26,28,33,19,24,25]]}

var data2 =echarts.dataTool.prepareBoxplotData(data1["研究方向广度"]);
var data3 =echarts.dataTool.prepareBoxplotData(data1["研究方向深度"]);
var data4 =echarts.dataTool.prepareBoxplotData(data1["JS散度"]);

var xAxisList = [], yAxisList = [], yData = [];
var varList1 = ['R-Ⅰ', 'R-Ⅱ', 'R-Ⅲ', 'R-Ⅳ'];
var varList2 = ['e-Ⅰ', 'e-Ⅱ', 'e-Ⅲ', 'e-Ⅳ', 'e-Ⅴ'];
var varList3 = ['J-Ⅰ', 'J-Ⅱ', 'J-Ⅲ', 'J-Ⅳ', 'J-Ⅴ', 'J-Ⅵ', 'J-Ⅶ'];
data2 = data2['boxData'];
data3 = data3['boxData'];
data4 = data4['boxData'];

for(var i=0;i<data2.length;i++){
    xAxisList[i] = {
            type: 'value',
            min:15,
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
            boxWidth:['1%','2%'],
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
                        '研究方向广度类型: ' + param.name,
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
        min:15,
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
            boxWidth:['1%','2%'],
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
                        '研究方向深度类型: ' + param.name,
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
        min:15,
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
            boxWidth:['1%','2%'],
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
                        'JS散度类型: ' + param.name,
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

option3 = {
    title: {
            text: '研\n究\n方\n向\n变\n化\n类\n型',
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
        top:'-40%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-35%',
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
        top:'-25%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-15%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-10%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-5%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'0%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'5%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'15%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'20%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'25%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'30%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'35%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'40%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'45%',
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


var data1 = {"合作广度": [[24, 20, 31, 24, 18, 25, 25, 30, 28, 35, 29, 34, 25, 25, 28, 39, 38, 36, 27, 23, 34, 26, 29, 19, 24, 45, 21, 29, 26, 31, 31, 27, 27, 33, 25, 30, 24, 19, 21, 24, 32, 29, 25, 31, 30, 22, 31, 36, 34, 27, 34, 24, 28, 34, 32, 24, 25, 24, 18, 21, 20, 34, 26, 31, 25, 29, 26, 22, 30, 24, 26, 34, 31, 42, 35, 21, 27, 20, 25, 23, 34, 24, 23, 21, 23, 30, 34, 28, 20, 24, 21, 29, 33, 29, 24, 32, 27, 23, 35, 37, 31, 25, 41, 33, 32, 24, 39, 22, 32, 29, 24, 32, 22, 38, 32, 37, 31, 39, 36, 27, 24, 25, 20, 33, 34, 26, 28, 42, 27, 27, 31, 21, 21, 34, 24, 31, 33, 25, 25, 23, 21, 30, 33, 24, 24, 30, 25, 26, 34, 25, 27, 26, 30, 32, 35, 25, 24, 23, 26, 25, 33, 21, 29, 31, 30, 30, 32, 29, 30, 33, 29, 23, 32, 38, 29, 30, 27, 25, 24, 28, 34, 24, 29, 27, 33, 21, 33, 25, 22, 27, 35, 30, 36, 35, 23, 34, 32, 30, 31, 31, 24, 23, 40, 29, 35, 21, 28, 36, 24, 33, 24, 26, 26, 26, 34, 23, 23, 32, 32, 23, 37, 28, 34, 34, 22, 20, 34, 27, 28, 29, 22, 22, 23, 39, 25, 28, 26, 31, 23, 25, 34, 27, 29, 24, 23, 20, 32, 24, 33, 40, 35, 22, 26, 37, 21, 28, 25, 25, 34, 37, 25, 22, 34, 26, 34, 32, 31, 34, 22, 31, 24, 25, 26, 26, 23, 32, 31, 29, 34, 34, 34, 25, 28, 34, 20, 23, 31, 26, 38, 24, 28, 34, 23, 29, 43, 36, 33, 23, 24, 24, 27, 23, 29, 23, 37, 20, 26, 30, 27, 25, 30, 35, 19, 30, 27, 25, 36, 29, 21, 28, 35, 28, 25, 19, 25, 25, 44, 27, 25, 24, 34, 32, 34, 29, 40, 26, 26, 26, 26, 26, 27, 33, 24, 25, 27, 21, 25, 23, 25, 27, 30, 28, 28, 31, 32, 24, 25, 30, 25, 36, 20, 32, 24, 41, 41, 19, 30, 31, 27, 29, 21, 28, 28, 24, 21, 36, 27, 29, 25, 39, 35, 25, 33, 36, 36, 26, 44, 37, 38, 21, 30, 28, 35, 33, 28, 41, 35, 22, 25, 22, 24, 27, 31, 19, 25, 22, 28, 19, 25, 20, 26, 30, 26, 22, 22, 22, 21, 24, 39, 27, 24, 41, 26, 36, 23, 26, 30, 36, 25, 23, 33, 26, 32, 35, 30, 21, 36, 38, 34, 22, 26, 25, 24, 30, 30, 27, 27, 31, 24, 30, 32, 24, 33, 25, 34, 35, 37, 26, 28, 30, 34, 28, 33, 34, 25, 30, 28, 24, 19, 21, 21, 20, 24, 25, 25, 33, 33, 28, 24, 29, 24, 22, 26, 35, 27, 36, 25, 25, 24, 20, 31, 33, 20, 30, 24, 33, 28, 33, 32, 31, 36, 33, 28, 24, 22, 27, 30, 34, 22, 33, 29, 42, 28, 37, 32, 41, 25, 22, 32, 27, 31, 28, 26, 37, 34, 34, 26, 25, 33, 26, 23, 22, 22, 26, 22, 37, 34, 27, 34, 40, 31, 22, 22, 34, 23, 25, 24, 25, 36, 21, 36, 28, 23, 19, 22, 22, 24, 25, 29, 26, 27, 22, 33, 23, 24, 19, 23, 26, 28, 22, 20, 27, 36, 29, 28, 28, 24, 39, 26, 41, 27, 19, 41, 24, 31, 33, 30, 30, 29, 23, 23, 20, 27, 29, 23, 33, 30, 26, 25, 19, 23, 25, 23, 25, 24, 25, 32, 25, 24, 24, 26, 30, 31, 29, 23, 24, 27, 32, 30, 29, 44, 23, 29, 26, 21, 27, 29, 31, 25, 25, 30, 23, 24, 30, 23, 20, 26, 28, 22, 27, 32, 21, 30, 34, 40, 31, 29, 23, 27, 24, 20, 20, 32, 23, 33, 32, 25, 28, 34, 36, 25, 26, 25, 26, 31, 31, 25, 32, 26, 37, 25, 20, 26, 23, 26, 30, 24, 29, 20, 34, 26, 28, 23, 24, 32, 28, 22, 25, 23, 25, 32, 34, 31, 28, 35, 32, 25, 21, 38, 30, 27, 31, 32, 31, 33, 22, 23, 23, 19, 39, 27, 24, 34, 24, 29, 29, 29, 21, 24, 34, 29, 32, 29, 29, 25, 33, 22, 28, 31, 26, 23, 24, 40, 24, 32, 27, 30, 26, 24, 37, 26, 32, 25, 23, 24, 26, 29, 22, 25, 33, 26, 21, 30, 28, 25, 25, 30, 25, 24, 25, 26, 34, 19, 35, 30, 37, 32, 24, 22, 23, 37, 21, 47, 26, 25, 26, 25, 34, 43, 31, 30, 26, 29, 27, 25, 28, 24, 38, 25, 28, 24, 32, 28, 23, 26, 37, 22, 24, 23, 25, 23, 27, 19, 25, 25, 30, 28, 27, 24, 33, 22, 31, 39, 30, 23, 24, 31, 21, 32, 22, 29, 35, 28, 25, 32, 29, 23, 26, 27, 27, 27, 34, 38, 35, 35, 21, 25, 28, 27, 24, 32, 33, 32, 38, 23, 26, 30, 25, 25, 28, 25, 36, 20, 28, 37, 25, 30, 20, 27, 30, 29, 22, 37, 32, 28, 34, 20, 23, 31, 24, 23, 35, 37, 25, 28, 25, 31, 25, 33, 29, 34, 23, 25, 28, 30, 34, 36, 38, 30, 21, 38, 25, 24, 25, 21, 26, 35, 33, 22, 28, 28, 31, 33, 31, 23, 22, 31, 33, 24, 21, 25, 25, 19, 26, 29, 24, 29, 34, 34, 21, 28, 34, 33, 43, 24, 37, 29, 23, 29, 28, 25, 28, 34, 36, 34, 19, 23, 19, 34, 24, 47, 24, 33, 25, 30, 19, 24, 32, 41, 25, 33, 27, 32, 21, 25, 27, 21, 35, 30, 36, 29, 24, 29, 24, 21, 26, 34, 18, 29, 31, 22, 29, 23, 33, 29, 31, 25, 32, 27, 24, 29, 27, 25, 31, 24, 44, 23, 24, 30, 23, 29, 37, 31, 28, 33, 36, 30, 29, 31, 29, 24, 25, 32, 19, 36, 38, 35, 35, 31, 26, 29, 35, 26, 23, 34, 25, 25, 23, 37, 24, 34, 25, 43, 35, 44, 37, 19, 21, 32, 25, 35, 26, 28, 27, 25, 34, 26, 25, 26, 27, 32, 31, 34, 26, 31, 25, 23, 23, 32, 25, 27, 24, 23, 21, 28, 24, 30, 34, 21, 21, 36, 24, 26, 22, 31, 22, 24, 30, 33, 27, 29, 28, 24, 28, 37, 26, 25, 25, 32, 35, 26, 27, 23, 30, 25, 27, 25, 32, 30, 20, 25, 32, 31, 38, 24, 23, 27, 31, 22, 33, 26, 30, 33, 25, 36, 32, 31, 33, 35, 32, 36, 20, 28, 24, 22, 32, 31, 27, 30, 21, 31, 37, 36, 33, 23, 33, 24, 23, 36, 28, 23, 20, 30, 32, 25, 29, 30, 24, 36, 28, 25, 31, 31, 46, 26, 23, 29, 40, 24, 25, 31, 22, 25, 19, 24, 25, 31, 27, 29, 25, 34, 21, 30, 29, 26, 23, 23, 31, 25, 32, 35, 30, 26, 34, 24, 26, 40, 27, 25, 24, 25, 27, 23, 22, 21, 27, 23, 22, 21, 35, 20, 23, 28, 34, 26, 26, 34, 38, 24, 21, 23, 25, 32, 29, 33, 25, 23, 31, 24], [21, 24, 22, 26, 22, 20, 22, 22, 23, 32, 24, 33, 32, 22, 24, 22, 41, 43, 34, 21, 20, 20, 24, 23, 18, 28, 36, 22, 28, 39, 26, 35, 32, 24, 32, 32, 20, 26, 33, 36, 22, 29, 28, 32, 28, 17, 33, 28, 23, 22, 23, 23, 25, 38, 21, 27, 25, 32, 26, 30, 37, 24, 32, 25, 29, 24, 26, 23, 23, 22, 22, 41, 26, 24, 34, 22, 23, 35, 31, 23, 28, 30, 30, 20, 34, 21, 28, 20, 40, 31, 35, 32, 39, 23, 29, 20, 21, 23, 28, 31, 23, 31, 32, 28, 22, 19, 37, 33, 25, 21, 22, 29, 32, 23, 21, 35, 33, 25, 30, 40, 31, 22, 34, 23, 25, 33, 33, 31, 37, 38, 24, 24, 36, 23, 31, 21, 29, 20, 23, 37, 27, 25, 37, 27, 39, 34, 21, 37, 30, 25, 24, 22, 28, 22, 31, 26, 25, 23, 27, 23, 33, 35, 29, 31, 28, 29, 20, 60, 33, 24, 23, 40, 41, 23, 32, 24, 36, 30, 36, 31, 37, 39, 35, 27, 23, 33, 28, 23, 23, 23, 39, 23, 30, 34, 32, 30, 24, 33, 35, 36, 22, 22, 35, 23, 30, 23, 39, 34, 28, 32, 25, 21, 24, 24, 34, 23, 24, 33, 23, 35, 30, 27, 31, 32, 24, 24, 33, 24, 30, 31, 42, 29, 23, 25, 20, 22, 24, 24, 24, 23, 26, 21, 34, 29, 30, 25, 23, 38, 22, 18, 24, 25, 26, 24, 36, 24, 31, 41, 20, 23, 22, 27, 27, 33, 24, 35, 32, 23, 34, 24, 32, 27, 23, 29, 37, 18, 24, 30, 25, 41, 38, 24, 22, 19, 31, 30, 23, 25, 32, 23, 27, 35, 22, 22, 21, 33, 24, 37, 24, 31, 31, 30, 24, 31, 27, 33], [40, 28, 25, 23, 26, 28, 25, 19, 25, 36, 28, 25, 34, 36, 25, 43, 28, 34, 25, 25, 31, 37, 42, 35, 21, 25, 25, 24, 33, 25, 22, 30, 23, 27, 40, 22, 33, 29, 34, 32, 23, 31, 24, 37, 36, 26, 24, 25, 25, 25, 25, 23, 25, 39, 34, 28, 28, 27, 24, 25, 25, 25, 29, 25, 25, 25, 24, 23, 39, 29, 24, 37, 36, 25, 30, 22, 23, 28, 25, 32, 25, 28, 25, 28, 23, 38, 38, 21, 24, 24, 35, 32, 24, 36, 22, 19, 38, 30, 24, 24, 25, 25]], "合作深度": [[38, 32, 28, 23, 30, 35, 28, 27, 39, 36, 28, 21, 29, 28, 25, 22, 28, 26, 32, 27, 25, 32, 24, 33, 25, 24, 32, 29, 22, 26, 34, 25, 23, 43, 35, 25, 36, 21, 25, 28, 22, 21, 35, 32, 35, 25, 37, 31, 23, 39, 19, 26, 32, 30, 28, 30, 41, 28, 35, 33, 24, 30, 19, 21, 24, 33, 32, 29, 26, 25, 32, 24, 20, 29, 30, 28, 24, 29, 31, 22, 33, 28, 28, 31, 28, 33, 21, 29, 18, 28, 35, 31, 41, 35, 33, 34, 29, 22, 21, 29, 25, 36, 27, 33, 23, 25, 34, 23, 32, 28, 38, 30, 33, 21, 34, 28, 22, 24, 27, 39, 28, 31, 32, 26, 28, 26, 23, 18, 33, 40, 34, 23, 24, 26, 22, 34, 27, 33, 33, 35, 26, 23, 23, 24, 41, 25, 22, 32, 35, 37, 30, 36, 27, 24, 33, 32, 30, 45, 34, 22, 24, 20, 26, 30, 28, 30, 27, 30, 26, 37, 30, 36, 24, 25, 35, 21, 42, 28, 34, 27, 27, 29, 40, 23, 27, 34, 24, 35, 32, 39, 25, 30, 24, 28, 32, 39, 37, 33, 21, 26, 22, 28, 44, 19, 23, 33, 32, 33, 31, 22, 25, 30, 32, 22, 21, 21, 39, 40, 34, 36, 37, 24, 27, 24, 29, 37, 32, 33, 30, 27, 28, 30, 33, 25, 33, 36, 26, 28, 36, 30, 34, 36, 38, 25, 31, 29, 26, 22, 20, 36, 26, 25, 28, 24, 29, 24, 22, 26, 31, 26, 36, 24, 38, 25, 18, 20, 33, 24, 33, 36, 35, 22, 25, 33, 40, 30, 40, 27, 29, 38, 29, 26, 36, 34, 23, 38, 26, 32, 21, 25, 28, 39, 37, 22, 34, 25, 27, 34, 23, 19, 23, 21, 28, 26, 29, 28, 28, 38, 31, 26, 27, 25, 41, 27, 34, 31, 28, 28, 27, 23, 33, 27, 33, 23, 25, 26, 25, 29, 24, 23, 25, 33, 29, 44, 29, 35, 27, 28, 28, 32, 28, 30, 25, 28, 21, 23, 25, 29, 42, 31, 41, 28, 26, 33, 31, 25, 25, 31, 35, 35, 20, 37, 24, 30, 24, 33, 39, 33, 26, 36, 26, 28, 32, 23, 30, 22, 24, 30, 20, 36, 28, 27, 33, 22, 23, 40, 24, 34, 25, 30, 22, 24, 32, 37, 22, 28, 24, 26, 25, 30, 38, 33, 25, 31, 33, 30, 30, 35, 19, 37, 24, 31, 36, 25, 24, 34, 34, 43, 29, 36, 28, 22, 29, 38, 37, 32, 24, 23, 26, 22, 25, 34, 26, 29, 27, 36, 29, 39, 30, 34, 25, 25, 32, 27, 28, 35, 26, 29, 32, 30, 25, 24, 38, 31, 24, 24, 26, 28, 38, 24, 34, 31, 18, 29, 29, 22, 28, 24, 36, 32, 23, 30, 28, 24, 37, 36, 28, 31, 30, 35, 38, 36, 21, 25, 24, 33, 30, 34, 32, 20, 33, 27, 24, 27, 30, 30, 25, 24, 36, 28, 25, 26, 34, 36, 21, 21, 24, 24, 33, 40, 25, 23, 28, 30, 24, 26, 34, 21, 25, 33, 22, 31, 23, 25, 24, 33, 22, 44, 23, 24, 29, 31, 30, 31, 42, 21, 31, 27, 23, 25, 32, 27, 40, 37, 33, 35, 26, 24, 34, 34, 36, 34, 23, 35, 44, 21, 35, 28, 26, 26, 33, 29, 32, 24, 21, 22, 24, 33, 29, 29, 23, 29, 26, 27, 25, 41, 24, 30, 35, 27, 31, 38, 24, 25, 32, 32, 32, 21, 33, 36, 31, 30, 27, 30, 38, 25, 19, 23, 34, 18, 30, 32, 36, 31, 46, 22, 24, 24, 19, 22, 26, 37, 27, 29, 26, 23, 34, 32, 24, 39, 31, 37, 30, 23, 22, 19, 25, 23, 23, 34, 32, 19, 25, 32, 23, 27, 31, 23, 33], [35, 29, 25, 38, 35, 26, 26, 47, 23, 31, 33, 25, 29, 31, 22, 32, 34, 34, 32, 23, 31, 22, 30, 24, 31, 29, 25, 23, 30, 27, 34, 37, 38, 32, 37, 39, 36, 24, 33, 34, 27, 27, 32, 34, 31, 33, 28, 33, 24, 25, 26, 27, 35, 25, 35, 32, 32, 33, 38, 33, 25, 29, 29, 22, 35, 23, 34, 32, 32, 26, 25, 25, 35, 26, 23, 25, 34, 27, 31, 33, 28, 25, 35, 24, 25, 23, 23, 28, 25, 37, 35, 26, 31, 22, 31, 25, 26, 29, 37, 34, 27, 25, 23, 24, 27, 25, 29, 25, 35, 19, 27, 29, 22, 28, 29, 25, 25, 24, 32, 34, 26, 25, 25, 32, 31, 32, 29, 24, 41, 19, 31, 21, 29, 36, 25, 40, 25, 36, 37, 38, 35, 33, 35, 22, 27, 21, 25, 32, 26, 25, 25, 35, 23, 26, 23, 30, 32, 25, 37, 28, 19, 24, 21, 21, 25, 26, 33, 35, 25, 24, 28, 32, 28, 30, 34, 33, 42, 32, 22, 22, 32, 37, 25, 34, 26, 23, 22, 39, 23, 22, 34, 25, 25, 36, 22, 25, 27, 24, 20, 36, 27, 39, 19, 41, 25, 31, 33, 29, 23, 30, 19, 23, 27, 30, 30, 23, 21, 31, 25, 31, 23, 23, 62, 32, 28, 27, 24, 20, 25, 25, 26, 26, 28, 23, 25, 32, 34, 31, 35, 24, 32, 19, 27, 34, 33, 31, 26, 35, 27, 25, 26, 26, 25, 30, 24, 28, 32, 26, 32, 23, 50, 25, 34, 28, 30, 27, 25, 24, 31, 24, 29, 35, 27, 38, 35, 36, 21, 24, 33, 23, 26, 30, 38, 37, 30, 39, 25, 35, 25, 29, 34, 23, 28, 30, 38, 25, 21, 28, 25, 32, 19, 44, 24, 31, 35, 36, 43, 25, 23, 28, 34, 34, 25, 24, 25, 35, 25, 30, 19, 25, 27, 34, 21, 31, 30, 25, 19, 40, 31, 29, 29, 27, 30, 25, 27, 28, 23, 25, 23, 31, 24, 25, 36, 35, 21, 31, 29, 26, 23, 21, 32, 25, 27, 25, 32, 31, 27, 23, 27, 27, 28, 20, 36, 27, 31, 22, 32, 28, 37, 32, 26, 30, 21, 32, 23, 31, 22, 31, 31, 21, 31, 25, 36, 33, 23, 36, 25, 30, 23, 29, 30, 23, 25, 25, 31, 31, 29, 30, 24, 25, 27, 27, 21, 20, 28, 27, 26, 38, 32, 29, 25], [18, 23, 24, 27, 20, 22, 26, 21, 23, 21, 41, 23, 33, 18, 32, 34, 22, 22, 37, 23, 23, 25, 25, 41, 24, 36, 23, 26, 32, 33, 31, 19, 39, 38, 35, 24, 29, 21, 23, 22, 28, 22, 19, 38, 24, 25, 23, 31, 35, 26, 25, 31, 22, 21, 22, 29, 29, 33, 21, 35, 22, 36, 34, 31, 32, 24, 23, 23, 38, 25, 25, 23, 29, 19, 35, 23, 23, 24, 24, 26, 35, 26, 31, 33, 24, 21, 22, 30, 30, 29, 37, 27, 24, 33, 23, 30, 25, 29, 27, 23, 23, 24, 20, 25, 23, 22, 21, 23, 24, 39, 20, 19, 23, 25, 23, 25, 32, 21, 27, 22, 29, 22, 34, 28, 20, 30, 23, 17, 17, 24, 26, 22, 20, 19, 26, 36, 29, 21, 37, 36, 24, 25, 22, 22, 25, 30, 33, 30, 19, 23, 20, 24, 23, 38, 19, 26, 34, 32, 27, 25, 24, 21, 29, 26, 25, 25, 30, 25, 25, 32, 24, 23], [24, 20, 27, 28, 23, 24, 24, 19, 24, 31, 24, 21, 27, 24, 19, 30, 36, 29, 25, 34, 28, 20, 20, 34, 24, 26, 26, 34, 42, 21, 23, 36, 20, 29, 29, 24, 25, 22, 32, 24, 31, 27, 42, 24, 33, 23, 21, 24, 34, 26, 30, 25, 29, 30, 27, 24, 34, 25, 24, 27, 35, 36, 30, 23, 30, 24, 24, 26, 23, 32, 22, 22, 23, 26, 29, 25, 33, 37, 38, 25, 34, 26, 31, 23, 31, 26, 38, 24, 36, 36, 23, 37, 30, 25, 27, 29, 40, 20, 28, 33, 27, 21, 28, 28, 25, 30, 25, 32, 28, 31, 36, 22, 30, 28, 28, 41, 25, 22, 28, 19, 20, 26, 22, 27, 28, 26, 25, 33, 26, 32, 30, 39, 22, 24, 26, 25, 30, 34, 30, 36, 25, 31, 33, 30, 24, 31, 24, 24, 30, 28, 25, 31, 26, 26, 22, 34, 23, 40, 24, 21, 28, 23, 30, 22, 28, 23, 24, 30, 25, 26, 26, 32, 25, 31, 27, 26, 24, 22, 21, 34, 40, 29, 25, 20, 33, 34, 36, 28, 31, 26, 25, 23, 20, 28, 24, 25, 28, 24, 33, 23, 29, 29, 29, 23, 40, 28, 22, 27, 35, 25, 26, 24, 28, 37, 30, 26, 27, 25, 28, 24, 24, 26, 24, 28, 37, 24, 23, 25, 23, 27, 19, 30, 24, 33, 25, 32, 28, 23, 26, 27, 25, 20, 24, 32, 34, 20, 25, 33, 25, 32, 36, 25, 26, 25, 22, 28, 33, 31, 22, 31, 24, 25, 34, 22, 28, 33, 29, 28, 25, 47, 25, 33, 32, 35, 30, 29, 21, 26, 31, 32, 24, 37, 28, 33, 36, 19, 29, 35, 26, 25, 37, 24, 25, 43, 37, 28, 34, 34, 25, 26, 26, 23, 37, 26, 24, 25, 30, 35, 26, 35, 32, 28, 25, 25, 31, 30, 36, 36, 20, 28, 24, 23, 33, 36, 25, 35, 33, 28, 29, 40, 25, 31, 34, 31, 25, 26, 26, 28, 25, 24, 35, 34, 24, 31], [24, 24, 17, 24, 26, 23, 20, 23, 25, 18, 20, 24, 24, 23, 25, 22, 19, 20, 21, 20, 20, 20, 24, 25, 33, 22, 20, 20, 22, 26, 25, 23, 26, 23, 25, 25, 25, 25, 24, 20, 23, 36, 25, 24, 23, 22, 22, 24, 25, 25, 21]], "C指数": [[25, 27, 23, 37, 29, 21, 24, 25, 32, 24, 25, 26, 36, 24, 35, 30, 36, 28, 32, 29, 20, 35, 24, 41, 24, 22, 32, 23, 24, 41, 37, 35, 33, 26, 25, 34, 31, 20, 26, 25, 24, 25, 28, 34, 35, 29, 32, 23, 32, 33, 23, 31, 33, 38, 28, 30, 31, 25, 31, 18, 29, 32, 42, 35, 33, 35, 25, 41, 25, 24, 24, 24, 34, 25, 31, 23, 24, 23, 28, 25, 42, 25, 26, 25, 23, 25, 26, 34, 25, 25, 25, 22, 35, 33, 27, 30, 25, 36, 30, 23, 27, 24, 23, 28, 21, 27, 35, 26, 32, 36, 21, 36, 27, 26, 29, 24, 25, 40, 25, 33, 37, 22, 20, 39, 37, 23, 25, 22, 36, 35, 25, 24, 29, 32, 21, 23, 22, 39, 28, 36, 20, 36, 24, 24, 23, 32, 30, 20, 24, 29, 35, 28, 31, 26, 37, 33, 34, 36, 35, 36, 40, 31, 31, 19, 24, 21, 24, 34, 27, 33, 25, 34, 28, 32, 22, 37, 38, 37, 23, 28, 38, 32, 36, 25, 34, 20, 39, 23, 22, 24, 28, 41, 22, 34, 25, 25, 22, 24, 25, 28, 29, 28, 37, 32, 27, 19, 33, 31, 23, 30, 27, 22, 45, 33, 35, 29, 23, 23, 29, 23, 21, 23, 60, 40, 29, 25, 25, 23, 24, 33, 24, 32, 28, 34, 31, 37, 37, 26, 31, 39, 27, 28, 28, 25, 25, 25, 24, 32, 25, 21, 25, 34, 25, 24, 29, 22, 25, 32, 31, 22, 24, 33, 39, 24, 25, 35, 21, 26, 30, 23, 35, 21, 25, 33, 31, 26, 38, 33, 23, 30, 25, 24, 29, 25, 21, 22, 29, 25, 35, 38, 26, 24, 24, 25, 25, 25, 38, 25, 31, 20, 29, 38, 32, 24, 25, 23, 24, 29, 35, 37, 28, 31, 31, 25, 23, 28, 35, 22, 25, 24, 24, 36, 30, 34, 21, 33, 31, 22, 34, 43, 23, 37, 30, 25, 28, 17, 23, 34, 24, 25, 26, 24, 41, 25, 28, 22, 21, 28, 33, 30, 25, 31, 24, 25, 17, 32, 30, 23, 25, 28, 23, 23, 31, 43, 20, 31, 23, 27, 29, 26, 21, 37, 35, 29, 23, 25, 36, 23, 37, 20, 26, 31, 32, 27, 35, 25, 22, 28, 20, 27, 22, 34, 29, 29, 32, 31, 30, 25, 33, 30, 25, 33, 31, 23, 23, 22, 33, 28, 25, 24, 24, 24, 30, 25, 34, 40, 28, 31, 25, 30, 25, 21, 34, 27, 32, 26, 31, 25, 33, 25, 33], [24, 32, 24, 20, 29, 28, 35, 23, 29, 25, 26, 26, 37, 38, 24, 26, 24, 34, 23, 26, 19, 26, 24, 46, 21, 29, 23, 28, 31, 22, 31, 26, 27, 31, 25, 30, 24, 19, 31, 27, 26, 31, 30, 22, 31, 34, 32, 29, 34, 28, 34, 29, 32, 24, 24, 20, 20, 34, 34, 26, 31, 23, 29, 26, 22, 30, 24, 24, 34, 42, 31, 42, 34, 21, 29, 33, 25, 23, 23, 20, 20, 23, 36, 21, 29, 33, 24, 32, 27, 23, 35, 31, 24, 19, 33, 28, 37, 31, 39, 22, 32, 29, 27, 24, 37, 31, 36, 31, 39, 36, 27, 26, 32, 27, 24, 32, 30, 42, 27, 26, 32, 21, 32, 24, 29, 33, 23, 20, 32, 33, 24, 22, 23, 24, 34, 26, 26, 30, 32, 34, 25, 33, 25, 20, 28, 31, 29, 30, 27, 23, 32, 27, 24, 27, 34, 24, 29, 29, 27, 33, 20, 33, 22, 35, 36, 34, 23, 34, 30, 30, 31, 29, 26, 23, 22, 29, 35, 19, 27, 25, 36, 25, 33, 38, 22, 26, 26, 24, 33, 23, 30, 32, 23, 36, 28, 32, 22, 19, 34, 27, 26, 22, 33, 26, 39, 28, 28, 26, 31, 31, 25, 25, 35, 28, 26, 24, 23, 20, 32, 33, 37, 32, 38, 28, 34, 36, 21, 34, 25, 33, 33, 31, 33, 22, 31, 22, 25, 26, 24, 41, 27, 25, 22, 30, 31, 28, 35, 37, 34, 23, 24, 31, 26, 38, 23, 27, 32, 24, 32, 45, 36, 33, 24, 24, 29, 37, 18, 25, 29, 30, 25, 30, 19, 30, 27, 25, 37, 29, 21, 26, 34, 25, 25, 19, 23, 24, 27, 25, 24, 32, 34, 29, 40, 20, 25, 26, 27, 33, 27, 25, 21, 27, 32, 26, 28, 30, 32, 32, 25, 25, 28, 29, 30, 24, 41, 41, 19, 32, 31, 26, 31, 28, 28, 23, 21, 36, 26, 29, 25, 40, 31, 35, 36, 22, 26, 22, 28, 42, 37, 20, 30, 28, 22, 32, 28, 33, 39, 35, 33, 22, 20, 26, 30, 21, 25, 32, 21, 28, 19, 24, 20, 25, 26, 22, 22, 21, 24, 27, 25, 40, 26, 31, 36, 32, 33, 25, 34, 22, 35, 32, 39, 22, 24, 24, 30, 30, 26, 25, 29, 32, 25, 34, 36, 37, 24, 28, 30, 30, 28, 26, 23, 21, 18, 25, 32, 22, 27, 23, 24, 30, 34, 27, 36, 25, 25, 31, 33, 19, 24, 30, 24, 33, 27, 32, 32, 31, 33, 28, 24, 22, 26, 30, 34, 24, 33, 32, 29, 42, 30, 25, 20, 32, 26, 31, 27, 37, 27, 25, 37, 34, 26, 25, 23, 21, 26, 22, 34, 26, 33, 39, 40, 22, 34, 25, 25, 36, 20, 35, 28, 23, 19, 21, 28, 26, 26, 32, 19, 21, 28, 23, 19, 26, 36, 26, 27, 37, 39, 26, 24, 41, 26, 39, 25, 31, 28, 29, 20, 26, 29, 23, 31, 30, 26, 32, 19, 23, 25, 23, 24, 26, 26, 32, 25, 25, 26, 24, 30, 27, 31, 27, 24, 27, 31, 29, 28, 23, 28, 26, 21, 26, 29, 30, 25, 31, 31, 24, 30, 22, 24, 27, 27, 32, 21, 30, 32, 31, 27, 20, 41, 19, 39, 33, 23, 28, 34, 36, 24, 25, 26, 30, 27, 25, 30, 25, 25, 19, 36, 23, 26, 30, 24, 29, 20, 34, 26, 34, 23, 32, 28, 35, 28, 24, 22, 25, 32, 33, 31, 28, 35, 38, 25, 30, 33, 31, 33, 21, 21, 23, 19, 39, 26, 28, 28, 33, 28, 25, 33, 27, 30, 26, 23, 40, 25, 25, 29, 27, 25, 26, 32, 25, 23, 28, 30, 22, 25, 32, 27, 30, 28, 26, 26, 30, 24, 27, 30, 36, 18, 35, 30, 36, 22, 30, 48, 26, 26, 32, 34, 43, 35, 29, 27, 25, 28, 24, 35, 26, 28, 24, 28, 24, 37, 22, 24, 23, 24, 25, 22, 27, 19, 26, 34, 30, 26, 28, 26, 36, 33, 37, 28, 33, 23, 25, 31, 31, 29, 35, 28, 23, 32, 23, 26, 26, 27, 27, 33, 36, 20, 29, 27, 32, 31, 32, 38, 25, 25, 25, 29, 25, 20, 26, 33, 29, 21, 27, 32, 20, 30, 31, 24, 35, 25, 25, 33, 29, 32, 25, 30, 35, 36, 38, 24, 21, 26, 32, 22, 28, 28, 33, 31, 33, 21, 30, 32, 24, 23, 25, 19, 26, 43, 23, 30, 34, 34, 28, 33, 25, 23, 27, 28, 25, 28, 33, 35, 34, 20, 24, 47, 33, 24, 30, 19, 32, 25, 32, 26, 32, 33, 21, 29, 30, 30, 25, 29, 25, 24, 21, 26, 32, 40, 31, 22, 29, 25, 25, 33, 28, 31, 27, 24, 27, 33, 22, 44, 24, 28, 23, 28, 37, 31, 28, 33, 36, 31, 29, 24, 28, 23, 31, 19, 35, 33, 40, 35, 31, 25, 35, 26, 24, 34, 25, 37, 22, 34, 25, 43, 35, 42, 24, 21, 32, 25, 25, 27, 27, 34, 25, 25, 26, 30, 30, 32, 26, 30, 27, 23, 23, 37, 27, 26, 24, 30, 34, 22, 21, 36, 25, 31, 22, 23, 31, 28, 28, 37, 27, 25, 41, 32, 35, 26, 28, 23, 29, 25, 27, 25, 21, 39, 31, 31, 23, 25, 30, 21, 24, 29, 32, 36, 32, 30, 34, 31, 36, 20, 28, 24, 23, 30, 31, 27, 29, 20, 37, 34, 32, 31, 32, 21, 35, 25, 30, 18, 30, 30, 29, 30, 25, 36, 38, 31, 22, 25, 35, 31, 46, 22, 29, 40, 23, 25, 31, 19, 22, 25, 37, 31, 26, 29, 26, 34, 23, 31, 29, 31, 25, 35, 26, 24, 26, 38, 24, 26, 21, 20, 27, 23, 22, 35, 20, 27, 26, 34, 37, 24, 21, 23, 30, 29, 23, 31], [40, 20, 28, 35, 21, 26, 28, 25, 21, 24, 43, 25, 25, 23, 25, 22, 25, 21, 43, 28, 38, 25, 37, 29, 37, 23, 25, 27, 31, 28, 24, 24, 25, 21, 44, 30, 40, 37, 32, 33, 33, 34, 31, 25, 37, 27, 23, 35, 25, 25, 26, 24, 25, 26, 23, 42, 22, 24, 27, 25, 31, 23, 34, 24, 24, 25, 28, 31, 35, 25, 32, 39, 27, 26, 24, 30, 39, 30, 25, 25, 25, 30, 24, 25, 41, 22, 23, 26, 33, 34, 24, 37, 23, 39, 30, 29, 37, 32, 30, 36, 25, 30, 25, 28, 32, 32, 25, 19, 25, 26, 25, 38, 27, 28, 38, 23, 25, 38, 38, 34, 35, 34, 29, 25, 25, 32, 25, 25, 26, 36, 25, 40, 21, 35, 25, 29, 23, 28, 32, 25, 24, 33, 23, 29, 24], [26, 24, 23, 19, 28, 20, 25, 20, 25, 21, 24, 30, 21, 25, 25, 20, 25, 38, 23, 24, 24, 23, 25, 24, 29, 24, 25, 24, 25, 25, 24, 24, 22, 23, 25, 19, 24, 24, 25, 24, 24, 24, 21, 25, 25, 25, 24, 25]]}
var data2 =echarts.dataTool.prepareBoxplotData(data1["合作广度"]);
var data3 =echarts.dataTool.prepareBoxplotData(data1["合作深度"]);
var data4 =echarts.dataTool.prepareBoxplotData(data1["C指数"]);

var xAxisList = [], yAxisList = [], yData = [];
var varList1 = ['CB-Ⅰ', 'CB-Ⅱ', 'CB-Ⅲ'];
var varList2 = ['CD-Ⅰ', 'CD-Ⅱ', 'CD-Ⅲ', 'CD-Ⅳ', 'CD-Ⅴ'];
var varList3 = ['C-Ⅰ', 'C-Ⅱ', 'C-Ⅲ', 'C-Ⅳ'];
data2 = data2['boxData'];
data3 = data3['boxData'];
data4 = data4['boxData'];

for(var i=0;i<data2.length;i++){
    xAxisList[i] = {
            type: 'value',
            min:15,
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
            boxWidth:['1%','2%'],
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
                        '合作广度类型: ' + param.name,
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
        min:15,
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
            boxWidth:['1%','2%'],
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
                        '合作深度类型: ' + param.name,
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
        min:15,
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
            boxWidth:['1%','2%'],
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
                        'C指数类型: ' + param.name,
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

option33 = {
    title: {
            text: '科\n研\n合\n作\n变\n化\n类\n型',
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
        top:'-38%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-31%',
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
        top:'-14%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-7%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'0%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'7%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'14%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'24%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'31%',
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
        top:'45%',
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


option6 = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087'],
  title: {
    text: '研究方向广度',
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
    data: ['R-Ⅰ', 'R-Ⅱ', 'R-Ⅲ', 'R-Ⅳ'],
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
      name: 'R-Ⅰ',
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
      data: [13,10,16,15,11,12,9,13,11,12,14,13,20,23,25,14,19,21,24]
    },
    {
      name: 'R-Ⅱ',
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
      data: [47,36,41,36,49,35,36,39,47,47,45,47,46,43,39,48,41,35,19]
    },
    {
      name: 'R-Ⅲ',
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
      data: [30,34,24,31,23,49,36,25,25,24,21,19,15,18,11,9,17,4,14]
    },
    {
      name: 'R-Ⅳ',
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
      data: [11,20,19,18,17,5,19,23,18,17,20,20,19,17,25,29,24,40,43]
    },
  ]
};

option66 =  {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  title: {
    text: '研究方向深度',
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
    data: ['e-Ⅰ', 'e-Ⅱ', 'e-Ⅲ', 'e-Ⅳ', 'e-Ⅴ'],
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
      name: 'e-Ⅰ',
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
      data: [47,48,52,46,53,40,53,48,58,53,51,61,61,68,59,57,66,76,67]
    },
    {
      name: 'e-Ⅱ',
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
      data: [19,22,17,25,17,28,16,21,14,17,18,17,11,10,10,18,10,6,10]
    },
    {
      name: 'e-Ⅲ',
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
      data: [2,3,3,1,2,5,4,5,7,3,3,1,4,5,5,3,7,4,0]
    },
    {
      name: 'e-Ⅳ',
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
      data: [9,5,2,5,6,2,11,4,7,3,8,4,7,8,3,5,3,3,0]
    },
    {
      name: 'e-Ⅴ',
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
      data: [23,23,25,23,21,26,16,23,14,24,21,16,18,10,22,17,14,10,24]
    }
  ]
};

option666 =  {
  color: [
      '#80FFA5',
      '#00DDFF', '#37A2FF', '#FF0087',
      "rgb(202, 138, 137)",
      '#FFBF00',
      "rgb(154,96,180)",
      'rgb(59, 162, 114)'
  ],
  title: {
    text: 'JS散度',
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
      top:"7%",
    data: ['J-Ⅰ', 'J-Ⅱ', 'J-Ⅲ', 'J-Ⅳ', 'J-Ⅴ', 'J-Ⅵ', 'J-Ⅶ'],
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
      name: 'J-Ⅰ',
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
      data: [20,12,21,21,13,19,25,17,21,12,11,16,15,15,8,12,12,12,29]
    },
    {
      name: 'J-Ⅱ',
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
      data: [17,25,21,20,30,14,19,23,23,21,36,33,30,27,28,29,25,21,10]
    },
    {
      name: 'J-Ⅲ',
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
      data: [4,13,6,6,11,9,9,8,11,14,9,10,10,8,9,12,19,9,10]
    },
    {
      name: 'J-Ⅳ',
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
      data: [15,11,10,12,15,14,10,17,12,17,16,9,9,12,15,18,20,13,10]
    },
    {
      name: 'J-Ⅴ',
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
            color: 'rgb(202, 138, 137)'
          },
          {
            offset: 1,
            color: '#FFBF00'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [4,4,5,4,0,0,3,7,11,6,6,3,4,5,8,4,2,10,5]
    },
    {
      name: 'J-Ⅵ',
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
      data: [17,22,25,20,11,30,20,20,16,21,13,13,18,15,16,13,10,22,33]
    },{
      name: 'J-Ⅶ',
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
            color: 'rgb(234, 124, 204)'
          },
          {
            offset: 1,
            color: 'rgb(59, 162, 114)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [22,13,13,17,21,14,15,8,7,9,9,15,14,17,17,13,12,13,5]
    },
  ]
};


option7 = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF'],
  title: {
    text: '合作广度',
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
    data: ['CB-Ⅰ', 'CB-Ⅱ', 'CB-Ⅲ'],
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
      name: 'CB-Ⅰ',
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
      data: [79,61,75,67,85,50,69,76,73,77,71,77,75,80,81,82,71,91,73]
    },
    {
      name: 'CB-Ⅱ',
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
      data: [19,29,19,25,15,39,23,14,18,18,22,15,21,13,14,16,19,6,27]
    },
    {
      name: 'CB-Ⅲ',
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
      data: [2,10,6,8,0,11,8,9,8,4,7,8,4,7,5,2,10,3,0]
    },
  ]
};

option77 =  {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  title: {
    text: '研究方向深度',
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
    data: ['CD-Ⅰ', 'CD-Ⅱ', 'CD-Ⅲ', 'CD-Ⅳ', 'CD-Ⅴ'],
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
      name: 'CD-Ⅰ',
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
      data: [50,53,51,41,43,67,41,38,39,38,44,33,39,33,33,30,33,35,41]
    },
    {
      name: 'CD-Ⅱ',
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
      data: [17,25,24,24,36,13,28,29,25,24,27,27,24,18,28,29,24,23,32]
    },
    {
      name: 'CD-Ⅲ',
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
      data: [4,13,6,11,4,7,9,12,11,10,10,13,12,15,9,10,17,8,9]
    },
    {
      name: 'CD-Ⅳ',
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
      data: [27,9,19,21,17,11,18,16,18,27,17,26,22,30,26,18,22,29,18]
    },
    {
      name: 'CD-Ⅴ',
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
      data: [2,0,0,2,0,2,4,4,7,1,1,1,3,3,5,12,4,5,0]
    }
  ]
};

option777 = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087'],
  title: {
    text: 'C指数',
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
    data: ['C-Ⅰ', 'C-Ⅱ', 'C-Ⅲ', 'C-Ⅳ'],
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
      name: 'C-Ⅰ',
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
      data: [38,29,32,31,21,37,33,23,17,25,25,25,31,22,25,26,30,20,27]
    },
    {
      name: 'C-Ⅱ',
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
      data: [54,57,63,57,77,41,54,59,70,63,65,64,59,63,65,57,53,67,68]
    },
    {
      name: 'C-Ⅲ',
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
      data: [8,14,5,11,2,22,9,15,5,10,7,10,6,8,6,12,13,7,5]
    },
    {
      name: 'C-Ⅳ',
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
      data: [0,0,0,1,0,0,4,3,8,1,3,1,4,8,4,6,4,7,0]
    },
  ]
};


var data1 = {"研究方向广度": [[7.0, 8.0, 10.0, 7.0, 6.0, 184.5, 9.0, 2.0, 4.0, 23.5, 5.0, 9.2, 10.0, 11.0, 29.0, 4.0, 17.0, 4.0, 19.0, 21.0, 34.0, 18.0, 4.0, 12.0, 22.0, 22.0, 4.0, 22.0, 2.0, 41.0, 41.0, 8.0, 23.0, 25.0, 6.0, 8.0, 12.0, 9.0, 4.0, 24.0, 1.0, 4.0, 4.0, 13.0, 27.0, 6.0, 6.0, 11.0, 28.0, 18.0, 8.0, 27.0, 2.0, 24.0, 2.0, 36.0, 4.0, 18.0, 34.0, 24.0, 10.0, 18.0, 20.0, 10.0, 20.0, 2.0, 8.0, 14.0, 14.0, 38.0, 14.0, 4.0, 18.0, 24.0, 20.0, 10.0, 15.0, 14.0, 2.0, 22.0, 4.0, 10.0, 14.0, 8.0, 16.0, 52.0, 16.0, 30.0, 14.0, 2.0, 18.0, 16.0, 19.5, 15.0, 5.0, 12.0, 7.0, 6.0, 14.0, 6.0, 19.5, 18.0, 2.0, 10.0, 5.0, 6.0, 17.5, 8.0, 8.0, 8.0, 6.0, 4.0, 11.0, 18.0, 13.0, 3.0, 14.0, 4.0, 15.0, 12.0, 4.0, 8.0, 5.0, 12.0, 24.0, 18.0, 40.0, 18.0, 2.0, 12.0, 29.0, 8.0, 2.0, 10.0, 2.0, 6.0, 38.0, 5.0, 29.5, 10.0, 36.0, 40.0, 12.5, 26.0, 14.0, 21.5, 10.0, 30.0, 45.0, 31.0, 22.0, 24.0, 2.0, 10.0, 10.0, 4.0, 18.0, 40.0, 18.0, 10.0, 2.0, 14.0, 18.0, 16.0, 28.0, 20.0, 41.0, 40.0, 30.0, 14.0, 39.0, 29.0, 30.0, 10.0, 2.0, 22.0, 23.0, 18.0, 16.0, 18.0, 26.0, 14.0, 30.0, 26.0, 20.0, 26.0, 20.0, 16.0, 14.0, 22.0, 41.0, 19.0, 17.0, 12.0, 17.0, 20.0, 8.0, 15.0, 40.0, 14.0, 17.0, 1.5, 30.0, 18.0, 13.0], [74.0, 2.0, 3.0, 10.0, 4.0, 2.0, 16.0, 29.0, 11.0, 6.0, 4.0, 2.0, 10.0, 10.0, 11.0, 7.0, 2.0, 40.0, 23.5, 10.0, 3.0, 13.0, 7.0, 8.0, 98.5, 17.0, 7.0, 6.0, 2.0, 4.0, 7.0, 14.0, 8.0, 19.0, 9.0, 22.0, 41.0, 20.0, 18.5, 7.0, 1.0, 2.0, 26.0, 8.0, 33.0, 18.0, 18.0, 4.0, 16.0, 17.0, 14.0, 4.0, 21.0, 24.0, 17.0, 4.0, 17.0, 10.0, 13.0, 2.0, 29.0, 2.0, 12.0, 8.0, 20.0, 10.0, 10.0, 16.0, 18.0, 13.5, 8.0, 18.0, 14.0, 38.0, 20.0, 14.0, 7.0, 1.5, 20.0, 24.0, 20.0, 12.0, 24.0, 38.0, 2.0, 18.0, 34.0, 24.0, 35.0, 18.0, 17.5, 17.0, 22.0, 2.0, 7.0, 14.0, 4.0, 14.0, 20.5, 14.5, 6.0, 16.0, 18.0, 38.0, 41.0, 20.0, 22.0, 20.0, 6.0, 18.0, 37.0, 16.0, 14.0, 22.0, 2.0, 4.0, 7.0, 8.0, 4.0, 18.0, 26.0, 23.0, 40.0, 16.0, 15.0, 28.0, 8.0, 2.0, 8.0, 16.0, 12.0, 16.0, 39.0, 5.0, 30.0, 2.0, 16.0, 4.0, 36.0, 22.0, 40.0, 34.0, 18.0, 14.0, 18.0, 22.0, 10.0, 8.0, 5.0, 14.0, 30.0, 12.0, 6.0, 10.0, 15.0, 14.0, 1.0, 40.0, 8.0, 8.0, 16.0, 8.0, 2.0, 12.0, 30.0, 5.0, 20.0, 4.0, 20.0, 30.0, 12.0, 8.0, 34.0, 41.0, 26.0, 20.0, 14.0, 10.0, 14.0, 40.0, 2.0, 34.0, 24.0, 20.0, 32.0, 32.0, 28.0, 21.0, 20.0, 14.0, 13.0, 2.0, 16.0, 20.0, 11.5, 16.0, 20.0, 15.0, 24.5, 22.0, 17.0, 19.0, 15.0, 38.0, 18.0, 18.0, 15.0, 21.0, 21.0, 15.0, 18.0, 2.0, 26.0, 12.0, 15.0, 18.0, 30.0, 40.0, 8.0, 6.0, 6.0, 12.0, 13.0, 10.0, 19.0, 4.0, 11.0, 18.0, 22.0, 34.0, 38.0, 41.0, 8.0, 10.0, 4.0, 22.0, 2.0, 26.0, 2.0, 13.0, 10.0, 20.0, 22.0, 11.0, 14.0, 34.0, 6.0, 12.0, 18.0, 23.0, 24.0, 14.0, 32.0, 22.0, 24.0, 4.0, 6.5, 6.0, 20.5, 19.0, 18.0, 12.0, 15.0, 13.0, 10.0, 20.0, 13.0, 10.5, 16.5, 12.0, 14.5, 8.0, 16.0, 12.0, 14.0, 8.0, 15.0, 14.0, 30.5, 11.0, 6.0, 14.0, 3.5, 19.5, 7.0, 12.0, 14.0, 18.0, 9.0, 6.0, 12.0, 42.5, 9.0, 6.0, 3.0, 31.0, 19.0, 14.0, 10.0, 14.0, 11.0, 12.0, 4.0, 12.0, 29.5, 9.5, 8.0, 7.0, 13.5, 8.0, 3.0, 2.0, 7.0, 7.0, 2.0, 32.0, 3.5, 13.0, 6.0, 21.0, 34.0, 10.0, 10.0, 9.0, 8.0, 29.5, 7.0, 13.0, 2.0, 20.0, 16.0, 10.0, 21.0, 10.0, 18.0, 16.0, 28.0, 24.0, 38.0, 10.0, 16.0, 4.0, 28.0, 12.0, 41.0, 10.0, 22.0, 22.0, 36.0, 2.0, 18.0, 22.0, 4.0, 33.0, 26.0, 3.0, 4.0, 42.0, 32.0, 18.0, 14.5, 14.0, 20.0, 20.5, 30.0, 24.0, 1.0, 40.0, 40.0, 36.0, 12.5, 36.0, 14.0, 4.0, 24.0, 36.0, 31.0, 14.0, 11.0, 34.0, 36.0, 24.0, 32.0, 38.0, 2.0, 3.0, 14.0, 2.0, 24.5, 14.0, 14.0, 2.0, 38.0, 30.5, 8.0, 20.0, 23.0, 23.0, 14.0, 40.0, 12.0, 32.0, 2.0, 20.0, 16.0, 16.0, 22.0, 28.0, 18.0, 18.0, 23.0, 12.0, 22.0, 40.0, 14.0, 32.0, 12.0, 40.0, 10.0, 28.0, 4.0, 14.0, 12.0, 30.0, 22.0, 26.0, 16.0, 12.0, 28.0, 26.0, 4.0, 12.0, 12.0, 10.0, 18.0, 14.0, 20.0, 14.0, 15.0, 24.0, 12.0, 25.0, 6.0, 40.0, 14.0, 31.5, 8.0, 12.0, 24.0, 24.0, 14.0, 26.0, 28.0, 23.5, 6.5, 22.0, 4.0, 10.0, 16.0, 6.0, 12.0, 10.0, 2.0, 12.0, 20.0, 18.0, 16.0, 27.0, 13.0, 19.0, 20.0, 23.5, 8.0, 39.0, 20.0, 12.0, 8.0, 14.0, 16.0, 4.0, 14.0, 20.0, 14.0, 10.0, 12.0, 18.0, 22.0, 23.0, 10.0, 10.0, 14.0, 2.0, 7.0, 30.0, 1.0, 8.0, 12.0, 20.0, 18.0, 13.0, 20.0, 2.5], [36.5, 5.0, 8.0, 9.0, 7.5, 14.0, 10.0, 6.0, 11.0, 13.0, 8.2, 2.0, 9.0, 10.0, 7.0, 5.0, 3.0, 10.0, 10.5, 9.0, 10.0, 6.0, 6.0, 10.0, 22.0, 11.0, 24.0, 26.0, 16.0, 30.0, 26.5, 34.0, 10.0, 18.0, 18.0, 27.0, 6.0, 20.0, 1.0, 9.0, 6.0, 4.0, 10.0, 32.0, 40.0, 30.0, 23.0, 21.0, 15.0, 8.0, 6.0, 16.0, 34.0, 2.0, 40.0, 6.0, 8.0, 9.0, 13.0, 28.0, 22.0, 8.0, 20.0, 29.0, 18.0, 10.0, 8.0, 8.0, 22.0, 6.0, 8.0, 2.0, 6.0, 2.0, 4.0, 24.0, 2.0, 24.0, 4.0, 40.0, 41.0, 30.0, 22.0, 12.0, 26.0, 40.0, 22.0, 18.0, 18.0, 2.0, 43.0, 20.0, 6.0, 16.0, 10.0, 4.0, 16.0, 16.0, 14.0, 30.0, 16.0, 8.0, 18.5, 2.0, 2.0, 4.0, 20.0, 2.0, 16.0, 13.0, 16.0, 9.0, 22.2, 20.0, 2.0, 7.0, 30.0, 28.0, 14.0, 11.0, 14.0, 19.5, 9.0, 2.5, 8.0, 5.0, 4.0, 4.0, 7.0, 8.0, 20.0, 34.5, 16.0, 21.0, 15.0, 16.5, 14.0, 9.0, 5.5, 14.0, 16.0, 8.0, 20.0, 8.0, 24.0, 24.0, 3.0, 26.0, 2.0, 6.0, 42.0, 28.0, 18.0, 24.0, 4.0, 6.0, 12.0, 2.0, 2.0, 4.0, 12.0, 16.0, 44.0, 24.0, 20.0, 2.0, 24.0, 14.0, 40.0, 23.0, 30.0, 2.0, 8.0, 12.0, 12.0, 22.0, 10.0, 11.0, 28.0, 36.0, 32.0, 10.0, 48.0, 18.0, 6.0, 10.0, 16.0, 16.0, 14.0, 8.0, 20.0, 22.0, 34.0, 16.0, 10.0, 12.0, 16.0, 24.0, 24.0, 20.0, 26.0, 12.0, 38.0, 16.0, 36.0, 18.0, 30.0, 14.0, 14.0, 26.0, 17.0, 19.0, 4.0, 30.0, 6.0, 26.0, 20.0, 14.0, 40.0, 19.0, 2.0, 24.0, 40.0, 4.0, 14.0, 25.0, 18.0, 19.0, 9.0, 18.0, 16.0, 16.0, 16.0, 20.0, 16.0, 18.0, 6.0, 15.0, 40.0, 2.0, 24.0, 22.0, 24.0, 6.5], [2.0, 8.0, 8.0, 18.0, 9.0, 9.0, 13.0, 6.5, 2.0, 12.0, 20.0, 8.0, 21.0, 16.0, 18.0, 16.5, 6.0, 13.0, 45.0, 6.0, 8.0, 29.0, 16.0, 15.0, 8.0, 4.0, 14.0, 11.0, 17.0, 12.0, 21.0, 20.0, 17.0, 40.0, 40.0, 22.0, 34.0, 10.0, 16.0, 43.0, 18.0, 16.0, 36.0, 40.0, 14.0, 14.0, 12.0, 19.5, 18.0, 10.0, 4.0, 1.0, 21.0, 28.0, 16.0, 12.0, 8.0, 10.2, 18.0, 12.0, 20.0, 20.0, 2.0, 17.0, 9.0, 32.0, 18.0, 18.0, 18.5, 18.0, 18.0, 44.0, 22.0, 26.5, 10.0, 12.0, 6.0, 18.0, 16.0, 8.0, 9.0, 16.0, 6.0, 32.0, 26.0, 26.0, 6.0, 36.0, 24.0, 38.0, 17.0, 40.0, 15.0, 5.5, 26.0, 22.5, 18.0, 15.0, 17.0, 21.0, 15.0, 15.0, 14.0, 14.0, 12.0, 35.0, 28.0, 40.0, 26.0, 10.0, 20.0, 25.0, 28.0, 30.0, 1.0, 12.0, 5.0, 10.0, 36.0, 40.0, 26.0, 32.0, 12.0, 40.0, 21.0, 10.0, 7.0, 18.0, 33.0, 17.0, 24.0, 15.0, 20.0, 18.0, 10.5, 6.0, 14.0, 16.5, 18.0, 27.0, 41.0, 2.0, 4.0, 19.0, 9.0, 8.0, 12.0, 10.0, 7.0, 4.0, 13.0, 24.0, 12.0, 26.0, 461.0, 14.0, 10.0, 21.0, 10.0, 12.5, 37.0, 14.0, 12.0, 8.0, 12.0, 44.5, 11.0, 14.0, 2.0, 1.0, 12.0, 15.0, 2.0, 18.5, 4.0, 2.0, 28.5, 52.0, 2.0, 31.5, 26.0, 30.0, 20.0, 2.0, 12.0, 23.5, 14.0, 10.0, 20.0, 13.5, 20.5, 4.0, 14.0, 16.0, 4.0, 1.0, 28.0, 3.0, 18.0, 22.0, 14.0, 28.0, 26.0, 38.5, 40.0, 6.0, 26.0, 30.0, 42.0, 18.0, 40.0, 22.0, 4.0, 41.0, 23.0, 40.0, 14.0, 43.0, 48.0, 2.0, 41.0, 26.0, 21.0, 18.0, 21.0, 40.0, 32.0, 20.0, 40.0, 38.0, 30.0, 22.0, 4.0, 17.0, 18.0, 38.0, 19.0, 28.0, 24.5, 38.0, 16.0, 14.0, 4.0, 19.0, 15.0, 18.0, 17.0, 17.0, 19.0, 24.0, 13.0, 26.0, 19.0, 8.0, 29.0, 14.0, 6.0]], "研究方向深度": [[74.0, 36.5, 2.0, 8.0, 7.0, 6.0, 29.0, 18.0, 23.5, 9.2, 7.0, 2.0, 10.0, 40.0, 23.5, 29.0, 7.0, 2.0, 7.0, 4.0, 14.0, 12.0, 19.0, 17.0, 20.0, 41.0, 30.0, 18.5, 16.0, 7.0, 4.0, 1.0, 26.5, 34.0, 18.0, 16.5, 18.0, 18.0, 4.0, 16.0, 17.0, 10.0, 6.0, 14.0, 19.0, 21.0, 21.0, 24.0, 18.0, 4.0, 17.0, 10.0, 13.0, 2.0, 45.0, 2.0, 20.0, 10.0, 6.0, 10.0, 8.0, 34.0, 29.0, 16.0, 18.0, 4.0, 6.0, 18.0, 16.0, 13.5, 12.0, 18.0, 15.0, 14.0, 22.0, 22.0, 8.0, 38.0, 4.0, 4.0, 14.0, 1.0, 14.0, 22.0, 7.0, 41.0, 11.0, 17.0, 20.0, 24.0, 21.0, 20.0, 20.0, 17.0, 12.0, 24.0, 40.0, 38.0, 41.0, 34.0, 35.0, 18.0, 40.0, 17.0, 30.0, 22.0, 21.0, 8.0, 23.0, 25.0, 34.0, 6.0, 8.0, 7.0, 15.0, 16.0, 14.0, 4.0, 12.0, 9.0, 14.0, 43.0, 4.0, 20.5, 18.0, 14.5, 6.0, 16.0, 16.0, 36.0, 24.0, 18.0, 41.0, 40.0, 1.0, 4.0, 14.0, 14.0, 6.0, 22.0, 20.0, 12.0, 19.5, 6.0, 18.0, 37.0, 2.0, 16.0, 13.0, 40.0, 6.0, 8.0, 22.0, 4.0, 7.0, 8.0, 4.0, 13.0, 1.0, 27.0, 21.0, 6.0, 28.0, 40.0, 16.0, 12.0, 16.0, 8.0, 6.0, 15.0, 10.2, 18.0, 28.0, 11.0, 8.0, 2.0, 20.0, 16.0, 12.0, 16.0, 20.0, 39.0, 2.0, 5.0, 30.0, 2.0, 17.0, 16.0, 4.0, 36.0, 22.0, 9.0, 34.0, 32.0, 18.0, 18.0, 28.0, 18.0, 18.0, 14.0, 18.5, 18.0, 18.0, 8.0, 18.0, 27.0, 22.0, 10.0, 22.0, 24.0, 26.5, 18.0, 8.0, 5.0, 2.0, 36.0, 10.0, 14.0, 30.0, 12.0, 6.0, 18.0, 6.0, 16.0, 10.0, 14.0, 8.0, 1.0, 40.0, 8.0, 8.0, 16.0, 8.0, 30.0, 5.0, 9.0, 16.0, 6.0, 18.0, 20.0, 6.0, 30.0, 12.0, 8.0, 34.0, 32.0, 41.0, 34.0, 26.0, 26.0, 20.0, 4.0, 6.0, 36.0, 24.0, 40.0, 38.0, 17.0, 24.0, 40.0, 15.0, 5.5, 24.0, 18.0, 20.0, 26.0, 22.5, 32.0, 28.0, 21.0, 20.0, 14.0, 20.0, 13.0, 10.0, 20.0, 15.0, 17.0, 11.5, 21.0, 24.0, 20.0, 2.0, 15.0, 20.0, 15.0, 15.0, 8.0, 24.5, 14.0, 17.0, 40.0, 19.0, 15.0, 18.0, 41.0, 12.0, 18.0, 35.0, 21.0, 28.0, 14.0, 21.0, 18.0, 2.0, 26.0, 12.0, 22.0, 18.0, 40.0, 14.0, 30.0, 40.0, 10.0, 8.0, 4.0, 20.0, 25.0, 12.0, 28.0, 30.0, 18.0, 24.0, 12.0, 26.0, 19.0, 20.0, 4.0, 10.0, 5.0, 18.0, 15.0, 10.0, 14.0, 22.0, 34.0, 41.0, 36.0, 4.0, 18.0, 40.0, 26.0, 22.0, 32.0, 2.0, 12.0, 40.0, 26.0, 2.0, 10.0, 13.0, 21.0, 20.0, 10.0, 11.0, 14.0, 34.0, 22.0, 7.0, 4.0, 4.0, 10.0, 18.0, 14.0, 16.0, 18.0, 23.0, 33.0, 24.0, 14.0, 17.0, 32.0, 22.0, 24.0, 24.0, 15.0, 16.0, 4.0, 30.0, 20.0, 18.0, 6.5, 10.5, 16.0, 14.0, 20.5, 18.0, 6.0, 14.0, 16.0, 16.5, 8.0, 18.0, 12.0, 18.0, 27.0, 15.0, 13.0, 10.0, 2.0, 20.0, 16.0, 4.0, 13.0, 19.0, 19.5, 9.0, 10.5, 12.0, 8.0, 14.5, 8.0, 15.0, 14.0, 8.0, 12.0, 7.0, 14.0, 30.5, 6.0, 6.0, 16.0, 7.0, 4.0, 14.0, 18.0, 13.0, 2.0, 24.0, 12.0, 14.0, 3.5, 10.0, 19.5, 461.0, 7.0, 5.0, 14.0, 14.0, 18.0, 8.0, 8.0, 21.0, 10.0, 12.5, 6.0, 14.0, 11.0, 12.0, 8.0, 3.0, 31.0, 19.0, 44.5, 11.0, 6.0, 14.0, 11.0, 4.0, 14.0, 2.0, 29.5, 8.0, 11.0, 7.0, 13.5, 8.0, 18.0, 18.5, 3.0, 7.0, 7.0, 4.0, 34.5, 32.0, 14.0, 3.5, 4.0, 2.0, 28.5, 52.0, 34.0, 15.0, 10.0, 12.0, 15.0, 8.0, 16.5, 2.0, 31.5, 26.0, 30.0, 5.0, 10.0, 20.0, 8.0, 23.5, 12.0, 18.0, 28.0, 3.0, 24.0, 20.0, 26.0, 16.0, 6.0, 20.5, 2.0, 4.0, 28.0, 14.0, 22.0, 22.0, 36.0, 16.0, 10.0, 4.0, 1.0, 2.0, 28.0, 6.0, 18.0, 14.0, 20.5, 30.0, 3.0, 1.0, 40.0, 40.0, 5.0, 16.0, 29.5, 36.0, 12.5, 18.0, 22.0, 14.0, 28.0, 40.0, 12.5, 14.0, 34.0, 2.0, 36.0, 24.0, 40.0, 26.0, 38.0, 21.5, 30.0, 45.0, 42.0, 18.0, 18.0, 40.0, 22.0, 31.0, 24.0, 10.0, 14.0, 10.0, 4.0, 38.0, 4.0, 40.0, 8.0, 20.0, 41.0, 23.0, 23.0, 14.0, 18.0, 10.0, 40.0, 14.0, 43.0, 32.0, 2.0, 41.0, 2.0, 2.0, 8.0, 26.0, 21.0, 14.0, 16.0, 16.0, 22.0, 28.0, 21.0, 18.0, 18.0, 34.0, 28.0, 23.0, 10.0, 20.0, 22.0, 16.0, 41.0, 40.0, 40.0, 32.0, 32.0, 24.0, 40.0, 38.0, 40.0, 10.0, 28.0, 14.0, 12.0, 30.0, 30.0, 22.0, 16.0, 36.0, 4.0, 17.0, 18.0, 39.0, 29.0, 22.0, 26.0, 16.0, 38.0, 12.0, 30.0, 28.0, 4.0, 19.0, 28.0, 12.0, 12.0, 24.5, 38.0, 10.0, 16.0, 14.0, 14.0, 22.0, 18.0, 15.0, 25.0, 18.0, 40.0, 40.0, 14.0, 8.0, 19.0, 26.0, 17.0, 14.0, 20.0, 26.0, 19.0, 24.0, 20.0, 23.5, 6.5, 14.0, 22.0, 41.0, 19.0, 22.0, 26.0, 4.0, 16.0, 10.0, 17.0, 20.0, 18.0, 25.0, 16.0, 27.0, 12.0, 13.0, 19.0, 17.0, 19.0, 8.0, 20.0, 19.0, 20.0, 23.5, 20.0, 16.0, 12.0, 14.0, 16.0, 4.0, 20.0, 12.0, 10.0, 14.0, 2.0, 15.0, 2.0, 7.0, 17.0, 1.5, 30.0, 20.0, 13.0, 18.0, 20.0, 13.0, 2.5], [2.0, 10.0, 4.0, 8.0, 7.0, 9.0, 7.5, 2.0, 10.0, 6.0, 11.0, 13.0, 2.0, 8.2, 10.0, 11.0, 9.0, 7.0, 8.0, 10.0, 6.0, 6.0, 6.5, 10.0, 2.0, 8.0, 22.0, 21.0, 16.0, 2.0, 26.0, 17.0, 8.0, 9.0, 1.5, 32.0, 22.0, 40.0, 23.0, 8.0, 14.0, 10.0, 18.0, 40.0, 2.0, 10.0, 8.0, 20.0, 26.0, 14.0, 10.0, 10.0, 14.0, 2.0, 18.0, 2.0, 4.0, 15.0, 26.0, 40.0, 18.0, 2.0, 43.0, 6.0, 10.0, 16.0, 14.0, 30.0, 18.5, 2.0, 2.0, 12.0, 20.0, 15.0, 11.0, 16.0, 9.0, 12.0, 6.0, 10.0, 1.0, 2.0, 8.0, 20.0, 2.0, 6.0, 21.0, 7.0, 4.0, 2.0, 14.0, 16.0, 12.0, 18.0, 24.0, 16.0, 24.0, 40.0, 13.5, 41.0, 8.0, 4.0, 12.0, 2.0, 4.0, 14.5, 38.0, 36.0, 4.0, 20.0, 24.0, 10.0, 24.0, 14.0, 31.0, 11.0, 6.0, 11.0, 28.0, 36.0, 6.0, 22.0, 10.0, 16.0, 18.0, 14.0, 20.0, 20.0, 18.0, 12.0, 40.0, 14.0, 14.0, 4.0, 20.0, 26.0, 38.0, 18.0, 26.0, 30.0, 10.0, 18.0, 2.0, 23.0, 14.0, 26.0, 17.0, 18.0, 24.0, 19.0, 30.0, 6.0, 26.0, 17.0, 12.0, 2.0, 24.0, 24.0, 30.0, 24.0, 26.0, 4.0, 12.0, 14.0, 29.0, 16.0, 16.0, 10.0, 18.0, 8.0, 12.0, 22.0, 24.0], [3.0, 5.0, 16.0, 6.0, 4.0, 10.0, 3.0, 3.0, 98.5, 18.0, 9.0, 4.0, 12.0, 15.0, 15.0, 13.0, 20.0, 12.0, 2.0, 26.0, 28.0, 12.0, 9.0, 8.0, 12.0, 9.0, 15.0, 8.0, 10.0, 13.0, 9.0, 14.0, 12.0, 42.0, 26.0, 26.0, 10.0, 12.0, 14.0, 16.0, 18.0, 8.0, 15.0, 16.0, 14.0, 6.5], [8.0, 8.0, 14.0, 11.0, 2.0, 9.0, 7.0, 9.0, 5.0, 10.0, 10.0, 10.5, 9.0, 17.0, 8.0, 18.0, 12.0, 2.0, 5.0, 6.0, 2.0, 14.0, 10.0, 6.0, 12.0, 14.0, 9.5, 2.5, 5.0, 4.0, 7.0, 9.0, 29.5, 5.5, 2.0, 24.0, 2.0, 14.0, 2.0, 14.0, 38.5, 8.0, 12.0, 12.0, 2.0, 14.0, 16.0, 2.0, 12.0, 12.0, 20.0, 14.0, 40.0, 12.0, 18.0, 9.0, 8.0, 18.0, 22.0, 6.0], [10.0, 184.5, 9.0, 10.0, 4.0, 5.0, 2.0, 11.0, 13.0, 13.0, 4.0, 6.0, 11.0, 9.0, 8.0, 24.0, 22.0, 26.0, 20.0, 8.0, 33.0, 4.0, 13.0, 27.0, 29.0, 12.0, 20.0, 20.0, 6.0, 4.0, 2.0, 12.0, 2.0, 24.0, 10.0, 17.5, 2.0, 10.0, 38.0, 20.0, 16.0, 34.0, 4.0, 18.0, 2.0, 28.0, 26.0, 23.0, 22.0, 20.0, 8.0, 8.0, 44.0, 29.0, 4.0, 8.0, 22.0, 12.0, 6.0, 8.0, 2.0, 4.0, 2.0, 24.0, 34.0, 32.0, 2.0, 16.0, 16.0, 14.0, 22.0, 38.0, 30.0, 15.0, 14.0, 38.0, 12.0, 6.0, 6.0, 1.0, 10.0, 22.0, 11.0, 2.0, 38.0, 8.0, 10.0, 16.0, 22.0, 6.0, 8.0, 12.0, 52.0, 6.0, 19.0, 2.0, 41.0, 16.5, 4.0, 16.0, 10.0, 19.5, 13.0, 22.2, 20.0, 7.0, 30.0, 9.0, 17.5, 42.5, 37.0, 14.0, 19.5, 12.0, 4.0, 12.0, 3.0, 4.0, 13.0, 2.0, 13.0, 16.0, 21.0, 14.0, 8.0, 20.0, 16.0, 2.0, 21.0, 10.0, 20.0, 8.0, 24.0, 10.0, 38.0, 10.0, 4.0, 18.0, 42.0, 28.0, 18.0, 12.0, 10.0, 29.0, 18.0, 22.0, 4.0, 4.0, 33.0, 26.0, 2.0, 3.0, 6.0, 2.0, 32.0, 20.0, 24.0, 12.0, 44.0, 24.0, 36.0, 40.0, 36.0, 23.0, 30.0, 32.0, 22.0, 10.0, 3.0, 14.0, 30.0, 2.0, 10.0, 32.0, 48.0, 24.5, 2.0, 30.5, 40.0, 12.0, 23.0, 48.0, 18.0, 22.0, 16.0, 16.0, 24.0, 30.0, 20.0, 12.0, 14.0, 4.0, 19.0, 16.0, 15.0, 4.0, 6.0, 20.0, 14.0, 31.5, 26.0, 28.0, 13.0, 10.0, 6.0, 2.0, 39.0, 8.0, 14.0, 20.0, 10.0, 23.0, 40.0, 40.0, 14.0, 30.0, 1.0, 24.0, 18.0, 14.0, 6.0]], "JS散度": [[3.0, 9.0, 7.0, 9.0, 23.5, 2.0, 2.0, 3.0, 6.0, 2.0, 19.0, 16.0, 20.0, 8.0, 24.0, 29.0, 18.0, 24.0, 2.0, 18.0, 40.0, 21.0, 10.0, 14.0, 20.0, 6.0, 18.0, 40.0, 10.0, 4.0, 27.0, 28.0, 16.0, 10.2, 8.0, 20.0, 2.0, 36.0, 22.0, 8.0, 2.0, 6.0, 9.0, 26.0, 20.0, 24.0, 10.0, 2.0, 10.0, 24.0, 14.0, 17.0, 38.0, 30.0, 12.0, 14.0, 38.0, 12.0, 18.0, 38.0, 10.0, 40.0, 32.0, 2.0, 22.0, 14.0, 6.0, 32.0, 16.0, 2.0, 2.0, 12.0, 16.0, 8.0, 6.0, 14.0, 3.5, 28.0, 14.0, 12.0, 21.0, 42.5, 3.0, 31.0, 44.5, 14.0, 9.5, 4.0, 8.0, 12.0, 2.5, 20.0, 4.0, 13.0, 21.0, 28.5, 7.0, 5.5, 20.0, 8.0, 20.0, 16.0, 2.0, 28.0, 22.0, 22.0, 26.0, 10.0, 3.0, 12.0, 28.0, 4.0, 14.0, 1.0, 16.0, 10.0, 40.0, 24.0, 12.5, 26.0, 11.0, 38.5, 40.0, 12.0, 2.0, 3.0, 28.0, 14.0, 10.0, 14.0, 38.0, 23.0, 40.0, 32.0, 41.0, 8.0, 20.0, 22.0, 18.0, 22.0, 40.0, 32.0, 30.0, 30.0, 38.0, 16.0, 26.0, 28.0, 30.0, 18.0, 24.0, 12.0, 6.0, 26.0, 20.0, 26.0, 14.0, 2.0, 26.0, 26.0, 28.0, 24.0, 23.5, 16.0, 20.0, 19.0, 18.0, 20.0, 15.0, 14.0, 40.0, 40.0, 2.0, 30.0, 13.0, 24.0], [2.0, 10.0, 6.0, 16.0, 29.0, 6.0, 13.0, 9.0, 5.0, 13.0, 98.5, 7.0, 6.0, 4.0, 2.0, 12.0, 9.0, 24.0, 21.0, 30.0, 18.5, 18.0, 18.0, 16.0, 14.0, 19.0, 4.0, 21.0, 21.0, 17.0, 13.0, 27.0, 2.0, 10.0, 10.0, 18.0, 4.0, 13.5, 20.0, 15.0, 14.0, 22.0, 8.0, 38.0, 4.0, 20.0, 4.0, 41.0, 17.0, 21.0, 20.0, 24.0, 40.0, 38.0, 35.0, 30.0, 22.0, 23.0, 34.0, 15.0, 9.0, 6.0, 4.0, 14.0, 22.0, 20.0, 12.0, 19.5, 37.0, 16.0, 22.0, 2.0, 4.0, 7.0, 8.0, 26.0, 6.0, 22.0, 16.0, 15.0, 18.0, 28.0, 2.0, 20.0, 8.0, 39.0, 17.0, 40.0, 9.0, 34.0, 18.0, 28.0, 18.0, 18.0, 27.0, 10.0, 2.0, 5.0, 14.0, 30.0, 12.0, 16.0, 14.0, 8.0, 8.0, 22.0, 30.0, 20.0, 6.0, 30.0, 8.0, 32.0, 41.0, 26.0, 2.0, 26.0, 24.0, 14.0, 40.0, 2.0, 34.0, 18.0, 22.5, 18.0, 28.0, 14.0, 20.0, 16.0, 21.0, 20.0, 15.0, 14.0, 15.0, 24.5, 21.0, 28.0, 14.0, 15.0, 18.0, 22.0, 40.0, 14.0, 30.0, 8.0, 6.0, 30.0, 18.0, 1.0, 40.0, 4.0, 11.0, 22.0, 4.0, 2.0, 2.0, 12.0, 40.0, 6.0, 13.0, 21.0, 14.0, 4.0, 10.0, 23.0, 24.0, 24.0, 15.0, 30.0, 6.5, 20.5, 19.0, 18.0, 12.0, 27.0, 15.0, 10.5, 18.5, 8.0, 5.0, 15.0, 14.0, 6.0, 16.0, 4.0, 14.0, 7.0, 5.0, 14.0, 14.0, 8.0, 8.0, 37.0, 12.0, 1.0, 2.0, 18.5, 7.0, 7.0, 2.0, 32.0, 14.0, 3.5, 2.0, 6.0, 15.0, 12.0, 16.5, 14.0, 31.5, 26.0, 14.0, 20.0, 10.0, 12.0, 23.5, 12.0, 24.0, 14.0, 18.0, 24.0, 18.0, 42.0, 4.0, 28.0, 2.0, 29.0, 4.0, 4.0, 14.5, 20.0, 24.0, 38.0, 40.0, 40.0, 29.5, 36.0, 12.5, 4.0, 24.0, 36.0, 14.0, 34.0, 24.0, 32.0, 6.0, 26.0, 38.0, 21.5, 30.0, 42.0, 10.0, 48.0, 24.5, 2.0, 10.0, 4.0, 20.0, 41.0, 23.0, 18.0, 40.0, 23.0, 14.0, 48.0, 2.0, 2.0, 18.0, 16.0, 18.0, 21.0, 41.0, 24.0, 30.0, 24.0, 10.0, 12.0, 22.0, 29.0, 16.0, 30.0, 26.0, 4.0, 24.5, 38.0, 4.0, 22.0, 23.0, 14.0, 16.0, 19.0, 15.0, 40.0, 19.0, 30.0, 20.0, 4.0, 19.0, 16.0, 27.0, 9.0, 20.0, 23.5, 12.0, 8.0, 14.0, 4.0, 23.0, 10.0, 18.0, 7.0, 1.0, 24.0, 13.0, 18.0, 2.5], [2.0, 11.0, 18.0, 2.0, 10.0, 23.5, 5.0, 13.0, 9.0, 4.0, 10.0, 17.0, 8.0, 4.0, 33.0, 4.0, 17.0, 18.0, 8.0, 16.0, 16.0, 36.0, 24.0, 18.0, 9.0, 4.0, 5.0, 32.0, 18.0, 18.5, 18.0, 44.0, 12.0, 6.0, 8.0, 2.0, 16.0, 20.0, 14.0, 10.0, 40.0, 24.0, 20.0, 22.0, 40.0, 15.0, 10.0, 22.0, 22.0, 8.0, 16.5, 18.0, 6.0, 13.0, 16.0, 22.2, 2.0, 7.0, 10.0, 9.0, 17.5, 6.0, 14.0, 19.0, 14.0, 29.5, 8.0, 4.0, 52.0, 10.0, 10.0, 8.0, 4.0, 8.0, 2.0, 26.0, 6.0, 12.0, 36.0, 8.0, 20.5, 3.0, 22.0, 2.0, 23.0, 10.0, 32.0, 18.0, 18.0, 4.0, 10.0, 43.0, 14.0, 14.0, 32.0, 38.0, 14.0, 12.0, 4.0, 18.0, 14.0, 20.0, 14.0, 8.0, 40.0, 41.0, 4.0, 12.0, 14.0, 19.0, 20.0, 12.0, 18.0, 6.0, 14.0, 14.0], [74.0, 36.5, 5.0, 8.0, 8.0, 7.5, 14.0, 2.0, 6.0, 11.0, 4.0, 8.2, 11.0, 7.0, 9.0, 10.0, 7.0, 9.0, 10.0, 3.0, 10.5, 17.0, 6.5, 1.0, 18.0, 17.0, 4.0, 6.0, 22.0, 4.0, 9.0, 2.0, 22.0, 8.0, 7.0, 20.5, 14.5, 2.0, 14.0, 8.0, 13.0, 28.0, 40.0, 6.0, 8.0, 12.0, 14.0, 18.0, 8.0, 8.0, 8.0, 18.0, 12.0, 6.0, 15.0, 20.0, 17.0, 20.0, 19.0, 12.0, 18.0, 2.0, 18.0, 28.0, 13.0, 41.0, 8.0, 18.0, 20.0, 11.0, 22.0, 17.0, 14.0, 30.0, 13.0, 19.5, 2.0, 8.0, 14.5, 4.0, 2.0, 11.0, 18.0, 2.0, 9.0, 20.0, 10.0, 9.0, 6.0, 12.0, 11.0, 19.5, 4.0, 5.0, 13.0, 16.0, 21.0, 9.0, 29.5, 8.0, 24.0, 24.0, 18.0, 24.0, 22.0, 16.0, 4.0, 30.0, 12.0, 5.0, 14.0, 2.0, 8.0, 22.0, 2.0, 10.0, 40.0, 14.0, 16.0, 16.0, 10.0, 2.0, 18.0, 12.0, 2.0, 21.0, 16.0, 22.0, 16.0, 12.0, 14.0, 4.0, 26.0, 18.0, 12.0, 26.0, 30.0, 25.0, 17.0, 40.0, 12.0, 24.0, 20.0, 6.5, 14.0, 6.0, 13.0, 19.0, 18.0, 17.0, 8.0, 8.0, 8.0, 22.0, 8.0, 20.0, 20.0], [184.5, 8.0, 29.0, 14.0, 2.0, 6.0, 8.0, 12.0, 20.0, 17.0, 12.0, 34.0, 32.0, 2.0, 16.0, 12.0, 34.0, 13.0, 18.0, 8.0, 2.0, 6.0, 1.0, 5.5, 32.0, 15.0, 40.0, 4.0, 26.0, 19.0, 5.0, 2.0, 18.0, 6.0, 10.0, 14.0, 12.0, 18.0, 7.0, 34.0, 30.0, 18.0, 2.0, 12.0, 6.0, 42.0, 44.0, 36.0, 30.0, 30.5, 10.0, 14.0, 22.0, 25.0, 16.0], [10.0, 2.0, 10.0, 6.0, 7.0, 8.0, 22.0, 11.0, 26.0, 41.0, 16.0, 7.0, 2.0, 18.0, 10.0, 13.0, 12.0, 8.0, 20.0, 34.0, 29.0, 16.0, 8.0, 18.0, 14.0, 6.0, 7.0, 11.0, 20.0, 41.0, 24.0, 10.0, 23.0, 6.0, 14.0, 4.0, 38.0, 40.0, 8.0, 6.0, 16.0, 4.0, 18.0, 6.0, 18.0, 21.0, 12.0, 20.0, 2.0, 18.0, 22.0, 29.0, 18.0, 36.0, 4.0, 10.0, 10.0, 8.0, 40.0, 16.0, 12.0, 5.0, 4.0, 34.0, 34.0, 36.0, 32.0, 21.0, 20.0, 13.0, 2.0, 15.0, 8.0, 15.0, 18.0, 15.0, 26.0, 10.0, 6.0, 12.0, 12.0, 10.0, 20.0, 15.0, 10.0, 34.0, 18.0, 36.0, 26.0, 43.0, 26.0, 16.0, 10.0, 20.0, 10.0, 34.0, 7.0, 4.0, 16.0, 16.0, 33.0, 14.0, 22.0, 24.0, 16.0, 4.0, 20.0, 18.0, 18.0, 8.0, 41.0, 20.0, 16.0, 4.0, 19.0, 16.5, 12.0, 7.0, 7.0, 13.0, 24.0, 26.0, 461.0, 12.0, 12.0, 8.0, 14.0, 10.0, 11.0, 12.0, 2.0, 9.0, 15.0, 13.5, 8.0, 4.0, 4.0, 34.5, 16.0, 5.0, 16.0, 10.0, 21.0, 16.0, 40.0, 10.0, 3.0, 10.0, 20.5, 10.0, 18.0, 33.0, 2.0, 4.0, 1.0, 2.0, 2.0, 32.0, 6.0, 24.0, 14.0, 26.0, 36.0, 31.0, 12.0, 45.0, 22.0, 6.0, 31.0, 8.0, 26.0, 20.0, 28.0, 16.0, 10.0, 20.0, 12.0, 16.0, 14.0, 40.0, 40.0, 12.0, 40.0, 40.0, 20.0, 36.0, 18.0, 39.0, 12.0, 12.0, 10.0, 14.0, 15.0, 17.0, 4.0, 14.0, 24.0, 17.0, 24.0, 26.0, 19.0, 13.0, 26.0, 10.0, 10.0, 2.0, 17.0, 12.0, 39.0, 20.0, 14.0, 2.0, 15.0, 17.0, 30.0, 12.0, 18.0, 22.0, 6.5], [4.0, 8.0, 7.0, 8.0, 10.0, 10.0, 4.0, 9.2, 40.0, 11.0, 10.0, 7.0, 10.0, 20.0, 22.0, 26.5, 34.0, 26.0, 16.5, 6.0, 10.0, 45.0, 16.0, 12.0, 14.0, 1.0, 22.0, 1.5, 18.0, 40.0, 17.5, 17.0, 25.0, 4.0, 43.0, 18.0, 41.0, 1.0, 14.0, 1.0, 23.0, 12.0, 8.0, 11.0, 16.0, 16.0, 30.0, 16.0, 4.0, 22.0, 24.0, 26.5, 10.0, 6.0, 4.0, 38.0, 17.0, 24.0, 26.0, 2.0, 11.5, 16.0, 4.0, 41.0, 35.0, 21.0, 26.0, 20.0, 25.0, 24.0, 14.0, 10.0, 18.0, 12.0, 52.0, 10.5, 16.0, 14.0, 6.0, 2.0, 14.0, 13.0, 9.0, 12.0, 15.0, 20.0, 12.0, 30.5, 10.0, 19.5, 10.0, 19.5, 30.0, 6.0, 18.0, 12.5, 8.0, 11.0, 6.0, 14.0, 11.0, 7.0, 8.0, 3.0, 2.0, 3.0, 15.0, 13.0, 9.0, 2.0, 2.0, 20.0, 28.0, 38.0, 13.5, 4.0, 41.0, 14.0, 2.0, 18.0, 18.0, 36.0, 14.0, 28.0, 20.0, 40.0, 14.0, 30.0, 36.0, 11.0, 22.0, 24.0, 40.0, 14.0, 18.0, 34.0, 28.0, 23.0, 20.0, 28.0, 17.0, 22.0, 38.0, 19.0, 28.0, 16.0, 14.0, 2.0, 18.0, 19.0, 18.0, 6.0, 14.0, 31.5, 22.0, 16.0, 12.0, 18.0, 29.0, 16.0, 16.0, 16.0, 20.0, 14.0, 10.0, 16.0, 10.0, 1.5, 6.0]]}

var data2 =echarts.dataTool.prepareBoxplotData(data1["研究方向广度"]);
var data3 =echarts.dataTool.prepareBoxplotData(data1["研究方向深度"]);
var data4 =echarts.dataTool.prepareBoxplotData(data1["JS散度"]);

var xAxisList = [], yAxisList = [], yData = [];
var varList1 = ['R-Ⅰ', 'R-Ⅱ', 'R-Ⅲ', 'R-Ⅳ'];
var varList2 = ['e-Ⅰ', 'e-Ⅱ', 'e-Ⅲ', 'e-Ⅳ', 'e-Ⅴ'];
var varList3 = ['J-Ⅰ', 'J-Ⅱ', 'J-Ⅲ', 'J-Ⅳ', 'J-Ⅴ', 'J-Ⅵ', 'J-Ⅶ'];
data2 = data2['boxData'];
data3 = data3['boxData'];
data4 = data4['boxData'];

for(var i=0;i<data2.length;i++){
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
            boxWidth:['1%','2%'],
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
                        '研究方向广度类型: ' + param.name,
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
            boxWidth:['1%','2%'],
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
                        '研究方向深度类型: ' + param.name,
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
            boxWidth:['1%','2%'],
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
                        'JS散度类型: ' + param.name,
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

option8 = {
    title: {
            text: '研\n究\n方\n向\n变\n化\n类\n型\n项\n目\n得\n分',
            right: 'right',
            top:"top",
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
        top:'-40%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-35%',
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
        top:'-25%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-15%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-10%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-5%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'0%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'5%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'15%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'20%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'25%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'30%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'35%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'40%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'45%',
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

var data1 = {"研究方向广度": [[10.1, 8.66666666666667, 5.0, 7.0, 4.1, 15.757437007437, 7.0, 1.2, 18.5272727272727, 4.0, 2.61926406926407, 14.0, 0.666666666666667, 5.6, 29.1666666666667, 4.0, 16.1242424242424, 6.09523809523809, 20.8018939393939, 20.345367965368, 7.74401154401154, 19.4761904761905, 4.075, 13.6696608946609, 25.5480519480519, 23.4305555555556, 0.181818181818182, 3.60137085137085, 0.08, 22.0, 4.98113912231559, 7.1005772005772, 44.5493506493507, 11.6014368964369, 23.8731601731602, 25.8125874125874, 8.97207792207792, 8.82940582293523, 12.5974025974026, 9.0, 4.70855810855811, 7.46233766233766, 2.41904761904762, 4.5, 4.0, 15.8943722943723, 27.8780885780886, 7.39393939393939, 6.51868686868687, 12.1496464646465, 29.4666666666667, 17.0222222222222, 9.14285714285714, 25.2524741924742, 2.0, 17.2825396825397, 7.18181818181818, 42.2961904761905, 25.496176046176, 36.4579365079365, 26.1818181818182, 12.0, 19.4362770562771, 20.6236237704504, 11.1300505050505, 23.0142857142857, 2.2, 8.4, 14.9898629148629, 14.7492063492064, 41.1714285714286, 15.0911319073084, 4.36363636363636, 20.379898989899, 24.6380952380952, 21.6922510822511, 10.1090909090909, 20.4138528138528, 16.1944444444444, 25.434595959596, 4.16071428571429, 10.1818181818182, 16.2422077922078, 8.43614718614719, 14.2666666666667, 23.2220418470418, 17.2540909090909, 36.2002164502165, 16.0547619047619, 2.36363636363636, 19.0333333333333, 13.7705555555556, 24.1349350649351, 3.35753968253968, 4.0, 11.9207792207792, 7.0, 5.0, 14.0777777777778, 6.30909090909091, 10.0, 17.2888888888889, 1.0, 8.73333333333333, 7.13333333333333, 5.0, 12.8787878787879, 8.21428571428571, 11.3142857142857, 11.6666666666667, 8.02380952380952, 11.3333333333333, 11.6666666666667, 3.96388888888889, 21.8571428571429, 0.333333333333333, 14.2434343434343, 6.11111111111111, 15.9666666666667, 6.0, 10.0, 18.4396825396825, 4.0, 2.09090909090909, 7.32301587301587, 13.5111111111111, 24.0, 18.8848484848485, 45.5689393939394, 0.666666666666667, 2.81212121212121, 0.427777777777778, 2.38015873015873, 12.0, 30.2666666666667, 8.13333333333333, 1.26666666666667, 1.6, 8.26297258297258, 1.84444444444444, 0.133333333333333, 4.10909090909091, 0.338888888888889, 4.21212121212121, 1.28666666666667, 4.09365079365079, 3.41666666666667, 2.39206349206349, 2.91082972582973, 2.25454545454545, 7.3047619047619, 41.8809523809524, 0.2, 6.36630036630037, 29.3311188811189, 10.1333333333333, 36.2666666666667, 40.0, 12.875, 30.3666666666667, 16.3333333333333, 18.9026984126984, 10.0, 30.1515151515152, 20.2, 33.9568181818182, 18.3, 24.2809523809524, 0.619047619047619, 11.2477272727273, 10.0, 2.0, 1.35411255411255, 40.0, 18.4027777777778, 10.2305555555556, 2.0247113997114, 14.0571428571429, 20.6666666666667, 10.5333333333333, 28.6, 22.4583333333333, 40.3333333333333, 40.8600122100122, 32.6, 16.2555555555556, 1.7093137254902, 40.725, 29.0892857142857, 14.4, 10.2, 2.0, 22.6755411255411, 23.6, 18.4, 8.66666666666667, 4.0, 26.0, 13.0848484848485, 30.2, 26.25, 20.2, 30.8444444444444, 20.1900432900433, 16.6925806219924, 16.880303030303, 23.0, 42.3333333333333, 21.6, 17.2039186303892, 6.0, 21.2254329004329, 20.3666666666667, 8.2, 15.2909090909091, 44.2444444444444, 17.9333333333333, 18.7444444444444, 2.53333333333333, 33.7062770562771, 18.5333333333333, 16.3393939393939, 0.2, 0.0303030303030303], [13.6399855699856, 1.0, 1.2, 2.0, 2.0, 1.13333333333333, 2.0, 8.0, 12.3619047619048, 6.10909090909091, 4.0, 1.0, 4.13333333333333, 10.0, 4.0, 10.0, 9.06666666666667, 4.33333333333333, 17.9682433579492, 7.0, 0.0972222222222222, 5.0, 0.118181818181818, 7.0, 5.0, 10.0, 2.0, 0.0222222222222222, 8.85638528138528, 9.16666666666667, 7.0, 5.36666666666667, 3.28571428571429, 5.0, 7.94141414141414, 15.3253968253968, 4.18181818181818, 21.0880952380952, 10.3453463203463, 23.8795093795094, 44.7047619047619, 14.0, 19.8631313131313, 10.4391233766234, 1.86050420168067, 2.0, 26.0, 8.0, 36.0608280608281, 19.2666666666667, 15.4348484848485, 12.5828571428571, 18.1238095238095, 14.0, 2.0, 21.8530952380952, 25.3878246753247, 14.0, 4.34949494949495, 21.8952380952381, 0.0311111111111111, 13.6939393939394, 2.02, 30.5127960927961, 3.24444444444444, 13.2835497835498, 8.0, 9.67936507936508, 11.5272727272727, 12.2396897546898, 19.5227938727939, 22.6488761238761, 17.6071428571429, 9.0, 17.0719696969697, 17.3767676767677, 0.388039215686275, 41.6531385281385, 3.82162337662338, 1.42122877122877, 8.21438561438561, 18.0059523809524, 15.7085714285714, 3.09116161616162, 2.86666666666667, 2.17142857142857, 6.04545454545454, 0.2, 4.84994172494172, 22.5978354978355, 24.2666666666667, 23.5398268398268, 12.3833333333333, 24.1051282051282, 46.759777999778, 2.0, 20.0, 35.4, 20.4444444444444, 34.0, 22.0888888888889, 22.7333333333333, 17.4798534798535, 22.6285714285714, 2.0, 9.62380952380952, 16.9821428571429, 7.84887612387612, 12.6996336996337, 17.5416666666667, 16.9621367521368, 6.10976190476191, 15.9902097902098, 15.0555555555556, 38.0, 43.8832251082251, 0.142857142857143, 20.0, 20.4154270480122, 23.4710539460539, 1.13333333333333, 18.1102941176471, 29.6949134199134, 18.6857142857143, 14.1516339869281, 10.5932178932179, 0.02, 5.14848484848485, 1.19047619047619, 7.35238095238095, 8.0, 6.85324675324675, 21.4730519480519, 14.8001803751804, 24.3141858141858, 21.4587412587413, 2.4, 16.3555555555556, 28.1183600713012, 8.31298701298701, 2.0, 8.0, 16.1111111111111, 9.16363636363636, 17.504329004329, 35.488961038961, 2.33, 40.5457792207792, 2.0, 13.3145454545455, 8.26983016983017, 36.2, 22.7538461538462, 45.5909090909091, 32.1271284271284, 10.4666666666667, 14.0, 14.3583694083694, 2.72738095238095, 22.0619047619048, 0.163636363636364, 11.0793650793651, 4.19047619047619, 14.0, 33.2398851148851, 12.4472222222222, 4.41071428571429, 10.3857142857143, 15.4669786096257, 16.3425597409127, 0.754511278195489, 46.1876551226551, 10.5871212121212, 8.97012987012987, 14.1904761904762, 11.2887445887446, 12.4, 33.6749250749251, 3.57142857142857, 23.9333333333333, 4.06666666666667, 22.7300505050505, 24.4190476190476, 14.8619047619048, 14.0142857142857, 37.3005928853755, 45.6851370851371, 27.5047619047619, 21.6921356421356, 14.5636363636364, 13.030303030303, 11.791810966811, 40.7857142857143, 2.02274509803922, 38.4952380952381, 22.3357142857143, 22.6126984126984, 32.0, 33.3160173160173, 37.0222222222222, 3.62565656565657, 24.9930236430236, 4.0, 15.6031746031746, 14.4, 20.5714285714286, 0.459523809523809, 8.18712121212121, 2.0, 22.4214141414141, 17.0352924852925, 0.495757575757576, 25.8928571428571, 0.666666666666667, 21.6333333333333, 19.5154761904762, 19.5714285714286, 15.772027972028, 38.6666666666667, 18.1515151515152, 20.3333333333333, 17.9953102453102, 22.3333333333333, 22.2888888888889, 19.568947457771, 18.3333333333333, 2.4, 31.1838661338661, 14.952380952381, 16.0266666666667, 18.8747863247863, 27.2549062049062, 41.6488095238095, 12.0382395382395, 7.69480519480519, 0.158333333333333, 6.60515151515152, 13.7601787101787, 12.1559523809524, 6.0, 22.350222000222, 5.61230158730159, 12.2854545454545, 21.2189393939394, 23.4857142857143, 34.0, 41.9264402264402, 44.6722444222444, 8.0, 11.3361471861472, 0.0277777777777778, 23.4984126984127, 2.0, 28.0731601731602, 2.0, 18.6524364524365, 10.0, 22.6666666666667, 23.8, 11.468556998557, 14.9995670995671, 34.1980519480519, 0.266666666666667, 2.0, 11.1761904761905, 4.13333333333333, 20.5357142857143, 23.6333333333333, 24.4072222222222, 14.4666666666667, 36.9572510822511, 22.7827496175322, 25.3333333333333, 2.0, 4.45242424242424, 6.16666666666667, 24.5924603174603, 20.0571428571429, 18.4916666666667, 16.3714285714286, 15.047619047619, 6.30699300699301, 8.90476190476191, 21.8730158730159, 17.6436507936508, 14.0132135408451, 14.012987012987, 13.8025252525253, 16.8333333333333, 9.06580086580087, 3.0, 15.1069518716578, 1.29090909090909, 2.66666666666667, 1.0, 10.7921536796537, 17.4011904761905, 9.0, 13.4805555555556, 11.1060606060606, 0.006060606060606, 1.0, 5.0, 2.0, 0.223232323232323, 4.16666666666667, 12.3333333333333, 3.8969696969697, 8.33333333333333, 9.28571428571429, 11.0, 12.2939393939394, 7.60909090909091, 8.00952380952381, 2.0, 40.5, 14.2380952380952, 9.28571428571429, 4.39545454545455, 31.75, 14.792069042069, 19.0, 12.7030303030303, 21.6666666666667, 11.6805555555556, 14.0, 7.0, 7.0, 30.8428571428571, 24.4285714285714, 16.4583333333333, 11.2916666666667, 11.2833333333333, 6.93333333333333, 2.0, 2.28571428571429, 2.0, 3.0, 9.0, 31.3333333333333, 8.0, 12.0, 6.2, 20.0, 21.2857142857143, 10.2095238095238, 9.16666666666667, 6.33333333333333, 14.0119047619048, 11.5812749342161, 2.0, 2.0, 22.0, 16.5230769230769, 11.4, 23.2424242424242, 10.3, 4.70833333333333, 17.0666666666667, 30.0, 25.7901515151515, 38.4, 12.9116883116883, 6.0, 0.6, 5.86666666666667, 0.563636363636364, 35.0, 12.3333333333333, 41.2993939393939, 8.05714285714286, 22.8666666666667, 27.5333333333333, 35.1206349206349, 2.0, 19.3666666666667, 22.3333333333333, 2.02777777777778, 1.0, 0.866666666666667, 2.0, 0.2, 0.866666666666667, 1.93333333333333, 0.133333333333333, 1.0, 1.6969696969697, 2.35833333333333, 1.07878787878788, 2.2, 2.86666666666667, 0.2, 0.666666666666667, 0.2, 3.6, 1.28088023088023, 0.2, 5.73333333333333, 0.5, 2.97560606060606, 5.66111111111111, 0.428571428571428, 0.2, 45.5166666666667, 35.1785714285714, 18.421645021645, 17.35, 17.1325396825397, 20.8666666666667, 21.3444444444444, 30.5333333333333, 25.4642424242424, 1.53571428571429, 41.152380952381, 44.1357142857143, 7.84569892473118, 2.68831168831169, 0.133333333333333, 32.6666666666667, 12.8392857142857, 30.0, 16.0, 4.0, 24.5333333333333, 37.2705128205128, 21.6, 14.674358974359, 10.0, 34.0952380952381, 38.3333333333333, 24.4222222222222, 36.0, 39.044474969475, 2.0, 3.38030303030303, 16.0, 2.0, 25.1284759358289, 8.2, 15.1787878787879, 2.46969696969697, 34.1333333333333, 29.3714285714286, 0.0333333333333333, 8.0, 21.8444444444444, 13.3333333333333, 26.7301587301587, 14.0, 43.7777777777778, 12.125, 35.4174025974026, 2.71666666666667, 20.0, 2.70826534576535, 18.5333333333333, 16.3333333333333, 23.5428571428571, 28.2333333333333, 16.8, 18.8816738816739, 1.21901154401154, 12.6666666666667, 24.2857142857143, 40.2, 15.4666666666667, 32.4, 12.952380952381, 42.4, 8.18888888888889, 28.0, 2.0, 18.9986813186813, 8.25, 30.3611111111111, 23.3738095238095, 1.0, 12.2, 12.1166666666667, 22.0, 32.5610805860806, 4.0, 13.5892857142857, 16.1609307359307, 10.9073593073593, 18.3333333333333, 14.3333333333333, 0.333333333333333, 20.0, 14.6666666666667, 15.0166666666667, 27.4666666666667, 12.0, 10.0, 6.0, 46.5880952380952, 14.4318181818182, 32.1997835497835, 8.0, 14.4, 25.2205128205128, 14.850937950938, 0.794250194250194, 14.8333333333333, 27.054797979798, 28.0, 23.0035714285714, 6.5, 22.0, 4.0, 8.0, 15.5424242424242, 2.0, 12.0, 10.1, 2.0, 11.1666666666667, 20.3272727272727, 26.9895382395382, 18.3333333333333, 30.2969696969697, 13.3655844155844, 17.7333333333333, 20.0, 23.9337662337662, 8.0, 36.4045954045954, 20.3333333333333, 12.0, 8.0, 16.6666666666667, 17.155303030303, 4.12820512820513, 14.0, 20.3581780538302, 14.6857142857143, 11.1833333333333, 15.2727272727273, 18.2, 25.4, 23.9079365079365, 10.0, 10.2, 14.5047619047619, 4.0, 4.89580770107086, 1.46785714285714, 0.325, 0.0818181818181818, 2.2, 13.2944444444444, 20.2, 18.8666666666667, 14.3493506493506, 0.2, 20.7090909090909, 3.26439393939394, 1.21818181818182, 2.51515151515152], [19.4372155622156, 3.0, 4.0, 7.2, 4.6, 14.0, 9.5, 3.0, 9.27777777777778, 3.23055555555556, 5.08181818181818, 2.2, 5.2, 12.5, 9.94090909090909, 0.0833333333333333, 4.11111111111111, 3.59090909090909, 5.0, 8.16666666666667, 9.27142857142857, 15.0, 6.60714285714286, 4.0, 10.3809523809524, 24.0, 13.525, 25.3984848484848, 27.24, 6.0, 32.1, 20.0090909090909, 21.330303030303, 12.0, 18.9162114845938, 0.787619047619048, 26.3720390720391, 10.5252918145432, 18.0, 0.133333333333333, 4.07727272727273, 11.9314790764791, 3.08454545454545, 2.46666666666667, 0.812987012987013, 3.71471861471861, 1.2, 3.86666666666667, 3.08095238095238, 0.535384615384615, 3.76666666666667, 0.290909090909091, 10.5238095238095, 29.6318348318348, 40.8666666666667, 30.8952380952381, 23.8380952380952, 20.0, 13.3549783549784, 8.0, 6.36309523809524, 20.6034632034632, 35.1011904761905, 2.0, 40.9551820728291, 5.0036075036075, 8.11904761904762, 9.85714285714286, 17.99222999223, 32.3571428571429, 22.1246753246753, 12.2457792207792, 10.0, 29.7714285714286, 14.8809523809524, 12.0, 8.0, 8.0, 22.3333333333333, 8.9, 8.0, 0.353333333333333, 9.17142857142857, 2.24761904761905, 4.0, 24.6133333333333, 2.0, 26.7479797979798, 0.533333333333333, 1.49206349206349, 2.5, 41.7048319327731, 45.4134199134199, 30.4, 24.180303030303, 12.0, 19.2, 40.1666666666667, 23.2545454545455, 18.5848484848485, 21.9181128050693, 2.0, 43.0, 24.6723758125932, 5.61904761904762, 17.5075757575758, 10.4, 4.03571428571429, 19.9346681096681, 12.9816017316017, 10.0, 18.0, 12.0, 9.50952380952381, 15.6833333333333, 2.96363636363636, 5.0, 2.16666666666667, 14.0, 12.0, 13.3761904761905, 9.0, 8.05555555555556, 21.0691919191919, 14.1333333333333, 7.0, 30.0, 27.5090909090909, 10.5333333333333, 12.3239538239538, 16.0, 24.3833333333333, 2.0, 3.0, 9.0, 3.0, 4.24166666666667, 6.1, 7.0, 2.0, 20.0972222222222, 28.1401709401709, 14.0, 17.4371017871018, 15.1666666666667, 11.8, 12.0, 7.1, 0.285714285714286, 14.7350649350649, 18.6, 6.66666666666667, 22.4, 8.13333333333333, 24.1545454545455, 24.0181818181818, 0.791666666666667, 3.75854978354978, 29.9535575535576, 0.0666666666666667, 0.715151515151515, 0.698484848484848, 3.33333333333333, 42.7, 31.0666666666667, 18.0, 24.0, 4.16363636363636, 0.181818181818182, 0.866666666666667, 0.823076923076923, 0.2, 2.66666666666667, 5.93333333333333, 0.666666666666667, 1.53333333333333, 0.4, 0.133333333333333, 1.04800307219662, 2.24761904761905, 3.0, 0.866666666666667, 2.0, 1.15238095238095, 0.866666666666667, 0.2, 2.68528138528139, 0.2, 3.28046642899584, 4.7, 10.0, 16.3914141414141, 43.9533333333333, 24.0, 23.2333333333333, 2.0, 24.0, 14.2666666666667, 42.2, 14.8666666666667, 32.0416666666667, 2.0, 12.2, 14.1507936507937, 12.2857142857143, 25.2315018315018, 10.0, 11.0, 28.0, 38.0, 34.0, 10.0, 42.8010101010101, 17.0666666666667, 6.0, 2.0, 14.2, 16.0, 0.2, 14.0, 8.45, 20.0, 22.2151515151515, 14.1333333333333, 16.6857142857143, 10.0, 12.1428571428571, 16.8333333333333, 24.1321428571429, 22.0, 0.866666666666667, 20.2, 27.4, 12.3333333333333, 41.6190476190476, 17.0666666666667, 38.3611111111111, 4.3031746031746, 0.151515151515151, 20.2280441780442, 32.6666666666667, 16.23614996115, 14.1428571428571, 26.0, 16.7636363636364, 11.8, 4.0, 32.5636363636364, 6.57142857142857, 26.0, 20.0, 14.0, 40.2, 19.0, 2.0, 24.0, 43.0, 14.8666666666667, 25.8888888888889, 20.6666666666667, 19.2380952380952, 9.0, 18.0, 16.0, 18.963082437276, 16.3777777777778, 20.8076923076923, 16.0, 18.0, 6.0, 13.3484848484848, 40.7311827956989, 2.01166666666667, 2.84587912087912, 0.142857142857143, 23.2380952380952, 0.6, 0.666666666666667], [4.32272727272727, 4.0, 4.0, 18.0, 3.0, 10.0, 14.8333333333333, 8.66666666666667, 6.5, 2.01818181818182, 12.7948051948052, 13.4843073593074, 8.0, 16.7484848484848, 16.7603896103896, 20.942291042291, 21.4762265512266, 1.37619047619048, 13.2636363636364, 27.7260683760684, 2.0, 10.1203740703741, 35.2142135642136, 18.5775335775336, 5.70608835608836, 20.2167832167832, 8.70363636363636, 0.174242424242424, 4.0, 15.2344444444444, 2.51515151515152, 1.73321526957891, 0.941269841269841, 4.76176470588235, 2.4537349904997, 12.0, 24.662814962815, 16.0, 22.9261882561883, 44.0341991341991, 40.9544372294372, 1.96666666666667, 22.8204545454545, 37.7397419247419, 10.7545454545455, 17.5095682095682, 21.6254834054834, 18.2857142857143, 16.8888888888889, 36.4477855477855, 40.0, 14.2, 14.4, 11.0853701853702, 18.4662041467305, 22.1943722943723, 11.0952380952381, 4.22423576423576, 24.6, 28.0, 18.5510256410256, 16.3115218115218, 2.2052380952381, 11.5336435786436, 18.5, 12.6, 21.1139393939394, 10.7757575757576, 4.75324675324675, 17.6152347652348, 9.2, 31.4094017094017, 24.0699327369808, 19.1095238095238, 19.0785714285714, 14.2909090909091, 19.0, 29.9951426024955, 22.1666666666667, 4.00008658008658, 10.3497835497835, 2.0, 13.0511904761905, 6.81335331335331, 19.2929292929293, 16.7106643356643, 8.7910989010989, 7.45757575757576, 18.8792929292929, 6.87181152181152, 33.5761904761905, 27.3294372294372, 26.5, 6.0, 41.5333333333333, 24.0, 38.6666666666667, 5.80952380952381, 40.7199222999223, 15.7619047619048, 6.7, 30.4, 23.2, 15.0931068931069, 15.2, 11.2722222222222, 21.3333333333333, 15.4429292929293, 12.9621774467363, 15.1642857142857, 15.1240626040626, 11.0, 31.6666666666667, 31.75781995782, 44.2138888888889, 26.6136507936508, 10.0, 20.2404761904762, 25.1367965367965, 26.1454545454545, 27.0666666666667, 3.82954545454545, 12.5485714285714, 8.43221611721612, 12.9312097812098, 41.4184183463595, 46.0333333333333, 28.3967171717172, 32.1666666666667, 12.1666666666667, 42.2145998445998, 6.85714285714286, 0.2, 7.0, 18.5231608770633, 0.279220779220779, 38.3255411255411, 16.3701298701299, 28.8178958107596, 15.6994949494949, 20.1636363636364, 18.5324242424242, 12.9165007215007, 1.94974025974026, 15.3910755910756, 22.8766233766234, 18.167619047619, 31.9892496392496, 49.0357142857143, 0.390476190476191, 0.229390054390054, 22.4244422244422, 5.0, 8.59880952380952, 12.2666666666667, 8.0, 4.08888888888889, 6.19047619047619, 5.0, 5.41515151515152, 5.08571428571429, 5.87445887445887, 12.5755050505051, 24.2393939393939, 3.15277777777778, 50.9042450887033, 0.2, 10.0666666666667, 5.61471861471861, 22.3761904761905, 9.80952380952381, 10.5818181818182, 13.0573737373737, 4.5, 8.65384615384615, 15.852380952381, 13.1428571428571, 15.1, 12.0127206127206, 12.0, 2.0, 4.0, 5.33333333333333, 13.4727272727273, 1.125, 0.1, 14.1111111111111, 4.5, 7.53333333333333, 4.0, 35.0, 22.6666666666667, 2.0, 31.3973194933721, 26.5153846153846, 33.5409090909091, 17.541889483066, 2.0, 13.1333333333333, 24.1360195360195, 14.0, 10.6051515151515, 22.0, 15.9282467532468, 0.765476190476191, 20.7497474747475, 1.03982683982684, 1.82532467532468, 0.666666666666667, 14.7214285714286, 19.7, 2.56804029304029, 2.0, 0.733333333333333, 0.606451612903226, 3.2, 0.380952380952381, 0.0857142857142857, 4.2, 8.73809523809524, 3.26666666666667, 1.0, 2.5, 12.2186868686869, 4.77142857142857, 0.2, 19.8606060606061, 14.0, 14.08, 28.5277777777778, 29.7333333333333, 25.347619047619, 40.3454545454545, 5.93015873015873, 30.0, 40.1666666666667, 18.0, 43.6733333333333, 0.290909090909091, 1.26666666666667, 4.13333333333333, 42.1454545454545, 26.102380952381, 44.0348124098124, 12.4104166666667, 43.9333333333333, 30.4742063492063, 2.0, 41.9939393939394, 27.2380952380952, 20.1624542124542, 21.3005355276907, 20.6666666666667, 41.5333333333333, 25.0, 20.0, 40.3333333333333, 39.3333333333333, 30.3333333333333, 22.3333333333333, 8.98888888888889, 4.35595238095238, 21.7422161172161, 38.5333333333333, 8.55555555555556, 31.7969696969697, 25.2658008658009, 41.5761904761905, 17.6190476190476, 14.0, 4.0, 21.9714285714286, 13.6511266511267, 16.8124542124542, 16.8761904761905, 18.7828282828283, 0.0666666666666667, 19.7151515151515, 23.1428571428571, 13.3333333333333, 1.26666666666667, 26.6666666666667, 19.8447552447552, 12.7333333333333, 30.0, 2.0, 0.2, 2.2, 1.22640692640693, 0.125, 0.5, 16.8939393939394, 3.14411421911422, 2.2, 0.394602300636783, 4.2]], "研究方向深度": [[13.6399855699856, 19.4372155622156, 4.32272727272727, 4.0, 7.0, 4.1, 12.3619047619048, 18.0, 4.0, 18.5272727272727, 2.61926406926407, 9.06666666666667, 4.33333333333333, 14.0, 17.9682433579492, 7.0, 5.0, 0.118181818181818, 8.66666666666667, 29.1666666666667, 7.0, 3.28571428571429, 7.94141414141414, 4.0, 15.3253968253968, 12.7948051948052, 21.0880952380952, 16.1242424242424, 13.4843073593074, 44.7047619047619, 32.1, 19.8631313131313, 16.7603896103896, 10.4391233766234, 6.09523809523809, 1.86050420168067, 20.0090909090909, 21.330303030303, 20.942291042291, 21.4762265512266, 19.2666666666667, 15.4348484848485, 12.5828571428571, 18.1238095238095, 12.0, 1.37619047619048, 14.0, 20.8018939393939, 20.345367965368, 21.8530952380952, 25.3878246753247, 18.9162114845938, 4.34949494949495, 21.8952380952381, 0.0311111111111111, 13.6939393939394, 2.02, 27.7260683760684, 3.24444444444444, 9.67936507936508, 11.5272727272727, 2.0, 12.2396897546898, 10.1203740703741, 7.74401154401154, 35.2142135642136, 19.5227938727939, 19.4761904761905, 4.075, 10.5252918145432, 22.6488761238761, 18.5775335775336, 17.6071428571429, 13.6696608946609, 5.70608835608836, 17.0719696969697, 20.2167832167832, 17.3767676767677, 25.5480519480519, 23.4305555555556, 8.70363636363636, 0.388039215686275, 0.181818181818182, 41.6531385281385, 0.174242424242424, 3.82162337662338, 4.0, 8.21438561438561, 3.60137085137085, 0.08, 15.2344444444444, 4.07727272727273, 15.7085714285714, 22.0, 2.46666666666667, 3.09116161616162, 7.1005772005772, 1.73321526957891, 3.08095238095238, 0.535384615384615, 0.941269841269841, 2.17142857142857, 3.76666666666667, 2.4537349904997, 22.5978354978355, 24.2666666666667, 24.662814962815, 16.0, 23.5398268398268, 22.9261882561883, 12.3833333333333, 24.1051282051282, 44.0341991341991, 46.759777999778, 44.5493506493507, 35.4, 34.0, 22.0888888888889, 40.9544372294372, 17.4798534798535, 30.8952380952381, 22.8204545454545, 20.0, 11.6014368964369, 23.8731601731602, 25.8125874125874, 37.7397419247419, 8.97207792207792, 8.82940582293523, 9.62380952380952, 13.3549783549784, 17.5095682095682, 16.9821428571429, 7.84887612387612, 12.5974025974026, 9.0, 12.6996336996337, 21.6254834054834, 4.70855810855811, 17.5416666666667, 18.2857142857143, 16.9621367521368, 6.10976190476191, 16.8888888888889, 15.9902097902098, 36.4477855477855, 7.46233766233766, 15.0555555555556, 43.8832251082251, 40.0, 2.41904761904762, 4.5, 0.142857142857143, 14.2, 14.4, 6.36309523809524, 20.4154270480122, 23.4710539460539, 11.0853701853702, 18.4662041467305, 1.13333333333333, 18.1102941176471, 29.6949134199134, 2.0, 18.6857142857143, 15.8943722943723, 40.9551820728291, 5.0036075036075, 8.11904761904762, 10.5932178932179, 5.14848484848485, 1.19047619047619, 7.35238095238095, 8.0, 17.99222999223, 4.22423576423576, 27.8780885780886, 24.6, 7.39393939393939, 28.0, 21.4587412587413, 18.5510256410256, 16.3115218115218, 2.4, 2.2052380952381, 6.51868686868687, 16.3555555555556, 11.5336435786436, 18.5, 28.1183600713012, 12.1496464646465, 8.31298701298701, 2.0, 21.1139393939394, 16.1111111111111, 9.16363636363636, 17.504329004329, 10.0, 35.488961038961, 4.75324675324675, 2.33, 40.5457792207792, 2.0, 17.6152347652348, 13.3145454545455, 8.26983016983017, 36.2, 22.7538461538462, 9.2, 32.1271284271284, 31.4094017094017, 10.4666666666667, 24.0699327369808, 29.4666666666667, 17.0222222222222, 19.1095238095238, 14.0, 19.0785714285714, 14.2909090909091, 19.0, 9.14285714285714, 14.3583694083694, 2.72738095238095, 25.2524741924742, 22.0619047619048, 0.163636363636364, 22.1666666666667, 17.2825396825397, 4.00008658008658, 14.8809523809524, 11.0793650793651, 4.19047619047619, 7.18181818181818, 42.2961904761905, 10.3497835497835, 14.0, 33.2398851148851, 12.4472222222222, 6.81335331335331, 19.2929292929293, 4.41071428571429, 16.7106643356643, 10.3857142857143, 16.3425597409127, 8.0, 0.754511278195489, 46.1876551226551, 10.5871212121212, 8.97012987012987, 14.1904761904762, 11.2887445887446, 33.6749250749251, 3.57142857142857, 7.45757575757576, 18.8792929292929, 6.87181152181152, 25.496176046176, 22.7300505050505, 9.17142857142857, 24.4190476190476, 14.8619047619048, 14.0142857142857, 37.3005928853755, 33.5761904761905, 45.6851370851371, 36.4579365079365, 27.3294372294372, 27.5047619047619, 21.6921356421356, 4.0, 6.0, 41.5333333333333, 24.0, 40.7857142857143, 38.6666666666667, 5.80952380952381, 24.6133333333333, 40.7199222999223, 15.7619047619048, 6.7, 22.3357142857143, 19.4362770562771, 22.6126984126984, 30.4, 23.2, 33.3160173160173, 37.0222222222222, 3.62565656565657, 24.9930236430236, 4.0, 20.6236237704504, 15.6031746031746, 11.1300505050505, 20.5714285714286, 0.459523809523809, 15.2, 11.2722222222222, 8.18712121212121, 21.3333333333333, 26.7479797979798, 23.0142857142857, 2.2, 15.4429292929293, 22.4214141414141, 12.9621774467363, 1.49206349206349, 17.0352924852925, 8.4, 0.495757575757576, 25.8928571428571, 0.666666666666667, 15.1240626040626, 19.5154761904762, 41.7048319327731, 19.5714285714286, 15.772027972028, 18.1515151515152, 45.4134199134199, 11.0, 20.3333333333333, 31.6666666666667, 22.3333333333333, 31.75781995782, 14.9898629148629, 22.2888888888889, 18.3333333333333, 2.4, 31.1838661338661, 14.952380952381, 24.180303030303, 18.8747863247863, 44.2138888888889, 15.0911319073084, 27.2549062049062, 41.6488095238095, 10.0, 12.0382395382395, 0.158333333333333, 4.36363636363636, 20.2404761904762, 25.1367965367965, 13.7601787101787, 26.1454545454545, 27.0666666666667, 20.379898989899, 24.6380952380952, 12.5485714285714, 19.2, 22.350222000222, 21.6922510822511, 5.61230158730159, 10.1090909090909, 8.43221611721612, 21.2189393939394, 20.4138528138528, 12.9312097812098, 16.1944444444444, 23.4857142857143, 34.0, 44.6722444222444, 41.4184183463595, 21.9181128050693, 46.0333333333333, 28.3967171717172, 23.4984126984127, 32.1666666666667, 2.0, 12.1666666666667, 42.2145998445998, 28.0731601731602, 2.0, 10.4, 18.6524364524365, 6.85714285714286, 22.6666666666667, 0.2, 11.468556998557, 14.9995670995671, 34.1980519480519, 25.434595959596, 7.0, 4.16071428571429, 4.03571428571429, 10.1818181818182, 18.5231608770633, 16.2422077922078, 0.279220779220779, 4.13333333333333, 19.9346681096681, 20.5357142857143, 23.6333333333333, 38.3255411255411, 24.4072222222222, 14.4666666666667, 16.3701298701299, 36.9572510822511, 22.7827496175322, 25.3333333333333, 28.8178958107596, 15.6994949494949, 17.2540909090909, 2.0, 36.2002164502165, 20.1636363636364, 18.5324242424242, 4.45242424242424, 12.9165007215007, 12.9816017316017, 16.0547619047619, 24.5924603174603, 18.4916666666667, 1.94974025974026, 15.3910755910756, 12.0, 22.8766233766234, 9.50952380952381, 18.167619047619, 16.3714285714286, 19.0333333333333, 31.9892496392496, 15.047619047619, 6.30699300699301, 8.90476190476191, 0.390476190476191, 21.8730158730159, 13.7705555555556, 0.229390054390054, 17.6436507936508, 22.4244422244422, 24.1349350649351, 5.0, 14.0132135408451, 13.8025252525253, 8.59880952380952, 16.8333333333333, 9.06580086580087, 3.35753968253968, 3.0, 1.0, 10.7921536796537, 17.4011904761905, 11.9207792207792, 7.0, 13.4805555555556, 11.1060606060606, 5.0, 5.0, 12.0, 4.08888888888889, 6.19047619047619, 5.0, 14.0777777777778, 17.2888888888889, 5.41515151515152, 2.0, 1.0, 0.223232323232323, 5.08571428571429, 5.87445887445887, 12.5755050505051, 12.3333333333333, 3.8969696969697, 3.15277777777778, 8.73333333333333, 8.33333333333333, 50.9042450887033, 9.28571428571429, 7.13333333333333, 0.2, 10.0666666666667, 12.2939393939394, 7.60909090909091, 8.21428571428571, 11.3142857142857, 22.3761904761905, 9.80952380952381, 10.5818181818182, 9.28571428571429, 4.5, 12.3239538239538, 8.65384615384615, 15.852380952381, 4.39545454545455, 31.75, 14.792069042069, 15.1, 12.0127206127206, 8.02380952380952, 21.6666666666667, 11.6805555555556, 11.3333333333333, 7.0, 12.0, 2.0, 2.0, 30.8428571428571, 16.4583333333333, 3.96388888888889, 11.2916666666667, 11.2833333333333, 6.93333333333333, 21.8571428571429, 0.333333333333333, 2.28571428571429, 14.1111111111111, 6.11111111111111, 9.0, 7.0, 4.5, 28.1401709401709, 31.3333333333333, 15.9666666666667, 8.0, 6.0, 4.0, 35.0, 22.6666666666667, 21.2857142857143, 10.0, 10.2095238095238, 18.4396825396825, 15.1666666666667, 14.0119047619048, 11.8, 2.0, 31.3973194933721, 26.5153846153846, 33.5409090909091, 7.32301587301587, 11.4, 17.541889483066, 6.66666666666667, 24.1360195360195, 13.5111111111111, 0.791666666666667, 18.8848484848485, 30.0, 3.75854978354978, 25.7901515151515, 22.0, 29.9535575535576, 6.0, 0.765476190476191, 0.666666666666667, 0.0666666666666667, 5.86666666666667, 3.33333333333333, 20.7497474747475, 2.38015873015873, 1.03982683982684, 1.82532467532468, 0.666666666666667, 0.563636363636364, 31.0666666666667, 14.7214285714286, 22.8666666666667, 27.5333333333333, 35.1206349206349, 19.7, 1.0, 1.26666666666667, 2.0, 0.2, 0.866666666666667, 0.2, 2.0, 0.133333333333333, 1.0, 1.6, 1.6969696969697, 8.26297258297258, 2.86666666666667, 3.2, 1.84444444444444, 0.666666666666667, 0.133333333333333, 3.6, 4.10909090909091, 0.0857142857142857, 8.73809523809524, 2.97560606060606, 4.21212121212121, 1.28666666666667, 5.66111111111111, 3.26666666666667, 1.0, 2.0, 4.09365079365079, 0.2, 2.68528138528139, 3.41666666666667, 2.5, 2.39206349206349, 0.2, 2.25454545454545, 12.2186868686869, 7.3047619047619, 18.421645021645, 17.1325396825397, 21.3444444444444, 30.5333333333333, 4.77142857142857, 1.53571428571429, 41.152380952381, 44.1357142857143, 6.36630036630037, 7.84569892473118, 16.3914141414141, 0.133333333333333, 0.2, 29.3311188811189, 32.6666666666667, 12.8392857142857, 19.8606060606061, 14.0, 14.08, 28.5277777777778, 42.2, 12.875, 14.674358974359, 34.0952380952381, 2.0, 38.3333333333333, 24.4222222222222, 40.3454545454545, 5.93015873015873, 39.044474969475, 18.9026984126984, 30.1515151515152, 20.2, 40.1666666666667, 17.0666666666667, 18.0, 43.6733333333333, 0.290909090909091, 33.9568181818182, 24.2809523809524, 11.2477272727273, 15.1787878787879, 10.0, 4.13333333333333, 34.1333333333333, 0.2, 2.0, 40.0, 0.0333333333333333, 8.0, 21.8444444444444, 42.1454545454545, 13.3333333333333, 26.7301587301587, 14.0, 18.4027777777778, 10.2305555555556, 44.0348124098124, 12.4104166666667, 43.9333333333333, 35.4174025974026, 2.0, 41.9939393939394, 2.71666666666667, 2.0247113997114, 8.45, 27.2380952380952, 20.1624542124542, 14.0571428571429, 18.5333333333333, 16.3333333333333, 23.5428571428571, 28.2333333333333, 20.6666666666667, 18.8816738816739, 20.6666666666667, 14.1333333333333, 28.6, 1.21901154401154, 10.0, 22.4583333333333, 24.2857142857143, 16.8333333333333, 40.3333333333333, 41.5333333333333, 40.8600122100122, 32.4, 25.0, 22.0, 40.3333333333333, 39.3333333333333, 42.4, 8.18888888888889, 28.0, 18.9986813186813, 8.25, 30.3611111111111, 30.3333333333333, 22.3333333333333, 17.0666666666667, 38.3611111111111, 8.98888888888889, 4.35595238095238, 21.7422161172161, 40.725, 29.0892857142857, 23.3738095238095, 1.0, 12.2, 38.5333333333333, 12.1166666666667, 14.4, 22.0, 4.0, 8.55555555555556, 31.7969696969697, 13.5892857142857, 16.1609307359307, 25.2658008658009, 41.5761904761905, 10.9073593073593, 17.6190476190476, 16.23614996115, 14.3333333333333, 22.6755411255411, 18.4, 13.6511266511267, 10.0, 16.8124542124542, 46.5880952380952, 40.2, 13.0848484848485, 8.0, 19.0, 26.25, 18.7828282828283, 0.0666666666666667, 14.8333333333333, 20.2, 27.054797979798, 19.7151515151515, 23.1428571428571, 20.1900432900433, 23.0035714285714, 6.5, 16.880303030303, 1.26666666666667, 23.0, 42.3333333333333, 21.6, 22.0, 26.6666666666667, 4.0, 15.5424242424242, 10.1, 17.2039186303892, 20.3272727272727, 26.9895382395382, 25.8888888888889, 18.3333333333333, 30.2969696969697, 6.0, 13.3655844155844, 19.8447552447552, 21.2254329004329, 17.7333333333333, 12.7333333333333, 20.3666666666667, 19.2380952380952, 20.0, 23.9337662337662, 20.3333333333333, 16.0, 12.0, 2.0, 16.6666666666667, 17.155303030303, 4.12820512820513, 20.3581780538302, 15.2727272727273, 10.2, 14.5047619047619, 4.0, 13.3484848484848, 2.01166666666667, 4.89580770107086, 18.7444444444444, 2.53333333333333, 2.2, 0.325, 1.22640692640693, 0.125, 0.5, 33.7062770562771, 20.2, 14.3493506493506, 18.5333333333333, 0.2, 20.7090909090909, 16.3393939393939, 3.14411421911422, 3.26439393939394, 1.21818181818182, 0.2, 2.51515151515152], [1.0, 2.0, 2.0, 2.0, 4.0, 10.1, 7.2, 4.6, 9.5, 1.0, 9.27777777777778, 3.23055555555556, 5.08181818181818, 4.0, 10.0, 5.2, 2.0, 0.0222222222222222, 15.0, 6.60714285714286, 5.36666666666667, 6.5, 10.3809523809524, 2.01818181818182, 4.18181818181818, 24.0, 16.7484848484848, 6.0, 2.0, 26.0, 14.0, 9.0, 0.133333333333333, 11.9314790764791, 0.812987012987013, 1.2, 0.2, 4.84994172494172, 0.290909090909091, 29.6318348318348, 22.6285714285714, 40.8666666666667, 23.8380952380952, 1.96666666666667, 8.0, 14.1516339869281, 11.0952380952381, 21.4730519480519, 45.5909090909091, 2.0, 2.0, 12.0, 8.7910989010989, 23.9333333333333, 26.5, 14.5636363636364, 13.030303030303, 12.0, 11.791810966811, 2.02274509803922, 15.0931068931069, 2.0, 0.533333333333333, 2.5, 19.568947457771, 26.6136507936508, 40.1666666666667, 18.5848484848485, 2.0, 43.0, 5.61904761904762, 10.0, 14.2666666666667, 10.0, 18.0, 15.6833333333333, 2.96363636363636, 2.66666666666667, 14.0, 9.0, 1.0, 9.0, 8.05555555555556, 11.0, 5.0, 12.7030303030303, 4.0, 1.125, 2.0, 20.0972222222222, 6.2, 17.4371017871018, 4.0, 2.0, 14.7350649350649, 16.5230769230769, 13.1333333333333, 4.70833333333333, 24.1545454545455, 17.0666666666667, 24.0, 45.5689393939394, 15.9282467532468, 41.2993939393939, 8.13333333333333, 4.16363636363636, 0.866666666666667, 0.823076923076923, 2.2, 0.733333333333333, 1.28088023088023, 0.2, 5.73333333333333, 1.04800307219662, 2.24761904761905, 0.2, 0.428571428571428, 4.7, 17.35, 41.8809523809524, 0.2, 30.0, 4.0, 23.2333333333333, 24.0, 10.1333333333333, 24.5333333333333, 16.3333333333333, 21.6, 10.0, 11.0, 28.0, 38.0, 6.0, 18.3, 2.0, 14.2, 1.35411255411255, 14.0, 20.0, 20.0, 16.8, 12.1428571428571, 40.2, 15.4666666666667, 16.2555555555556, 2.0, 20.2, 27.4, 41.6190476190476, 20.2280441780442, 32.5610805860806, 32.6666666666667, 10.2, 18.3333333333333, 2.0, 23.6, 14.6666666666667, 26.0, 16.7636363636364, 4.0, 27.4666666666667, 11.8, 32.5636363636364, 6.0, 26.0, 16.8761904761905, 14.4, 2.0, 24.0, 25.2205128205128, 30.2, 14.850937950938, 30.8444444444444, 12.0, 14.8666666666667, 30.0, 18.963082437276, 16.0, 10.0, 18.0, 0.0818181818181818, 0.142857142857143, 2.2, 13.2944444444444, 23.2380952380952, 0.666666666666667], [1.2, 1.13333333333333, 3.0, 8.0, 3.0, 4.13333333333333, 12.5, 0.0972222222222222, 3.59090909090909, 5.0, 8.85638528138528, 0.787619047619048, 9.85714285714286, 6.85324675324675, 13.0511904761905, 15.4669786096257, 16.0266666666667, 12.1559523809524, 24.6723758125932, 12.2666666666667, 24.2393939393939, 27.5090909090909, 2.0, 14.2380952380952, 11.6666666666667, 14.0, 3.0, 13.4727272727273, 9.0, 9.16666666666667, 2.0, 7.1, 14.0, 12.0, 45.5166666666667, 2.68831168831169, 29.7333333333333, 30.3666666666667, 10.0, 0.151515151515151, 12.0, 14.4318181818182, 16.6925806219924, 18.0, 8.2, 15.2909090909091, 16.3777777777778, 14.6857142857143, 0.6], [4.0, 8.66666666666667, 14.0, 6.10909090909091, 1.2, 3.0, 9.94090909090909, 0.0833333333333333, 10.0, 4.11111111111111, 7.0, 5.0, 8.16666666666667, 9.27142857142857, 5.6, 9.16666666666667, 8.0, 20.0, 12.6, 4.0, 2.16666666666667, 0.006060606060606, 6.30909090909091, 10.5333333333333, 5.61471861471861, 13.1428571428571, 16.0, 24.4285714285714, 3.0, 6.1, 3.0, 7.53333333333333, 6.33333333333333, 11.5812749342161, 0.285714285714286, 0.698484848484848, 24.0, 2.0, 0.666666666666667, 16.0, 2.0, 14.2666666666667, 25.347619047619, 12.2, 14.1507936507937, 12.2857142857143, 2.0, 8.2, 16.0, 2.46969696969697, 12.6666666666667, 0.866666666666667, 12.3333333333333, 20.0, 14.1428571428571, 43.0, 11.1666666666667, 20.6666666666667, 9.0, 8.0, 18.2, 25.4, 6.0], [5.0, 15.757437007437, 7.0, 10.0, 4.0, 2.2, 0.666666666666667, 10.0, 14.8333333333333, 5.0, 4.0, 13.525, 10.3453463203463, 8.0, 25.3984848484848, 23.8795093795094, 27.24, 14.0, 8.0, 36.0608280608281, 2.0, 13.2636363636364, 26.3720390720391, 30.5127960927961, 13.2835497835498, 18.0, 1.42122877122877, 18.0059523809524, 3.08454545454545, 3.71471861471861, 3.86666666666667, 2.51515151515152, 4.98113912231559, 2.86666666666667, 6.04545454545454, 4.76176470588235, 12.0, 2.0, 20.4444444444444, 10.5238095238095, 22.7333333333333, 2.0, 10.7545454545455, 38.0, 20.0, 20.6034632034632, 35.1011904761905, 4.0, 22.1943722943723, 0.02, 32.3571428571429, 14.8001803751804, 24.3141858141858, 22.1246753246753, 10.7757575757576, 12.2457792207792, 8.0, 29.9951426024955, 29.7714285714286, 8.0, 22.3333333333333, 12.4, 8.9, 8.0, 0.353333333333333, 4.06666666666667, 2.24761904761905, 26.1818181818182, 38.4952380952381, 32.0, 14.4, 2.0, 15.1642857142857, 21.6333333333333, 38.6666666666667, 30.4, 17.9953102453102, 14.7492063492064, 41.1714285714286, 12.0, 7.69480519480519, 6.60515151515152, 3.82954545454545, 6.0, 23.2545454545455, 12.2854545454545, 41.9264402264402, 8.0, 11.3361471861472, 0.0277777777777778, 17.5075757575758, 23.8, 0.266666666666667, 2.0, 8.43614718614719, 11.1761904761905, 23.2220418470418, 6.16666666666667, 20.0571428571429, 2.36363636363636, 49.0357142857143, 14.012987012987, 5.0, 15.1069518716578, 1.29090909090909, 8.0, 10.0, 13.3761904761905, 4.16666666666667, 21.0691919191919, 14.1333333333333, 7.0, 30.0, 8.00952380952381, 12.8787878787879, 40.5, 13.0573737373737, 19.0, 24.3833333333333, 7.0, 11.6666666666667, 5.33333333333333, 2.0, 4.24166666666667, 14.2434343434343, 0.1, 2.0, 12.0, 14.0, 20.0, 12.0, 2.09090909090909, 22.0, 18.6, 2.0, 23.2424242424242, 10.3, 22.4, 8.13333333333333, 24.0181818181818, 10.6051515151515, 38.4, 12.9116883116883, 0.6, 2.81212121212121, 0.715151515151515, 0.427777777777778, 42.7, 35.0, 18.0, 12.3333333333333, 8.05714285714286, 30.2666666666667, 19.3666666666667, 22.3333333333333, 2.02777777777778, 0.181818181818182, 0.866666666666667, 1.93333333333333, 2.56804029304029, 2.66666666666667, 2.35833333333333, 1.07878787878788, 5.93333333333333, 0.606451612903226, 0.380952380952381, 0.2, 0.2, 1.53333333333333, 0.4, 4.2, 0.133333333333333, 0.5, 0.338888888888889, 3.0, 0.866666666666667, 1.15238095238095, 0.866666666666667, 2.91082972582973, 3.28046642899584, 35.1785714285714, 20.8666666666667, 25.4642424242424, 10.0, 43.9533333333333, 24.0, 36.2666666666667, 40.0, 37.2705128205128, 14.8666666666667, 32.0416666666667, 36.0, 25.2315018315018, 10.0, 3.38030303030303, 16.0, 30.0, 2.0, 10.0, 34.0, 42.8010101010101, 25.1284759358289, 1.26666666666667, 0.619047619047619, 29.3714285714286, 43.7777777777778, 12.125, 26.102380952381, 30.4742063492063, 21.3005355276907, 2.70826534576535, 22.2151515151515, 10.5333333333333, 16.6857142857143, 24.1321428571429, 32.6, 20.0, 12.952380952381, 1.7093137254902, 4.3031746031746, 14.0, 4.0, 0.333333333333333, 21.9714285714286, 8.66666666666667, 15.0166666666667, 4.0, 6.57142857142857, 20.0, 14.0, 32.1997835497835, 26.0, 0.794250194250194, 28.0, 13.3333333333333, 8.0, 2.0, 2.0, 36.4045954045954, 8.0, 14.0, 20.8076923076923, 11.1833333333333, 23.9079365079365, 0.2, 44.2444444444444, 40.7311827956989, 17.9333333333333, 1.46785714285714, 2.84587912087912, 18.8666666666667, 16.8939393939394, 2.2, 0.0303030303030303, 0.394602300636783, 4.2]], "JS散度": [[1.2, 7.2, 7.0, 3.0, 18.5272727272727, 2.2, 4.33333333333333, 0.0972222222222222, 3.59090909090909, 5.36666666666667, 3.28571428571429, 21.0880952380952, 6.0, 14.0, 8.0, 25.3878246753247, 30.5127960927961, 22.6488761238761, 0.174242424242424, 2.46666666666667, 3.86666666666667, 3.08095238095238, 0.535384615384615, 24.2666666666667, 2.0, 20.0, 40.8666666666667, 1.96666666666667, 20.0, 10.7545454545455, 12.6996336996337, 20.0, 1.13333333333333, 18.1102941176471, 40.9551820728291, 11.0952380952381, 6.85324675324675, 27.8780885780886, 28.0, 2.4, 11.5336435786436, 8.31298701298701, 10.7757575757576, 2.0, 36.2, 22.7538461538462, 2.72738095238095, 11.0793650793651, 8.9, 7.45757575757576, 27.5047619047619, 21.6921356421356, 26.1818181818182, 13.030303030303, 11.1300505050505, 26.7479797979798, 15.1240626040626, 19.5154761904762, 38.6666666666667, 30.4, 14.952380952381, 14.7492063492064, 41.1714285714286, 12.0, 21.2189393939394, 41.9264402264402, 11.3361471861472, 0.0277777777777778, 46.0333333333333, 32.1666666666667, 2.0, 23.8, 16.2422077922078, 2.0, 36.9572510822511, 12.0, 0.390476190476191, 12.2666666666667, 15.1069518716578, 1.29090909090909, 2.16666666666667, 17.4011904761905, 5.0, 14.0777777777778, 2.0, 3.8969696969697, 27.5090909090909, 10.5333333333333, 2.0, 22.3761904761905, 40.5, 4.39545454545455, 31.75, 15.1, 16.0, 24.4285714285714, 11.6666666666667, 16.4583333333333, 5.33333333333333, 2.28571428571429, 20.0972222222222, 4.5, 12.0, 20.0, 35.0, 0.285714285714286, 22.0, 6.66666666666667, 22.0, 6.0, 0.698484848484848, 0.427777777777778, 1.82532467532468, 0.666666666666667, 31.0666666666667, 22.8666666666667, 22.3333333333333, 4.16363636363636, 0.2, 0.133333333333333, 2.86666666666667, 3.2, 0.380952380952381, 1.84444444444444, 0.2, 0.2, 1.28088023088023, 0.0857142857142857, 4.2, 2.24761904761905, 5.66111111111111, 0.428571428571428, 2.25454545454545, 12.2186868686869, 4.7, 17.1325396825397, 1.53571428571429, 16.3914141414141, 10.1333333333333, 40.0, 24.5333333333333, 12.875, 30.3666666666667, 10.0, 25.347619047619, 40.3454545454545, 14.1507936507937, 2.0, 3.38030303030303, 28.0, 16.0, 2.0, 15.1787878787879, 34.1333333333333, 13.3333333333333, 44.0348124098124, 35.4174025974026, 41.9939393939394, 8.45, 20.0, 23.5428571428571, 20.6666666666667, 24.2857142857143, 40.2, 32.4, 30.3611111111111, 30.3333333333333, 41.6190476190476, 17.0666666666667, 1.0, 0.151515151515151, 22.0, 32.6666666666667, 4.0, 27.4666666666667, 12.0, 6.57142857142857, 26.0, 20.0, 26.0, 13.0848484848485, 2.0, 26.25, 30.8444444444444, 28.0, 23.1428571428571, 23.0035714285714, 16.6925806219924, 20.3272727272727, 19.2380952380952, 18.0, 20.3333333333333, 15.2909090909091, 2.0, 14.0, 44.2444444444444, 40.7311827956989, 2.01166666666667, 1.46785714285714, 16.3393939393939, 0.2, 0.666666666666667], [1.0, 2.0, 2.0, 4.1, 8.0, 12.3619047619048, 4.0, 3.0, 3.23055555555556, 7.0, 4.0, 14.8333333333333, 8.85638528138528, 7.0, 6.60714285714286, 4.0, 2.01818181818182, 12.7948051948052, 10.3453463203463, 25.3984848484848, 16.7484848484848, 32.1, 19.8631313131313, 19.2666666666667, 15.4348484848485, 12.5828571428571, 14.0, 20.8018939393939, 2.0, 20.345367965368, 21.8530952380952, 21.8952380952381, 13.6939393939394, 26.3720390720391, 2.02, 11.5272727272727, 12.2396897546898, 19.4761904761905, 4.075, 17.6071428571429, 18.0, 20.2167832167832, 17.3767676767677, 23.4305555555556, 8.70363636363636, 0.181818181818182, 41.6531385281385, 1.42122877122877, 0.08, 18.0059523809524, 3.71471861471861, 2.51515151515152, 7.1005772005772, 6.04545454545454, 0.2, 2.4537349904997, 24.662814962815, 23.5398268398268, 24.1051282051282, 44.0341991341991, 46.759777999778, 34.0, 30.8952380952381, 22.8204545454545, 23.8731601731602, 37.7397419247419, 13.3549783549784, 9.0, 6.10976190476191, 4.5, 14.2, 20.4154270480122, 23.4710539460539, 11.0853701853702, 18.4662041467305, 29.6949134199134, 18.6857142857143, 10.5932178932179, 0.02, 5.14848484848485, 7.35238095238095, 8.0, 14.8001803751804, 7.39393939393939, 22.1246753246753, 18.5510256410256, 16.3555555555556, 18.5, 28.1183600713012, 2.0, 21.1139393939394, 12.2457792207792, 35.488961038961, 17.6152347652348, 45.5909090909091, 9.2, 32.1271284271284, 24.0699327369808, 29.4666666666667, 17.0222222222222, 14.2909090909091, 25.2524741924742, 0.163636363636364, 2.0, 4.19047619047619, 14.0, 2.0, 33.2398851148851, 13.0511904761905, 16.7106643356643, 16.3425597409127, 8.7910989010989, 8.97012987012987, 22.3333333333333, 33.6749250749251, 23.9333333333333, 6.87181152181152, 24.4190476190476, 14.0142857142857, 33.5761904761905, 45.6851370851371, 27.3294372294372, 26.5, 24.0, 11.791810966811, 40.7857142857143, 2.02274509803922, 38.4952380952381, 19.4362770562771, 23.2, 15.0931068931069, 37.0222222222222, 4.0, 20.6236237704504, 14.4, 21.3333333333333, 0.533333333333333, 23.0142857142857, 12.9621774467363, 15.1642857142857, 17.0352924852925, 25.8928571428571, 22.3333333333333, 31.75781995782, 14.9898629148629, 19.568947457771, 18.3333333333333, 24.180303030303, 44.2138888888889, 15.0911319073084, 27.2549062049062, 12.0382395382395, 7.69480519480519, 0.158333333333333, 27.0666666666667, 20.379898989899, 3.82954545454545, 40.1666666666667, 5.61230158730159, 12.2854545454545, 23.4857142857143, 2.0, 2.0, 12.1666666666667, 42.2145998445998, 5.61904761904762, 18.6524364524365, 6.85714285714286, 14.9995670995671, 4.16071428571429, 10.1818181818182, 4.13333333333333, 23.6333333333333, 24.4072222222222, 25.3333333333333, 15.6994949494949, 36.2002164502165, 4.45242424242424, 24.5924603174603, 20.0571428571429, 18.167619047619, 16.3714285714286, 31.9892496392496, 15.047619047619, 14.0132135408451, 15.6833333333333, 9.06580086580087, 4.0, 9.0, 13.4805555555556, 5.0, 12.0, 6.19047619047619, 5.0, 12.3333333333333, 9.28571428571429, 7.13333333333333, 10.0666666666667, 12.2939393939394, 8.21428571428571, 11.3142857142857, 13.0573737373737, 7.0, 4.0, 2.0, 14.1111111111111, 9.0, 7.0, 31.3333333333333, 15.9666666666667, 8.0, 4.0, 6.2, 10.0, 18.4396825396825, 11.8, 12.0, 31.3973194933721, 26.5153846153846, 14.7350649350649, 17.541889483066, 10.3, 13.1333333333333, 24.1360195360195, 13.5111111111111, 24.0, 14.0, 18.8848484848485, 25.7901515151515, 0.765476190476191, 0.666666666666667, 0.0666666666666667, 2.81212121212121, 5.86666666666667, 42.7, 1.03982683982684, 35.0, 2.0, 30.2666666666667, 2.02777777777778, 1.26666666666667, 0.823076923076923, 8.26297258297258, 5.93333333333333, 5.73333333333333, 0.5, 3.0, 17.35, 20.8666666666667, 25.4642424242424, 41.8809523809524, 41.152380952381, 44.1357142857143, 7.84569892473118, 29.3311188811189, 32.6666666666667, 12.8392857142857, 4.0, 24.0, 36.2666666666667, 14.674358974359, 34.0952380952381, 24.4222222222222, 36.0, 5.93015873015873, 39.044474969475, 18.9026984126984, 30.0, 40.1666666666667, 10.0, 42.8010101010101, 25.1284759358289, 0.619047619047619, 11.2477272727273, 4.13333333333333, 0.0333333333333333, 21.8444444444444, 42.1454545454545, 26.7301587301587, 18.4027777777778, 43.7777777777778, 26.102380952381, 12.4104166666667, 30.4742063492063, 2.0, 2.0247113997114, 21.3005355276907, 18.5333333333333, 16.8, 20.6666666666667, 40.3333333333333, 24.1321428571429, 32.6, 22.0, 8.18888888888889, 8.25, 22.3333333333333, 4.3031746031746, 29.0892857142857, 12.2, 14.4, 32.5610805860806, 4.0, 25.2658008658009, 41.5761904761905, 4.0, 22.6755411255411, 23.6, 14.6666666666667, 8.66666666666667, 11.8, 13.6511266511267, 46.5880952380952, 19.0, 30.2, 20.1900432900433, 21.6, 18.3333333333333, 30.2969696969697, 9.0, 20.0, 23.9337662337662, 12.0, 8.0, 16.6666666666667, 4.12820512820513, 23.9079365079365, 10.0, 18.0, 0.2, 4.89580770107086, 0.325, 2.84587912087912, 1.22640692640693, 0.142857142857143, 0.5, 14.3493506493506, 18.5333333333333, 3.14411421911422, 1.21818181818182, 2.2, 2.51515151515152], [4.32272727272727, 6.10909090909091, 18.0, 4.0, 7.0, 4.11111111111111, 5.0, 10.0, 9.27142857142857, 5.0, 10.3809523809524, 16.1242424242424, 8.0, 6.09523809523809, 36.0608280608281, 18.1238095238095, 0.787619047619048, 0.812987012987013, 11.6014368964369, 16.8888888888889, 15.9902097902098, 36.4477855477855, 7.46233766233766, 15.0555555555556, 9.85714285714286, 2.33, 31.4094017094017, 19.1095238095238, 19.0785714285714, 14.3583694083694, 29.9951426024955, 12.4472222222222, 4.41071428571429, 10.5871212121212, 0.353333333333333, 18.8792929292929, 22.7300505050505, 14.5636363636364, 12.0, 40.7199222999223, 22.3357142857143, 20.5714285714286, 21.6333333333333, 41.7048319327731, 16.0266666666667, 10.1090909090909, 23.2545454545455, 23.4984126984127, 8.43614718614719, 22.8766233766234, 19.0333333333333, 1.0, 6.30909090909091, 13.3761904761905, 9.0, 21.0691919191919, 7.0, 0.2, 5.61471861471861, 8.00952380952381, 12.8787878787879, 4.5, 14.792069042069, 12.0, 30.8428571428571, 2.0, 7.53333333333333, 6.0, 22.6666666666667, 10.2095238095238, 9.16666666666667, 14.0119047619048, 4.0, 2.09090909090909, 2.0, 29.9535575535576, 3.33333333333333, 0.563636363636364, 12.0, 35.1206349206349, 8.13333333333333, 0.181818181818182, 2.56804029304029, 2.66666666666667, 2.2, 0.666666666666667, 0.4, 0.866666666666667, 1.15238095238095, 21.3444444444444, 4.77142857142857, 0.2, 2.68831168831169, 14.0, 2.0, 14.8666666666667, 10.0, 34.0, 17.0666666666667, 18.0, 2.0, 10.2305555555556, 43.9333333333333, 14.0, 14.0571428571429, 25.0, 39.3333333333333, 18.9986813186813, 12.3333333333333, 8.98888888888889, 18.3333333333333, 14.3333333333333, 20.0, 14.1428571428571, 8.0, 43.0, 42.3333333333333, 4.0, 12.0, 14.8666666666667, 17.7333333333333, 20.3666666666667, 15.2727272727273, 18.2, 6.0, 17.9333333333333, 16.8939393939394, 0.0303030303030303], [13.6399855699856, 19.4372155622156, 3.0, 4.0, 8.66666666666667, 4.6, 14.0, 1.0, 9.27777777777778, 4.13333333333333, 5.08181818181818, 10.0, 9.06666666666667, 5.2, 12.5, 9.94090909090909, 0.0833333333333333, 10.0, 7.0, 5.0, 8.16666666666667, 5.6, 9.16666666666667, 6.5, 1.86050420168067, 18.9162114845938, 14.0, 4.34949494949495, 10.5252918145432, 5.70608835608836, 25.5480519480519, 0.133333333333333, 4.0, 11.9314790764791, 1.2, 4.98113912231559, 2.86666666666667, 3.76666666666667, 0.290909090909091, 22.6285714285714, 8.82940582293523, 9.62380952380952, 17.5416666666667, 16.9621367521368, 2.0, 14.1516339869281, 8.11904761904762, 17.99222999223, 32.3571428571429, 21.4587412587413, 6.51868686868687, 8.0, 9.16363636363636, 14.0, 19.2929292929293, 8.0, 11.2887445887446, 8.0, 25.496176046176, 14.8619047619048, 6.0, 15.7619047619048, 22.6126984126984, 11.2722222222222, 22.4214141414141, 0.495757575757576, 19.5714285714286, 11.0, 20.3333333333333, 2.4, 18.8747863247863, 26.1454545454545, 12.1559523809524, 44.6722444222444, 8.0, 21.9181128050693, 24.6723758125932, 11.468556998557, 25.434595959596, 16.3701298701299, 10.0, 18.0, 6.30699300699301, 24.1349350649351, 2.96363636363636, 8.59880952380952, 16.8333333333333, 5.0, 0.006060606060606, 1.0, 17.2888888888889, 1.0, 8.05555555555556, 14.1333333333333, 9.80952380952381, 14.2380952380952, 9.28571428571429, 13.1428571428571, 12.0127206127206, 24.3833333333333, 7.0, 3.0, 0.333333333333333, 14.2434343434343, 14.0, 17.4371017871018, 6.33333333333333, 11.5812749342161, 8.13333333333333, 24.1545454545455, 24.0181818181818, 0.715151515151515, 18.0, 24.0, 27.5333333333333, 19.7, 1.0, 0.2, 2.0, 1.04800307219662, 2.0, 3.41666666666667, 2.39206349206349, 30.5333333333333, 10.0, 6.36630036630037, 14.2666666666667, 2.0, 12.2, 25.2315018315018, 2.0, 10.0, 43.6733333333333, 8.2, 14.2, 16.0, 10.0, 2.46969696969697, 1.35411255411255, 12.125, 2.71666666666667, 20.1624542124542, 16.3333333333333, 22.2151515151515, 16.6857142857143, 12.6666666666667, 16.2555555555556, 2.0, 27.4, 20.2280441780442, 13.5892857142857, 26.0, 32.5636363636364, 10.0, 16.8761904761905, 40.2, 14.4, 24.0, 20.2, 6.5, 16.880303030303, 1.26666666666667, 2.0, 13.3655844155844, 19.8447552447552, 20.6666666666667, 21.2254329004329, 12.7333333333333, 8.0, 8.2, 25.4, 2.2, 20.2, 0.2, 20.7090909090909], [15.757437007437, 0.0222222222222222, 29.1666666666667, 15.3253968253968, 3.24444444444444, 2.0, 10.1203740703741, 3.82162337662338, 3.60137085137085, 4.76176470588235, 12.0, 16.0, 22.9261882561883, 12.3833333333333, 35.4, 29.6318348318348, 2.0, 17.5095682095682, 12.5974025974026, 35.1011904761905, 15.8943722943723, 19.0, 9.14285714285714, 7.18181818181818, 6.81335331335331, 0.754511278195489, 6.7, 33.3160173160173, 15.2, 41.6488095238095, 4.36363636363636, 19.2, 22.350222000222, 8.43221611721612, 0.279220779220779, 20.5357142857143, 6.16666666666667, 8.90476190476191, 3.0, 10.7921536796537, 12.5755050505051, 3.15277777777778, 2.0, 21.8571428571429, 3.0, 21.2857142857143, 33.5409090909091, 4.70833333333333, 2.38015873015873, 12.3333333333333, 2.0, 0.133333333333333, 4.21212121212121, 3.26666666666667, 0.2, 45.5166666666667, 0.133333333333333, 43.9533333333333, 38.0, 30.1515151515152, 1.26666666666667, 29.3714285714286, 2.70826534576535, 10.9073593073593, 0.333333333333333, 14.8333333333333, 23.0, 25.8888888888889, 18.963082437276, 0.125], [5.0, 1.2, 14.0, 0.118181818181818, 8.66666666666667, 4.0, 7.94141414141414, 4.18181818181818, 24.0, 13.525, 27.24, 44.7047619047619, 16.7603896103896, 10.4391233766234, 2.0, 20.942291042291, 12.0, 13.2636363636364, 13.2835497835498, 8.0, 9.67936507936508, 7.74401154401154, 35.2142135642136, 19.5227938727939, 9.0, 17.0719696969697, 8.21438561438561, 15.7085714285714, 3.08454545454545, 3.09116161616162, 1.73321526957891, 0.941269841269841, 22.5978354978355, 44.5493506493507, 20.4444444444444, 10.5238095238095, 23.8380952380952, 8.97207792207792, 16.9821428571429, 4.70855810855811, 38.0, 40.0, 8.0, 6.36309523809524, 20.6034632034632, 4.0, 22.1943722943723, 5.0036075036075, 1.19047619047619, 21.4730519480519, 24.6, 12.6, 10.0, 4.75324675324675, 10.4666666666667, 22.1666666666667, 29.7714285714286, 14.8809523809524, 42.2961904761905, 10.3497835497835, 12.0, 8.0, 46.1876551226551, 14.1904761904762, 12.4, 3.57142857142857, 4.06666666666667, 37.3005928853755, 36.4579365079365, 2.24761904761905, 41.5333333333333, 32.0, 3.62565656565657, 24.9930236430236, 15.6031746031746, 2.2, 15.4429292929293, 1.49206349206349, 8.4, 15.772027972028, 18.1515151515152, 17.9953102453102, 31.1838661338661, 10.0, 6.60515151515152, 13.7601787101787, 12.5485714285714, 6.0, 21.6922510822511, 20.4138528138528, 12.9312097812098, 34.0, 18.5848484848485, 41.4184183463595, 28.3967171717172, 43.0, 28.0731601731602, 17.5075757575758, 10.4, 22.6666666666667, 0.2, 34.1980519480519, 7.0, 4.03571428571429, 0.266666666666667, 14.2666666666667, 19.9346681096681, 38.3255411255411, 14.4666666666667, 22.7827496175322, 28.8178958107596, 17.2540909090909, 2.0, 20.1636363636364, 18.5324242424242, 18.4916666666667, 9.50952380952381, 49.0357142857143, 21.8730158730159, 13.7705555555556, 0.229390054390054, 22.4244422244422, 14.012987012987, 2.66666666666667, 7.0, 4.08888888888889, 5.41515151515152, 4.16666666666667, 5.08571428571429, 5.87445887445887, 24.2393939393939, 50.9042450887033, 11.0, 8.65384615384615, 15.852380952381, 19.0, 12.7030303030303, 11.6805555555556, 14.0, 11.3333333333333, 2.0, 3.0, 13.4727272727273, 11.2833333333333, 6.93333333333333, 4.24166666666667, 6.1, 0.1, 28.1401709401709, 18.6, 7.32301587301587, 16.5230769230769, 11.4, 23.2424242424242, 17.0666666666667, 0.791666666666667, 45.5689393939394, 10.6051515151515, 3.75854978354978, 12.9116883116883, 20.7497474747475, 8.05714285714286, 19.3666666666667, 0.866666666666667, 0.866666666666667, 1.93333333333333, 1.0, 1.6, 2.35833333333333, 0.733333333333333, 0.606451612903226, 3.6, 4.10909090909091, 0.2, 8.73809523809524, 0.338888888888889, 1.28666666666667, 4.09365079365079, 0.2, 0.2, 2.5, 2.91082972582973, 3.28046642899584, 35.1785714285714, 7.3047619047619, 24.0, 14.08, 29.7333333333333, 37.2705128205128, 21.6, 12.2857142857143, 20.2, 0.290909090909091, 6.0, 33.9568181818182, 8.0, 27.2380952380952, 20.0, 28.2333333333333, 10.5333333333333, 10.0, 22.4583333333333, 12.1428571428571, 16.8333333333333, 15.4666666666667, 41.5333333333333, 40.8600122100122, 0.866666666666667, 12.952380952381, 40.3333333333333, 42.4, 20.2, 38.3611111111111, 21.7422161172161, 40.725, 12.1166666666667, 16.1609307359307, 10.2, 14.0, 15.0166666666667, 16.7636363636364, 4.0, 14.4318181818182, 25.2205128205128, 18.7828282828283, 14.850937950938, 0.0666666666666667, 0.794250194250194, 27.054797979798, 19.7151515151515, 13.3333333333333, 26.6666666666667, 8.0, 10.1, 2.0, 17.2039186303892, 6.0, 36.4045954045954, 20.8076923076923, 14.5047619047619, 4.0, 13.3484848484848, 18.7444444444444, 2.2, 33.7062770562771, 13.2944444444444, 18.8666666666667, 3.26439393939394, 23.2380952380952, 4.2, 0.6], [1.13333333333333, 2.0, 4.0, 10.1, 4.0, 9.5, 10.0, 2.61926406926407, 17.9682433579492, 0.666666666666667, 5.0, 2.0, 15.0, 13.4843073593074, 23.8795093795094, 20.0090909090909, 21.330303030303, 26.0, 21.4762265512266, 1.37619047619048, 0.0311111111111111, 27.7260683760684, 18.5775335775336, 13.6696608946609, 0.388039215686275, 15.2344444444444, 4.07727272727273, 22.0, 2.17142857142857, 4.84994172494172, 22.0888888888889, 40.9544372294372, 22.7333333333333, 17.4798534798535, 25.8125874125874, 7.84887612387612, 21.6254834054834, 18.2857142857143, 43.8832251082251, 2.41904761904762, 0.142857142857143, 14.4, 4.22423576423576, 24.3141858141858, 16.3115218115218, 2.2052380952381, 12.1496464646465, 16.1111111111111, 17.504329004329, 40.5457792207792, 13.3145454545455, 8.26983016983017, 22.0619047619048, 17.2825396825397, 4.00008658008658, 10.3857142857143, 9.17142857142857, 4.0, 38.6666666666667, 5.80952380952381, 24.6133333333333, 30.4, 2.0, 0.459523809523809, 8.18712121212121, 2.0, 0.666666666666667, 2.5, 45.4134199134199, 31.6666666666667, 22.2888888888889, 26.6136507936508, 20.2404761904762, 25.1367965367965, 24.6380952380952, 16.1944444444444, 10.0, 18.5231608770633, 11.1761904761905, 23.2220418470418, 12.9165007215007, 12.9816017316017, 16.0547619047619, 1.94974025974026, 2.36363636363636, 15.3910755910756, 17.6436507936508, 5.0, 13.8025252525253, 3.35753968253968, 14.0, 11.9207792207792, 11.1060606060606, 8.0, 10.0, 0.223232323232323, 8.73333333333333, 8.33333333333333, 30.0, 5.0, 7.60909090909091, 10.5818181818182, 11.6666666666667, 12.3239538239538, 8.02380952380952, 21.6666666666667, 3.96388888888889, 11.2916666666667, 9.0, 2.0, 1.125, 6.11111111111111, 15.1666666666667, 2.0, 7.1, 2.0, 2.0, 22.4, 30.0, 38.4, 15.9282467532468, 0.6, 41.2993939393939, 14.7214285714286, 0.866666666666667, 1.6969696969697, 1.07878787878788, 0.666666666666667, 0.133333333333333, 1.53333333333333, 2.97560606060606, 1.0, 0.866666666666667, 2.68528138528139, 18.421645021645, 0.2, 19.8606060606061, 30.0, 16.0, 28.5277777777778, 23.2333333333333, 42.2, 16.3333333333333, 32.0416666666667, 38.3333333333333, 11.0, 18.3, 24.2809523809524, 0.2, 40.0, 14.0, 18.8816738816739, 14.1333333333333, 28.6, 1.21901154401154, 20.0, 28.0, 1.7093137254902, 4.35595238095238, 23.3738095238095, 38.5333333333333, 8.55555555555556, 31.7969696969697, 17.6190476190476, 16.23614996115, 2.0, 18.4, 21.9714285714286, 16.8124542124542, 6.0, 14.0, 32.1997835497835, 22.0, 15.5424242424242, 11.1666666666667, 26.9895382395382, 30.0, 16.0, 17.155303030303, 16.3777777777778, 20.3581780538302, 14.6857142857143, 11.1833333333333, 16.0, 10.2, 2.53333333333333, 0.0818181818181818, 0.394602300636783]]}

var data2 =echarts.dataTool.prepareBoxplotData(data1["研究方向广度"]);
var data3 =echarts.dataTool.prepareBoxplotData(data1["研究方向深度"]);
var data4 =echarts.dataTool.prepareBoxplotData(data1["JS散度"]);

var xAxisList = [], yAxisList = [], yData = [];
var varList1 = ['R-Ⅰ', 'R-Ⅱ', 'R-Ⅲ', 'R-Ⅳ'];
var varList2 = ['e-Ⅰ', 'e-Ⅱ', 'e-Ⅲ', 'e-Ⅳ', 'e-Ⅴ'];
var varList3 = ['J-Ⅰ', 'J-Ⅱ', 'J-Ⅲ', 'J-Ⅳ', 'J-Ⅴ', 'J-Ⅵ', 'J-Ⅶ'];
data2 = data2['boxData'];
data3 = data3['boxData'];
data4 = data4['boxData'];

for(var i=0;i<data2.length;i++){
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
            boxWidth:['1%','2%'],
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
                        '研究方向广度类型: ' + param.name,
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
            boxWidth:['1%','2%'],
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
                        '研究方向深度类型: ' + param.name,
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
            boxWidth:['1%','2%'],
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
                        'JS散度类型: ' + param.name,
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

option88 = {
    title: {
            text: '研\n究\n方\n向\n变\n化\n类\n型\n奖\n励\n得\n分',
            right: 'right',
            top:"top",
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
        top:'-40%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-35%',
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
        top:'-25%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-15%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-10%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-5%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'0%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'5%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'15%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'20%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'25%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'30%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'35%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'40%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'45%',
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


var data1 = {"合作广度": [[74.0, 9.0, 10.0, 4.0, 8.0, 8.0, 10.0, 6.0, 8.0, 7.0, 6.0, 16.0, 163.7, 29.0, 8.0, 11.0, 18.0, 2.0, 14.0, 184.5, 11.0, 8.0, 9.5, 4.0, 4.0, 2.0, 2.0, 8.2, 10.0, 4.0, 23.5, 7.0, 4.0, 2.0, 2.0, 8.0, 9.0, 10.0, 10.0, 9.5, 8.0, 2.0, 7.0, 11.0, 3.0, 7.0, 9.0, 1.0, 5.0, 10.0, 3.0, 10.0, 9.5, 3.0, 5.0, 13.0, 13.0, 7.0, 10.5, 6.0, 9.0, 98.5, 29.0, 2.0, 6.0, 14.0, 2.0, 6.0, 4.0, 6.0, 7.0, 4.0, 14.0, 12.0, 8.0, 22.0, 19.0, 17.0, 11.0, 20.0, 9.0, 8.0, 22.0, 21.0, 16.0, 41.0, 30.0, 20.0, 18.5, 16.0, 7.0, 4.0, 2.0, 34.0, 26.0, 18.0, 33.0, 16.5, 18.0, 18.0, 4.0, 16.0, 17.0, 10.0, 6.0, 14.0, 19.0, 4.0, 13.0, 21.0, 21.0, 24.0, 17.0, 10.0, 13.0, 2.0, 45.0, 29.0, 8.0, 20.0, 6.0, 10.0, 8.0, 34.0, 29.0, 16.0, 18.0, 4.0, 6.0, 18.0, 16.0, 13.5, 12.0, 8.0, 18.0, 15.0, 14.0, 22.0, 22.0, 8.0, 38.0, 4.0, 4.0, 14.0, 1.0, 14.0, 22.0, 6.0, 7.0, 2.0, 41.0, 11.0, 17.0, 20.0, 12.0, 24.0, 21.0, 20.0, 20.0, 17.0, 12.0, 24.0, 40.0, 38.0, 2.0, 41.0, 34.0, 24.0, 35.0, 18.0, 10.0, 17.0, 30.0, 23.0, 22.0, 8.0, 23.0, 25.0, 34.0, 6.0, 8.0, 2.0, 7.0, 10.0, 16.0, 14.0, 4.0, 12.0, 9.0, 14.0, 43.0, 4.0, 20.5, 18.0, 14.5, 6.0, 16.0, 16.0, 36.0, 24.0, 18.0, 38.0, 41.0, 40.0, 1.0, 4.0, 8.0, 14.0, 14.0, 20.0, 22.0, 20.0, 12.0, 19.5, 6.0, 4.0, 37.0, 18.0, 16.0, 13.0, 40.0, 6.0, 14.0, 8.0, 22.0, 2.0, 4.0, 10.0, 7.0, 9.0, 4.0, 4.0, 13.0, 1.0, 27.0, 18.0, 26.0, 21.0, 23.0, 6.0, 28.0, 16.0, 12.0, 16.0, 8.0, 6.0, 15.0, 10.2, 28.0, 11.0, 8.0, 2.0, 20.0, 20.0, 8.0, 16.0, 16.0, 18.5, 20.0, 39.0, 2.0, 5.0, 30.0, 2.0, 17.0, 16.0, 4.0, 36.0, 22.0, 40.0, 9.0, 34.0, 32.0, 18.0, 18.0, 28.0, 18.0, 18.0, 14.0, 18.5, 18.0, 18.0, 8.0, 18.0, 27.0, 10.0, 44.0, 22.0, 2.0, 24.0, 26.5, 18.0, 8.0, 5.0, 2.0, 36.0, 4.0, 10.0, 14.0, 30.0, 12.0, 12.0, 6.0, 18.0, 6.0, 16.0, 10.0, 15.0, 14.0, 10.0, 1.0, 40.0, 8.0, 22.0, 16.0, 12.0, 30.0, 5.0, 2.0, 9.0, 16.0, 6.0, 18.0, 20.0, 6.0, 30.0, 8.0, 34.0, 32.0, 41.0, 34.0, 26.0, 26.0, 20.0, 26.0, 4.0, 36.0, 14.0, 24.0, 24.0, 10.0, 10.0, 40.0, 38.0, 17.0, 24.0, 40.0, 5.5, 34.0, 24.0, 18.0, 26.0, 22.5, 2.0, 32.0, 28.0, 20.0, 14.0, 20.0, 13.0, 2.0, 10.0, 16.0, 20.0, 15.0, 17.0, 11.5, 16.0, 21.0, 24.0, 20.0, 2.0, 15.0, 20.0, 15.0, 14.0, 8.0, 24.5, 14.0, 22.0, 17.0, 40.0, 19.0, 15.0, 38.0, 18.0, 41.0, 12.0, 18.0, 35.0, 15.0, 21.0, 28.0, 14.0, 21.0, 15.0, 18.0, 12.0, 22.0, 38.0, 12.0, 15.0, 18.0, 40.0, 14.0, 30.0, 26.0, 40.0, 10.0, 8.0, 4.0, 20.0, 5.0, 25.0, 12.0, 30.0, 18.0, 24.0, 1.0, 12.0, 26.0, 13.0, 10.0, 40.0, 19.0, 20.0, 4.0, 22.0, 11.0, 5.0, 18.0, 12.0, 15.0, 10.0, 14.0, 22.0, 2.0, 34.0, 41.0, 10.0, 36.0, 4.0, 2.0, 26.0, 22.0, 32.0, 2.0, 12.0, 40.0, 26.0, 2.0, 13.0, 10.0, 21.0, 20.0, 22.0, 11.0, 14.0, 34.0, 22.0, 7.0, 4.0, 10.0, 18.0, 14.0, 6.0, 8.0, 12.0, 16.0, 52.0, 16.0, 18.0, 23.0, 33.0, 24.0, 14.0, 17.0, 32.0, 22.0, 24.0, 24.0, 15.0, 16.0, 4.0, 30.0, 20.0, 18.0, 6.5, 10.5, 16.0, 6.0, 14.0, 20.5, 19.0, 18.0, 6.0, 2.0, 14.0, 16.5, 8.0, 18.0, 12.0, 18.0, 27.0, 41.0, 15.0, 13.0, 10.0, 2.0, 20.0, 16.0, 4.0, 13.0, 19.0, 19.5, 9.0, 10.5, 18.5, 16.5, 12.0, 22.0, 8.0, 14.5, 8.0, 15.0, 12.0, 4.0, 4.0, 16.0, 5.0, 12.0, 13.0, 14.0, 8.0, 12.0, 15.0, 7.0, 30.5, 2.0, 6.0, 10.0, 16.0, 7.0, 4.0, 14.0, 6.0, 18.0, 13.0, 10.0, 3.5, 26.0, 10.0, 19.5, 461.0, 5.0, 8.5, 5.0, 2.0, 7.0, 7.0, 149.0, 5.0, 14.0, 12.0, 4.0, 14.0, 14.0, 10.0, 18.0, 8.0, 8.0, 21.0, 42.5, 1.0, 12.5, 37.0, 8.0, 14.0, 11.0, 12.0, 8.0, 3.0, 31.0, 12.0, 19.0, 3.0, 44.5, 11.0, 14.0, 6.0, 11.0, 12.0, 19.5, 4.0, 16.0, 12.0, 11.0, 31.0, 14.0, 2.0, 29.5, 17.0, 4.0, 8.0, 11.0, 12.0, 16.0, 7.0, 13.5, 8.0, 8.0, 18.0, 3.0, 4.0, 13.0, 7.0, 6.0, 2.0, 16.0, 18.5, 7.0, 7.0, 1.0, 4.0, 2.0, 30.0, 14.0, 3.5, 16.0, 4.0, 6.0, 6.0, 21.0, 28.5, 52.0, 34.0, 15.0, 68.0, 12.0, 9.0, 15.0, 8.0, 7.0, 14.0, 4.0, 8.0, 13.0, 9.0, 2.0, 26.0, 20.0, 20.0, 2.0, 21.0, 8.0, 10.0, 20.0, 24.0, 23.5, 16.0, 12.0, 24.0, 14.0, 8.0, 18.0, 28.0, 40.0, 10.0, 3.0, 20.0, 38.0, 13.5, 26.0, 10.0, 16.0, 18.0, 2.0, 6.0, 42.0, 20.5, 2.0, 4.0, 28.0, 18.0, 12.0, 41.0, 10.0, 12.0, 14.0, 22.0, 22.0, 36.0, 16.0, 2.0, 18.0, 22.0, 4.0, 2.0, 10.0, 3.0, 4.0, 1.0, 6.0, 12.0, 2.0, 2.0, 2.0, 28.0, 42.0, 18.0, 14.5, 16.0, 20.0, 20.5, 30.0, 14.0, 3.0, 38.0, 1.0, 40.0, 40.0, 5.0, 16.0, 44.0, 29.5, 12.5, 36.0, 22.0, 24.0, 14.0, 14.0, 28.0, 4.0, 2.0, 10.0, 14.0, 36.0, 26.0, 40.0, 40.0, 12.5, 26.0, 14.0, 36.0, 10.0, 23.0, 14.0, 11.0, 34.0, 30.0, 24.0, 40.0, 12.0, 6.0, 10.0, 26.0, 8.0, 38.0, 3.0, 28.0, 14.0, 21.5, 30.0, 2.0, 10.0, 30.0, 45.0, 42.0, 32.0, 48.0, 18.0, 40.0, 22.0, 31.0, 24.5, 22.0, 24.0, 16.0, 2.0, 10.0, 14.0, 10.0, 4.0, 2.0, 38.0, 4.0, 18.0, 40.0, 30.5, 35.0, 8.0, 20.0, 41.0, 23.0, 23.0, 14.0, 18.0, 40.0, 10.0, 12.0, 23.0, 40.0, 14.0, 43.0, 32.0, 48.0, 41.0, 2.0, 2.0, 8.0, 26.0, 21.0, 18.0, 20.0, 14.0, 16.0, 16.0, 22.0, 28.0, 18.0, 21.0, 18.0, 34.0, 16.0, 28.0, 23.0, 20.0, 22.0, 40.0, 41.0, 40.0, 24.0, 40.0, 32.0, 32.0, 30.0, 20.0, 12.0, 40.0, 38.0, 40.0, 10.0, 28.0, 4.0, 14.0, 12.0, 26.0, 30.0, 30.0, 38.0, 22.0, 16.0, 36.0, 4.0, 17.0, 18.0, 39.0, 29.0, 22.0, 26.0, 16.0, 38.0, 12.0, 30.0, 28.0, 26.0, 4.0, 19.0, 30.0, 12.0, 12.0, 10.0, 24.5, 38.0, 10.0, 16.0, 14.0, 14.0, 2.0, 4.0, 4.0, 14.0, 22.0, 23.0, 18.0, 14.0, 19.0, 16.0, 15.0, 18.0, 24.0, 19.0, 4.0, 12.0, 15.0, 25.0, 18.0, 20.0, 14.0, 17.0, 40.0, 14.0, 31.5, 26.0, 40.0, 14.0, 19.0, 2.0, 30.0, 26.0, 17.0, 24.0, 14.0, 20.0, 40.0, 26.0, 26.0, 19.0, 24.0, 20.0, 23.5, 4.0, 6.5, 13.0, 16.0, 14.0, 22.0, 41.0, 19.0, 22.0, 26.0, 4.0, 10.0, 16.0, 6.0, 10.0, 2.0, 14.0, 17.0, 20.0, 18.0, 25.0, 16.0, 27.0, 12.0, 13.0, 19.0, 17.0, 19.0, 8.0, 20.0, 19.0, 9.0, 29.0, 18.0, 23.5, 8.0, 12.0, 20.0, 16.0, 12.0, 8.0, 15.0, 14.0, 16.0, 16.0, 4.0, 14.0, 20.0, 20.0, 14.0, 10.0, 16.0, 12.0, 18.0, 22.0, 23.0, 10.0, 10.0, 14.0, 2.0, 6.0, 40.0, 15.0, 40.0, 14.0, 2.0, 17.0, 1.5, 1.0, 24.0, 8.0, 30.0, 12.0, 20.0, 13.0, 18.0, 14.0, 13.0, 22.0, 6.0, 8.0, 6.5, 2.5], [3.0, 2.0, 4.0, 5.0, 8.0, 7.0, 2.0, 9.0, 7.0, 4.0, 9.0, 5.0, 9.2, 11.0, 5.0, 40.0, 11.5, 10.0, 7.0, 6.0, 6.0, 17.0, 6.0, 7.0, 6.0, 6.0, 10.0, 2.0, 26.0, 1.0, 26.5, 8.0, 18.0, 18.0, 17.0, 4.0, 27.0, 2.0, 12.0, 10.0, 20.0, 20.0, 4.0, 18.0, 40.0, 32.0, 17.5, 22.0, 40.0, 21.0, 15.0, 6.0, 18.0, 2.0, 8.0, 28.0, 22.0, 40.0, 18.0, 12.0, 8.0, 12.0, 22.0, 29.0, 8.0, 8.0, 8.0, 8.0, 2.0, 6.0, 20.0, 4.0, 12.0, 2.0, 6.0, 14.0, 15.0, 20.0, 18.0, 32.0, 21.0, 15.0, 30.0, 2.0, 26.0, 14.0, 6.0, 6.0, 28.0, 10.0, 38.0, 8.0, 18.0, 18.0, 40.0, 43.0, 20.0, 6.0, 16.0, 10.0, 10.0, 4.0, 14.0, 16.0, 14.0, 2.0, 23.0, 2.0, 20.0, 15.5, 7.0, 14.0, 10.5, 11.0, 4.0, 6.0, 8.0, 13.0, 16.0, 12.0, 14.0, 9.0, 22.2, 20.0, 30.0, 28.0, 7.0, 9.0, 17.5, 6.0, 12.0, 10.0, 9.0, 6.0, 10.0, 14.0, 14.0, 2.0, 9.5, 9.0, 1.0, 2.5, 15.0, 4.0, 4.0, 3.0, 7.0, 8.0, 20.0, 34.5, 10.0, 32.0, 12.0, 10.0, 10.0, 10.0, 29.5, 16.5, 4.0, 10.0, 31.5, 30.0, 2.0, 14.0, 16.0, 5.0, 16.0, 10.0, 8.0, 18.0, 24.0, 24.0, 4.0, 28.0, 8.0, 4.0, 33.0, 4.0, 32.0, 6.0, 14.0, 24.0, 6.0, 36.0, 18.0, 24.0, 31.0, 38.5, 2.0, 36.0, 8.0, 12.0, 32.0, 22.0, 11.0, 2.0, 18.0, 6.0, 8.0, 10.0, 14.0, 24.0, 16.0, 2.0, 14.0, 20.0, 22.0, 16.0, 10.0, 12.0, 12.0, 16.0, 14.0, 14.0, 12.0, 18.0, 28.0, 40.0, 14.0, 20.0, 14.0, 17.0, 30.0, 8.0, 6.0, 6.0, 8.0, 24.0, 28.0, 12.0, 12.0, 20.0, 39.0, 16.0, 7.0, 30.0, 18.0, 20.0, 24.0], [2.0, 36.5, 6.0, 5.0, 8.0, 7.5, 14.0, 3.0, 2.0, 5.0, 10.0, 6.0, 4.0, 6.0, 12.0, 13.0, 9.0, 5.0, 14.0, 10.0, 8.0, 6.0, 8.0, 6.0, 7.0, 23.5, 3.0, 10.0, 8.0, 8.0, 10.0, 6.5, 24.0, 9.0, 1.5, 16.0, 34.0, 8.0, 8.0, 2.0, 4.0, 30.0, 2.0, 27.0, 19.5, 2.0, 11.0, 24.0, 6.0, 5.0, 4.0, 13.0, 21.0, 1.0, 12.0, 5.5, 12.0, 24.0, 29.0, 4.0, 26.0, 12.0, 20.0, 24.0, 18.0, 36.0, 10.0, 14.0, 18.0, 24.0, 20.0, 18.0, 26.0, 26.0, 12.0, 24.0, 18.0, 8.0, 18.0]], "合作深度": [[2.0, 6.0, 3.0, 10.0, 5.0, 5.0, 2.0, 8.0, 9.0, 3.0, 163.7, 18.0, 14.0, 4.0, 6.0, 184.5, 13.0, 2.0, 10.0, 4.0, 5.0, 6.0, 9.0, 40.0, 8.0, 3.0, 7.0, 7.0, 1.0, 6.0, 29.0, 6.0, 10.0, 12.0, 8.0, 22.0, 17.0, 11.0, 8.0, 26.0, 21.0, 30.0, 18.5, 1.0, 34.0, 33.0, 18.0, 18.0, 4.0, 16.0, 17.0, 19.0, 4.0, 13.0, 21.0, 24.0, 18.0, 18.0, 17.0, 10.0, 2.0, 29.0, 12.0, 10.0, 6.0, 10.0, 8.0, 16.0, 4.0, 18.0, 12.0, 8.0, 20.0, 15.0, 14.0, 8.0, 4.0, 1.0, 6.0, 7.0, 2.0, 1.5, 20.0, 12.0, 20.0, 17.0, 40.0, 38.0, 18.0, 34.0, 35.0, 18.0, 40.0, 21.0, 15.0, 14.0, 20.5, 18.0, 14.5, 16.0, 38.0, 4.0, 8.0, 6.0, 16.0, 20.0, 12.0, 19.5, 18.0, 37.0, 2.0, 18.0, 16.0, 6.0, 22.0, 2.0, 4.0, 10.0, 21.0, 22.0, 40.0, 16.0, 16.0, 15.0, 18.0, 28.0, 8.0, 12.0, 16.0, 18.5, 2.0, 5.0, 30.0, 17.0, 16.0, 18.0, 18.5, 18.0, 22.0, 10.0, 44.0, 22.0, 8.0, 10.0, 14.0, 12.0, 6.0, 10.0, 8.0, 8.0, 8.0, 8.0, 8.0, 2.0, 12.0, 6.0, 30.0, 5.0, 4.0, 6.0, 20.0, 30.0, 12.0, 8.0, 34.0, 26.0, 20.0, 2.0, 4.0, 36.0, 14.0, 24.0, 14.0, 40.0, 2.0, 15.0, 34.0, 20.0, 22.5, 18.0, 28.0, 21.0, 14.0, 2.0, 16.0, 20.0, 11.5, 16.0, 24.0, 15.0, 15.0, 15.0, 22.0, 15.0, 38.0, 18.0, 41.0, 30.0, 15.0, 21.0, 14.0, 15.0, 2.0, 38.0, 12.0, 40.0, 30.0, 26.0, 10.0, 8.0, 6.0, 20.0, 24.0, 1.0, 26.0, 13.0, 40.0, 20.0, 5.0, 18.0, 12.0, 34.0, 38.0, 8.0, 18.0, 4.0, 18.0, 26.0, 22.0, 2.0, 40.0, 20.0, 6.0, 2.0, 16.0, 10.0, 10.0, 21.0, 20.0, 11.0, 4.0, 18.0, 12.0, 16.0, 24.0, 14.0, 17.0, 18.0, 20.5, 19.0, 14.0, 16.5, 18.0, 20.0, 13.0, 9.0, 18.5, 16.5, 12.0, 23.0, 16.0, 12.0, 13.0, 15.5, 14.0, 8.0, 10.0, 6.0, 7.0, 14.0, 16.0, 24.0, 3.5, 22.2, 5.0, 14.0, 8.0, 12.0, 10.0, 6.0, 31.0, 12.0, 19.0, 3.0, 11.0, 10.0, 6.0, 14.0, 2.0, 16.0, 12.0, 11.0, 4.0, 2.5, 4.0, 4.0, 7.0, 1.0, 8.0, 20.0, 34.5, 10.0, 14.0, 12.0, 6.0, 21.0, 34.0, 68.0, 1.0, 16.5, 7.0, 4.0, 8.0, 13.0, 9.0, 31.5, 2.0, 14.0, 16.0, 10.0, 21.0, 10.0, 12.0, 20.0, 24.0, 23.5, 8.0, 40.0, 24.0, 38.0, 16.0, 2.0, 6.0, 28.0, 18.0, 36.0, 16.0, 2.0, 4.0, 33.0, 26.0, 1.0, 2.0, 2.0, 28.0, 42.0, 32.0, 6.0, 14.5, 14.0, 20.0, 20.5, 24.0, 6.0, 1.0, 12.0, 16.0, 44.0, 36.0, 18.0, 36.0, 22.0, 14.0, 14.0, 28.0, 4.0, 10.0, 40.0, 18.0, 36.0, 23.0, 14.0, 11.0, 38.5, 30.0, 36.0, 40.0, 12.0, 12.0, 32.0, 22.0, 6.0, 26.0, 8.0, 2.0, 3.0, 28.0, 2.0, 18.0, 22.0, 24.5, 14.0, 24.0, 16.0, 38.0, 35.0, 41.0, 23.0, 23.0, 40.0, 23.0, 48.0, 2.0, 2.0, 8.0, 26.0, 16.0, 22.0, 18.0, 23.0, 10.0, 12.0, 12.0, 40.0, 16.0, 14.0, 24.0, 24.0, 38.0, 10.0, 14.0, 20.0, 26.0, 12.0, 29.0, 22.0, 38.0, 12.0, 28.0, 26.0, 30.0, 28.0, 12.0, 10.0, 38.0, 10.0, 16.0, 14.0, 14.0, 20.0, 17.0, 18.0, 24.0, 12.0, 15.0, 6.0, 26.0, 20.0, 40.0, 14.0, 31.5, 14.0, 24.0, 40.0, 28.0, 23.5, 6.5, 10.0, 6.0, 12.0, 10.0, 2.0, 20.0, 18.0, 25.0, 27.0, 13.0, 18.0, 23.5, 12.0, 39.0, 8.0, 16.0, 16.0, 14.0, 20.0, 20.0, 16.0, 10.0, 10.0, 14.0, 18.0, 14.0, 7.0, 30.0, 24.0, 8.0, 30.0, 12.0, 18.0, 20.0, 22.0, 24.0, 6.0, 6.5, 2.5], [9.0, 36.5, 4.0, 2.0, 7.0, 8.0, 10.0, 6.0, 6.0, 29.0, 8.0, 4.0, 7.0, 4.0, 10.0, 11.0, 7.0, 2.0, 8.0, 9.5, 11.5, 2.0, 7.0, 10.0, 5.0, 7.0, 8.0, 98.5, 17.0, 7.0, 2.0, 6.0, 4.0, 20.0, 22.0, 16.0, 41.0, 20.0, 7.0, 2.0, 18.0, 16.5, 10.0, 14.0, 21.0, 17.0, 2.0, 8.0, 20.0, 34.0, 29.0, 6.0, 22.0, 4.0, 14.0, 4.0, 11.0, 24.0, 21.0, 12.0, 24.0, 2.0, 10.0, 22.0, 8.0, 2.0, 4.0, 12.0, 14.0, 43.0, 16.0, 18.0, 41.0, 40.0, 20.0, 6.0, 13.0, 40.0, 7.0, 8.0, 4.0, 4.0, 1.0, 23.0, 12.0, 8.0, 2.0, 8.0, 16.0, 39.0, 2.0, 4.0, 36.0, 22.0, 9.0, 34.0, 28.0, 18.0, 14.0, 2.0, 26.5, 5.0, 36.0, 4.0, 12.0, 18.0, 16.0, 1.0, 40.0, 2.0, 9.0, 6.0, 41.0, 34.0, 26.0, 24.0, 24.0, 2.0, 32.0, 20.0, 13.0, 15.0, 20.0, 20.0, 14.0, 17.0, 40.0, 35.0, 28.0, 22.0, 18.0, 40.0, 25.0, 12.0, 18.0, 11.0, 10.0, 22.0, 41.0, 10.0, 36.0, 2.0, 40.0, 32.0, 12.0, 26.0, 22.0, 14.0, 34.0, 6.0, 8.0, 52.0, 16.0, 32.0, 22.0, 24.0, 24.0, 4.0, 6.5, 6.0, 18.0, 6.0, 10.0, 2.0, 16.0, 19.5, 10.5, 12.0, 14.5, 15.0, 20.0, 15.0, 10.5, 30.5, 11.0, 16.0, 8.0, 6.0, 13.0, 12.0, 14.0, 461.0, 7.0, 149.0, 30.0, 12.0, 18.0, 9.0, 17.5, 6.0, 1.0, 37.0, 14.0, 12.0, 8.0, 4.0, 31.0, 14.0, 11.0, 18.0, 3.0, 13.0, 6.0, 16.0, 2.0, 32.0, 13.0, 28.5, 15.0, 8.0, 4.0, 2.0, 30.0, 20.0, 16.0, 5.0, 2.0, 16.0, 18.0, 18.0, 4.0, 28.0, 12.0, 10.0, 14.0, 22.0, 29.0, 22.0, 4.0, 10.0, 6.0, 12.0, 2.0, 4.0, 18.0, 16.0, 3.0, 38.0, 40.0, 14.0, 36.0, 26.0, 24.0, 40.0, 10.0, 24.0, 11.0, 38.0, 45.0, 10.0, 48.0, 18.0, 8.0, 22.0, 24.0, 16.0, 2.0, 10.0, 4.0, 30.5, 12.0, 32.0, 41.0, 14.0, 21.0, 14.0, 16.0, 22.0, 28.0, 34.0, 28.0, 41.0, 32.0, 40.0, 28.0, 30.0, 38.0, 22.0, 16.0, 30.0, 4.0, 12.0, 18.0, 40.0, 14.0, 2.0, 4.0, 14.0, 14.0, 19.0, 16.0, 15.0, 19.0, 4.0, 18.0, 17.0, 40.0, 8.0, 19.0, 2.0, 24.0, 17.0, 26.0, 19.0, 24.0, 20.0, 4.0, 41.0, 22.0, 26.0, 4.0, 16.0, 14.0, 17.0, 12.0, 16.0, 12.0, 18.0, 19.0, 12.0, 14.0, 10.0, 12.0, 23.0, 2.0, 17.0, 1.5, 20.0, 13.0], [74.0, 4.0, 8.0, 7.5, 14.0, 4.0, 2.0, 10.0, 11.0, 6.0, 11.0, 8.2, 14.0, 2.0, 10.0, 5.0, 3.0, 10.0, 3.0, 10.0, 10.0, 13.0, 6.0, 9.0, 10.0, 2.0, 6.0, 6.0, 6.0, 6.5, 4.0, 2.0, 24.0, 26.5, 26.0, 8.0, 4.0, 13.0, 20.0, 9.0, 20.0, 32.0, 22.0, 40.0, 23.0, 10.0, 34.0, 9.0, 28.0, 18.0, 12.0, 29.0, 10.0, 22.0, 8.0, 20.0, 24.0, 21.0, 4.0, 26.0, 15.0, 6.0, 22.0, 43.0, 18.0, 16.0, 30.0, 16.0, 2.0, 2.0, 2.0, 7.0, 2.0, 4.0, 13.0, 9.0, 5.0, 20.0, 7.0, 4.0, 14.0, 42.5, 12.5, 9.0, 11.0, 3.0, 14.0, 14.0, 12.0, 19.5, 9.5, 12.0, 16.0, 8.0, 5.0, 7.0, 7.0, 7.0, 3.5, 4.0, 6.0, 21.0, 10.0, 9.0, 29.5, 12.0, 14.0, 10.0, 8.0, 24.0, 13.5, 42.0, 24.0, 4.0, 20.0, 24.0, 31.0, 2.0, 8.0, 36.0, 32.0, 6.0, 2.0, 18.0, 14.0, 20.0, 21.0, 16.0, 4.0, 30.0, 36.0, 39.0, 16.0, 18.0, 26.0, 30.0, 8.0, 6.0, 12.0, 24.0, 19.0, 9.0, 29.0, 16.0, 8.0], [8.0, 8.0, 16.0, 6.0, 2.0, 9.0, 5.0, 9.0, 23.5, 9.2, 4.0, 6.0, 10.0, 23.5, 3.0, 13.0, 7.0, 14.0, 19.0, 9.0, 16.0, 4.0, 6.0, 27.0, 45.0, 18.0, 16.0, 13.5, 18.0, 22.0, 38.0, 14.0, 22.0, 41.0, 17.0, 41.0, 24.0, 17.5, 17.0, 30.0, 23.0, 25.0, 34.0, 6.0, 8.0, 7.0, 16.0, 9.0, 4.0, 6.0, 36.0, 1.0, 14.0, 14.0, 22.0, 4.0, 8.0, 13.0, 27.0, 26.0, 6.0, 28.0, 8.0, 6.0, 10.2, 11.0, 20.0, 20.0, 20.0, 40.0, 32.0, 18.0, 18.0, 18.0, 18.0, 8.0, 27.0, 24.0, 18.0, 2.0, 30.0, 6.0, 15.0, 14.0, 8.0, 16.0, 16.0, 18.0, 32.0, 26.0, 6.0, 10.0, 10.0, 38.0, 17.0, 40.0, 5.5, 18.0, 26.0, 32.0, 20.0, 10.0, 17.0, 2.0, 8.0, 24.5, 14.0, 19.0, 12.0, 18.0, 21.0, 12.0, 14.0, 14.0, 4.0, 5.0, 28.0, 30.0, 12.0, 10.0, 19.0, 4.0, 10.0, 15.0, 14.0, 2.0, 13.0, 10.0, 22.0, 7.0, 4.0, 10.0, 14.0, 23.0, 33.0, 15.0, 16.0, 30.0, 20.0, 10.5, 14.0, 2.0, 8.0, 18.0, 12.0, 27.0, 41.0, 15.0, 13.0, 14.0, 4.0, 19.0, 22.0, 8.0, 8.0, 4.0, 5.0, 12.0, 7.0, 14.0, 4.0, 19.5, 18.0, 10.0, 10.0, 4.0, 5.0, 14.0, 7.0, 8.0, 21.0, 8.0, 44.5, 29.5, 17.0, 1.0, 8.0, 7.0, 4.0, 18.5, 3.0, 4.0, 30.0, 4.0, 16.0, 2.0, 52.0, 12.0, 15.0, 26.0, 20.0, 8.0, 18.0, 12.0, 24.0, 14.0, 28.0, 10.0, 3.0, 20.0, 26.0, 10.0, 4.0, 20.5, 2.0, 41.0, 12.0, 22.0, 18.0, 8.0, 2.0, 3.0, 4.0, 30.0, 14.0, 40.0, 5.0, 29.5, 12.5, 24.0, 2.0, 12.5, 26.0, 34.0, 10.0, 14.0, 21.5, 30.0, 10.0, 30.0, 42.0, 40.0, 31.0, 10.0, 14.0, 4.0, 40.0, 8.0, 20.0, 14.0, 18.0, 10.0, 40.0, 14.0, 43.0, 2.0, 18.0, 20.0, 18.0, 18.0, 16.0, 20.0, 22.0, 40.0, 40.0, 32.0, 30.0, 20.0, 12.0, 40.0, 14.0, 12.0, 4.0, 17.0, 18.0, 26.0, 19.0, 24.5, 14.0, 4.0, 22.0, 23.0, 18.0, 25.0, 14.0, 26.0, 30.0, 26.0, 14.0, 20.0, 26.0, 13.0, 16.0, 14.0, 22.0, 19.0, 19.0, 17.0, 8.0, 20.0, 20.0, 20.0, 15.0, 4.0, 14.0, 18.0, 2.0, 6.0, 40.0, 15.0, 40.0, 1.0, 18.0, 14.0, 13.0], [7.0, 12.0, 9.5, 2.0, 8.0, 4.0, 5.0, 7.0, 11.0, 9.0, 9.5, 10.5, 6.0, 8.0, 6.0, 14.0, 24.0, 14.0, 18.0, 14.0, 27.0, 6.0, 2.0, 11.0, 26.0, 19.5, 8.5, 2.0, 28.0, 10.0, 11.0, 2.0, 9.0, 15.0, 13.5, 8.0, 2.0, 10.0, 10.0, 5.5, 14.0, 10.0, 8.0, 8.0, 16.0, 22.0]], "C指数": [[2.0, 9.0, 36.5, 3.0, 10.0, 5.0, 4.0, 2.0, 4.0, 8.0, 2.0, 8.0, 10.0, 6.0, 8.0, 9.0, 6.0, 2.0, 16.0, 8.0, 2.0, 6.0, 9.5, 7.0, 2.0, 2.0, 8.2, 8.0, 4.0, 9.0, 23.5, 5.0, 7.0, 4.0, 2.0, 8.0, 5.0, 10.0, 40.0, 10.0, 9.5, 8.0, 11.5, 2.0, 7.0, 3.0, 7.0, 7.0, 3.0, 10.0, 3.0, 10.0, 5.0, 13.0, 7.0, 6.0, 6.0, 9.0, 98.5, 17.0, 29.0, 7.0, 2.0, 6.0, 2.0, 6.0, 6.5, 4.0, 2.0, 11.0, 9.0, 24.0, 30.0, 18.5, 1.0, 26.5, 34.0, 4.0, 17.0, 13.0, 2.0, 6.0, 13.5, 8.0, 2.0, 11.0, 1.5, 20.0, 12.0, 20.0, 18.0, 24.0, 18.0, 23.0, 10.0, 15.0, 43.0, 14.0, 16.0, 34.0, 6.0, 2.0, 9.0, 4.0, 16.0, 20.0, 8.0, 16.0, 2.0, 5.0, 22.0, 18.0, 10.0, 8.0, 8.0, 8.0, 16.0, 2.0, 20.0, 4.0, 12.0, 34.0, 2.0, 26.0, 6.0, 36.0, 14.0, 38.0, 40.0, 24.0, 2.0, 32.0, 21.0, 13.0, 16.0, 16.0, 15.0, 22.0, 40.0, 15.0, 38.0, 30.0, 2.0, 12.0, 26.0, 6.0, 26.0, 10.0, 40.0, 22.0, 34.0, 38.0, 18.0, 2.0, 6.0, 2.0, 16.0, 10.0, 4.0, 18.0, 23.0, 32.0, 14.0, 10.5, 22.0, 12.0, 13.0, 20.0, 14.0, 15.0, 7.0, 30.5, 2.0, 11.0, 4.0, 6.0, 8.0, 13.0, 10.0, 12.0, 9.0, 3.5, 10.0, 461.0, 5.0, 2.0, 7.0, 30.0, 14.0, 9.0, 8.0, 42.5, 1.0, 10.0, 9.0, 3.0, 31.0, 3.0, 14.0, 10.0, 6.0, 12.0, 2.0, 4.0, 16.0, 9.5, 4.0, 16.0, 2.5, 15.0, 3.0, 4.0, 7.0, 4.0, 6.0, 3.0, 1.0, 8.0, 34.5, 32.0, 16.0, 4.0, 6.0, 12.0, 34.0, 15.0, 10.0, 12.0, 9.0, 1.0, 16.5, 4.0, 4.0, 8.0, 2.0, 20.0, 21.0, 10.0, 12.0, 20.0, 24.0, 8.0, 24.0, 16.0, 6.0, 28.0, 18.0, 12.0, 24.0, 41.0, 36.0, 4.0, 26.0, 2.0, 42.0, 6.0, 18.0, 14.0, 16.0, 6.0, 1.0, 12.0, 40.0, 16.0, 12.5, 22.0, 24.0, 18.0, 14.0, 30.0, 2.0, 24.0, 8.0, 3.0, 2.0, 10.0, 18.0, 22.0, 10.0, 14.0, 24.0, 16.0, 16.0, 18.0, 40.0, 12.0, 48.0, 41.0, 14.0, 8.0, 20.0, 16.0, 18.0, 16.0, 23.0, 12.0, 14.0, 24.0, 32.0, 24.0, 14.0, 22.0, 16.0, 26.0, 40.0, 2.0, 4.0, 14.0, 19.0, 16.0, 24.0, 30.0, 15.0, 8.0, 20.0, 40.0, 24.0, 30.0, 24.0, 24.0, 4.0, 6.0, 12.0, 10.0, 20.0, 19.0, 9.0, 29.0, 39.0, 20.0, 12.0, 14.0, 20.0, 16.0, 22.0, 23.0, 10.0, 14.0, 2.0, 30.0, 24.0, 18.0, 20.0, 6.5], [74.0, 8.0, 7.0, 163.7, 11.0, 18.0, 14.0, 184.5, 4.0, 11.0, 13.0, 8.0, 6.0, 7.0, 4.0, 14.0, 12.0, 8.0, 22.0, 19.0, 17.0, 20.0, 8.0, 22.0, 21.0, 16.0, 41.0, 20.0, 16.0, 7.0, 4.0, 2.0, 26.0, 18.0, 8.0, 33.0, 16.5, 18.0, 18.0, 4.0, 16.0, 17.0, 10.0, 6.0, 14.0, 19.0, 13.0, 21.0, 21.0, 24.0, 17.0, 10.0, 27.0, 2.0, 45.0, 29.0, 12.0, 8.0, 20.0, 10.0, 6.0, 10.0, 8.0, 34.0, 29.0, 16.0, 18.0, 4.0, 18.0, 16.0, 12.0, 18.0, 15.0, 14.0, 22.0, 22.0, 8.0, 38.0, 4.0, 4.0, 14.0, 1.0, 14.0, 22.0, 7.0, 4.0, 41.0, 17.0, 24.0, 21.0, 20.0, 17.0, 12.0, 24.0, 40.0, 38.0, 2.0, 41.0, 34.0, 35.0, 40.0, 10.0, 17.5, 17.0, 30.0, 22.0, 21.0, 8.0, 23.0, 25.0, 34.0, 6.0, 8.0, 2.0, 7.0, 16.0, 14.0, 4.0, 12.0, 9.0, 14.0, 4.0, 20.5, 18.0, 14.5, 6.0, 16.0, 16.0, 36.0, 24.0, 18.0, 38.0, 41.0, 40.0, 1.0, 4.0, 8.0, 14.0, 20.0, 22.0, 20.0, 12.0, 19.5, 6.0, 18.0, 4.0, 37.0, 18.0, 16.0, 13.0, 40.0, 14.0, 8.0, 22.0, 4.0, 10.0, 7.0, 8.0, 4.0, 13.0, 1.0, 27.0, 26.0, 21.0, 23.0, 6.0, 28.0, 40.0, 16.0, 12.0, 8.0, 6.0, 15.0, 10.2, 18.0, 28.0, 11.0, 8.0, 2.0, 12.0, 20.0, 8.0, 16.0, 18.5, 20.0, 39.0, 2.0, 17.0, 16.0, 4.0, 36.0, 22.0, 40.0, 9.0, 34.0, 32.0, 18.0, 18.0, 28.0, 18.0, 18.0, 14.0, 18.5, 18.0, 18.0, 8.0, 18.0, 27.0, 10.0, 44.0, 22.0, 2.0, 24.0, 26.5, 8.0, 5.0, 2.0, 36.0, 4.0, 10.0, 14.0, 30.0, 12.0, 12.0, 6.0, 18.0, 6.0, 16.0, 10.0, 15.0, 14.0, 1.0, 40.0, 8.0, 8.0, 2.0, 12.0, 30.0, 5.0, 9.0, 16.0, 6.0, 18.0, 20.0, 6.0, 30.0, 8.0, 32.0, 41.0, 34.0, 26.0, 26.0, 20.0, 4.0, 14.0, 24.0, 24.0, 10.0, 10.0, 40.0, 17.0, 24.0, 5.5, 34.0, 18.0, 20.0, 26.0, 22.5, 18.0, 32.0, 28.0, 20.0, 14.0, 20.0, 2.0, 10.0, 20.0, 15.0, 17.0, 11.5, 21.0, 24.0, 20.0, 2.0, 15.0, 20.0, 15.0, 14.0, 8.0, 24.5, 14.0, 17.0, 19.0, 18.0, 41.0, 12.0, 18.0, 35.0, 15.0, 21.0, 28.0, 14.0, 21.0, 18.0, 26.0, 12.0, 14.0, 22.0, 38.0, 18.0, 40.0, 14.0, 30.0, 40.0, 10.0, 8.0, 6.0, 4.0, 20.0, 5.0, 25.0, 12.0, 28.0, 30.0, 18.0, 24.0, 1.0, 12.0, 13.0, 19.0, 20.0, 4.0, 10.0, 11.0, 5.0, 18.0, 15.0, 10.0, 14.0, 22.0, 2.0, 41.0, 8.0, 10.0, 18.0, 36.0, 4.0, 40.0, 26.0, 22.0, 32.0, 2.0, 12.0, 40.0, 20.0, 26.0, 13.0, 21.0, 20.0, 22.0, 10.0, 11.0, 14.0, 34.0, 22.0, 7.0, 4.0, 10.0, 18.0, 14.0, 6.0, 8.0, 12.0, 16.0, 52.0, 16.0, 33.0, 24.0, 14.0, 17.0, 22.0, 24.0, 24.0, 15.0, 16.0, 4.0, 30.0, 20.0, 18.0, 6.5, 10.5, 16.0, 6.0, 14.0, 20.5, 19.0, 18.0, 6.0, 2.0, 14.0, 16.0, 16.5, 8.0, 18.0, 12.0, 18.0, 27.0, 41.0, 15.0, 13.0, 10.0, 2.0, 20.0, 16.0, 4.0, 13.0, 19.0, 19.5, 9.0, 18.5, 16.5, 12.0, 8.0, 14.5, 8.0, 15.0, 12.0, 16.0, 5.0, 12.0, 14.0, 10.5, 6.0, 10.0, 16.0, 7.0, 4.0, 14.0, 6.0, 26.0, 22.2, 19.5, 7.0, 149.0, 5.0, 14.0, 7.0, 14.0, 10.0, 18.0, 17.5, 8.0, 21.0, 12.5, 6.0, 37.0, 14.0, 11.0, 12.0, 12.0, 19.0, 44.5, 11.0, 14.0, 11.0, 31.0, 14.0, 2.0, 29.5, 9.0, 8.0, 11.0, 7.0, 8.0, 8.0, 18.0, 4.0, 13.0, 16.0, 18.5, 7.0, 4.0, 2.0, 10.0, 30.0, 14.0, 3.5, 6.0, 28.5, 52.0, 68.0, 15.0, 8.0, 7.0, 13.0, 2.0, 31.5, 26.0, 30.0, 14.0, 16.0, 5.0, 16.0, 10.0, 20.0, 2.0, 8.0, 18.0, 23.5, 12.0, 24.0, 14.0, 18.0, 28.0, 40.0, 10.0, 3.0, 20.0, 38.0, 13.5, 26.0, 10.0, 4.0, 18.0, 2.0, 20.5, 2.0, 4.0, 28.0, 10.0, 12.0, 14.0, 22.0, 22.0, 16.0, 2.0, 29.0, 18.0, 22.0, 8.0, 4.0, 4.0, 33.0, 2.0, 10.0, 3.0, 4.0, 1.0, 6.0, 12.0, 2.0, 2.0, 28.0, 4.0, 32.0, 14.5, 20.0, 20.5, 30.0, 24.0, 14.0, 3.0, 38.0, 40.0, 5.0, 44.0, 29.5, 36.0, 18.0, 36.0, 24.0, 14.0, 14.0, 28.0, 4.0, 2.0, 10.0, 14.0, 36.0, 26.0, 40.0, 40.0, 12.5, 26.0, 36.0, 10.0, 14.0, 11.0, 34.0, 38.5, 36.0, 40.0, 8.0, 12.0, 12.0, 32.0, 22.0, 6.0, 10.0, 11.0, 26.0, 38.0, 2.0, 14.0, 21.5, 30.0, 10.0, 30.0, 45.0, 42.0, 32.0, 48.0, 18.0, 40.0, 8.0, 31.0, 24.5, 22.0, 24.0, 2.0, 10.0, 14.0, 10.0, 4.0, 38.0, 4.0, 40.0, 30.5, 35.0, 8.0, 20.0, 41.0, 23.0, 23.0, 14.0, 18.0, 10.0, 23.0, 40.0, 14.0, 43.0, 32.0, 2.0, 2.0, 2.0, 26.0, 21.0, 18.0, 14.0, 16.0, 22.0, 28.0, 18.0, 21.0, 18.0, 34.0, 16.0, 28.0, 10.0, 20.0, 22.0, 40.0, 16.0, 41.0, 40.0, 40.0, 32.0, 30.0, 20.0, 12.0, 40.0, 38.0, 40.0, 10.0, 28.0, 4.0, 14.0, 12.0, 26.0, 30.0, 30.0, 12.0, 38.0, 16.0, 36.0, 4.0, 17.0, 18.0, 39.0, 29.0, 22.0, 26.0, 38.0, 12.0, 30.0, 28.0, 4.0, 19.0, 28.0, 12.0, 12.0, 24.5, 38.0, 10.0, 18.0, 16.0, 14.0, 14.0, 4.0, 22.0, 23.0, 20.0, 18.0, 14.0, 14.0, 15.0, 17.0, 18.0, 19.0, 4.0, 12.0, 25.0, 6.0, 18.0, 14.0, 17.0, 40.0, 14.0, 31.5, 26.0, 14.0, 8.0, 19.0, 2.0, 24.0, 26.0, 17.0, 14.0, 20.0, 40.0, 26.0, 26.0, 28.0, 19.0, 20.0, 23.5, 6.5, 13.0, 16.0, 14.0, 22.0, 41.0, 19.0, 22.0, 26.0, 4.0, 10.0, 16.0, 2.0, 14.0, 17.0, 12.0, 18.0, 25.0, 16.0, 27.0, 12.0, 13.0, 19.0, 17.0, 19.0, 8.0, 20.0, 18.0, 23.5, 8.0, 12.0, 16.0, 8.0, 15.0, 16.0, 16.0, 4.0, 14.0, 20.0, 14.0, 10.0, 12.0, 18.0, 10.0, 6.0, 40.0, 15.0, 40.0, 14.0, 2.0, 7.0, 17.0, 1.5, 1.0, 30.0, 12.0, 20.0, 13.0, 18.0, 14.0, 13.0, 22.0, 6.0, 2.5], [8.0, 7.0, 14.0, 29.0, 10.0, 6.0, 13.0, 4.0, 9.0, 14.0, 4.0, 2.0, 6.0, 10.0, 23.5, 9.5, 10.0, 6.0, 6.0, 10.0, 26.0, 18.0, 18.0, 4.0, 20.0, 20.0, 6.0, 32.0, 22.0, 40.0, 6.0, 2.0, 28.0, 18.0, 22.0, 12.0, 30.0, 29.0, 22.0, 8.0, 6.0, 8.0, 2.0, 15.0, 4.0, 15.0, 15.0, 12.0, 43.0, 10.0, 2.0, 2.0, 23.0, 2.0, 15.5, 8.0, 7.0, 19.5, 18.0, 2.0, 14.0, 5.0, 20.0, 28.0, 12.0, 4.0, 6.0, 8.0, 8.0, 14.0, 19.5, 12.0, 11.0, 12.0, 20.0, 4.0, 21.0, 21.0, 10.0, 12.0, 14.0, 8.0, 24.0, 16.0, 42.0, 20.0, 24.0, 31.0, 23.0, 28.0, 36.0, 6.0, 2.0, 14.0, 20.0, 22.0, 12.0, 20.0, 18.0, 30.0, 10.0, 14.0, 26.0, 6.0, 26.0, 12.0, 18.0, 20.0, 16.0, 18.0, 8.0, 24.0, 8.0], [6.0, 7.5, 3.0, 11.0, 12.0, 5.0, 10.0, 10.0, 9.2, 6.0, 7.0, 1.0, 5.0, 10.5, 8.0, 10.0, 14.0, 9.0, 14.0, 30.0, 4.0, 27.0, 13.0, 16.0, 11.0, 24.0, 8.5, 12.0, 17.0, 1.0, 13.5, 5.0, 2.0, 7.0, 7.0, 13.0, 10.0, 29.5, 9.0, 5.5, 8.0]]}
var data2 =echarts.dataTool.prepareBoxplotData(data1["合作广度"]);
var data3 =echarts.dataTool.prepareBoxplotData(data1["合作深度"]);
var data4 =echarts.dataTool.prepareBoxplotData(data1["C指数"]);

var xAxisList = [], yAxisList = [], yData = [];
var varList1 = ['CB-Ⅰ', 'CB-Ⅱ', 'CB-Ⅲ'];
var varList2 = ['CD-Ⅰ', 'CD-Ⅱ', 'CD-Ⅲ', 'CD-Ⅳ', 'CD-Ⅴ'];
var varList3 = ['C-Ⅰ', 'C-Ⅱ', 'C-Ⅲ', 'C-Ⅳ'];
data2 = data2['boxData'];
data3 = data3['boxData'];
data4 = data4['boxData'];

for(var i=0;i<data2.length;i++){
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
            boxWidth:['1%','2%'],
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
                        '合作广度类型: ' + param.name,
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
            boxWidth:['1%','2%'],
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
                        '合作深度类型: ' + param.name,
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
            boxWidth:['1%','2%'],
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
                        'C指数类型: ' + param.name,
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

option888 = {
    title: {
            text: '科\n研\n合\n作\n变\n化\n类\n型\n项\n目\n得\n分',
            right: 'right',
            top:"top",
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
        top:'-38%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-31%',
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
        top:'-14%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-7%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'0%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'7%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'14%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'24%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'31%',
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
        top:'45%',
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


var data1 = {"合作广度": [[13.6399855699856, 15.625, 2.0, 2.0, 1.13333333333333, 2.0, 2.2, 8.66666666666667, 5.0, 5.5, 4.0, 7.0, 4.1, 8.0, 11.0042246642247, 12.3619047619048, 2.0, 6.10909090909091, 18.0, 4.0, 4.12727272727273, 5.34444444444444, 15.757437007437, 9.27777777777778, 9.03333333333333, 8.5, 4.13333333333333, 4.0, 1.2, 5.08181818181818, 10.0, 18.5272727272727, 9.06666666666667, 3.0, 2.2, 4.33333333333333, 4.0, 5.2, 14.0, 12.5, 5.0, 5.0, 2.0, 9.94090909090909, 0.666666666666667, 1.0, 5.16666666666667, 10.0, 0.0972222222222222, 1.0, 4.11111111111111, 6.16666666666667, 5.0, 0.127272727272727, 3.59090909090909, 0.118181818181818, 7.0, 10.8333333333333, 5.0, 7.0, 10.0, 14.8333333333333, 8.66666666666667, 2.0, 8.16666666666667, 7.66666666666667, 0.0151515151515152, 9.27142857142857, 8.85638528138528, 29.1666666666667, 1.0, 6.0, 15.7428571428571, 3.28571428571429, 4.05238095238095, 5.0, 4.0, 7.94141414141414, 4.0, 15.3253968253968, 12.7948051948052, 4.18181818181818, 24.0, 21.0880952380952, 16.1242424242424, 13.525, 13.4843073593074, 10.3453463203463, 8.0, 23.8795093795094, 16.7484848484848, 6.0, 44.7047619047619, 32.1, 14.0, 19.8631313131313, 16.7603896103896, 10.4391233766234, 6.09523809523809, 2.0, 21.330303030303, 26.0, 20.942291042291, 36.0608280608281, 21.4762265512266, 19.2666666666667, 15.4348484848485, 12.5828571428571, 18.1238095238095, 12.0, 1.37619047619048, 14.0, 20.8018939393939, 2.0, 13.2636363636364, 20.345367965368, 21.8530952380952, 25.3878246753247, 21.8952380952381, 0.0311111111111111, 13.6939393939394, 2.02, 27.7260683760684, 30.5127960927961, 8.0, 9.67936507936508, 2.0, 12.2396897546898, 10.1203740703741, 7.74401154401154, 35.2142135642136, 19.5227938727939, 19.4761904761905, 4.075, 10.5252918145432, 22.6488761238761, 18.5775335775336, 17.6071428571429, 13.6696608946609, 9.0, 5.70608835608836, 17.0719696969697, 20.2167832167832, 17.3767676767677, 25.5480519480519, 23.4305555555556, 8.70363636363636, 0.388039215686275, 0.181818181818182, 41.6531385281385, 0.174242424242424, 3.82162337662338, 1.42122877122877, 4.0, 8.21438561438561, 3.60137085137085, 0.08, 15.2344444444444, 4.07727272727273, 15.7085714285714, 22.0, 3.08454545454545, 3.09116161616162, 0.181818181818182, 4.98113912231559, 7.1005772005772, 1.73321526957891, 3.08095238095238, 0.535384615384615, 0.941269841269841, 2.17142857142857, 3.76666666666667, 6.04545454545454, 4.76176470588235, 2.4537349904997, 22.5978354978355, 12.0, 24.2666666666667, 24.662814962815, 16.0, 23.5398268398268, 22.9261882561883, 12.3833333333333, 24.1051282051282, 44.0341991341991, 46.759777999778, 2.0, 44.5493506493507, 35.4, 20.4444444444444, 34.0, 22.0888888888889, 10.5238095238095, 17.4798534798535, 30.8952380952381, 23.8380952380952, 1.96666666666667, 22.8204545454545, 11.6014368964369, 23.8731601731602, 25.8125874125874, 37.7397419247419, 8.97207792207792, 8.82940582293523, 2.0, 9.62380952380952, 10.7545454545455, 17.5095682095682, 16.9821428571429, 7.84887612387612, 12.5974025974026, 9.0, 12.6996336996337, 21.6254834054834, 4.70855810855811, 17.5416666666667, 18.2857142857143, 16.9621367521368, 6.10976190476191, 16.8888888888889, 15.9902097902098, 36.4477855477855, 7.46233766233766, 15.0555555555556, 38.0, 43.8832251082251, 40.0, 2.41904761904762, 4.5, 8.0, 0.142857142857143, 14.2, 14.4, 20.0, 20.4154270480122, 23.4710539460539, 11.0853701853702, 18.4662041467305, 1.13333333333333, 4.0, 29.6949134199134, 22.1943722943723, 18.6857142857143, 15.8943722943723, 40.9551820728291, 5.0036075036075, 14.1516339869281, 8.11904761904762, 10.5932178932179, 0.02, 5.14848484848485, 1.19047619047619, 11.0952380952381, 7.35238095238095, 9.85714285714286, 6.85324675324675, 17.99222999223, 4.22423576423576, 27.8780885780886, 21.4730519480519, 14.8001803751804, 24.6, 24.3141858141858, 7.39393939393939, 28.0, 18.5510256410256, 16.3115218115218, 2.4, 2.2052380952381, 6.51868686868687, 16.3555555555556, 11.5336435786436, 28.1183600713012, 12.1496464646465, 8.31298701298701, 2.0, 21.1139393939394, 10.7757575757576, 8.0, 16.1111111111111, 17.504329004329, 10.0234432234432, 10.0, 35.488961038961, 4.75324675324675, 2.33, 40.5457792207792, 2.0, 17.6152347652348, 13.3145454545455, 8.26983016983017, 36.2, 22.7538461538462, 45.5909090909091, 9.2, 32.1271284271284, 31.4094017094017, 10.4666666666667, 24.0699327369808, 29.4666666666667, 17.0222222222222, 19.1095238095238, 14.0, 19.0785714285714, 14.2909090909091, 19.0, 9.14285714285714, 14.3583694083694, 2.72738095238095, 25.2524741924742, 0.163636363636364, 29.9951426024955, 22.1666666666667, 2.0, 17.2825396825397, 4.00008658008658, 14.8809523809524, 11.0793650793651, 4.19047619047619, 7.18181818181818, 42.2961904761905, 10.3497835497835, 14.0, 2.0, 33.2398851148851, 12.4472222222222, 13.0511904761905, 6.81335331335331, 19.2929292929293, 4.41071428571429, 16.7106643356643, 10.3857142857143, 15.4669786096257, 16.3425597409127, 12.0, 0.754511278195489, 46.1876551226551, 10.5871212121212, 22.3333333333333, 14.1904761904762, 12.4, 33.6749250749251, 3.57142857142857, 0.353333333333333, 7.45757575757576, 18.8792929292929, 6.87181152181152, 25.496176046176, 22.7300505050505, 9.17142857142857, 24.4190476190476, 14.0142857142857, 37.3005928853755, 33.5761904761905, 45.6851370851371, 36.4579365079365, 27.3294372294372, 27.5047619047619, 21.6921356421356, 26.5, 4.0, 41.5333333333333, 14.5636363636364, 24.0, 26.1818181818182, 13.030303030303, 12.0, 40.7857142857143, 38.6666666666667, 5.80952380952381, 24.6133333333333, 40.7199222999223, 6.7, 38.4952380952381, 22.3357142857143, 19.4362770562771, 30.4, 23.2, 2.0, 33.3160173160173, 37.0222222222222, 24.9930236430236, 4.0, 20.6236237704504, 15.6031746031746, 11.1300505050505, 14.4, 20.5714285714286, 0.459523809523809, 15.2, 11.2722222222222, 8.18712121212121, 2.0, 21.3333333333333, 26.7479797979798, 0.533333333333333, 23.0142857142857, 2.2, 15.4429292929293, 22.4214141414141, 12.9621774467363, 1.49206349206349, 15.1642857142857, 8.4, 0.495757575757576, 25.8928571428571, 0.666666666666667, 15.1240626040626, 21.6333333333333, 19.5154761904762, 41.7048319327731, 19.5714285714286, 15.772027972028, 38.6666666666667, 18.1515151515152, 45.4134199134199, 11.0, 20.3333333333333, 31.6666666666667, 17.9953102453102, 22.3333333333333, 31.75781995782, 14.9898629148629, 22.2888888888889, 19.568947457771, 18.3333333333333, 14.952380952381, 24.180303030303, 41.1714285714286, 12.0, 16.0266666666667, 18.8747863247863, 44.2138888888889, 15.0911319073084, 27.2549062049062, 26.6136507936508, 41.6488095238095, 10.0, 12.0382395382395, 0.158333333333333, 4.36363636363636, 20.2404761904762, 5.13333333333333, 25.1367965367965, 13.7601787101787, 27.0666666666667, 20.379898989899, 24.6380952380952, 3.82954545454545, 12.5485714285714, 19.2, 12.1559523809524, 6.0, 40.1666666666667, 22.350222000222, 21.6922510822511, 5.61230158730159, 23.2545454545455, 12.2854545454545, 8.43221611721612, 21.2189393939394, 12.0833333333333, 20.4138528138528, 12.9312097812098, 16.1944444444444, 23.4857142857143, 34.0, 44.6722444222444, 11.3361471861472, 0.0277777777777778, 41.4184183463595, 2.0, 28.3967171717172, 23.4984126984127, 32.1666666666667, 2.0, 12.1666666666667, 42.2145998445998, 28.0731601731602, 2.0, 18.6524364524365, 10.0, 6.85714285714286, 22.6666666666667, 23.8, 11.468556998557, 14.9995670995671, 34.1980519480519, 25.434595959596, 7.0, 4.16071428571429, 10.1818181818182, 18.5231608770633, 16.2422077922078, 0.266666666666667, 2.0, 8.43614718614719, 11.1761904761905, 14.2666666666667, 0.279220779220779, 4.13333333333333, 23.2220418470418, 19.9346681096681, 20.5357142857143, 23.6333333333333, 38.3255411255411, 24.4072222222222, 14.4666666666667, 16.3701298701299, 36.9572510822511, 22.7827496175322, 25.3333333333333, 28.8178958107596, 15.6994949494949, 17.2540909090909, 2.0, 36.2002164502165, 20.1636363636364, 18.5324242424242, 4.45242424242424, 12.9165007215007, 12.9816017316017, 6.16666666666667, 16.0547619047619, 24.5924603174603, 20.0571428571429, 18.4916666666667, 1.94974025974026, 2.36363636363636, 15.3910755910756, 22.8766233766234, 9.50952380952381, 18.167619047619, 16.3714285714286, 19.0333333333333, 31.9892496392496, 49.0357142857143, 15.047619047619, 6.30699300699301, 8.90476190476191, 0.390476190476191, 21.8730158730159, 13.7705555555556, 0.229390054390054, 17.6436507936508, 22.4244422244422, 24.1349350649351, 5.0, 14.0132135408451, 15.6833333333333, 14.012987012987, 13.8025252525253, 22.6545454545455, 8.59880952380952, 16.8333333333333, 9.06580086580087, 3.35753968253968, 4.05396825396825, 3.0, 12.2666666666667, 5.0, 3.09722222222222, 15.1069518716578, 1.29090909090909, 4.0, 2.66666666666667, 14.1333333333333, 1.0, 10.7921536796537, 17.4011904761905, 11.9207792207792, 0.202020202020202, 9.0, 1.14102564102564, 11.1060606060606, 5.0, 8.0, 12.0, 4.08888888888889, 6.19047619047619, 5.0, 14.0777777777778, 6.30909090909091, 17.2888888888889, 5.41515151515152, 2.0, 0.223232323232323, 4.16666666666667, 6.0, 5.87445887445887, 3.8969696969697, 24.2393939393939, 8.73333333333333, 8.33333333333333, 50.9042450887033, 4.18181818181818, 8.67575757575758, 5.66666666666667, 7.0, 9.28571428571429, 50.3171629540051, 7.13333333333333, 10.5333333333333, 11.0, 4.14545454545455, 10.0666666666667, 12.2939393939394, 5.61471861471861, 7.60909090909091, 8.21428571428571, 11.3142857142857, 22.3761904761905, 40.5, 2.0, 10.5818181818182, 13.0573737373737, 11.6666666666667, 4.5, 12.3239538239538, 8.65384615384615, 15.852380952381, 4.39545454545455, 31.75, 13.1428571428571, 14.792069042069, 5.125, 15.1, 12.0127206127206, 19.0, 8.02380952380952, 11.6805555555556, 14.0, 24.3833333333333, 11.3333333333333, 7.0, 16.1666666666667, 7.0, 8.0, 25.6666666666667, 12.0, 2.0, 2.0, 30.8428571428571, 15.5, 11.6666666666667, 16.4583333333333, 3.96388888888889, 5.33333333333333, 20.0, 11.2916666666667, 11.2833333333333, 9.0, 6.93333333333333, 21.8571428571429, 2.0, 3.0, 2.28571428571429, 14.2434343434343, 2.0, 16.6659663865546, 1.125, 12.1111111111111, 14.1111111111111, 3.0, 9.0, 1.0, 4.5, 24.6666666666667, 15.9666666666667, 8.0, 7.53333333333333, 14.0, 4.0, 8.0, 6.2, 20.0, 35.0, 22.6666666666667, 21.2857142857143, 10.0, 23.2253427128427, 18.4396825396825, 6.33333333333333, 15.1666666666667, 14.0119047619048, 12.0, 4.0, 2.09090909090909, 2.0, 7.1, 2.0, 26.5153846153846, 22.0, 17.541889483066, 2.0, 23.2424242424242, 6.66666666666667, 10.3, 22.4, 24.0181818181818, 24.1360195360195, 17.0666666666667, 13.5111111111111, 0.791666666666667, 24.0, 14.0, 8.0, 18.8848484848485, 30.0, 45.5689393939394, 10.6051515151515, 3.75854978354978, 22.0, 38.4, 15.9282467532468, 29.9535575535576, 12.9116883116883, 6.0, 0.765476190476191, 0.666666666666667, 0.0666666666666667, 2.81212121212121, 5.86666666666667, 0.715151515151515, 0.698484848484848, 3.33333333333333, 0.427777777777778, 42.7, 20.7497474747475, 2.38015873015873, 1.03982683982684, 1.82532467532468, 0.666666666666667, 0.563636363636364, 35.0, 18.0, 12.3333333333333, 41.2993939393939, 8.05714285714286, 12.0, 14.7214285714286, 22.8666666666667, 27.5333333333333, 35.1206349206349, 19.7, 2.0, 19.3666666666667, 22.3333333333333, 4.16363636363636, 1.26666666666667, 0.2, 0.866666666666667, 0.866666666666667, 2.56804029304029, 2.0, 0.133333333333333, 1.0, 1.6, 1.6969696969697, 2.66666666666667, 2.35833333333333, 0.571428571428571, 1.07878787878788, 8.26297258297258, 2.86666666666667, 0.733333333333333, 5.93333333333333, 0.606451612903226, 3.2, 0.666666666666667, 0.380952380952381, 1.84444444444444, 0.2, 0.133333333333333, 3.6, 1.53333333333333, 4.10909090909091, 0.2, 0.4, 4.2, 8.73809523809524, 0.133333333333333, 0.5, 0.338888888888889, 2.97560606060606, 4.21212121212121, 1.28666666666667, 2.24761904761905, 3.0, 3.26666666666667, 1.0, 4.09365079365079, 0.866666666666667, 0.2, 3.41666666666667, 0.2, 0.428571428571428, 2.5, 2.39206349206349, 2.91082972582973, 0.2, 2.25454545454545, 12.2186868686869, 45.5166666666667, 18.421645021645, 17.35, 17.1333333333333, 20.8666666666667, 21.3444444444444, 30.5333333333333, 14.0, 4.77142857142857, 41.8809523809524, 1.53571428571429, 0.2, 41.152380952381, 44.1357142857143, 6.36630036630037, 7.84569892473118, 2.68831168831169, 16.3914141414141, 0.133333333333333, 0.2, 43.9533333333333, 29.3311188811189, 12.8392857142857, 30.0, 14.0, 24.0, 14.08, 16.0, 28.5277777777778, 4.0, 2.0, 10.1333333333333, 14.2666666666667, 36.2666666666667, 29.7333333333333, 40.0, 42.2, 12.875, 30.3666666666667, 16.3333333333333, 37.2705128205128, 10.2502645502645, 14.8666666666667, 14.674358974359, 10.0, 34.0952380952381, 32.0416666666667, 24.4222222222222, 40.3454545454545, 12.2857142857143, 10.0, 5.93015873015873, 11.2380952380952, 39.044474969475, 3.38030303030303, 28.0, 16.0, 18.9026984126984, 30.0, 2.0, 10.0, 30.1515151515152, 20.2, 40.1666666666667, 34.0, 42.8010101010101, 18.0, 43.6733333333333, 0.290909090909091, 33.9568181818182, 25.1284759358289, 18.3, 24.2809523809524, 14.2, 1.26666666666667, 0.619047619047619, 11.2477272727273, 15.1787878787879, 10.0, 4.13333333333333, 2.46969696969697, 34.1333333333333, 2.0, 1.35411255411255, 40.0, 29.3714285714286, 35.2, 0.0333333333333333, 8.0, 21.8444444444444, 42.1454545454545, 13.3333333333333, 26.7301587301587, 14.0, 18.4027777777778, 43.7777777777778, 10.2305555555556, 12.125, 26.102380952381, 44.0348124098124, 12.4104166666667, 43.9333333333333, 35.4174025974026, 30.4742063492063, 41.9939393939394, 2.71666666666667, 2.0247113997114, 8.45, 27.2380952380952, 20.1624542124542, 21.3005355276907, 20.0, 14.0571428571429, 18.5333333333333, 16.3333333333333, 22.2151515151515, 28.2333333333333, 16.8, 20.6666666666667, 20.6666666666667, 14.1333333333333, 10.5333333333333, 28.6, 1.21901154401154, 22.4583333333333, 24.2857142857143, 40.2, 40.3333333333333, 41.5333333333333, 24.1321428571429, 40.8600122100122, 32.4, 25.0, 32.6, 20.0, 12.952380952381, 40.3333333333333, 39.3333333333333, 42.4, 8.18888888888889, 28.0, 2.0, 18.9986813186813, 8.25, 27.4, 1.7093137254902, 30.3611111111111, 30.3333333333333, 41.6190476190476, 22.3333333333333, 17.0666666666667, 38.3611111111111, 8.98888888888889, 4.3031746031746, 4.35595238095238, 21.7422161172161, 40.725, 29.0892857142857, 23.3738095238095, 1.0, 12.2, 38.5333333333333, 12.1166666666667, 14.4, 22.0, 32.5610805860806, 4.0, 8.55555555555556, 32.6666666666667, 13.5892857142857, 16.1609307359307, 10.2, 25.2658008658009, 41.5761904761905, 10.9073593073593, 17.6190476190476, 14.0, 16.23614996115, 2.0, 4.19047619047619, 4.0, 14.3333333333333, 22.6755411255411, 23.6, 18.4, 14.6666666666667, 21.9714285714286, 8.66666666666667, 15.0166666666667, 4.0, 27.4666666666667, 11.8, 4.0, 12.0, 13.6511266511267, 10.0, 16.8124542124542, 20.0, 14.0, 16.8761904761905, 46.5880952380952, 14.4318181818182, 32.1997835497835, 26.0, 40.2, 13.0848484848485, 19.0, 2.0, 30.2, 26.25, 18.7828282828283, 14.850937950938, 0.0666666666666667, 0.794250194250194, 14.8333333333333, 20.2, 43.0, 27.054797979798, 30.8444444444444, 19.7151515151515, 23.1428571428571, 20.1900432900433, 23.0035714285714, 6.5, 13.3333333333333, 16.6925806219924, 16.880303030303, 1.26666666666667, 23.0, 42.3333333333333, 21.6, 22.0, 26.6666666666667, 4.0, 8.0, 15.5424242424242, 2.0, 10.1, 2.0, 14.8666666666667, 17.2039186303892, 20.3272727272727, 26.9895382395382, 25.8888888888889, 18.3333333333333, 30.2969696969697, 6.0, 13.3655844155844, 19.8447552447552, 21.2254329004329, 17.7333333333333, 12.7333333333333, 20.3666666666667, 19.2380952380952, 9.0, 30.0, 18.0, 23.9337662337662, 8.2, 2.0, 20.3333333333333, 16.0, 12.0, 8.0, 15.2909090909091, 2.0, 16.6666666666667, 17.155303030303, 18.963082437276, 4.12820512820513, 14.0, 20.8076923076923, 20.3581780538302, 14.6857142857143, 11.1833333333333, 16.0, 15.2727272727273, 18.2, 25.4, 23.9079365079365, 10.0, 10.2, 14.5047619047619, 4.0, 6.0, 0.2, 44.2444444444444, 13.3484848484848, 40.7311827956989, 17.9333333333333, 2.01166666666667, 18.7444444444444, 2.53333333333333, 2.2, 0.325, 2.84587912087912, 1.22640692640693, 0.125, 0.0818181818181818, 2.2, 0.5, 33.7062770562771, 13.2944444444444, 20.2, 14.3493506493506, 18.5333333333333, 0.2, 16.8939393939394, 16.3393939393939, 3.14411421911422, 3.26439393939394, 1.21818181818182, 23.2380952380952, 0.2, 2.2, 0.0303030303030303, 0.394602300636783, 1.3, 0.6, 2.51515151515152], [1.2, 4.32272727272727, 2.0, 5.23636363636364, 4.0, 10.1, 2.0, 7.2, 5.38452380952381, 2.0, 3.0, 4.0, 2.61926406926407, 10.0, 5.0, 17.9682433579492, 9.69393939393939, 4.0, 0.0833333333333333, 3.0, 2.0, 5.0, 5.6, 9.16666666666667, 6.70714285714286, 7.0, 6.60714285714286, 5.36666666666667, 10.3809523809524, 2.01818181818182, 27.24, 1.86050420168067, 20.0090909090909, 8.0, 18.9162114845938, 0.787619047619048, 14.0, 4.34949494949495, 26.3720390720391, 3.24444444444444, 13.2835497835498, 11.5272727272727, 18.0, 0.133333333333333, 18.0059523809524, 2.46666666666667, 3.71471861471861, 3.86666666666667, 2.51515151515152, 2.86666666666667, 0.2, 0.290909090909091, 20.0, 40.9544372294372, 29.6318348318348, 22.7333333333333, 22.6285714285714, 40.8666666666667, 20.0, 13.3549783549784, 6.36309523809524, 18.1102941176471, 2.0, 8.0, 32.3571428571429, 22.1246753246753, 21.4587412587413, 18.5, 12.6, 12.2457792207792, 9.16363636363636, 22.0619047619048, 29.7714285714286, 8.0, 8.7910989010989, 8.97012987012987, 11.2887445887446, 8.9, 23.9333333333333, 4.06666666666667, 14.8619047619048, 2.24761904761905, 6.0, 11.791810966811, 15.7619047619048, 22.6126984126984, 15.0931068931069, 32.0, 3.62565656565657, 17.0352924852925, 30.4, 2.4, 31.1838661338661, 14.7492063492064, 7.69480519480519, 6.60515151515152, 26.1454545454545, 10.1090909090909, 41.9264402264402, 8.0, 18.5848484848485, 21.9181128050693, 46.0333333333333, 43.0, 24.6723758125932, 5.61904761904762, 17.5075757575758, 10.4, 0.2, 4.03571428571429, 10.0, 12.0, 2.66666666666667, 6.48030303030303, 2.09166666666667, 2.16666666666667, 14.0, 16.5, 7.0, 13.4805555555556, 9.83333333333333, 0.006060606060606, 1.0, 4.0, 5.0, 6.0, 13.3761904761905, 9.0, 12.5755050505051, 12.3333333333333, 8.05555555555556, 3.15277777777778, 21.0691919191919, 14.1333333333333, 30.0, 27.5090909090909, 4.0, 8.00952380952381, 12.8787878787879, 2.0, 9.80952380952381, 14.2380952380952, 9.28571428571429, 12.7030303030303, 16.0, 21.6666666666667, 2.0, 24.4285714285714, 3.0, 4.0, 13.4727272727273, 0.333333333333333, 4.24166666666667, 6.1, 0.1, 6.11111111111111, 7.0, 2.0, 20.0972222222222, 28.1401709401709, 12.6666666666667, 31.3333333333333, 12.0, 8.2, 10.2095238095238, 9.16666666666667, 11.5812749342161, 11.8, 4.30952380952381, 8.26140350877193, 31.3973194933721, 33.5409090909091, 2.0, 14.7350649350649, 18.6, 7.32301587301587, 16.5230769230769, 11.4, 8.13333333333333, 4.70833333333333, 24.1545454545455, 25.7901515151515, 0.6, 31.0666666666667, 8.13333333333333, 2.02777777777778, 1.0, 0.866666666666667, 2.0, 0.181818181818182, 1.93333333333333, 0.2, 0.666666666666667, 2.2, 0.666666666666667, 0.2, 1.28088023088023, 5.73333333333333, 0.866666666666667, 5.66111111111111, 2.68528138528139, 3.28046642899584, 4.7, 35.1785714285714, 7.3047619047619, 17.1325396825397, 25.4642424242424, 7.06666666666667, 32.6666666666667, 19.8606060606061, 24.5333333333333, 21.6, 25.347619047619, 2.0, 38.3333333333333, 12.2, 14.1507936507937, 36.0, 25.2315018315018, 11.0, 2.0, 17.0666666666667, 6.0, 4.0, 2.0, 8.2, 24.8333333333333, 16.0, 0.2, 2.0, 14.0, 2.70826534576535, 20.0, 23.5428571428571, 16.6857142857143, 10.0, 12.6666666666667, 12.1428571428571, 16.8333333333333, 15.4666666666667, 16.2555555555556, 12.3333333333333, 0.151515151515151, 20.2280441780442, 31.7969696969697, 40.4675324675325, 0.333333333333333, 14.2, 20.0, 14.1428571428571, 16.7636363636364, 32.5636363636364, 8.4, 6.57142857142857, 6.0, 8.0, 25.2205128205128, 28.0, 12.0, 11.1666666666667, 20.0, 36.4045954045954, 16.3777777777778, 4.89580770107086, 1.46785714285714, 0.142857142857143, 18.8666666666667, 20.7090909090909, 4.2, 0.666666666666667], [1.0, 19.4372155622156, 0.4, 3.0, 4.0, 4.6, 14.0, 3.0, 2.61666666666667, 3.0, 9.5, 1.0, 4.0, 3.0, 8.0, 3.23055555555556, 7.0, 5.0, 11.4190476190476, 4.0, 7.09090909090909, 6.0, 5.0, 7.0, 4.80952380952381, 7.0, 1.1, 5.0, 4.0, 0.0222222222222222, 15.0, 2.66666666666667, 6.5, 25.3984848484848, 11.9314790764791, 0.812987012987013, 1.2, 1.0, 4.84994172494172, 20.6034632034632, 35.1011904761905, 8.0, 8.0, 2.02274509803922, 2.5, 18.0, 2.96363636363636, 26.5211038961039, 10.0, 1.0, 6.16666666666667, 5.08571428571429, 5.0, 3.0, 6.0, 12.0, 17.4371017871018, 1.0, 0.321212121212121, 0.285714285714286, 13.1333333333333, 0.888311688311688, 24.0, 30.2666666666667, 0.823076923076923, 0.0857142857142857, 0.4, 1.04800307219662, 2.0, 1.15238095238095, 10.0, 23.2333333333333, 24.0, 18.4, 38.0, 10.0, 2.09090909090909, 4.0, 18.8816738816739, 22.0, 0.866666666666667, 20.2, 18.3333333333333, 26.0, 26.0, 14.4, 24.0, 20.6666666666667, 8.0, 18.0]], "合作深度": [[1.0, 0.4, 1.2, 2.0, 3.0, 5.23636363636364, 2.0, 4.0, 7.2, 3.0, 2.61666666666667, 11.0042246642247, 18.0, 5.34444444444444, 4.0, 3.0, 15.757437007437, 3.23055555555556, 4.0, 4.0, 7.0, 5.2, 17.9682433579492, 5.0, 1.0, 5.16666666666667, 3.0, 1.0, 2.0, 29.1666666666667, 6.0, 10.3809523809524, 12.7948051948052, 4.18181818181818, 24.0, 16.1242424242424, 13.525, 8.0, 27.24, 16.7484848484848, 32.1, 19.8631313131313, 1.86050420168067, 21.330303030303, 36.0608280608281, 19.2666666666667, 15.4348484848485, 12.5828571428571, 18.1238095238095, 20.8018939393939, 2.0, 13.2636363636364, 20.345367965368, 25.3878246753247, 18.9162114845938, 0.787619047619048, 14.0, 0.0311111111111111, 2.02, 30.5127960927961, 13.2835497835498, 11.5272727272727, 2.0, 12.2396897546898, 10.1203740703741, 19.5227938727939, 4.075, 22.6488761238761, 13.6696608946609, 9.0, 18.0, 20.2167832167832, 17.3767676767677, 8.70363636363636, 4.0, 4.07727272727273, 3.08454545454545, 3.09116161616162, 3.86666666666667, 2.51515151515152, 4.98113912231559, 1.73321526957891, 3.08095238095238, 2.86666666666667, 2.17142857142857, 6.04545454545454, 0.2, 4.76176470588235, 4.84994172494172, 22.5978354978355, 12.0, 16.0, 0.290909090909091, 22.9261882561883, 44.0341991341991, 46.759777999778, 20.0, 35.4, 34.0, 22.0888888888889, 40.9544372294372, 1.96666666666667, 20.0, 13.3549783549784, 16.9821428571429, 17.5416666666667, 18.2857142857143, 16.9621367521368, 15.9902097902098, 38.0, 4.5, 8.0, 6.36309523809524, 20.6034632034632, 23.4710539460539, 11.0853701853702, 18.4662041467305, 18.1102941176471, 29.6949134199134, 2.0, 22.1943722943723, 18.6857142857143, 5.0036075036075, 10.5932178932179, 0.02, 5.14848484848485, 1.19047619047619, 11.0952380952381, 24.6, 22.1246753246753, 21.4587412587413, 18.5510256410256, 2.4, 16.3555555555556, 18.5, 28.1183600713012, 12.2457792207792, 9.16363636363636, 17.504329004329, 10.0234432234432, 4.75324675324675, 2.33, 40.5457792207792, 17.6152347652348, 13.3145454545455, 24.0699327369808, 19.0785714285714, 14.3583694083694, 22.0619047619048, 0.163636363636364, 29.9951426024955, 22.1666666666667, 11.0793650793651, 10.3497835497835, 14.0, 2.0, 13.0511904761905, 6.81335331335331, 10.3857142857143, 8.0, 10.5871212121212, 8.7910989010989, 8.97012987012987, 11.2887445887446, 12.4, 8.9, 33.6749250749251, 3.57142857142857, 4.06666666666667, 6.87181152181152, 22.7300505050505, 24.4190476190476, 14.8619047619048, 14.0142857142857, 37.3005928853755, 27.3294372294372, 21.6921356421356, 2.24761904761905, 4.0, 41.5333333333333, 14.5636363636364, 26.1818181818182, 11.791810966811, 40.7857142857143, 2.02274509803922, 15.7619047619048, 38.4952380952381, 22.6126984126984, 23.2, 15.0931068931069, 37.0222222222222, 3.62565656565657, 4.0, 14.4, 20.5714285714286, 0.459523809523809, 8.18712121212121, 2.0, 26.7479797979798, 15.4429292929293, 12.9621774467363, 17.0352924852925, 21.6333333333333, 15.772027972028, 38.6666666666667, 18.1515151515152, 45.4134199134199, 30.4, 17.9953102453102, 22.3333333333333, 14.9898629148629, 19.568947457771, 2.4, 41.1714285714286, 12.0, 44.2138888888889, 27.2549062049062, 26.6136507936508, 10.0, 12.0382395382395, 7.69480519480519, 20.2404761904762, 24.6380952380952, 3.82954545454545, 19.2, 12.1559523809524, 40.1666666666667, 21.6922510822511, 8.43221611721612, 21.2189393939394, 12.0833333333333, 34.0, 41.9264402264402, 8.0, 18.5848484848485, 0.0277777777777778, 21.9181128050693, 28.3967171717172, 23.4984126984127, 2.0, 42.2145998445998, 24.6723758125932, 5.61904761904762, 2.0, 17.5075757575758, 10.4, 10.0, 6.85714285714286, 22.6666666666667, 11.468556998557, 4.03571428571429, 18.5231608770633, 0.266666666666667, 11.1761904761905, 14.2666666666667, 4.13333333333333, 24.4072222222222, 14.4666666666667, 16.3701298701299, 18.5324242424242, 24.5924603174603, 20.0571428571429, 15.3910755910756, 22.8766233766234, 19.0333333333333, 21.8730158730159, 17.6436507936508, 5.0, 15.6833333333333, 14.012987012987, 12.2666666666667, 6.48030303030303, 15.1069518716578, 1.29090909090909, 2.66666666666667, 14.1333333333333, 2.16666666666667, 16.5, 1.0, 10.7921536796537, 17.4011904761905, 0.006060606060606, 8.0, 5.0, 4.08888888888889, 14.0777777777778, 2.0, 9.0, 5.08571428571429, 5.87445887445887, 3.8969696969697, 21.0691919191919, 5.66666666666667, 12.2939393939394, 8.21428571428571, 2.0, 9.80952380952381, 9.28571428571429, 31.75, 13.1428571428571, 14.792069042069, 5.125, 12.0127206127206, 12.7030303030303, 8.02380952380952, 21.6666666666667, 2.0, 16.1666666666667, 7.0, 8.0, 11.6666666666667, 0.333333333333333, 2.28571428571429, 4.24166666666667, 6.1, 9.0, 1.0, 2.0, 20.0972222222222, 28.1401709401709, 12.6666666666667, 15.9666666666667, 12.0, 6.2, 20.0, 21.2857142857143, 23.2253427128427, 1.0, 11.8, 4.0, 2.09090909090909, 2.0, 7.1, 31.3973194933721, 2.0, 14.7350649350649, 16.5230769230769, 11.4, 23.2424242424242, 10.3, 13.1333333333333, 22.4, 24.0181818181818, 24.1360195360195, 8.0, 45.5689393939394, 25.7901515151515, 38.4, 6.0, 0.698484848484848, 3.33333333333333, 1.82532467532468, 0.563636363636364, 31.0666666666667, 18.0, 35.1206349206349, 19.7, 2.0, 2.02777777777778, 1.0, 4.16363636363636, 0.866666666666667, 1.93333333333333, 0.2, 2.56804029304029, 2.0, 0.133333333333333, 1.0, 1.6, 0.666666666666667, 0.571428571428571, 1.07878787878788, 2.86666666666667, 0.733333333333333, 5.93333333333333, 0.606451612903226, 0.666666666666667, 0.666666666666667, 0.2, 1.53333333333333, 1.28088023088023, 0.0857142857142857, 0.2, 0.4, 0.4, 5.73333333333333, 8.73809523809524, 0.5, 1.04800307219662, 2.97560606060606, 3.0, 0.866666666666667, 5.66111111111111, 3.26666666666667, 1.0, 1.15238095238095, 2.68528138528139, 0.2, 0.428571428571428, 2.5, 3.28046642899584, 0.2, 12.2186868686869, 45.5166666666667, 35.1785714285714, 7.3047619047619, 17.35, 17.1325396825397, 20.8666666666667, 21.3444444444444, 25.4642424242424, 7.06666666666667, 1.53571428571429, 10.0, 7.84569892473118, 16.3914141414141, 0.2, 43.9533333333333, 32.6666666666667, 19.8606060606061, 30.0, 14.0, 14.08, 16.0, 28.5277777777778, 4.0, 10.1333333333333, 40.0, 18.4, 37.2705128205128, 14.8666666666667, 14.674358974359, 10.0, 25.347619047619, 32.0416666666667, 38.3333333333333, 40.3454545454545, 14.1507936507937, 12.2857142857143, 36.0, 25.2315018315018, 5.93015873015873, 11.2380952380952, 2.0, 3.38030303030303, 28.0, 2.0, 17.0666666666667, 0.290909090909091, 25.1284759358289, 8.2, 24.8333333333333, 16.0, 1.26666666666667, 34.1333333333333, 0.2, 35.2, 0.0333333333333333, 42.1454545454545, 13.3333333333333, 26.7301587301587, 43.7777777777778, 26.102380952381, 30.4742063492063, 2.0, 2.71666666666667, 8.45, 27.2380952380952, 2.70826534576535, 16.3333333333333, 22.2151515151515, 18.8816738816739, 1.21901154401154, 10.0, 12.6666666666667, 12.1428571428571, 40.2, 16.8333333333333, 15.4666666666667, 24.1321428571429, 22.0, 39.3333333333333, 8.18888888888889, 16.2555555555556, 20.2, 27.4, 12.3333333333333, 4.3031746031746, 29.0892857142857, 23.3738095238095, 38.5333333333333, 12.1166666666667, 22.0, 32.5610805860806, 32.6666666666667, 31.7969696969697, 16.1609307359307, 10.2, 41.5761904761905, 10.9073593073593, 17.6190476190476, 14.3333333333333, 14.2, 20.0, 16.7636363636364, 4.0, 27.4666666666667, 12.0, 13.6511266511267, 6.0, 26.0, 20.0, 46.5880952380952, 14.4318181818182, 32.1997835497835, 13.0848484848485, 14.850937950938, 0.0666666666666667, 0.794250194250194, 43.0, 28.0, 23.0035714285714, 6.5, 8.0, 2.0, 12.0, 10.1, 2.0, 20.3272727272727, 26.9895382395382, 25.8888888888889, 30.2969696969697, 13.3655844155844, 18.0, 23.9337662337662, 2.0, 36.4045954045954, 8.0, 2.0, 17.155303030303, 18.963082437276, 14.0, 20.8076923076923, 20.3581780538302, 16.0, 10.0, 10.2, 14.5047619047619, 18.0, 17.9333333333333, 4.89580770107086, 1.46785714285714, 0.325, 2.84587912087912, 1.22640692640693, 0.125, 0.0818181818181818, 0.142857142857143, 2.2, 0.5, 33.7062770562771, 13.2944444444444, 18.8666666666667, 0.2, 20.7090909090909, 1.21818181818182, 23.2380952380952, 2.2, 0.394602300636783, 0.6, 2.51515151515152], [15.625, 19.4372155622156, 2.0, 2.0, 4.32272727272727, 10.1, 8.66666666666667, 5.0, 5.5, 4.1, 12.3619047619048, 2.0, 4.13333333333333, 5.38452380952381, 4.0, 10.0, 10.0, 9.06666666666667, 2.2, 4.0, 5.0, 9.69393939393939, 2.0, 9.94090909090909, 4.0, 0.118181818181818, 7.0, 2.0, 0.0222222222222222, 8.85638528138528, 9.16666666666667, 2.66666666666667, 7.0, 3.28571428571429, 4.0, 4.0, 13.4843073593074, 23.8795093795094, 6.0, 44.7047619047619, 14.0, 10.4391233766234, 2.0, 20.942291042291, 21.4762265512266, 12.0, 14.0, 21.8530952380952, 21.8952380952381, 3.24444444444444, 8.0, 9.67936507936508, 7.74401154401154, 35.2142135642136, 10.5252918145432, 5.70608835608836, 25.5480519480519, 0.388039215686275, 0.174242424242424, 0.08, 15.2344444444444, 0.181818181818182, 3.71471861471861, 0.941269841269841, 24.2666666666667, 24.662814962815, 12.3833333333333, 24.1051282051282, 2.0, 10.5238095238095, 22.8204545454545, 11.6014368964369, 2.0, 7.84887612387612, 12.5974025974026, 12.6996336996337, 21.6254834054834, 16.8888888888889, 15.0555555555556, 43.8832251082251, 40.0, 0.142857142857143, 20.0, 1.13333333333333, 15.8943722943723, 40.9551820728291, 7.35238095238095, 8.0, 6.85324675324675, 4.22423576423576, 24.3141858141858, 16.3115218115218, 8.31298701298701, 2.0, 8.0, 16.1111111111111, 35.488961038961, 2.0, 8.26983016983017, 36.2, 22.7538461538462, 9.2, 32.1271284271284, 29.4666666666667, 17.0222222222222, 14.0, 2.72738095238095, 2.0, 4.00008658008658, 4.19047619047619, 42.2961904761905, 12.4472222222222, 19.2929292929293, 16.7106643356643, 0.754511278195489, 46.1876551226551, 0.353333333333333, 7.45757575757576, 9.17142857142857, 45.6851370851371, 36.4579365079365, 26.5, 24.0, 24.6133333333333, 2.0, 33.3160173160173, 24.9930236430236, 15.6031746031746, 15.2, 0.533333333333333, 23.0142857142857, 22.4214141414141, 1.49206349206349, 15.1642857142857, 0.495757575757576, 0.666666666666667, 19.5154761904762, 41.7048319327731, 31.6666666666667, 31.75781995782, 24.180303030303, 18.8747863247863, 41.6488095238095, 0.158333333333333, 25.1367965367965, 13.7601787101787, 20.379898989899, 12.2854545454545, 12.9312097812098, 23.4857142857143, 44.6722444222444, 11.3361471861472, 41.4184183463595, 2.0, 46.0333333333333, 32.1666666666667, 12.1666666666667, 28.0731601731602, 23.8, 14.9995670995671, 34.1980519480519, 2.0, 8.43614718614719, 0.279220779220779, 23.2220418470418, 19.9346681096681, 36.9572510822511, 22.7827496175322, 25.3333333333333, 28.8178958107596, 2.0, 4.45242424242424, 6.16666666666667, 18.4916666666667, 1.94974025974026, 8.90476190476191, 0.390476190476191, 13.7705555555556, 24.1349350649351, 14.0132135408451, 13.8025252525253, 16.8333333333333, 3.35753968253968, 14.0, 9.0, 9.83333333333333, 11.1060606060606, 1.0, 12.0, 6.0, 6.19047619047619, 6.30909090909091, 5.41515151515152, 0.223232323232323, 12.5755050505051, 12.3333333333333, 50.9042450887033, 9.28571428571429, 50.3171629540051, 30.0, 11.0, 0.2, 7.60909090909091, 8.00952380952381, 12.8787878787879, 2.0, 13.0573737373737, 4.5, 8.65384615384615, 15.852380952381, 11.3333333333333, 7.0, 25.6666666666667, 12.0, 2.0, 3.96388888888889, 21.8571428571429, 2.0, 14.2434343434343, 16.6659663865546, 12.1111111111111, 31.3333333333333, 12.0, 35.0, 10.0, 14.0119047619048, 4.30952380952381, 2.0, 33.5409090909091, 22.0, 18.6, 7.32301587301587, 2.0, 17.0666666666667, 0.791666666666667, 18.8848484848485, 0.666666666666667, 0.0666666666666667, 2.81212121212121, 5.86666666666667, 0.715151515151515, 0.427777777777778, 1.03982683982684, 35.0, 12.3333333333333, 8.05714285714286, 14.7214285714286, 22.8666666666667, 30.2666666666667, 22.3333333333333, 0.866666666666667, 2.0, 0.2, 0.866666666666667, 0.823076923076923, 1.6969696969697, 2.2, 0.380952380952381, 1.84444444444444, 0.133333333333333, 0.338888888888889, 2.24761904761905, 2.0, 0.2, 2.91082972582973, 4.7, 18.421645021645, 17.1333333333333, 4.77142857142857, 41.8809523809524, 0.2, 41.152380952381, 0.133333333333333, 14.2666666666667, 36.2666666666667, 29.7333333333333, 24.5333333333333, 42.2, 10.2502645502645, 24.4222222222222, 11.0, 39.044474969475, 20.2, 10.0, 42.8010101010101, 18.0, 4.0, 18.3, 24.2809523809524, 14.2, 0.619047619047619, 10.0, 4.13333333333333, 29.3714285714286, 12.125, 35.4174025974026, 41.9939393939394, 14.0, 20.1624542124542, 14.0571428571429, 18.5333333333333, 23.5428571428571, 28.2333333333333, 14.1333333333333, 28.6, 40.3333333333333, 32.4, 40.3333333333333, 28.0, 30.3333333333333, 41.6190476190476, 22.3333333333333, 17.0666666666667, 0.151515151515151, 14.4, 4.0, 13.5892857142857, 18.3333333333333, 40.4675324675325, 16.23614996115, 2.0, 4.19047619047619, 0.333333333333333, 14.6666666666667, 14.1428571428571, 21.9714285714286, 8.66666666666667, 15.0166666666667, 11.8, 4.0, 16.8124542124542, 16.8761904761905, 40.2, 8.0, 19.0, 2.0, 25.2205128205128, 18.7828282828283, 27.054797979798, 19.7151515151515, 23.1428571428571, 20.1900432900433, 42.3333333333333, 22.0, 26.6666666666667, 4.0, 15.5424242424242, 14.8666666666667, 17.2039186303892, 11.1666666666667, 18.3333333333333, 6.0, 20.6666666666667, 17.7333333333333, 12.0, 16.6666666666667, 11.1833333333333, 15.2727272727273, 23.9079365079365, 2.01166666666667, 18.7444444444444, 2.53333333333333, 2.2, 20.2, 14.3493506493506, 3.14411421911422, 3.26439393939394, 0.0303030303030303, 4.2], [13.6399855699856, 2.0, 4.0, 4.6, 14.0, 2.0, 9.5, 6.10909090909091, 4.0, 9.27777777777778, 5.08181818181818, 11.4190476190476, 4.33333333333333, 12.5, 0.0833333333333333, 4.11111111111111, 1.1, 6.16666666666667, 3.59090909090909, 7.0, 5.0, 10.0, 7.66666666666667, 9.27142857142857, 15.0, 1.0, 6.60714285714286, 5.36666666666667, 4.05238095238095, 6.5, 5.0, 2.01818181818182, 25.3984848484848, 20.0090909090909, 26.0, 8.0, 4.34949494949495, 13.6939393939394, 0.133333333333333, 1.42122877122877, 18.0059523809524, 11.9314790764791, 2.46666666666667, 0.812987012987013, 1.2, 0.535384615384615, 3.76666666666667, 1.0, 23.5398268398268, 29.6318348318348, 22.6285714285714, 40.8666666666667, 23.8380952380952, 10.7545454545455, 35.1011904761905, 9.85714285714286, 32.3571428571429, 21.4730519480519, 12.6, 29.7714285714286, 12.0, 22.3333333333333, 8.0, 23.9333333333333, 22.3357142857143, 21.3333333333333, 2.5, 31.1838661338661, 16.0266666666667, 6.60515151515152, 23.2545454545455, 43.0, 20.5357142857143, 12.9816017316017, 18.0, 12.0, 2.96363636363636, 4.05396825396825, 2.09166666666667, 1.14102564102564, 4.0, 13.3761904761905, 4.16666666666667, 8.05555555555556, 4.18181818181818, 14.1333333333333, 7.0, 4.14545454545455, 10.0666666666667, 40.5, 10.5818181818182, 14.2380952380952, 12.3239538239538, 4.39545454545455, 19.0, 16.0, 14.0, 24.3833333333333, 24.4285714285714, 5.33333333333333, 20.0, 6.93333333333333, 3.0, 2.0, 0.1, 3.0, 7.0, 8.0, 7.53333333333333, 4.0, 8.0, 17.4371017871018, 10.2095238095238, 6.33333333333333, 11.5812749342161, 0.321212121212121, 12.0, 8.26140350877193, 8.13333333333333, 24.1545454545455, 15.9282467532468, 0.888311688311688, 42.7, 24.0, 0.181818181818182, 23.2333333333333, 24.0, 21.6, 2.0, 12.2, 38.0, 34.0, 6.0, 2.46969696969697, 1.35411255411255, 2.09090909090909, 4.0, 20.0, 20.6666666666667, 16.6857142857143, 2.0, 30.3611111111111, 38.3611111111111, 40.725, 12.2, 20.2280441780442, 26.0, 32.5636363636364, 8.4, 6.57142857142857, 14.4, 24.0, 19.2380952380952, 9.0, 30.0, 16.3777777777778, 1.3, 0.666666666666667], [1.13333333333333, 2.2, 4.0, 8.0, 4.0, 1.0, 4.12727272727273, 7.0, 5.0, 3.0, 18.5272727272727, 2.61926406926407, 3.0, 6.0, 14.0, 7.0, 0.0972222222222222, 5.0, 5.0, 14.8333333333333, 8.66666666666667, 0.0151515151515152, 7.94141414141414, 15.3253968253968, 21.0880952380952, 10.3453463203463, 16.7603896103896, 6.09523809523809, 1.37619047619048, 26.3720390720391, 27.7260683760684, 19.4761904761905, 18.5775335775336, 17.6071428571429, 17.0719696969697, 23.4305555555556, 0.181818181818182, 41.6531385281385, 3.82162337662338, 8.21438561438561, 3.60137085137085, 15.7085714285714, 22.0, 7.1005772005772, 2.4537349904997, 44.5493506493507, 20.4444444444444, 22.7333333333333, 17.4798534798535, 30.8952380952381, 23.8731601731602, 25.8125874125874, 37.7397419247419, 8.97207792207792, 8.82940582293523, 9.62380952380952, 17.5095682095682, 9.0, 4.70855810855811, 6.10976190476191, 36.4477855477855, 2.41904761904762, 14.2, 14.4, 20.4154270480122, 4.0, 8.11904761904762, 17.99222999223, 27.8780885780886, 14.8001803751804, 7.39393939393939, 28.0, 2.2052380952381, 6.51868686868687, 11.5336435786436, 12.1496464646465, 21.1139393939394, 10.7757575757576, 10.0, 45.5909090909091, 31.4094017094017, 10.4666666666667, 19.1095238095238, 14.2909090909091, 19.0, 9.14285714285714, 25.2524741924742, 17.2825396825397, 14.8809523809524, 7.18181818181818, 33.2398851148851, 4.41071428571429, 15.4669786096257, 16.3425597409127, 8.0, 14.1904761904762, 18.8792929292929, 25.496176046176, 33.5761904761905, 27.5047619047619, 6.0, 13.030303030303, 12.0, 38.6666666666667, 5.80952380952381, 40.7199222999223, 6.7, 19.4362770562771, 30.4, 32.0, 20.6236237704504, 11.1300505050505, 11.2722222222222, 2.2, 8.4, 25.8928571428571, 15.1240626040626, 19.5714285714286, 11.0, 20.3333333333333, 22.2888888888889, 14.952380952381, 14.7492063492064, 15.0911319073084, 4.36363636363636, 5.13333333333333, 26.1454545454545, 27.0666666666667, 12.5485714285714, 6.0, 22.350222000222, 5.61230158730159, 10.1090909090909, 20.4138528138528, 16.1944444444444, 18.6524364524365, 0.2, 25.434595959596, 7.0, 4.16071428571429, 10.1818181818182, 16.2422077922078, 23.6333333333333, 38.3255411255411, 15.6994949494949, 17.2540909090909, 36.2002164502165, 20.1636363636364, 12.9165007215007, 16.0547619047619, 2.36363636363636, 9.50952380952381, 18.167619047619, 16.3714285714286, 31.9892496392496, 49.0357142857143, 15.047619047619, 6.30699300699301, 2.66666666666667, 0.229390054390054, 22.4244422244422, 22.6545454545455, 8.59880952380952, 9.06580086580087, 3.0, 5.0, 4.0, 11.9207792207792, 7.0, 0.202020202020202, 13.4805555555556, 5.0, 10.0, 17.2888888888889, 6.0, 3.15277777777778, 8.73333333333333, 0.166666666666667, 7.13333333333333, 10.5333333333333, 4.0, 11.3142857142857, 22.3761904761905, 11.6666666666667, 15.1, 30.8428571428571, 15.5, 4.0, 16.4583333333333, 11.2916666666667, 3.0, 14.1111111111111, 6.11111111111111, 4.5, 24.6666666666667, 6.0, 14.0, 4.0, 22.6666666666667, 18.4396825396825, 15.1666666666667, 26.5153846153846, 17.541889483066, 6.66666666666667, 4.70833333333333, 13.5111111111111, 24.0, 14.0, 30.0, 10.6051515151515, 3.75854978354978, 22.0, 29.9535575535576, 12.9116883116883, 0.765476190476191, 0.6, 20.7497474747475, 2.38015873015873, 0.666666666666667, 41.2993939393939, 12.0, 27.5333333333333, 19.3666666666667, 8.13333333333333, 1.26666666666667, 2.66666666666667, 2.35833333333333, 8.26297258297258, 3.2, 0.2, 0.133333333333333, 3.6, 4.10909090909091, 4.2, 4.21212121212121, 1.28666666666667, 4.09365079365079, 0.866666666666667, 3.41666666666667, 2.39206349206349, 2.25454545454545, 30.5333333333333, 14.0, 44.1357142857143, 6.36630036630037, 2.68831168831169, 29.3311188811189, 12.8392857142857, 24.0, 2.0, 12.875, 30.3666666666667, 34.0952380952381, 10.0, 16.0, 18.9026984126984, 30.0, 10.0, 30.1515151515152, 40.1666666666667, 43.6733333333333, 33.9568181818182, 11.2477272727273, 15.1787878787879, 2.0, 40.0, 8.0, 21.8444444444444, 14.0, 18.4027777777778, 10.2305555555556, 44.0348124098124, 12.4104166666667, 43.9333333333333, 2.0247113997114, 21.3005355276907, 20.0, 16.8, 20.6666666666667, 10.5333333333333, 22.4583333333333, 24.2857142857143, 41.5333333333333, 40.8600122100122, 25.0, 32.6, 20.0, 12.952380952381, 42.4, 18.9986813186813, 8.25, 1.7093137254902, 8.98888888888889, 4.35595238095238, 21.7422161172161, 1.0, 8.55555555555556, 25.2658008658009, 14.0, 4.0, 22.6755411255411, 23.6, 18.4, 10.0, 14.0, 26.0, 30.2, 26.25, 14.8333333333333, 20.2, 30.8444444444444, 13.3333333333333, 16.6925806219924, 16.880303030303, 1.26666666666667, 23.0, 21.6, 19.8447552447552, 21.2254329004329, 12.7333333333333, 20.3666666666667, 20.0, 20.3333333333333, 15.2909090909091, 4.12820512820513, 14.6857142857143, 18.2, 4.0, 6.0, 0.2, 44.2444444444444, 13.3484848484848, 40.7311827956989, 18.5333333333333, 16.8939393939394, 16.3393939393939, 0.2], [7.0, 8.0, 8.5, 1.2, 7.09090909090909, 2.0, 5.0, 4.80952380952381, 0.666666666666667, 10.0, 0.127272727272727, 10.8333333333333, 8.16666666666667, 5.0, 4.0, 5.6, 6.70714285714286, 15.7428571428571, 7.46233766233766, 14.1516339869281, 18.3333333333333, 10.0, 26.5211038961039, 5.0, 1.0, 6.16666666666667, 24.2393939393939, 8.33333333333333, 8.67575757575758, 27.5090909090909, 5.61471861471861, 11.6805555555556, 2.0, 3.0, 13.4727272727273, 11.2833333333333, 9.0, 1.125, 8.2, 9.16666666666667, 0.285714285714286, 16.3333333333333, 2.0, 0.866666666666667, 8.0, 8.2, 16.0, 25.4]], "C指数": [[1.0, 15.625, 19.4372155622156, 1.2, 2.0, 3.0, 2.0, 4.32272727272727, 2.0, 4.0, 2.0, 8.66666666666667, 5.0, 5.5, 4.0, 7.2, 2.61666666666667, 4.1, 8.0, 2.0, 4.12727272727273, 3.0, 8.5, 5.38452380952381, 1.2, 5.08181818181818, 7.09090909090909, 2.0, 3.0, 18.5272727272727, 4.0, 9.06666666666667, 3.0, 4.33333333333333, 4.0, 5.0, 14.0, 17.9682433579492, 12.5, 5.0, 5.0, 9.69393939393939, 2.0, 9.94090909090909, 0.0833333333333333, 1.0, 5.16666666666667, 3.0, 1.1, 6.16666666666667, 5.0, 3.59090909090909, 0.118181818181818, 7.0, 7.0, 10.0, 2.0, 2.0, 5.0, 0.0151515151515152, 9.27142857142857, 8.85638528138528, 9.16666666666667, 29.1666666666667, 2.66666666666667, 7.0, 1.0, 6.0, 3.28571428571429, 4.05238095238095, 6.5, 5.0, 2.01818181818182, 13.525, 10.3453463203463, 25.3984848484848, 32.1, 19.8631313131313, 1.86050420168067, 20.0090909090909, 21.330303030303, 2.0, 14.0, 13.6939393939394, 3.24444444444444, 10.5252918145432, 17.6071428571429, 9.0, 2.46666666666667, 4.98113912231559, 0.535384615384615, 0.941269841269841, 3.76666666666667, 4.84994172494172, 22.5978354978355, 12.0, 0.290909090909091, 23.5398268398268, 20.0, 20.4444444444444, 22.0888888888889, 23.8380952380952, 10.7545454545455, 13.3549783549784, 21.6254834054834, 14.4, 20.6034632034632, 35.1011904761905, 5.0036075036075, 0.02, 1.19047619047619, 9.85714285714286, 6.85324675324675, 2.4, 10.7757575757576, 12.2457792207792, 17.504329004329, 4.75324675324675, 2.33, 22.0619047619048, 14.8809523809524, 12.0, 8.0, 8.0, 8.7910989010989, 14.1904761904762, 0.353333333333333, 23.9333333333333, 4.06666666666667, 14.8619047619048, 37.3005928853755, 26.5, 6.0, 41.5333333333333, 11.791810966811, 38.6666666666667, 40.7199222999223, 22.3357142857143, 2.0, 32.0, 3.62565656565657, 15.6031746031746, 14.4, 2.0, 0.533333333333333, 17.0352924852925, 21.6333333333333, 41.7048319327731, 15.772027972028, 38.6666666666667, 30.4, 2.4, 12.0, 26.6136507936508, 0.158333333333333, 6.60515151515152, 19.2, 6.0, 40.1666666666667, 23.2545454545455, 34.0, 41.9264402264402, 21.9181128050693, 2.0, 5.61904761904762, 2.0, 17.5075757575758, 10.4, 4.03571428571429, 0.279220779220779, 20.5357142857143, 23.6333333333333, 36.9572510822511, 2.66666666666667, 14.0132135408451, 22.6545454545455, 3.0, 2.66666666666667, 14.1333333333333, 2.16666666666667, 14.0, 1.0, 10.7921536796537, 0.202020202020202, 9.0, 1.14102564102564, 11.1060606060606, 1.0, 4.0, 5.0, 6.0, 5.41515151515152, 6.0, 12.5755050505051, 8.05555555555556, 3.8969696969697, 3.15277777777778, 8.73333333333333, 50.9042450887033, 5.66666666666667, 7.0, 30.0, 10.0666666666667, 8.00952380952381, 8.21428571428571, 40.5, 2.0, 9.80952380952381, 14.2380952380952, 4.39545454545455, 31.75, 5.125, 19.0, 12.7030303030303, 8.02380952380952, 14.0, 2.0, 7.0, 16.1666666666667, 24.4285714285714, 11.6666666666667, 20.0, 13.4727272727273, 2.0, 3.0, 2.0, 6.1, 16.6659663865546, 6.11111111111111, 1.0, 2.0, 28.1401709401709, 31.3333333333333, 14.0, 4.0, 8.0, 12.0, 21.2857142857143, 10.0, 9.16666666666667, 18.4396825396825, 6.33333333333333, 1.0, 11.8, 4.30952380952381, 4.0, 2.09090909090909, 2.0, 22.0, 23.2424242424242, 10.3, 13.1333333333333, 22.4, 24.0181818181818, 8.0, 25.7901515151515, 6.0, 0.888311688311688, 3.33333333333333, 0.563636363636364, 31.0666666666667, 18.0, 12.3333333333333, 24.0, 41.2993939393939, 35.1206349206349, 2.02777777777778, 4.16363636363636, 0.866666666666667, 0.181818181818182, 0.666666666666667, 0.606451612903226, 0.666666666666667, 0.2, 1.28088023088023, 0.4, 0.4, 5.73333333333333, 1.04800307219662, 2.97560606060606, 3.0, 0.2, 2.68528138528139, 0.2, 0.428571428571428, 2.5, 45.5166666666667, 7.3047619047619, 18.421645021645, 17.1325396825397, 17.1333333333333, 7.06666666666667, 1.53571428571429, 0.2, 10.0, 41.152380952381, 7.84569892473118, 16.3914141414141, 0.133333333333333, 12.8392857142857, 14.0, 24.5333333333333, 18.4, 16.3333333333333, 32.0416666666667, 2.0, 24.4222222222222, 11.2380952380952, 3.38030303030303, 2.0, 10.0, 17.0666666666667, 0.290909090909091, 2.0, 8.2, 24.8333333333333, 14.2, 16.0, 1.26666666666667, 0.2, 1.35411255411255, 43.7777777777778, 12.125, 30.4742063492063, 41.9939393939394, 14.0, 8.45, 20.0, 2.70826534576535, 18.5333333333333, 18.8816738816739, 16.6857142857143, 1.21901154401154, 12.6666666666667, 15.4666666666667, 24.1321428571429, 32.4, 22.0, 16.2555555555556, 22.3333333333333, 12.2, 32.5610805860806, 40.4675324675325, 2.0, 4.19047619047619, 14.2, 21.9714285714286, 8.66666666666667, 27.4666666666667, 32.5636363636364, 13.6511266511267, 8.4, 20.0, 40.2, 24.0, 30.2, 14.850937950938, 23.1428571428571, 2.0, 12.0, 10.1, 20.3272727272727, 19.2380952380952, 9.0, 30.0, 36.4045954045954, 20.3333333333333, 12.0, 16.6666666666667, 20.8076923076923, 16.0, 25.4, 23.9079365079365, 10.0, 14.5047619047619, 4.0, 1.46785714285714, 2.84587912087912, 0.125, 0.142857142857143, 18.8666666666667, 0.2, 20.7090909090909, 0.6], [13.6399855699856, 1.13333333333333, 2.2, 7.0, 11.0042246642247, 6.10909090909091, 18.0, 4.0, 5.34444444444444, 15.757437007437, 4.0, 0.666666666666667, 0.0972222222222222, 14.8333333333333, 8.66666666666667, 0.0222222222222222, 4.0, 7.94141414141414, 4.0, 15.3253968253968, 12.7948051948052, 4.18181818181818, 24.0, 21.0880952380952, 16.1242424242424, 13.4843073593074, 8.0, 23.8795093795094, 16.7484848484848, 6.0, 44.7047619047619, 14.0, 16.7603896103896, 10.4391233766234, 6.09523809523809, 2.0, 26.0, 20.942291042291, 8.0, 36.0608280608281, 21.4762265512266, 19.2666666666667, 15.4348484848485, 12.5828571428571, 18.1238095238095, 12.0, 1.37619047619048, 14.0, 20.8018939393939, 13.2636363636364, 20.345367965368, 21.8530952380952, 25.3878246753247, 21.8952380952381, 0.0311111111111111, 26.3720390720391, 2.02, 27.7260683760684, 30.5127960927961, 13.2835497835498, 8.0, 9.67936507936508, 11.5272727272727, 2.0, 12.2396897546898, 10.1203740703741, 7.74401154401154, 35.2142135642136, 19.5227938727939, 19.4761904761905, 4.075, 22.6488761238761, 18.5775335775336, 13.6696608946609, 5.70608835608836, 17.0719696969697, 20.2167832167832, 17.3767676767677, 25.5480519480519, 23.4305555555556, 8.70363636363636, 0.388039215686275, 0.181818181818182, 41.6531385281385, 0.174242424242424, 3.82162337662338, 1.42122877122877, 4.0, 8.21438561438561, 3.60137085137085, 0.08, 15.2344444444444, 4.07727272727273, 15.7085714285714, 22.0, 3.09116161616162, 3.71471861471861, 1.2, 3.86666666666667, 2.51515151515152, 7.1005772005772, 1.73321526957891, 3.08095238095238, 2.86666666666667, 2.17142857142857, 6.04545454545454, 0.2, 4.76176470588235, 2.4537349904997, 24.2666666666667, 24.662814962815, 16.0, 22.9261882561883, 12.3833333333333, 24.1051282051282, 44.0341991341991, 46.759777999778, 2.0, 44.5493506493507, 35.4, 34.0, 40.9544372294372, 10.5238095238095, 22.7333333333333, 17.4798534798535, 30.8952380952381, 1.96666666666667, 22.8204545454545, 20.0, 11.6014368964369, 23.8731601731602, 25.8125874125874, 37.7397419247419, 8.97207792207792, 8.82940582293523, 2.0, 9.62380952380952, 17.5095682095682, 16.9821428571429, 7.84887612387612, 12.5974025974026, 9.0, 12.6996336996337, 4.70855810855811, 17.5416666666667, 18.2857142857143, 16.9621367521368, 6.10976190476191, 16.8888888888889, 15.9902097902098, 36.4477855477855, 7.46233766233766, 15.0555555555556, 38.0, 43.8832251082251, 40.0, 2.41904761904762, 4.5, 8.0, 0.142857142857143, 14.2, 20.0, 20.4154270480122, 23.4710539460539, 11.0853701853702, 18.4662041467305, 1.13333333333333, 18.1102941176471, 4.0, 29.6949134199134, 22.1943722943723, 18.6857142857143, 15.8943722943723, 40.9551820728291, 14.1516339869281, 8.11904761904762, 10.5932178932179, 5.14848484848485, 11.0952380952381, 7.35238095238095, 8.0, 17.99222999223, 4.22423576423576, 27.8780885780886, 14.8001803751804, 24.6, 24.3141858141858, 7.39393939393939, 28.0, 21.4587412587413, 18.5510256410256, 16.3115218115218, 2.2052380952381, 6.51868686868687, 16.3555555555556, 11.5336435786436, 18.5, 28.1183600713012, 12.1496464646465, 8.31298701298701, 2.0, 12.6, 21.1139393939394, 8.0, 16.1111111111111, 10.0234432234432, 10.0, 35.488961038961, 2.0, 17.6152347652348, 13.3145454545455, 8.26983016983017, 36.2, 22.7538461538462, 45.5909090909091, 9.2, 32.1271284271284, 31.4094017094017, 10.4666666666667, 24.0699327369808, 29.4666666666667, 17.0222222222222, 19.1095238095238, 14.0, 19.0785714285714, 14.2909090909091, 19.0, 9.14285714285714, 14.3583694083694, 2.72738095238095, 25.2524741924742, 0.163636363636364, 29.9951426024955, 22.1666666666667, 2.0, 17.2825396825397, 4.00008658008658, 11.0793650793651, 4.19047619047619, 7.18181818181818, 42.2961904761905, 10.3497835497835, 14.0, 33.2398851148851, 12.4472222222222, 13.0511904761905, 6.81335331335331, 19.2929292929293, 4.41071428571429, 16.7106643356643, 10.3857142857143, 15.4669786096257, 16.3425597409127, 0.754511278195489, 46.1876551226551, 10.5871212121212, 8.97012987012987, 12.4, 33.6749250749251, 3.57142857142857, 7.45757575757576, 18.8792929292929, 6.87181152181152, 25.496176046176, 22.7300505050505, 9.17142857142857, 24.4190476190476, 14.0142857142857, 33.5761904761905, 45.6851370851371, 36.4579365079365, 27.3294372294372, 27.5047619047619, 21.6921356421356, 4.0, 14.5636363636364, 24.0, 26.1818181818182, 13.030303030303, 12.0, 40.7857142857143, 5.80952380952381, 24.6133333333333, 6.7, 38.4952380952381, 19.4362770562771, 22.6126984126984, 30.4, 23.2, 15.0931068931069, 33.3160173160173, 37.0222222222222, 24.9930236430236, 4.0, 20.6236237704504, 11.1300505050505, 20.5714285714286, 0.459523809523809, 15.2, 11.2722222222222, 8.18712121212121, 21.3333333333333, 26.7479797979798, 23.0142857142857, 2.2, 15.4429292929293, 22.4214141414141, 12.9621774467363, 1.49206349206349, 15.1642857142857, 8.4, 0.495757575757576, 25.8928571428571, 0.666666666666667, 15.1240626040626, 19.5154761904762, 19.5714285714286, 18.1515151515152, 45.4134199134199, 11.0, 20.3333333333333, 31.6666666666667, 17.9953102453102, 22.3333333333333, 31.75781995782, 14.9898629148629, 22.2888888888889, 18.3333333333333, 31.1838661338661, 14.952380952381, 14.7492063492064, 24.180303030303, 41.1714285714286, 18.8747863247863, 44.2138888888889, 15.0911319073084, 27.2549062049062, 41.6488095238095, 10.0, 12.0382395382395, 7.69480519480519, 4.36363636363636, 20.2404761904762, 5.13333333333333, 25.1367965367965, 13.7601787101787, 26.1454545454545, 27.0666666666667, 20.379898989899, 24.6380952380952, 3.82954545454545, 12.5485714285714, 12.1559523809524, 22.350222000222, 21.6922510822511, 5.61230158730159, 10.1090909090909, 12.2854545454545, 8.43221611721612, 21.2189393939394, 20.4138528138528, 12.9312097812098, 16.1944444444444, 23.4857142857143, 44.6722444222444, 8.0, 11.3361471861472, 18.5848484848485, 0.0277777777777778, 41.4184183463595, 46.0333333333333, 28.3967171717172, 23.4984126984127, 32.1666666666667, 2.0, 12.1666666666667, 42.2145998445998, 24.6723758125932, 28.0731601731602, 18.6524364524365, 6.85714285714286, 22.6666666666667, 23.8, 0.2, 11.468556998557, 14.9995670995671, 34.1980519480519, 25.434595959596, 7.0, 4.16071428571429, 10.1818181818182, 18.5231608770633, 16.2422077922078, 0.266666666666667, 2.0, 8.43614718614719, 11.1761904761905, 14.2666666666667, 4.13333333333333, 23.2220418470418, 19.9346681096681, 38.3255411255411, 24.4072222222222, 14.4666666666667, 16.3701298701299, 22.7827496175322, 25.3333333333333, 28.8178958107596, 15.6994949494949, 17.2540909090909, 2.0, 36.2002164502165, 20.1636363636364, 18.5324242424242, 4.45242424242424, 12.9165007215007, 12.9816017316017, 6.16666666666667, 16.0547619047619, 24.5924603174603, 20.0571428571429, 18.4916666666667, 1.94974025974026, 2.36363636363636, 15.3910755910756, 12.0, 22.8766233766234, 9.50952380952381, 18.167619047619, 16.3714285714286, 19.0333333333333, 31.9892496392496, 49.0357142857143, 15.047619047619, 6.30699300699301, 8.90476190476191, 0.390476190476191, 21.8730158730159, 13.7705555555556, 0.229390054390054, 17.6436507936508, 22.4244422244422, 24.1349350649351, 5.0, 15.6833333333333, 14.012987012987, 13.8025252525253, 8.59880952380952, 16.8333333333333, 9.06580086580087, 3.35753968253968, 4.05396825396825, 12.2666666666667, 15.1069518716578, 1.29090909090909, 4.0, 11.9207792207792, 13.4805555555556, 9.83333333333333, 5.0, 8.0, 12.0, 4.08888888888889, 6.19047619047619, 5.0, 14.0777777777778, 6.30909090909091, 2.0, 5.87445887445887, 24.2393939393939, 21.0691919191919, 8.33333333333333, 9.28571428571429, 50.3171629540051, 7.13333333333333, 10.5333333333333, 4.0, 12.2939393939394, 5.61471861471861, 7.60909090909091, 12.8787878787879, 11.3142857142857, 22.3761904761905, 10.5818181818182, 9.28571428571429, 13.0573737373737, 4.5, 12.3239538239538, 8.65384615384615, 13.1428571428571, 14.792069042069, 15.1, 12.0127206127206, 21.6666666666667, 11.6805555555556, 25.6666666666667, 12.0, 2.0, 2.0, 30.8428571428571, 3.0, 16.4583333333333, 3.96388888888889, 11.2916666666667, 9.0, 6.93333333333333, 21.8571428571429, 0.333333333333333, 2.28571428571429, 4.24166666666667, 14.2434343434343, 0.1, 12.1111111111111, 14.1111111111111, 9.0, 4.5, 12.6666666666667, 24.6666666666667, 15.9666666666667, 8.0, 6.2, 35.0, 22.6666666666667, 23.2253427128427, 15.1666666666667, 14.0119047619048, 2.0, 2.0, 31.3973194933721, 26.5153846153846, 33.5409090909091, 14.7350649350649, 18.6, 7.32301587301587, 16.5230769230769, 11.4, 17.541889483066, 2.0, 6.66666666666667, 4.70833333333333, 24.1360195360195, 13.5111111111111, 0.791666666666667, 24.0, 14.0, 18.8848484848485, 30.0, 45.5689393939394, 10.6051515151515, 3.75854978354978, 22.0, 38.4, 15.9282467532468, 29.9535575535576, 12.9116883116883, 0.765476190476191, 0.666666666666667, 0.6, 0.0666666666666667, 2.81212121212121, 5.86666666666667, 0.715151515151515, 0.698484848484848, 0.427777777777778, 20.7497474747475, 2.38015873015873, 1.03982683982684, 1.82532467532468, 0.666666666666667, 35.0, 8.05714285714286, 12.0, 14.7214285714286, 22.8666666666667, 27.5333333333333, 19.7, 2.0, 30.2666666666667, 19.3666666666667, 22.3333333333333, 8.13333333333333, 1.0, 1.26666666666667, 0.866666666666667, 2.0, 0.2, 0.866666666666667, 0.823076923076923, 1.93333333333333, 0.2, 2.56804029304029, 2.0, 0.133333333333333, 1.0, 1.6, 1.6969696969697, 2.66666666666667, 2.35833333333333, 8.26297258297258, 2.2, 2.86666666666667, 0.733333333333333, 5.93333333333333, 3.2, 0.666666666666667, 0.380952380952381, 1.84444444444444, 0.2, 0.133333333333333, 3.6, 1.53333333333333, 4.10909090909091, 0.0857142857142857, 0.2, 4.2, 8.73809523809524, 0.133333333333333, 0.5, 0.338888888888889, 4.21212121212121, 1.28666666666667, 2.24761904761905, 5.66111111111111, 3.26666666666667, 1.0, 2.0, 4.09365079365079, 1.15238095238095, 0.866666666666667, 3.41666666666667, 2.39206349206349, 2.91082972582973, 3.28046642899584, 0.2, 2.25454545454545, 12.2186868686869, 4.7, 35.1785714285714, 17.35, 20.8666666666667, 21.3444444444444, 30.5333333333333, 25.4642424242424, 14.0, 4.77142857142857, 41.8809523809524, 44.1357142857143, 6.36630036630037, 2.68831168831169, 0.2, 43.9533333333333, 29.3311188811189, 32.6666666666667, 19.8606060606061, 30.0, 24.0, 14.08, 16.0, 28.5277777777778, 4.0, 2.0, 10.1333333333333, 14.2666666666667, 36.2666666666667, 29.7333333333333, 40.0, 42.2, 12.875, 30.3666666666667, 37.2705128205128, 10.2502645502645, 14.674358974359, 10.0, 34.0952380952381, 25.347619047619, 38.3333333333333, 40.3454545454545, 12.2, 14.1507936507937, 12.2857142857143, 36.0, 25.2315018315018, 10.0, 11.0, 5.93015873015873, 39.044474969475, 2.0, 16.0, 18.9026984126984, 30.0, 10.0, 30.1515151515152, 20.2, 40.1666666666667, 34.0, 42.8010101010101, 18.0, 43.6733333333333, 4.0, 33.9568181818182, 25.1284759358289, 18.3, 24.2809523809524, 0.619047619047619, 11.2477272727273, 15.1787878787879, 10.0, 4.13333333333333, 34.1333333333333, 2.0, 40.0, 29.3714285714286, 35.2, 0.0333333333333333, 8.0, 21.8444444444444, 42.1454545454545, 13.3333333333333, 26.7301587301587, 14.0, 18.4027777777778, 10.2305555555556, 26.102380952381, 44.0348124098124, 12.4104166666667, 43.9333333333333, 35.4174025974026, 2.0, 2.71666666666667, 2.0247113997114, 27.2380952380952, 20.1624542124542, 21.3005355276907, 14.0571428571429, 16.3333333333333, 23.5428571428571, 28.2333333333333, 16.8, 20.6666666666667, 20.6666666666667, 14.1333333333333, 10.5333333333333, 28.6, 10.0, 22.4583333333333, 24.2857142857143, 40.2, 16.8333333333333, 40.3333333333333, 41.5333333333333, 40.8600122100122, 25.0, 32.6, 20.0, 12.952380952381, 40.3333333333333, 39.3333333333333, 42.4, 8.18888888888889, 28.0, 2.0, 18.9986813186813, 8.25, 27.4, 1.7093137254902, 30.3611111111111, 30.3333333333333, 12.3333333333333, 41.6190476190476, 17.0666666666667, 38.3611111111111, 8.98888888888889, 4.3031746031746, 4.35595238095238, 21.7422161172161, 40.725, 29.0892857142857, 23.3738095238095, 1.0, 38.5333333333333, 12.1166666666667, 0.151515151515151, 14.4, 22.0, 4.0, 8.55555555555556, 31.7969696969697, 13.5892857142857, 16.1609307359307, 25.2658008658009, 41.5761904761905, 10.9073593073593, 18.3333333333333, 17.6190476190476, 14.0, 16.23614996115, 4.0, 22.6755411255411, 0.333333333333333, 23.6, 20.0, 18.4, 14.6666666666667, 14.1428571428571, 15.0166666666667, 16.7636363636364, 4.0, 11.8, 4.0, 12.0, 10.0, 6.57142857142857, 16.8124542124542, 14.0, 16.8761904761905, 46.5880952380952, 14.4318181818182, 32.1997835497835, 26.0, 13.0848484848485, 8.0, 19.0, 2.0, 25.2205128205128, 26.25, 18.7828282828283, 0.0666666666666667, 0.794250194250194, 14.8333333333333, 20.2, 43.0, 27.054797979798, 30.8444444444444, 28.0, 19.7151515151515, 20.1900432900433, 23.0035714285714, 6.5, 13.3333333333333, 16.6925806219924, 16.880303030303, 1.26666666666667, 23.0, 42.3333333333333, 21.6, 22.0, 26.6666666666667, 4.0, 8.0, 15.5424242424242, 2.0, 14.8666666666667, 17.2039186303892, 11.1666666666667, 26.9895382395382, 25.8888888888889, 18.3333333333333, 30.2969696969697, 6.0, 13.3655844155844, 19.8447552447552, 21.2254329004329, 17.7333333333333, 12.7333333333333, 20.3666666666667, 18.0, 23.9337662337662, 8.2, 2.0, 16.0, 8.0, 15.2909090909091, 2.0, 17.155303030303, 18.963082437276, 4.12820512820513, 14.0, 20.3581780538302, 14.6857142857143, 11.1833333333333, 15.2727272727273, 18.2, 10.2, 6.0, 0.2, 44.2444444444444, 13.3484848484848, 40.7311827956989, 17.9333333333333, 2.01166666666667, 4.89580770107086, 18.7444444444444, 2.53333333333333, 2.2, 0.325, 1.22640692640693, 0.0818181818181818, 0.5, 33.7062770562771, 13.2944444444444, 20.2, 14.3493506493506, 18.5333333333333, 16.8939393939394, 16.3393939393939, 3.14411421911422, 3.26439393939394, 1.21818181818182, 23.2380952380952, 0.2, 2.2, 0.0303030303030303, 0.394602300636783, 4.2, 2.51515151515152], [4.0, 10.1, 14.0, 12.3619047619048, 9.5, 1.0, 3.23055555555556, 4.13333333333333, 7.0, 11.4190476190476, 2.2, 6.0, 4.0, 7.0, 0.127272727272727, 10.8333333333333, 5.0, 5.6, 6.70714285714286, 5.36666666666667, 10.3809523809524, 27.24, 18.9162114845938, 0.787619047619048, 4.34949494949495, 18.0, 0.133333333333333, 18.0059523809524, 3.08454545454545, 0.812987012987013, 0.181818181818182, 1.0, 29.6318348318348, 22.6285714285714, 40.8666666666667, 6.36309523809524, 2.0, 32.3571428571429, 21.4730519480519, 22.1246753246753, 9.16363636363636, 40.5457792207792, 29.7714285714286, 2.0, 22.3333333333333, 11.2887445887446, 8.9, 8.0, 2.24761904761905, 2.02274509803922, 15.7619047619048, 2.5, 19.568947457771, 16.0266666666667, 12.0833333333333, 43.0, 10.0, 2.96363636363636, 6.48030303030303, 2.09166666666667, 16.5, 17.4011904761905, 7.0, 0.006060606060606, 10.0, 17.2888888888889, 1.0, 4.16666666666667, 12.3333333333333, 4.18181818181818, 14.1333333333333, 27.5090909090909, 11.0, 4.14545454545455, 11.6666666666667, 15.852380952381, 16.0, 24.3833333333333, 11.3333333333333, 7.0, 8.0, 5.33333333333333, 20.0972222222222, 6.0, 20.0, 17.4371017871018, 10.2095238095238, 0.321212121212121, 12.0, 8.13333333333333, 24.1545454545455, 17.0666666666667, 42.7, 0.571428571428571, 1.07878787878788, 0.866666666666667, 23.2333333333333, 24.0, 21.6, 14.8666666666667, 28.0, 38.0, 6.0, 2.46969696969697, 4.0, 20.0, 22.2151515151515, 12.1428571428571, 20.2, 20.2280441780442, 32.6666666666667, 10.2, 14.3333333333333, 26.0, 6.0, 26.0, 14.4, 20.6666666666667, 20.0, 16.3777777777778, 18.0, 2.2, 1.3, 0.666666666666667], [0.4, 2.0, 4.6, 3.0, 9.27777777777778, 8.0, 5.0, 10.0, 4.0, 2.61926406926407, 7.0, 4.80952380952381, 1.0, 4.11111111111111, 8.16666666666667, 4.0, 15.0, 15.7428571428571, 11.9314790764791, 10.0, 18.0, 5.0, 26.5211038961039, 13.3761904761905, 9.0, 6.16666666666667, 0.223232323232323, 5.08571428571429, 8.67575757575758, 2.0, 15.5, 4.0, 11.2833333333333, 3.0, 1.125, 3.0, 7.0, 7.53333333333333, 12.0, 8.2, 11.5812749342161, 7.1, 0.285714285714286, 2.09090909090909, 0.866666666666667, 8.0]]}
var data2 =echarts.dataTool.prepareBoxplotData(data1["合作广度"]);
var data3 =echarts.dataTool.prepareBoxplotData(data1["合作深度"]);
var data4 =echarts.dataTool.prepareBoxplotData(data1["C指数"]);

var xAxisList = [], yAxisList = [], yData = [];
var varList1 = ['CB-Ⅰ', 'CB-Ⅱ', 'CB-Ⅲ'];
var varList2 = ['CD-Ⅰ', 'CD-Ⅱ', 'CD-Ⅲ', 'CD-Ⅳ', 'CD-Ⅴ'];
var varList3 = ['C-Ⅰ', 'C-Ⅱ', 'C-Ⅲ', 'C-Ⅳ'];
data2 = data2['boxData'];
data3 = data3['boxData'];
data4 = data4['boxData'];

for(var i=0;i<data2.length;i++){
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
            boxWidth:['1%','2%'],
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
                        '合作广度类型: ' + param.name,
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
            boxWidth:['1%','2%'],
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
                        '合作深度类型: ' + param.name,
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
            boxWidth:['1%','2%'],
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
                        'C指数类型: ' + param.name,
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

option8888 = {
    title: {
            text: '科\n研\n合\n作\n变\n化\n类\n型\n奖\n励\n得\n分',
            right: 'right',
            top:"top",
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
        top:'-38%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-31%',
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
        top:'-14%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'-7%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'0%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'7%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'14%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'24%',
        height:'90%',
        left: '20%',
        right: '10%',
        bottom:'10%',
    },
    {
        top:'31%',
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
        top:'45%',
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


option4 = {
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
        symbolSize: 4,
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
        edgeSymbolSize: [1, 5],
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

        data:  [
    {
      "name": "R-Ⅰ",
      "symbolSize": 4.84,
      "itemStyle": {
        "normal": {
          "color": "#f56e12"
        }
      }
    },
    {
      "name": "R-Ⅱ",
      "symbolSize": 12.52,
      "itemStyle": {
        "normal": {
          "color": "#f56e12"
        }
      }
    },
    {
      "name": "R-Ⅲ",
      "symbolSize": 6.58,
      "itemStyle": {
        "normal": {
          "color": "#f56e12"
        }
      }
    },
    {
      "name": "R-Ⅳ",
      "symbolSize": 6.32,
      "itemStyle": {
        "normal": {
          "color": "#f56e12"
        }
      }
    },
    {
      "name": "e-Ⅰ",
      "symbolSize": 16.94,
      "itemStyle": {
        "normal": {
          "color": "#f5c312"
        }
      }
    },
    {
      "name": "e-Ⅴ",
      "symbolSize": 5.88,
      "itemStyle": {
        "normal": {
          "color": "#f5c312"
        }
      }
    },
    {
      "name": "e-Ⅱ",
      "symbolSize": 4.82,
      "itemStyle": {
        "normal": {
          "color": "#f5c312"
        }
      }
    },
    {
      "name": "e-Ⅲ",
      "symbolSize": 1.06,
      "itemStyle": {
        "normal": {
          "color": "#f5c312"
        }
      }
    },
    {
      "name": "e-Ⅳ",
      "symbolSize": 1.56,
      "itemStyle": {
        "normal": {
          "color": "#f5c312"
        }
      }
    },
    {
      "name": "J-Ⅶ",
      "symbolSize": 4.18,
      "itemStyle": {
        "normal": {
          "color": "#6ac439"
        }
      }
    },
    {
      "name": "J-Ⅵ",
      "symbolSize": 5.44,
      "itemStyle": {
        "normal": {
          "color": "#6ac439"
        }
      }
    },
    {
      "name": "J-Ⅲ",
      "symbolSize": 2.94,
      "itemStyle": {
        "normal": {
          "color": "#6ac439"
        }
      }
    },
    {
      "name": "J-Ⅱ",
      "symbolSize": 7.58,
      "itemStyle": {
        "normal": {
          "color": "#6ac439"
        }
      }
    },
    {
      "name": "J-Ⅰ",
      "symbolSize": 4.62,
      "itemStyle": {
        "normal": {
          "color": "#6ac439"
        }
      }
    },
    {
      "name": "J-Ⅳ",
      "symbolSize": 3.98,
      "itemStyle": {
        "normal": {
          "color": "#6ac439"
        }
      }
    },
    {
      "name": "J-Ⅴ",
      "symbolSize": 1.5,
      "itemStyle": {
        "normal": {
          "color": "#6ac439"
        }
      }
    },
    {
      "name": "CB-Ⅱ",
      "symbolSize": 6.34,
      "itemStyle": {
        "normal": {
          "color": "#39c4bf"
        }
      }
    },
    {
      "name": "CB-Ⅰ",
      "symbolSize": 24.78,
      "itemStyle": {
        "normal": {
          "color": "#39c4bf"
        }
      }
    },
    {
      "name": "CB-Ⅲ",
      "symbolSize": 2.1,
      "itemStyle": {
        "normal": {
          "color": "#39c4bf"
        }
      }
    },
    {
      "name": "CD-Ⅰ",
      "symbolSize": 13.26,
      "itemStyle": {
        "normal": {
          "color": "#2a1469"
        }
      }
    },
    {
      "name": "CD-Ⅲ",
      "symbolSize": 3.52,
      "itemStyle": {
        "normal": {
          "color": "#2a1469"
        }
      }
    },
    {
      "name": "CD-Ⅱ",
      "symbolSize": 8.38,
      "itemStyle": {
        "normal": {
          "color": "#2a1469"
        }
      }
    },
    {
      "name": "CD-Ⅳ",
      "symbolSize": 7,
      "itemStyle": {
        "normal": {
          "color": "#2a1469"
        }
      }
    },
    {
      "name": "CD-Ⅴ",
      "symbolSize": 1.06,
      "itemStyle": {
        "normal": {
          "color": "#2a1469"
        }
      }
    },
    {
      "name": "C-Ⅱ",
      "symbolSize": 20.04,
      "itemStyle": {
        "normal": {
          "color": "#4e7eed"
        }
      }
    },
    {
      "name": "C-Ⅰ",
      "symbolSize": 8.88,
      "itemStyle": {
        "normal": {
          "color": "#4e7eed"
        }
      }
    },
    {
      "name": "C-Ⅲ",
      "symbolSize": 3.02,
      "itemStyle": {
        "normal": {
          "color": "#4e7eed"
        }
      }
    },
    {
      "name": "C-Ⅳ",
      "symbolSize": 1,
      "itemStyle": {
        "normal": {
          "color": "#4e7eed"
        }
      }
    }
  ],
        // links: [],
        links:   [
    {
      "source": "R-Ⅰ",
      "target": "e-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 3.26,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "e-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.82,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "e-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.5,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "e-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.12,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "e-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.14,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "J-Ⅶ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.78,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "J-Ⅵ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.86,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "J-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.52,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "J-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.26,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "J-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.6,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "J-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.54,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "J-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.28,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "CB-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.28,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "CB-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 4.44,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "CB-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.12,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.88,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.04,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.34,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.38,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.18,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 4,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.54,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.24,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅰ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.04,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "e-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 7.22,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "e-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.54,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "e-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.82,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "e-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.44,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "e-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.5,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "J-Ⅶ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.58,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "J-Ⅵ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.14,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "J-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "J-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 3.56,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "J-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.12,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "J-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.48,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "J-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.62,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "CB-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.36,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "CB-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 9.86,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "CB-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.28,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 6.16,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.88,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 3.44,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.84,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.18,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 7.88,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 3.6,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.78,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅱ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.2,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "e-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.72,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "e-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.64,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "e-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.08,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "e-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.38,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "e-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.76,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "J-Ⅶ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.82,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "J-Ⅵ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.14,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "J-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.76,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "J-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.02,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "J-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.16,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "J-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.46,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "J-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.22,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "CB-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.16,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "CB-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 3.34,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "CB-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.08,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.78,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.68,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.36,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.52,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.24,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.44,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.3,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.46,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅲ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.34,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "e-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 4.74,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "e-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.88,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "e-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.42,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "e-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.12,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "e-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.16,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "J-Ⅶ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "J-Ⅵ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.3,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "J-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.66,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "J-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.74,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "J-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.74,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "J-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.5,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "J-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.38,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "CB-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.66,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "CB-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 5.54,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "CB-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.08,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.48,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.28,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.6,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.84,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.12,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 5.2,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.88,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.1,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "R-Ⅳ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.08,
          "curveness": 0.2,
          "color": "#f56e12"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "J-Ⅶ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.6,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "J-Ⅵ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 3.04,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "J-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.48,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "J-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 4.78,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "J-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.24,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "J-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.8,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "J-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "CB-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.84,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "CB-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 14.84,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "CB-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.22,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 6.4,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.64,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 4.86,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 4.84,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.2,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 13.32,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 3.04,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.42,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅰ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.12,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "J-Ⅶ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.64,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "J-Ⅵ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.34,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "J-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.58,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "J-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.46,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "J-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.04,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "J-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.52,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "J-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.3,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "CB-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.4,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "CB-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 4.22,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "CB-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.24,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.84,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.64,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.36,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.02,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 3.36,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.82,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.6,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅴ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.08,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "J-Ⅶ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.7,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "J-Ⅵ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.76,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "J-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.42,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "J-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.14,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "J-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.76,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "J-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.9,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "J-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.14,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "CB-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.4,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "CB-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.6,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "CB-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.82,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.18,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.04,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.14,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.32,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.12,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.74,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.62,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.16,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅱ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.22,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "J-Ⅶ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.14,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "J-Ⅵ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.16,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "J-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.12,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "J-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.14,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "J-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.28,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "J-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.18,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "J-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.02,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "CB-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.24,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "CB-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.76,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "CB-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.06,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.36,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.16,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.14,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.26,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.14,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.5,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.38,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.12,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅲ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.04,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "J-Ⅶ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.1,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "J-Ⅵ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.14,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "J-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.34,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "J-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.06,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "J-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.3,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "J-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.58,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "J-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.04,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "CB-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.58,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "CB-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.76,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "CB-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.22,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.52,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.4,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.24,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.16,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.24,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.6,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.46,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.28,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "e-Ⅳ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.2,
          "curveness": 0.2,
          "color": "#f5c312"
        }
      }
    },
    {
      "source": "J-Ⅶ",
      "target": "CB-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.5,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅶ",
      "target": "CB-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 3.46,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅶ",
      "target": "CB-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.22,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅶ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.52,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅶ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.28,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅶ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.32,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅶ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.92,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅶ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.12,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅶ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.8,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅶ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.92,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅶ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.3,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅶ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.14,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅵ",
      "target": "CB-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.04,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅵ",
      "target": "CB-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 4.28,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅵ",
      "target": "CB-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.12,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅵ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.38,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅵ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.34,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅵ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.36,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅵ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.18,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅵ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.18,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅵ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 3.66,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅵ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.3,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅵ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.4,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅵ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.08,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅲ",
      "target": "CB-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.56,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅲ",
      "target": "CB-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.18,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅲ",
      "target": "CB-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.18,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅲ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.22,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅲ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.34,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅲ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.68,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅲ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.62,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅲ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.08,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅲ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.84,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅲ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.72,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅲ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.26,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅲ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.1,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅱ",
      "target": "CB-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.02,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅱ",
      "target": "CB-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 6.24,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅱ",
      "target": "CB-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.28,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅱ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 3.36,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅱ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.42,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅱ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.96,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅱ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.8,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅱ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.02,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅱ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 5.34,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅱ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.72,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅱ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.4,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅱ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.06,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅰ",
      "target": "CB-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.02,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅰ",
      "target": "CB-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 3.5,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅰ",
      "target": "CB-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.1,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅰ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.04,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅰ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.44,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅰ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.1,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅰ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.92,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅰ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.12,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅰ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 3.02,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅰ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.14,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅰ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.4,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅰ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.06,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅳ",
      "target": "CB-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.1,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅳ",
      "target": "CB-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.28,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅳ",
      "target": "CB-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.6,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅳ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.24,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅳ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.96,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅳ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.84,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅳ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.74,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅳ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.2,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅳ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.84,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅳ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.1,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅳ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.76,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅳ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.2,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅴ",
      "target": "CB-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.22,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅴ",
      "target": "CB-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.22,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅴ",
      "target": "CB-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.06,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅴ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.54,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅴ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.1,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅴ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.48,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅴ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.38,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅴ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅴ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅴ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.42,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅴ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.06,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "J-Ⅴ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.02,
          "curveness": 0.2,
          "color": "#6ac439"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 3.42,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 3.42,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.14,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.14,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.08,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.08,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.44,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.44,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.26,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.26,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.16,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.16,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.68,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 2.68,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.22,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.22,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.2,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅱ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.2,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 9.12,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 9.12,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.6,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.6,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 7.08,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 7.08,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 6.36,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 6.36,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.58,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.58,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 17.68,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 17.68,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 5.6,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 5.6,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.02,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.02,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.36,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅰ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.36,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.72,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "CD-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.72,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.74,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "CD-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.74,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.2,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "CD-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.2,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.16,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "CD-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.16,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.22,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "CD-Ⅴ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.22,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.2,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.2,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.6,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.6,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.78,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.78,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.44,
          "curveness": 0.2,
          "color": "#39c4bf"
        }
      }
    },
    {
      "source": "CB-Ⅲ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.44,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅰ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 7.46,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅰ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 7.46,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅰ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 4.44,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅰ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 4.44,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅰ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.12,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅰ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.12,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅰ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.18,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅰ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.18,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅲ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.56,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅲ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.56,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅲ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.38,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅲ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.38,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅲ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.18,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅲ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.18,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅲ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.3,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅲ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.3,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅱ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 5.92,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅱ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 5.92,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅱ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.98,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅱ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1.98,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅱ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.34,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅱ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.34,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅱ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.1,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅱ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.1,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅳ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 5.8,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅳ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 5.8,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅳ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.82,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅳ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.82,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅳ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.22,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅳ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.22,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅳ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.1,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅳ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.1,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅴ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.3,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅴ",
      "target": "C-Ⅱ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.3,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅴ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.26,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅴ",
      "target": "C-Ⅰ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.26,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅴ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.16,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅴ",
      "target": "C-Ⅲ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.16,
          "curveness": 0.2,
          "color": "#4e7eed"
        }
      }
    },
    {
      "source": "CD-Ⅴ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.32,
          "curveness": 0.2,
          "color": "#2a1469"
        }
      }
    },
    {
      "source": "CD-Ⅴ",
      "target": "C-Ⅳ",
      "name": "",
      "tooltip": {
        "trigger": "item",
        "formatter": function(params, ticket, callback) {                    return params.data.name;                }
      },
      "symbolSize": [
        5,
        20
      ],
      "label": {
        "normal": {
          "formatter": function(params, ticket, callback) {                        params.name = params.data.name;                        return params.name;                    },
          "show": "true"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 0.32,
          "curveness": 0.2,
          "color": "#4e7eed"
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
        name:'R-Ⅰ',
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
                    name: 'R-Ⅰ',
                    value: 0.5,
                    coord: [5, 0.7]
                }]
            },
            itemStyle: {
                color: '#fb7636',
                borderColor: "#fff",
                borderWidth: 2,
            },
            data: [0.001553166,0.029271207,0.093847073,0.276105137,0.570250896,0.69557945,0.69557945,0.69557945,0.69557945,0.69557945,0.69557945,0.69557945,0.69557945,0.655436081,0.655436081,0.655436081,0.655436081,0.655436081,0.655436081,0.655436081,0.73213859,1,1,1,1]
        },
        {
            name:'R-Ⅱ',
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
                    name: 'R-Ⅱ',
                    value: 0.5,
                    coord: [11, 0.8]
                }]
            },
            data: [0.17825384,0.17825384,0.17825384,0.316087308,0.412287793,1,1,1,1,0.803556993,0.803556993,0.803556993,0.603880356,0.307194826,0.327000808,0.242522231,0.088520614,0,0.122473727,0.247372676,0.767178658,0.963621665,0.963621665,0.689975748,0.689975748]
        },
        {
            name:'R-Ⅲ',
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
                    name: 'R-Ⅲ',
                    value: 0.6,
                    coord: [1, 0.86]
                }]
            },
            data: [1,0.837209302,0.154651163,0.302325581,0.441860465,0.627906977,0.651162791,0.651162791,0.651162791,0.651162791,0.651162791,0.651162791,0.651162791,0.651162791,0.651162791,0.651162791,0.651162791,0.651162791,0.651162791,0.651162791,0.651162791,0.651162791,0.651162791,0.651162791,0.581395349]
        },
        {
            name:'R-Ⅳ',
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
                    name: 'R-Ⅳ',
                    value: 0.6,
                    coord: [1, 0.00]
                }]
            },
            data: [0.000417373,0.00143472,0.059756098,0.238163558,0.455738881,0.620373027,0.620373027,0.620373027,0.620373027,0.620373027,0.620373027,0.620373027,0.620373027,0.620373027,0.620373027,0.620373027,0.620373027,0.620373027,0.620373027,0.620373027,0.620373027,1,1,0.930057389,0.559038737]
        },
    ],
};

option55 = {
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
        name:'e-Ⅰ',
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
                    name: 'e-Ⅰ',
                    value: 0.5,
                    coord: [22, 1]
                }]
            },
            itemStyle: {
                color: '#fb7636',
                borderColor: "#fff",
                borderWidth: 2,
            },
            data: [0.003371053,0.0509191,0.135039213,0.309179511,0.406203005,0.454823381,0.506787391,0.552629991,0.587353174,0.587353174,0.587353174,0.587353174,0.587353174,0.587353174,0.587353174,0.587353174,0.587353174,0.587353174,0.587353174,0.658300795,0.763361307,0.954988523,0.992837075,1,0.629980283]
        },
        {
            name:'e-Ⅱ',
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
                    name: 'e-Ⅱ',
                    value: 0.5,
                    coord: [12, 0.08]
                }]
            },
            data: [0.361268558,0.315003085,0.315003085,0.315003085,0.315003085,0.315003085,0.960798149,1,0.786744361,0.886290906,0.944352618,0.183955703,0.056685474,0.372655356,0.175543246,0.175543246,0.680258211,0.315003085,0,0,0.560362347,0.560362347,0.43494034,0.43494034,0.236095285]
        },
        {
            name:'e-Ⅲ',
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
                    name: 'e-Ⅲ',
                    value: 0.6,
                    coord: [18, 0.14]
                }]
            },
            data: [0.01460179,0.032870321,0.187368873,0.315262193,0.385557699,0.408798427,0.590067102,0.590067102,0.590067102,0.590067102,0.590067102,0.590067102,0.590067102,0.590067102,0.590067102,0.590067102,0.590067102,0.472484406,0.119455053,0.134795855,0.911721614,0.953701001,0.714608133,0.682516374,0.203013205]
        },
        {
            name:'e-Ⅳ',
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
                    name: 'e-Ⅳ',
                    value: 0.6,
                    coord: [3, 0.42]
                }]
            },
            data: [0.865853776,0.975273148,0.978400399,0.393447681,0.206615648,0.211091769,0.385517433,0.445794476,0.675665525,0.675665525,0.675665525,0.675665525,0.675665525,0.675665525,0.675665525,0.675665525,0.675665525,0.675665525,0.675665525,0.675665525,0.675665525,0.675665525,0.468253763,0.476421917,0.298442674]
        },
        {
            name:'e-Ⅴ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#91c7ae",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
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
                    name: 'e-Ⅴ',
                    value: 0.6,
                    coord: [7, 0.65]
                }]
            },
            data: [0.008189948,0.057331873,0.057331873,0.253103944,0.390055412,0.42079239,0.464222621,0.651129191,0.651129191,0.651129191,0.651129191,0.651129191,0.651129191,0.651129191,0.651129191,0.651129191,0.651129191,0.651129191,0.651129191,0.651129191,0.799743532,0.921621027,0.686082486,0.594626545,0.346119981]
        },
    ],
};

option555 = {
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
        name:'J-Ⅰ',
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
                    name: 'J-Ⅰ',
                    value: 0.5,
                    coord: [7, 1]
                }]
            },
            itemStyle: {
                color: '#fb7636',
                borderColor: "#fff",
                borderWidth: 2,
            },
            data: [0,0,0,0,0,0,0,1,0.027459447,0.001736376,0.00136917,0.00136917,0.003975778,0.552148815,0,0.070964875,0.428967008,0.028432746,0.028432746,0.502797152,0.502797152,0.181525466,0.060707466,0.102168446]
        },
        {
            name:'J-Ⅱ',
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
                    name: 'J-Ⅱ',
                    value: 0.5,
                    coord: [2, 0.72]
                }]
            },
            data: [0.658563338,0.208968113,0.702700305,0.017597662,0.017597662,0.017597662,0.017597662,0.869598211,0.222457557,0.018645562,0.018902216,0,0.079771394,0.230788034,0.059223995,0.057324219,0.164529355,0.175254876,0.14477064,0.647358622,0.647358622,0.152038652,0.152038652,0.152038652]
        },
        {
            name:'J-Ⅲ',
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
                    name: 'J-Ⅲ',
                    value: 0.6,
                    coord: [15, 0.28]
                }]
            },
            data: [0.394231424,0,0,0,0,0,0.023565912,0.333108166,0.27439655,0.024655505,0.024655505,0.024655505,0.024655505,0.466561378,0.270269633,0.267873161,0.267873161,0.061749591,0.115873056,0.288049251,0.462349468,0.073557231,0.106414751,0.031688872]
        },
        {
            name:'J-Ⅳ',
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
                    name: 'J-Ⅳ',
                    value: 0.6,
                    coord: [16, 0.55]
                }]
            },
            data: [0.539475138,0,0,0,0,0,0,0.613658532,0.083925636,0.044144768,0.056763771,0.019678338,0.167240158,0.167240158,0.052893848,0.052893848,0.548837939,0.150041052,0.022853316,0.41939559,0.753844487,0.020421878,0.139510679,0.202013679]
        },
        {
            name:'J-Ⅴ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#91c7ae",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
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
                    name: 'J-Ⅴ',
                    value: 0.6,
                    coord: [5, 0.12]
                }]
            },
            data: [0.010560117,0.010560117,0.010560117,0.463035444,1,0.10085152,0.052174418,0.265109863,0.15232918,0.022722695,0,0,0.045456287,0.046209105,0.046209105,0.046209105,0.055549575,0.051259746,0.051259746,0.162181936,0.162181936,0.002512952,0.002512952,0.002512952]
        },
        {
            name:'J-Ⅵ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#ca8622",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
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
                    name: 'J-Ⅵ',
                    value: 0.6,
                    coord: [11, 0.08]
                }]
            },
            data: [0.293790818,0,0,0,0,0,0,0.373307496,0.31433945,0.111777809,0.074807924,0.074807924,0.074807924,0.221453577,0.037030729,0.018791499,0.043167438,0.016741025,0.016741025,0.144206808,0.256734836,0.013727417,0.068140298,0.068140298,0.26519308]
        },
        {
            name:'J-Ⅶ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#546570",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
                }
            },
            itemStyle: {
                color: '#546570',
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
                                color: '#546570'
                            }, {
                                offset: 1,
                                color: '#546570'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: 'J-Ⅶ',
                    value: 0.6,
                    coord: [13, 0.78]
                }]
            },
            data: [0.262441915,0,0,0,0,0,0,0.55910526,0.230878523,0.230878523,0.019971309,0.019971309,0.019971309,0.766735121,0.317374451,0.125407781,0.314298575,0.077292773,0.088754206,0.322860154,0.322860154,0.023927071,0.092271089,0.11267177]
        },
    ],
};

optionL = {
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
        name:'CB-Ⅰ',
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
                    name: 'CB-Ⅰ',
                    value: 0.5,
                    coord: [10, 0.42]
                }]
            },
            itemStyle: {
                color: '#fb7636',
                borderColor: "#fff",
                borderWidth: 2,
            },
            data: [0,0,0,0,0.035211268,0.112676056,0.211267606,0.305164319,0.387323944,0.415492958,0.415492958,0.415492958,0.415492958,0.415492958,0.429577465,0.429577465,0.429577465,0.429577465,0.514084507,0.654929577,0.767605634,0.971830986,1,0.992957746,0.873239437]
        },
        {
            name:'CB-Ⅱ',
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
                    name: 'CB-Ⅱ',
                    value: 0.5,
                    coord: [1, 0.06]
                }]
            },
            data: [0.083333333,0.03974359,0,0,0.016666667,0.016666667,0.016666667,0.016666667,0.716666667,0.716666667,0.716666667,0.716666667,0.716666667,0.716666667,0.716666667,0.716666667,0.716666667,0.716666667,0.716666667,0.716666667,0.733333333,0.95,0.966666667,0.966666667,1]
        },
        {
            name:'CB-Ⅲ',
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
                    name: 'CB-Ⅲ',
                    value: 0.6,
                    coord: [14, 0.02]
                }]
            },
            data: [0.83535109,0.934624697,1,0.986682809,0.950363196,0.859564165,0.808716707,0.740920097,0.211460856,0,0,0,0,0,0,0,0,0,0,0,0.537530266,0.537530266,0.537530266,0.537530266,0.537530266]
        },
    ],
};

optionLL = {
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
        name:'CD-Ⅰ',
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
                    name: 'CD-Ⅰ',
                    value: 0.5,
                    coord: [1, 0.02]
                }]
            },
            itemStyle: {
                color: '#fb7636',
                borderColor: "#fff",
                borderWidth: 2,
            },
            data: [0.009615385,0.009615385,0,0.009615385,0.096153846,0.134615385,0.307692308,0.519230769,0.778846154,0.865384615,0.971153846,0.990384615,1,0.855769231,0.826923077,0.826923077,0.826923077,0.730769231,0.692307692,0.625,0.538461538,0.538461538,0.538461538,0.538461538,0.384615385]
        },
        {
            name:'CD-Ⅱ',
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
                    name: 'CD-Ⅱ',
                    value: 0.5,
                    coord: [24, 0.6]
                }]
            },
            data: [0,0,0,0,0.058823529,0.117647059,0.176470588,0.588235294,0.735294118,0.862745098,1,1,1,0.823529412,0.705882353,0.823529412,0.764705882,0.823529412,0.647058824,0.647058824,0.588235294,0.588235294,0.588235294,0.588235294,0.588235294]
        },
        {
            name:'CD-Ⅲ',
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
                    name: 'CD-Ⅲ',
                    value: 0.6,
                    coord: [18, 1]
                }]
            },
            data: [0.285714286,0.142857143,0.142857143,0.142857143,0.285714286,0,0.285714286,0.571428571,0.714285714,0.857142857,0.857142857,0.857142857,0.857142857,0.857142857,0.714285714,0.857142857,0.857142857,0.857142857,1,0.428571429,0.428571429,0.428571429,0.428571429,0.428571429,0.428571429]
        },
        {
            name:'CD-Ⅳ',
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
                    name: 'CD-Ⅳ',
                    value: 0.6,
                    coord: [2, 0.32]
                }]
            },
            data: [0.782608696,0.434782609,0.304347826,0.086956522,0.086956522,0.086956522,0.347826087,0.608695652,0.826086957,0.826086957,0.826086957,0.826086957,0.826086957,0.826086957,0.826086957,0.826086957,0.826086957,0.739130435,0.652173913,0.652173913,0.147826087,0.652173913,0.956521739,1,0.913043478]
        },
        {
            name:'CD-Ⅴ',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            symbolColor:"#91c7ae",
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(155, 18, 184, .4)',
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
                    name: 'CD-Ⅴ',
                    value: 0.6,
                    coord: [11, 0.58]
                }]
            },
            data: [1,0.428571429,0.142857143,0.142857143,0.142857143,0.142857143,0.311688312,0.428571429,0.571428571,0.571428571,0.571428571,0.571428571,0.571428571,0.571428571,0.571428571,0.571428571,0.571428571,0.571428571,0.571428571,0.571428571,0.571428571,0.571428571,0.571428571,0.571428571,0.285714286]
        },
    ],
};

optionLLL = {
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
        name:'C-Ⅰ',
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
                    name: 'C-Ⅰ',
                    value: 0.5,
                    coord: [23, 0.62]
                }]
            },
            itemStyle: {
                color: '#fb7636',
                borderColor: "#fff",
                borderWidth: 2,
            },
            data: [0.042857143,0.1,0,0,0.133333333,0.4,0.7,0.7,0.8,0.8,0.933333333,0.9,0.8,0.7,0.7,0.7,0.8,0.8,0.8,0.8,0.8,0.8,0.7,0.6,0.5]
        },
        {
            name:'C-Ⅱ',
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
                    name: 'C-Ⅱ',
                    value: 0.5,
                    coord: [1, 0.41]
                }]
            },
            data: [0,0.4,0,0,0,0.333333333,0.5,0.5,1,1,1,1,1,0.5,0.5,0.5,1,1,1,1,0.5,1,1,1,1]
        },
        {
            name:'C-Ⅲ',
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
                    name: 'C-Ⅲ',
                    value: 0.6,
                    coord: [22, 0.44]
                }]
            },
            data: [0.142857143,0.142857143,0,0.095238095,0.166666667,0.428571429,0.714285714,0.714285714,0.714285714,0.714285714,1,1,0.857142857,0.714285714,0.714285714,0.714285714,0.714285714,0.714285714,0.714285714,0.714285714,0.714285714,0.571428571,0.428571429,0.428571429,0.428571429]
        },
        {
            name:'C-Ⅳ',
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
                    name: 'C-Ⅳ',
                    value: 0.6,
                    coord: [13, 0.02]
                }]
            },
            data: [1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1]
        },
    ],
};



map1 = function (str1) {
    var myChart5 = echarts.init(document.getElementById('main5'));
    myChart5.clear();
    if(str1=="研究广度"){
        myChart5.setOption(option5);
    }
    if(str1=="研究深度"){
        myChart5.setOption(option55);
    }
    if(str1=="JS散度"){
        myChart5.setOption(option555);
    }
    if(str1=="合作广度"){
        myChart5.setOption(optionL);
    }
    if(str1=="合作深度"){
        myChart5.setOption(optionLL);
    }
    if(str1=="C指数"){
        myChart5.setOption(optionLLL);
    }
}