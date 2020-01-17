
<template>
  <el-dialog
    title="物业信息新增"
    :visible.sync="isVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :modal-append-to-body="false"
    top="1vh"
    @close="closeDialog"
  >
    <el-form
      ref="dataForm"
      :model="form"
      label-position="right"
      label-width="120px"
    >
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="单位名称：">
            <el-input v-model="form.unit" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="物业经理：">
            <el-input v-model="form.manager" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="法人代表：">
            <el-input v-model="form.lagal" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="电话：">
            <el-input v-model="form.phone" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="身份证号：">
            <el-input v-model="form.idCard" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item prop="street" label="所在街道：">
            <el-select v-model="form.street" placeholder="所在街道">
              <el-option
                v-for="item in street"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="资质证书号：">
            <el-input v-model="form.num" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item prop="street" label="所在居委：">
            <el-select v-model="form.street" placeholder="所在居委">
              <el-option
                v-for="item in street"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item prop="rank" label="资质等级：">
            <el-select v-model="form.ranks" placeholder="请选择">
              <el-option
                v-for="item in rank"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item prop="area" label="所在小区：">
            <el-select v-model="form.area" placeholder="所在小区">
              <el-option
                v-for="item in areas"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="合同有效期">
            <el-col :span="11">
              <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%;" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="isVisible = false">取 消</el-button>
      <el-button type="primary">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import formDatas from '../formDatas/tabForm.json'
export default {
  props: {
    isShow: Boolean,
    rows: {
      type: Object,
      default: function() {
        return 'rows'
      }
    }},
  data() {
    return {
      isVisible: this.isShow,
      form: {
        unit: '',
        manager: '',
        legal: '',
        phone: '',
        idCard: '',
        date1: '',
        date2: '',
        num: '',
        accoutCash: ''
      },
      area: [{ label: '银桥花苑', value: '0' }],
      rank: [{ label: 'A', value: '0' }],
      street: [
        { label: '浦兴街道', value: '0' }
      ],
      formDatas: []
    }
  },
  computed: {
    ...mapGetters(['addFundDialog'])
  },
  created() {
    this.formDatas = formDatas
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog')
    }
  }
}
</script>

<style>

</style>
