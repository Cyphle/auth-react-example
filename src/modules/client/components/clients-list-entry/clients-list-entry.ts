export interface ClientsListEntryPropsType {
  name: string;
  clientId: string;
  clientSecret: string;
  scopes: string[];
  grantFlows: string[];
  redirectUris: string[];
}
