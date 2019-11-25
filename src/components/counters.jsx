import React, { Component } from 'react'
import Counter from "./counter"
import counter from './counter'

export class Counters extends Component {
    render() {
        return (
            <div>
                <button onClick={ this.props.onReset } className="uk-button uk-button-secondary uk-button-small">Reset</button>
                {this.props.counters.map(counter => 
                <Counter 
                    counter={counter}
                    key={counter.id} 
                    onIncrement={this.props.onIncrement}
                    onDelete={this.props.onDelete}>
                        <h1>Counter #{counter.id}</h1>
                </Counter>)}
            </div>
        )
    }
}

export default Counters
