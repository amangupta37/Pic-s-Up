import React from 'react';
import PermMediaIcon from '@material-ui/icons/PermMedia';

function Header() {
    return (
    <div  className="header" >

            <div className="app-name">
                <PermMediaIcon className="logo-icon" />  
                <h2>Pic's<span> - </span>Up</h2>  
            </div>
            <span>
                <div className="title">
                    <h3>The internet’s source of freely usable images</h3> 
                    <p># Contribute with quality contents</p>
                </div>
            </span>
            
            
    </div>
    )
}

export default Header;
