import Navbar from './components/navbar'
import Counters from './components/counters'
import React, { Component } from 'react'

export class NavBar extends Component {
    state = {
        counters: [
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
        ]
    }
    handleDelete = (counterId) =>{
        const counters = this.state.counters.filter(c => c.id !== counterId)
        // this.setState({counters: counters});
        this.setState({counters});
    }
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({ counters })
    }
    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        console.log(counters);
        const index = counters.indexOf(counter)
        counters[index]= {...counter};
        counters[index].value++;
        this.setState({ counters })
    }

    render() {
        return (
            <div>
                <Navbar
                    count={this.state.counters.filter(c => c.value > 0).length}
                 />
                <Counters
                    counters={this.state.counters}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDelete={this.handleDelete}
                />

            </div>
        )
    }
}

export default NavBar

