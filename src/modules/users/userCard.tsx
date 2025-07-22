import React from 'react';
import { Card, Button, Space, Typography, Tooltip } from 'antd';
import { User } from './types';
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface UserCardProps {
  user: User;
  onEdit: (id: string) => void;
  onView: (id: string) => void;
  onDelete: (id: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onView, onDelete }) => {
  return (
    <Card
      hoverable
      style={{ 
        width: '100%',
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}
      cover={
        <div style={{
          height: 200,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f2f5'
        }}>
          <img
            alt={`${user.name}'s photo`}
            src={user.photoUrl}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      }
      styles={{body:{ padding: '16px' }}}
    >
      <Typography.Title level={5} style={{ margin: '0 0 8px 0', textAlign: 'center' }}>
        {user.name}
      </Typography.Title>
      
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <Text type="secondary">{user.mobile}</Text>
      </div>
      
      <Space 
        style={{ 
          width: '100%', 
          justifyContent: 'center', 
          marginTop: 8,
          borderTop: '1px solid #f0f0f0',
          paddingTop: 16
        }}
      >
        <Tooltip title="View Details">
          <Button 
            icon={<EyeOutlined />} 
            type="text" 
            onClick={() => onView(user.id)}
            style={{ color: '#1890ff' }}
          />
        </Tooltip>
        <Tooltip title="Edit">
          <Button 
            icon={<EditOutlined />} 
            type="text" 
            onClick={() => onEdit(user.id)}
            style={{ color: '#52c41a' }}
          />
        </Tooltip>
        <Tooltip title="Delete">
          <Button 
            icon={<DeleteOutlined />} 
            type="text" 
            danger 
            onClick={() => onDelete(user.id)}
          />
        </Tooltip>
      </Space>
    </Card>
  );
};

export default UserCard;