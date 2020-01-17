<template>
  <div>
    <breadcrumb class="breadcrumb-container" :breadcrumb="breadcrumb" />
    <el-form label-width="200px">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="设备名称：" class="form-item">
            <span>{{ info.name }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="上线时间：" class="form-item">
            <span>{{ info.display_time }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="类别：" class="form-item">
            <span>{{ info.style }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="设备状态：" class="form-item">
            <span>{{ info.status }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="设备编号：" class="form-item">
            <span>{{ info.mark }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="运行时长：" class="form-item">
            <span>{{ info.time }}</span>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

  </div>
</template>

<script>

import Breadcrumb from '@/components/Breadcrumb'
export default {
  components: { Breadcrumb },
  props: {
    info: {
      type: Object,
      default: function() {
        return 'info'
      }
    },
    breadcrumb: {
      type: String,
      default: function() {
        return '详情'
      }
    },
    ok: {
      type: Array,
      default: function() {
        return 'ok'
      }
    }
  },
  data() {
    return {
      tableData: null,
      temp: null,
      innerVisible: false,
      currentPage: 1, // 初始页
      pagesize: 5, //    每页的数据
      total: 5,
      historyUser: '历史住户信息'
    }
  },
  // created() {
  //   this.fetchData()
  // },
  methods: {

    closeDialog() {
      this.innerVisible = false
    },
    handleClick(row) {
      this.innerVisible = true
    }
  }
}
</script>

<style>
.form-item{
  margin-bottom: 0
}
.headBar {
    display: flex;
    position: relative;
    height: 40px;
    width: 100%;
    align-items: center;
    color: #555;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
}
.headBar>h3 {
   font-size: 16px;
    color: #0e0d0d;
    font-weight: normal;
    margin: 0;
}
.headBar>h3 i {
    display: inline-block;
    width: 4px;
    height: 20px;
    background-color: #72b8fd;
    margin-right: 10px;
    vertical-align: middle;
}
/* .form-item .el-form-item__content{
  margin-left: 0 !important
} */
</style>
