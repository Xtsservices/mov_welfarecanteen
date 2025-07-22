import React from 'react';
import { Card, Button, Typography, Divider } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

interface CartSummaryProps {
  subtotal: number;
  tax: number;
  total: number;
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  tax,
  total,
  onCheckout
}) => {
  return (
    <Card style={{ 
      position: 'sticky',
      top: 24,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <Title level={4}>Order Summary</Title>
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 8
      }}>
        <Text>Subtotal</Text>
        <Text>₹{subtotal.toFixed(2)}</Text>
      </div>
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 8
      }}>
        <Text>Tax (5%)</Text>
        <Text>₹{tax.toFixed(2)}</Text>
      </div>
      <Divider />
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 16
      }}>
        <Title level={4}>Total</Title>
        <Title level={4}>₹{total.toFixed(2)}</Title>
      </div>
      <Button
        type="primary"
        size="large"
        icon={<ShoppingCartOutlined />}
        onClick={onCheckout}
        block
      >
        Proceed to Checkout
      </Button>
    </Card>
  );
};

export default CartSummary;