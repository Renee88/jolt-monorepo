module.exports = {
  stories: ['../src/components/**/*.stories.js', '../stories/*.stories.js'],
  addons: ['@storybook/addon-actions','@storybook/addon-knobs' ,'@storybook/addon-links'],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  }
};
