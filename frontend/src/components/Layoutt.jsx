import React, { useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { LogoutOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const { Header, Content, Footer } = Layout;

const Layoutt = ({ children }) => {
  const { cartItems, loading } = useSelector((state) => state.rootReducer);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    localStorage.getItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
        }}
      >
        <div className="logo" onClick={() => navigate("/")}>
          <h2 className="logo-title">Ecommerce</h2>
        </div>
        <div className="cart-items" onClick={() => navigate("/cart")}>
          <ShoppingCartOutlined />
          <span className="cart-badge">{cartItems.length}</span>
        </div>

        <div
          className="test"
          key="/logout"
          // icon={<LogoutOutlined />}
          onClick={() => {
            localStorage.removeItem("auth");
            navigate("/login");
          }}
        >
          LogOut
        </div>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Layoutt;
