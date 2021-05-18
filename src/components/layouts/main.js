import React, {Component, Fragment} from 'react'

import Home from '../home'
import Me from '../me'
import Portfolio from '../portfolio'
import Goals from '../goals'
import Contact from '../contact'

class Main extends Component
{
    state = 
    {
        content: this.props.content,
        title: this.props.title ?? 'Luciano Della Savia, software developer specialized on web'
    }

    render = () =>
    {
        document.title = this.state.title

        switch(this.state.content)
        {
            default: 
                return (
                    <main className="main">
                        <Home />
                    </main>
                )

            case 'me':
                return (
                    <main className="main">
                        <Me />
                    </main>
                )
            
            case 'portfolio':
                return (
                    <main className="main">
                        <Portfolio />
                    </main>
                )

            case 'goals':
                return (
                    <main className="main">
                        <Goals />
                    </main>
                )

            case 'contact':
                return (
                    <main className="main">
                        <Contact />
                    </main>
                )
        }
    }
}

export default Main