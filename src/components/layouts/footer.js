import React from 'react'
import List from '../list'

const Footer = () =>
{
    return(
        <footer className="footer">
            
            <List title="Sections" render="navbar" />
            <List title="Contact" render="contact" />
            <p className="copyright">{`Luciano Della Savia | ${new Date().getFullYear()}© | All rights reserved`}</p>

        </footer>
    )
}

export default Footer