<template>
  <div ref="platform" style="width: 100%; height: 800px"></div>
</template>
<script>
import "echarts/map/js/china.js";
import mapData from '@/utils/mapData.js'

export default {
  name: "ECharts",
  components: {},
  data() {
    return {
      cityList: [],
      geoCoordMap: {}
    };
  },
  async created() {
     await this.getCityData()
    this.chinaConfigure();
  },
  methods: {
    async getCityData () {
      try {
        const ret = await this.$api.element.findAllByAllElement()
        if (ret.data && ret.data.length > 0) {
          this.cityList = ret.data.map(item => {
            const { cityName, count} = item
            const { latitude, longitude} = mapData[cityName]
            return {
              count,
              name: item.cityName,
              value: [parseFloat(longitude), parseFloat(latitude)]
            }
          })
        }
        console.log(this.cityList)
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
            data: this.cityList,
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