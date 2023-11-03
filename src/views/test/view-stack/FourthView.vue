<template>
  <AppPage>
    点击面包屑切换
    <br />
    This is FourthView
    <br />
    <a @click="$router.go(-1)">back ThirdView.vue</a>
    <br />
    <router-link
      :to="{
        name: 'TestViewStackSecond',
        params: { id: '41' },
        query: { type: 'add', from: 'from-fourth' }
      }"
    >
      go SecondView.vue
    </router-link>
  </AppPage>
</template>
