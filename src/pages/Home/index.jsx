import React, { useContext } from 'react'
import styles from './index.module.less'
import { AppContext } from '../../store'
import { Card, Space, Tag } from 'antd'
const colorList = ['magenta', 'red', 'volcano']
export default function index() {
  const { data, currentCity, city, currentCountry } = useContext(AppContext)
  return (
    <div className={styles.home}>
      {data[currentCity].map((item, index) => (
        <Card
          style={{ width: '32%', marginTop: 30, marginRight: index % 3 === 2 ? 0 : '2%' }}
          key={city[currentCountry][currentCity] + item.name + index}
        >
          <div className={styles['content-bg']} />
          <h3>{`${city[currentCountry][currentCity]}·${item.name}`}</h3>
          <div className={styles['content']}>
            <span>{item.size}</span>
            <span>{item.price}</span>
          </div>
          <Space wrap style={{ paddingBottom: 30, paddingLeft: 15 }}>
            {item.desc.map((content, index) => (
              <Tag key={content} color={colorList[index]}>
                {content}
              </Tag>
            ))}
          </Space>
        </Card>
      ))}
    </div>
  )
}
