
<template>
  <custom-input v-model="searchText"></custom-input>
  <!-- <div class="card-wrapper">
    <el-autocomplete

      class="inline-input"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      hidden-sm-and-up
      @select="handleSelect"></el-autocomplete>
    <el-row :gutter="20">
      <el-col v-for="card in cards"
              :key="card.id"
              :xs="24"
              :sm="12"
              :md="8"
              :lg="6"
              :xl="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header"
                 class="clearfix">
              <span>{{card.title}}</span>
              <el-button style="float: right; padding: 3px 0"
                         type="text"> <span @click="addEquipment">翻翻我😜</span></el-button>
            </div>
            <div v-for="synopsis in card.tips"
                 :key="synopsis.index"
                 class="text item">
              <div class="synopsisRow"><i :class="synopsis.emphasisIcon"></i><span v-html="synopsis
                .emphasis"></span></div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :style="{ fontSize: postFontSize + 'em' }">
      <dialogComponent
        :info="message"
        @enlarge-text="postFontSize += $event"></dialogComponent>
    </el-dialog>
  </div> -->
</template>

<style lang="scss" scoped>
.card-wrapper {
  padding: 10px;
}
.card-wrapper .el-col {
  margin-bottom: 20px;
}

.card-wrapper .el-col:last-child {
  margin-bottom: 0;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 10px;
  line-height: 20px;
}
.box-card >>> .el-card__body {
  height: 152px;
  overflow: hidden;
}
.box-card >>> .el-card__body:hover {
  overflow: auto;
  overflow-x: hidden;
}
.box-card >>> .el-card__body::-webkit-scrollbar {
  width: 5px;
}
.box-card >>> .el-card__body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}
.box-card >>> .el-card__body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
.orange-m {
  color: orange;
}
.synopsisRow > i {
  margin-right: 5px;
  width: 16px;
  height: 16px;
}
.inline-input {
  margin-bottom: 10px;
  width: 300px;
  display: none;
}
@media screen and (max-width: '768px') {
  .inline-input {
    display: block;
  }
}
</style>

