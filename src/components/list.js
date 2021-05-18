import React, { Component } from 'react'
import NavItems from './navItems'

class List extends Component
{
    state = 
    {
        title: this.props.title
    }

    render = () =>
    {
        switch (this.props.render) {
            case 'navbar':
                return (
                    <ul className="list">
                        {this.state.title ? <li className="list-header">{this.state.title}</li> : ''}
                        <NavItems />
                    </ul>
                )
            case 'contact':
                return (
                    <ul className="list">
                        {this.state.title ? <li className="list-header">{this.state.title}</li> : ''}
                        <li className="item" key="0">
                            <a className="link image-link" target="_blank" href="https://www.github.com/ludemys">
                                <img className="footer-logo" src="./assets/github.png"/>
                                Github
                            </a>
                        </li>

                        <li className="item" key="1">
                            <a className="link image-link" target="_blank" href="https://www.linkedin.com/in/lucianodellasavia">
                                <img className="footer-logo" src="https://image.flaticon.com/icons/png/512/174/174857.png"/>
                                LinkedIn
                            </a>
                        </li>
                        
                        <li className="item" key="2">
                            <a className="link image-link" target="_blank" href="https://www.twitter.com/ludemys">
                                <img className="footer-logo" src="./assets/twitter.png"/>
                                Twitter
                            </a>
                        </li>
                    </ul>
                )
        
            default:
            {
                return (
                    <ul className="list">
                        {this.state.title ? <li className="list-header">{this.state.title}</li> : ''}
                        {this.props.items.map((i, index) => {
                            return (
                                <li key={index}>
                                    <a target="_blank" className="inline-link" href={i.href}>
                                        {i.imageSrc ? <img className="inline-image-logo" src={i.imageSrc} /> : ''}
                                        {i.text}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                )
            }
        }
    }
}

export default List