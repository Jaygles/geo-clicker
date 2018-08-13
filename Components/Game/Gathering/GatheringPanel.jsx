import * as React from 'react';

class GatheringPanel extends React.Component {
  render() {
    return (
      <div className="card content">
        <div className="card-header">
          <h2 className="card-header-title">Gathering</h2>
        </div>
        <div className="card-content">
          <button onClick={() => this.props.addPoints(1)} className="button">
            Gather Point
          </button>
        </div>
      </div>
    );
  }
}

export default GatheringPanel;
