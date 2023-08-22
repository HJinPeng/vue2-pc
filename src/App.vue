<template>
  <div id="app">
    <a-button>默认按钮</a-button>
    <a-button type="primary">主要按钮</a-button>
    <a-select v-model="value" placeholder="请选择">
      <a-select-option v-for="item in options" :key="item.value" :value="item.value">
        {{ item.label }}
      </a-select-option>
    </a-select>
    <nav style="top: 1px; right: 2px; bottom: 1px">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { getList, getList2 } from '@/api/test'
export default {
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  },
  mounted() {
    getList().then((res) => {
      console.log('res1', res)
    })
    getList2().then((res) => {
      console.log('res2', res)
    })
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
