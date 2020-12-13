import React from 'react';
import { UsersListEntryPropsType } from './users-list-entry';

export const UsersListEntry = (props: UsersListEntryPropsType) => (
  <div>
    <div className="username">{ props.username }</div>
    <div className="firstName">{ props.firstName }</div>
    <div className="lastName">{ props.lastName }</div>
    <div className="email">{ props.email }</div>
  </div>
);
