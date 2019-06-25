import React, {Component} from 'react'

class Input extends Component {
    constructor(){
        super()
        this.inputRef = React.createRef()
    }
    focusInput(){
        this.inputRef.current.focus()
    }
    componentDidMount(){
        //this.focusInput()
    }
    render(){
        return <div className="blurred-box">
            <input type="text" ref={this.inputRef}/>
        </div>
    }
}

export default Input