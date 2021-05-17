import React, {Component} from 'react'
import List from '../list'

class Footer extends Component
{
    render = () =>
    {
        return(
            <footer className="footer">
                
                <List title="Sections" render="navbar" />
                <List title="Contact" render="contact" />
                <p className="copyright">{`Luciano Della Savia | ${new Date().getFullYear()}© | All rights reserved`}</p>

            </footer>
        )
    }
}

export default Footer