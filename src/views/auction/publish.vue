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
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="基本说明" name="1">
          <div>
            本模块用于采集并发布各类开源的、确实有效的军地科技协同创新需求，需求数据主要来源于军委总部机关、各军兵种、各战区、军队科研院所、11个军工集团、各省市融办等用户，涉及国防高端制造、先进材料、商业航天、无人系统、人工智能、智慧后勤等21个领域。所有需求信息发布前，均经过充分脱密、脱敏处理。目前已采集发布的开源需求信息有1800多条
          </div>
        </el-collapse-item>
      </el-collapse>

      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
        style="margin: 30px 0"
      >
        <el-tab-pane label="需求态势图" name="first"></el-tab-pane>
        <el-tab-pane label="需求列表" name="second"></el-tab-pane>
        <el-tab-pane label="需求发布" name="third"></el-tab-pane>
        <!-- <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane> -->
      </el-tabs>
      <div v-if="index == 0">
        <Pushecharts />
        <Rpushcharts />
      </div>
      <div v-if="index == 1">
        <Pushlist />
      </div>
      <div v-if="index == 2">
        <Push />
      </div>
    </div>
  </div>
</template>

<script>
import ElementUI from "element-ui";
import Pushecharts from "./pushlist/pushecharts";
import Rpushcharts from "./pushlist/pushechasrs";
import Pushlist from "./pushlist/list";
import Push from "./pushlist/push";
export default {
  components: {
    Pushecharts,
    Rpushcharts,
    Pushlist,
    Push,
  },
  data() {
    return {
      index: 0,
      activeName: "first",
      activeNames: ["1"],
    };
  },
  created() {
    // this.list();
  },
  methods: {
    handler(key) {
      this.index = key;
    },
    handleClick(tab, event) {
      console.log(tab.index);
      this.index = tab.index;
    },
    handleChange() {},
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
