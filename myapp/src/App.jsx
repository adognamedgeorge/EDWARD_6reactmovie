import React from 'react';
import logo from './logo.svg';
import './App.css';
// 导入模块化样式
import styles from './scss/app.scss'
// 导入路由组件
import { HashRouter, Route, Link } from 'react-router-dom'
// 导入需要的AntDesign组件
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return <Hash-Router>
      <Layout className="layout" style={{height: '100%'}}>
        <Header>
          <div className={styles.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">电影</Menu.Item>
            <Menu.Item key="3">关于</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ background: '#fff' }}>
          123
        </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
    </Hash-Router>
  }
}
