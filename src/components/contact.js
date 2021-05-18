import React, {Fragment} from 'react'
import List from './list'

const Contact = () =>
{
    return (
        <Fragment>
            <h2 className="subtitle sd-title contact-title">How to contact me</h2>

            <div className="contact-row">

                <p className="paragraph">
                    If you want to talk with me, I recommend you to send me a 
                    <List items={[
                        {
                            text: 'Twitter DM',
                            href: 'https://www.twitter.com/messages/compose?recipient_id=3805104374',
                            imageSrc: './assets/twitter.png',
                            alt: 'twitter logo'
                        },
                        {
                            text: 'Tweet tagging me with @ludemys',
                            href: 'https://www.twitter.com/ludemys',
                            imageSrc: './assets/twitter.png',
                            alt: 'twitter logo'
                        },
                        {
                            text: 'Email',
                            href: 'mailto:lucianodellasavia@gmail.com',
                            imageSrc: 'https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63',
                            alt: 'gmail logo'
                        },
                        {
                            text: 'LinkedIn DM',
                            href: 'https://www.linkedin.com/in/lucianodellasavia',
                            imageSrc: 'https://bio-ingenieria.com/wp-content/uploads/2019/11/linkedin-logo-1.png',
                            alt: 'linkedin logo'
                        }
                    ]} />
                </p>

            </div>

            <div className="contact-row">
                <p className="paragraph paragraph-with-links">
                    And if you want to see some work that I did and keep doing, take a look to the <a className="inline-link" href="/portfolio">Portfolio page</a>
                </p>
            </div>
        </Fragment>
    )
}

export default Contact