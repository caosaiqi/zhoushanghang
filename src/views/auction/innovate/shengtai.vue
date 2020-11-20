<template>
  <div style="position: relative;width:98%;paddingBottom:50px;">
    <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline" style="marginTop:30px">
      <el-form-item label="名称">
        <el-input v-model="formInline.keyWord" placeholder="请输入需求名称" clearable  size="small"></el-input>
      </el-form-item>
      <el-form-item label="需求类型">
        <el-select v-model="formInline.isFake " clearable  size="small">
          <el-option label="军事科研成果" value="1"></el-option>
          <el-option label="军工科研院所成果" value="0"></el-option>
          <el-option label="中科院与高校科研成果" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属领域">
        <el-select v-model="formInline.isFake " clearable  size="small">
          <el-option label="军事物联网" value="1"></el-option>
          <el-option label="先进无人系统" value="0"></el-option>
          <el-option label="中科院与高校科研成果" value="1"></el-option>
        </el-select>
      </el-form-item> -->
      <!-- <el-form-item label="交易付款时间" v-if="lotsType!==1">
        <el-date-picker
          v-model="formInline.payTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item> -->
      <!-- <el-form-item>
        <el-button type="primary" @click="onSubmit"   size="small">查询</el-button>
      </el-form-item>
    </el-form> -->
      <el-table
        :data="tableData"
        :header-cell-style="{background:'#F3F4F7',color:'rgba(16, 16, 16, 1)',textAlign:'center'}"
      >
        <el-table-column prop="shopName" label="园区/产业链/生态群服务" align="center"></el-table-column>
        <el-table-column prop="amount" label="区域"  align="center">
        </el-table-column>
        <el-table-column prop="successPayCount" label="深度研究"  align="center">
            
        </el-table-column>
        <!-- <el-table-column prop="fans" label="粉丝数"  align="center"></el-table-column> -->
        <!--  -->
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
    </div>
  
</template>

<script>
  export default {
    data() {
      return {
        formInline:{},
        tableData: [{
          shopName: '《深圳国家级军民融合创新示范区方案》',
          amount: '深圳',
            successPayCount:'附研究报告',
        },
        {
          shopName: '《**军民融合创新研究院方案》',
          amount: '深圳',
            successPayCount:'附研究报告',
        },
        {
          shopName: '《新疆巴州军民融合产业基地设计方案》',
          amount: '新疆',
            successPayCount:'附研究报告',
        },
        {
          shopName: '《天津河西军民融合产业创新总体方案》',
          amount: '天津',
            successPayCount:'附研究报告',
        },
        {
          shopName: '《长三角军地协同产业创新基地方案》',
          amount: '上海',
            successPayCount:'附研究报告',
        },
        {
          shopName: '《南京软件定义卫星产业生态群方案》',
          amount: '南京',
            successPayCount:'附研究报告',
        },
        {
          shopName: '《厦门军民融合大数据中心解决方案》',
          amount: '厦门',
            successPayCount:'附研究报告',
        },
        {
          shopName: '《军民两用前沿技术原创生态群解决方案》',
          amount: '北京',
            successPayCount:'附研究报告',
        },
        {
          shopName: '《上海“慧眼行动”创新试点方案》',
          amount: '上海',
            successPayCount:'附研究报告',
        },
        {
          shopName: '《无锡国家级军民融合创新示范区方案》',
          amount: '无锡',
            successPayCount:'附研究报告',
        }
        ]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
<style lang="scss" scoped>
.block {
  position: absolute;
  right: 30px;
  bottom: 0;
}
</style>