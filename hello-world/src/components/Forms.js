import React, {Component} from 'react'

class Forms extends Component {
    constructor(){
        super()
        console.log("constructor");
        this.userInputRef = React.createRef()
        this.state = {
            userName : '',
            password : '',
            skill: ''
        }
    }
    componentDidMount() {
        console.log("componentDidMount");
        this.userInputRef.current.focus()
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return null;
    }
    handleUserNameChange = event => {
        this.setState({
            userName: event.target.value
        })
    }
    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.userName}`);
        alert(`${this.state.password}`);
    }   
    onChangeHandler=event=>{
        console.log(event.target.files[0])
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState)  {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }  
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate");
        console.log(prevProps);
        console.log(prevState);
        console.log(snapshot);
    }  
    render(){
        console.log("render");
       return (<div className="blurred-box">
           <table align="center" text-align="left" width="100%" >
           <tbody>
               <tr><td align="center" >User name</td><td><input type="text" ref={this.userInputRef} size="10" value={this.state.userName} onChange={this.handleUserNameChange}/></td></tr>
               <tr><td align="center">Pass word</td><td><input type="password" size="10" value={this.state.age} onChange={this.handlePasswordChange}/></td></tr>
               <tr><td align="center"></td><td><input type="submit" value="Login" size="10" onClick={this.handleSubmit}/></td></tr>
            </tbody>
            </table>
           </div>
           )
    }
}
export default Forms

