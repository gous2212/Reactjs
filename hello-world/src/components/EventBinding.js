import React, {Component} from 'react'

class EventBinding extends Component {
    constructor(){
        super()
        this.state = {
            message : 'Hello Event Binding!'
        }
        this.eventHandler = this.eventHandler.bind(this)
    }
    // eventHandler(){
    //     this.setState({
    //         message : 'Good Bye!'
    //     })
    // }
    eventHandler = () => {
        this.setState({
            message: 'Good bye!'
        })
    }
    render(){
        //return <div>{this.state.message}  <button onClick={this.eventHandler.bind(this)}>Click Me</button></div>
        //return <div>{this.state.message} - <button onClick={()=>this.eventHandler()}>Click</button></div>
        //return <div>{this.state.message} - <button onClick={this.eventHandler}>Click</button></div>
        return <div>{this.state.message} - <button onClick={this.eventHandler}>Click</button></div>
    }
}

export default EventBinding