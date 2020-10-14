import React from 'react';
import './Banner.scss';

function Banner(props) {
  return (
    <div className="banner">
      <h1>{props.children}</h1>
    </div>
  );
}

export default Banner;
