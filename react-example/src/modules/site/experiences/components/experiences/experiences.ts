import { AppState } from '../../../../../store';
import { ExperiencesState } from '../../store/experiences.state';
import { fetchExperiencesAction } from '../../store/experiences.actions';

export interface ExperiencesPropsType {
  experiences: Experience[],
  fetchExperiences: () => Action;
}

export const mapStateToProps = ({ experiencesState }: AppState): ExperiencesState => ({
  experiences: experiencesState.experiences
});

export const mapDispatchToProps = ({
  fetchExperiences: fetchExperiencesAction
});

export const methods = {
  componentDidMount(props: ExperiencesPropsType): void {
    props.fetchExperiences();
  }
};
