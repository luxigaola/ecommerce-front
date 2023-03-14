import { Menu, MenuRef } from 'antd'
import React, { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type {MenuProps} from 'antd'
const Navigation = () => {
  const [current,setCurrent] = useState('index')
  const menuList:MenuProps['items'] = [{
    label:(<Link to="/" title='首页'>首页</Link>),
    key:'index'
  },{
    label:(<Link to="/shop" title='商城'>商城</Link>),
    key:'shop'
  }]
  const onClick:MenuProps['onClick'] = (e) =>{
    setCurrent(e.key)
  }
  const menuRef = createRef<MenuRef>()
  return (
      <Menu mode='horizontal' items={menuList} selectedKeys={[current]} onClick={onClick} ref={menuRef}>
      </Menu>
  )
}

export default Navigation
// import React, { useState } from 'react';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Menu } from 'antd';

// const items: MenuProps['items'] = [
//   {
//     label: 'Navigation One',
//     key: 'mail',
//     icon: <MailOutlined />,
//   },
//   {
//     label: 'Navigation Two',
//     key: 'app',
//     icon: <AppstoreOutlined />,
//     disabled: true,
//   },
// ];

// const App: React.FC = () => {
//   const [current, setCurrent] = useState('mail');

//   const onClick: MenuProps['onClick'] = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//   };

//   return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
// };

// export default App;