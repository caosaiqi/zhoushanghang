<template>
  <div style="position: relative;width:98%;paddingBottom:50px;">
    <el-form ref="form" :inline="true" :model="params" class="demo-form-inline" style="marginTop:30px">
      <el-form-item prop="demandName" label="技术名称">
        <el-input v-model="params.demandName" placeholder="请输入成果名称" clearable  size="small"></el-input>
      </el-form-item>
      <el-form-item prop="demandType" label="技术来源">
        <el-select v-model="params.demandType " clearable  size="small">
          <el-option v-for="(item, index) in demandList" :key="index" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="domainId" label="所属领域">
        <el-select v-model="params.domainId " clearable  size="small">
            <el-option v-for="(item, index) in domainList" :key="index" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="onSubmit">查询</el-button>
        <el-button size="small" @click="onClear">全部</el-button>
      </el-form-item>
    </el-form>
      <el-table
        :data="tableData"
        :header-cell-style="{background:'#F3F4F7',color:'rgba(16, 16, 16, 1)',textAlign:'center'}"
      >
        <el-table-column prop="projectName" label="产业创新项目" align="center"></el-table-column>
        <el-table-column prop="demandName" label="技术来源"  align="center">
        </el-table-column>
        <!-- <el-table-column prop="orderCount" label="应用领域与优势简介"  align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="get" label="创新特点与优势简介"  align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="orderCount" label="成果展示（图片或视频）"  align="center">
          <template slot-scope="scope">
              
                  <img src="@/assets/404_images/img/212.png" alt=""/>
             
            </template>
        </el-table-column> -->
        <el-table-column prop="domainName" label="所属领域"  align="center">
         
        </el-table-column>
        <!-- <el-table-column prop="code" label="技术成熟度自评"  align="center">
         
        </el-table-column> -->
        <el-table-column prop="publishUname" label="发布方"  align="center">
        </el-table-column>
         <el-table-column prop="content" label="研究报告"  align="center">
          <template slot-scope="scope">
            <el-tooltip placement="top" effect="light">
               <div style="max-width: 500px" slot="content">
                 {{scope.row.content}}
               </div>
               <div class="row-content">
                {{scope.row.content}}
              </div>
            </el-tooltip>
          </template>
        </el-table-column>

        <el-table-column :width="100" prop="successPayCount" label="操作"  align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleDowload(scope)">下载</el-button>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="fans" label="粉丝数"  align="center"></el-table-column> -->
        <!--  -->
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="params.page"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
    </div>
    </div>
  
</template>

<script>
  export default {
    data() {
      return {
        total: 0,
        params: {
          demandName: undefined,
          demandType: undefined,
          domainId: undefined,
          limit: 10,
          page: 1,
        },

        demandList:[],
        domainList: [],

        tableData: [],
      }
    },
    created () {
      this.getList()
      this.getPublishTyps()
      this.getTabDomains()
    },
    methods: {
      async getList () {
        const ret = await this.$api.element.getList(this.params)
        if (ret && ret.data && ret.data.industryRecommendList) {
          this.total = ret.data.totalNumber
          this.tableData = ret.data.industryRecommendList
        }
      },
      async getPublishTyps () {
        try {
          const ret = await this.$api.Publish.type()
          if (ret.data && ret.data.length > 0) {
            this.demandList = ret.data
          }
        } catch(err) {
          throw err
        }
      },
      
      async getTabDomains () {
        try {
          const ret = await this.$api.Publish.tabDomain()
          if (ret.data && ret.data && ret.data.length > 0) {
            this.domainList = ret.data
          }
        } catch (err) {
          throw err
        }
      },
      handleSizeChange (val) {
        this.limit = val
        this.getList()
      },
      handleCurrentChange (val) {
        this.page = val
        this.getList()
      },
      onSubmit () {
        this.page = 1
        this.getList()
      },
      onClear () {
        console.log(this.$refs.form)
        this.$refs.form.resetFields()
        this.page = 1
        this.getList()
      },
      handleDowload ({ row }) {
        window.open(row.materialUrl)
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
img{
  width: auto;
  height: 80px;
}
.row-content{
  overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
}
</style>