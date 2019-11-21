<template>
  <div class="">
    <el-form
      :inline="true"
      :model="formInline"
      :rules="rules"
      class="demo-form-inline"
    >
      <el-form-item
        :label="infoItem.formLable"
        v-for="infoItem in info"
        :key="infoItem.id"
      >
        <el-input
          v-if="infoItem.showInput"
          v-model="infoItem.key"
          :placeholder="infoItem.placeholder"
        ></el-input>
        <div v-else-if="infoItem.showTime === true">
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="formInline.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="1">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker
                placeholder="选择时间"
                v-model="formInline.date2"
                style="width: 100%;"
              ></el-time-picker>
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
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="100"
        layout="total, prev, pager, next, jumper , sizes"
        :total="total"
      >
      </el-pagination>
      <div style="width: 100%;" class="learning-list">
        <div v-for="list in userdata" :key="list.id" class="listItem">
          <el-row :gutter="20">
            <el-col :span="4"
              ><div class="grid-content bg-purple">
                <div class="dataShow-img">
                  <img
                    src="http://luohouli.gicp.net:8901/temp/2019/11/18/20191118172953039.png"
                    alt=""
                    style="width: 180px;height:130px"
                    class="studyImg"
                  />
                </div></div
            ></el-col>
            <el-col :span="14"
              ><div class="grid-content bg-purple">
                <div class="dataShow-infor">
                  <h2>{{ list.name }}</h2>
                  <p>开班时间：2019-11-18 17:29:48 至 2019-11-27 00:00:00</p>
                  <el-row :gutter="10">
                    <el-col :span="8"
                      ><div class="grid-content bg-purple">
                        <div class="infor-item">
                          <img
                            src="/weaversys_achilles_war_exploded/images/achilles/kechengleixing.png"
                          />
                          <span>必修课程：3门</span>
                        </div>
                      </div></el-col
                    >
                  </el-row>
                </div>
              </div></el-col
            >
            <el-col :span="4"
              ><div class="grid-content bg-purple">
                <img :src="list.src" alt="" class="passOrno" /></div
            ></el-col>
            <el-col :span="2"
              ><div class="grid-content bg-purple">
                <el-button type="primary">进入班级</el-button>
                <el-button type="primary" plain>考试</el-button>
              </div></el-col
            >
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["info"],
  computed: {
    userdata: function() {
      return this.userList.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      );
    }
  },
  data() {
    return {
      currentPage: 1, //初始页
      pagesize: 5, //    每页的数据
      total: 400,
      userList: [],
      formInline: {
        date1: "",
        date2: ""
      },
      rules: {
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ]
      }
    };
  },
  created() {
    this.handleUserList();
    this.total = this.userList.length;
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function(size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    },
    handleUserList() {
      axios
        .get("https://www.runoob.com/try/ajax/json_demo.json")
        .then(response => (this.userList = response))
        .catch(function(error) {
          // 请求失败处理
          console.log(error);
        });
      console.log(this.userList);
    }
  }
};
</script>
<style lang="scss">
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
  margin-top: 10px;
  background: #f8f9fe;
  text-align: right;
}
</style>
