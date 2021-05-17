import React, {Component, Fragment} from 'react'
import Home from '../home'
import Me from '../me'
import Portfolio from '../portfolio'

class Main extends Component
{
    state = 
    {
        content: this.props.content
    }

    render = () =>
    {
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

                    </main>
                )

            case 'contact':
                return (
                    <main className="main">

                    </main>
                )
        }
    }
}

export default Main