import {  PieChartOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Layout, Menu } from "antd";
import logo from '../../logo.svg';
import React, { useCallback, useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom'
import style from './HomeLayout.module.scss'

const menuList = [
  {
    key: '/',
    title: "首页",
    icon: <PieChartOutlined />
  }, {
    key: '/user',
    title: "用户管理",
    icon: <TeamOutlined />,
    children: [
      {
        key: '/user/list',
        title: "用户列表",
        icon: <TeamOutlined />,
      }
    ]
  }, {
    key: '/role',
    title: "权限管理",
    icon: <UserOutlined />,
    children: [
      {
        key: '/role/list',
        title: "审核管理",
        icon: <TeamOutlined />,
      }
    ]
  },
]
export const HomeLayOut: React.FC = ({ children }) => {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse =useCallback(() => {
    setCollapsed(!collapsed)
  },[collapsed]) 
  const handleClick = useCallback((key:any) => {
    navigate(key)
  }, []) 
const navigate = useNavigate()
  return (
    <div className={style["home-layout"]}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className={style["logo"]}>
            {
              collapsed ? (<div className={style["img-active"]}>
                <img src={logo} alt="" className={style['App-logo']} />
              </div>) : (<>
                <div className={style["img"]}>
                  <img src={logo} alt="" className={style['App-logo']} />
                </div>
                <div className={style["title"]}>后台管理系统</div>
              </>)
            }


          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {
            menuList.map((item, index) => (
             ! item.children ? (
                <Menu.Item key={item.key} icon={item.icon} onClick={()=>{handleClick(item.key)}}>
                  {item.title}
                </Menu.Item>
              ) : (
                <SubMenu key="sub1" icon={item.icon} title={item.title}>
                  {
                    item.children.map((subItem, index)=>(
                      <Menu.Item key={subItem.key} onClick={()=>{handleClick(subItem.key)}}>{subItem.title}</Menu.Item>
                    ))
                  }
                  {/* <Menu.Item key="3">用户列表</Menu.Item> */}
                  {/* <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item> */}
                </SubMenu>
              )
            ))
          }
          </Menu>
          {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              首页
            </Menu.Item> */}
            {/* <Menu.Item key="2" icon={}>
              Option 2
            </Menu.Item> */}
            {/* <SubMenu key="sub1" icon={<TeamOutlined />} title="用户管理">
              <Menu.Item key="3">用户列表</Menu.Item> */}
              {/* <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item> */}
            {/* </SubMenu>
            <SubMenu key="sub2" icon={<UserOutlined />} title="权限管理">
              <Menu.Item key="6">角色列表</Menu.Item>
              <Menu.Item key="8">权限列表</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<DesktopOutlined />} title="审核管理">
              <Menu.Item key="9">Team 1</Menu.Item>
              <Menu.Item key="10">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="11" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu> */}
        </Sider>
        <Layout className={style["site-layout"]}>
          <Header className={style["site-layout-background"]} style={{ padding: 0, backgroundColor: '#fff' }} >
            <div className={style["wrapper"]}>
              <div className={style["left"]}>首页</div>
              <div className={style["user"]}>
                <div className={style["username"]}>欢迎 <span className={style['name']}>admin</span>回来</div>

                <Dropdown overlay={
                  <Menu>
                    <Menu.Item>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        1st menu item
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        2nd menu item
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        3rd menu item
                      </a>
                    </Menu.Item>
                  </Menu>
                }
                  placement="bottomLeft" arrow>
                  <div className={style['avatars']}>
                    <Avatar size="large" icon={<UserOutlined />} />
                  </div>
                </Dropdown>


              </div>
            </div>

          </Header>
          <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Outlet></Outlet>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>

    </div>
  )
}