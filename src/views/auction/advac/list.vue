<template>
  <div style="position: relative;width:98%;paddingBottom:50px;">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="marginTop:30px">
      <el-form-item label="技术名称">
        <el-input v-model="formInline.keyWord" placeholder="请输入成果名称" clearable  size="small"></el-input>
      </el-form-item>
      <el-form-item label="技术来源">
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
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit"   size="small">查询</el-button>
      </el-form-item>
    </el-form>
      <el-table
        :data="tableData"
        :header-cell-style="{background:'#F3F4F7',color:'rgba(16, 16, 16, 1)',textAlign:'center'}"
      >
        <el-table-column prop="technologyName" label="技术名称" align="center"></el-table-column>
        <el-table-column prop="tabDemandType.name" label="技术来源"  align="center">
        </el-table-column>
        <el-table-column prop="apply" label="应用领域与优势简介"  align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="trait" label="创新特点与优势简介"  align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="orderCount" label="成果展示（图片或视频）"  align="center">
          <template slot-scope="scope">
            <img src="@/assets/404_images/img/212.png" alt=""/>
          </template>
        </el-table-column>
        <el-table-column prop="domainId" label="所属领域"  align="center">
        </el-table-column>
        <el-table-column prop="maturity" label="技术成熟度自评"  align="center">
        </el-table-column>
        <el-table-column prop="publishUId" label="发布方"  align="center">
        </el-table-column>
        <el-table-column prop="proposal" label="创新项目倡议"  align="center">
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageTotal"
        ></el-pagination>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'AdvacList',
    data() {
      return {
        formInline:{},
        tableData: [],
        pageTotal: 0,
      }
    },
    created () {
      this.fetcListData()
    },
    methods: {
      fetcListData () {
        this.$api.tptController.list().then(({ data }) => {
        this.tableData = data.list
        this.pageTotal = data.total
          
        })
      },
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
      },
      onSubmit () {

      },
    }
  }
</script>
<style lang="scss" scoped>
.block {
  position: absolute;
  right: 30px;
  bottom: 0;
}
img{
  width: auto;
  height: 80px;
}
</style>