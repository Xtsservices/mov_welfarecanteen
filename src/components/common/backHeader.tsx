import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StepBackwardOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;

interface BackHeaderProps {
  path: string;
  title: string;
  styles?: React.CSSProperties;
}

const BackHeader: React.FC<BackHeaderProps> = ({ path, title ,styles}) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px',
        ...styles
      }}
      onClick={() => navigate(path)}
    >
      <StepBackwardOutlined
        style={{
          fontSize: '21px',
          marginRight: '10px',
          marginTop: '4px',
          background: '#f0ac00',
          borderRadius: '3px',
          color: '#010080',
          padding: '2px',
          cursor: 'pointer',
        }}
      />
      <Title
        level={2}
        style={{
          textAlign: 'left',
          margin: 0,
          fontSize: '24px',
          fontWeight: 600,
        }}
      >
        {title}
      </Title>
    </div>
  );
};

export default BackHeader;
