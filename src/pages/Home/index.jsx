import React, { useContext } from 'react'
import styles from './index.module.less'
import { AppContext } from '../../store'
export default function index() {
  const { count } = useContext(AppContext)
  return <div className={styles.home}>当前的count：{count}</div>
}
