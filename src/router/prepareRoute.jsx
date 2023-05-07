import React, { Suspense } from 'react'
import { Navigate } from 'react-router-dom'

import config from './config'

import beforeRoute from './beforeRoute'

const Auth = ({ children }) => {
  const [isPass, path] = beforeRoute()
  if (!isPass) return <Navigate to={path} />
  return <Suspense fallback={<div>路由懒加载...</div>}>{children}</Suspense>
}

function routeItem(item) {
  const Page = item.element
  return {
    path: item.path,
    element: (
      <Auth>
        <Page />
      </Auth>
    ),
  }
}

function prepareRoutes() {
  return config.map((item) => {
    let children = []
    if (item.children) {
      children = item.children.map((i) => routeItem(i))
    }
    return { ...routeItem(item), children }
  })
}

export default prepareRoutes
