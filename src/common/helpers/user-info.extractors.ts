export const extractOrganizations = (userInfo: UserInfo): Organization[] =>
    (userInfo || { username: '', firstName: '', lastName: '', authorities: [] }).authorities
        .reduce((accumulator: Organization[], currentValue: Authority) => [
          ...accumulator,
          ...currentValue.organizations
        ], []);

export const findOrganizationByCode = (userInfo: UserInfo, organizationCode: string): Organization => {
  const organizations = extractOrganizations(userInfo);
  const foundOrganization = organizations.find(organization => organization.code === organizationCode);
  return foundOrganization != null ? Object.assign({}, foundOrganization) : {
    code: '',
    name: '',
    logo: '',
    type: 'TERTIARY',
    applications: [],
    authorizedProperties: []
  };
};

export const findFirstOrganizationOfUser = (userInfo: UserInfo): Organization => {
  const organizations = extractOrganizations(userInfo);
  return organizations.length > 0 ? Object.assign({}, organizations[0]) : {
    code: '',
    name: '',
    logo: '',
    type: 'TERTIARY',
    applications: [],
    authorizedProperties: []
  };
};
