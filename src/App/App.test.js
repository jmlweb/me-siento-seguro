import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  test('it renders', () => {
    const element = <App />;
    const wrapper = shallow(element);
    expect(wrapper).toBeTruthy();
  });
});
