import { logger } from '../config/logger.config';
import { ActionTypes } from '../store/action-types.mock';
import { mockStore as store } from '../store/redux.mock';
import { config } from '../config/application.config';

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

export const postProjectRoute = app =>
    app.post(`${ config.get('BASE_URL') }/projects`, addProject);

const addClient = (req: any, res: any, next: Function) => {
  logger.info('Adding project');

  const project = req.body;
  console.log(project);

  res.status(200);
  res.send();
};

export const postClientRoute = app =>
    app.post(`/clients`, addClient);

export const activatePostRoutes = (app: any): void => {
  logger.info('Activating get routes');
  postProjectRoute(app);
  postClientRoute(app);
};
