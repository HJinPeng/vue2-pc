import { AppPage } from '@/components/app-page'
import { BaseIcon } from '@/components/base-icon'
import { BaseCard } from '@/components/base-card'

const registerComponents = {
  install: (Vue) => {
    Vue.component('AppPage', AppPage)
    Vue.component('BaseIcon', BaseIcon)
    Vue.component('BaseCard', BaseCard)
  }
}

export default registerComponents
