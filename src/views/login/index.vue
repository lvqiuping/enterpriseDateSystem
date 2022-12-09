<template>
  <div>
    <div class="login-container" :style="{backgroundImage: `url(${bgIamge})`}">
      <div class="pt-2"><img class="mx-auto" src="@/assets/login/l1.png" alt="建筑市场服务平台" style="width: 400px"></img></div>
      <div style="margin-top: 150px;" class="m-auto">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form px-20 py-6 m-auto shadow-lg" auto-complete="on" label-position="left">
          <div class="text-center text-2xl my-4 font-semibold" style="color: #2db0fd">用户登录</div>
          <el-form-item prop="userName">
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input
              ref="userName"
              v-model.trim="loginForm.userName"
              placeholder="请输入用户名"
              name="userName"
              type="text"
              tabindex="1"
              auto-complete="on"
            />
          </el-form-item>

          <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="请输入密码"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </el-form-item>
          <div style="margin-bottom: 1rem;">
            <Vcode :show="isShow" @success="onSuccess" @close="onClose" @fail="onFail" />
            <el-button
              style="border: 1px solid rgba(255, 255, 255, 0.5);
            border: 1px solid #DFDFDF;
            border-radius: 5px;
            color: #bbb;"
              @click="startCaptcha"
            >点击验证</el-button>
          </div>
          <el-button :loading="loading" type="primary" round class="w-full" @click.native.prevent="handleLogin">登 录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { validateUsername, validatePassword } from '@/utils/validator'
import Vcode from 'vue-puzzle-vcode'
import { TipsBox } from '@/utils/feedback'
export default {
  name: 'Login',
  components: {
    Vcode
  },
  data() {
    return {
      bgIamge: require('@/assets/login/l2.png'),
      loginForm: {
        userName: '',
        password: ''
      },
      loginRules: {
        userName: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      isShow: false,
      captcha: false
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
    formataJson(params) {
      const formData = new FormData()
      Object.keys(params).forEach((key) => {
        formData.append(key, params[key])
      })
      return formData
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (!this.captcha) {
            TipsBox('warning', '验证码未通过')
            return false
          }
          this.loading = true
          const parmas = `userName=${this.loginForm.userName}&password=${this.loginForm.password}`
          this.$store.dispatch('user/login', parmas).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    startCaptcha() {
      this.isShow = true
    },

    onSuccess(msg) {
      this.isShow = false // 通过验证后，需要手动关闭模态框
      this.captcha = true
    },

    onFail(e) {
      this.captcha = false
    },

    onClose() {
      this.isShow = false
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#fff;
$light_gray:#333;
$cursor: #333;

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
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border-bottom: 1px solid #DFDFDF;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#fff;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 120% 100%;
  .login-form {
    width: 440px;
    height: 440px;
    background-color: #fff;
    border-radius: 5%;
    
  }

  .tips {
    font-size: 14px;
    color: #889aa4;
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
      margin: 0px auto 40px auto;
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
</style>
