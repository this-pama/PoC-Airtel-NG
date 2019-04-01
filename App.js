import React,{Component} from 'react';
import Navigator from './route/route';

import {createStore} from 'redux';

import {store, persistor} from './redux/index'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default class App extends Component{
    render(){
        return(
	      <Provider store={store}>
	        <PersistGate loading={null} persistor={persistor}>
	          <Navigator/>
	        </PersistGate>
	      </Provider> 
        )
    }
}