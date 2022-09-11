<template>
  <div class="container">
    <transition
      @after-leave="afterLeave"
      leave-active-class="login-enter-active"
      >
      <div class="login" v-if="!logining">
        <div class="login-top">
          登录
        </div>
        <div class="login-center clearfix">
          <div class="login-center-img"><img src="/assets/name.png"></div>
          <div class="login-center-input">
            <input type="text" v-model="wxid" placeholder="请输入您的用户名" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的用户名'">
            <div class="login-center-input-text">用户名</div>
          </div>
        </div>
        <div class="login-center clearfix">
          <div class="login-center-img"><img src="/assets/password.png"></div>
          <div class="login-center-input">
            <input type="password" v-model="password" placeholder="请输入您的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的密码'">
            <div class="login-center-input-text">密码</div>
          </div>
        </div>

        <div class="login-button" @click="handleLogin">
          登录
        </div>
      </div>
    </transition>
    <transition
      enter-active-class="sk-rotating-plane-active"
      >
      <div v-if="logining1" class="sk-rotating-plane"></div>
    </transition>
  </div>
</template>

<script>
import '../css/login.less'
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      logining: false,
      logining1: false,
      wxid: 'admin',
      password: '123'
    }
  },
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    ...mapActions(['login']),
    afterLeave () {
      // console.log('afterEnter')
      this.logining1 = true
    },
    handleLogin () {
      this.logining = true
      this.login({
        wxid: this.wxid,
        password: this.password
      })

      // this.logining = true
      // const { data } = await http.post('/login', {
      //   wxid: this.wxid,
      //   password: this.password
      // })
      // if (data.success) {
      //   this.logining = false
      //   this.$router.push('/chat')
      //   // 存储当前登录的用户
      //   localStorage.setItem('user', data.user)
      // } else {
      //   alert(data.message)
      // }
    }
  }
}
</script>

<style>
</style>
