import React, { Component } from 'react'

class Lister extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h1>I'm the lister</h1>
                <button class="btn btn-primary">I check bootstrap</button>
                <div>and I check fontAwesome<i className="fa fa-spinner fa-spin"></i></div>
            </div>
        )
    }
}

export default Lister
