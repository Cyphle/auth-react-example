import React from 'react';
import './header.component.scss';
import lifecycle from "react-pure-lifecycle";
import { connect } from "react-redux";
import { HeaderPropsType, mapDispatchToProps, mapStateToProps, methods } from './header';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/Button';

export const Header = (props: HeaderPropsType) => (
    <div>
      <header className="header-wrapper">
        <nav>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button className="menu-link"><Link to="/">Home</Link></Button>
            <Button><Link to="/users">Users</Link></Button>
            <Button><Link to="/clients">Clients</Link></Button>
            <Button><Link to="/create-client">Create client</Link></Button>
          </ButtonGroup>
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
