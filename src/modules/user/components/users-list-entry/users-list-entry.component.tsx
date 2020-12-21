import React from 'react';
import { UsersListEntryPropsType } from './users-list-entry';

export const UsersListEntry = (props: UsersListEntryPropsType) => (
  <div>
    <div className="username">{ props.account.email }</div>
    <div className="firstName">{ props.account.firstName }</div>
    <div className="lastName">{ props.account.lastName }</div>
  </div>
);
