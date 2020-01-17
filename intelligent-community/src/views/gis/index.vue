<template>
  <div style="width:100%;height:100%">
    <div class="tip">
      <div>当前共有<span class="tipY">6</span>条未读信息</div>
      <span class="circle-bell"><i class="el-icon-bell" /></span>
    </div>
    <div id="container" style="width:100%; height:100%" />
    <el-dialog
      :show-close="isShow"
      :visible.sync="dialogVisible"
      width="340px"
    >
      <span slot="title" class="dialog-title">
        <div class="headBar">
          <h3>楼宇信息</h3>
          <div class="small">(7号楼)</div>
        </div>
        <el-button type="primary">平面图</el-button>
      </span>
      <el-collapse v-model="activeName" accordion @change="handleChange">
        <el-collapse-item v-for="(list,index) in personnel" :key="list.id" :name="index">
          <template slot="title">
            {{ list.num }}<span style="margin-left:25px">{{ list.small }}</span>
          </template>
          <div v-for="listItem in list.list" :key="listItem.id" class="personnel-list">
            <div class="personnel-num">{{ listItem.room }}</div>
            <div class="dotPeople"><i class="iconfont icon-plot" :class="listItem.status" />{{ listItem.roomUser }}</div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-dialog>

    <el-dialog
      :visible.sync="dialogIsFalse"
      :show-close="isShow"
      width="340px"
      class="find"
    >
      <div>
        <ul class="ry-list">
          <li>
            <span>发生地点：</span>
            <div>金桥新村小区2单元9号楼</div>
          </li>
          <li>
            <span>事故类型：</span>
            <div>人员倒地</div>
          </li>
          <li>
            <span>事故类型：</span>
            <div>
              <img src="../../assets/mapImg/mapA.png" alt="" style="border:1px solid #ddd">
            </div>
          </li>
        </ul>
        <div class="process">
          <div class="process-item">
            <p>发现</p>
            <span class="circle-process" />
            <p>13:14:25</p>
          </div>
          <div class="process-item">
            <p>判定</p>
            <span class="circle-process" />
            <p>13:16:15</p>
          </div>
          <div class="process-item">
            <p>推送</p>
            <span class="circle-process" />
            <p>13:17:01</p>
          </div>
        </div>
        <div class="head">
          <h3><i class="el-icon-video-camera" style="color:#ffa64d" />周边视频</h3>
        </div>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6"><el-button type="primary">摄像头1</el-button></el-col>
          <el-col :span="6"><el-button type="primary">摄像头2</el-button></el-col>
          <el-col :span="6"><el-button type="primary">摄像头3</el-button></el-col>
        </el-row>
      </div>

    </el-dialog>
  </div>
</template>

