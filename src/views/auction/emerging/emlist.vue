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
        <el-button type="primary" size="small" @click="onSubmit"   >查询</el-button>
      </el-form-item>
    </el-form>
      <el-table
        :data="tableData"
        :header-cell-style="{background:'#F3F4F7',color:'rgba(16, 16, 16, 1)',textAlign:'center'}"
      >
        <el-table-column prop="shopName" label="产业创新项目" align="center"></el-table-column>
        <el-table-column prop="amount" label="技术来源"  align="center">
        </el-table-column>
        <!-- <el-table-column prop="orderCount" label="应用领域与优势简介"  align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="get" label="创新特点与优势简介"  align="center" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="orderCount" label="成果展示（图片或视频）"  align="center">
          <template slot-scope="scope">
              
                  <img src="@/assets/404_images/img/212.png" alt=""/>
             
            </template>
        </el-table-column> -->
        <el-table-column prop="payCount" label="所属领域"  align="center">
         
        </el-table-column>
        <!-- <el-table-column prop="code" label="技术成熟度自评"  align="center">
         
        </el-table-column> -->
        <el-table-column prop="successPayAmount" label="发布方"  align="center">
        </el-table-column>
        <el-table-column prop="successPayCount" label="操作"  align="center">
            
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
        getListData:[],
        onSubmit:'',
        formInline:{
        },
        tableData: [{
          shopName: '精密加工技术',
          amount: '自研',
          orderCount: '主要提供各种装备的结构设计与生产加工，包括模具、铸造、机加工和表面处理一站式解决方案',
            payAmount:'数千万',
            payCount:'商业航天',
            code:'9级',
            get:'质量控制能力强，在现有军工服务体系中，属于中上等供应商；可以一站式解决结构所有工艺流程，而不是能完成单个工序，这个对客户非常有吸引力；成本控制能力强，现有我们的成本基本上市客户现有供应商的70%即可完成高质量的加工交期，全工序完成，交期比一般供应商快20%以上',
            successPayAmount:'军事科研机构',
            successPayCount:'附研究报告',
        },
       {
          shopName: '精密加工技术',
          amount: '自研',
          orderCount: '主要提供各种装备的结构设计与生产加工，包括模具、铸造、机加工和表面处理一站式解决方案',
            payAmount:'数千万',
            payCount:'商业航天',
            code:'9级',
            get:'质量控制能力强，在现有军工服务体系中，属于中上等供应商；可以一站式解决结构所有工艺流程，而不是能完成单个工序，这个对客户非常有吸引力；成本控制能力强，现有我们的成本基本上市客户现有供应商的70%即可完成高质量的加工交期，全工序完成，交期比一般供应商快20%以上',
            successPayAmount:'军事科研机构',
            successPayCount:'附研究报告',
        },{
          shopName: '精密加工技术',
          amount: '自研',
          orderCount: '主要提供各种装备的结构设计与生产加工，包括模具、铸造、机加工和表面处理一站式解决方案',
            payAmount:'数千万',
            payCount:'商业航天',
            code:'9级',
            get:'质量控制能力强，在现有军工服务体系中，属于中上等供应商；可以一站式解决结构所有工艺流程，而不是能完成单个工序，这个对客户非常有吸引力；成本控制能力强，现有我们的成本基本上市客户现有供应商的70%即可完成高质量的加工交期，全工序完成，交期比一般供应商快20%以上',
            successPayAmount:'军事科研机构',
            successPayCount:'附研究报告',
        },{
          shopName: '精密加工技术',
          amount: '自研',
          orderCount: '主要提供各种装备的结构设计与生产加工，包括模具、铸造、机加工和表面处理一站式解决方案',
            payAmount:'数千万',
            payCount:'商业航天',
            code:'9级',
            get:'质量控制能力强，在现有军工服务体系中，属于中上等供应商；可以一站式解决结构所有工艺流程，而不是能完成单个工序，这个对客户非常有吸引力；成本控制能力强，现有我们的成本基本上市客户现有供应商的70%即可完成高质量的加工交期，全工序完成，交期比一般供应商快20%以上',
            successPayAmount:'军事科研机构',
            successPayCount:'附研究报告',
        },{
          shopName: '精密加工技术',
          amount: '自研',
          orderCount: '主要提供各种装备的结构设计与生产加工，包括模具、铸造、机加工和表面处理一站式解决方案',
            payAmount:'数千万',
            payCount:'商业航天',
            code:'9级',
            get:'质量控制能力强，在现有军工服务体系中，属于中上等供应商；可以一站式解决结构所有工艺流程，而不是能完成单个工序，这个对客户非常有吸引力；成本控制能力强，现有我们的成本基本上市客户现有供应商的70%即可完成高质量的加工交期，全工序完成，交期比一般供应商快20%以上',
            successPayAmount:'军事科研机构',
            successPayCount:'附研究报告',
        },{
          shopName: '精密加工技术',
          amount: '自研',
          orderCount: '主要提供各种装备的结构设计与生产加工，包括模具、铸造、机加工和表面处理一站式解决方案',
            payAmount:'数千万',
            payCount:'商业航天',
            code:'9级',
            get:'质量控制能力强，在现有军工服务体系中，属于中上等供应商；可以一站式解决结构所有工艺流程，而不是能完成单个工序，这个对客户非常有吸引力；成本控制能力强，现有我们的成本基本上市客户现有供应商的70%即可完成高质量的加工交期，全工序完成，交期比一般供应商快20%以上',
            successPayAmount:'军事科研机构',
            successPayCount:'附研究报告',
        },{
          shopName: '精密加工技术',
          amount: '自研',
          orderCount: '主要提供各种装备的结构设计与生产加工，包括模具、铸造、机加工和表面处理一站式解决方案',
            payAmount:'数千万',
            payCount:'商业航天',
            code:'9级',
            get:'质量控制能力强，在现有军工服务体系中，属于中上等供应商；可以一站式解决结构所有工艺流程，而不是能完成单个工序，这个对客户非常有吸引力；成本控制能力强，现有我们的成本基本上市客户现有供应商的70%即可完成高质量的加工交期，全工序完成，交期比一般供应商快20%以上',
            successPayAmount:'军事科研机构',
            successPayCount:'附研究报告',
        },{
          shopName: '精密加工技术',
          amount: '自研',
          orderCount: '主要提供各种装备的结构设计与生产加工，包括模具、铸造、机加工和表面处理一站式解决方案',
            payAmount:'数千万',
            payCount:'商业航天',
            code:'9级',
            get:'质量控制能力强，在现有军工服务体系中，属于中上等供应商；可以一站式解决结构所有工艺流程，而不是能完成单个工序，这个对客户非常有吸引力；成本控制能力强，现有我们的成本基本上市客户现有供应商的70%即可完成高质量的加工交期，全工序完成，交期比一般供应商快20%以上',
            successPayAmount:'军事科研机构',
            successPayCount:'附研究报告',
        },{
          shopName: '精密加工技术',
          amount: '自研',
          orderCount: '主要提供各种装备的结构设计与生产加工，包括模具、铸造、机加工和表面处理一站式解决方案',
            payAmount:'数千万',
            payCount:'商业航天',
            code:'9级',
            get:'质量控制能力强，在现有军工服务体系中，属于中上等供应商；可以一站式解决结构所有工艺流程，而不是能完成单个工序，这个对客户非常有吸引力；成本控制能力强，现有我们的成本基本上市客户现有供应商的70%即可完成高质量的加工交期，全工序完成，交期比一般供应商快20%以上',
            successPayAmount:'军事科研机构',
            successPayCount:'附研究报告',
        },{
          shopName: '精密加工技术',
          amount: '自研',
          orderCount: '主要提供各种装备的结构设计与生产加工，包括模具、铸造、机加工和表面处理一站式解决方案',
            payAmount:'数千万',
            payCount:'商业航天',
            code:'9级',
            get:'质量控制能力强，在现有军工服务体系中，属于中上等供应商；可以一站式解决结构所有工艺流程，而不是能完成单个工序，这个对客户非常有吸引力；成本控制能力强，现有我们的成本基本上市客户现有供应商的70%即可完成高质量的加工交期，全工序完成，交期比一般供应商快20%以上',
            successPayAmount:'军事科研机构',
            successPayCount:'附研究报告',
        },{
          shopName: '精密加工技术',
          amount: '自研',
          orderCount: '主要提供各种装备的结构设计与生产加工，包括模具、铸造、机加工和表面处理一站式解决方案',
            payAmount:'数千万',
            payCount:'商业航天',
            code:'9级',
            get:'质量控制能力强，在现有军工服务体系中，属于中上等供应商；可以一站式解决结构所有工艺流程，而不是能完成单个工序，这个对客户非常有吸引力；成本控制能力强，现有我们的成本基本上市客户现有供应商的70%即可完成高质量的加工交期，全工序完成，交期比一般供应商快20%以上',
            successPayAmount:'军事科研机构',
            successPayCount:'附研究报告',
        },{
          shopName: '精密加工技术',
          amount: '自研',
          orderCount: '主要提供各种装备的结构设计与生产加工，包括模具、铸造、机加工和表面处理一站式解决方案',
            payAmount:'数千万',
            payCount:'商业航天',
            code:'9级',
            get:'质量控制能力强，在现有军工服务体系中，属于中上等供应商；可以一站式解决结构所有工艺流程，而不是能完成单个工序，这个对客户非常有吸引力；成本控制能力强，现有我们的成本基本上市客户现有供应商的70%即可完成高质量的加工交期，全工序完成，交期比一般供应商快20%以上',
            successPayAmount:'军事科研机构',
            successPayCount:'附研究报告',
        },
        ]
      }
    },
    methods: {
      async getList () {
        const { data } = await this.feachgetListData()
        const gengetList = gendata(getList,'')
        this.getListData = gengetList
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
</style>