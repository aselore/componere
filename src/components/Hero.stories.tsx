import * as React from 'react';

const Hero = ({ title }) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        color: '#fff',
      }}
    >
      <h1 style={{ fontSize: '200px' }}>{title}</h1>
    </div>
  );
};

export default {
  title: 'Hero',
  component: Hero,
};
