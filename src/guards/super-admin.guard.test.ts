import { superAdminGuard } from './super-admin.guard';

describe('SuperAdminGuard', () => {
  const superAdmin: UserInfo = {
    username: 'john.doe@dodo.fr',
    firstName: 'John',
    lastName: 'Doe',
    authorities: [{
      role: 'SUPER_ADMIN',
      organizations: []
    }]
  };
  const notSuperAdmin: UserInfo = {
    username: 'john.doe@dodo.fr',
    firstName: 'John',
    lastName: 'Doe',
    authorities: [{
      role: 'MEMBER',
      organizations: []
    }]
  };

  it('should return empty string when super admin', () => {
    const result = superAdminGuard('/')(superAdmin);

    expect(result).toEqual('');
  })

  it('should return redirect uri when not super admin', () => {
    const result = superAdminGuard('/')(notSuperAdmin);

    expect(result).toEqual('/');
  })
});