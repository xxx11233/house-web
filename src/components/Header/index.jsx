import React, { memo, useContext } from 'react'
import { Layout } from 'antd'
import styles from './index.module.less'
import { AppContext } from '../../store'

function index() {
  const { dispatch } = useContext(AppContext)

  return (
    <Layout.Header className={styles.header}>
      <span
        onClick={() => {
          dispatch('addCount')
        }}
      >
        count++
      </span>
    </Layout.Header>
  )
}

export default memo(index)
