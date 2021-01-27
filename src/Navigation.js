import React from 'react';

import {NavLink} from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return ( 
            <div>
            <nav class = "navbar navbar-expand-sm bg-primary navbar-dark" >
                <ul class = "navbar-nav" >
                    <li class = "nav-item active" >
                        <NavLink class = "nav-link" to = "/" > Home < /NavLink> 
                        
                    </li>
                    <li>
                        <NavLink class = "nav-link"to = "/about" > About < /NavLink> 
                    </li>
                </ul> 
            </nav> 
            </div>
        );
    }
}

export default Navigation;
