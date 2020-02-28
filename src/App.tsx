import React from 'react';
import Navbar from './components/Navbar';
import Main from './views/Main';

const App = () => {
  return (
    <div>
      <Navbar title="Awesome Report" />
      <Main />
    </div>
  );
};

export default App;
