<template>
  <div class="app-header">
    <AppLogo v-if="!hideLogo" />
    <div class="app-header__main">
      <div class="app-header__left">
        <a-icon type="home" @click="goWelcome" />
      </div>
      <div class="app-header__right">
        <span class="app-header__docs">说明文档</span>
        <UserPopover />
      </div>
    </div>
  </div>
</template>

<script>
import UserPopover from './UserPopover.vue'
export default {
  props: {
    hideLogo: Boolean
  },
  components: {
    AppLogo: () => import('./AppLogo.vue'),
    UserPopover
  },
  methods: {
    goWelcome() {
      this.$router.push({ name: 'Welcome' })
    }
  }
}
</script>

<style lang="less">
.app-header {
  display: flex;
  width: 100%;
  height: 64px;
  background: #fff;
  border-bottom: solid 1px #e6e6e6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  &__home {
    font-size: 24px;
    color: #c0c4cc;
    cursor: pointer;
  }
  &__main {
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 0 36px 0 40px;
  }
  &__left,
  &__right {
    display: flex;
    align-items: center;
  }
  &__right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &__docs {
    margin-right: 24px;
  }
}
</style>
