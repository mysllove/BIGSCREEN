
<template>
  <div class="app-container">
    <div class="specialClass">
      <el-tabs v-model="activeName">
        <el-tab-pane
          v-for="item in tabMapOptions"
          :key="item.key"
          :label="item.label"
          :name="item.key">
          <keep-alive>
            <tab-pane
              v-if="activeName == item.key"
              :info="item.formItem"
              @create="showCreatedTimes" />
          </keep-alive>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import tabPane from './components/TabPane'
export default {
  name: 'Tab',
  components: { tabPane },
  data() {
    return {
      tabMapOptions: [
        {
          key: '1',
          label: '重点专题班',
          formItem: [
            {
              formLable: '在线课程：',
              placeholder: '请输入在线课程名称',
              date1: '',
              date2: '',
              showInput: true,
              showTime: false
            },
            { formLable: '开班时间：', showInput: false, showTime: true }
          ]
        },
        {
          key: '2',
          label: '常规专题班',
          formItem: [{ formLable: '在线课程2' }]
        }
      ],
      activeName: '1',
      createdTimes: 0
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  }
}
</script>

