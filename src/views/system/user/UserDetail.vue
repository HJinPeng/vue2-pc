<template>
  <AppPage>
    <div @click="goDetail2">用户详情</div>
    <div>query: {{ $route.query }}</div>
  </AppPage>
</template>

<script>
export default {
  created() {
    console.log('created UserDetail')
  },
  mounted() {
    console.log('mounted UserDetail')
  },
  activated() {
    console.log('activated UserDetail')
  },
  deactivated() {
    console.log('deactivated UserDetail')
  },
  methods: {
    goDetail2() {
      this.$router.push({ name: 'UserDetail2', params: { id: 666 }, query: { age: 12 } })
    }
  }
}
</script>
