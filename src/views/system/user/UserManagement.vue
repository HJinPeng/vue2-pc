<template>
  <AppPage>
    <div>用户管理</div>
    <router-link :to="{ name: 'UserDetail', params: { id: 100 }, query: { name: 'jp' } }"
      >go详情页</router-link
    >
  </AppPage>
</template>
