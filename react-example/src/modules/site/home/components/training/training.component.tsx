import React from 'react';
import { TrainingPropType } from './training';

export const Training = (props: TrainingPropType) => (
  <div className="training">
    <div className="school">{ props.school }</div>
    <div className="title">{ props.title }</div>
    <div className="duration">De { props.startDate } à { props.endDate }</div>
  </div>
);
