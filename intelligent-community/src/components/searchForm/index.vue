
<template>
  <div class="form-container">
    <el-form
      :inline="true"
      :model="value"
      label-position="right"
      :label-width="formConfig.labelWidth"
      :rules="rules"
    >
      <slot name="formItem" />
      <el-form-item
        v-for="(item,index) in formConfig.formItemList"
        :key="index"
        :label="item.label"
        :prop="item.prop"
      >
        <el-input
          v-if="item.type=='input'"
          v-model="value[item.prop]"
          :disabled="item.disabled"
          :clearable="true"
          :placeholder="item.placeholder"
        />
        <el-select
          v-else-if="item.type=='select'"
          v-model="value[item.prop]"
          :clearable="true"
          :disabled="item.disabled"
          :placeholder="item.placeholder"
        >
          <el-option
            v-for="(optItem,index) in item.optList"
            :key="index"
            :label="optItem.label"
            :value="optItem.value"
          />
        </el-select>
        <el-date-picker
          v-else
          v-model="value[item.prop]"
          :value-format="item.dateFormate"
          :type="item.type"
          :disabled="item.disabled"
          :clearable="true"
          :placeholder="item.label"
        />
      </el-form-item>
      <el-button-group>
        <el-button
          v-for="(item, index) in formConfig.operate"
          :key="index"
          :plain="item.plain==true?'':false"
          :type="item.type"
          :icon="item.icon"
          @click="toggle(item.handleClick)"
        >{{ item.name }}
        </el-button>
      </el-button-group>
      <slot name="operate" />
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    formConfig: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      required: true
    }

  },
  data() {
    return {

    }
  },
  computed: {},
  mounted() {
    this.setDefaultValue()
  },
  methods: {
    setDefaultValue() {
      const formData = { ...this.value }
      // 设置默认值
      this.formConfig.formItemList.forEach(({ key, value }) => {
        if (formData[key] === undefined || formData[key] === null) {
          formData[key] = value
        }
      })
      this.$emit('input', formData)
    },
    toggle: function(item) {
      if (item === 'this.add') {
        this.$emit('showDialog', 'add')
      } else if (item === 'this.addP') {
        this.$emit('showDialog2', 'addp')
      }
    }
  }
}
</script>
