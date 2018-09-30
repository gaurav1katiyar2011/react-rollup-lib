import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from './components/App'
import {Provider} from 'react-redux';
import {store} from './store'
export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }
  render() {  
    return (
      <Provider store={store}>
        <App />
    </Provider>
      
    )
  }
}


