import React from 'react';
import { Card, Typography, Divider, Row, Col } from 'antd';
import MenuItem from './menuItem';
import { Canteen } from './data';

const { Title } = Typography;

interface StaffCanteenViewProps {
  canteen: Canteen;
}

const StaffCanteenView: React.FC<StaffCanteenViewProps> = ({ canteen }) => {
  return (
    <div style={{ marginTop: 16 }}>
      <Card
        cover={
          <div style={{ 
            height: '200px', 
            overflow: 'hidden', 
            borderRadius: '8px 8px 0 0',
            position: 'relative'
          }}>
            <img 
              alt={canteen.name} 
              src={canteen.image} 
              style={{ 
                width: '100%', 
                objectFit: 'cover',
                height: '100%'
              }} 
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '20px',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              borderRadius: '0 0 8px 8px'
            }}>
              <Title level={2} style={{ color: '#fff', margin: 0 }}>{canteen.name}</Title>
            </div>
          </div>
        }
        style={{ borderRadius: '8px', overflow: 'hidden' }}
      >
        <Typography.Paragraph style={{ fontSize: '16px' }}>
          {canteen.description}
        </Typography.Paragraph>
        <Typography.Paragraph style={{ color: '#666' }}>
          <strong>Opening Hours:</strong> {canteen.openingHours}
        </Typography.Paragraph>
        
        <Card type="inner" title="Staff Benefits" style={{ marginTop: 16 }}>
          <ul style={{ paddingLeft: 20 }}>
            <li>10% discount on all meals</li>
            <li>Special weekly menu</li>
            <li>Reserved seating area</li>
          </ul>
        </Card>
      </Card>

      <Divider orientation="left">
        <Title level={4} style={{ margin: 0 }}>Today's Menu</Title>
      </Divider>

      <Row gutter={[16, 16]}>
        {canteen.menuItems.map((item:any) => (
          <Col xs={24} key={item.id}>
            <MenuItem item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StaffCanteenView;