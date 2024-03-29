declare module 'react-pure-lifecycle'

interface Action {
  type: string;
  payload?: any;
}

type AUTH_STATUS = 'PENDING' | 'AUTH' | 'NOT_AUTH';

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

interface User {
  account: AccountView;
  authorities: Authority[];
}

interface AccountView {
  email: string;
  firstName: string;
  lastName: string;
}

interface Client {
  name: string;
  clientId: string;
  clientSecret: string;
  scopes: string[];
  grantFlows: string[];
  autoApprove: boolean;
  redirectUris: string[];
}

interface AlreadyExistingClientError {
    clientId: string;
}

interface TreatmentResult {
  data: Client[];
  errors: AlreadyExistingClientError[];
}
