import React from 'react';
import Sensors from './sensors';
import UI from './ui';
import State from './state';
import Styles from './index.module.scss';

const UsePage: React.FC = () => {
  return (
    <div className={Styles.card}>
      <Sensors />
      <UI />
      <State />
    </div>
  );
};

export default UsePage;
