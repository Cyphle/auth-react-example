const isSuperAdmin = (userInfo: UserInfo): boolean => {
  return userInfo
      .authorities
      .map((authority: Authority) => authority.role)
      .includes('SUPER_ADMIN');
}

export const superAdminGuard = (redirectUri: string) => (userInfo: UserInfo): string => {
  return isSuperAdmin(userInfo) ? '' : redirectUri;
}