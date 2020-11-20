<template>
  <div class="fotter">
    <div class="Fcenter">
      <div
        style="
          display: flex;
          margin: 0 auto;
          width: 20%;
          justifyContent: center;
        "
      >
        <p>技术支持</p>
        <p class="right">合作平台</p>
      </div>
      <div class="imgbox">
        <a target="_blank" href="http://www.shu.edu.cn/"
          ><img src="@/assets/404_images/img/ShanghaiUniversity.png" alt=""
        /></a>
        <a target="_blank" href="https://www.nudt.edu.cn/"
          ><img src="@/assets/404_images/img/NUDT.png" alt=""
        /></a>
        <a target="_blank" href="http://www.weain.mil.cn/"
          ><img src="@/assets/404_images/img/quanjunwuqicaigouwang.png" alt=""
        /></a>
        <a target="_blank" href="https://www.plap.cn/"
          ><img src="@/assets/404_images/img/junduicaigouwang.png" alt=""
        /></a>
      </div>
      <div class="list">
        <!-- <ul>
              <li><a href="">上海大学</a></li>
              <li><a href="">国防科技大学</a></li>
              <li><a href="">全军武器装备采购信息网</a></li>
              <li><a href="">军队采购网</a></li>
          </ul> -->
        <ul>
          <li>
            <a
              target="_blank"
              href="https://qdefense.cn/index.php?do=home&action=service"
              >关于我们</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://qdefense.cn/index.php?do=home&action=aboutus"
              >法律声明</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://qdefense.cn/index.php?do=home&action=rencai"
              >客户服务</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://qdefense.cn/index.php?do=home&action=contact"
              >诚聘英才</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://qdefense.cn/index.php?do=home&action=rencai"
              >网站地图</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://qdefense.cn/index.php?do=home&action=contact"
              >RSS订阅</a
            >
          </li>
        </ul>
      </div>
      <div class="copyright">Powered by LiangziQianxun1.0.1 Copyright © 2016 -2020 www.liangziqianxun.cn. All rights reserved</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      name: "未登录",
    };
  },
  created() {
    // this.name = localStorage.getItem("name");
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.fotter {
  background-color: #b60002;
  // margin-top: 40px;
  color: #fff;
  text-align: center;
  font-size: 13px;
  padding-top: 20px;
  width: 100%;
}
.Fcenter {
  width: 1200px;
  min-height: 100px;
  margin: 0 auto;
}
.Fcenter p {
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  line-height: 60px;
}
.right {
  border-left: 1px solid rgba(187, 193, 199, 0.26);
  margin-left: 60px;
  padding-left: 60px;
}
.imgbox {
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(187, 193, 199, 0.26);
}
.imgbox a {
  display: block;
}
.imgbox img {
  width: 247px;
  margin-left: 30px;
}
.copyright{
    padding: 20px 0;
    color: #9B9B9B
}
// .header {
//   display: flex;
//   align-items: center;
//   margin: 0 auto;
//   width: 1200px;
//   height: 80px;
//   justify-content: space-between;
// }
// .bomm{
//   cursor:pointer
// }
// .center{
//   width: 100%;
//   height:80px;
//   background: #f0f0f0;
// }
.list {
  padding: 20px 0;
  border-bottom: 1px solid rgba(187, 193, 199, 0.26);
}
ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
li {
  list-style-type: none;
}
// li:hover{
//   color: #ffaa40
// }
</style>
