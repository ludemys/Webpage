import React, { Component } from 'react'
import NavItems from './navItems'

class List extends Component
{
    state = 
    {
        title: this.props.title,
        render: this.props.render
    }

    render = () =>
    {
        switch (this.state.render) {
            case 'navbar':
                return (
                    <ul className="list">
                        {this.state.title ? <li className="list-header">{this.state.title}</li> : ''}
                        <NavItems />
                    </ul>
                )
            case 'projects':
                return (
                    <ul className="list">
                        {this.state.title ? <li className="list-header">{this.state.title}</li> : ''}
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                )
            case 'contact':
                return (
                    <ul className="list">
                        {this.state.title ? <li className="list-header">{this.state.title}</li> : ''}
                        <li className="item">
                            <a className="link image-link" target="_blank" href="https://www.github.com/ludemys">
                                <img className="footer-logo" src="./assets/github.png"/>
                                Github
                            </a>
                        </li>

                        <li className="item">
                            <a className="link image-link" target="_blank" href="https://www.linkedin.com/in/lucianodellasavia">
                                <img className="footer-logo" src="https://image.flaticon.com/icons/png/512/174/174857.png"/>
                                LinkedIn
                            </a>
                        </li>
                        
                        <li className="item">
                            <a className="link image-link" target="_blank" href="https://www.twitter.com/ludemys">
                                <img className="footer-logo" src="./assets/twitter.png"/>
                                Twitter
                            </a>
                        </li>
                    </ul>
                )
        
            default:
            {
                return null
            }
        }
    }
}

export default List