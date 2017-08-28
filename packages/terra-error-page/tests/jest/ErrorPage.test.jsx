import React from 'react';
import ErrorPage from '../../src/ErrorPage';

describe('ErrorPage', () => {
  const defaultRender = <ErrorPage />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.error-page').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class error-page', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('error-page');
  });
});
