<template>
  <div class="app-container">
    <div class="form-container">
      <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" center label-width="100px" class="setting-ruleForm">
        <el-form-item label="账号：" prop="number">
          <el-input v-model.number="ruleForm.number" :disabled="true" />
        </el-form-item>
        <el-form-item label="原密码：" prop="passOriginal">
          <el-input v-model="ruleForm.passOriginal" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="新密码：" prop="pass" style="margin-bottom:30px">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="确认密码：" prop="checkPass">
          <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button plain @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('注：限制6-18个字符，请使用字母加数字或符号的组合密码，不能单独使用字母、数字、符号'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        passOriginal: '',
        number: '201-xey'
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
.setting-ruleForm{
  width: 500px;
  margin: auto
}
</style>
