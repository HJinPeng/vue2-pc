<template>
  <div class="app-page">
    <a-breadcrumb v-if="!hideBreadcrumb" class="app-page__breadcrumb">
      <a-breadcrumb-item v-for="item in breadcrumbs" :key="item.id">
        {{ item.title }}
      </a-breadcrumb-item>
    </a-breadcrumb>
    <div class="app-page__body">
      <slot />
    </div>
  </div>
</template>

<script>
import { Breadcrumb } from 'ant-design-vue'
export default {
  props: {
    hideBreadcrumb: Boolean
  },
  components: {
    [Breadcrumb.name]: Breadcrumb,
    [Breadcrumb.Item.name]: Breadcrumb.Item
  },
  data() {
    return {
      breadcrumbs: [{ title: '首页', id: 1 }]
    }
  }
  // watch: {
  //   $route: {
  //     immediate: true,
  //     handler(route) {
  //       this.breadcrumbs = route.meta.fullPath
  //     }
  //   }
  // }
}
</script>

<style lang="less">
.app-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 20px 0;
  &__breadcrumb {
    margin-bottom: 16px;
  }
  &__body {
    flex: 1;
    padding: 16px;
    overflow: auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 4px #edf0f4;
  }
}
</style>
