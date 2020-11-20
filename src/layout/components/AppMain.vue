<template>
  <section class="app-main">
    <!-- <div style="margin:20px 0 0 10px">
      <el-tag
        v-for="(tag,index) in tags"
        :key="index"
        closable
        @close="handleClose(tag)"
        style="marginRight:10px;marginTop:10px;position: relative;height:30"
      >
        <router-link :to="tag.path">{{tag.meta.title}}</router-link>
      </el-tag>
    </div>-->

    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.bool"></router-view>
      </keep-alive>
    </transition>
    <transition name="fade-transform" mode="out-in">
      <router-view v-if="!$route.meta.bool"></router-view>
    </transition>
  </section>
</template>

<script>
import tag from "./TagsView/index";
export default {
  name: "AppMain",
  components: {
    tag
  },
  computed: {
    key() {
      return this.$route.path;
    }
  },
  data() {
    return {
      tags: []
    };
  },
  watch: {
    $route(to, from) {
      this.add(to, from);
    }
  },
  methods: {
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);

      //else{
      //  this.$router.back(-1)
      //       }
    },
    add(to, from) {
      // console.log(this.tags.indexOf(to.name), this.tags.find(x => x.name == to.name))
      if (this.tags.find(x => x.name == to.name) == undefined) {
        this.tags.push(to);
      }
      if (this.tags.length > 3) {
        this.tags.splice(0, 1);
      }
    }
  }
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: 1120px;
  width: 100%;
  /* overflow: hidden; */
  position: relative;
  background: #fff;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
/* .router-link-active{
  background: #fff;
  width: 100%;
  height: 100%;
position: absolute;
  display: block;


} */
</style>

