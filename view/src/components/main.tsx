import React from 'react';

interface Props {
    children?: any,
    className?: string
}
// 为啥bug
const View = function (props: Props) {
  let {className = '', children, ...other} = props;
  return (
    <main className={`app-container ${className}`} {...other}>{children}</main>
  );
}

export default View;
