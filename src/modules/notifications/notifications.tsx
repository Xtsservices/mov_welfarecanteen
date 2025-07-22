import React from "react";
import { Card, Typography, List, Badge } from "antd";
import { BellOutlined, DeleteFilled } from "@ant-design/icons";

const { Title, Text } = Typography;

interface Notification {
  id: string;
  message: string;
  isRead: boolean;
  timestamp: string;
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = React.useState<Notification[]>([
    {
      id: "1",
      message: "Your order #1234 has been confirmed",
      isRead: false,
      timestamp: "2024-03-15T10:30:00",
    },
    {
      id: "2",
      message: "Special offer: 20% off on all meals today!",
      isRead: false,
      timestamp: "2024-03-15T09:15:00",
    },
    {
      id: "3",
      message: "Your order #1233 is ready for pickup",
      isRead: true,
      timestamp: "2024-03-14T15:45:00",
    },
    {
      id: "4",
      message: "New menu items available in the canteen",
      isRead: true,
      timestamp: "2024-03-14T11:20:00",
    },
    {
      id: "5",
      message: "Rate your last order experience",
      isRead: true,
      timestamp: "2024-03-13T16:30:00",
    },
  ]);

  const containerStyle: React.CSSProperties = {
    maxWidth: "85%",
    margin: "0 auto",
    padding: "20px",
    minHeight: "100vh",
    background: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
  };

  const contentStyle: React.CSSProperties = {
    flex: 1,
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "26px",
    marginTop: "20px",
  };

  const cardStyle: React.CSSProperties = {
    borderRadius: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  };

  const notificationItemStyle = (isRead: boolean): React.CSSProperties => ({
    padding: "16px",
    borderBottom: "1px solid #f0f0f0",
    background: isRead ? "transparent" : "rgba(38, 87, 188, 0.05)",
    cursor: "pointer",
  });

  const descriptionStyle: React.CSSProperties = {
    textAlign: "left",
    marginTop: "4px",
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleNotificationClick = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={headerStyle}>
          <Title level={4} style={{ margin: 0 }}>
            Notifications
          </Title>
          <Badge count={unreadCount}>
            <BellOutlined />
          </Badge>
        </div>

        <Card style={cardStyle} styles={{ body: { padding: "0" } }}>
          <List
            dataSource={notifications}
            renderItem={(notification) => (
              <List.Item
                style={notificationItemStyle(notification.isRead)}
                onClick={() => handleNotificationClick(notification.id)}
              >
                <List.Item.Meta
                  title={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: "19px", color: "#000000c2" }}>
                        {notification.message}
                      </Text>
                      <DeleteFilled
                        style={{
                          color: "#ff4d4f",
                          cursor: "pointer",
                          fontSize: "19px",
                        }}
                        onClick={(e: any) => handleDelete(notification.id, e)}
                      />
                    </div>
                  }
                  description={
                    <div style={descriptionStyle}>
                      {new Date(notification.timestamp).toLocaleString()}
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </Card>
      </div>
    </div>
  );
};

export default Notifications;
