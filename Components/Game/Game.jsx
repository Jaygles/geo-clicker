import * as React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';
import css from './Game.scss';

class Game extends React.Component {
  test = () => {
    const { dispatch } = this.props;
    dispatch(Actions.test('test'));
  };
  render() {
    return (
      <section className={`${css.test} section`}>
        <div className="container">
          <div className="columns">
            <div className="column">
              <button onClick={() => this.test()} className="button">
                Clicky
              </button>
              <p>{this.props.testReducer}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { testReducer } = state;
  return { testReducer };
}

export default connect(mapStateToProps)(Game);
