<template>
  <div class="login-view">
    <div class="login-view__left">
      <div class="login-view__system-name">
        <h1 class="login-view__title">报告结构化工具</h1>
        <h1 class="login-view__subtitle">管理后台</h1>
      </div>
      <img src="@/assets/images/logo.png" alt="报告结构化工具" class="login-view__img" />
      <div class="login-view__copyright">© KingMed Diagnositics 2022 - 2023</div>
    </div>
    <div class="login-view__right">
      <template v-if="ticket">
        <div class="login-view__login-text">正在登录...</div>
      </template>
      <template v-else>
        <div class="login-view__login-text">欢迎登录</div>
        <div class="login-view__login-form">
          <el-input
            v-model="model.account"
            placeholder="用户名"
            clearable
            autofocus
            size="medium"
            class="login-view__login-input"
          ></el-input>
          <el-input
            v-model="model.password"
            placeholder="密码"
            show-password
            clearable
            size="medium"
            class="login-view__login-input"
          ></el-input>
          <el-button :loading="loading" class="login-view__login-btn" @click="loginByAccount"
            >登录</el-button
          >
        </div>
        <el-button class="login-view__login-btn" @click="goOA">OA登录</el-button>
      </template>
    </div>
  </div>
</template>

<script>
import { getServiceUrl2OA, goOA } from '@utils/tool'
import { RoleSelect } from '@/components/role-select'
import { postApplyAccount } from '@/api/auth'
export default {
  data() {
    return {
      loading: false,
      model: {
        account: undefined,
        password: undefined
      },
      roles: [],
      ticket: ''
    }
  },
  mounted() {
    this.ticket = this.getTicket()
    this.ticket && this.loginByTicket()
  },
  methods: {
    /**
     * 获取ticket, hash模式下oa返回的只能截取，history可以通过route获取
     */
    getTicket() {
      let ticket
      if (process.env.VUE_APP_ROUTER_MODE === 'hash') {
        let search = location.search
        if (search.length) {
          const queryArr = search.substring(1).split('&')
          for (let query of queryArr) {
            const [key, value] = query.split('=')
            if (key === 'ticket') {
              ticket = value
              break
            }
          }
        }
      } else {
        ticket = this.$route.query.ticket
      }
      return ticket
    },
    loginByTicket() {
      this.$store
        .dispatch('loginByOA', this.ticket)
        .then(() => {
          this.$message.success('登录成功')
          this.goWelcomePage()
        })
        .catch((err) => {
          if (err.data.result?.code === 'unregistered' || err.data.result?.code === 'pending') {
            this.$confirm(
              err.data.result?.code === 'unregistered'
                ? '您尚未注册，是否提交注册申请'
                : '注册审核中，是否重新提交注册申请',
              '提示',
              {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                closeOnClickModal: false
              }
            )
              .then(() => {
                this.$msgbox({
                  title: '选择角色',
                  message: (
                    <RoleSelect
                      value={this.roles}
                      multiple
                      style="width: 100%"
                      onChange={(val) => {
                        this.roles = val
                      }}
                    ></RoleSelect>
                  ),
                  showCancelButton: true,
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  closeOnClickModal: false,
                  beforeClose: (action, instance, done) => {
                    if (action === 'confirm') {
                      if (this.roles.length === 0) {
                        this.$message.error('请选择至少一个角色')
                        return
                      }
                      instance.confirmButtonLoading = true
                      instance.confirmButtonText = '提交中...'
                      postApplyAccount({
                        account: err.data.result?.account,
                        roleIds: this.roles
                      })
                        .then(() => {
                          this.$message.success('申请已提交，等待管理员审核，返回登录页')
                        })
                        .finally(() => {
                          done()
                        })
                    } else {
                      done()
                    }
                  }
                }).finally(() => {
                  this.reloadLoginPage()
                })
              })
              .catch(() => {
                this.reloadLoginPage()
              })
          } else {
            this.reloadLoginPage()
          }
        })
    },
    /**
     * 通过账号密码登录
     */
    loginByAccount() {
      if (!this.model.account || !this.model.password) {
        this.$message.error('账号密码不能为空')
        return
      }
      this.loading = true
      this.$store
        .dispatch('loginByAccount', this.model)
        .then(() => {
          this.$message.success('登录成功')
          this.goWelcomePage()
        })
        .finally(() => {
          this.loading = false
        })
    },
    /**
     * 重新加载登录页，去掉ticket
     */
    reloadLoginPage() {
      if (process.env.VUE_APP_ROUTER_MODE === 'hash') {
        setTimeout(() => {
          location.href = getServiceUrl2OA()
        }, 1000)
      } else {
        this.$router.push({ name: 'Login' })
        this.ticket = ''
        this.model = {
          account: undefined,
          password: undefined
        }
        this.roles = []
      }
    },
    /**
     * 跳转到欢迎页
     *   如果是hash模式，从oa跳转回来在#/前面会有一串ticket，需要使用location.href去掉
     *   如果是history模式，则直接router跳转
     */
    goWelcomePage() {
      if (process.env.VUE_APP_ROUTER_MODE === 'hash') {
        location.href = `${location.origin}` + '/'
      } else {
        this.$router.push({ name: 'Welcome' })
      }
    },
    goOA
  }
}
</script>

<style lang="scss" scoped>
.login-view {
  display: flex;
  height: 100%;
  background-color: #e1e8ed;
  &__left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 700px;
    height: 100%;
  }
  &__right {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 65%;
    height: 100%;
    background-color: #fff;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  &__system-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 160px;
    font-size: 28px;
    color: #67757f;
    letter-spacing: 2px;
  }
  &__img {
    width: 40%;
  }
  &__copyright {
    margin-bottom: 32px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
  }
  &__login-text {
    margin-bottom: 36px;
    font-size: 36px;
    color: #67757f;
  }
  &__login-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;
  }
  &__login-input {
    width: 404px;
    margin-bottom: 24px;
  }
  &__login-btn {
    width: 404px;
    // height: 30px;
    font-size: 18px;
    color: #fff;
    background-color: #aab8c2;
    transition: background-color 0.3s;
    &:hover {
      background-color: #656d73;
    }
  }
}
</style>
