<template>
  <div style="width: 80%; margin: 0 auto">
    <el-form ref="form" :model="form" label-width="140px">
      <el-form-item label="需求类型:">
        <el-select v-model="form.typeId" clearable  size="small">
          <el-option v-for="item in typeOptions" :label="item.name" :value="item.id" :key="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="产业创新项目名称:">
        <el-input v-model="form.projectName" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="项目领域:">
        <el-select v-model="form.domainId " clearable  size="small">
          <el-option v-for="item in domainOptions" :label="item.domainName" :value="item.domainName" :key="item.domainName" />
        </el-select>
      </el-form-item>
      <el-form-item label="项目内容:">
        <el-input v-model="form.content" placeholder="请输入项目内容"></el-input>
      </el-form-item>
      <el-form-item label="简介:">
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="form.synopsis"
          maxlength="500"
          :rows="5"
          show-word-limit
        >
        </el-input>
      </el-form-item>
      <el-form-item label="数据包材料:">
        <el-upload
          drag
          action="#"
          ref="upload"
          :file-list="file"
          :before-upload="beforeupload"
          :on-change="handleFileChange"
          :auto-upload="false">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>
      <el-form-item label="发布方:">
        <el-select v-model="form.publisherId" placeholder="请选择发布方">
          <el-option v-for="item in publisherData" :label="item.name" :value="item.id" :key="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        typeId: '',
        projectName: '',
        domainId: '',
        content: '',
        synopsis: '',
        publisherId: '',
      },
      domainOptions: [],
      typeOptions: [],
      publisherData: [],
      file: [],
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    beforeupload(file){
      const formData = new FormData()
      formData.append('file', file)
      axios.post('/file/file/upload', formData).then
      return false
    },
    async fetchData () {
      const { data: { domainList: domainData } } = await this.fetchDomainData()
      this.domainOptions = domainData
      const { data: typeData } = await this.fetchTypeData()
      this.typeOptions = typeData
      const { data: publisherData } = await this.fetchPublisherData()
      this.publisherData = publisherData
    },
    fetchDomainData () {
      return this.$api.Publish.getDomainAll()
    },
    fetchTypeData () {
      return this.$api.Publish.type()
    },
    fetchPublisherData () {
      return this.$api.tabNewIndustry.getTabPublisher()
    },
    handleFileChange (file, fileList) {
      this.file[0] = file
    },
    submitUpload() {
      this.$refs.upload.submit()
    },
    create (params) {
      return this.$api.element.saveTabIndustryRecommend(params)
    },
    async onSubmit() {
      try {
        this.submitUpload()
        await this.create(this.form)
      } catch (error) {
        throw error
      }
    },
  },
}
</script>