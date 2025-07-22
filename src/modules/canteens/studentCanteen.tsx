import React from 'react';
import { Card, Typography, Divider, Tabs, Badge } from 'antd';
import MenuItem from './menuItem';
import { Canteen } from './data';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

interface StudentCanteenViewProps {
  canteen: Canteen;
}

const StudentCanteenView: React.FC<StudentCanteenViewProps> = ({ canteen }) => {
  // Group menu items by category
  const categories = canteen.menuItems.reduce((acc: Record<string, any[]>, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

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
              <Badge.Ribbon text="Student Offers" color="green">
                <Title level={2} style={{ color: '#fff', margin: 0, paddingRight: '40px' }}>
                  {canteen.name}
                </Title>
              </Badge.Ribbon>
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
        
        <Text type="success" style={{ fontSize: '16px', display: 'block', marginTop: '8px' }}>
          <strong>Student Discount: 15% off with valid ID</strong>
        </Text>
      </Card>

      <Divider>
        <Title level={4} style={{ margin: 0 }}>Menu Categories</Title>
      </Divider>

      <Card>
        <Tabs defaultActiveKey="Today Special">
          {Object.keys(categories).map(category => (
            <TabPane tab={category} key={category}>
              {categories[category].map((item:any) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </TabPane>
          ))}
        </Tabs>
      </Card>
    </div>
  );
};

export default StudentCanteenView;