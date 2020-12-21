import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import React from 'react';
import { mapStoreDispatchToProps, mapStoreStateToProps, methods, UsersListPropsType } from './users-list';
import { UsersListEntry } from '../users-list-entry/users-list-entry.component';

export const UsersList = (props: UsersListPropsType) => (
  <div>
    { props.users.map(user => (
        <div key={ user.account.email }>
          <UsersListEntry { ...user } />
        </div>
    )) }
  </div>
);

export const ConnectedUsersList = connect(
    mapStoreStateToProps,
    mapStoreDispatchToProps
)(lifecycle(methods)(UsersList));
