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
			champions = this.state.champions

		let champion = {
			key: champions[champId].key,
			name: champions[champId].name,
			title: champions[champId].title
		}
		return (
			<ul>
				<li>{champId}</li>
				<li>{champion.name}</li>
				<li>{champion.title}</li>
			</ul>
			
		)
	}
}

export default ChampionDisplayData;