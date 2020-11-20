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
      default: "70%",
    },
    height: {
      type: String,
      default: "600px",
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
        text: '新兴军工产业集群图',
    },
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
            data: ['通用航空', '新一代信息系统技术', '生物安全与健康', '未来商业航天', '无人系统与机器人', '海洋高端装备与应用','赛博空间安全','军民两用新材料'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '产值',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220,230]
        }
    ]
      });
    },
  },
};
</script>