<script>
import AMap from 'AMap' // 引入高德地图
export default {
  data() {
    return {
      dialogVisible: false,
      dialogIsFalse: false,
      isShow: false,
      activeName: '0',
      isActive: true,
      personnel: [
        {
          num: '一楼',
          small: '4户',
          list: [
            { room: '101室', roomUser: '来沪人员', status: 'plotG' },
            { room: '102室', roomUser: '党员家庭', status: 'plotB' },
            { room: '103室', roomUser: '本市户口', status: 'plotR' },
            { room: '104室', roomUser: '群租', status: 'plotY' }
          ]
        },
        {
          num: '二楼',
          small: '4户',
          list: [
            { room: '201室', roomUser: '来沪人员', status: 'plotG' },
            { room: '202室', roomUser: '党员家庭', status: 'plotB' },
            { room: '203室', roomUser: '本市户口', status: 'plotR' },
            { room: '204室', roomUser: '群租', status: 'plotY' }
          ]
        },
        {
          num: '三楼',
          small: '4户',
          list: [
            { room: '301室', roomUser: '来沪人员', status: 'plotG' },
            { room: '302室', roomUser: '党员家庭', status: 'plotB' },
            { room: '303室', roomUser: '本市户口', status: 'plotR' },
            { room: '304室', roomUser: '群租', status: 'plotY' }
          ]
        },
        {
          num: '四楼',
          small: '4户',
          list: [
            { room: '401室', roomUser: '来沪人员', status: 'plotG' },
            { room: '402室', roomUser: '党员家庭', status: 'plotB' },
            { room: '403室', roomUser: '本市户口', status: 'plotR' },
            { room: '404室', roomUser: '群租', status: 'plotY' }
          ]
        },
        {
          num: '五楼',
          small: '4户',
          list: [
            { room: '501室', roomUser: '来沪人员', status: 'plotG' },
            { room: '502室', roomUser: '党员家庭', status: 'plotB' },
            { room: '503室', roomUser: '本市户口', status: 'plotR' },
            { room: '504室', roomUser: '群租', status: 'plotY' }
          ]
        },
        {
          num: '六楼',
          small: '4户',
          list: [
            { room: '601室', roomUser: '来沪人员', status: 'plotG' },
            { room: '602室', roomUser: '党员家庭', status: 'plotB' },
            { room: '603室', roomUser: '本市户口', status: 'plotR' },
            { room: '604室', roomUser: '群租', status: 'plotY' }
          ]
        }
      ]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      var _self = this
      var markers = [{
        icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-1.png',
        position: [121.587635, 31.259049]
      }, {
        icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-2.png',
        position: [116.368904, 39.913423]
      }, {
        icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-3.png',
        position: [121.587635, 31.259049]
      }]
      var markerList = []
      var markerList2 = []
      var buildingLayer = new AMap.Buildings({ zIndex: 130, merge: false, sort: false, zooms: [17, 20] })
      var options = {
        hideWithoutStyle: false, // 是否隐藏设定区域外的楼块
        areas: [{ // 围栏1
          // visible:false,//是否可见
          rejectTexture: true, // 是否屏蔽自定义地图的纹理
          color1: 'ffffff00', // 楼顶颜色
          color2: 'ffffcc00', // 楼面颜色
          path: [
            [121.587635, 31.259049],
            [121.58758, 31.259147],
            [121.587362, 31.25906],
            [121.586732, 31.259124],
            [121.586715, 31.260241],
            [121.586739, 31.260282],
            [121.586773, 31.260322],
            [121.588503, 31.260129],
            [121.588546, 31.259958],
            [121.588965, 31.259282],
            [121.588418, 31.259031],
            [121.588281, 31.259289]
          ]
        }, { // 围栏2
          color1: 'ff99ff00',
          color2: 'ff999900',
          path: [
            [116.474609, 39.993478],
            [116.474489, 39.993495],
            [116.473693, 39.994009],
            [116.472898, 39.994546],
            [116.472837, 39.9946],
            [116.4728, 39.994653],
            [116.472779, 39.994745],
            [116.47282, 39.994815],
            [116.47491, 39.99655],
            [116.475041, 39.996607],
            [116.47525, 39.996643],
            [116.475715, 39.996686],
            [116.475947, 39.996688],
            [116.476103, 39.996658],
            [116.477228, 39.995932],
            [116.477261, 39.995833],
            [116.477264, 39.995729],
            [116.477205, 39.995625],
            [116.47642, 39.994899],
            [116.474854, 39.993558],
            [116.47469, 39.99348],
            [116.474609, 39.993478]
          ]
        }]
      }
      buildingLayer.setStyle(options) // 此配色优先级高于自定义mapStyle
      const map = new AMap.Map('container', {
        zoom: 22,
        pitch: 50,
        showIndoorMap: false,
        mapStyle: 'amap://styles/9470d60b0a1231fe6e148b23454861ce',
        center: [121.587635, 31.259049],
        features: ['bg', 'point', 'road'],
        viewMode: '3D',
        layers: [
          new AMap.TileLayer({}),
          buildingLayer
        ]
      })
      map.addControl(new AMap.Scale())
      new AMap.Polygon({
        bubble: true,
        fillOpacity: 0.4,
        strokeWeight: 1,
        path: options.areas[0].path,
        map: map
      })
      new AMap.Polygon({
        bubble: true,
        fillColor: 'green',
        fillOpacity: 0.2,
        strokeWeight: 1,
        path: options.areas[1].path,
        map: map
      })

      map.remove(markerList)
      map.remove(markerList2)
      this.$axios.get('/map').then((data) => {
        markerList = []
        if (data.data != null && data.data.length > 0) {
          for (var i = 0; i < data.data.length; i++) {
            console.log(data.data[i].LONGITUDE)
            if (data.data[i].LONGITUDE !== undefined && data.data[i].LONGITUDE !== '' &&
              data.data[i].LATITUDE !== undefined && data.data[i].LATITUDE !== '') {
              markers.forEach(function(marker) {
                const mark = new AMap.Marker({
                  map: map,
                  icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-' + (i + 1) + '.png',
                  position: new AMap.LngLat(data.data[i].LONGITUDE, data.data[i].LATITUDE),
                  offset: new AMap.Pixel(-13, -30)
                })
                mark.on('click', function(i) {
                  for (var j = 0; j < data.data.length; j++) {
                    if (data.data[j] !== undefined) {
                      if (j == 1) {
                        _self.$options.methods.showMap(_self)
                        break
                      }
                      if (data.data[j].LONGITUDE == i.target.getPosition().lng && data.data[j].LATITUDE == i.target.getPosition().lat) {
                        _self.$options.methods.show(_self)
                        break
                      }
                    }
                  }
                })
              })
              console.log(markers[i])
            }
          }
        }
      })
      if (markerList.length > 0) {
        map.add(markerList)
      }
    },
    show(_self) {
      _self.dialogVisible = true
    },
    showMap(_self) {
      _self.dialogIsFalse = true
    },
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="css" scoped>

.row-bg .el-button{
  padding: 12px 0;
  width: 100%;
}
.head{
    display: flex;
    position: relative;
    height: 40px;
    width: 100%;
    align-items: center;
    color: #555;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
}
.head>h3 {
   font-size: 16px;
    color: #0e0d0d;
    font-weight: normal;
    margin: 0;
}
.head>h3 i{
  margin-right: 10px
}
.tip{
  position: absolute;
  top: 50px;
  right: 40px;
  width: 250px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #c4e4f7;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 8px;
  z-index: 99999999999999;
}
.tipY{
color: #ffa74f
}
.circle-bell{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fbd8c2;
  text-align: center;
  line-height: 40px;
  color: #dd942c
}
.headBar {
    display: flex;
    position: relative;
    height: 40px;
    width: 100%;
    align-items: center;
    color: #000;
        font-weight: 600
}
.headBar>h3 {
    margin: 0;
    margin-right: 15px;
    font-size: 20px;
    color: #000;
}
.headBar .small {
    padding-top: 0.463vh;
    font-size: 16px;
    display: flex;
    align-items: center;
}
.el-dialog__header{
  padding: 0;
  padding-left: 10px;
  padding-right: 10px;
}
.dialog-title{
  display: flex;
  align-items: center;
  justify-content: space-between
}
.dialog-title .el-button{
      height: 28px;
    padding: 0;
    padding-left: 15px;
    padding-right: 15px;
}
.el-dialog__body{
  padding: 0;
}
.el-collapse-item__header{
  height: 35px;
  line-height: 35px;
  padding-left: 10px
}
.personnel-list{
      display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30px;
    color: #555;
    background-color: #eeeeee
}
.personnel-list+.personnel-list{
  border-top: 1px solid #ccc
}
.personnel-num {
    color: #000;
}
.dotPeople {
    width: 100px;
    text-align: left;
}
.el-collapse-item__content{
  padding-bottom: 0
}
.plotG{
  color: #46c59f !important
}
.plotR{
  color: #ff0000 !important
}
.plotB{
  color: #00acfc !important
}
.plotY{
  color: #fec601 !important
}
.find .el-dialog__body{
  padding: 15px;
}
.ry-list li{
   display: flex;
   margin-bottom: 10px
}
.process{
  display: flex;
  text-align: center;
  margin-bottom: 20px
}
.process-item{
  width: 30%;
  position: relative;
}
.circle-process{
  width: 12px;
  height: 12px;
  background-color: #ff0000;
  display: inline-block;
  border-radius: 50%
}
.process-item p{
  margin: 0;
}
.circle-process::before{
  content: '';
  position: absolute;
  top: 21px;
  width: 100%;
  height: 3px;
  background-color: #ff0000
}
.process-item:last-child .circle-process::before{
display: none
}
</style>
