import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'


const Layout = () => {
    return (
        <>
            <Navbar color='black' dark>
                <NavbarBrand href='/'>CV Short List</NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <NavLink href='/'>Home</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <Outlet />
        </>
    );

}

export default Layout
