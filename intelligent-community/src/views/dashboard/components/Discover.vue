<template>
  <div>
    <h2 class="allView" :style="{backgroundImage:`url(${require('../../../assets/title_images/'+titleImage)})`}"><i class="el-icon-aim" />{{ title }}</h2>
    <div class="discoverList">
      <el-row :gutter="20">
        <el-col v-for="list in discoverList" :key="list.id" :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
          <div class="intelligent-container">
            <div class="intelligent-card">
              <img :src="list.src" alt="">
            </div>
            <div class="intelligent-cardText">
              <p>{{ list.statistics }}</p>
              <span>{{ list.statisticsNum }}</span>
            </div>
          </div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      title: '智能发现',
      titleImage: 'cardB.png',
      discoverList: [
        { id: 1, statistics: '乱丢垃圾', statisticsNum: 6, src: require('../../../assets/card_images/iconA.png') },
        { id: 2, statistics: '火灾烟感', statisticsNum: 1, src: require('../../../assets/card_images/iconB.png') },
        { id: 3, statistics: '人员倒地', statisticsNum: 0, src: require('../../../assets/card_images/iconC.png') },
        { id: 4, statistics: '乱停车', statisticsNum: 10, src: require('../../../assets/card_images/iconD.png') },
        { id: 5, statistics: '飞线充电', statisticsNum: 4, src: require('../../../assets/card_images/iconE.png') },
        { id: 6, statistics: '高空抛物', statisticsNum: 3, src: require('../../../assets/card_images/iconF.png') },
        { id: 7, statistics: '掩门', statisticsNum: 0, src: require('../../../assets/card_images/iconG.png') },
        { id: 8, statistics: '狗便便', statisticsNum: 2, src: require('../../../assets/card_images/iconH.png') }
      ]
    }
  }
}
</script>

<style  lang="scss" scoped>
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
.intelligent-container{
  position: relative;
      margin-top: 20px;
  }
.intelligent-card{
     width: 90px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    border: 2px dotted #2e6afe;
    height: 90px;
    border-radius: 10px;
    margin: 0 auto;
    background-color: #b1c7fe;
    box-shadow: 0 0 5px #94c9ff;
    cursor: pointer;
    position: relative;
    img{
transform: rotate(-45deg);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    margin-top: -20px;
    margin-left: -20px;
      }
    }

    .intelligent-cardText{
        text-align: center;
    margin-top: 30px;
    p{
          margin: 0;
    margin-bottom: 5px;
    }
    }
</style>
