declare module 'react-pure-lifecycle'

interface Action {
  type: string;
  payload?: any;
}

// TODO TO BE DELETED FROM HERE
interface UserInfo {
  username: string;
  firstName: string;
  lastName: string;
  authorities: Authority[];
}

interface Authority {
  role: Role;
  organizations: Organization[];
}

interface Organization {
  code: string;
  name: string;
  logo: string;
  type: OrganizationType;
  applications: Application[];
  authorizedProperties: string[];
}

interface Application {
  name: string;
  url: string;
  logo: Logo;
}

interface Logo {
  logoResource: string;
  logoFormat: LogoFormat;
}

type OrganizationType = 'TERTIARY' | 'SOCIAL_HOUSING';

type Role = 'SUPER_ADMIN' | 'ADMIN' | 'MEMBER' | 'NOT_MEMBER';

type LogoFormat = 'SVG' | 'PNG';
// TODO TO BE DELETED TO HERE HERE

interface User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}
