import React, {Component} from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'

class Container extends Component
{
    render = () =>
    {
        return(
            <div className="container" id="container">
                <Header />
                <Main content={this.props.content} />
                <Footer />
            </div>
        )
    }
}

export default Container