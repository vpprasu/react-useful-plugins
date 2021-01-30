

import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from '@ag-grid-community/react';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css';
import axiosInstance from '../../axiosConfig'
class ServerAgGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modules: [ServerSideRowModelModule],
      columnDefs: [
        {
          field: 'athlete',
          minWidth: 220,
        },
        {
          field: 'country',
          minWidth: 200,
        },
        { field: 'year' },
        {
          field: 'sport',
          minWidth: 200,
        },
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
      ],
      defaultColDef: {
        flex: 1,
        minWidth: 100,
        sortable: true,
      },
      rowModelType: 'serverSide',
      serverSideStoreType: 'partial',
    };
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const httpRequest = new XMLHttpRequest();
    const updateData = (data) => {
      var fakeServer = createFakeServer(data);
      var datasource = createServerSideDatasource(fakeServer);
      params.api.setServerSideDatasource(datasource);
    };

    httpRequest.open(
      'GET',
      'https://www.ag-grid.com/example-assets/olympic-winners.json'
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  };

  render() {
    return (
      <div style={{ width: '100%', height: '500px' }}>
        <div
          id="myGrid"
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-alpine-dark"
        >
          <AgGridReact
            modules={this.state.modules}
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            rowModelType={this.state.rowModelType}
            serverSideStoreType={this.state.serverSideStoreType}
            animateRows={true}
            onGridReady={this.onGridReady}
          />
        </div>
      </div>
    );
  }
}

function createServerSideDatasource(server) {
  return {
    getRows: async function (params) {
      console.log(
        '[Datasource] - rows requested by grid: startRow = ' +
          params.request.startRow +
          ', endRow = ' +
          params.request.endRow
      );
      var response = await server.getData(params.request);
      setTimeout(function () {
        if (response.success) {
          params.success({ rowData: response.rows });
        } else {
          params.fail();
        }
      }, 1000);
    },
  };
}
function createFakeServer(allData) {
  return {
    getData: async function (request) {
      allData = await axiosInstance.post("/serverAgGrid/getData",request)
      return {
        success: true,
        rows: allData.data.rows,
      };
    },
  };
}

export default ServerAgGrid;
