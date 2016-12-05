import React from 'react';
import championsData from '../json/allChampions.json';

class ChampionDisplayData extends React.Component{
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
	}
	render(){
		let champId = this.props.champId,
			skinId = this.props.skinId,
			champions = this.state.champions

		let champion = {
			key: champions[champId].key,
			name: champions[champId].name,
			title: champions[champId].title,
			skinName: champions[champId].skins[skinId].name,
			info: champions[champId].info
		}
		return (
			<ul>
				<li>{champId}</li>
				<li>
					<ul className="header">
						<li className="title">
							<span>{champion.name}</span> 
							<small>{champion.title}</small>
						</li>
						<li className="subtitle">{champion.skinName}</li>
					</ul>
				</li>		
				<li>
					<ul>
						<li>ATK: {champion.info.attack}</li>
						<li>DEF: {champion.info.defense}</li>
						<li>MAGIC: {champion.info.magic}</li>
						<li>DIFFICULTY: {champion.info.difficulty}</li>
					</ul>
				</li>
			</ul>	
		)
	}
}

export default ChampionDisplayData;