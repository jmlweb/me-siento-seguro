import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import AppLogic from './AppLogic';

const App = () => (
  <Provider store={store}>
    <AppLogic />
  </Provider>
);

export default App;
