import React from 'react';
import ProfileDetails from './profileDetails';
import WorldtekLogo from '../../components/common/worldTekLogo';

const Profile: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '70%',
    margin: '0 auto',
    padding: '40px',
    minHeight: '100vh',
    background: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column'
  };

  const contentStyle: React.CSSProperties = {
    flex: 1
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <ProfileDetails />
      </div>
      <WorldtekLogo />
    </div>
  );
};

export default Profile;