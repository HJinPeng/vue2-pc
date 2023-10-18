import { Button, Select, Input, Icon, Modal, message, notification } from 'ant-design-vue'

const components = [Button, Select, Input, Icon, Modal]

const antdv = {
  install: (Vue) => {
    components.forEach((component) => {
      Vue.use(component)
    })
    Vue.prototype.$message = message
    Vue.prototype.$info = Modal.info
    Vue.prototype.$success = Modal.success
    Vue.prototype.$error = Modal.error
    Vue.prototype.$warning = Modal.warning
    Vue.prototype.$confirm = Modal.confirm
    Vue.prototype.$notification = notification
  }
}

export default antdv
