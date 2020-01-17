
<template>
  <div>
    <breadcrumb class="breadcrumb-container" :breadcrumb="breadcrumb" />
    <el-form label-width="200px">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key1" class="form-item">
            <span>{{ info.item1 }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key2" class="form-item">
            <span>{{ info.item2 }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key3" class="form-item">
            <span>{{ info.item3 }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key4" class="form-item">
            <span>{{ info.item4 }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key5" class="form-item">
            <span>{{ info.item5 }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key6" class="form-item">
            <span>{{ info.item6 }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key7" class="form-item">
            <span>{{ info.item7 }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key8" class="form-item">
            <span>{{ info.item8 }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key9" class="form-item">
            <span>{{ info.item9 }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key10" class="form-item">
            <span>{{ info.item10 }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key11" class="form-item">
            <span>{{ info.item11 }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key12" class="form-item">
            <span>{{ info.item12 }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key13" class="form-item">
            <span>{{ info.item13 }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key14" class="form-item">
            <span>{{ info.item14 }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key15" class="form-item">
            <span>{{ info.item15 }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key16" class="form-item">
            <span>{{ info.item16 }}</span>
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
    }
  },
  data() {
    return {
      tableData: null
    }
  },
  mounted() {
    this.setDefaultValue()
  },
  methods: {
    setDefaultValue() {
      const formData = { ...this.value }
      // 设置默认值
      this.info.forEach(({ key, value }) => {
        if (formData[key] === undefined || formData[key] === null) {
          formData[key] = value
        }
      })
    }
  }
}
</script>

<style>
.form-item{
  margin-bottom: 0
}

</style>
