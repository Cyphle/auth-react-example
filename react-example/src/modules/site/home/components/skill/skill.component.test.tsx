import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { SkillPropsType } from './skill';
import { Skill } from './skill.component';

describe('Skill Component', () => {
  const props: SkillPropsType = {
    category: 'Development',
    name: 'Java'
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Skill {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render', () => {
    const wrapper = shallow(<Skill {...props} />);
    const component = wrapper.find('.skill');

    expect(component).toHaveLength(1);
    expect(component.get(0)).toEqual(<div className="skill">Java</div>);
  });
});
