import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import React from 'react';
import { ClientsListPropsType, mapStoreDispatchToProps, mapStoreStateToProps, methods } from './clients-list';
import './clients-list.component.scss';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { ClientTableRow } from '../clients-list-entry/client-table-row.component';

export const ClientsList = (props: ClientsListPropsType) => (
    <div>
      <div>
        <TableContainer component={ Paper }>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Client ID</TableCell>
                <TableCell align="right">Nom</TableCell>
                <TableCell align="right">Scopes</TableCell>
                <TableCell align="right">Flows</TableCell>
                <TableCell align="right">URI</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { props.clients.map((client: Client) => (
                  <ClientTableRow { ...client } />
              )) }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
);

export const ConnectedClientsList = connect(
    mapStoreStateToProps,
    mapStoreDispatchToProps
)(lifecycle(methods)(ClientsList));
