import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'


const Layout = (props) => {
    const callModal = () => {
        console.log("Layout");
        console.warn(props.methodcall('1'));
        console.log("calling OK");
    }
    return (
        <>
            <Navbar color='black' dark>
                <NavbarBrand href='/'>CV Short List</NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <NavLink href='/' >Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={(e)=>callModal()} >Card Items</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <Outlet />
        </>
    );

}

export default Layout
