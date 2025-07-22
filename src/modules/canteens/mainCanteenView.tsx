import React from 'react';
import { Card, Typography, Divider } from 'antd';
import MenuItem from './menuItem';
import { Canteen } from './data';

const { Title } = Typography;

interface MainCanteenViewProps {
  canteen: Canteen;
}

const MainCanteenView: React.FC<MainCanteenViewProps> = ({ canteen }) => {
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
      </Card>

      <Divider orientation="left">
        <Title level={4} style={{ margin: 0 }}>Today's Specials</Title>
      </Divider>

      {canteen.menuItems.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MainCanteenView;