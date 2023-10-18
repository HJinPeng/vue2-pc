<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="item in ViewStack" :key="item.name">
      <router-link v-if="item.clickable" :to="item.fullPath">{{ item.title }}</router-link>
      <span v-else>{{ item.title }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
import { Breadcrumb } from 'ant-design-vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    [Breadcrumb.name]: Breadcrumb,
    [Breadcrumb.Item.name]: Breadcrumb.Item
  },
  computed: {
    ...mapGetters(['ViewStack'])
  }
}
</script>
