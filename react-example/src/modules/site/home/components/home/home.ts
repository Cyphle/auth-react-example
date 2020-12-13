import { AppState } from '../../../../../store';
import { HomeState } from '../../store/home.state';
import {
  fetchArgumentsAction,
  fetchInfosAction,
  fetchSkillsAction,
  fetchTrainingsAction
} from '../../store/home.actions';

export interface HomePropsType {
  infos: Info[];
  arguments: Argument[];
  trainings: Training[];
  skills: Skill[];
  fetchInfos: () => Action;
  fetchArguments: () => Action;
  fetchTrainings: () => Action;
  fetchSkills: () => Action;
}

export const mapStateToProps = ({ homeState }: AppState): HomeState => ({
  infos: homeState.infos,
  arguments: homeState.arguments,
  trainings: homeState.trainings,
  skills: homeState.skills
});

export const mapDispatchToProps = ({
  fetchInfos: fetchInfosAction,
  fetchArguments: fetchArgumentsAction,
  fetchTrainings: fetchTrainingsAction,
  fetchSkills: fetchSkillsAction
});

export const methods = {
  componentDidMount(props: HomePropsType): void {
    props.fetchInfos();
    props.fetchArguments();
    props.fetchTrainings();
    props.fetchSkills();
  }
};
