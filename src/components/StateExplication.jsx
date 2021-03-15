import React, {Component} from 'react';

// Compteur 
class StateExplication extends Component {
    constructor() {
        super();
        this.state = {
            count:0
        }
    }

    addOne() {
        this.setState({
            count: this.state.count+1
        })
    }

    removeOne() {
        this.setState({
            count: this.state.count-1
        })
    }

    render() {
        return(
            <>
                <h1>Welcome {this.props.name}</h1>
                <p>Mon compteur : {this.state.count}</p>
                <button onClick={() => this.addOne()}>Ajouter 1</button>
                <button onClick={this.removeOne.bind(this)}>Enlever 1</button>
            </>
        )
    }
}
export default StateExplication;