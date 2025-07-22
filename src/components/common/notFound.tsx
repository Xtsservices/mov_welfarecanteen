import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = Boolean(localStorage.getItem('Token'));
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return null;
};

export default NotFound;
