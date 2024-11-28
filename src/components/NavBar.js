import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed='top'>
            <Container>

                <NavLink to='/'>
                <Navbar.Brand ><img src={logo} alt="logo" height='45' /></Navbar.Brand></NavLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left" >
                        
                        <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to ='/'>
                        <i className='fas fa-home'></i>Home</NavLink>

                        <NavLink className={styles.NavLink} activeClassName={styles.Active} to='signin'>
                            <i className="fa-solid fa-arrow-right"></i>Sign in</NavLink>
                        
                        <NavLink className={styles.NavLink} activeClassName={styles.Active} to='signup'> 
                            <i className="fa-solid fa-person-circle-plus"></i>Sign up</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;