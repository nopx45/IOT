import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // นำทางไปยังหน้า /login
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Home Page</h1>
      <Button type="primary" onClick={handleLoginClick}>
        Go to Login
      </Button>
    </div>
  );
};

export default Home;
