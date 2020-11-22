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
  <el-tabs v-model="activeName" @tab-click="handleClick" style="margin:30px 0">
    <el-tab-pane label="新兴优质企业群" name="first"></el-tab-pane>
    <el-tab-pane label="产业创新项目推荐" name="second1"></el-tab-pane>
    <el-tab-pane label="深度研究" name="second2"></el-tab-pane>
    <el-tab-pane label="项目发布" name="second3"></el-tab-pane>
    <!-- <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane> -->
  </el-tabs>
    <div v-if="index==0">
       <imglist/>
    </div>
     <div v-if="index==1">
       <maplist :data="getListData"/>
     </div>
     <div v-if="index==2">
       <study/>
     </div>
     <div v-if="index==3">
       <publish/>
     </div>
   </div>
  </div>
</template>
<script>
import ElementUI from "element-ui";
import study from './emerging/study'
import maplist from './emerging/emlist'
import imglist from './emerging/emelist'
import publish from './emerging/publish'
import { log } from 'easemob-emedia';
export default {
  components: {
    study,
    maplist,
    imglist,
    publish
  },
  data() {
    return {
      index:0,
       activeName: 'first',
      activeNames: ["1"],
      getEnterpriseListData:[],
      getListData:[],
    }
  },
  created() {
  //   this.listData()
  },
  methods: {
    async listData () {
          const {data:getEnterpriseList } = await this.getEnterpriseListData() 
          const gengetEnterpriseList =  genData(getEnterpriseList,'')
          this.getEnterpriseListData = gengetEnterpriseList
     },

   
   handler(key){
     this.index=key
   },
   handleClick(tab, event) {
        console.log(tab.index);
        this.index=tab.index
      },

  },
  genData(data) {
    return data
  },

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
