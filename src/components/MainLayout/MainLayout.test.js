import React from 'react';
import { shallow } from 'enzyme';

import MainLayout from './MainLayout';

describe('MainLayout', () => {
  test('component renders', () => {
    const header = <div>Header</div>;
    const main = <div>Main</div>;
    const footer = <div>Footer</div>;
    const element = <MainLayout header={header} main={main} footer={footer} />;
    const wrapper = shallow(element);
    expect(wrapper).toBeTruthy();
  });
});
