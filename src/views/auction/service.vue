<template>
  <div>
    <div style="paddingLeft: 100px">
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
           本模块主要基于前述模块数据，并运用军事运筹、知识图谱等先进技术，对军地协同创新各类用户进行数字赋能服务，生成相关分析报告、视图产品、案例与解决方案，包括面向军方用户“慧眼行动”、“火花行动”、“创新挑战赛”的先进技术遴选服务、面向地方政府与产业园区的产业生态群案例服务、面向“民参军”企业的创新赋能服务、面向投资机构的项目评估服务等，促进军工科技项目全价值链创新。目前，已形成各类分析报告、案例、视图产品与解决方案300多个，所有数据上线前均经过脱密脱敏处理。
          </div>
        </el-collapse-item>
      </el-collapse>
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
        style="margin: 30px 0"
      >
        <el-tab-pane label="综合态势图" name="first"></el-tab-pane>
        <el-tab-pane label="服务展示" name="second"></el-tab-pane>
        <!-- <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane> -->
      </el-tabs>
      <div v-if="index == 0">
        <Pushecharts :data="descFindData"/>
      </div>
      <div v-if="index == 1">
        <div style="display: flex; hidden:400px;">
          <el-button
            type="primary"
            plain
            v-for="(item, index) in arr"
            :key="index"
            @click="handlerlok(index)"
            >{{ item }}</el-button
          >
        </div>
        <div style="marginTop:30px">
        <Xjin v-if="numkey == 0"/>
        <Cheng v-if="numkey == 1" />
        <Gongy v-if="numkey == 2" />
        <Qujiaz v-if="numkey == 3" />
        <Jiejue v-if="numkey == 4" />
        <Staiq v-if="numkey == 5" />
        <Kuqu v-if="numkey == 6" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ElementUI from "element-ui";
import Pushecharts from "./service/mapecharts";
import Xjin from "./service/xianjin";
import Cheng from "./service/chengguo";
import Gongy from "./service/gongying";
import Qujiaz from "./service/quanjizhi";
import Jiejue from "./service/jiejuefang";
import Staiq from "./service/shengtai";
import Kuqu from "./service/kuaqu";
export default {
  components: {
    Pushecharts,
    Xjin,
    Cheng,
    Gongy,
    Qujiaz,
    Jiejue,
    Staiq,
    Kuqu,
  },
  data() {
    return {
      index: 0,
      activeName: "first",
      activeNames:['1'],
      descFindData:[],
      taTeFindAllData:[],
      arr: [
        "先进技术评估服务",
        "成果快速转化服务",
        "供应链创新服务",
        "项目全价值链创新服务",
        "行业/领域解决方案服务",
        "产业链/生态群创新服务",
        "跨区域协同创新服务",
      ],
      numkey: 0,
      
    };
  },
  created() {
    this.descFind();
  },
  methods: {
  async descFind () {
    const { data } = await this.featchTptBydescFindData()
    const genData = this.genData(data,'','')
    this.descFindData = genData
    },
    featchTptBydescFindData() {
      return this.$api.descController.descFind()
    }, 
    feattaTeFindAllData() {
      return this.$api.taTeControllertaTeFindAll()
    },
    genData(data) {
      return data
    },
    handler(key) {
      this.index = key;
    },
    handlerlok(key) {
      this.numkey = key;
    },
    handleClick(tab, event) {
      console.log(tab.index);
      this.index = tab.index;
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  background: #cccccc;
  text-align: center;
  width: 192px;
  margin: 0 20px;
}
li:hover {
  cursor: pointer;
}
ul {
  display: flex;
}
.red {
  background: red;
  color: #fff;
}
.el-tabs__item.is-active {
  color: red !important;
}
</style>
