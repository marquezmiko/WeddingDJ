import React, { Component } from 'react';
import SongList from './SongList.jsx';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Hello World!</h1>
        <SongList />
      </>
    );
  }
}


export default App;