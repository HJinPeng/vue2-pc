import { Button, Select, Option, Input } from 'element-ui'

const components = [Button, Select, Option, Input]

const elementui = {
  install: (Vue) => {
    components.forEach((comp) => {
      Vue.use(comp)
    })
  }
}

export default elementui
