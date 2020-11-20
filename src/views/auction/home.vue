<template>
  <div style="background:#F5F5F5;height:100%">
    <div class="banner">
     <div class="left">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">

        <img src="../../assets/404_images/img/chengguoshequ_head.png" alt="">
      </el-carousel-item>
  </el-carousel>
     </div>
     <div class="right" >
       <ul class="label" style="display:flex; justify-content:flex-start; cursor:pointer;"> 
         <li>开源需求</li>
         <li>开源发布</li>
       </ul>
       <div class="right-label ">
         <div class="right-top">
           <ul>
             <li><a href="#">来源需求发布来源需求发布来源需求发布来源需求发布</a> <span>2020:18:22</span></li>
             <li><a href="#">来源需求发布来源需求发布来源需求发布来源需求发布</a> <span>2020:18:22</span></li>
             <li><a href="#">来源需求发布来源需求发布来源需求发布来源需求发布</a> <span>2020:18:22</span></li>
             <li><a href="#">来源需求发布来源需求发布来源需求发布来源需求发布</a> <span>2020:18:22</span></li>
             <li><a href="#">来源需求发布来源需求发布来源需求发布来源需求发布</a> <span>2020:18:22</span></li>
             <li><a href="#">来源需求发布来源需求发布来源需求发布来源需求发布</a> <span>2020:18:22</span></li>
           </ul>
         </div>
         <div class="more"><a href="#">更多>>></a></div>
       </div>
     </div>
    </div>
    <div class="list">
      <ul>
        <li @mouseover="handler(1)" class="hove">开源需求发布</li>
        <li @mouseover="handler(2)" class="hove">军工科技成果</li>
        <li @mouseover="handler(3)" class="hove">先进前沿技术</li>
        <li @mouseover="handler(4)" class="hove">新兴军工产业</li>
        <li @mouseover="handler(5)" class="hove">创新资源要素</li>
        <li @mouseover="handler(6)" class="hove">数字赋能服务</li>
      </ul>
      <div v-if="index==1">
        <a href="#">
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
        </a>
      </div>
      <div v-if="index==2">  
        <a href="#">
         <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          </a>
      </div>
      <div v-if="index==3">
        <a href="#" >
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
       </a>
      </div>
      <div v-if="index==4">
        <a href="#">
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
        </a>
      </div>
      <div v-if="index==5">
        <a href="#">
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
        </a>
      </div>
      <div v-if="index==6">
        <a href="#">
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
          <span>DKGJ矢量接收阵设备（含对DKGJ软件）项目废标公告</span>
 
        </a>
      </div>
    </div>
      <div class="block">
    <el-carousel height="150px" width="100%">
      <el-carousel-item v-for="item in 4" :key="item">
       <ul>
         <li>
           <img src="../../assets/404_images/img/junduicaigouwang.png" alt="">
           <img src="../../assets/404_images/img/NUDT.png" alt="" class="centre">
           <img src="../../assets/404_images/img/quanjunwuqicaigouwang.png" alt="">
         </li>
       </ul>
      </el-carousel-item>
    </el-carousel>
  </div>
    <ul class="tojB">
      <li class="Toj">
          <div>
            <p class="title">统计发布总量</p>
            <p><span class="num">237</span> <span>条</span></p>
          </div>
          <img src="@/assets/404_images/img/chart3.png" alt="">
      </li>
      <li class="Toj">
          <div>
            <p class="title">统计用户总量</p>
            <p><span class="num">20</span> <span>人</span></p>
          </div>
          <img src="@/assets/404_images/img/chart2.png" alt="">
      </li>
      <li class="Toj">
          <div>
            <p class="title">统计访问总量</p>
            <p><span class="num">867</span> <span>次</span></p>
          </div>
          <img src="@/assets/404_images/img/chart4.png" alt="">
      </li>
      <li class="Toj">
          <div>
            <p class="title">统计产品技术总量</p>
            <p><span class="num">468</span> <span>个</span></p>
          </div>
          <img src="@/assets/404_images/img/chart1.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      index: 1,
      url:'@/assets/404_images/img/pipeline1.jpg'
      
    };
  },
  created() {
    // this.name = localStorage.getItem("name");
  },

  methods: {
    handler(key){
      this.index=key
    }
  },
};
   
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  // 
   .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.banner{
  width: 100%;
  height: 500px;
  background: url("../../assets/404_images/img/home_welcome.jpg");
   background-size:cover;
  display:flex;
  justify-content:center;
}
.left {
  width: 590px;
  height: 360px;
  margin:auto 20px ;
}
.right-label {
  position: relative;
}
.more {
  color: #d3dce6;
  position: absolute;
  right: 80px;
  top: 240px;
}
.left img {
  width: 100%;
  height: 100%;
}
.right {
  width: 610px;
  height: 360px;
  margin: auto  70px;
}
.label {
  list-style-type:none
}
.label li {
  width: 100px;
  height: 30px;
  margin:10px ;
  background-color: rgb(14, 192, 139);
  font-size: 18px;
  border-radius:10%;
  line-height: 30px;
  text-align: center;
  border: 1px solid #000;
}
.label :hover {
  background-color: red;
}
.right-top ul li {
  height: 40px;
  line-height: 30px;
  color: #ffff;
  font-size: 17px;
}
.right-top ul span {
  margin-left: 40px;
}

.list{
  width: 1200px;
  height: auto;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
}
.hove{
  list-style: none;
      color: #737373;
    text-decoration: none;
    font-family: Source Han Sans CN;
    font-weight: bold;
        width: 200px;
    height: 70px;
    padding-left:20px;
    background: #f8f8f8;
    border: 1px solid #e5e5e5;
    line-height: 70px;
    font-size: 18px;
}
.hove:hover{
  background-color: #b60002;
    color: #FFFFFF;
     cursor:pointer
}
.list div{
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  transition: all 3s;
  }
.list div a span{
  display: block;
  margin-left: 20px;
  margin-top: 30px;
}
.list div a :hover {
 color: #b60002;
    
    
}
.Toj{
  display: flex;
  border-right: 1px solid rgba(170,170,170,0.4)}
.Toj img{
  width: 70px;
  height: 70px;
  margin: 0 50px;
}
.tojB{
  width: 1200px;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
}
.num{
      padding-right: 20px;
    min-width: 100px;
    font-size: 30px;
    font-weight: bold;
    color: #b60002;

}
.title{
  margin-bottom: 10px;
      font-size: 14px;
    line-height: 26px;
    color: #666;
}
.block {
  width: 63%;
  height: 150px;
  margin:0 auto;
}
.block ul li {
  display: flex;
  width: 255px;
  height: 100%;
  

}
.block ul li .centre {
  margin-left: 43px;
  margin-right: 43px;
}
.block ul li img{
  height: 100%;
}
</style>
