import { AppState } from '../../../../../store';
import { ProjectsState } from '../../store/projects.state';
import { fetchProjectsAction } from '../../store/projects.actions';

export interface ProjectsPropsType {
  projects: Project[];
  fetchProjects: () => Action;
}

export const mapStateToProps = ({ projectsState }: AppState): ProjectsState => ({
  projects: projectsState.projects
});

export const mapDispatchToProps = ({
  fetchProjects: fetchProjectsAction
});

export const methods = {
  componentDidMount(props: ProjectsPropsType): void {
    props.fetchProjects();
  }
};
