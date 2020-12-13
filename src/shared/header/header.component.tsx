import React from 'react';
import { HeaderPropsTyping } from './header.typings';
import './header.component.scss';
import lifecycle from "react-pure-lifecycle";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps, methods } from "./header";

export const Header = (props: HeaderPropsTyping) => (
    <header className="header-wrapper">
      <div className="header">
        <div className="logo">
          LOGO
        </div>

        <div className="search">
          SEARCH
        </div>

        <div className="app-menu">
          APPS
        </div>

        <div className="user-menu">
          MENU
        </div>
      </div>
    </header>
);

export const ConnectedHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(lifecycle(methods)(Header));
