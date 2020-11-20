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
        <el-table-column prop="shopName" label="行业解决方案" align="center"></el-table-column>
        <el-table-column prop="amount" label="领域"  align="center">
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
          shopName: '智慧营区解决方案',
          amount: '智慧后勤',
            successPayCount:'附研究报告',
        },
        {
          shopName: '智能靶场解决方案',
          amount: '智慧靶场与仿真',
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