import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import React from 'react';
import ReactMUIDatatableBody from './ReactMUIDatatableBody';
import ReactMUIDatatableFooter from './ReactMUIDatatableFooter';
import ReactMUIDatatableHeader from './ReactMUIDatatableHeader';
import ReactMUIDatatableToolbar from './ReactMUIDatatableToolbar';
import ReactMUIDatatableToolbarFilterValues from './ReactMUIDatatableToolbarFilterValues';
import ReactMUIDatatableToolbarSelect from './ReactMUIDatatableToolbarSelect';
import withReactMUIDatatable from './withReactMUIDatatable';

const ReactMUIDatatable = props => {
  return (
    <Paper>
      {props.selectedRows.length ? (
        <ReactMUIDatatableToolbarSelect />
      ) : (
        <ReactMUIDatatableToolbar />
      )}
      <ReactMUIDatatableToolbarFilterValues />
      <Table>
        <ReactMUIDatatableHeader />
        <ReactMUIDatatableBody />
        <ReactMUIDatatableFooter />
      </Table>
    </Paper>
  );
};

export default withReactMUIDatatable(ReactMUIDatatable);
