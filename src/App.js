import React from 'react';
import NavBar from './NavBar';
import PrettyJson from './PrettyJson'

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <PrettyJson />
      </>
    );
  }
}
export default App