import React from 'react';
import { connect } from 'react-redux';
import './create-client.component.scss';
import {
  CreateClientPropsType,
  CreateClientStateType,
  mapStoreDispatchToProps,
  mapStoreStateToProps
} from './create-client';
import { CSRF_COOKIE } from '../../../../common/helpers/constants';

export class CreateClientComponent extends React.Component<CreateClientPropsType, CreateClientStateType> {
  constructor(props: CreateClientPropsType) {
    super(props);
    this.state = {
      name: '',
      clientId: '',
      clientSecret: '',
      scopes: ['user_info'],
      grantFlows: ['CODE'],
      autoApprove: true,
      redirectUris: ['http://localhost:3000/login']
    };
  }

  handleChangeName = ({ target }: { target: { value: string } }): void => {
    this.setState({ name: target.value })
  }

  handleChangeClientId = ({ target }: { target: { value: string } }): void => {
    this.setState({ clientId: target.value });
  }

  handleChangeClientSecret = ({ target }: { target: { value: string } }): void => {
    this.setState({ clientSecret: target.value });
  }

  handleSubmit = (event: any) => {
    this.props.createClient(
        {
          name: this.state.name,
          clientId: this.state.clientId,
          clientSecret: this.state.clientSecret,
          scopes: this.state.scopes,
          grantFlows: this.state.grantFlows,
          autoApprove: this.state.autoApprove,
          redirectUris: this.state.redirectUris
        },
        this.props.cookies[CSRF_COOKIE]
    );
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label htmlFor="name">Nom </label>
            <input id="name" type="text" value={ this.state.name } onChange={ this.handleChangeName }/>
          </div>

          <div className="form-group">
            <label htmlFor="client-id">Client Id </label>
            <input id="client-id" type="text" value={ this.state.clientId } onChange={ this.handleChangeClientId }/>
          </div>

          <div className="form-group">
            <label htmlFor="client-secret">Client secret </label>
            <input id="client-secret" type="text" value={ this.state.clientSecret }
                   onChange={ this.handleChangeClientSecret }/>
          </div>

          <input type="submit" value="Envoyer"/>
        </form>
    );
  }
}

export const ConnectedCreateClient = connect(
    mapStoreStateToProps,
    mapStoreDispatchToProps
)(CreateClientComponent);
