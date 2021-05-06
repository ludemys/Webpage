import React, {Component, Fragment} from 'react'
import List from '../list'

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
                            <h1 className="title main-title">Luciano Della Savia</h1>

                            <p className="lil-description">
                                <h3 className="subtitle td-title">Web developer</h3>
                                <h4 className="subtitle foth-title">Meme lover</h4>
                            </p>

                            <List render="navbar" />
                    </main>
                )

            case 'me':
                return (
                    <main className="main">

                    </main>
                )
            
            case 'portfolio':
                return (
                    <main className="main">
                        <div className="portfolio">
                            <section className="portfolio-presentation">
                                <h2 className="subtitle sd-title">Portfolio</h2>
                                <h4 className="subtitle paragraph fith-title">My entire portfolio is on my GitHub</h4>
                                <h4 className="subtitle paragraph fith-title">Take a look!</h4>
                            </section>
                            <a className="link github-link" href="https://www.github.com/ludemys" target="_blank">
                                <article className="github-card">
                                    <div className="github-data">
                                        <h4 className="foth-title">Luciano Della Savia</h4>
                                        <hr className="line" />
                                        <p className="paragraph">@ludemys</p>
                                        <hr className="line" />
                                        <p className="paragraph">GitHub for professional portfolio</p>
                                    </div>
                                    <img className="github-profile" src="https://avatars.githubusercontent.com/u/52580686?v=4" />
                                
                                </article>
                            </a>
                        </div>
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