import React from 'react';
import { Modal, Descriptions, Avatar, Typography, Divider } from 'antd';
import { User } from './types';

interface UserViewProps {
  visible: boolean;
  user: User | null;
  onClose: () => void;
}

const UserView: React.FC<UserViewProps> = ({ visible, user, onClose }) => {
  if (!user) return null;
  
  return (
    <Modal
      open={visible}
      title={<Typography.Title level={4} style={{ margin: 0 }}>User Details</Typography.Title>}
      onCancel={onClose}
      footer={null}
      width={700}
    >
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        marginBottom: 24
      }}>
        <Avatar 
          src={user.photoUrl} 
          size={120} 
          style={{ marginBottom: 16 }}
        />
        <Typography.Title level={3} style={{ margin: 0 }}>
          {user.name}
        </Typography.Title>
      </div>

      <Divider />

      <Descriptions
        bordered
        column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
      >
        <Descriptions.Item label="User Name">
          {user.name}
        </Descriptions.Item>
        <Descriptions.Item label="Mobile Number">
          {user.mobile}
        </Descriptions.Item>
        <Descriptions.Item label="Email ID">
          {user.email}
        </Descriptions.Item>
        <Descriptions.Item label="Canteen Name">
          {user.canteenName || '-'}
        </Descriptions.Item>
        <Descriptions.Item label="Canteen Code">
          {user.canteenCode || '-'}
        </Descriptions.Item>
        <Descriptions.Item label="Aadhaar Card">
          {user.aadhaarCard || '-'}
        </Descriptions.Item>
        <Descriptions.Item label="Added By" span={2}>
          {user.addedBy || '-'}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default UserView;