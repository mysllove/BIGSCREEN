<template>
  <div style="text-alian:center">
    <el-form label-width="200px">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="姓名：" class="form-item">
            <span>{{ info.name }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="婚姻状况：" class="form-item">
            <span>{{ info.marriage }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="性别：" class="form-item">
            <span>{{ info.sex }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="文化程度：" class="form-item">
            <span>{{ info.culture }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="民族：" class="form-item">
            <span>{{ info.ethnic }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="政治面貌：" class="form-item">
            <span>{{ info.face }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="户口类型：" class="form-item">
            <span>{{ info.registered }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="联系电话：" class="form-item">
            <span>{{ info.phone }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="户籍地址：" class="form-item">
            <span>{{ info.address }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="入住时间：" class="form-item">
            <span>{{ info.check }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="身份证号码：" class="form-item">
            <span>{{ info.idCard }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="状态：" class="form-item">
            <span>{{ info.status }}</span>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Samll',
  props: {
    info: {
      type: Object,
      default: function() {
        return 'info'
      }
    }
  },
  data() {
    return {
      innerVisible: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>
