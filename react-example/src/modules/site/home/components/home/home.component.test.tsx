import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { HomePropsType } from './home';
import { Home } from './home.component';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Argument } from '../argument/argument.component';

describe('Home Component', () => {
  const infos: Info[] = [
    {
      id: '1',
      key: 'key',
      value: 'value'
    }
  ];
  const args: Argument[] = [
    {
      id: '1',
      title: 'Title 1',
      content: 'Content 1',
      picto: ''
    },
    {
      id: '2',
      title: 'Title 2',
      content: 'Content 2',
      picto: ''
    }
  ];
  const trainings: Training[] = [
    {
      id: '1',
      school: 'Mines de Nantes',
      title: 'Diplôme d\'ingénieur',
      startDate: 2008,
      endDate: 2011
    }
  ];
  const skills: Skill[] = [
    {
      id: '1',
      category: 'Development',
      name: 'Java'
    }
  ];
  const props: HomePropsType = {
    infos,
    arguments: args,
    trainings,
    skills,
    fetchInfos: jest.fn(),
    fetchArguments: jest.fn(),
    fetchTrainings: jest.fn(),
    fetchSkills: jest.fn()
  };

  const mockStore = configureStore();
  const store = mockStore({
    homeState: {},
    togglesState: {
      groupName: '',
      toggles: []
    },
    groupsState: {
      groupsByEnv: []
    }
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={ store }><Router><Home { ...props } /></Router></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set props', () => {
    const wrapper = mount(<Router><Home { ...props }/></Router>);

    expect(wrapper.find(Home).props().arguments).toEqual(args);
    expect(wrapper.find(Home).props().infos).toEqual(infos);
    expect(wrapper.find(Home).props().trainings).toEqual(trainings);
    expect(wrapper.find(Home).props().skills).toEqual(skills);
  });

  it('should render arguments', () => {
    const wrapper = mount(<Router><Home { ...props }/></Router>);
    const args = wrapper.find(Argument);
    const infos = wrapper.find('.info');

    expect(args).toHaveLength(2);
    expect(infos).toHaveLength(3);
  });
});
