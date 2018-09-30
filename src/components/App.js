import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import styles from '../styles.css'
import {tripInformation} from '../actions'
import imgs from '../images/small_image.gif'
//var imgs = require('../images/small_image.gif');
class App extends Component {
    constructor(props){
        super(props)
    }
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {text,data} = this.props
    console.log("this props>>>>>"+JSON.stringify(this.props));
    return (
      <div className={styles.test}>
      <h1> {data}</h1>
      <img src="../../dist/images/small_image.gif" alt="not working" /> 
      <a href="#" onClick={(e)=>{this.props.changevalue('111')}}>Hit Meee</a>
        Hello 1111111
        Example Component: {text}
        Name:-
        {this.props.name}
      </div>
    )
  }
}
const mapStatsToProps= (state,ownProps) =>{
    return{
        name : state.tripInformation.tripData === undefined ? 'not working' : state.tripInformation.tripData
    }
}
const mapDispatchToProps =(dispatch,ownProps)=>{
    var nextData=(pageNo)=>{
        console.log("pageNo="+pageNo);
        dispatch(tripInformation(pageNo))
    }
    return{
        changevalue: nextData
    }
}
App = connect(mapStatsToProps,mapDispatchToProps)(App)
export default App