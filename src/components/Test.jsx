import React, {Component} from 'react';

class Test extends Component {
    constructor() {
        super();
        this.state = {
            count:0
        }
    }

    render() {
        return(
            <h1>Welcome {this.props.name}</h1>
        )
    }
}
export default Test;