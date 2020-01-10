<template>
  <div>
    <h2 class="allView" :style="{backgroundImage:`url(${require('../../../assets/title_images/'+titleImage)})`}"><i class="el-icon-office-building" />{{ title }}</h2>
    <div class="communityList">
      <div v-for="card in communityList" :key="card.id" class="basic-card">
        <h3>{{ card.statistics }}</h3>
        <span class="num">{{ card.statisticsNum }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      title: '社区概况',
      titleImage: 'cardA.png',
      communityList: [
        { id: 1, statistics: '街道统计', statisticsNum: 12 },
        { id: 2, statistics: '居委会统计', statisticsNum: 12 },
        { id: 3, statistics: '小区统计', statisticsNum: 24 },
        { id: 4, statistics: '物业统计', statisticsNum: 24 },
        { id: 5, statistics: '房屋统计', statisticsNum: 968 }
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
.communityList{
  display: flex;
    justify-content: space-between;
 .basic-card {
    width: 19%;
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
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
     h3 {
    position: absolute;
    top: 13px;
    left: 13px;
    margin: 0;
    font-weight: normal
  }
  .num{
       margin-left: 15px;
    margin-top: 25px;
    font-size: 25px;
}
}
}
 .basic-card:first-child{
background-color: #e498fd;
&::before{
  background-image: url("../../../assets/card_images/bgA.png")
}
   }

 .basic-card:nth-child(2){
background-color: #ffa590;
&::before{
background-image: url("../../../assets/card_images/bgB.png")
   }
   }
 .basic-card:nth-child(3){
background-color: #ff8aa2;
&::before{
background-image: url("../../../assets/card_images/bgC.png")
   }
   }
    .basic-card:nth-child(4){
background-color: #4cc7ff;
&::before{
background-image: url("../../../assets/card_images/bgD.png")
   }
   }
       .basic-card:nth-child(5){
background-color: #59dba7;
&::before{
background-image: url("../../../assets/card_images/bgE.png")
   }
   }
</style>
