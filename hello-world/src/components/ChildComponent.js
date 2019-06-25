import React, {Component} from 'react'
import '../App.css';
class ChildComponent extends Component {
    render(){
        return <div>Child Component  <button className="button button1" onClick={()=>this.props.greetHandler('Message from Child component!')}>Greet Parent!</button></div>
    }
}

export default ChildComponent