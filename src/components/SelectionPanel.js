import React from 'react';
import ConnectDisplayPanel from './ConnectDisplayPanel';
import championsData from '../json/allChampions.json';

class SelectionPanel extends React.Component{
	constructor(){
		super()
		this.state = {
			champions: []
		}
	}
	componentWillMount(){
		this.setState({champions: championsData})
	}
	render(){
		let champions = this.state.champions.data
		
		let championsList = []

		for(var champ in champions){
			const champId = champ
			const champImg = require("../img/preview/champ-" + champions[champ].key + "_0.png");
			const champKey = champions[champ].key
			const champName = champions[champ].name

			championsList.push(
				<li className="card col center align-center"
					key={champKey} 
					value={champId}>
					<img src={champImg} alt={champKey}/>
					<span>{champName}</span>
				</li>
			)
		}
		return (
			<ConnectDisplayPanel>
				{championsList}	
			</ConnectDisplayPanel>
		)
	}

}

export default SelectionPanel;