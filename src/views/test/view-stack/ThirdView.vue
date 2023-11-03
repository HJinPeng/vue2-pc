<template>
  <AppPage>
    点击面包屑切换
    <br />
    This is ThirdView
    <br />
    <router-link
      :to="{
        name: 'TestViewStackFourth',
        params: { id: '200' }
      }"
    >
      go FourthView.vue
    </router-link>
  </AppPage>
</template>
