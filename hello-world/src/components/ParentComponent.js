import React, {Component} from 'react'
import ChildComponent from './ChildComponent';
import '../App.css';
class ParentComponent extends Component {
    constructor(){
        super()
        this.state = {
            parentName : 'This is parent attribute name!'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    

    greetParent(childName){
        alert(`Hellow parent ${this.state.parentName} from ${childName}`)
    }
    render(){
        return <div><button className="button button1" onClick={()=>this.greetParent('parent comp')}>Click</button>Parent Component  <ChildComponent greetHandler={this.greetParent}/></div>
    }
}

export default ParentComponent