import React from 'react';
import { action } from '@storybook/addon-actions';
import User from './User.jsx';
import { object, withKnobs } from '@storybook/addon-knobs'

export default {
  component: User,
  title: 'User',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

const user = {
  "id": 1,
  "name":"Carlijne Van der Gulik",
  "picture": "https://randomuser.me/api/portraits/thumb/women/20.jpg",
  "email":"carlijne.vandergulik@example.com",
  "age": 24,
}

export const UserStory = () => {
  // return <User user ={object('user', {...user})}
  return <User user = {object('user', {...user}, 'users')} showUserPage={action('showUserPage')}/>
}

