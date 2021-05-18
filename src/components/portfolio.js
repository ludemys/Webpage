import React, {Component} from'react'

class Portfolio extends Component
{
    render = () =>
    {
        return(
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
                        <img className="github-profile" src="https://avatars.githubusercontent.com/u/52580686?v=4" alt="github profile image" />
                    
                    </article>
                </a>
            </div>
        )
    }
}

export default Portfolio