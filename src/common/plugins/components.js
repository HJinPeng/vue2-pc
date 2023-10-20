import { AppPage } from '@/components/app-page'
import { BaseIcon } from '@/components/base-icon'
import { BaseCard } from '@/components/base-card'
import { BaseSearch } from '@/components/base-search'

const registerComponents = {
  install: (Vue) => {
    Vue.component('AppPage', AppPage)
    Vue.component('BaseIcon', BaseIcon)
    Vue.component('BaseCard', BaseCard)
    Vue.component('BaseSearch', BaseSearch)
  }
}

export default registerComponents
