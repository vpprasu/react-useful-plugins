import React, { Component } from 'react';

export default class ChildMessageRenderer extends Component {
  constructor(props) {
    super(props);

    this.editParentMethod = this.editParentMethod.bind(this);
    this.deleteParentMethod = this.deleteParentMethod.bind(this);
  }

  editParentMethod() {
    console.log(this.props)
    this.props.context.componentParent.editMethodFromParent(
      `Row: ${this.props.node.rowIndex}, Col: ${this.props.colDef.headerName}`
    );
  }

  deleteParentMethod() {
    console.log(this.props)
    this.props.context.componentParent.deleteMethodFromParent(
      `Row: ${this.props.node.rowIndex}, Col: ${this.props.colDef.headerName}`
    );
  }

  render() {
    return (
      <span>
        <button
          style={{ height: 20, lineHeight: 0.5 }}
          onClick={this.editParentMethod}
          className="btn btn-info"
        >
          Edit
        </button>
        <button
          style={{ height: 20, lineHeight: 0.5 }}
          onClick={this.deleteParentMethod}
          className="btn btn-danger"
        >
          Delete
        </button>
      </span>
    );
  }
}