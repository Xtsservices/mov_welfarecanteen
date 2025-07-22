import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
};

export const PrimaryButton: React.FC<ButtonProps> = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', backgroundColor: 'blue', color: '#fff', border: 'none', borderRadius: '5px', ...style }}>
      {label}
    </button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', backgroundColor: 'blue', color: '#fff', border: 'none', borderRadius: '5px', ...style }}>
      {label}
    </button>
  );
};
