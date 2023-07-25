import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <h1>Admin Header</h1>
      {children}
      <h1>Admin Footer</h1>
    </div>
  );
};

export default AdminLayout;
