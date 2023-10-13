<template>
  <keep-alive :include="viewStack.layout">
    <component :is="$route.meta.layout">
      <keep-alive :include="viewStack.name">
        <router-view />
      </keep-alive>
    </component>
  </keep-alive>
</template>

<script>
export default {
  components: {
    LayoutSimple: () => import('./LayoutSimple.vue'),
    LayoutHeader: () => import('./LayoutHeader.vue'),
    LayoutHeaderSidebar: () => import('./LayoutHeaderSidebar.vue'),
    LayoutSidebarHeader: () => import('./LayoutSidebarHeader.vue')
  },
  computed: {
    viewStack() {
      return {
        layout: [],
        name: []
      }
    }
  }
}
</script>
