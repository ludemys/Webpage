import React from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'

const Container = (props) =>
{
    return(
        <div className="container" id="container">
            <Header />
            <Main content={props.content} title={props.title} />
            <Footer />
        </div>
    )
}

export default Container