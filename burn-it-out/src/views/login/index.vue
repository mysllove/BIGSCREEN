<template>
  <div class="warpper">
    <Video />
    <div class="login-container">
      <el-form ref="loginForm"
               :model="loginForm"
               :rules="loginRules"
               class="login-form"
               auto-complete="on"
               label-position="left">
        <div class="title-container">
          <h3 class="title">
            <svg width="100%"
                 height="80">
              <text v-for="(textValue,index) in text"
                    :key="index"
                    text-anchor="middle"
                    x="50%"
                    y="80%"
                    :class="[textClass,textClass+'-'+(index+1)]">{{textValue.message}}</text>
            </svg>
          </h3>
        </div>

        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input ref="username"
                    v-model="loginForm.username"
                    placeholder="Username"
                    name="username"
                    type="text"
                    tabindex="1"
                    auto-complete="on" />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input :key="passwordType"
                    ref="password"
                    v-model="loginForm.password"
                    :type="passwordType"
                    placeholder="Password"
                    name="password"
                    tabindex="2"
                    auto-complete="on"
                    @keyup.enter.native="handleLogin" />
          <span class="show-pwd"
                @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>

        <el-button :loading="loading"
                   type="primary"
                   style="width:100%;margin-bottom:30px;"
                   @click.native.prevent="handleLogin">Login</el-button>
        <div class="tips">
          <span style="margin-right:20px;">username: admin</span>
          <span>password: any</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import Video from './mp4/Video'
import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  components: { Video },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    const thisValue = '就此燃尽'
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      textClass: 'text',
      text: [
        { message: thisValue },
        { message: thisValue },
        { message: thisValue },
        { message: thisValue }
      ],
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
input[type="text"] + label[placeholder]:before {
  content: attr(placeholder);
  display: inline-block;
  margin: 0 calc(1em + 2px);
  padding: 0 2px;
  color: #898989;
  white-space: nowrap;
  transition: 0.3s ease-in-out;
  background-image: linear-gradient(to bottom, #fff, #fff);
  background-size: 100% 5px;
  background-repeat: no-repeat;
  background-position: center;
}
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;
      &:-webkit-autofill {
        -webkit-text-fill-color: #ffffff !important;
        transition: background-color 5000s ease-in-out 0s !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
.el-input__inner:hover {
  cursor: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/normal.cur),
    auto;
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  position: relative;
  z-index: 999;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 20px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}

.text {
  font-size: 42px;
  font-weight: bold;
  letter-spacing: 1em;
  text-transform: uppercase;
  fill: none;
  stroke-width: 2px;
  stroke-dasharray: 90 310;
  animation: stroke 6s infinite linear;
}
.text-1 {
  stroke: #1aa7b9;
  text-shadow: 0 0 5px #1aa7b9;
  animation-delay: -1.5s;
}
.text-2 {
  stroke: #f39c12;
  text-shadow: 0 0 5px #f39c12;
  animation-delay: -3s;
}
.text-3 {
  stroke: #e74c3c;
  text-shadow: 0 0 5px #e74c3c;
  animation-delay: -4.5s;
}
.text-4 {
  stroke: #494baa;
  text-shadow: 0 0 5px #494baa;
  animation-delay: -6s;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}
.svgText {
  width: 600px;
  margin: 0 auto;
}
.svgText h3 {
  font-size: 18px;
  color: #333;
  line-height: 2;
}
.svgText p {
  font-size: 16px;
  color: #888;
  line-height: 2;
}
.svgText p a,
.svgText p a:hover {
  color: #01a6fc;
  font-weight: 600;
}
.svgText ul li {
  font-size: 16px;
  color: #888;
  line-height: 2;
}
</style>
