import React, { Component } from 'react'

export default class counter extends Component {
    style = {
        fontSize: 10,
        fontWeight: 'bold',
        
    }

    render() {
        return (
            <div className="uk-container uk-container-small">
            
            {this.props.children}
            <span className={this.badgeColor()}>{this.formatCounter()}</span>
            <button onClick={ () => this.props.onIncrement(this.props.counter)} className="uk-button uk-button-primary uk-button-small">Increment</button>
            <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="uk-button uk-button-secondary uk-button-small">Delete</button>
            
            {/* {this.checkElement()} */}

            </div>
        );
    }

    formatCounter(){
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    badgeColor(){
        let classes = 'uk-badge uk-margin-small-right uk-background-';
        classes += this.props.counter.value === 0 ? "secondary" : "primary";
        return classes;
    }
}
