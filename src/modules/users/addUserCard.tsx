import React from "react";
import { Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface AddUserCardProps {
  onClick: () => void;
}

const AddUserCard: React.FC<AddUserCardProps> = ({ onClick }) => {
  return (
    <Card
      hoverable
      onClick={onClick}
      style={{
        width: "100%",
        height: "96%",
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: "#fafafa",
        borderStyle: "dashed",
        minHeight: 317,
        transition: "all 0.3s ease",
        border: "1px solid #010080",
      }}
      styles={{
        body: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          padding: 0,
        },
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <PlusOutlined
          style={{ fontSize: 48, color: "#1890ff", marginBottom: 16 }}
        />
        <p style={{ fontSize: 16, color: "#666", margin: 0 }}>Add User</p>
      </div>
    </Card>
  );
};

export default AddUserCard;
