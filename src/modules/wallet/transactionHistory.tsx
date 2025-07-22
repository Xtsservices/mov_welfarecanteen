import React from 'react';
import { Card, Typography, List, Skeleton } from 'antd';

const { Title, Text } = Typography;

interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
}

const TransactionHistory: React.FC = () => {
  // Mock transactions data
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'debit',
      amount: 438,
      description: 'Food Order #1234',
      date: '2024-03-15'
    },
    {
      id: '2',
      type: 'credit',
      amount: 500,
      description: 'Wallet Recharge',
      date: '2024-03-14'
    },
    {
      id: '3',
      type: 'debit',
      amount: 299,
      description: 'Food Order #1233',
      date: '2024-03-13'
    }
  ];

  const metaContentStyle: React.CSSProperties = {
    textAlign: 'left',
    width: '100%'
  };
  const cardStyle: React.CSSProperties = {
    borderRadius: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '19px',
    color: '#333',
    marginBottom: '20px',
    textAlign: "start",
    fontWeight:"bold"
  };

  const transactionItemStyle: React.CSSProperties = {
    padding: '16px 0',
    borderBottom: '1px solid #f0f0f0'
  };

  const amountStyle = (type: 'credit' | 'debit'): React.CSSProperties => ({
    fontSize: '16px',
    fontWeight: 500,
    color: type === 'credit' ? '#52c41a' : '#ff4d4f'
  });

  return (
    <Card style={cardStyle} styles={{body: { padding: '20px' }}}>
      <Title level={4} style={titleStyle}>
        History
      </Title>

      <List
        dataSource={transactions}
        renderItem={(transaction) => (
          <List.Item style={transactionItemStyle}>
            <div style={metaContentStyle}>
              <List.Item.Meta
                title={<Text strong>{transaction.description}</Text>}
                description={
                  <Text type="secondary">
                    {new Date(transaction.date).toLocaleDateString()}
                  </Text>
                }
              />
            </div>
            <div style={amountStyle(transaction.type)}>
              {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
            </div>
          </List.Item>
        )}
      />

      {/* Loading states for better UX */}
      {transactions.length === 0 && (
        <>
          <Skeleton active paragraph={{ rows: 1 }} />
          <Skeleton active paragraph={{ rows: 1 }} />
          <Skeleton active paragraph={{ rows: 1 }} />
        </>
      )}
    </Card>
  );
};

export default TransactionHistory;