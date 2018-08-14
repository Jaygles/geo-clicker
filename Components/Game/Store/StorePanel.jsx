import * as React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../../store/actions/index';

class StorePanel extends React.Component {
  purchase = (unit) => {
    const { dispatch, inventory, bank } = this.props;
    dispatch(Actions.purchaseInventory(unit, inventory, bank));
    dispatch(Actions.purchaseBank(unit, inventory, bank));
    dispatch(Actions.checkAvailability(bank, inventory));
  };
  _renderStoreButtons = () => {
    const storeButtons = [];
    const { store } = this.props;
    for (let i = 0; i < store.length; i += 1) {
      storeButtons.push(
        <button
          className="button"
          key={store[i].name}
          onClick={() => this.purchase(store[i])}
        >
          {store[i].display}
        </button>,
      );
    }
    return storeButtons;
  };
  render() {
    return (
      <div className="card content">
        <div className="card-header">
          <h2 className="card-header-title">Store</h2>
        </div>
        <div className="card-content">
          <h3>Welcome to my store</h3>
          {this._renderStoreButtons()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { store, inventory, bank } = state;
  return { store, inventory, bank };
}

export default connect(mapStateToProps)(StorePanel);
