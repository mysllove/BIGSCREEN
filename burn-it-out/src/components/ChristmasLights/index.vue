<template>
  <div class="christmasLight">
    <div v-for="(skill,key) in process"
         :key="key"
         class="SkillBar">
      <div class="skillProcess">
        <div :class="SkillTip(key)"
             :percentage="skill.processNum"
             :style="{backgroundColor:(
               customColorMethod(skill.processNum)),width:(skill.processNum)+'%'}"
             :data-id="skill.processId">
          <span class="Skill-Area">{{skill.processText}}</span>
          <span v-if="skill.processNum>0"
                class="PercentText">{{skill.processNum}}%</span>
        </div>
      </div>
    </div>
    <el-button icon="el-icon-minus"
               @click="decrease"></el-button>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'
export default {
  data() {
    return {
      percentage: 20,
      ok: '',
      process: [
        { processText: 'Html', processNum: '90' },
        { processText: 'CSS/CSS3', processNum: '65' },
        { processText: 'Js/Jquery', processNum: '40' },
        { processText: 'Vue', processNum: '50' }
      ]
    }
  },
  computed: {
    variables() {
      return variables
    }
  },
  created() {
  },
  methods: {
    decrease() {
      for (var i = 0; i < this.process.length; i++) {
        this.process[i].processNum -= 10
        if (this.process[i].processNum < 0) {
          this.process[i].processNum = 0
        }
      }
    },
    SkillTip: function(key) {
      var style = document.createElement('style')
      style.type = 'text/css'
      var keyFrames = `@-webkit-keyframes Animate${key}{from {width: 20%}to {width: ${this.process[key].processNum}%}}`
      style.innerHTML = keyFrames
      document.getElementsByTagName('head')[0].appendChild(style)
      console.log(style)
      const tip = { SkillTip: true }
      tip[`Animate${key}`] = true
      return tip
    },
    customColorMethod(percentage, index) {
      if (percentage > 80 && percentage < 100) {
        return '#ea8564'
      } else if (percentage > 60 && percentage < 80) {
        return '#42c3ff'
      } else if (percentage > 40 && percentage < 60) {
        return '#6a42ff'
      } else {
        return '#FFC107'
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.SkillBar {
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    border-radius: 10px;
    position: relative;
    background: rgba(17, 17, 17, .3);
}
.skillProcess{
       font-size: 20px;
    font-family: 'Indie Flower', cursive;
    height:100%;
    border-radius: 10px;
    -o-border-radius: 10px;
    -webkit-border-radius: 10px;
    -ms-border-radius: 10px;
    -moz-border-radius: 10px;
}

.SkillTip {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    height:30px;
    border-radius: 10px;
    position: absolute;
    color: #fff;
    font-size: 18px;
    transition: all 1s
}
.PercentText{
  padding-left: 50px
}
.Animate0{
    animation: Animate0 2s;
    -webkit-animation: Animate0 2s;
    -moz-animation: Animate0 2s;
    -o-animation: Animate0 2s;
}

.Animate1{
    animation: Animate1 2s;
    -webkit-animation: Animate1 2s;
    -moz-animation: Animate1 2s;
    -o-animation: Animate1 2s;
}

.Animate2{
    animation: Animate2 2s;
    -webkit-animation: Animate2 2s;
    -moz-animation: Animate2 2s;
    -o-animation: Animate2 2s;
}
.Animate3{
    animation: Animate3 2s;
    -webkit-animation: Animate3 2s;
    -moz-animation: Animate3 2s;
    -o-animation: Animate3 2s;
}
</style>
