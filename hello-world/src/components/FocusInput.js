
import React, {Component} from 'react'
import Input from './Input';

class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
    render(){
        return <div className="blurred-box">
            <Input ref={this.componentRef}/>
            
            <input type="submit" value="Focus Input" size="10" onClick={this.clickHandler}/>
        </div>
    }
}
export default FocusInput