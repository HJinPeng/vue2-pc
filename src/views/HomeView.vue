<template>
  <div class="home">
    <a-button>按钮</a-button>
    <a-input></a-input>
    <a-select :options="[{ label: 'label', value: '1' }]">
      <!-- <a-select-option :value="1">label</a-select-option> -->
    </a-select>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
