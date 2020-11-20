<template>
  <div ref="platform" style="width: 100%; height: 800px"></div>
</template>
<script>
import "echarts/map/js/china.js";
import city from "echarts/map/json/china-cities.json";
import province from "echarts/map/json/china.json";

export default {
  name: "ECharts",
  components: {},
  data() {
    return {
      mapData: [
        { name: "成都", number: 102, count: 1, good: 123213, bad: 144 },
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
      cityList: [],
      geoCoordMap: {}
    };
  },
  async created() {
    this.initGeoCoordMap()
     await this.getCityData()
    this.chinaConfigure();
  },
  methods: {
    initGeoCoordMap() {
       city.features.forEach( (v) => {
        var name = v.properties.name; // 地区经纬度
        this.geoCoordMap[name] = v.properties.cp;
      });
      
      province.features.forEach(v => {
         var name = v.properties.name; // 地区经纬度
         this.geoCoordMap[name] = v.properties.cp
      })
    },
    async getCityData () {
      try {
        const ret = await this.$api.tabNewIndustry.getCityAll()
        if (ret && ret.data) {
           this.cityList = []
           ret.data.forEach(item => {
            Object.keys(item).map(city => {
              const name = city.replace('省', '').replace('市', '')
              const geoCoord = this.geoCoordMap[name];
              this.cityList.push(
                {
                  name: city,
                  items: item[city],
                  value: geoCoord
                }
              )
             })
          })
        }
      } catch(err) {
        throw err
      }
    },
    tooltipStr ({name, items}) {
      return  `
          <div
            style="
              width: 280px;
              height: 200px;
              background: rgba(22, 80, 158, 0.8);
              border: 1px solid rgba(7, 166, 255, 0.7);
            "
          >
            <div
              style="
                width: 100%;
                height: 40px;
                line-height: 40px;
                border-bottom: 2px solid rgba(7, 166, 255, 0.7);
                padding: 0 20px;
              "
            >
            <i
              style="
                display: inline-block;
                width: 8px;
                height: 8px;
                background: #16d6ff;
                border-radius: 40px;
              "
            ></i
            > ${name}<span style="margin-left: 10px; color: #fff; font-size: 16px"></span>
          </div>
          <div style="padding: 20px">
            ${ 
               items.map(name => {
                 return `
                    <p style="color: #fff; font-size: 12px">
                      <i
                        style="
                          display: inline-block;
                          width: 10px;
                          height: 10px;
                          background: #16d6ff;
                          border-radius: 40px;
                          margin: 0 8px;
                        "
                      ></i
                      >${name}<span style="color: #f48225; margin: 0 6px"></span>
                    </p>
                 `
               }).join('|').replace('|', '')
            }
          </div>
        </div>
      `
    },
    chinaConfigure() {
      var _this = this;
      let myChart = this.$echarts.init(this.$refs.platform); //这里是为了获得容器所在位置
      var max = 480, min = 9; // todo
      var maxSize4Pin = 100, minSize4Pin = 20;
      window.onresize = myChart.resize;
      myChart.setOption({
        // 进行相关配置
        title: {
          text: "军工产业重点城市",
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
          formatter: (params, ticket, callback) => {
            // if (ticket.indexOf('散点') != -1) {
            const { data = {} } = params
            const { items, name } = data
            if (items && items.length) {
              return this.tooltipStr(data)
            } 
            return null;
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
          map: 'china',
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
            data:this.cityList,
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
            data: this.cityList,
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