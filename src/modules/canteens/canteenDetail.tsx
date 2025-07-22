import React from 'react';
import { Card, Typography } from 'antd';
import { canteenData } from './data';
import { CanteenDetailProps } from '../dashboard/types';
import MainCanteenView from './mainCanteenView';
import StaffCanteenView from './staffCanteenView';
import StudentCanteenView from './studentCanteen';

const { Title } = Typography;

const CanteenDetail: React.FC<CanteenDetailProps> = ({ canteenId }) => {
    console.log(canteenId, "canteenid");
    
  const canteen = canteenData.find(c => c.id === canteenId);

  if (!canteen) {
    return (
      <Card style={{ marginTop: 16, textAlign: 'center' }}>
        <Title level={4}>Canteen not found</Title>
      </Card>
    );
  }

  // Render appropriate canteen view based on selected canteen
  const renderCanteenView = () => {
    switch (canteenId) {
      case 'main':
        return <MainCanteenView canteen={canteen} />;
      case 'staff':
        return <StaffCanteenView canteen={canteen} />;
      case 'student':
        return <StudentCanteenView canteen={canteen} />;
      default:
        return null;
    }
  };

  return renderCanteenView();
};

export default CanteenDetail;