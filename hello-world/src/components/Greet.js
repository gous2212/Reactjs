import React, {Component} from 'react'

class Greet extends Component {
    constructor(){
        super()
        this.state = {
            company: 'ComakeIT',
            department: 'Keylane'
        }
    }
    render(){
        const {name, age} = this.props
        const {company, department} = this.state
        return <div>Welcome from ...{name + "  " + age + " " + company + "  " + department}</div>
    }
}

export default Greet