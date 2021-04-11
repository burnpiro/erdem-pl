// @flow
import React, { useEffect, useState, useReducer } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import RNNAnimation from './RNNAnimation';
import ProcessControls from './ProcessControls';

import { steps } from './data';

import styles from './RNNProcess.module.scss';

const RNNProcess = () => {
  const [step, setStep] = useState(1);

  const onStepForward = () => {
    setStep(step + 1);
  };

  const onStepBackward = () => {
    setStep(step - 1);
  };

  const currStep = steps[`step${step}`];

  return (
    <div className={styles['rnn-continaer']}>
      <RNNAnimation data={currStep} step={step} />
      <ProcessControls
        onStepForward={onStepForward}
        onStepBackward={onStepBackward}
        prevDisabled={step < 2}
        nextDisabled={step === Object.keys(steps).length}
      />
    </div>
  );
};

export default RNNProcess;