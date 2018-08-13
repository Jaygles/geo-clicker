import * as React from 'react';
import { connect } from 'react-redux';

class BankPanel extends React.Component {
  render() {
    return (
      <div className="card content">
        <div className="card-header">
          <h2 className="card-header-title">Bank</h2>
        </div>
        <div className="card-content">
          <p>Points: {this.props.bank.points}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { bank } = state;
  return { bank };
}

export default connect(mapStateToProps)(BankPanel);
