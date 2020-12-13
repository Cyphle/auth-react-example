import { mockStore as store } from '../store/redux.mock';
import { getRoute } from './common.controller';
import { config } from '../config/application.config';
import { logger } from '../config/logger.config';

export const getIdentityRoute = app =>
    app.get(`${ config.get('BASE_URL') }/identity`, getRoute(store.select((state: any) => state.identity)));

export const getArgumentsRoute = app =>
  app.get(`${config.get('BASE_URL')}/arguments`, getRoute(store.select((state: any) => state.arguments)));

export const getHomePageMapRoute = app =>
  app.get(`${config.get('BASE_URL')}/home-page-map`, getRoute(store.select((state: any) => state.homepagemap)));

export const getUsersRoute = app =>
  app.get(`${config.get('BASE_URL')}/users`, getRoute(store.select((state: any) => state.user)));

export const activateGetRoutes = (app: any): void => {
  logger.info('Activating get routes');
  getIdentityRoute(app);
  getArgumentsRoute(app);
  getHomePageMapRoute(app);
  getUsersRoute(app);
};
