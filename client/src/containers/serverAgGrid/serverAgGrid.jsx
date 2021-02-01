

import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from '@ag-grid-community/react';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { MultiFilterModule } from '@ag-grid-enterprise/multi-filter';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ClipboardModule } from '@ag-grid-enterprise/clipboard';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css';
import axiosInstance from '../../axiosConfig'
import ChildMessageRenderer from './childMessageRenderer.jsx';
class ServerAgGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modules: [ServerSideRowModelModule,
        MultiFilterModule,
        SetFilterModule,
        MenuModule,
        ClipboardModule,
        FiltersToolPanelModule],
        columnDefs: [
          {
            field: 'athlete',
            minWidth: 220,
          },
          {
            headerName: 'Athlete',
            field: 'athlete',
            minWidth: 220,
          },
        {
          headerName: 'Country',
          field: 'country',
          filter: 'agSetColumnFilter',
          filterParams: {
            values: ['United States', 'Russia', 'Australia', 'China', 'Norway', 'Netherlands', 'France'],
            defaultToNothingSelected: true,
            showTooltips: true,
          },
        },
        { headerName: 'Year', field: 'year' },
        {
          headerName: 'Sport',
          field: 'sport',
          minWidth: 200,
        },
        { headerName: 'gold', field: 'gold' },
        { headerName: 'silver', field: 'silver' },
        { headerName: 'bronze', field: 'bronze' },
        {
          headerName: 'Actions',
          field: 'value',
          cellRenderer: 'childMessageRenderer',
          colId: 'params',
          editable: false,
          minWidth: 150,
        },
      ],
      defaultColDef: {
        editable: true,
        flex: 1,
        minWidth: 100,
        sortable: true,
        menuTabs: ['filterMenuTab'],
        floatingFilter: true,
        resizable : true
      },
      rowModelType: 'serverSide',
      serverSideStoreType: 'partial',
      sideBar: { toolPanels: ['filters'] },
      frameworkComponents: {
        childMessageRenderer: ChildMessageRenderer
      },
      context: { componentParent: this },
      
    };
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const httpRequest = new XMLHttpRequest();
    const updateData = (data) => {
      var fakeServer = createFakeServer(data,params);
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
  editMethodFromParent = (cell) => {
    alert('Edit Parent Component Method from ' + cell + '!');
  };
  deleteMethodFromParent = (cell) => {
    alert('Delete Parent Component Method from ' + cell + '!');
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
            sideBar={this.state.sideBar}
            animateRows={true}
            onGridReady={this.onGridReady}
            context={this.state.context}
            frameworkComponents={this.state.frameworkComponents}
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
function createFakeServer(allData,params) {
  return {
    getData: async function (request) {
      allData = await axiosInstance.post("/serverAgGrid/getData",request)
      let countriesArr = []; 
      allData.data.rows.map(obj => !countriesArr.includes(obj.country) && countriesArr.push(obj.country) )
      console.log(`entered....`)
      params.api.setColumnDefs([
        {
          headerName: 'Athlete',
          field: 'athlete',
          minWidth: 220,
        },
        {
          headerName: 'Country',
          field: 'country',
          filter: 'agSetColumnFilter',
          filterParams: {
            values: countriesArr,
            defaultToNothingSelected: true,
            showTooltips: true,
          },
        },
        { headerName: 'Year', field: 'year' },
        {
          headerName: 'Sport',
          field: 'sport',
          minWidth: 200,
        },
        { headerName: 'gold', field: 'gold' },
        { headerName: 'silver', field: 'silver' },
        { headerName: 'bronze', field: 'bronze' },
        {
          headerName: 'Actions',
          field: 'value',
          cellRenderer: 'childMessageRenderer',
          colId: 'params',
          editable: false,
          minWidth: 150,
        },
      ]);
      return {
        success: true,
        rows: allData.data.rows,
      };
    },
  };
}

export default ServerAgGrid;
