import React from 'react';
import championsData from '../json/allChampions.json';
import StatTable from './StatTable';
import Header from './Header.js';

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
			skinIndex = this.props.skinIndex,
			champions = this.state.champions

		let champion = {
			key: champions[champId].key,
			name: champions[champId].name,
			title: champions[champId].title,
			skinName: champions[champId].skins[skinIndex].name,
			info: champions[champId].info
		}
		return (
			<ul className="cover col">
				<li className="header">
					<Header name={champion.name} title={champion.title} skinName={champion.skinName}/>
				</li>		
				<li className="col about">
					<span className="title">STATS</span>
					<ul className="cover">
						<StatTable data={champion.info}/>
					</ul>
					
				</li>
			</ul>	
		)
	}
}

export default ChampionDisplayData;