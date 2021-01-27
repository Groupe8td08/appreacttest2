import "./App.css";
import React, { Component } from 'react';
import { render } from 'react-dom';
import Cdonut from './Cdonut.js';
import Line from './Line.js'
import Cscore from './CScore.js'

import { PieChart } from 'react-minimal-pie-chart';


class Donut extends Component {
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
      score:[],
      moyenne1:'',
        moyenne2:'',
        moyenne3:'',
        moyenne4:'',
        moyenne5:''
        
    
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
    let vheure=[...this.state.heure];////variable pour les datas heure
    let vx = [...this.state.x]//variable pour les datas en x
    let vy = [...this.state.y]//variable pour les datas en x
    let vz = [...this.state.z]//variable pour les datas en z
    let vscore = [...this.state.score]
    let vmoy = 0;
    let vmoy1 = 0;
    let vmoy2 = 0;
    let vmoy3 = 0;
    let vmoy4 = 0;
    
    
    //Lecture et récupération des données du fichier texte
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
    
    
    for(var i=0;i<vscore.length;i++){
       if(vscore[i]==='0'){vmoy+=1;}
        
        if(parseInt(vscore[i])==1){vmoy1+=1;}
        if(parseInt(vscore[i])==2){vmoy2+=1;}
        if(parseInt(vscore[i])==3){vmoy3=vmoy3+1;}
        if(parseInt(vscore[i])==4){vmoy4+=1;}
        
        
        
    }
    console.log(vscore)
    console.log("cpt1:", vmoy)
    console.log("cpt2:", vmoy1)
    console.log("cpt3:", vmoy2)
    console.log("cpt4:", vmoy3)
    console.log("cpt5:", vmoy4)
       this.setState({heure:vheure,x:vx,y:vy,z:vz, score:vscore,tableau:tab,moyenne1:vmoy,moyenne2:vmoy1,moyenne3:vmoy2,moyenne4:vmoy3,moyenne5:vmoy4});
    
       
}

  render() {
    return (
    
        <div>
    
          <h3>Upload file to plot the data !</h3> 
          <input type="file" onChange={this.showFile.bind(this)} />
          <button onClick={this.showKlicKlic.bind(this)}>Upload Data</button>
              <div>
                <h3 className="centrer">Line chart du score</h3>
                <Cscore score={this.state.score} labo={this.state.heure}/>

              </div>

                <div>
                    <h3 className="centrer">Pie chart du score</h3>

<div class='wrapper'>
    <div class="one">
                    <div style={{padding:'2em',align:'center',width:'50%',height:'50%'}}>
                <h4 style={{padding:'1em'}}>Occurence des scores</h4>
        <p>Légende :</p>
        <div class='hoho'>
            
                    <div class='hi, box_col1'>1</div>
                    <div class='hihi, box_col2'>2</div>
                    <div class='hihihi, box_col3'>3</div>
                    <div class='hihihihi, box_col4'>4</div>
                    <div class='hihihihihi, box_col5'>5</div>
                </div>
                <PieChart  data={[
            { title: '1', value: this.state.moyenne1, color: '#E38627' },
            { title: '2', value:  this.state.moyenne2, color: '#C13C37' },
            { title: '3', value:  this.state.moyenne3, color: '#6A2135' },
            { title: '4', value:  this.state.moyenne4, color: '#256698' },
            { title: '5', value:  this.state.moyenne5, color: '#155508' },
                                 
          ]} label={(props) => { return props.dataEntry.value}}  />
        
        
            </div>
                                 </div>
                <div class='two'>
                <h4>Valeurs:</h4>
                    <div class='ha'>
                        <div class='hehe'>
                        <h5 >Score 1: {this.state.moyenne1}</h5>
                        <h5>Score 4: {this.state.moyenne4}</h5>
                            
                        </div>
                        <div class='hehehe'>
                        <h5 >Score 2: {this.state.moyenne2}</h5>
                        <h5 >Score 5: {this.state.moyenne5}</h5>    
                        </div>
                        <div class='hehehehe'>
                        <h5 >Score 3: {this.state.moyenne3}</h5>
                            
                        </div>
                    </div>
          </div>
                </div>
            </div>
            <p>Données : </p>
          <div id="show-text"></div>
          
          <div>
        
          </div>
        </div> 
    )
  }
}

export default Donut;
