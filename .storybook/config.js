import { configure } from '@storybook/react';

function loadStories() {
  require('../.storybook/stories/index.js');
}

configure(loadStories, module);
