import { AppPage } from '@/components/page'

const registerComponents = {
  install: (Vue) => {
    Vue.component('AppPage', AppPage)
  }
}

export default registerComponents
