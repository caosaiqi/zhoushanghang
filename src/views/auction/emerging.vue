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
           本模块主要用于采集并发布新兴军工产业链信息、产业项目数据与虚拟军工产业园等信息，以数据赋能新兴军工产业发展，从而培育新型军工数字经济。数据主要来源于产业研究智库、相关产业园区、行业协会、企业等。涉及国防高端制造、先进材料、商业航天、无人系统、人工智能、智慧后勤等21个领域。所有上线数据均经过脱密脱敏处理。目前已采集上线的与新兴军工产业链相关的上下游企业有3000多家，产业创新推荐项目100多个，虚拟军工产业园N个。
          </div>
        </el-collapse-item>
      </el-collapse>
  <el-tabs v-model="activeName" @tab-click="handleClick" style="margin:30px 0">
    <el-tab-pane label="综合态势图" name="first"></el-tab-pane>
    <el-tab-pane label="新兴军工产业展示" name="second"></el-tab-pane>
    <!-- <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane> -->
  </el-tabs>
    <div v-if="index==0">
     <Maplist :data="getDomainAllData"/>
     <Mapechatrs/>
    </div>
     <div v-if="index==1" :data="getIndustryImgListData">
       <div>
       <img src="@/assets/404_images/img/1.jpg" alt="" @click="handlergo()"/>
       <img src="@/assets/404_images/img/2.jpg" alt="" @click="handlergo()"/>
       <img src="@/assets/404_images/img/3.jpg" alt="" @click="handlergo()"/>
       <img src="@/assets/404_images/img/4.jpg" alt="" @click="handlergo()"/>
       <img src="@/assets/404_images/img/5.jpg" alt="" @click="handlergo()"/>
       <img src="@/assets/404_images/img/6.jpg" alt="" @click="handlergo()"/>
       <img src="@/assets/404_images/img/7.jpg" alt="" @click="handlergo()"/>
       <img src="@/assets/404_images/img/8.jpg" alt="" @click="handlergo()"/>
       <img src="@/assets/404_images/img/9.jpg" alt="" @click="handlergo()"/>
       <img src="@/assets/404_images/img/10.jpg" alt="" @click="handlergo()"/>
       <img src="@/assets/404_images/img/11.jpg" alt="" @click="handlergo()"/>
       <img src="@/assets/404_images/img/12.jpg" alt="" @click="handlergo()"/>
  </div>
     </div>
   </div>
  </div>
</template>

<script>
import ElementUI from "element-ui";
import Mapechatrs from './echarts/mapecharts'
import Maplist from './echarts/maplistecharts'
import imglist from './emerging/emelist'
export default {
  components: {
    Mapechatrs,
    Maplist,
    imglist
  },
  data() {
    return {
      index:0,
      activeName: 'first',
      activeNames: ["1"],
      getDomainAllData: [],
      getCityAllData: [],
      getIndustryImgListData:[],
    }
  },
  created() {
    this.getDomain()
  },
  methods: {
    async getDomain () {
      // const { data: getCityAll } = await this.featchTptBygetCityAllData()
      // const gengetCityAllData = this.genData(getCityAll,'')
      // this.getCityAllData = gengetCityAllData

      // const { data:getIndustryImgListData } = await this.featchTptBygetIndustryImgListData()
      // const gengetIndustryImgListData = this. gengetIndustryImgListData()
      // this.getIndustryImgListData = gengetIndustryImgListData
    },
    
    featchTptBygetCityAllData () {
      return this.$api.tabNewIndustry.getCityAll()
    },
    featchTptBygetIndustryImgListData() 
    {
      return this.$api.tabNewIndustry.getIndustryImgList()
    },
    genData (data) {
      return data
    },
   handler(key){
     this.index=key
   },
    

   handlergo(){
      this.$router.push({name:'exhibition'})
   },

   handleClick(tab, event) {
        console.log(tab.index);
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
img{
    float: left;
    margin: 50px 20px; 
    width: 300px;
    height: 300px;   
    transition: all 0.6s;
            cursor:pointer;
}

         img:hover{
            transform:scale(1.4);
        }
</style>
