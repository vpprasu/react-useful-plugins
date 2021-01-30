import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css';

class ServerAgGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modules: AllCommunityModules,
      columnDefs: [
        {
          headerName: 'Athlete',
          field: 'athlete',
        },
        {
          headerName: 'Sport',
          field: 'sport',
        },
        {
          headerName: 'Age',
          field: 'age',
          type: 'numberColumn',
        },
        {
          headerName: 'Year',
          field: 'year',
          type: 'numberColumn',
        },
        {
          headerName: 'Date',
          field: 'date',
          type: ['dateColumn', 'nonEditableColumn'],
          width: 220,
        },
        {
          headerName: 'Medals',
          groupId: 'medalsGroup',
          children: [
            {
              headerName: 'Gold',
              field: 'gold',
              type: 'medalColumn',
            },
            {
              headerName: 'Silver',
              field: 'silver',
              type: 'medalColumn',
            },
            {
              headerName: 'Bronze',
              field: 'bronze',
              type: 'medalColumn',
            },
            {
              headerName: 'Total',
              field: 'total',
              type: 'medalColumn',
              columnGroupShow: 'closed',
            },
          ],
        },
      ],
      defaultColDef: {
        width: 150,
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter: true,
        resizable: true,
      },
      defaultColGroupDef: { marryChildren: true },
      columnTypes: {
        numberColumn: {
          width: 130,
          filter: 'agNumberColumnFilter',
        },
        medalColumn: {
          width: 100,
          columnGroupShow: 'open',
          filter: false,
        },
        nonEditableColumn: { editable: false },
        dateColumn: {
          filter: 'agDateColumnFilter',
          filterParams: {
            comparator: function (filterLocalDateAtMidnight, cellValue) {
              var dateParts = cellValue.split('/');
              var day = Number(dateParts[0]);
              var month = Number(dateParts[1]) - 1;
              var year = Number(dateParts[2]);
              var cellDate = new Date(year, month, day);
              if (cellDate < filterLocalDateAtMidnight) {
                return -1;
              } else if (cellDate > filterLocalDateAtMidnight) {
                return 1;
              } else {
                return 0;
              }
            },
          },
        },
      },
      rowData: null,
    };
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const httpRequest = new XMLHttpRequest();
    const updateData = (data) => {
      this.setState({ rowData: data });
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
      <div style={{ width: '100%', height: '700px' }}>
        <div style={{ height: '100%', boxSizing: 'border-box' }}>
          <div
            id="myGrid"
            style={{
              height: '100%',
              width: '100%',
            }}
            className="ag-theme-alpine"
          >
            <AgGridReact
              modules={this.state.modules}
              columnDefs={this.state.columnDefs}
              defaultColDef={this.state.defaultColDef}
              defaultColGroupDef={this.state.defaultColGroupDef}
              columnTypes={this.state.columnTypes}
              rowData={this.state.rowData}
              onGridReady={this.onGridReady}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ServerAgGrid;
