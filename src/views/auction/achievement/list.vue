<template>
  <div style="position: relative;width:98%;paddingBottom:50px;">
    <el-form :inline="true" :model="searchParams" class="demo-form-inline" style="marginTop:30px">
      <el-form-item label="名称">
        <el-input v-model="searchParams.achievementName" placeholder="请输入成果名称" clearable  size="small"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="searchParams.resultsTypeId " clearable  size="small">
          <el-option v-for="item in typeOptions" :label="item.rtName" :value="item.rtId" :key="item.rtId" />
        </el-select>
      </el-form-item>
      <el-form-item label="所属领域">
        <el-select v-model="searchParams.domainId " clearable  size="small">
          <el-option v-for="item in domainOptions" :label="item.domainName" :value="item.domainName" :key="item.domainName" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search"  size="small">查询</el-button>
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
        <template v-slot="{ row }">
          <el-button size="mini" type="primary" @click="handleClickLeaveMessage(row)">留言</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTotal"
      ></el-pagination>
    </div>
    <el-dialog
      title="留言"
      :visible.sync="dialogVisible"
      width="30%">
      <el-input v-model="leaveMessageDialog.messageContent" placeholder="请输入留言" clearable  size="small" :rows="5" type="textarea"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirm" :loading="leaveMessageLoading">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialogVisible:false,
        leaveMessageLoading: false,
        tableData: [],
        pageTotal: 0,
        pageSize: 10,
        pageNum: 1,
        typeOptions: [],
        domainOptions: [],
        searchParams: {},
        currentItem: {},
        leaveMessageDialog: {
          messageContent: '',
        },
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      async fetchData () {
        const { data: typeData } = await this.fetchTypeData()
        this.typeOptions = typeData
        const { data: listData } = await this.list()
        this.tableData = listData.list
        this.pageTotal = listData.total
        const { data: { domainList: domainData } } = await this.fetchDomainData()
        this.domainOptions = domainData
      },
      fetchTypeData () {
        return this.$api.technologyAchievement.findByresultsTypeId()
      },
      fetchDomainData () {
        return this.$api.Publish.getDomainAll()
      },
      async search () {
        const { data: listData } = await this.list(this.searchParams)
        this.tableData = listData.list
        this.pageTotal = listData.total
      },
      list(params){
        return this.$api.technologyAchievement.list(params)
      },
      handleSizeChange (val) {
        this.pageSize = val
        this.list({ pageSize: this.pageSize, ...searchParams })
      },
      handleCurrentChange (val) {
        this.pageNum = val
        this.list({ pageNum: this.pageNum, ...searchParams })
      },
      handleClickLeaveMessage (row){
        this.dialogVisible = true
        this.currentItem = row
      },
      async handleConfirm () {
        this.leaveMessageLoading = true
        try {
          const params = {
            messageContent: this.leaveMessageDialog.messageContent,
            needCommenterId: this.currentItem.achievementId,
            receiverId: this.currentItem.tabUser.uId,
            receiver: this.currentItem.tabUser.uName,
          }
          await this.$api.technologyAchievement.addMessage(params)
          this.leaveMessageLoading = false
          this.dialogVisible = false
          this.leaveMessageDialog.messageContent = ''
        } catch (error) {
          this.leaveMessageLoading = false
          throw error
        }
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