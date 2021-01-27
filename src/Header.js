import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.js'
import {NavLink} from 'react-router-dom';
class Header extends React.Component
{
  render()
  {
    return (
        <div>
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item active h-elem">
        
          <a class="nav-link" href="/home" to="/home" style={{ pointer: 'none', color: 'inherit', textDecoration: 'inherit'}}>Accueil</a>
        </li>
        <li class="nav-item h-elem">
          <a class="nav-link" href="/courbes-simples" to="/courbes-simples" style={{ color: 'inherit', textDecoration: 'inherit'}}>Courbes simples</a>
        </li>
        <li class="nav-item h-elem">
            <a class="nav-link" href="/donut" to="/donut" style={{ color: 'inherit', textDecoration: 'inherit'}}>Donut</a>
          
        </li>
        <li class="nav-item h-elem">
            <a class="nav-link" href="/score" to="/score" style={{ color: 'inherit', textDecoration: 'inherit'}}>Score</a>
            
        </li>
        
      </ul>
    </nav>
        <h1 className="titre">Tremor watch interface</h1> 
        </div>
      
    )
  }
}
export default Header;
