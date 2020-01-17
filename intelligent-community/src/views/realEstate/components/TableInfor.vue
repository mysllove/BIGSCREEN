
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
            <span>{{ info.item5 }}</span>
          </el-form-item>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="12">
          <el-form-item :label="info.key3" class="form-item">
            <span>{{ info.item2 }}</span>
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
    <div v-if="info.show">
      <div class="headBar">
        <h3><i />{{ historyUser }}</h3>
      </div>
      <el-table
        :data="tableInfor"
        style="width: 100%"
        border
        fit
        highlight-current-row
      >
        <el-table-column
          prop="item6"
          label="下辖物业"
          width="150"
          align="center"
        />
        <el-table-column
          prop="item7"
          label="地址"
          width="250"
          align="center"
        />
        <el-table-column
          prop="item8"
          label="电话"
          width="150"
          align="center"
        />
        <el-table-column
          prop="item9"
          label="管辖小区"
          width="200"
          align="center"
        />
        <el-table-column
          prop="item10"
          label="正常"
          width="100"
          align="center"
        />
        <el-table-column
          label="操作"
          align="center"
        >
          <template slot-scope="scope">
            <el-button
              icon="edit"
              size="mini"
              @click="handleUpdate(scope.row,scope.$index)"
            >查看</el-button>
            <el-button size="mini" @click="handleModifyStatus(scope.row)">
              修改
            </el-button>
            <el-button
              type="danger"
              icon="delete"
              size="mini"
              @click="handleDelete(scope.row,scope.$index)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="下辖物业信息详情"
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
  components: { Breadcrumb, SmallTableInfo },
  props: {
    info: {
      type: Object,
      default: function() {
        return 'info'
      }
    },
    tableInfor: {
      type: Array,
      default: function() {
        return 'tableInfor'
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
      tableData: null,
      historyUser: '下辖物业信息'
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
</style>
