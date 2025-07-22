import {
    Layout,
    Typography,
    Avatar,
    Dropdown,
    MenuProps,
    Space,
    Modal,
    Form,
    Input,
  } from "antd";
  import {
    UserOutlined,
    CheckOutlined,
    EditOutlined,
    LogoutOutlined,
  } from "@ant-design/icons";
  import { useState } from "react";
  
  const { Header } = Layout;
  const { Title, Text } = Typography;
  
  interface AppHeaderProps {
    title: string;
    subtitle?: string;
    metaInfo?: string;
  }
  
  interface UserProfile {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    countrycode: string;
    mobileno: string;
    status: string;
    role: string;
    change_password: boolean;
  }
  
  const AdminHeader = ({
    title,
    subtitle = "WELFARE CANTEEN",
  }: AppHeaderProps) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [userProfile] = useState<UserProfile | null>(null);
    const [loading] = useState(true);
    const [passwordModalVisible, setPasswordModalVisible] = useState(false);
    const [form] = Form.useForm();
  
    const menuItems: MenuProps["items"] = [
      {
        key: "user-info",
        label: (
          <Space direction="vertical" size={0} style={{ padding: "12px 16px" }}>
            <Text strong style={{ fontSize: 16 }}>
              {userProfile
                ? `${userProfile.firstname.charAt(
                    0
                  )}${userProfile.lastname.charAt(0)}`
                : "UU"}
            </Text>
            <Text strong>
              {userProfile
                ? `${userProfile.firstname} ${userProfile.lastname}`
                : "User Name"}
            </Text>
            <Text type="secondary">
              {userProfile?.email || "user@example.com"}
            </Text>
          </Space>
        ),
        disabled: true,
      },
      { type: "divider" },
      {
        key: "edit-profile",
        icon: <CheckOutlined />,
        label: "Edit Profile",
      },
      ...(userProfile?.change_password === true
        ? [
            {
              key: "change-password",
              icon: <EditOutlined />,
              label: "Change Password",
            },
          ]
        : []),
      { type: "divider" },
      {
        key: "logout",
        icon: <LogoutOutlined />,
        label: "Logout",
        danger: true,
      },
    ];
  
    return (
      <>
        <Header
          style={{
            background: "white",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "64px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Title level={4} style={{ color: "black", margin: 0 }}>
              {title}
            </Title>
            <Title
              level={5}
              style={{ color: "black", margin: 0, fontWeight: "normal" }}
            >
              {subtitle}
            </Title>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {!loading && (
              <Dropdown
                menu={{ items: menuItems }}
                placement="bottomRight"
                trigger={["click"]}
                open={dropdownVisible}
                onOpenChange={setDropdownVisible}
                overlayStyle={{ minWidth: 220 }}
              >
                <Space style={{ cursor: "pointer", padding: "8px" }}>
                  <Avatar
                    size="large"
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                    }}
                  >
                    {userProfile ? (
                      `${userProfile.firstname.charAt(
                        0
                      )}${userProfile.lastname.charAt(0)}`
                    ) : (
                      <UserOutlined />
                    )}
                  </Avatar>
                </Space>
              </Dropdown>
            )}
          </div>
        </Header>
  
        {/* Change Password Modal */}
        <Modal
          title="Change Password"
          open={passwordModalVisible}
          onCancel={() => setPasswordModalVisible(false)}
          onOk={() => form.submit()}
          okText="Change Password"
        >
          <p style={{ color: "red" }}>
            <strong>Note:</strong> Current Password has been sent to your mailbox.
          </p>
          <Form form={form} layout="vertical">
            <Form.Item
              label="Current Password"
              name="currentPassword"
              rules={[
                { required: true, message: "Please enter current password" },
              ]}
            >
              <Input.Password placeholder="Enter current password" />
            </Form.Item>
            <Form.Item
              label="New Password"
              name="newPassword"
              rules={[
                { required: true, message: "Please enter new password" },
                { min: 6, message: "Password should be at least 6 characters" },
              ]}
            >
              <Input.Password placeholder="Enter new password" />
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  };
  
  export default AdminHeader;
  