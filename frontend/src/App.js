import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios'
import Thumbnail from './thumbnail.js'
import Enterdata from './enterdata.js'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      password: "",
      showhidden: false
    }
    this.passwordinput = this.passwordinput.bind(this)
    this.onsubmit = this.onsubmit.bind(this)
  }
  passwordinput(event) {
    this.setState({
      password: event.target.value
    })
  }
  onsubmit() {
    if (this.state.password == "hello") {
      this.setState({
        showhidden: true
      })
    }
    
  }
  componentWillMount() {
    axios.get("http://localhost:5001/api/data").then((res) => {
      this.setState({
        data: res.data
      })
    })
  }
  render() {

    var g = this.state.data.map((c) => {
      return (<Thumbnail data={c}></Thumbnail>)
    })
    var k = ""
    if(this.state.showhidden == true){
      k=(<p>congradulations you got the correct password</p>)
    }
    
    

    return (
      <div className="App">
        {g}
        <Enterdata></Enterdata>
        <input value={this.state.password} onChange={this.passwordinput}></input>
        {k}
        <button onClick = {this.onsubmit}></button>
      </div >
    );
  }
}
export default App;
