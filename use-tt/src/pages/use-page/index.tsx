import React from 'react';
import Sensors from './sensors';
import Styles from './index.module.scss';

const UsePage: React.FC = () => {
  return (
    <div className={Styles.card}>
      <Sensors />
    </div>
  );
};

export default UsePage;
