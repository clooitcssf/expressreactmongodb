import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios'
class Thumbnail extends React.Component {
    constructor(props){
      super(props)
    }
    render() {
      return (<div>
        <h1>{this.props.data.name}</h1>
        <p>{this.props.data.quote}</p>
      </div>)
    }
  }
export default Thumbnail