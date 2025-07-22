import React from 'react';
import { Row, Col, Typography } from 'antd';

interface BillItemRowProps {
  label: string;
  amount: number;
  quantity?: number;
  isTotal?: boolean;
}

const BillItemRow: React.FC<BillItemRowProps> = ({ 
  label, 
  amount, 
  quantity,
  isTotal = false 
}) => {
  return (
    <Row 
      style={{ 
        marginBottom: isTotal ? 0 : '12px',
        borderTop: isTotal ? '1px solid #eee' : 'none',
        paddingTop: isTotal ? '16px' : 0,
        marginTop: isTotal ? '16px' : 0
      }}
    >
      <Col span={12}>
        <Typography.Text 
          style={{ 
            fontSize: isTotal ? '15px' : '14px',
            color: '#333',
            fontWeight: isTotal ? 500 : 400
          }}
        >
          {label}
        </Typography.Text>
        {quantity && (
          <Typography.Text
            style={{
              fontSize: '12px',
              color: '#666',
              marginLeft: '8px'
            }}
          >
            x{quantity}
          </Typography.Text>
        )}
      </Col>
      <Col span={12} style={{ textAlign: 'right' }}>
        <Typography.Text 
          style={{ 
            fontSize: isTotal ? '15px' : '14px',
            fontWeight: isTotal ? 500 : 400
          }}
        >
          ₹{amount}
        </Typography.Text>
      </Col>
    </Row>
  );
};

export default BillItemRow;