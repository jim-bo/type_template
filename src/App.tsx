import * as React from 'react';

import SiteHeader from './components/SiteHeader';
import Main from './components/Main';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SiteHeader />
        <Main />
      </div>
    );
  }
}

export default App;