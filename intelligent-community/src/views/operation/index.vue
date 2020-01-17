<template>
  <div class="app-container">
    <div class="form-container">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="设备名称">
          <el-input v-model="formInline.devicename" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="类别">
          <el-input v-model="formInline.devicestyle" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="上线时间">
          <el-col :span="11">
            <el-date-picker v-model="formInline.date1" type="date" placeholder="选择日期" style="width: 100%;" />
          </el-col>
          <el-col class="line" :span="2" style="text-align:center">至</el-col>
          <el-col :span="11">
            <el-time-picker v-model="formInline.date2" placeholder="选择时间" style="width: 100%;" />
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button plain @click="handleCreate">新增设备</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="设备名称" width="250">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="类别" width="250" align="center">
        <template slot-scope="scope">
          {{ scope.row.style }}
        </template>
      </el-table-column>
      <el-table-column label="上线时间" width="250" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="设备编号" width="350" align="center">
        <template slot-scope="scope">
          {{ scope.row.mark }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="设备状态" width="280" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleUpdate(scope.row)"
          >查看</el-button>

          <el-button size="mini" @click="handleModifyStatus(scope.row)">
            修改
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100"
      layout="total, prev, pager, next, jumper , sizes"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisibleAdd">
      <el-form
        ref="dataForm"
        :model="temp"
        label-position="right"
        label-width="120px"
      >
        <el-row
          :gutter="10"
        >
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
            <el-form-item label="设备名称：">
              <el-input v-model="temp.deviceName" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
            <el-form-item label="上线时间：" prop="type">
              <el-date-picker v-model="temp.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-form-item>
          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
            <el-form-item label="类别：">
              <el-select v-model="temp.deviceStyle" class="filter-item" placeholder="请选择" />
            </el-form-item>
          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
            <el-form-item label="设备状态：" prop="type">
              <el-select v-model="temp.deviceStatus" class="filter-item" placeholder="请选择" />
            </el-form-item>
          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
            <el-form-item label="设备编号：">
              <el-input v-model="temp.deviceMark" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
            <el-form-item label="运行时长：">
              <el-input v-model="temp.deviceRun" placeholder="请输入" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          保存
        </el-button>
        <el-button plain @click="dialogFormVisible = false">
          重置
        </el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="设备信息详情"
      width="60%"
      center
      breadcrumb="statusValue"
      :visible.sync="dialogFormVisible"
    >
      <tableInfor :info="tempData" :ok="list" />
    </el-dialog>
  </div>
</template>

<script>
import { fetchComments } from '@/api/table'
import TableInfor from './components/TableInfor'
const city = [
  { key: '1', cityAddress: '上海市' },
  { key: '2', cityAddress: '杭州市' },
  { key: '3', cityAddress: '武汉市' },
  { key: '4', cityAddress: '北京市' }
]
export default {
  components: { TableInfor },
  filters: {
    statusFilter(status) {
      const statusMap = {
        '正常': 'success',
        '已注销': 'gray'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: [],
      tempData: null,
      listLoading: true,
      dialogFormVisible: false,
      dialogFormVisibleAdd: false,
      dialogStatus: '',
      statusValue: '456',
      city,
      textMap: {
        update: 'Edit',
        create: '设备新增'
      },
      currentPage: 1, // 初始页
      pagesize: 10, //    每页的数据
      total: 400,
      temp: {
        devicename: undefined,
        date1: 1,
        devicestyle: '',
        deviceStatus: '',
        deviceMark: '',
        deviceRun: ''
      },
      formInline: {
        devicename: '',
        devicestyle: '',
        date1: '',
        date2: ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      fetchComments().then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
        console.log(this.list)
      })
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisibleAdd = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleUpdate(row) {
      this.dialogFormVisible = true
      this.tempData = Object.assign({}, row)
      this.statusValue = '详情'
      console.log(this.tempData)
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    handleDelete(row, index) {
      this.$confirm('确认删除该记录吗?', '提示', {
        type: 'warning'
      })
        .then(() => {
          this.$notify({
            title: 'Success',
            message: 'Delete Successfully',
            type: 'success',
            duration: 2000
          })
          this.list.splice(row, 1)
        })
        .catch(() => {})
    },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function(size) {
      this.pagesize = size
      this.currentPage = 1
      console.log(this.pagesize) // 每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage) // 点击第几页
    }
  }
}
</script>
<style>

</style>
