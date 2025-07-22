import React from "react";
import { Card, Button, Typography, Space, Image } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { FoodItem } from "./cartTypes";

const { Text, Title } = Typography;

interface CartItemProps {
  item: FoodItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity }) => {
  const handleQuantityChange = (value: number | null) => {
    if (value !== null) {
      onUpdateQuantity(item.id, value);
    }
  };

  return (
    <Card
      style={{
        marginBottom: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Image
          src={item.image}
          alt={item.name}
          style={{
            width: 120,
            height: 120,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
        <div style={{ flex: 1 }}>
          <Title level={5} style={{ textAlign: "start" }}>
            {item.name}
          </Title>
          <Title
            level={5}
            style={{
              textAlign: "start",
              fontSize: "13px",
              color: "lightslategray",
            }}
          >
            {item.description}
          </Title>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 16,
            }}
          >
            <Text strong style={{ fontSize: 18 }}>
              ₹{item.price}
            </Text>

            <Space>
              <Button
                icon={<MinusOutlined />}
                onClick={() =>
                  handleQuantityChange(Math.max(0, item.quantity - 1))
                }
              />
              {/* <InputNumber
                min={0}
                value={item.quantity}
                onChange={handleQuantityChange}
                style={{ width: 60 , textAlign:"center"}}
              /> */}
              <div
                style={{
                  width: "40px",
                  height: "33px",
                  border: "1px solid #ccc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                {item.quantity}
              </div>
              <Button
                icon={<PlusOutlined />}
                onClick={() => handleQuantityChange(item.quantity + 1)}
              />
            </Space>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
