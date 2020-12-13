import React from 'react';
import { Argument } from './argument.component';
import { ArgumentPropsType } from './argument';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

describe('Argument Component', () => {
  const props: ArgumentPropsType = {
    title: 'My title',
    content: 'My content',
    picto: ''
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Argument {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render', () => {
    const wrapper = shallow(<Argument {...props} />);
    const component = wrapper.find('.title');

    expect(component).toHaveLength(1);
    expect(component.get(0)).toEqual(<div className="title">My title</div>);
  });
});