<script>
import customInput from './components/customInput'
export default {
  components: { // 注册组建
    customInput
  },
  data() {
    return {
      searchText: 454
    }
  }
}
// import dialogComponent from './components/dialog'
// export default {
//   components: { // 注册组建
//     dialogComponent
//   },
//   data() {
//     return {
//       restaurants: [],
//       message: [],
//       postFontSize: 1,
//       dialogVisible: false,
//       // 新增和编辑弹框标题
//       dialogStatus: '',
//       cards: [
//         {
//           id: 1,
//           title: 'vue介绍',
//           tips: [
//             {
//               emphasis:
//                 'Vue是一套用于构建用户界面的<span style="color:#409EFF">渐进式框架</span>',
//               emphasisIcon: 'el-icon-star-off'
//             },
//             {
//               emphasis:
//                 'Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件',
//               emphasisIcon: 'iconfont sanylAb'
//             },
//             { emphasis: '......', emphasisIcon: 'iconfont sanylAc' }
//           ]
//         },
//         {
//           id: 2,
//           title: 'vue模板语法',
//           tips: [
//             {
//               emphasis:
//                 'Vue使用基于HTML的模板语法，允许开发者声明式的将DOM绑定至底层Vue实例的数据',
//               emphasisIcon: 'el-icon-star-off'
//             },
//             {
//               emphasis: '在底层的实现上，Vue将模板编译成虚拟DOM渲染函数',
//               emphasisIcon: 'iconfont sanylAb'
//             },
//             {
//               emphasis:
//                 '结合反应性系统，Vue能够智能地找出需要重新渲染的最少组件数量..',
//               emphasisIcon: 'iconfont sanylAc'
//             }
//           ]
//         }
//       ]
//     }
//   },
//   mounted() {
//     this.restaurants = this.loadAll()
//   },
//   created: function() {
//     // 获取商品分类
//     this.message = this.cards // 给数组赋值
//   },
//   methods: {
//     addEquipment(index) {
//       this.dialogVisible = true
//     },
//     querySearch(queryString, cb) {
//       var restaurants = this.restaurants
//       var results = queryString
//         ? restaurants.filter(this.createFilter(queryString))
//         : restaurants
//       // 调用 callback 返回建议列表的数据
//       cb(results)
//     },
//     createFilter(queryString) {
//       return restaurant => {
//         return (
//           restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
//           0
//         )
//       }
//     },
//     loadAll() {
//       return [
//         { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
//         {
//           value: 'Hot honey 首尔炸鸡（仙霞路）',
//           address: '上海市长宁区淞虹路661号'
//         },
//         {
//           value: '新旺角茶餐厅',
//           address: '上海市普陀区真北路988号创邑金沙谷6号楼113'
//         },
//         { value: '泷千家(天山西路店)', address: '天山西路438号' },
//         {
//           value: '胖仙女纸杯蛋糕（上海凌空店）',
//           address: '上海市长宁区金钟路968号1幢18号楼一层商铺18-101'
//         },
//         { value: '贡茶', address: '上海市长宁区金钟路633号' },
//         {
//           value: '豪大大香鸡排超级奶爸',
//           address: '上海市嘉定区曹安公路曹安路1685号'
//         },
//         {
//           value: '茶芝兰（奶茶，手抓饼）',
//           address: '上海市普陀区同普路1435号'
//         },
//         { value: '十二泷町', address: '上海市北翟路1444弄81号B幢-107' },
//         { value: '星移浓缩咖啡', address: '上海市嘉定区新郁路817号' },
//         { value: '阿姨奶茶/豪大大', address: '嘉定区曹安路1611号' },
//         { value: '新麦甜四季甜品炸鸡', address: '嘉定区曹安公路2383弄55号' },
//         {
//           value: 'Monica摩托主题咖啡店',
//           address: '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F'
//         },
//         {
//           value: '浮生若茶（凌空soho店）',
//           address: '上海长宁区金钟路968号9号楼地下一层'
//         },
//         { value: 'NONO JUICE  鲜榨果汁', address: '上海市长宁区天山西路119号' },
//         { value: 'CoCo都可(北新泾店）', address: '上海市长宁区仙霞西路' },
//         {
//           value: '快乐柠檬（神州智慧店）',
//           address: '上海市长宁区天山西路567号1层R117号店铺'
//         },
//         {
//           value: 'Merci Paul cafe',
//           address: '上海市普陀区光复西路丹巴路28弄6号楼819'
//         },
//         {
//           value: '猫山王（西郊百联店）',
//           address: '上海市长宁区仙霞西路88号第一层G05-F01-1-306'
//         },
//         { value: '枪会山', address: '上海市普陀区棕榈路' },
//         { value: '纵食', address: '元丰天山花园(东门) 双流路267号' },
//         { value: '钱记', address: '上海市长宁区天山西路' },
//         { value: '壹杯加', address: '上海市长宁区通协路' },
//         {
//           value: '唦哇嘀咖',
//           address: '上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元'
//         },
//         { value: '爱茜茜里(西郊百联)', address: '长宁区仙霞西路88号1305室' },
//         {
//           value: '爱茜茜里(近铁广场)',
//           address:
//             '上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺'
//         },
//         {
//           value: '鲜果榨汁（金沙江路和美广店）',
//           address: '普陀区金沙江路2239号金沙和美广场B1-10-6'
//         },
//         {
//           value: '开心丽果（缤谷店）',
//           address: '上海市长宁区威宁路天山路341号'
//         },
//         { value: '超级鸡车（丰庄路店）', address: '上海市嘉定区丰庄路240号' },
//         { value: '妙生活果园（北新泾店）', address: '长宁区新渔路144号' },
//         { value: '香宜度麻辣香锅', address: '长宁区淞虹路148号' },
//         {
//           value: '凡仔汉堡（老真北路店）',
//           address: '上海市普陀区老真北路160号'
//         },
//         { value: '港式小铺', address: '上海市长宁区金钟路968号15楼15-105室' },
//         { value: '蜀香源麻辣香锅（剑河路店）', address: '剑河路443-1' },
//         { value: '北京饺子馆', address: '长宁区北新泾街道天山西路490-1号' },
//         {
//           value: '饭典*新简餐（凌空SOHO店）',
//           address: '上海市长宁区金钟路968号9号楼地下一层9-83室'
//         },
//         {
//           value: '焦耳·川式快餐（金钟路店）',
//           address: '上海市金钟路633号地下一层甲部'
//         },
//         { value: '动力鸡车', address: '长宁区仙霞西路299弄3号101B' },
//         { value: '浏阳蒸菜', address: '天山西路430号' },
//         { value: '四海游龙（天山西路店）', address: '上海市长宁区天山西路' },
//         {
//           value: '樱花食堂（凌空店）',
//           address: '上海市长宁区金钟路968号15楼15-105室'
//         },
//         { value: '壹分米客家传统调制米粉(天山店)', address: '天山西路428号' },
//         {
//           value: '福荣祥烧腊（平溪路店）',
//           address: '上海市长宁区协和路福泉路255弄57-73号'
//         },
//         {
//           value: '速记黄焖鸡米饭',
//           address: '上海市长宁区北新泾街道金钟路180号1层01号摊位'
//         },
//         { value: '红辣椒麻辣烫', address: '上海市长宁区天山西路492号' },
//         {
//           value: '(小杨生煎)西郊百联餐厅',
//           address: '长宁区仙霞西路88号百联2楼'
//         },
//         { value: '阳阳麻辣烫', address: '天山西路389号' },
//         {
//           value: '南拳妈妈龙虾盖浇饭',
//           address: '普陀区金沙江路1699号鑫乐惠美食广场A13'
//         }
//       ]
//     },
//     handleSelect(item) {
//       console.log(item)
//     }
//   }
// }
</script>

