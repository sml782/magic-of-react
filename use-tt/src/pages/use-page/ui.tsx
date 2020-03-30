import React from 'react';
import UseSpeech from '../../components/use/ui/use-speech';
import Styles from './index.module.scss';

const UI: React.FC = () => {
  return (
    <div className={Styles.card}>
      <UseSpeech />
    </div>
  );
};

export default UI;
