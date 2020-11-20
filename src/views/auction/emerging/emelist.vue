<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
// import resize from './mixins/resize'

const animationDuration = 6000;

export default {
  //   mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "800px",
    },
    data: {
      type: Array,
    },
  },
  data() {
    return {
      chart: null,
      list: [],
      arr1: [],
      arr2: [],
    };
  },
  watch: {
    data: function (newVal, oldVal) {
      this.arr2 = [];
      this.arr1 = [];
      this.list = [];
      for (var i = 0; i < newVal.length; i++) {
        this.list.push(newVal[i].statTime.split("T")[0]);
        this.arr1.push(newVal[i].newUserAccount);
        this.arr2.push(newVal[i].bindingPhone);
      }

      this.initChart();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");

      this.chart.setOption({
       title: {
        text: '新兴优质企业群',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['头部企业','独角兽企业','高技术企业','高成长性企业']
    },

    series: [
        {
            name:'新兴优质企业群',
            type:'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'ascending',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                {value: 10, name: '头部企业'},
                {value: 30, name: '独角兽企业'},
                {value: 40, name: '高技术企业'},
                {value: 50, name: '高成长性企业'},
            ]
        }
    ]
      });
    },
  },
};
</script>

