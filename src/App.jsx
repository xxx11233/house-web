import Header from '@/components/Header'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/reset.css'
import './styles/index.less'

import RouteList from './router'
import { AppContext, useAppReducer } from './store'

const App = () => {
  const store = useAppReducer()
  return (
    <AppContext.Provider value={store}>
      <BrowserRouter>
        <Header />
        <RouteList />
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
