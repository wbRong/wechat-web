<template>
  <div class="wrapper">
    <div class="search-wrapper">
      <input ref="myinput" @keyup.enter="handleEnter" type="text" @input="handleSearch" v-model="searchValue" class="searchInput" placeholder="搜索">
      <i v-if="!searchValue" class="icon iconfont icon-search"></i>
      <div v-else class="searchInput-delete" @click="handleClear"></div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['search', 'clear'],
  data () {
    return {
      searchValue: ''
    }
  },
  methods: {
    handleSearch () {
      // 触发search事件，把搜索的值传给父组件
      this.$emit('search', this.searchValue)
    },
    handleClear () {
      this.searchValue = ''
      this.$refs.myinput.focus()
      this.$emit('clear')
    },
    handleEnter () {
      this.$emit('enter')
    }
  }
}
</script>

<style>

</style>