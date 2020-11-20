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
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: [
            "先进技术评估服务",
            "成果快速转化服务",
            "供应链创新服务",
            "项目全价值链创新服务",
            "行业/领域解决方案服务",
            "产业链/生态群创新服务",
            "跨区域协同创新服务"
          ],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],

            label: {
              position: "inner",
            },
            labelLine: {
              show: false,
            },
            data: [{name: "用户", selected: true }],
          },
          {
            name: "用户",
            type: "pie",
            radius: ["40%", "55%"],
            label: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              backgroundColor: "#eee",
              borderColor: "#aaa",
              borderWidth: 1,
              borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              // padding: [0, 7],
              rich: {
                a: {
                  color: "#999",
                  lineHeight: 22,
                  align: "center",
                },
                // abg: {
                //     backgroundColor: '#333',
                //     width: '100%',
                //     align: 'right',
                //     height: 22,
                //     borderRadius: [4, 4, 0, 0]
                // },
                hr: {
                  borderColor: "#aaa",
                  width: "100%",
                  borderWidth: 0.5,
                  height: 0,
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33,
                },
                per: {
                  color: "#eee",
                  backgroundColor: "#334455",
                  padding: [2, 4],
                  borderRadius: 2,
                },
              },
            },
            data: [
              { value: 300, name: "先进技术评估服务" },
              { value: 200, name: "成果快速转化服务" },
              { value: 230, name: "供应链创新服务" },
              { value: 150, name: "项目全价值链创新服务" },
              { value: 200, name: "行业/领域解决方案服务" },
              { value: 320, name: "产业链/生态群创新服务" },
              { value: 180, name: "跨区域协同创新服务" },
            ],
          },
        ],
      });
    },
  },
};
</script>
