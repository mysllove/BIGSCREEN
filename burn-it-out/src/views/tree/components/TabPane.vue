<template>
  <div class="">
    <el-form
      :inline="true"
      :model="formInline"
      :rules="rules"
      class="demo-form-inline">
      <el-form-item
        v-for="infoItem in info"
        :key="infoItem.id"
        :label="infoItem.formLable">
        <el-input
          v-if="infoItem.showInput"
          v-model="infoItem.key"
          :placeholder="infoItem.placeholder"></el-input>
        <div v-else-if="infoItem.showTime === true">
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                v-model="formInline.date1"
                type="date"
                placeholder="选择日期"
                style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line"
                  :span="1">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker
                v-model="formInline.date2"
                placeholder="选择时间"
                style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
    <div class="block">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="100"
        layout="total, prev, pager, next, jumper , sizes"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
      <div
        style="width: 100%;"
        class="learning-list">
        <div v-for="list in userdata"
             :key="list.name"
             v-loading="listLoading"
             class="listItem">
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <div class="dataShow-img">
                  <img
                    :src="list.src"
                    alt=""
                    style="width: 180px;height:130px"
                    class="studyImg">
                </div></div></el-col>
            <el-col :span="14"><div class="grid-content bg-purple">
              <div class="dataShow-infor">
                <h2>{{list.title}}</h2>
                <p>开班时间：{{list.display_StartTime}}</p>
                <el-row :gutter="10">
                  <el-col v-for="course in content"
                          :key="course.id"
                          :span="8"><div class="grid-content bg-purple">
                            <div class="infor-item">
                              <span>{{course.course}}：{{list.pageviews}}</span>
                            </div>
                          </div></el-col>
                </el-row>
              </div>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">
              <img :src="list.src"
                   alt=""
                   class="passOrno"></div></el-col>
            <el-col :span="2">
              <div class="ButtonSet">
                <el-button type="primary"
                           @click="show(list)">进入班级</el-button>
                <el-button
                  :disabled="list.pass=='考试'?true:false"
                  type="primary"
                  v-html="list.pass=='考试'?'考试':'已考'"></el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <el-dialog
      :title="userList.title"
      :visible.sync="dialogFormVisible">
      <el-form ref="dataForm"
               :rules="rules"
               :model="temp"
               label-position="left"
               label-width="70px"
               style="width: 400px; margin-left:50px;">
        <el-form-item label="Title"
                      prop="title">
          <el-input v-model="temp.title" />
        </el-form-item>
        <el-form-item label="Date"
                      prop="timestamp">
          <el-date-picker v-model="temp.display_StartTime"
                          type="datetime"
                          placeholder="Please pick a date" />
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getList } from '@/api/table'
export default {
  props: {
    info: {
      type: Array,
      default: function() {
        return 'info'
      }
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      temp: {
        id: undefined,
        importance: 1,
        display_StartTime: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      currentPage: 1, // 初始页
      pagesize: 5, //    每页的数据
      total: 400,
      ss: '',
      disabled: false,
      listLoading: true,
      userList: [],
      content: [
        { course: '必修课程' },
        { course: '选修课程' },
        { course: '班级类型' },
        { course: '必修学分' },
        { course: '选修学分' },
        { course: '班级人数' }
      ],
      formInline: {
        date1: '',
        date2: ''
      },
      rules: {
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ]
      }
    }
  },
  computed: {
    userdata: function() {
      return this.userList.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      )
    }
  },
  created() {
    this.handleUserList()
  },
  methods: {
    show(list) {
      this.dialogFormVisible = true
      this.temp = Object.assign({}, list)
      console.log(this.temp)
    },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function(size) {
      this.pagesize = size
      console.log(this.pagesize) // 每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage) // 点击第几页
    },
    handleUserList() {
      this.listLoading = true
      getList().then((response, index) => {
        this.userList = response.data.items
        this.total = response.data.total
        console.log(this.ss)
        this.listLoading = false
      })
    }
  }
}
</script>
<style lang="scss">
.block{
     border: 1px solid #ddd;
    margin-top: 15px;
}
.ButtonSet {
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.ButtonSet .el-button{
  width: 98px;
}
.ButtonSet .el-button+.el-button{
  margin-top: 15px;
  margin-left: 0
}
.listItem{
    height: 160px;
    padding: 15px 0;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
}
.listItem:last-child{
  border-bottom: 0
}
.learning-list{
    padding: 0 15px;
}
.dataShow-img {
    width: 100%;
    height: 130px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    margin-right: 10px;
}
.dataShow-infor{
>h2 {
   margin: 0;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
}
    >p {
      margin: 0;
    margin-bottom: 8px;
    color: #186cc1;
    font-size: 14px;
}
}
.demo-form-inline {
  padding: 10px 15px;
  border: 1px solid #d8d8d8;
  .el-form-item {
    margin-bottom: 0;
  }
}
.el-pagination {
  white-space: nowrap;
  padding: 5px 10px;
  color: #303133;
  font-weight: 700;
  border-bottom: 1px solid #ddd;
  background: #f8f9fe;
  text-align: right;
}
</style>
