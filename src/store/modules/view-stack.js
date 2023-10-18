export default {
  state: {
    viewStack: []
  },
  getters: {},
  mutations: {
    setViewStack(state, payload) {
      state.viewStack = generateViewStack(state.viewStack, payload.to, payload.from)
    }
  },
  actions: {}
}

function generateViewStack(viewStack, to, from) {
  let newStack = []
  console.log('generateViewStack', viewStack, to, from)
  const fullPath = to.meta.fullPath || []
  const parentPath = fullPath.slice(0, fullPath.length)
  if (viewStack.length === 0) {
    newStack = parentPath.map((view) => ({
      ...view,
      fullPath: view.path,
      clickable: false
    }))
    newStack.push({ ...to, title: to.meta.title, clickable: true })
  }
  return newStack
}
