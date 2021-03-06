import './App.css';
import React from 'react'
import axios from 'axios'
class Enterdata extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            quote: ""
        }
        this.namechange = this.namechange.bind(this)
        this.quotechange = this.quotechange.bind(this)
        this.submit = this.submit.bind(this)
    }
    namechange(event) {
        this.setState({
            name:event.target.value
        })
    }
    quotechange(event){
        this.setState({
            quote:event.target.value
        })
    }
    submit(){
        var data = {
            name:this.state.name,
            quote:this.state.quote
        }
        // axios.post("http://localhost:5001/api/postinput",data).then((res)=>{

        // })
        axios.get("http:??localhost:5001/api/input?name="+this.state.name+"&quote="+this.state.quote)
        this.setState({
            name:"",
            quote:""
        })
        window.location.reload()
    }
    render() {
        return (<div>
            <p>name:</p>
            <input value={this.state.name} onChange={this.namechange}></input>
            <br></br>
            <p>quote:</p>
            <input value={this.state.quote} onChange={this.quotechange}></input>
            <br></br>
            <button onClick = {this.submit}>submit</button>
        </div>)
    }
}
export default Enterdata
