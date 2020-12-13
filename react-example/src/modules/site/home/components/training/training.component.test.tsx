import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { TrainingPropType } from './training';
import { Training } from './training.component';

describe('Training Component', () => {
  const props: TrainingPropType = {
    school: 'School',
    title: 'Super diplôme',
    startDate: 2007,
    endDate: 2011
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Training {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render', () => {
    const wrapper = shallow(<Training {...props} />);
    const component = wrapper.find('.school');

    expect(component).toHaveLength(1);
    expect(component.get(0)).toEqual(<div className="school">School</div>);
  });
});
