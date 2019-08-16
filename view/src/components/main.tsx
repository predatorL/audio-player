import React from 'react';

interface Props {
    children?: React.ReactChildren,
    className?: string
}

const View: React.FC = (props: Props) => {
  return (
    <main className={`app-container`}>{props.children}</main>
  );
}

export default View;
