<template>
  <div style="width: 80%; margin: 0 auto">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="产品名称:">
        <el-input v-model="form.technologyName" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="技术类型:">
        <el-select v-model="form.technologyType" placeholder="请选择需求类型">
          <el-option label="预研" value="shanghai"></el-option>
          <el-option label="科研" value="beijing"></el-option>
          <el-option label="采购" value="shanghai"></el-option>
          <el-option label="维修" value="beijing"></el-option>
          <el-option label="供应链创新" value="shanghai"></el-option>
          <el-option label="产业创新" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="应用领域:">
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="form.apply"
          maxlength="500"
          :rows="5"
          show-word-limit
        >
        </el-input>
      </el-form-item>
      <el-form-item label="创新特点:">
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="form.trait"
          maxlength="500"
          :rows="5"
          show-word-limit
        >
        </el-input>
      </el-form-item>
      <el-form-item label="产品展示:">
        <div style="display: flex">
          <el-upload
            action="https://tptController/tptAdd.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
            
          </el-upload>
          <el-upload
              action="https://tptController/tptAdd.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              style="marginLeft:20px"
            >
              <i class="el-icon-plus">视频</i>
            </el-upload>
        </div>
      </el-form-item>
      <el-form-item label="所属领域:">
        <el-select v-model="form.domainId" placeholder="请选择需求类型">
          <el-option label="国防高端制造" value="shanghai"></el-option>
          <el-option label="军用智能" value="beijing"></el-option>
          <el-option label="网信安全" value="shanghai"></el-option>
          <el-option label="通用航空" value="beijing"></el-option>
          <el-option label="军工文化创意设计" value="shanghai"></el-option>
          <el-option label="军民融合大数据" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发布方:">
        <el-select v-model="form.publisherId" placeholder="请选择需求类型">
          <el-option label="军方" value="shanghai"></el-option>
          <el-option label="军工集团" value="beijing"></el-option>
          <el-option label="科研机构" value="shanghai"></el-option>
          <el-option label="地方政府与产业园区" value="beijing"></el-option>
          <el-option label="企业" value="shanghai"></el-option>
          <el-option label="投资机构" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="其他:">
        <el-upload
          class="upload-demo"
          drag
          action="https://tptController/tptAdd.com/posts/"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">
            可上传发布相关辅助材料，行业需求研究报告等
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
          technologyName: "",
          technologyType: "",
          apply: "",
          trait: "",
          domainId: "",
          publisherId: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      const formValues = Object.assign({},this.form)
      this.$api.tptController.tptAdd(formValues)

    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>