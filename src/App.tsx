import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import store from './store';



class App extends Component{

    componentDidMount() {}

  
    render() {
      return (
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      );
    }
  }
  

export default App;