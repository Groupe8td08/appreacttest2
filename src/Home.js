import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios'; 
import Line from './Line.js';

import Footer from './Footer.js';
import { render } from 'react-dom';

class Home extends React.Component  {
    
    constructor(props) {
        super(props);
        
    this.state = { 
  
      // Initially, no file is selected 
      selectedFile: null,
      variable1 : '',
      tableau : [],
      heure:[],
      x:[],
      y:[],
      z:[],
      score:[]
    
    }; 
    //this.state.variable1.set("9:01",[0,1,2,3]);
      //  this.state.variable1.forEach((val, key) =>{
        //    console.log(key, val);
        console.log(this.state.tableau);
        
        //})
    }
    
    
    showFile = () => {
    this.v = [5, 6]
    if (window.File && window.FileReader && window.FileList && window.Blob) {
         var preview = document.getElementById('show-text');
         var file = document.querySelector('input[type=file]').files[0];
         var reader = new FileReader()

         var textFile = /text.*/;
                
     if (file.type.match(textFile)) {
            reader.onload = (event) => {
               preview.innerHTML = event.target.result;
                this.v=event.target.result
                this.setState({variable1 : String(this.v)})
                //this.setState({tableau:[...this.state.tableau,{heure:'tx',x:5,y:100,z:102,score:5}]})
                            
            }
    
         } else {
            preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
         }
        
        reader.readAsText(file);
        
        
        
        
        
   } else {
      alert("Your browser is too old to support HTML5 File API");
   }
        
  }
    

showKlicKlic = () =>{
    
console.log('tableau',this.state.tableau)
    
    let mot=this.state.variable1.split(' '&& '\n')
    
    let tab = [...this.state.tableau];
    let vheure=[...this.state.heure];
    let vx = [...this.state.x]
    let vy = [...this.state.y]
    let vz = [...this.state.z]
    let vscore = [...this.state.score]
    
    for(var i=1;i<mot.length;i++){ 
        
        let str=mot[i]
        console.log(typeof mot[i])
        console.log(str.split(','))
        let l =str.split(',')
        console.log(l[0])
        
        if(i==1){
            tab = [{heure:l[0],x:l[1],y:l[2],z:l[3],score:l[4]}];
            vheure=[l[0]]
            vx=[l[1]];
            vy=[l[2]];
            vz=[l[3]];
            vscore=[l[4]];
            
            
        }
        else{
            tab = [...tab,{heure:l[0],x:l[1],y:l[2],z:l[3],score:l[4]}];
            vheure=[...vheure,l[0]]
            vx=[...vx,l[1]];
            vy=[...vy,l[2]];
            vz=[...vz,l[3]];
            vscore=[...vscore,l[4]];
        }
        
      }          
       this.setState({heure:vheure,x:vx,y:vy,z:vz, score:vscore,tableau:tab});
       /*this.setState({x:vx});
       this.setState({y:vy});
       this.setState({z:vz});
       this.setState({score:vscore});
       this.setState({tableau:tab});*/
}

     
    render() { 
        console.log("xxxx",this.state.x)
        console.log("score",this.state.score)
      return (
         
        <div>
    
          <h3>Upload file to plot the data !</h3> 
          <input type="file" onChange={this.showFile.bind(this)} />
          <button onClick={this.showKlicKlic.bind(this)}>Upload Data</button>
          <div>
                <h3 className="centrer">Tremor graph</h3>
                <Line title={this.state.title} datax={this.state.x} datay={this.state.y} dataz={this.state.z} labo={this.state.heure}/>
          </div>      
            <p>Données : </p>
          <div id="show-text"></div>
          
          <div>
        
          </div>
        </div> 

      ); 
    } 
}

export default Home;
