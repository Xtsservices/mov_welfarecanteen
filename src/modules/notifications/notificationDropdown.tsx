import React from "react";
import { List, Typography, Button, Badge } from "antd";
import { formatDistanceToNow } from "date-fns";

const { Text } = Typography;

interface Notification {
  id: string;
  message: string;
  isRead: boolean;
  timestamp: string;
}

interface NotificationsDropdownProps {
  notifications: Notification[];
  onViewAll: () => void;
}

const NotificationsDropdown: React.FC<NotificationsDropdownProps> = ({
  notifications,
  onViewAll,
}) => {
  // Format the timestamp to a relative time (e.g., "2 hours ago")
  const formatTime = (timestamp: string) => {
    try {
      return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
    } catch (error) {
      return "recently";
    }
  };

  return (
    <div style={{ width: 300, maxHeight: 400, overflow: "auto" }}>
      <List
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item style={{ padding: "12px 16px" }}>
            <List.Item.Meta
              title={
                <div style={{ display: "flex", alignItems: "center" }}>
                  {!item.isRead && (
                    <Badge
                      color="#1890ff"
                      style={{ marginRight: 8 }}
                    />
                  )}
                  <Text strong={!item.isRead}>{item.message}</Text>
                </div>
              }
              description={
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {formatTime(item.timestamp)}
                </Text>
              }
            />
          </List.Item>
        )}
        footer={
          <div style={{ textAlign: "center", padding: "8px 0" }}>
            <Button type="link" onClick={onViewAll}>
              View All Notifications
            </Button>
          </div>
        }
        locale={{ emptyText: "No notifications" }}
      />
    </div>
  );
};

export default NotificationsDropdown;