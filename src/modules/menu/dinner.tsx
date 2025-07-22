import React from 'react';
import { Row, Col } from 'antd';
import { dinnerItems } from './menuData';
import FoodItem from './foodItem';

const Dinner: React.FC = () => {
  return (
    <div style={{ padding: '16px 0' }}>
      <Row gutter={[16, 16]}>
        {dinnerItems.map((item:any) => (
          <Col xs={12} sm={8} md={6} lg={4} xl={4} key={item.id} style={{padding:"14px"}}>
            <FoodItem item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dinner;