import * as React from 'react';
import { connect } from 'react-redux';

class InventoryPanel extends React.Component {
  _renderInventory = () => {
    const { inventory } = this.props;
    const inventoryArr = [];
    for (let i = 0; i < inventory.length; i += 1) {
      if (inventory[i].amount > 0) {
        inventoryArr.push(
          <p key={inventory[i].name}>
            {inventory[i].name}: {inventory[i].amount}
          </p>,
        );
      }
      return inventoryArr;
    }
  };
  render() {
    return (
      <div className="card content">
        <div className="card-header">
          <h2 className="card-header-title">Inventory</h2>
        </div>
        <div className="card-content">{this._renderInventory()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { inventory } = state;
  return { inventory };
}

export default connect(mapStateToProps)(InventoryPanel);
