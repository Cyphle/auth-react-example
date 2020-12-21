import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import { ClientDetailsPropsType, mapStoreDispatchToProps, mapStoreStateToProps, methods } from './client-details';

export const ClientDetails = (props: ClientDetailsPropsType) => {
  const { clientId } = useParams();
  let client = props.clients.find((client: Client) => client.clientId === clientId)
  if (client == null || client == undefined) {
    client = {
      name: '',
      clientId: '',
      clientSecret: '',
      scopes: [],
      grantFlows: [],
      autoApprove: false,
      redirectUris: []
    };
  }
  return (
      <div>
        Here are some details about client <br/>
        { clientId }
        { client.name }
        { client.clientId }
        { client.clientSecret }
        { client.scopes }
        { client.redirectUris }
      </div>
  );
};

export const ConnectedClientDetails = connect(
    mapStoreStateToProps,
    mapStoreDispatchToProps
)(lifecycle(methods)(ClientDetails));
