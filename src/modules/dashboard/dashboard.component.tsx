import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import React from 'react';
import { DashboardPropsType, mapStoreDispatchToProps, mapStoreStateToProps, methods } from './dashboard';

export const DashBoard = (props: DashboardPropsType) => {
  return (
      <div>
        Bonjour ! Here is a home page that displays info when connected.<br/>
        { props.userInfo.username }
        { props.userInfo.firstName }
        { props.userInfo.lastName }
      </div>
  );
};

export const ConnectedDashboard = connect(
    mapStoreStateToProps,
    mapStoreDispatchToProps
)(lifecycle(methods)(DashBoard));
