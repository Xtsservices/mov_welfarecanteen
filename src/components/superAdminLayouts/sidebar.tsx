import { Layout, Menu, Button } from "antd";
import {
  HomeOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  DatabaseOutlined,
  BankOutlined,
} from "@ant-design/icons";
// import { useNavigate, useLocation } from "react-router-dom";
import { Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const SuperAdminSidebar = () => {
  //   const navigate = useNavigate();
  //   const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    // navigate("/");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Determine the selected key based on current route
  const getSelectedKey = () => {
    // if (path.includes("/dashboard")) return "home";
    return "home";
  };

  return (
    <Sider
      width={200}
      collapsedWidth={60}
      collapsible
      collapsed={collapsed}
      trigger={null}
      className="custom-sidebar"
      style={{
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "120vh",
        position: "relative",
        borderRight: "1px solid #f0f0f0",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ width: "100%" }}>
        {/* Collapse Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px 16px 8px",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleSidebar}
            style={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </div>

        {/* Menu Items with bottom padding */}
        <div style={{ paddingBottom: "20px" }}>
          <Menu
            mode="inline"
            theme="light"
            inlineCollapsed={collapsed}
            selectedKeys={[getSelectedKey()]} // Set the active menu item
            items={[
              {
                key: "home",
                icon: <HomeOutlined style={{ fontSize: "20px" }} />,
                label: "Dashboard",
              },
              {
                key: "view_all_items",
                icon: <ShoppingCartOutlined style={{ fontSize: "20px" }} />,
                label: "View All Items",
                onClick: () => navigate("/view-all-items"),
              },
              {
                key: "finance_management",
                icon: <BankOutlined style={{ fontSize: "20px" }} />,
                label: "Finance Management",
                onClick: () => navigate("/finance-management"),
              },
              {
                key: "inventory_management",
                icon: <DatabaseOutlined style={{ fontSize: "20px" }} />,
                label: "Inventory Management",
                onClick: () => navigate("/inventory-management"),
              },
            ]}
          />
        </div>
      </div>

      {/* Logout Button - fixed at the bottom with margin */}
      <div
        style={{
          padding: "16px",
          textAlign: "center",
          marginTop: "auto",
          paddingBottom: "24px",
        }}
      >
        <Button
          type="text"
          icon={<LogoutOutlined style={{ fontSize: "16px" }} />}
          onClick={handleLogout}
          style={{
            width: "100%",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "flex-start",
            gap: "8px",
            padding: collapsed ? "0" : "0 16px",
          }}
        >
          {!collapsed && "Logout"}
        </Button>
        <Modal
          title="Confirm Logout"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Are you sure you want to logout?</p>
        </Modal>
      </div>
    </Sider>
  );
};

export default SuperAdminSidebar;
