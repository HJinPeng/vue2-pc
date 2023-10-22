<template>
  <AppPage>
    <BaseCard>
      <BaseSearch :disabled="loading" @search="onSearch" @reset="onReset">
        <a-input placeholder="菜单名称"></a-input>
        <a-input placeholder="组件名称"></a-input>
      </BaseSearch>
    </BaseCard>
    <BaseCard title="菜单管理">
      <template #extra>
        <a-button type="primary">新增</a-button>
      </template>
      <div>basecard2</div>
    </BaseCard>
  </AppPage>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    onSearch() {
      console.log('onSearch')
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    },
    onReset() {
      console.log('onReset')
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  }
}
</script>
