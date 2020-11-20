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
      default: "600px",
    },
  },
  data() {
    return {
      xData: [],
      yData: []
    };
  },
  mounted() {
    this.featchTptBygetDomainAllData()
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    async featchTptBygetDomainAllData() {
      try {
        const ret = await this.$api.tabNewIndustry.getDomainAll()
        if (ret && ret.data && ret.data.domainList && ret.data.domainList.length) {
          ret.data.domainList.forEach(({domainName, number}) => {
             this.xData.push(domainName)
             this.yData.push(number)
          })
        }
        this.initChart()
      } catch (err) {
        throw err
      }
    },
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");

      this.chart.setOption({
        title: {
          text: "新兴军工产业集群图",
        },
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.xData,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "产值",
            type: "bar",
            barWidth: "60%",
            data: this.yData,
          },
        ],
      });
    },
  },
};
</script>

