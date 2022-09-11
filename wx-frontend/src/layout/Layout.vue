<template>
  <div id="app">
    <div class="container">
      <!-- 侧边栏 -->
      <div class="sidebar">
        <section>
          <header>
            <img :src="`/assets/face/` + user.icon" class="avatar">
          </header>
          <nav>
            <router-link to="/chat" class="icon iconfont icon-msg"></router-link>
            <router-link to="/friends" class="icon iconfont icon-friend"></router-link>
            <router-link to="/collection" class="icon iconfont icon-collection"></router-link>
          </nav>
          <footer>
            <i class="icon iconfont icon-more" @click="clearFn"></i>
          </footer>
        </section>
      </div>
      <div class="main">
        <!-- 主内容区域 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['recentFriends', 'user'])
  },
  methods: {
    ...mapMutations(['loadRecentFriends']),
    ...mapActions(['loadFriends']),
    clearFn(){
      localStorage.removeItem("user");
      this.$router.push('/login')
    }
  },
  async created () {
    this.loadRecentFriends()
    await this.loadFriends()
  }
}
</script>

<style>

</style>