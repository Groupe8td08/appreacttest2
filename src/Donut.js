import "./App.css";
import React, { Component } from 'react';
import { render } from 'react-dom';
import Cdonut from './Cdonut.js';



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
        minx:0,
        maxx:0,
      y:[],
        miny:0,
        maxy:0,
      z:[],
        minz:0,
        maxz:0,
      score:[],
      moyennex:'',
        moyenney:'',
        moyennez:''
        
    
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
    let vmoy = 0;//Moyenne des tremor en x
    let vmoy1 = 0;//Moyenne des tremor en y
    let vmoy2 = 0;//Moyenne des tremor en z
    let minv=0;
    let maxv=0;
    let miny=0;
    let maxy=0;
    let minz=0;
    let maxz=0;
    
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
    minv=vx[0];
    maxv=vx[0];
    miny=vy[0];
    maxy=vy[0];
    minz=vz[0];
    maxz=vz[0];
    
    for(var i=0;i<=vx.length -1;i++){
        
        vmoy+=parseInt(vx[i]);
        vmoy1+=parseInt(vy[i]);
        vmoy2+=parseInt(vz[i]);
        
        if(minv>vx[i]){ minv=vx[i]; }
        if(maxv<vx[i]){ maxv=vx[i];}
        if(miny>vy[i]){ miny=vy[i]; }
        if(maxy<vy[i]){ maxy=vy[i];}
        if(minz>vz[i]){ minz=vz[i]; }
        if(maxz<vz[i]){ maxz=vz[i];}
        
     console.log("vx:", vx[i] )
        console.log("i:", i )   
    }
     
   
    vmoy=parseInt(vmoy/vx.length);
    vmoy1=parseInt(vmoy1/vy.length);
    vmoy2=parseInt(vmoy2/vz.length);
    
    console.log("moyennex:", vmoy)
    console.log("moyenney:", vmoy1)
    console.log("moyennez:", vmoy2)
       this.setState({heure:vheure,x:vx,y:vy,z:vz, score:vscore,tableau:tab,moyennex:vmoy,moyenney:vmoy1,moyennez:vmoy2, minx:minv,maxx:maxv, miny:miny,maxy:maxy,minz:minz,maxz:maxz});
    
       
}

  render() {
    console.log(this.state.moyennex)
      return (
    
        <div>
    
          <h3>Upload file to plot the data !</h3> 
          <input type="file" onChange={this.showFile.bind(this)} />
          <button class='lapin' onClick={this.showKlicKlic.bind(this)}>Upload Data</button>
          <div>
             <h3 className="centrer">Pie Chart des tremblements</h3>
            <div class='wrapper'>
                <div class='one'>
                <Cdonut moyennex={this.state.moyennex} moyenney={this.state.moyenney} moyennez={this.state.moyennez} labo={this.state.heure}/>
                </div>
                <div class='two'>
                <h4>Valeurs:</h4>
                    <div class='ha'>
                        <div class='hehe'>
                        <h5 >Tremor X</h5>
                            <p>Moyenne : {this.state.moyennex}</p>
                            <p>Min : {this.state.minx}</p>
                            <p>Max : {this.state.maxx}</p>
                        </div>
                        <div class='hehehe'>
                        <h5 >Tremor Y</h5>
                            <p>Moyenne : {this.state.moyenney}</p>
                            <p>Min : {this.state.miny}</p>
                            <p>Max : {this.state.maxy}</p>
                        </div>
                        <div class='hehehehe'>
                        <h5 >Tremor Z</h5>
                            <p>Moyenne : {this.state.moyennez}</p>
                            <p>Min : {this.state.minz}</p>
                            <p>Max : {this.state.maxz}</p>
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
