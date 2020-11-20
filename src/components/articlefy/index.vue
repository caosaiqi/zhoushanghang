

<template>
  <div class="custom-tree-container">
    <div class="block">
      <div class="top">商品分类管理</div>

      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
  </div>
</template>



<script>
export default {
  created() {
   this.$api.Operate.articlefy().then(res => {
      console.log(res.data);
      for (var i = 0; i < res.data.length; i++) {
    
          var obj = {
            label: "",
            sort:'',
            classId: "",
            categoryName: "",
            memo: ""
          };
          obj.label = res.data[i].categoryName;
          obj.classId = res.data[i].id;
          obj.categoryName = res.data[i].categoryName;
          obj.sort = res.data[i].sort;
           obj.memo = res.data[i].memo;
          this.data.push(obj);
        
      }
    });
  },
  data() {
    return {
      data: [],
      defaultProps: {
        children: "children",
        label: "label"
      },
      firstClassifiedId: "",
      secondClassifiedId: ""
    };
  },
  methods: {
    list(){
      this.data=[]
 this.$api.Operate.articlefy().then(res => {
      console.log(res.data);
      for (var i = 0; i < res.data.length; i++) {
    
          var obj = {
            label: "",
            sort:'',
            classId: "",
            categoryName: "",
            memo: ""
          };
          obj.label = res.data[i].categoryName;
          obj.classId = res.data[i].id;
          obj.categoryName = res.data[i].categoryName;
          obj.sort = res.data[i].sort;
           obj.memo = res.data[i].memo;
          this.data.push(obj);
        
      }
    });
    },
    handleNodeClick(data) {
      console.log(data)
      this.$emit('childByValue', {id:data.classId,list:data})
    }
  }
};
</script>

<style scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.block {
  width: 210px;
  min-height: 643px;
  line-height: 20px;
  text-align: center;
  border: 1px solid rgba(229, 229, 229, 1);
}
.top {
  padding-left: 10px;
  width: 210px;
  height: 40px;
  line-height: 40px;
  background-color: rgba(78, 170, 255, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: left;
  font-family: Roboto;
}
</style>