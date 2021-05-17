import React, {Component, Fragment} from 'react'
import List from './list'

class Home extends Component
{
    render = () =>
    {
        return <Fragment>
            <h1 className="title main-title">Luciano Della Savia</h1>

            <p className="lil-description">
                <h3 className="subtitle td-title">Web developer</h3>
                <h4 className="subtitle foth-title">Meme lover</h4>
            </p>

            <List render="navbar" />
        </Fragment>
    }
}

export default Home