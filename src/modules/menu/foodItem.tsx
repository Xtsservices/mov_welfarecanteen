import React from 'react';
import { FoodItem as FoodItemType } from './menuData';

interface FoodItemProps {
  item: FoodItemType;
}

const FoodItem: React.FC<FoodItemProps> = ({ item }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #e8e8e8',
      borderRadius: '4px',
      overflow: 'hidden',
      height: '100%',
      maxWidth: '100%',
    }}>
      <div style={{
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <img 
          src={item.image} 
          alt={item.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div style={{
        padding: '8px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '16px', fontWeight: 'normal' }}>{item.name}</div>
        <div style={{ fontSize: '14px', marginTop: '4px' }}>₹ {item.price}/-</div>
      </div>
    </div>
  );
};

export default FoodItem;