import { ClientsListEntryPropsType } from './clients-list-entry';
import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';

export const ClientTableRow = (props: ClientsListEntryPropsType) => (
    <TableRow key={props.clientId}>
      <TableCell align="left">{props.clientId}</TableCell>
      <TableCell className="name" align="left">{props.name}</TableCell>
      <TableCell align="left">{props.scopes}</TableCell>
      <TableCell align="left">{props.grantFlows}</TableCell>
      <TableCell align="left">{props.redirectUris}</TableCell>
    </TableRow>
);