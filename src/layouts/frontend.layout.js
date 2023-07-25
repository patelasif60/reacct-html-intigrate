import React from 'react';

const EndUserLayout = ({ children }) => {
  return (
    <div>
      <h1>End User Header</h1>
      {children}
      <h1>End User Footer</h1>
    </div>
  );
};

export default EndUserLayout;
