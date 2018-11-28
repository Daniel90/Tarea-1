import React, { Component } from 'react';

import Menu from './layout/Menu';
import Menu2 from './layout/Menu2';

import { dataprocesos } from './data/dataprocesos';
import { dataprocesosprogramados } from './data/dataprocesosprogramados';

import {Bar, Line, Pie, Scatter} from 'react-chartjs-2';
import './estilos.css';

const datacir = {
	labels: [
		'EXI',
		'PEN',
		'ERR'
	],
	datasets: [{
		data: [300, 40, 15],
		backgroundColor: [
		'#66CC00',
		'#CCCC00',
		'#CC0000'
		],
		hoverBackgroundColor: [
			'#66CC00',
			'#CCCC00',
			'#CC0000'
		]
	}]
};

const databarra = {
	labels: ['Exi', 'Err', 'Can'],
	datasets: [
	  {
		label: 'Monitor',
		backgroundColor: 'rgba(255,99,132,0.2)',
		borderColor: 'rgba(255,99,132,1)',
		borderWidth: 2,
		hoverBackgroundColor: 'rgba(255,99,132,0.4)',
		hoverBorderColor: 'rgba(255,99,132,1)',
		data: [85, 22, 13]
	  }
	]
	};
	
  const datalinea = {
	labels: ['09:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00'],
	datasets: [
	  {
		label: 'Cargas Horarias',
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
		data: [10, 15, 10, 81, 70, 75, 10]
	  }
	]
  };

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let datasource = dataprocesos;
		let datasourceprocprog = dataprocesosprogramados;
    return (
      <div>
  				<Menu2/>
						<center>
								<br/>
								<div className='CajaGrafico'>
								<Line 
									data={datalinea}
									width={400}
									height={200}
								/>
								</div>
								<br/>
								<div className='CajaGrafico'>
									<Pie 
									data={datacir}
									width={400}
									height={200}
									/>
								</div>
								<div className='CajaGraficoDer'>
								<Bar 
									data={databarra}
									width={400}
									height={200}
								/>
								</div>
								<br/>
						</center>
        </div>

    );
  }
}

export default App;
