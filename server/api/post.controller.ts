import { logger } from '../config/logger.config';
import { ActionTypes } from '../store/action-types.mock';
import { mockStore as store } from '../store/redux.mock';

const addProject = (req: any, res: any, next: Function) => {
  logger.info('Adding project');

  const project = req.body;
  store.dispatch({
    type: ActionTypes.MOCK_ADD_PROJECT,
    payload: project
  });

  res.status(200);
  res.send();
};
