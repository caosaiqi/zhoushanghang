<template>
  <div class="Layout">
    <navbar />
    <div class="center">
      <el-container style="width:100%">
        <app-main />
      </el-container>
      <!-- </el-container> -->
    </div>
    <fotter/>
    <!--   
    -->
    <!-- <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
      
    </div>-->

    <!-- </div> -->
  </div>
</template>

<script>
import { Navbar,AppMain } from "./components";
import Fotter from './components/Fotter'
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  name: "Layout",
  components: {
    Navbar,
    Fotter,
    AppMain
  },
  mixins: [ResizeMixin],
  data(){
return{
  adminRolePermission:[]
}
  },
created(){
// this.adminRolePermission=JSON.parse( JSON.parse(localStorage.getItem('Token')).adminRolePermission)
// console.log(this.adminRolePermission,123)
},
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    }
  }
};
</script>

<style lang="scss" scoped>
.Layout {
  width: 100%;
  background-color: rgba(240, 240, 242, 1);
  // padding-top: 60px;
}
.center {
  width: 100%;
  min-height: 1120px;

} .el-menu-item{
  // width: 100% !important; 
  min-width: 12%;

}
.nav::-webkit-scrollbar {
  width: 0;
        
}
.nav{
 -ms-overflow-style:none;
        /*火狐下隐藏滚动条*/
        overflow:-moz-scrollbars-none;
}
a{
  display: inline-block;
  width: 90%;

}
// @import "~@/styles/mixin.scss";
// @import "~@/styles/variables.scss";

// .app-wrapper {
//   @include clearfix;
//   position: relative;
//   height: 100%;
//   width: 100%;
//   &.mobile.openSidebar{
//     position: fixed;
//     top: 0;
//   }
// }
// .drawer-bg {
//   background: #000;
//   opacity: 0.3;
//   width: 100%;
//   top: 0;
//   height: 100%;
//   position: absolute;
//   z-index: 999;
// }

// .fixed-header {
//   position: fixed;
//   top: 0;
//   right: 0;
//   z-index: 9;
//   width: calc(100% - #{$sideBarWidth});
//   transition: width 0.28s;
// }

// .hideSidebar .fixed-header {
//   width: calc(100% - 54px)
// }

// .mobile .fixed-header {
//   width: 100%;
// }
// .router-link-active{
//   color:#89BBF4;
// }
</style>
