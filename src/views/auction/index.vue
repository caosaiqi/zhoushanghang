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
           本模块主要用于采集并发布各类开源的、可用于转化的军工科技成果，军工科技成果数据主要来源于军队相关项目管理部门、军队科研院所、国家相关部门、中科院、军工集团科研院所、相关高校、军工行业协会、军工专利机构、相关企业等。涉及国防高端制造、先进材料、商业航天、无人系统、人工智能、智慧后勤等21个领域。所有军工科技成果信息发布前，均经过充分脱密、脱敏处理。目前已采集发布的相关军工科技成果信息7000多条。
          </div>
        </el-collapse-item>
      </el-collapse>
  <el-tabs v-model="activeName" @tab-click="handleClick" style="margin:30px 0">
    <el-tab-pane label="综合态势图" name="first"></el-tab-pane>
    <el-tab-pane label="成果发布" name="third"></el-tab-pane>
    <!-- <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane> -->
  </el-tabs>
    <div v-if="index==0">
      <div class="pnameGroupleft">
        <Pushecharts :data="pnameGroupData" />
      </div>
      <div class="domainright">
        <Rpushcharts :data="domainData"/>
      </div>
       <Pushlist/>
    </div>
    <!-- <div v-if="index==1">
      <Pushlist/>
    </div> -->
    <div v-if="index==1">
      <Push/>
    </div>
   </div>
  </div>
</template>
<script>
import ElementUI from "element-ui";
import Pushecharts from './echarts/pushecharts'
import Rpushcharts from './echarts/pushechasrs'
import Pushlist from './achievement/list'
import Push from './achievement/push'
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
      activeNames: ["1"],
      pnameGroupData: [],
      domainData: [],
    }
  },
  created () {
    this.fetcheDate()
  },
  methods: {
    async fetcheDate () {
      const { data } = await this.featchTptByPNameGroupData()
      const genData = this.genData(data,'p_name','count( 0 )')
      this.pnameGroupData = genData

      const { data: domain } = await this.featchTptBydomainData()
      const gendomainDate = this.genData(domain, 'd_name', 'count( 0 )')
      this.domainData = gendomainDate
    },
    featchTptByPNameGroupData () {
      return this.$api.technologyAchievement.findByPublisher()
    },
    featchTptBydomainData () {
      return this.$api.technologyAchievement.findByDomain()
    },
  
    genData (data,key,value) {
      return data.map(item => {
        return {
          name: item[key],
          value: item[value],
        }
      })
    },
    genParams (data,key,value) {
      return release
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
.pnameGroupleft{
  width: 50%;
  float: left;
  
}
.domainright{
  width: 50%;
  float: right;
}
</style>
