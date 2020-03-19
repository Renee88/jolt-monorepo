import React from 'react';
import { action } from '@storybook/addon-actions';
import Talk from './Talk.jsx';
import { object, withKnobs } from '@storybook/addon-knobs'

export default {
  component: Talk,
  title: 'Talk',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

const talk = require('@monorepo/backend/Talks.json')[0]

export const TalkStory = () => {
  return <Talk talk={talk} showTalkPage={action('showTalkPage')} />
}