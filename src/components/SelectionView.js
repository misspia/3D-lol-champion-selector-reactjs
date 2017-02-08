import React from 'react';
import SelectionPanel from './SelectionPanel';
import championsData from '../json/allChampions.json';

class SelectionView extends React.Component{
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
			if ({}.hasOwnProperty.call(champions, champ)){
				let champId = champ,
					champImg = require("../img/preview/champ-" + champions[champ].key + "_0.png"),
					champKey = champions[champ].key,
					champName = champions[champ].name

				championsList.push(
					
					<li className="card col center align-center"
						key={champKey} 
						value={champId}>
							<img src={champImg} alt={champKey}/>
							<span>{champName}</span>
					</li>
					
				)
			}
		}
		return (
			<SelectionPanel>
				{championsList}	
			</SelectionPanel>
		)
	}
}

export default SelectionView;