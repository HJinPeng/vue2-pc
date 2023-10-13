<template>
  <a-popover v-model="showPopover" placement="bottom" trigger="click" class="user-popover">
    <template slot="content">
      <div class="user-popover__content">
        <div @click="logout">退出登录</div>
      </div>
    </template>
    <div class="user-popover__userinfo">
      <span class="user-popover__username">{{ UserInfo.realname }}</span>
      <a-icon
        type="down"
        class="user-popover__arrow"
        :class="showPopover && 'user-popover__arrow--rotate'"
      />
    </div>
  </a-popover>
</template>

<script>
import { Popover } from 'ant-design-vue'
export default {
  components: {
    [Popover.name]: Popover
  },
  data() {
    return {
      showPopover: false,
      UserInfo: {
        realname: '管理员'
      }
    }
  },

  methods: {
    logout() {}
  }
}
</script>

<style lang="less">
.user-popover {
  &__userinfo {
    display: flex;
    align-items: center;
  }
  &__username {
    margin-right: 6px;
  }
  &__arrow {
    transition: transform 0.3s;
    &--rotate {
      transform: rotate(180deg);
    }
  }
  &__content {
    > div {
      text-align: center;
    }
  }
}
</style>
