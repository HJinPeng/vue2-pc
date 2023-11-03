<template>
  <AppPage>
    点击面包屑切换
    <br />
    This is SecondView
    <br />
    <router-link
      :to="{
        name: 'TestViewStackThird',
        query: { name: 'from-second' }
      }"
    >
      go ThirdView.vue
    </router-link>
  </AppPage>
</template>
