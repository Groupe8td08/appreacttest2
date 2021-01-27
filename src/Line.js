import React from 'react';
import {Line} from 'react-chartjs-2';
import * as zoom from 'chartjs-plugin-zoom';


import './App.css';



class line extends React.Component{
    state = {
        lab:[],
        data : {
  labels: ['9:15', '9:20', '9:30', '9:35', '9:40', '9:45', '9:50','9:55', '10:00', '10:05', '10:10', '10:15', '10:20', '10:25'],
  datasets: [
    {
      label: ' X Tremor',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40]
    },
      {
      label: 'Y Tremor',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,0,192,0.4)',
      borderColor: 'rgba(75,0,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,0,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,0,192,1)',
      pointHoverBorderColor: 'rgba(220,0,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [80, 70, 40, 31, 60, 50, 59, 70, 35, 40, 80, 56, 60, 70]
    },{
      label: 'Z Tremor',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,0,0.4)',
      borderColor: 'rgba(75,192,0,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,0,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,0,1)',
      pointHoverBorderColor: 'rgba(220,220,0,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [30, 50, 88, 83, 40, 30, 45,50, 53, 88, 80, 70, 55, 31]
    }
  ]
},options: {
        maintainAspectRatio: true,
        responsive: true,
        legend: {
            position: 'top'
        },scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        },
        plugins: {
            zoom: {
                // Container for pan options
                pan: {
                    // Boolean to enable panning
                    enabled: true,

                    // Panning directions. Remove the appropriate direction to disable 
                    // Eg. 'y' would only allow panning in the y direction
                    mode: 'x',
                    speed: 10,
                threshold: 10
                },

                // Container for zoom options
                zoom: {
                    // Boolean to enable zooming
                    enabled: true,

                    // Zooming directions. Remove the appropriate direction to disable 
                    // Eg. 'y' would only allow zooming in the y direction
                    drag: false,
        mode: "x",
                }
            }
        }
    }}
  
//https://codepen.io/jledentu/pen/NWWZryv -> Pour travailler le zoom and pan
    componentDidMount() {

    

  }

actu = () =>{
    let xdata = this.props.datax;
    let ydata = this.props.datay;
    let zdata = this.props.dataz;
    let label = this.props.labo;
    let data = this.state.data;
    
    
    data.datasets.[0].data=xdata;
    data.datasets.[1].data=ydata;
    data.datasets.[2].data=zdata;
    
    
    data.labels=label;
    this.setState({data})
    
}
    
    render(){
        
        return(
        
        <div>
        <div style={{padding:'0.5em'}}>
            <button  onClick={this.actu}>Afficher les données</button>      
        </div>
            
      <div style={{width:'85%',height:'85%'}}>
            
        <Line  data={this.state.data} options={this.state.options}/>
    </div>
        
    </div>
        
        
        
        );
    }
    
}

export default line;