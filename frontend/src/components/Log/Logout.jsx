import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    window.location = "/";
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
