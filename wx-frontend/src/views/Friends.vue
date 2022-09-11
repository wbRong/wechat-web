<template>
  <div class="container">
    <!-- 好友列表 -->
    <div class="friend-wrapper">
      <!-- 搜索框 -->
      <search @clear="handleClear" @search="handleSearch"></search>
      <!-- 好友列表 -->
      <div class="friend-list">
        <ul>
          <!-- <li class="friend-item">
            <div class="list-title">新的朋友</div>
            <div class="friend-info"><img width="36" height="36"
                src="../assets/newfriend.jpg" class="avatar">
              <div class="remark">新的朋友</div>
            </div>
          </li> -->
          <li
            v-for="item in searchList"
            :key="item.letter"
            class="friend-item">
            <div class="list-title">{{ item.letter }}</div>
            <div
              v-for="user in item.users"
              :key="user.id"
              class="friend-info"
              @click="handleSelectedUser(user)"
              :class="{ active: user.id === selectedUserId }">
              <img width="36" height="36"
                :src="'/assets/face/' + user.icon" class="avatar">
              <div class="remark">{{ user.remark }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="friend-info">
      <!-- 好友详情 -->
      <div class="info-wrapper">
        <div class="friend-info" v-if="currentUser">
          <div class="es-info" >
            <div class="left">
              <div class="people">
                <div class="nickname">{{ currentUser.nickname }}</div>
                <div :class="currentUser.sex === 'male' ? 'gender-male' : 'gender-female'"></div>
              </div>
              <div class="signature">{{ currentUser.summary }}</div>
            </div>
            <div class="right">
              <img class="avatar" width="60" height="60" :src="'/assets/face/' + currentUser.icon">
            </div>
          </div>
          <div class="detInfo">
            <div class="remark"><span>备&nbsp;&nbsp;&nbsp;注</span>{{ currentUser.remark }}</div>
            <div class="area"><span>地&nbsp;&nbsp;&nbsp;区</span>{{ currentUser.area }}</div>
            <div class="wxid"><span>微信号</span>{{ currentUser.wxid }}</div>
          </div>
          <div class="send" @click="handleSend">
            <span>发消息</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../css/friend.less'
import Search from '../components/Search.vue'
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  components: {
    Search
  },
  data () {
    return {
      searchValue: '',
      selectedUserId: 0,
    }
  },
  computed: {
    ...mapState(['friends']),
    currentUser () {
      // 根据userId返回用户信息
      let user = null
      for (let i = 0; i < this.friends.length; i++) {
        const friend = this.friends[i]
        user = friend.users.find(u => {
          return u.id === this.selectedUserId
        })
        if (user) break
      }
      return user
    },
    searchList () {
      const friends = []
      for (let i = 0; i < this.friends.length; i++) {
        const friend = this.friends[i]
        
        let users = friend.users.filter(u => {
          return u.nickname.startsWith(this.searchValue)
        })
        
        if (users.length > 0) {
          friends.push({
            letter: friend.letter,
            users: users
          })
        }
      }
      if (friends.length > 0) {
        this.selectedUserId = friends[0].users[0]?.id
      }
      return friends
    }
  },
  async created () {
    
    if (this.friends.length > 0) {
      this.selectedUserId = this.friends[0].users[0]?.id
    }
  },
  methods: {
    ...mapMutations(['addRecentFriend']),
    handleSearch (v) {
      this.searchValue = v
    },
    handleSelectedUser (user) {
      this.selectedUserId = user.id
    },
    handleClear () {
      this.searchValue = ''
    },
    handleSend () {
      const user = this.currentUser
      this.addRecentFriend({
        id: user.id,
        user: {
          nickname: user.nickname,
          icon: user.icon,
          id: user.id,
          robot: user.robot
        },
        messages: []
      })
      this.$router.push('/chat')
    }
  }
}
</script>

<style>

</style>