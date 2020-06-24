import React from 'react'
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth'
import { Navbar, Nav, } from 'react-bootstrap'
import history from "../history"
 
const Header = () => {
    return (
   
        <div className="header">
            

            <Navbar fixed="top" bg="inverse" variant="dark" className="header" expand="lg">
                <Navbar.Brand>
                    <Link to="/" className="header navbar-brand">
                        <img className="logo" src={require('/Users/oskarwroz/Documents/WebDev-Projects/recipe-share-app/recipe-share/src/images/logo.png')} alt="logo"></img>
                    </Link>
                </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/recipes" className="nav-link">Recipes</Link>
                        <Link className="nav-link" onClick={() => {
                            history.push("/streams/new")
                            window.location.reload()
                        }}>Create</Link>
    </Nav>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                        <GoogleAuth />
                 </li>       
    </ul>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;