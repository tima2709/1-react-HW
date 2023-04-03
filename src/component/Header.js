import React from "react";
import HeaderLogoA from "./HeaderLogoA";
import SingIn from "./SingIn";
import SingUp from "./SingUp";

const Header = () => {
    return (
        <div className={'header-logo'}>
            <div>
                <HeaderLogoA/>
            </div>
            <div className={'sing-btn'}>
                <SingIn/>
                <SingUp/>
            </div>
        </div>
    )
}

export default Header