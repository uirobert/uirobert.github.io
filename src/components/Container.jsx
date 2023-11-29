
import React from 'react';

const Container = ({children}) => {
  return (

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-3xl">{/* Content goes here */}</div>
    </div>
  );
};

export default Container;
