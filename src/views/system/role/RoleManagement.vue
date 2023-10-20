<template>
  <AppPage>
    <BaseCard>
      <BaseSearch :disabled="loading" @search="onSearch" @reset="onReset">
        <a-input placeholder="请输入角色名称"></a-input>
        <a-input placeholder="请输入角色名称" style="width: 300px"></a-input>
      </BaseSearch>
    </BaseCard>
    <BaseCard title="角色管理">
      <template #extra>
        <a-button type="primary">新增</a-button>
      </template>
      <div>basecard2</div>
    </BaseCard>

    <BaseCard>
      <template #title>
        <a-button type="primary">新增</a-button>
      </template>
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
