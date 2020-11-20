<template>
<div class="nev">
  <div><h1>军工需求发布登录页面</h1></div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :data="loginData">
  <el-form-item label="邮箱/手机号" prop="email,phone">
    <el-input v-model="ruleForm.email"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password" >
    <el-input v-model="ruleForm.password" type="password"></el-input>
  </el-form-item>
  <!-- <el-form-item label="手机号" prop="phone" >
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item> -->
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
<p @click="register">
  立即注册
</p>
</div>
</template>

<script>
import { log } from 'easemob-emedia';
  export default {
    data() {
      return {
        loginData: '',
        ruleForm: {
          email: '', 
          password: '',
          phone: '',
          register: '',
        },
        rules: {
          email: [
            { required: true, message: '请输入账户名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 2 到 6 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, max: 10, message: '长度在 6 到 11 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 11, max: 11, message: '长度在11字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      async submitForm () {
        this.login(this.loginData)
        this.loginData.push(this.login)
        const login = this.loginData(data)

      },


      register () {
        this.$router.push('/register')
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {  
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }

        });
      },

      login (data) {
      return  this.$api.user.login(data)
      }

      // resetForm(formName) {
      //   this.$refs[formName].resetFields();
      // },
      // registerData() {
      //   return this.$api.user.register()
      // },
    }
  }
</script>
<style>
    .nev {
      width: 435px;
      height: 200px;
      margin:0 auto ;
      padding-top:300px ;      
    }
    h1 {
      text-align: center;
    }
    .nev p {
      margin-left: 30px;
    }
</style>