import React from 'react';
import StatusView from '../../src/StatusView';

describe('StatusView', () => {
  const defaultRender = <StatusView type="custom" />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });
});
