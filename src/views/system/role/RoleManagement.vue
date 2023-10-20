<template>
  <AppPage>
    <BaseCard>
      <div>basecard</div>
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
export default {}
</script>
