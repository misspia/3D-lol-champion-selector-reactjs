import React from 'react';
import championsData from '../json/allChampions.json';

class Card extends React.Component{
	constructor(){
		super()
		this.state = {champions: []}
	}
	componentWillMount(){
		this.setState({champions: championsData})
	}
	render(){
		let champions = this.state.champions.data
		
		let championsList = []
		for(var champ in champions){
			
			const champImg = require("../img/champ-" + champions[champ].key + "_0.png");
			const champKey = champions[champ].key
			const champName = champions[champ].name

			championsList.push(
				<li className="card col center align-center" key={champKey}>
					<img src={champImg} alt={champKey}/>
					<span>{champName}</span>
				</li>
			)
		}		

		return(
			<li className="perspective-container">
				<ul className="row center" id="champ-selection">
	       			{championsList}
				</ul>
			</li>			
		)
	}
}

export default Card;