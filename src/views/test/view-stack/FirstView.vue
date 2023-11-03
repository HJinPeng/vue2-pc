<template>
  <AppPage>
    This is FirstView
    <br />
    <router-link
      :to="{
        name: 'TestViewStackSecond',
        params: { id: '1' },
        query: { type: 'add' }
      }"
    >
      go SecondView.vue
    </router-link>
  </AppPage>
</template>
