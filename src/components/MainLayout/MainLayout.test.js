import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import MainLayout from './MainLayout';

describe('MainLayout', () => {
  const header = <div>Header</div>;
  const main = <div>Main</div>;
  const footer = <div>Footer</div>;
  const element = <MainLayout header={header} main={main} footer={footer} />;
  test('component renders', () => {
    const wrapper = shallow(element);
    expect(wrapper).toBeTruthy();
  });
  test('snapshot', () => {
    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
