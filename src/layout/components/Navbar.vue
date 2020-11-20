<template>
  <div class="navbar">
    <div class="header">
      <div style="color: #fff; fontSize: 26px">
        欢迎您访问军地协同创新与成果转化平台
      </div>
      <div style="display: flex; alignItems: center;" class="bomm">
        <span class="el-icon-user" style="fontSize:30px; color: #fff"></span>
        <p style="color:#FFF;marginLeft:10px" @click="handleLoginClick">{{ name }}</p>
      </div>
    </div>
    <div class="center">
      
    <ul>
          <li><router-link :to="{name:'home'}">首页</router-link></li>
      <li><router-link :to="{name:'publish'}">开源需求发布</router-link></li>
       <li><router-link :to="{name:'achievement'}">军工科技成果</router-link></li>
        <li><router-link :to="{name:'advanced'}">先进前沿技术</router-link></li>
         <li><router-link :to="{name:'emerging'}">新兴军工产业</router-link></li>
          <li><router-link :to="{name:'innovate'}">创新资源要素</router-link></li>
           <li><router-link :to="{name:'service'}">数字赋能服务</router-link></li>
    </ul>
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
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
  },
  methods: {
    handleLoginClick () {
      this.$router.push({ path: '/login' })
    },
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    handleremove() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
*{
  margin: 0;padding: 0;
}
.navbar {
  width: 100%;

  background: #b60002;
}
.header {
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 1200px;
  height: 80px;
  justify-content: space-between;
}
.bomm{
  cursor:pointer
}
.center{
  width: 100%;
  height:80px;
  background: #f0f0f0;
}
.center ul{
  display: flex;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
}
li{
  list-style-type:none;
  padding: 0 15px;
  font-size: 20px;
   cursor:pointer
}
li:hover{
  color: #ffaa40
}
.router-link-active{
   color: #ffaa40
}
</style>
