import React from 'react';
import UseGetSet from '../../components/use/state/use-get-set';
import Styles from './index.module.scss';

const State: React.FC = () => {
  return (
    <div className={Styles.card}>
      <UseGetSet />
    </div>
  );
};

export default State;
