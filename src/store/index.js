import { createContext, useReducer } from 'react'

const appState = {
  city: [
    ['北京', '上海', '武汉', '深圳', '重庆', '成都', '杭州', '南京', '广州'],
    ['纽约', '圣地亚哥', '俄亥俄'],
    ['莫斯科', '圣彼得堡'],
    ['巴黎', '马赛', '里昂', '图卢兹'],
    ['伦敦', '伯明翰', '格拉斯哥', '利物浦', '布里斯托'],
  ],
  country: ['中国', '美国', '俄罗斯', '法国', '英国'],
  currentCountry: 0,
  currentCity: 0,
  data: [
    [
      {
        name: '合租·双兴南区3居室-南卧',
        price: '¥1830/月',
        size: '18.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '整租·长兴南区3居室',
        price: '¥4800/月',
        size: '89㎡ | 5/6层',
        desc: ['新小区', '业主直租']
      },
      {
        name: '合租·北兴东区3居室-南卧',
        price: '¥1430/月',
        size: '18.5㎡ | 2/6层',
        desc: ['离地铁近', '业主直租']
      },
      {
        name: '合租·双兴南区3居室-北卧',
        price: '¥1130/月',
        size: '12.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '合租·兴南区3居室-南卧',
        price: '¥1830/月',
        size: '13.5㎡ | 1/6层',
        desc: ['离地铁近']
      }
    ],
    [
      {
        name: '合租·双兴南区3居室-南卧',
        price: '¥1830/月',
        size: '18.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '整租·长兴南区3居室',
        price: '¥4800/月',
        size: '89㎡ | 5/6层',
        desc: ['新小区', '业主直租']
      },
      {
        name: '合租·北兴东区3居室-南卧',
        price: '¥1430/月',
        size: '18.5㎡ | 2/6层',
        desc: ['离地铁近', '业主直租']
      },
      {
        name: '合租·双兴南区3居室-北卧',
        price: '¥1130/月',
        size: '12.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '合租·兴南区3居室-南卧',
        price: '¥1830/月',
        size: '13.5㎡ | 1/6层',
        desc: ['离地铁近']
      }
    ],
    [
      {
        name: '合租·双兴南区3居室-南卧',
        price: '¥1830/月',
        size: '18.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '整租·长兴南区3居室',
        price: '¥4800/月',
        size: '89㎡ | 5/6层',
        desc: ['新小区', '业主直租']
      },
      {
        name: '合租·北兴东区3居室-南卧',
        price: '¥1430/月',
        size: '18.5㎡ | 2/6层',
        desc: ['离地铁近', '业主直租']
      },
      {
        name: '合租·双兴南区3居室-北卧',
        price: '¥1130/月',
        size: '12.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '合租·兴南区3居室-南卧',
        price: '¥1830/月',
        size: '13.5㎡ | 1/6层',
        desc: ['离地铁近']
      }
    ],
    [
      {
        name: '合租·双兴南区3居室-南卧',
        price: '¥1830/月',
        size: '18.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '整租·长兴南区3居室',
        price: '¥4800/月',
        size: '89㎡ | 5/6层',
        desc: ['新小区', '业主直租']
      },
      {
        name: '合租·北兴东区3居室-南卧',
        price: '¥1430/月',
        size: '18.5㎡ | 2/6层',
        desc: ['离地铁近', '业主直租']
      },
      {
        name: '合租·双兴南区3居室-北卧',
        price: '¥1130/月',
        size: '12.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '合租·兴南区3居室-南卧',
        price: '¥1830/月',
        size: '13.5㎡ | 1/6层',
        desc: ['离地铁近']
      }
    ],
    [
      {
        name: '合租·双兴南区3居室-南卧',
        price: '¥1830/月',
        size: '18.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '整租·长兴南区3居室',
        price: '¥4800/月',
        size: '89㎡ | 5/6层',
        desc: ['新小区', '业主直租']
      },
      {
        name: '合租·北兴东区3居室-南卧',
        price: '¥1430/月',
        size: '18.5㎡ | 2/6层',
        desc: ['离地铁近', '业主直租']
      },
      {
        name: '合租·双兴南区3居室-北卧',
        price: '¥1130/月',
        size: '12.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '合租·兴南区3居室-南卧',
        price: '¥1830/月',
        size: '13.5㎡ | 1/6层',
        desc: ['离地铁近']
      }
    ],
    [
      {
        name: '合租·双兴南区3居室-南卧',
        price: '¥1830/月',
        size: '18.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '整租·长兴南区3居室',
        price: '¥4800/月',
        size: '89㎡ | 5/6层',
        desc: ['新小区', '业主直租']
      },
      {
        name: '合租·北兴东区3居室-南卧',
        price: '¥1430/月',
        size: '18.5㎡ | 2/6层',
        desc: ['离地铁近', '业主直租']
      },
      {
        name: '合租·双兴南区3居室-北卧',
        price: '¥1130/月',
        size: '12.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '合租·兴南区3居室-南卧',
        price: '¥1830/月',
        size: '13.5㎡ | 1/6层',
        desc: ['离地铁近']
      }
    ],
    [
      {
        name: '合租·双兴南区3居室-南卧',
        price: '¥1830/月',
        size: '18.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '整租·长兴南区3居室',
        price: '¥4800/月',
        size: '89㎡ | 5/6层',
        desc: ['新小区', '业主直租']
      },
      {
        name: '合租·北兴东区3居室-南卧',
        price: '¥1430/月',
        size: '18.5㎡ | 2/6层',
        desc: ['离地铁近', '业主直租']
      },
      {
        name: '合租·双兴南区3居室-北卧',
        price: '¥1130/月',
        size: '12.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '合租·兴南区3居室-南卧',
        price: '¥1830/月',
        size: '13.5㎡ | 1/6层',
        desc: ['离地铁近']
      }
    ],
    [
      {
        name: '合租·双兴南区3居室-南卧',
        price: '¥1830/月',
        size: '18.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '整租·长兴南区3居室',
        price: '¥4800/月',
        size: '89㎡ | 5/6层',
        desc: ['新小区', '业主直租']
      },
      {
        name: '合租·北兴东区3居室-南卧',
        price: '¥1430/月',
        size: '18.5㎡ | 2/6层',
        desc: ['离地铁近', '业主直租']
      },
      {
        name: '合租·双兴南区3居室-北卧',
        price: '¥1130/月',
        size: '12.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '合租·兴南区3居室-南卧',
        price: '¥1830/月',
        size: '13.5㎡ | 1/6层',
        desc: ['离地铁近']
      }
    ],
    [
      {
        name: '合租·双兴南区3居室-南卧',
        price: '¥1830/月',
        size: '18.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '整租·长兴南区3居室',
        price: '¥4800/月',
        size: '89㎡ | 5/6层',
        desc: ['新小区', '业主直租']
      },
      {
        name: '合租·北兴东区3居室-南卧',
        price: '¥1430/月',
        size: '18.5㎡ | 2/6层',
        desc: ['离地铁近', '业主直租']
      },
      {
        name: '合租·双兴南区3居室-北卧',
        price: '¥1130/月',
        size: '12.5㎡ | 5/6层',
        desc: ['离地铁近', '新小区', '业主直租']
      },
      {
        name: '合租·兴南区3居室-南卧',
        price: '¥1830/月',
        size: '13.5㎡ | 1/6层',
        desc: ['离地铁近']
      },
      {
        name: '合租·兴南区3居室-南卧',
        price: '¥1830/月',
        size: '13.5㎡ | 1/6层',
        desc: ['离地铁近']
      }
    ]
  ]
}

export const AppContext = createContext(appState)

function reducer(state, action) {
  switch (action.type) {
    case 'setCity':
      return { ...state, currentCity: action.payload }
    case 'setCountry':
      return { ...state, currentCountry: action.payload, currentCity: 0 }
    default:
      throw new Error()
  }
}

export function useAppReducer() {
  const [state, dispatch] = useReducer(reducer, appState)
  const method = (type, state) => dispatch({ type, payload: state })
  return { ...state, dispatch: method }
}