import * as React from 'react';
import Nav from '../Components/Nav/Nav';
import Game from '../Components/Game/Game';
import Footer from '../Components/Footer/Footer';

class Index extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main>
          <Game />
        </main>
        <Footer />
      </>
    );
  }
}

export default Index;
