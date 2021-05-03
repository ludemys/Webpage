import React, {Component} from 'react'

class Main extends Component
{
    state = 
    {
        content: this.props.content
    }

    render = () =>
    {
        return this.props.content
    }
}

export default Main