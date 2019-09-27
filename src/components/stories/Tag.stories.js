import React from 'react';
import { storiesOf } from '@storybook/react';

import Tag from '../Tag';

storiesOf('Tag', module)
  .add('Default', () => (
    <Tag key='1' tagName='develop' tagCount='5' />
  ));
