export function reducer(state, action) {
  switch (action.type) {
    case 'theme': {
      localStorage.setItem('theme', JSON.stringify(!state.theme))
      return { ...state, theme: action.payload }
    }
    default:
      throw new Error('action type not supported')
  }
}
