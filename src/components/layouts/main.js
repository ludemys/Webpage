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
                        <h1 className="title td-title">Who is Luciano?</h1>
                        <img className="image profile-image" src="./assets/profile.jpg" />
                        <article className="description">
                            <p className="paragraph">Luciano was born in Argentina in 2003, and since he was very little he showed fascination about his father' computer, a windows xp. </p>
                            <p className="paragraph">He wouldn't start programming until fifteen, but he already knew since he was twelve years old that what he wanted to do was something related to computers. First dream was being an ESports player, later it was being a dj, but those dreams disapeared when he found what programming was from a conversation about VBA with her uncle.</p>
                            <p className="paragraph">He learned how to program when he started the technical school at the age of fifteen, and that year he found web development, area that he is currently in love with.</p>
                            <p className="paragraph">But soon he'd realized that was not enough for him, so he took a youtube 30min JavaScript course and discovered that he was a self-taught. Then he took a >50 hours master of WAMP stack on Udemy, lessons where he learned PHP, Laravel and MySQL in a deeper way.</p>
                            <p className="paragraph">Today he is searching for his first job on the industry while he learns more and more about MERN stack. He has a hunger of growing professionally, economically and personally, following the principles that he adquired many years ago, which are having constancy, dreaming high, reach goals little by little and never stop learning.</p>
                        </article>
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