import { UsersListEntryPropsType } from './users-list-entry';
import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

export const UserListItem = (props: UsersListEntryPropsType) => (
    <ListItem className="username" key={ props.account.email }>
      <ListItemText primary={ `${ props.account.email } - ${ props.account.firstName } ${ props.account.lastName }` }/>
    </ListItem>
);