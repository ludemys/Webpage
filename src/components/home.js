import React, {Fragment} from 'react'
import List from './list'

const Home = () =>
{
    return (
        <Fragment>
            <h1 className="title main-title">Luciano Della Savia</h1>
            <h2 className="subtitle sd-title">Ludemys</h2>

            <p className="lil-description">
                <h3 className="subtitle td-title">Web developer</h3>
                <h4 className="subtitle foth-title">Meme lover</h4>
            </p>

            <List render="navbar" class="list-home" />
        </Fragment>
    )
}

export default Home