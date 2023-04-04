import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Outlet,useNavigate} from "react-router-dom";
import { React } from "react";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import  * as FCIconName  from "react-icons/fc";
import  * as FAIconName  from "react-icons/fa";


const Layout = () => {
    let history = useNavigate();
    return (
        <>
        <SideNav
            onSelect={(selected) => {
                const navigateTo='/'+selected;

                history(navigateTo);
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="Home">
                <NavItem eventKey="">
                    <NavIcon>
                        <FAIconName.FaHome style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="About">
                    <NavIcon>
                        <FAIconName.FaInfoCircle style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>About</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
        <Outlet />
        </>
    )

}
export default Layout;