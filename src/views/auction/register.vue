<template>
  <div class="register" :data="registerData">
    <el-form ref="form" :model="name" label-width="80px">
  <el-form-item label="名称">
  <el-input v-model="form.uName"></el-input>
  </el-form-item>
  <el-form-item label="邮箱">
  <el-input v-model="form.email"></el-input>
  </el-form-item>
  <el-form-item label="密码">
  <el-input v-model="form.password"></el-input>
  </el-form-item>
  <el-form-item label="手机号">
    <el-input v-model="form.phone"></el-input>
  </el-form-item>
  <el-form-item label="性别">
    <el-radio-group v-model="form.sex">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
</el-form>
  </div>
</template>
<script>
export default {
    data() {
     
      return {
        // registerData:'',
        // onSubmit: '',
        form: {
          uName:'',
          email: '',
          password: '',
          phone: '',
          sex: ''

        }
      }
    },
    methods: {
        async registerData () {

        },

       registerData() {
         return this.$api.user.register()
       },
      onSubmit() {
        console.log('submit!');
      }
    }
  }

</script>
<style lang="">
</style>