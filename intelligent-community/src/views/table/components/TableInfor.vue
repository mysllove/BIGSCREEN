<template>
  <div>
    <breadcrumb class="breadcrumb-container" :breadcrumb="breadcrumb" />
    <el-form label-width="200px">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="房产证号：" class="form-item">
            <span>{{ info.integer }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="所在市：" class="form-item">
            <span>{{ info.city }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="单元号：" class="form-item">
            <span>{{ info.id }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="所在区：" class="form-item">
            <span>{{ info.district }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="楼号：" class="form-item">
            <span>{{ info.buildingNo }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="所在街道：" class="form-item">
            <span>{{ info.street }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="户室：" class="form-item">
            <span>{{ info.familyRoom }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="所在居委：" class="form-item">
            <span>{{ info.committee }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="房屋面积：" class="form-item">
            <span>{{ info.area }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="所在小区：" class="form-item">
            <span>{{ info.area }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="房屋用途：" class="form-item">
            <span>{{ info.useRoom }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="住户数：" class="form-item">
            <span>{{ info.householdsNum }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="房屋性质：" class="form-item">
            <span>{{ info.nature }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="入住时间：" class="form-item">
            <span>{{ info.display_time }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="房屋类型：" class="form-item">
            <span>{{ info.styleRoom }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="入住人姓名：" class="form-item">
            <span>{{ info.nameRoom }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="建成时间：" class="form-item">
            <span>{{ info.buildTime }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="身份证号：" class="form-item">
            <span>{{ info.regexp }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="物业管理：" class="form-item">
            <span>{{ info.real }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="联系方式：" class="form-item">
            <span>{{ info.contact }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item label="状态：" class="form-item">
            <span>{{ info.status }}</span>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div>
      <div class="headBar">
        <h3><i />{{ historyUser }}</h3>
      </div>
      <el-table
        :data="ok.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        border
        fit
        highlight-current-row
      >
        <el-table-column
          align="center"
          prop="name"
          label="姓名"
          width="100"
        />
        <el-table-column
          prop="sex"
          label="性别"
          align="center"
          width="100"
        />
        <el-table-column
          prop="idCard"
          label="身份证号"
          width="200"
          align="center"
        />
        <el-table-column
          prop="contact"
          label="联系方式"
          width="170"
          align="center"
        />
        <el-table-column
          prop="display_time"
          label="入住时间"
          width="280"
          align="center"
        />
        <el-table-column
          prop="status"
          label="状态"
          align="center"
          width="120"
        />
        <el-table-column
          label="操作"
          align="center"
        >
          <template slot-scope="scope">
            <el-button size="small" @click="handleClick(scope.row)">查看</el-button>
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
    </div>
    <el-dialog
      title="历史住户信息详情"
      :visible.sync="innerVisible"
      append-to-body
      center
    >
      <smallTableInfo :info="info" @close="closeDialog" />
    </el-dialog>
  </div>
</template>

<script>
import SmallTableInfo from './SmallTableInfo'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  components: { SmallTableInfo, Breadcrumb },
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
    // fetchData() {
    //   fetchComments().then(response => {
    //     this.tableData = response.data.items
    //     this.total = response.data.total
    //     console.log(this.tableData)
    //   })
    // },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function(size) {
      this.pagesize = size
      console.log(this.pagesize) // 每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage) // 点击第几页
    },
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
  /* display: flex;
  justify-content: center; */
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
