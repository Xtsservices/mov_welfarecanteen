import React, { useState } from 'react';
import { Card, Typography, Button, Row, Col } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { MenuItemProps } from '../dashboard/types';

const { Text } = Typography;

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <Card 
      style={{ 
        marginBottom: 16, 
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}
      styles={{body:{ padding: '12px 16px' } }}
      hoverable
    >
      <Row gutter={16} align="middle">
        <Col xs={24} sm={6} md={4}>
          <div style={{ 
            borderRadius: '6px', 
            overflow: 'hidden',
            height: '100px',
            width: '100%'
          }}>
            <img 
              src={item.image} 
              alt={item.name} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </div>
        </Col>
        <Col xs={24} sm={12} md={14}>
          <Typography.Title level={5} style={{ marginBottom: '4px' }}>
            {item.name}
          </Typography.Title>
          <Text style={{ display: 'block' }}>{item.description}</Text>
        </Col>
        <Col xs={24} sm={6} md={6} style={{ textAlign: 'right' }}>
          <div style={{ marginBottom: '8px' }}>
            <Text strong style={{ fontSize: '18px' }}>₹{item.price}/-</Text>
          </div>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}>
            <Button 
              icon={<MinusOutlined />} 
              onClick={handleDecrement}
              disabled={quantity === 0}
              style={{ 
                borderRadius: '4px 0 0 4px',
                fontWeight: 'bold'
              }}
            />
            <div style={{ 
              padding: '0 12px', 
              border: '1px solid #d9d9d9', 
              borderLeft: 'none', 
              borderRight: 'none',
              backgroundColor: '#fff',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px'
            }}>
              {quantity}
            </div>
            <Button 
              icon={<PlusOutlined />} 
              onClick={handleIncrement}
              style={{ 
                borderRadius: '0 4px 4px 0',
                fontWeight: 'bold'
              }}
              type="primary"
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default MenuItem;