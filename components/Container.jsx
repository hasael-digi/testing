import React from 'react';

const Container = ({ children }) => {
  return (
    <div className='max-w-[1240px] flex items-center mx-auto relative'>
      <div className='w-full px-10 relative z-200'>{children}</div>
    </div>
  );
};

export default Container;
