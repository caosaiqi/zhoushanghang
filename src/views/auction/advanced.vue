<template>
 <div>
   <div style="paddingLeft:100px">
     <!-- <ul>
       <li :class="index==0?'red':''" @click="handler(0)">
         需求态势图
       </li>
       <li :class="index==1?'red':''" @click="handler(1)">
         需求列表
       </li>
       <li :class="index==2?'red':''" @click="handler(2)">
         需求发布
       </li>
     </ul> -->
<el-collapse v-model="activeNames">
        <el-collapse-item title="基本说明" name="1">
          <div>
            本模块主要用于采集并发布民间先进的、军民两用的前沿技术产品，先进前沿技术产品数据主要来源于国家科技主管部门、各省市相关部门、新型研发机构、行业协会、企业等。重点涉及智能制造、人工智能、5G通信、通用芯片、大数据、天基物联网、海洋科技、先进材料、新能源、智能可穿戴、生物科技安全等。所有先进前沿技术发布前，均经过充分脱密、脱敏处理。目前已采集发布的先进前沿技术有1500多条，军地协同科技创新项目倡议50多个
          </div>
        </el-collapse-item>
      </el-collapse>
  <el-tabs v-model="activeName" @tab-click="handleClick" style="margin:30px 0">
    <el-tab-pane label="综合态势图" name="first"></el-tab-pane>
    <el-tab-pane label="新技术产品展示" name="second"></el-tab-pane>
    <el-tab-pane label="产品发布" name="third"></el-tab-pane>
    <!-- <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane> -->
  </el-tabs>
    <div v-if="index==0">
      <Pushecharts :data ="pNameGroData" />
      <Rpushcharts :data="dNamenData" />
    </div>
     <div v-if="index==1">
       <Pushlist/>
     </div>
     <div v-if="index==2">
        <Push/>
     </div>
   </div>
  </div>
</template>
<script>
import ElementUI from "element-ui";
import Pushecharts from './echarts/pushecharts'
import Rpushcharts from './echarts/pushechasrs'
import Pushlist from './advac/list'
import Push from './advac/push'
export default {
  components: {
    Pushecharts,
    Rpushcharts,
    Pushlist,
    Push
  },
  data() {
    return {
       index:0,
       activeName: 'first',
       activeNames:['1'],
       pNameGroData: [],
       dNamenData: [],
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      const { data } = await this.featchTptByPNameGroData()
      const genData = this.genData(data, 'p_name', 'count(*)')
      this.pNameGroData = genData

      const { data: dName  } = await this.featchDnameData()
      const genDNameData = this.genData(dName, 'd_name', 'count(*)')
      this.dNamenData = genDNameData
    },
    featchTptByPNameGroData () {
      return this.$api.tptController.tptByPNameGroup()
    },
    featchDnameData () {
      return this.$api.tptController.tptByDNameGroup()
    },
    /*
    * params['data', 'key', 'value]
    * data: 数据源
    * key: 数据源中的name别名
    * value: 数据源中的value别名
    */
    genData (data, key, value) {
      return data.map(item => {
        return {
          name: item[key],
          value: item[value],
        }
      })
    },
   handler(key){
     this.index=key
   },
   handleClick(tab, event) {
        this.index=tab.index
      }
  }
};
</script>

<style lang="scss" scoped>

li{
  list-style: none;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  background: #cccccc;
  text-align: center;
  width: 192px;
  margin: 0 20px;
}
li:hover{
  cursor: pointer;
}
ul{
  display: flex;

}
.red{
  background: red;
  color: #fff;
}
.el-tabs__item.is-active{
  color: red !important;
}
</style>
