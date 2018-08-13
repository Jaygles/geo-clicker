import * as React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../../store/actions/index';

class StorePanel extends React.Component {
  purchasePicker = (amount) => {
    const { dispatch } = this.props;
    dispatch(Actions.purchasePointsPickers(amount));
  };
  render() {
    return (
      <div className="card content">
        <div className="card-header">
          <h2 className="card-header-title">Store</h2>
        </div>
        <div className="card-content">
          <h3>Welcome to my store</h3>
          <button onClick={() => this.purchasePicker(1)} className="button">
            Points Picker
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { inventory, store } = state;
  return { inventory, store };
}

export default connect(mapStateToProps)(StorePanel);
