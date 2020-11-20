<template>
  <div id="app">
 
      <router-view  />

      <!-- <router-view v-if="!$route.meta.bool"></router-view> -->
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style scoped>
  @import url('./utils/theme/base.css');
#app{
  background:#FAFAFA  ;
}
</style>