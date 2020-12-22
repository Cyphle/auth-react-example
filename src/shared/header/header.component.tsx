import React from 'react';
import './header.component.scss';
import lifecycle from "react-pure-lifecycle";
import { connect } from "react-redux";
import { HeaderPropsType, mapDispatchToProps, mapStateToProps, methods } from './header';
import { Link } from 'react-router-dom';

export const Header = (props: HeaderPropsType) => (
    <div>
      <header className="header-wrapper">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/create-client">Create client</Link>
        </nav>
      </header>

      <div className="user-info">
        { props.userInfo.username }
      </div>
    </div>
);

export const ConnectedHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(lifecycle(methods)(Header));
