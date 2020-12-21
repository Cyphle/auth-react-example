import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import React from 'react';
import { ClientsListPropsType, mapStoreDispatchToProps, mapStoreStateToProps, methods } from './clients-list';
import { ClientsListEntry } from '../clients-list-entry/clients-list-entry.component';

export const ClientsList = (props: ClientsListPropsType) => (
  <div>
    { props.clients.map(client => (
        <div key={ client.clientId }>
          <ClientsListEntry { ...client } />
        </div>
    )) }
  </div>
);

export const ConnectedClientsList = connect(
    mapStoreStateToProps,
    mapStoreDispatchToProps
)(lifecycle(methods)(ClientsList));
