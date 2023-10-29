<template>
  <div @click="onClick">123</div>
</template>

<script>
import { getUserPageApi, deleteUserByIdApi } from '@/api/user'
export default {
  methods: {
    onClick() {
      getUserPageApi({ pageNo: 1, pageSize: 10 })
    }
  }
}
</script>
