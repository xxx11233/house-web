import React from 'react'

const routes = [
  { path: '/', element: React.lazy(() => import('../pages/Home')) },
]

export default routes
