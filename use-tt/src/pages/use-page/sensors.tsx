import React from 'react';
import UseBattery from '../../components/use/sensors/use-battery';
import UseGeolocation from '../../components/use/sensors/use-geolocation';
import UseHover from '../../components/use/sensors/hover';
import UseIdle from '../../components/use/sensors/use-idle';
import Styles from './index.module.scss';

const Sensors: React.FC = () => {
  return (
    <div className={Styles.card}>
      <UseBattery />
      <UseGeolocation />
      <UseHover />
      <UseIdle />
    </div>
  );
};

export default Sensors;
