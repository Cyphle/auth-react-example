import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import React from 'react';
import { methods } from './login';

export const Login = (props: any) => (<div></div>)

export const ConnectedLogin = connect(
    null,
    null
)(lifecycle(methods)(Login));
