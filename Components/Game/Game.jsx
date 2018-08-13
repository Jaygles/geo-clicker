import * as React from 'react';
import { connect } from 'react-redux';
import BankPanel from './Bank/BankPanel';
import GatheringPanel from './Gathering/GatheringPanel';
import InventoryPanel from './Inventory/InventoryPanel';
import StorePanel from './Store/StorePanel';
import * as Actions from '../../store/actions';
import css from './Game.scss';

class Game extends React.Component {
  state = {
    gameInterval: null,
  };
  componentDidMount() {
    this.setState({
      gameInterval: setInterval(() => {
        this.props.dispatch(
          Actions.increment(this.props.bank, this.props.inventory),
        );
        this.props.dispatch(Actions.checkAvailability(this.props.bank));
      }, 250),
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.gameInterval);
  }
  addPoints = (amount) => {
    const { dispatch } = this.props;
    dispatch(Actions.addPoints(amount));
  };
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-3">
              <BankPanel />
              <GatheringPanel addPoints={this.addPoints} />
              <InventoryPanel />
              <StorePanel />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { testReducer, bank, inventory } = state;
  return { testReducer, bank, inventory };
}

export default connect(mapStateToProps)(Game);
