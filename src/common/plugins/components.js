import { AppPage } from '@/components/page'
import { BaseIcon } from '@/components/icon'
import { BaseCard } from '@/components/card'

const registerComponents = {
  install: (Vue) => {
    Vue.component('AppPage', AppPage)
    Vue.component('BaseIcon', BaseIcon)
    Vue.component('BaseCard', BaseCard)
  }
}

export default registerComponents
