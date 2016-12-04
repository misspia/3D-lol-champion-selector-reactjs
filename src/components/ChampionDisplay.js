import React from 'react';
import championsData from '../json/allChampions.json';

class ChampionDisplay extends React.Component{
	constructor(){
		super()
		this.state={
			champions:[]
		}
	}
	componentWillMount(){
		this.setState({
			champions: championsData.data
		})
		console.log(championsData.data)
	}
	render(){
		let champId = this.props.champ,
			champions = this.state.champions
		let champion = {
			key: champions[champId].key,
			name: champions[champId].name,
			title: champions[champId].title,
			img: require("../img/preview/champ-" + champions[champId].key + "_0.png")
		}
		

		return(
			<ul id="champion-display" className="row center">
				<li className="col center align-center container-img">
					<ul >			
						<img src={champion.img} alt={champion.key}/>
					</ul>
				</li>	
				<li className="col center container-data">
					<ul className="col center">
						<li>{champId}</li>
						<li>{champion.name}</li>
						<li>{champion.title}</li>
					</ul>
				</li>		
			</ul>
		)
	}
}


export default ChampionDisplay;