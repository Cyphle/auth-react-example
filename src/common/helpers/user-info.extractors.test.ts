import { extractOrganizations, findFirstOrganizationOfUser, findOrganizationByCode } from './user-info.extractors';

describe('UserInfo Extractors', () => {
  const userInfo: UserInfo = {
    username: 'admin-plateforme@lafoncierenumerique.com',
    firstName: 'John',
    lastName: 'Doe',
    authorities: [
      {
        role: 'SUPER_ADMIN',
        organizations: [
          {
            code: 'ORGA',
            name: 'Foncière',
            logo: '',
            type: 'TERTIARY',
            applications: [],
            authorizedProperties: []
          },
          {
            code: 'TWINCIE',
            name: 'Twincie organisation',
            logo: '',
            type: 'TERTIARY',
            applications: [],
            authorizedProperties: []
          },
          {
            code: 'NORGES',
            name: 'Norges organization',
            logo: '',
            type: 'TERTIARY',
            applications: [],
            authorizedProperties: []
          }
        ]
      },
      {
        role: 'MEMBER',
        organizations: [
          {
            code: 'UNOFI',
            name: 'Unifo',
            logo: '',
            type: 'TERTIARY',
            applications: [],
            authorizedProperties: []
          }
        ]
      }
    ]
  };

  it('should extract user organizations', () => {
    const organizations = extractOrganizations(userInfo);

    expect(organizations).toEqual([
      {
        code: 'ORGA',
        name: 'Foncière',
        logo: '',
        type: 'TERTIARY',
        applications: [],
        authorizedProperties: []
      },
      {
        code: 'TWINCIE',
        name: 'Twincie organisation',
        logo: '',
        type: 'TERTIARY',
        applications: [],
        authorizedProperties: []
      },
      {
        code: 'NORGES',
        name: 'Norges organization',
        logo: '',
        type: 'TERTIARY',
        applications: [],
        authorizedProperties: []
      },
      {
        code: 'UNOFI',
        name: 'Unifo',
        logo: '',
        type: 'TERTIARY',
        applications: [],
        authorizedProperties: []
      }
    ]);
  });

  it('should find organization by organization code', () => {
    const organization = findOrganizationByCode(userInfo, 'ORGA');

    expect(organization).toEqual({
      code: 'ORGA',
      name: 'Foncière',
      logo: '',
      type: 'TERTIARY',
      applications: [],
      authorizedProperties: []
    });
  });

  it('should return empty organization when no organization is found by code', () => {
    const organization = findOrganizationByCode(userInfo, 'UNKNOWN');

    expect(organization).toEqual({
      code: '',
      name: '',
      logo: '',
      type: 'TERTIARY',
      applications: [],
      authorizedProperties: []
    });
  });

  it('should return find first organization of user', () => {
    const organization = findFirstOrganizationOfUser(userInfo);

    expect(organization).toEqual({
      code: 'ORGA',
      name: 'Foncière',
      type: 'TERTIARY',
      logo: '',
      applications: [],
      authorizedProperties: []
    });
  });

  it('should return empty organization when user has no organization', () => {
    const organization = findFirstOrganizationOfUser({
      username: 'admin-plateforme@lafoncierenumerique.com',
      firstName: 'John',
      lastName: 'Doe',
      authorities: []
    });

    expect(organization).toEqual({
      code: '',
      name: '',
      logo: '',
      type: 'TERTIARY',
      applications: [],
      authorizedProperties: []
    });
  });
});
