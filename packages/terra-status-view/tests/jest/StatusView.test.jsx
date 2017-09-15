import React from 'react';
import IconClose from 'terra-icon/lib/icon/IconClose';// TODO
import StatusView from '../../src/StatusView';

describe('StatusView', () => {
  const subtextContent = (<p>Buttons or other controls comes here for next action</p>);

  // Snapshot Tests
  it('should render a custom status view component', () => {
    const custom = (<StatusView
      icon={<IconClose />}
      heading="custom Heading"
      type="custom"
      subtext="Description comes here"
      subtextContent={subtextContent}
    />);
    const wrapper = shallow(custom);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a custom status view component without icon', () => {
    const custom = (<StatusView
      heading="custom Heading"
      type="custom"
      subtext="Description comes here"
      subtextContent={subtextContent}
      isIconHidden
    />);
    const wrapper = shallow(custom);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a no_data status view component', () => {
    const testComp = (<StatusView
      type="no_data"
      subtext="Description comes here"
      subtextContent={subtextContent}
    />);
    const wrapper = shallow(testComp);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a no_data status view component without icon', () => {
    const testComp = (<StatusView
      type="no_data"
      subtext="Description comes here"
      subtextContent={subtextContent}
      isIconHidden
    />);
    const wrapper = shallow(testComp);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a no_result status view component', () => {
    const testComp = (<StatusView
      type="no_result"
      subtext="Description comes here"
      subtextContent={subtextContent}
    />);
    const wrapper = shallow(testComp);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a not_authorized status view component', () => {
    const testComp = (<StatusView
      type="not_authorized"
      subtext="Description comes here"
      subtextContent={subtextContent}
    />);
    const wrapper = shallow(testComp);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a sensitive_data status view component', () => {
    const testComp = (<StatusView
      type="sensitive_data"
      subtext="Description comes here"
      subtextContent={subtextContent}
    />);
    const wrapper = shallow(testComp);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a error status view component', () => {
    const testComp = (<StatusView
      type="error"
      subtext="Description comes here"
      subtextContent={subtextContent}
    />);
    const wrapper = shallow(testComp);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a no_internet status view component', () => {
    const testComp = (<StatusView
      type="no_internet"
      subtext="Description comes here"
      subtextContent={subtextContent}
    />);
    const wrapper = shallow(testComp);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a error_loading status view component', () => {
    const testComp = (<StatusView
      type="error_loading"
      subtext="Description comes here"
      subtextContent={subtextContent}
    />);
    const wrapper = shallow(testComp);
    expect(wrapper).toMatchSnapshot();
  });
});
