import "./App.css";
import React, { Component } from 'react';
import { render } from 'react-dom';
import { PieChart } from 'react-minimal-pie-chart';

class Cdonut extends Component {
  constructor() {
    super();
    this.state = {
   
    }
  }
    

actu = () =>{
    let label = this.props.labo;
    let data = this.state.chartData;
    
    
    /*data.datasets.[0].data.[0]=this.props.moyennex;
    data.datasets.[0].data.[1]=this.props.moyenney;
    data.datasets.[0].data.[2]=this.props.moyennez;*/
    
    this.setState({data})
    
}

  render() {
      
    return (
        <div>
            <div style={{padding:'0.5em'}}>
                     
            </div>
            <div style={{padding:'2em',align:'center',width:'50%',height:'50%'}}>
                <h4 style={{padding:'1em'}}>Moyennes des tremblements</h4>
<p>Légende :</p>
        <div class='haha'>
            
                    <div class='hehe, box_col1'>X</div>
                    <div class='hehehe, box_col2'>Y</div>
                    <div class='hehehehe, box_col3'>Z</div>
                </div>
                <PieChart  data={[
            { title: 'X', value: this.props.moyennex, color: '#E38627' },
            { title: 'Y', value:  this.props.moyenney, color: '#C13C37' },
            { title: 'Z', value:  this.props.moyennez, color: '#6A2135' },
          ]} label={(props) => { return props.dataEntry.value}}  />
        
        
            </div>
        </div>
    )
  }
}

export default Cdonut;
