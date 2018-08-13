import * as React from 'react';
import { connect } from 'react-redux';

class InventoryPanel extends React.Component {
  render() {
    return (
      <div className="card content">
        <div className="card-header">
          <h2 className="card-header-title">Inventory</h2>
        </div>
        <div className="card-content">
          <p>Point Pickers: {this.props.inventory.pointsPickers}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { inventory } = state;
  return { inventory };
}

export default connect(mapStateToProps)(InventoryPanel);
