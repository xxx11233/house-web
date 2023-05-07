import { createContext, useReducer } from 'react'

const appState = {
  count: 0
}

export const AppContext = createContext(appState)

function reducer(state, action) {
  switch (action.type) {
    case 'addCount':
      return { ...state, count: state.count + 1 }
    default:
      throw new Error()
  }
}

export function useAppReducer() {
  const [state, dispatch] = useReducer(reducer, appState)
  const method = (type, state) => dispatch({ type, payload: state })
  return { ...state, dispatch: method }
}