<template>
  <div style="position: relative;width:98%;paddingBottom:50px;">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="marginTop:30px">
      <el-form-item label="名称">
        <el-input v-model="formInline.demandName" placeholder="请输入需求名称" clearable  size="small"></el-input>
      </el-form-item>
      <el-form-item label="需求类型">
        <el-select v-model="formInline.demandType " clearable  size="small">
          <el-option :label="item.name" :value="item.id" v-for="(item,index) in type" :key="index"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属领域">
        <el-select v-model="formInline.domainId " clearable  size="small">
         <el-option :label="item.name" :value="item.id" v-for="(item,index) in demon" :key="index"></el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="交易付款时间" v-if="lotsType!==1">
        <el-date-picker
          v-model="formInline.payTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit"   size="small">查询</el-button>
      </el-form-item>
    </el-form>
      <el-table
        :data="tableData"
        :header-cell-style="{background:'#F3F4F7',color:'rgba(16, 16, 16, 1)',textAlign:'center'}"
      >
        <el-table-column prop="demandName" label="需求名称" align="center"></el-table-column>
        <el-table-column prop="typeName" label="需求类型"  align="center">
        </el-table-column>
        <el-table-column prop="description" label="要求说明"  align="center"></el-table-column>
        <el-table-column prop="expenditure" label="经费规模"  align="center">
         
        </el-table-column>
        <el-table-column prop="domainName" label="所属领域"  align="center"></el-table-column>
        <el-table-column prop="publisherName" label="发布方"  align="center">
        </el-table-column>
        <el-table-column prop="successPayCount" label="深度分析"  align="center">
            
        </el-table-column>
        <!-- <el-table-column prop="fans" label="粉丝数"  align="center"></el-table-column> -->
        <!--  -->
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="num"
        ></el-pagination>
      </div>
    </div>
  
</template>

<script>
  export default {
    data() {
      return {
        formInline:{
          demandName:'',
          demandType:'',
          domainId:''

        },
        currentPage1:1,
        type:[],
        demon:[],
        tableData: [
        ],
        limit:10,
        page:1,
        num:0
      }
    },
    created(){
      this.list()
      this.$api.Publish.type().then((res) => {
          
          this.type=res.data
          console.log(res.data)
        })

        this.$api.Publish.tabDomain().then((res) => {
          
          this.demon=res.data
        })
    },

    methods: {
      onSubmit(){
        this.page=1
        this.currentPage1=1
        this.list()
      },
      list(){
        var  sendata={
          demandName:this.formInline.demandName?this.formInline.demandName:null,
          demandType:this.formInline.demandType?this.formInline.demandType:null,
          domainId:this.formInline.domainId?this.formInline.domainId:null,
          limit:this.limit,
          page:this.page
        }
        this.$api.Publish.publist(sendata).then((res) => {
          this.tableData=res.data.demandList
          this.num=res.data.totalNumber
      
        })
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange(val) {
        this.limit=val
        this.list()
      },
      handleCurrentChange(val) {
        this.page=val
        this.list()
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