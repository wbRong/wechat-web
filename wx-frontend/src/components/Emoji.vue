<template>
  <div class="emoji">
    <i @click="handleShow" class="icon iconfont icon-look"></i>
    <div class="emojiBox" v-show="modelValue">
      <li
        v-for="item in emojis"
        :key="item.code"
        @click="handleClick(item.code)"
        >
        <img :title="item.title" :src="'/assets/emoji/' + item.file" :data="item.code">
      </li>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['modelValue'],
  emits: ['update:modelValue', 'update'],
  methods: {
    handleShow () {
      this.$emit('update:modelValue', true)
    },
    handleClick (code) {
      this.$emit('update', code)
    }
  },
  computed: {
    ...mapState(['emojis'])
  }
}
</script>

<style>

</style>