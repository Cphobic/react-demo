import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="uk-navbar-container uk-margin uk-navbar" >
                    <div className="uk-navbar-center">
                        <a className="uk-navbar-item uk-logo" href="#">CounterApp</a>
                        <div className="uk-navbar-center-right"><div>
                            <ul className="uk-navbar-nav">
                                <li><a href="#">{this.props.count}</a></li>
                            </ul>
                        </div></div>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
