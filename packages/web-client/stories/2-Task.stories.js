import React from 'react';
import Task from '../src/components/Task.jsx'
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
  component: Task,
  title: 'Task',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

export const Default = () => {
  return <Task task = {object('task', {id: 1, type: "houseKeeping", title: "cleaning"}, {...Task})} />;
};