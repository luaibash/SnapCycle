import React from 'react';
import BlackLogo from "../assets/branding/BlackLogo.png";
import SnapCycleTitle from "../assets/NavBar/SnapCycleTitle.png";
import OutlineButton from "./OutlineButton";
import HamburgerMenu from "../assets/NavBar/HamburgerMenu.jpg";
import "../styles/NavBar.css";
import {useLocation, useNavigate} from "react-router-dom";

const Navbar = ({pages}) => {

    return (
        <div className='NavBar'>
            <div className='NavBarLogoAndName'>
                <img src={BlackLogo} alt="SnapCycle Logo" className="NavBarLogo"/>
                <img src={SnapCycleTitle} alt="SnapCycle Title" className='NavBarTitle' />
            </div>
            <div className='NavBarPages'>
                {
                    pages.map((page) =>
                        <NavbarPageItem page={page}/>
                    )
                }
            </div>
            <div className='ButtonContainer'>
                <OutlineButton title="Try Now" destination="/demo" className="NavBarButton"/>
                <img src={HamburgerMenu} alt="Hamburger Menu" className='HamburgerMenu'/>
            </div>
        </div>
    );
}

const NavbarPageItem = ({page}) => {
    const destination = "/" + page.toLowerCase();
    const location = useLocation();
    const navigate = useNavigate();
    const goToLocation = (location) => {
        navigate(location);
    }

    return (
        <div className={location.pathname === destination ? "NavBarPagesActive" : "NavBarPagesInactive"}
             onClick={() => goToLocation(destination)}>
            {page}
        </div>
    );
}

export default Navbar;