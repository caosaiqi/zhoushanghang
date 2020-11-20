<template>
  <div style="position: relative;width:98%;paddingBottom:50px;">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="marginTop:30px">
      <el-form-item label="名称">
        <el-input v-model="formInline.keyWord" placeholder="请输入成果名称" clearable  size="small"></el-input>
      </el-form-item>
      <el-form-item label="类型">
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
      :header-cell-style="{background:'#F3F4F7',color:'rgba(16, 16, 16, 1)',textAlign:'center'}">
      <el-table-column prop="achievementName" label="成果名称" align="center"></el-table-column>
      <el-table-column prop="resultsType.rtName" label="成果类型"  align="center">
      </el-table-column>
      <el-table-column prop="synopsis" label="成果简介"  align="center" :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column prop="contentImg" label="成果展示（图片或视频）"  align="center">
        <template slot-scope>
          <img src="@/assets/404_images/img/212.png" alt=""/>
        </template>
      </el-table-column>
      <el-table-column prop="tabDomain.name" label="所属领域"  align="center">
      </el-table-column>
      <el-table-column prop="tabPublisher.name" label="发布方"  align="center">
      </el-table-column>
      <el-table-column prop="analysis" label="深度分析"  align="center">
      </el-table-column>
      <el-table-column label="操作" align="center" width="300">
        <template slot-scope>
          <el-button size="mini" type="primary" @click="handleEdit()">留言</el-button>
        </template>
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
    <el-dialog
      title="留言"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-input v-model="formInline.keyWord" placeholder="请输入留言" clearable  size="small" :rows="5" type="textarea"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialogVisible:false,
        formInline:{
          achievementName: '',
          domainId: '',
          resultsTypeId: '',
        },
        tableData: [],
        pageTotal: 0,
      }
    },
    created () {
      this.list()
    },
    methods: {
      list(){
        const sendata = {
          achievementName: this.formInline.achievementName?this.formInline.achievementName:null,
          domainId: this.formInline.domainId?this.formInline.domainId:null,
          resultsTypeId: this.formInline.resultsTypeId?this.formInline.resultsTypeId:null,
          limit: this.limit,
          page: this.page
        }
        this.$api.technologyAchievement.list(sendata).then(({ data }) => {
          this.tableData = data.list
          this.pageTotal = data.total
        })
      },
      handleEdit (index, row) {
        console.log(index, row);
      },
      handleEdit (){
        this.dialogVisible = true
      },
      handleDelete (index, row) {
        console.log(index, row)
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      },
      onSubmit () {
        console.log('onSubmit')
      },
      handleClose () {
        console.log('handleClose')
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