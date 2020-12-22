import { GlobalActionTypes, loadUserInfoAction } from './global.actions';

describe('Global Actions', () => {
  it('should generate action for fetch medias', () => {
    const action = loadUserInfoAction();

    expect(action).toEqual({
      type: GlobalActionTypes.LOAD_USER_INFO
    });
  });
});
