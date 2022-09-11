  <!-- 聊天窗口 -->
<template>
  <div class="container">
    <div class="user-list">
      <!-- 搜索框 -->
      <search @clear="handleClear" @search="handleSearch"></search>
      <!-- 聊天用户列表 -->
      <div class="msg-list">
        <ul>
          <li
            v-for="(item, index) in searchList"
            :key="item.id"
            class="session-list"
            @click="handleClickFriend(index)"
            :class="{ active: selectedIndex === index }">
            <div class="list-left">
              <img
                width="42"
                height="42"
                :alt="item.user.nickname" :src="'/assets/face/' + item.user.icon" class="avatar">
            </div>
            <div class="list-right">
              <p class="name">{{ item.user.nickname }}</p>
              <span class="time">{{ getLastTime(item) }}</span>
              <p class="last-msg">{{ getLastMsg(item) }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="chat-list">
      <!-- 聊天内容区域 -->
      <div class="message">
        <!-- 聊天框头部 -->
        <header class="header">
          <div class="friendname">{{ currentUser.nickname }}</div>
        </header>
        <div class="message-wrapper" ref="wrap">
          <ul>
            <li
              v-for="(msg, index) in currentMsgs"
              :key="index"
              class="message-item">
              <div class="time" v-if="!isSameTime(getTime(msg.time))"><span>{{ getTime(msg.time) }}</span></div>
              <div class="message-main" :class="{ self: msg.self }">
                <img width="36" height="36"
                  :src="msg.self ? '/assets/face/' + user.icon : '/assets/face/' + currentUser.icon" class="avatar">
                <div class="content">
                  <div class="text" v-html="replaceEmoji(msg.content)"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 消息发送区 -->
      <div class="send-text">
        <!-- emoji -->
        <emoji @update="handleEmoji" v-model="showEmoji"></emoji>
        <!-- 发送消息框 -->
        <textarea @click="showEmoji=false" @keyup.enter="handleSend" v-model="content"></textarea>
        <div class="send" @click="handleSend">
          <span>发送(Enter)</span>
        </div>
        <div class="warn" v-show="showWarn">
          <div class="description">不能发送空白信息</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import '../css/chat.less'
import Search from '../components/Search.vue'
import Emoji from '../components/Emoji.vue'
import { mapMutations, mapState } from 'vuex'
import { io } from 'socket.io-client'

export default {
  components: {
    Search,
    Emoji
  },
  data () {
    return {
      socket: null,
      showEmoji: false,
      showWarn: false,
      // 绑定评论文本框
      content: '',
      selectedIndex: 0,
      searchValue: '',
      preTime: ''
    }
  },
  mounted () {
    this.$refs.wrap.scrollTop = this.$refs.wrap.scrollHeight

    // 'https://damp-brushlands-96654.herokuapp.com'
    // 'http://127.0.0.1:5000'
    this.socket = io('http://127.0.0.1:5000', {
      path: '/mychat',
      // transports: ['polling', 'websocket'],
      transports: ['websocket'],
      query: {
        user: JSON.stringify(this.user)
      }
    })
    this.socket.on('connect', () => {
      console.log(this.socket.id)
    })
    this.socket.on('disconnect', () => {
      // console.log(this.socket)
    })
    // 接收服务器返回的消息
    this.socket.on('message', ({ from, to, content, type }) => {
      console.log(from, to, content, type)
      let recentFriend = this.recentFriends.find(f => f.user.id === from)
      if (!recentFriend) {
        // recentFriend = this.friends.find(f => f.users.id === from)

        for (let i = 0; i < this.friends.length; i++) {
          const f = this.friends[i]
          recentFriend = f.users.find(u => u.id === from)
          if (recentFriend) {
            break
          }
        }
        
        recentFriend = {
          id: recentFriend.id,
          user: {
            nickname: recentFriend.nickname,
            icon: recentFriend.icon,
            id: recentFriend.id,
            robot: recentFriend.robot
          },
          messages: []
        }
        
        this.addRecentFriend(recentFriend)
      }
      recentFriend.messages.push({
        self: false,
        content: content,
        time: new Date()
      })

      this.$nextTick(() => {
        this.$refs.wrap.scrollTop = this.$refs.wrap.scrollHeight
      })
      window.localStorage.setItem('recent' + this.user.id, JSON.stringify(this.recentFriends))
    })
    
  },
  unmounted () {
    this.socket.disconnect()
  },
  computed: {
    ...mapState(['user', 'recentFriends', 'emojis', 'friends']),
    currentMsgs () {
      const messages = this.searchList[this.selectedIndex]?.messages
      return messages ? messages : []
    },
    currentUser () {
      const user = this.searchList[this.selectedIndex]?.user
      return user ? user : {}
      // if (this.selectedIndex > 0) {
      //   return this.searchList[this.selectedIndex].user
      // } else {
      //   return ''
      // }
    },
    // 搜索最近的好友列表
    searchList () {
      return this.recentFriends.filter(item => {
        return item.user.nickname.startsWith(this.searchValue)
      })
    }
  },
  methods: {
    ...mapMutations(['addRecentFriend']),
    // handleEnter () {
    //   if (this.searchList.length > 0) {
    //     this.selectedIndex = this.searchList[0]
    //     this.$nextTick(() => {
    //       this.$refs.wrap.scrollTop = this.$refs.wrap.scrollHeight
    //     })

    //     console.log(this.searchList)
    //   }
    // },
    handleClickFriend (index) {
      this.selectedIndex = index
      this.$nextTick(() => {
        this.$refs.wrap.scrollTop = this.$refs.wrap.scrollHeight
      })
    },
    getLastTime (item) {
      const time = item.messages[item.messages.length - 1]?.time
      return time ? this.getTime(time) : ''
    },
    getLastMsg (item) {
      return item.messages[item.messages.length - 1]?.content
    },
    // 输入emoji
    handleEmoji (code) {
      this.content += code
    },
    // 搜索功能
    handleSearch (v) {
      this.searchValue = v
    },
    getTime (time) {
      return dayjs(time).format('HH:mm')
    },
    // 发表评论
    handleSend () {
      if (this.content.trim().length === 0) {
        this.showWarn = true
        setTimeout(() => {
          this.showWarn = false
        }, 2000)
        this.content = ''
        return
      }
      if (!this.currentUser.icon) return alert('请选择要聊天的好友')
      this.currentMsgs.push({
        self: true,
        content: this.content,
        time: new Date()
      })
      this.socket.emit('message', {
        from: this.user.id,
        to: this.currentUser.id,
        content: this.content,
        type: 'user'
      })

      this.$nextTick(() => {
        this.$refs.wrap.scrollTop = this.$refs.wrap.scrollHeight
      })
      this.content = ''
      window.localStorage.setItem('recent' + this.user.id, JSON.stringify(this.recentFriends))
    },
    replaceEmoji (content) {
      if (content.includes('/:')) {
          this.emojis.forEach ((e) => {
            content = content.replace(e.reg, '<img src="/assets/emoji/' + e.file +'"  alt="" style="vertical-align: middle; width: 24px; height: 24px" />')
          })
      }
      return content;
    },
    handleClear () {
      this.searchValue = ''
    },
    isSameTime (time) {
      if (this.preTime === time) {
        return true
      } else {
        // this.preTime = time
        return false
      }
    }
  }
}
</script>

<style>

</style>