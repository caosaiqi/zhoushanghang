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
           本模块主要用于采集发布军地协同创新的若干重要的资源要素，包括新型研发机构、项目通道资源、重点实验室、测试平台与试验设施、高端人才、科技创新政策等，数据主要来源于相关政府网站、专业研究机构等。目前，本模块已采集军地协同创新资源要素数据近2000条
          </div>
        </el-collapse-item>
      </el-collapse>
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
        style="margin: 30px 0"
      >
        <el-tab-pane label="综合态势图" name="first"></el-tab-pane>
        <el-tab-pane label="要素展示" name="second"></el-tab-pane>
        <el-tab-pane label="要素发布" name="third"></el-tab-pane>
        <!-- <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane> -->
      </el-tabs>
      <div v-if="index == 0">
        <Pushecharts :data="findAllByAllElementData"/>
      </div>
      <div v-if="index == 1">
        <div style="display: flex; justify-content: space-around; width: 80%">
          <el-button
            type="primary"
            plain
            v-for="(item, index) in arr"
            :key="index"
            @click="handlerlok(index)"
            >{{ item }}</el-button
          >
      <div v-if="index == 2">
      </div>
        </div>
        <div style="marginTop:30px">
        <Xjin v-if="numkey == 0" />
        <Cheng v-if="numkey == 1" />
        <Gongy v-if="numkey == 2" />
        <Qujiaz v-if="numkey == 3" />
        <Jiejue v-if="numkey == 4" />
        <Staiq v-if="numkey == 5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ElementUI from "element-ui";
import Pushecharts from "./innovate/mapecharts";
import Xjin from "./innovate/xianjin";
import Cheng from "./innovate/chengguo";
import Gongy from "./innovate/gongying";
import Qujiaz from "./innovate/quanjizhi";
import Jiejue from "./innovate/jiejuefang";
import Staiq from "./innovate/shengtai";
import Axios from 'axios';
import Publish from './publish.vue';
import Idon from './achievement/idon.vue';
export default {
  components: {
    Pushecharts,
    Xjin,
    Cheng,
    Gongy,
    Qujiaz,
    Jiejue,
    Staiq,
    Publish,
  },
  data() {
    return {
      index: 0,
      activeName: "first",
      activeNames:['1'],
      findAllByAllElementData:[],
      arr: [
        "科技创新政策",
        "项目通道资源",
        "新型研发机构",
        "实验室",
        "试验平台/测试机构",
        "人才/专家",
      ],
      numkey: 0,
    };
  },
  created() {
    this.lementData()
  },
  methods: {
    async lementData() {
      const  { data  } = await this.$api.element.findAllByAllElement()
    },
    featchTptByfindAllByAllElementData() {
       this.$api.element.findAllByAllElement()
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
