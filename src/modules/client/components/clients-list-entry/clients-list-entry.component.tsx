import React from 'react';
import { ClientsListEntryPropsType } from './clients-list-entry';

export const ClientsListEntry = (props: ClientsListEntryPropsType) => (
  <div>
    <div className="name">{ props.name }</div>
    <div className="clientId">{ props.clientId }</div>
    <div className="clientSecret">{ props.clientSecret }</div>
    <div className="scopes">{ props.scopes }</div>
    <div className="grantFlows">{ props.grantFlows }</div>
    <div className="redirectUris">{ props.redirectUris }</div>
  </div>
);
