import React from 'react';
import {NavLink, BrowserRouter as Router} from 'react-router-dom';
import Routing from '../Routes/Routing';
import {Navbar,Nav,Row,Col,Container} from 'react-bootstrap';
import ReorderIcon from '@material-ui/icons/Reorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
const HeaderBar = () => {
    return (
        <div>
        <Router>
        <Navbar collapseOnSelect expand="lg"  variant="dark" className="mr-auto navbarStyle active">
            <Container>
  <Navbar><NavLink to='/' className="brand_name">Waqas Akram</NavLink></Navbar>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  ><ReorderIcon style={{color:"#0072BC"}}/></Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='ml-auto' >

                <NavLink to="/resume" className='link' activeClassName="activeLink" >Resume</NavLink>
                <NavLink  to='/projects' className='link'  activeClassName="activeLink">Projects</NavLink>
                <NavLink to="/contact"  className='link' activeClassName="activeLink" >Contact</NavLink>
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>
            <Routing/>
        </Router>
        </div>
    )
}

export default HeaderBar
