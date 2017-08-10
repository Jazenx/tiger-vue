<template>
  <div :class="className" :id="id" :style="{height:height,width:width}">
  </div>
</template>

<script>
import echarts from 'echarts';
// import 'assets/echarts/map/china';
import 'echarts/map/js/china.js';
import { getWeiboData } from 'api/tiger';
export default {
  name: 'tigerChinaMap',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '1000px'
    },
    height: {
      type: String,
      default: '800px'
    }
  },
  data() {
    return {
      chart: null,
      weiboData: null
    }
  },
  created() {
    this.getWeiboList();
    console.log(this.weiboData);
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose();
    this.chat = null;
  },
  methods: {
    getWeiboList() {
      getWeiboData().then(response => {
        this.weiboData = response.data;
      })
    },
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      const option = {
        backgroundColor: '#404a59',
        title: {
          text: '中国热点图',
          subtext: 'From Jason',
          sublink: '',
          left: 'center',
          top: 'top',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {},
        legend: {
          left: 'left',
          data: ['强', '中', '弱'],
          textStyle: {
            color: '#ccc'
          }
        },
        geo: {
          map: 'china',
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        },
        series: [{
          name: '弱',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 1,
          large: true,
          itemStyle: {
            normal: {
              shadowBlur: 2,
              shadowColor: 'rgba(37, 140, 249, 0.8)',
              color: 'rgba(37, 140, 249, 0.8)'
            }
          },
          data: this.weiboData[0]
        }, {
          name: '中',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 1,
          large: true,
          itemStyle: {
            normal: {
              shadowBlur: 2,
              shadowColor: 'rgba(14, 241, 242, 0.8)',
              color: 'rgba(14, 241, 242, 0.8)'
            }
          },
          data: this.weiboData[1]
        }, {
          name: '强',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 1,
          large: true,
          itemStyle: {
            normal: {
              shadowBlur: 2,
              shadowColor: 'rgba(255, 255, 255, 0.8)',
              color: 'rgba(255, 255, 255, 0.8)'
            }
          },
          data: this.weiboData[2]
        }]
      }
      this.chart.setOption(option);
    }
  }
}
</script>