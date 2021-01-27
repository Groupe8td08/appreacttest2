import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Footer extends React.Component
{
  render()
  {
    return (
        <div class="jumbotron text-center">
        <p>Projet d'étudiants de l'ECE Paris en collaboration avec le Centre de Recherche Interdisciplinaire de Paris (CRI), année scolaire 2020-2021</p>
      
        <li>
         Projet tutoré par Frederic Ravaut (tuteur ECE), Vladimir Hermand (tuteur CRI) et Kévin Lhoste (Responsable du MakerLab et tuteur CRI)
        </li>
      <li>
        Equipe : Hélène Meunier, Mélinda Vachon, Arnaud Bretxa, Xavier Koczan, Guillaume Le Loher et Laura Flaquer     
        </li>
        
      </div>
    )
  }
}
export default Footer;