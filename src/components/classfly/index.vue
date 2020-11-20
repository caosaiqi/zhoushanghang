

<template>

    <div class="blocks">
      <div class="top">商品分类管理</div>

      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>

</template>



<script>
export default {
  props: {

      datas: String,

      

    
  },
  created() {
    this.$api.Classify.sclas().then(res => {
      console.log(res.data,123);
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].grade == 1) {
          var obj = {
            label: "",
            children: [],
            classId: "",
            index: "",
            grade: ""
          };
          obj.label = this.datas=='1'?res.data[i].className+"("+res.data[i].sortNum+")":res.data[i].className;
          obj.classId = res.data[i].classId;
          obj.grade = res.data[i].grade;
          obj.index = i;
          this.data.push(obj);
        }
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
    handleNodeClick(data) {
      // console.log(data, 123);
      

      if (data.grade == 1) {
        var classId = data.classId;
        this.firstClassifiedId = data.classId;
         this.$emit('childByValue', {id:this.firstClassifiedId,grade:data.grade})
         console.log(data)
        this.$api.Classify.lclas(classId).then(res => {
          // console.log(res,1231)
          for (var i = 0; i < res.data.length; i++) {
            var obj = {
              label: "",
              children: [],
              classId: "",
              index: "",
              grade: ""
            };
            obj.label = this.datas=='1'?res.data[i].className+"("+res.data[i].sortNum+")":res.data[i].className;
            obj.classId = res.data[i].classId;
            obj.grade = res.data[i].grade;
            obj.index = i;
            if (this.data[data.index].children.length < res.data.length) {
              this.data[data.index].children.push(obj);
            }
          }
        });
      }else{
        this.secondClassifiedId=data.classId
        this.$emit('childByValue', {id:this.secondClassifiedId,grade:data.grade})
      }
    }
  }
};
</script>

<style scoped>

.blocks {
  min-width: 10%;
  max-height: 643px;
  line-height: 20px;
  text-align: center;
  border: 1px solid rgba(229, 229, 229, 1);
}
.top {
  padding-left: 10px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: rgba(78, 170, 255, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: left;
  font-family: Roboto;
}
</style>