import React, { Fragment, Suspense } from 'react';
import Normal from '../../components/swr/normal';

const SWRPage: React.FC = () => {
  return (
    <Fragment>
      <Suspense fallback={<div>加载...</div>}>
        <Normal />
      </Suspense>
      1
    </Fragment>
  );
};
export default SWRPage;
