import { AppPage } from '@/components/page'
import { BaseIcon } from '@/components/icon'

const registerComponents = {
  install: (Vue) => {
    Vue.component('AppPage', AppPage)
    Vue.component('BaseIcon', BaseIcon)
  }
}

export default registerComponents
