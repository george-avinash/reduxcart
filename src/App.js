import React from 'react';
import { Provider } from 'react-redux';
import CartPage from './CartPage';
import store from './store';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider store={store}>
      <div>
        <h1>React Redux Cart </h1>
        <CartPage />
      </div>
    </Provider>
      </header>
    </div>
  );
}

export default App;
