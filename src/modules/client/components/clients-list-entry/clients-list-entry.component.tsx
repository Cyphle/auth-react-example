import React from 'react';
import { ClientsListEntryPropsType } from './clients-list-entry';
import { Link } from 'react-router-dom';

export const ClientsListEntry = (props: ClientsListEntryPropsType) => (
  <div>
    <div className="name">{ props.name }</div>
    <div className="clientId">{ props.clientId }</div>
      <div><Link to={ `/clients/${props.clientId}` }>Go to</Link></div>
  </div>
);
