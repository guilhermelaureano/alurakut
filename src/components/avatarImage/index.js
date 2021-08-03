import React from 'react';

const AvatarImage = ({ user }) => (
  <img src={`https://github.com/${user}.png`} style={{ borderRadius: '8px' }} />
);

export default AvatarImage;