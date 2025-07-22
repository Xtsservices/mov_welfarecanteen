import React from 'react';
import { Space } from 'antd';

interface FoodItemProps {
  src: string;
}

const FoodItem: React.FC<FoodItemProps> = ({ src }) => {
  return (
    <div 
      style={{
        width: '70px',
        height: '70px',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      <img 
        src={src} 
        alt="Food item" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }} 
      />
    </div>
  );
};

const FoodItems: React.FC = () => {
  const foodImages = [
    'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1600'
  ];

  return (
    <Space size={8} wrap>
      {foodImages.map((image, index) => (
        <FoodItem key={index} src={image} />
      ))}
    </Space>
  );
};

export default FoodItems;