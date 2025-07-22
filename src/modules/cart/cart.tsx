import React, { useState } from "react";
import { Typography, Row, Col, Empty } from "antd";
import CartItem from "./cartItem";
import CartSummary from "./cartSummary";
import { FoodItem } from "./cartTypes";
import { useNavigate } from "react-router-dom";
import WorldtekLogo from "../../components/common/worldTekLogo";

const { Title } = Typography;

const initialItems: FoodItem[] = [
  {
    id: "1",
    name: "Navy Special Thali",
    description: "Rice, Dal, 2 Rotis, 2 Sabzi, Salad, and Sweet",
    price: 150,
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    category: "Main Course",
    quantity: 1,
  },
  {
    id: "2",
    name: "Veg Biryani",
    description: "Fragrant rice with mixed vegetables and special spices",
    price: 120,
    image: "https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg",
    category: "Rice",
    quantity: 1,
  },
  {
    id: "3",
    name: "Fresh Fruit Salad",
    description: "Mixed seasonal fruits with honey dressing",
    price: 80,
    image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
    category: "Desserts",
    quantity: 1,
  },
];

const Cart: React.FC = () => {
  const [items, setItems] = useState<FoodItem[]>(initialItems);
  const navigate = useNavigate();

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const calculateTotals = () => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.05;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout with items:", items);
    navigate("/billing");
  };

  const { subtotal, tax, total } = calculateTotals();

  return (
    <div
      style={{
        maxWidth: "95%",
        margin: "0 auto",
        padding: "24px 16px",
      }}
    >
      <Title
        level={2}
        style={{
          textAlign: "start",
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "23px",
          backgroundColor:"#00008b14",
          borderRadius:"10px",
          padding:"10px",
          paddingLeft:"15px"
        }}
      >
        Items in Your Cart :
      </Title>

      {items.length === 0 ? (
        <Empty description="Your cart is empty" style={{ margin: "48px 0" }} />
      ) : (
        <Row gutter={[24, 24]}>
          <Col xs={24} md={16}>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </Col>
          <Col xs={24} md={8}>
            <CartSummary
              subtotal={subtotal}
              tax={tax}
              total={total}
              onCheckout={handleCheckout}
            />
          </Col>
        </Row>
      )}
      <WorldtekLogo />
    </div>
  );
};

export default Cart;
