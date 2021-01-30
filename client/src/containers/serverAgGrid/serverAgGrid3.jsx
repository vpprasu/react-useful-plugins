

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
          field: 'athlete',
          filter: 'agTextColumnFilter',
          filterParams: athleteFilterParams,
        },
        {
          field: 'country',
          filterParams: countryFilterParams,
        },
        {
          field: 'year',
          filter: 'agNumberColumnFilter',
          filterParams: { filterOptions: ['inRange'] },
        },
        {
          field: 'sport',
          filter: 'agTextColumnFilter',
          filterParams: {
            caseSensitive: true,
            defaultOption: 'startsWith',
          },
        },
      ],
      defaultColDef: {
        flex: 1,
        sortable: true,
        filter: true,
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
      <div style={{ width: '100%', height: '100%' }}>
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
            rowData={this.state.rowData}
            onGridReady={this.onGridReady}
          />
        </div>
      </div>
    );
  }
}

function contains(target, lookingFor) {
  return target && target.indexOf(lookingFor) >= 0;
}
var athleteFilterParams = {
  filterOptions: ['contains', 'notContains'],
  textFormatter: function (r) {
    if (r == null) return null;
    return r
      .toLowerCase()
      .replace(/\s/g, '')
      .replace(/[àáâãäå]/g, 'a')
      .replace(/æ/g, 'ae')
      .replace(/ç/g, 'c')
      .replace(/[èéêë]/g, 'e')
      .replace(/[ìíîï]/g, 'i')
      .replace(/ñ/g, 'n')
      .replace(/[òóôõö]/g, 'o')
      .replace(/œ/g, 'oe')
      .replace(/[ùúûü]/g, 'u')
      .replace(/[ýÿ]/g, 'y')
      .replace(/\W/g, '');
  },
  debounceMs: 200,
  suppressAndOrCondition: true,
};
var countryFilterParams = {
  filterOptions: ['contains'],
  textCustomComparator: function (_, value, filterText) {
    var filterTextLowerCase = filterText.toLowerCase();
    var valueLowerCase = value.toString().toLowerCase();
    var aliases = {
      usa: 'united states',
      holland: 'netherlands',
      vodka: 'russia',
      niall: 'ireland',
      sean: 'south africa',
      alberto: 'mexico',
      john: 'australia',
      xi: 'china',
    };
    var literalMatch = contains(valueLowerCase, filterTextLowerCase);
    return (
      literalMatch || contains(valueLowerCase, aliases[filterTextLowerCase])
    );
  },
  debounceMs: 2000,
};

export default ServerAgGrid;
// render(<GridExample></GridExample>, document.querySelector('#root'));
