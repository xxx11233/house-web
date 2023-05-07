import React, { memo, useContext, useMemo, useState, useEffect } from 'react'
import { Layout, Select } from 'antd'
import styles from './index.module.less'
import { AppContext } from '../../store'
import moment from 'moment'

const weatherList = ['晴', '大雨', '小雨', '雪', '雨加雪', '多云']
function index() {
  const { city, currentCity, dispatch, country, currentCountry } = useContext(AppContext)
  const cityOptions = useMemo(
    () => city[currentCountry].map((label, index) => ({ label, value: index })),
    [currentCountry],
  )
  const countryOptions = useMemo(() => country.map((label, index) => ({ label, value: index })), [])

  const weater = useMemo(
    () => weatherList[parseInt(Math.random() * weatherList.length, 10)],
    [currentCountry, currentCity],
  )

  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(moment(new Date()).format('YYYY-MM-DD hh:mm:ss'))
    }, 1000)
    return () => clearInterval(tick)
  })

  return (
    <Layout.Header className={styles.header}>
      <div className={styles.select}>
        <img src={require('../../assets/images/logo.svg')} alt="" />
        <Select
          value={currentCountry}
          style={{ width: 120, marginRight: 15 }}
          options={countryOptions}
          onChange={(value) => dispatch('setCountry', value)}
        />
        <Select
          value={currentCity}
          style={{
            width: 120,
          }}
          options={cityOptions}
          onChange={(value) => dispatch('setCity', value)}
        />
      </div>
      <div className={styles.vacation}>
        <span style={{ marginRight: 15 }}>
          {country[currentCountry]}全年假期: {country[currentCountry] !== '中国' ? 30 : 15}天
        </span>
        {city[currentCountry][currentCity]}天气: {weater}
      </div>
      <div className={styles.time}>{time}</div>
    </Layout.Header>
  )
}

export default memo(index)
