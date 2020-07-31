import React from 'react';
import App from "./Components/App";
import {store} from './Redux/createStore';
import { Provider } from 'react-redux';
function MainComponent() {
  return (
      <Provider store={store}>
        <App />
      </Provider>
  );
}

export default MainComponent;
