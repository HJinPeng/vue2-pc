import { Button, Select, Input, Icon } from 'ant-design-vue'
const components = {
  [Button.name]: Button,
  [Select.name]: Select,
  [Select.Option.name]: Select.Option,
  [Input.name]: Input,
  [Icon.name]: Icon
}

const antdv = {
  install: (Vue) => {
    for (let comp in components) {
      Vue.component(comp, components[comp])
    }
  }
}

export default antdv
