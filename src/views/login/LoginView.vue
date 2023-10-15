<template>
  <div class="login-view">
    <div class="form">
      <img src="@/assets/images/logo.png" alt="logo" class="logo" />
      <h1>{{ title }}</h1>
      <a-input v-model="model.account" placeholder="账号" allow-clear auto-focus>
        <a-icon slot="prefix" type="user" />
      </a-input>
      <a-input-password v-model="model.password" placeholder="密码" allow-clear>
        <a-icon slot="prefix" type="lock" />
      </a-input-password>
      <a-button type="primary" :loading="loading" block @click="onLogin">登录</a-button>
    </div>
  </div>
</template>

<script>
import { Input } from 'ant-design-vue'
import { mapActions } from 'vuex'

export default {
  components: {
    [Input.Password.name]: Input.Password
  },
  data() {
    return {
      title: process.env.VUE_APP_TITLE,
      loading: false,
      model: {
        account: undefined,
        password: undefined
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    onLogin() {
      this.loading = true
      this.login(this.model)
        .then((res) => {
          console.log('res', res)
          this.$router.push({ name: 'Welcome' })
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="less" scoped>
.login-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #fff;
  .logo {
    width: 60px;
    height: 60px;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    margin-top: -150px;
    background-color: #fff;
    > * {
      margin-bottom: 12px;
    }
  }
}
</style>
