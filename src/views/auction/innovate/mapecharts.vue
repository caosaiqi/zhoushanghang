<template>
  <div ref="platform" style="width: 100%; height: 800px"></div>
</template>
<script>
import "echarts/map/js/china.js";
import city from "echarts/map/json/china-cities.json";
export default {
  name: "ECharts",
  components: {},
  data() {
    return {
      mapData: [
        { name: "成都", number: 102, count: 399999, good: 2313, bad: 144 },
        { name: "绵阳", number: 169, count: 1931, good: 1869, bad: 62 },
        { name: "西安", number: 164, count: 1291, good: 1200, bad: 91 },
        { name: "长沙", number: 157, count: 2142, good: 2098, bad: 44 },
        { name: "武汉", number: 256, count: 2331, good: 2070, bad: 261 },
        { name: "南京", number: 128, count: 2699, good: 2556, bad: 143 },
        { name: "天津", number: 136, count: 1277, good: 1051, bad: 226 },
        { name: " 重庆", number: 138, count: 2108, good: 2085, bad: 23 },
        { name: "杭州", number: 266, count: 2734, good: 2609, bad: 125 },
        { name: "广州", number: 133, count: 2938, good: 2746, bad: 192 },
        { name: "青岛", number: 252, count: 1604, good: 1306, bad: 298 },
        { name: "厦门", number: 270, good: 2639, bad: 246 },
        { name: " 南昌", number: 211, good: 964, bad: 157 },
        { name: "贵安", number: 120, good: 2432, bad: 102 },
        { name: "合肥", number: 125, good: 1540, bad: 41 },
        { name: "哈尔滨", number: 186, good: 2730, bad: 196 },
        { name: " 郑州", number: 121, good: 1662, bad: 125 },
        { name: "无锡", number: 270, good: 2639, bad: 246 },
        { name: " 苏州", number: 211, good: 964, bad: 157 },
        { name: "舟山", number: 120, good: 2432, bad: 102 },
        { name: "太原", number: 125, good: 1540, bad: 41 },
      ],
    };
  },
  mounted() {
    this.chinaConfigure();
  },
  methods: {
    async lementData() {
      const  { data  } = await this.$api.element.findAllByAllElement()
      return data
    },
    async chinaConfigure() {
      var _this = this;
      let myChart = this.$echarts.init(this.$refs.platform); //这里是为了获得容器所在位置

      var geoCoordMap = {};
      var mapName = "china";
      myChart.showLoading();
      var mapFeatures = city.features;
      myChart.hideLoading();
      mapFeatures.forEach(function (v) {
        // 地区名称
        var name = v.properties.name; // 地区经纬度
        geoCoordMap[name] = v.properties.cp;
      });
      var data = [];
      data = this.mapData;
      //  console.log(data,geoCoordMap)
      var max = 480,
        min = 9; // todo
      var maxSize4Pin = 100,
        minSize4Pin = 20;
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              count: data[i].count,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      };
      window.onresize = myChart.resize;
      myChart.setOption({
        // 进行相关配置
        title: {
          text: "创新资源要素分布图",
        },
        backgroundColor: "transparent",
        tooltip: {
          trigger: "item",
          backgroundColor: "#1540a1",
          borderColor: "#FFFFCC",
          showDelay: 0,
          hideDelay: 0,
          enterable: false,
          transitionDuration: 0,
          extraCssText: "z-index:100",
          formatter: function (params, ticket, callback) {
            // if (ticket.indexOf('散点') != -1) {
            let index = params.dataIndex;

            console.log(_this.mapData);
            let name = params.name;
            var tipHtml = "";
            if (_this.mapData[index].count) {
              tipHtml =
                '<div style="width:280px;height:200px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">' +
                '<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 20px">' +
                '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;">' +
                "</i>" +
                '<span style="margin-left:10px;color:#fff;font-size:16px;">' +
                name +
                "</span>" +
                "</div>" +
                '<div style="padding:20px">' +
                '<p style="color:#fff;font-size:12px;">' +
                '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
                "</i>" +
                "军民融合主战区" +
                '<span style="color:#f48225;margin:0 6px;">';
              "</span>" + "</div>" + "</div>";
            } else {
              tipHtml =
                '<div style="width:280px;height:200px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">' +
                '<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 20px">' +
                '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;">' +
                "</i>" +
                '<span style="margin-left:10px;color:#fff;font-size:16px;">' +
                name +
                "</span>" +
                "</div>" +
                '<div style="padding:20px">' +
                '<p style="color:#fff;font-size:12px;">' +
                '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
                "</i>" +
                "军民融合支点城市" +
                '<span style="color:#f48225;margin:0 6px;">';
              "</span>" + "</div>" + "</div>";
            }

            return tipHtml;
            // }
          },
        },
        visualMap: {
          show: false,
          min: 0,
          max: 200,
          left: "10%",
          top: "bottom",
          calculable: false,
          seriesIndex: [1],
          inRange: {
            color: ["#04387b", "#467bc0"],
          },
        },
        geo: {
          map: mapName,
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: true,
            },
            color: "red",
          },
          roam: true,
          zoom: 0.6,
          scaleLimit: {
            //所属组件的z分层，z值小的图形会被z值大的图形覆盖
            min: 0.6, //最小的缩放值
          },
          layoutCenter: ["50%", "50%"], //地图位置
          layoutSize: "180%",
          itemStyle: {
            normal: {
              areaColor: "#ffefd5", //地图颜色
              borderColor: "#0066ba", //省份边界颜色
            },
            emphasis: {
              borderColor: "#0066ba", //选中省份边界颜色
              areaColor: "#ff8454", //选中省份颜色
              shadowColor: "rgba(0, 0, 0, 0.4)", //选中省份投影
              shadowBlur: 10,
            },
          },
        },
        series: [
          {
            name: "散点",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(this.mapData),
            rippleEffect: {
              //涟漪特效
              period: 4, //动画时间，值越小速度越快
              brushType: "stroke", //波纹绘制方式 stroke, fill
              scale: 4, //波纹圆环最大限制，值越大波纹越大
            },
            hoverAnimation: true,
            symbolSize: 5,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true,
              },
              emphasis: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                color: "red",
              },
            },
          },
          {
            name: "散点",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(
              this.mapData
                .sort(function (a, b) {
                  return b.count - a.count;
                })
                .slice(0, 5)
            ),
            symbolSize: 8,
            showEffectOn: "render",
            rippleEffect: {
              //涟漪特效
              period: 3, //动画时间，值越小速度越快
              brushType: "stroke", //波纹绘制方式 stroke, fill
              scale: 4, //波纹圆环最大限制，值越大波纹越大
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "left",
                show: false,
              },
            },
            itemStyle: {
              normal: {
                color: "yellow",
                shadowBlur: 10,
                shadowColor: "yellow",
              },
            },
            zlevel: 1,
          },
        ],
      });
    },
  },
};
</script>
    <style scoped>
</style>