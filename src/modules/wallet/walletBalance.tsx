import React from 'react';
import { Card, Typography } from 'antd';

const { Text } = Typography;

const WalletBalance: React.FC = () => {
  const cardStyle: React.CSSProperties = {
    borderRadius: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    marginBottom: '24px'
  };

  const balanceContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#333',
    fontWeight: 500
  };

  const amountStyle: React.CSSProperties = {
    fontSize: '18px',
    color: '#2657BC',
    fontWeight: 600
  };

  return (
    <Card style={cardStyle} styles={{ body: { padding: '20px' } }}>
      <div style={balanceContainerStyle}>
        <Text style={labelStyle}>Wallet Balance</Text>
        <Text style={amountStyle}>100/-</Text>
      </div>
    </Card>
  );
};

export default WalletBalance;