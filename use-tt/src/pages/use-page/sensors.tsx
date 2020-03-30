import React from 'react';
import UseBattery from '../../components/use/sensors/use-battery';
import UseGeolocation from '../../components/use/sensors/use-geolocation';
import UseHover from '../../components/use/sensors/hover';
import Styles from './index.module.scss';

const Sensors: React.FC = () => {
  return (
    <div className={Styles.card}>
      <UseBattery />
      <UseGeolocation />
      <UseHover />
    </div>
  );
};

export default Sensors;
