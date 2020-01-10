<template>
  <div>
    <h2 class="allView" :style="{backgroundImage:`url(${require('../../../assets/title_images/'+titleImage)})`}"><i class="el-icon-office-building" />{{ title }}</h2>
    <div class="equipmentList">
      <div v-for="equipment in equipmentList" :key="equipment.id" class="basic-card">
        <h3>{{ equipment.statistics }}</h3>
        <div v-if="equipment.state == exception ? false : true" class="exception">
          <div><svg-icon icon-class="normal" />正常：<span>{{ equipment.normal }}</span></div>
          <div><svg-icon icon-class="fault" />故障：<span>{{ equipment.fault }}</span></div>
        </div>
        <div class="num">
          {{ equipment.statisticsNum }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      title: '设备运行',
      titleImage: 'cardC.png',
      equipmentList: [
        { id: 1, statistics: '录像机', normal: 12, fault: 0, state: 'exception' },
        { id: 2, statistics: '摄像头', normal: 2124, fault: '02', state: 'exception' },
        { id: 3, statistics: '今日访问量', statisticsNum: 124 },
        { id: 4, statistics: '本月访问量', statisticsNum: 2469 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.allView{
    margin: 0 auto;
    width: 190px;
    text-align: center;
    margin-bottom: 30px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color:#fff;
      background-repeat: no-repeat;
    background-size: 100% 100%;
    font-weight: normal;
    i{
      font-size: 18px;
      margin-right: 5px;
          font-size: 21px;
    vertical-align: middle;
    }
  }
.equipmentList{
  display: flex;
    justify-content: space-between;
 .basic-card {
    width: 23%;
    height: 120px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: rgb(255, 255, 255);
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.2s ease-in-out 0s;
    &:hover {
    box-shadow: rgba(110, 110, 110, 0.4) 0px 5px 10px 5px;
    border-color: rgb(238, 238, 238);
    }
    &::before {
       content: "";
    position: absolute;
    right: 8px;
    bottom: 5px;
    opacity: 0.5;
    z-index: 9999;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-size: contain;
    background-image: url("../../../assets/card_images/circle.png");
    background-repeat: no-repeat;
    background-position:center center;
}
     h3 {
    position: absolute;
    top: 13px;
    left: 13px;
    margin: 0;
    font-weight: normal
  }
  .exception{
  margin-left: 15px;
    margin-top: 25px;
    font-size: 18px;
        div{
      padding: 5px 0;
      span{
            text-align: right;
    display: inline-block;
    width: 39px;
      }
      .svg-icon{
        margin-right: 8px
      }
    }
  }
  .num{
       margin-left: 15px;
    margin-top: 25px;
    font-size: 25px;
}
}
}
 .basic-card:first-child{
background-color: #cf6cf3;
   }

 .basic-card:nth-child(2){
background-color: #f09666;
   }
 .basic-card:nth-child(3){
background-color: #f166b9;
   }
    .basic-card:nth-child(4){
background-color: #a372f1;
   }
</style>
