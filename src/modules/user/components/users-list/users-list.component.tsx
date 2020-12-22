import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import React from 'react';
import { mapStoreDispatchToProps, mapStoreStateToProps, methods, UsersListPropsType } from './users-list';
import { Divider, List } from '@material-ui/core';
import { UserListItem } from '../users-list-entry/user-list-item.component';

export const UsersList = (props: UsersListPropsType) => (
    <div>
      <List aria-label="mailbox folders">
        { props.users.map(user => (
            <div>
              <UserListItem { ...user } />
              <Divider/>
            </div>
        )) }
      </List>
    </div>
);

export const ConnectedUsersList = connect(
    mapStoreStateToProps,
    mapStoreDispatchToProps
)(lifecycle(methods)(UsersList));
