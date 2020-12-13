import { AppState } from '../../../../../store';
import { ArtState } from '../../store/art.state';
import { fetchMediasAction } from '../../store/art.actions';

export interface GalleryPropsType {
  medias: Media[];
  fetchMedias: () => Action;
}

export const mapStateToProps = ({ artState }: AppState): ArtState => ({
  medias: artState.medias
});

export const mapDispatchToProps = ({
  fetchMedias: fetchMediasAction
});

export const methods = {
  componentDidMount(props: GalleryPropsType): void {
    props.fetchMedias();
  }
};

