import React, {Component, Fragment} from 'react'

class Me extends Component
{
    render = () =>
    {
        return <Fragment>
            <h1 className="title td-title">Who is Luciano?</h1>
            <img className="image profile-image" src="./assets/profile.jpg" alt="Luciano profile image" />
            <article className="description">
                <p className="paragraph">Luciano was born in Argentina in 2003, and since he was very little he showed fascination about his father' computer, a windows xp. </p>
                <p className="paragraph">He wouldn't start programming until fifteen, but he already knew since he was twelve years old that what he wanted to do was something related to computers. First dream was being an ESports player, later it was being a dj, but those dreams disapeared when he found what programming was from a conversation about VBA with her uncle.</p>
                <p className="paragraph">He learned how to program when he started the technical school at the age of fifteen, and that year he found web development, area that he is currently in love with.</p>
                <p className="paragraph">But soon he'd realized that was not enough for him, so he took a youtube 30min JavaScript course and discovered that he was a self-taught. Then he took a >50 hours master of WAMP stack on Udemy, lessons where he learned PHP, Laravel and MySQL in a deeper way.</p>
                <p className="paragraph">Today he is searching for his first job on the industry while he learns more and more about MERN stack. He has a hunger of growing professionally, economically and personally, following the principles that he adquired many years ago, which are having constancy, dreaming high, reach goals little by little and never stop learning.</p>
            </article>
        </Fragment>
    }
}


export default Me