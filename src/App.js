import React from 'react';
import './App.css';
import { Provider } from 'react-redux'

import configureStore from './store';
import Navbar from './Components/Navbar/Navbar'

const store = configureStore();

function App() {
  return (
    <>
      <Provider store = {store} >
        <div className="App">
          <Navbar />
        </div>
      </Provider>
    </>
  );
}

export default App;
