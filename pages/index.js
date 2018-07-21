import * as React from 'react';
import Nav from '../Components/Nav/Nav';
import Game from '../Components/Game/Game';

class Index extends React.Component {
  render() {
    return (
      <main>
        <Nav />
        <Game />
      </main>
    );
  }
}

export default Index;
