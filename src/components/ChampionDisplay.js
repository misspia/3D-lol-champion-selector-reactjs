import React from 'react';
import championsData from '../json/allChampions.json';
import ChampionDisplayData from './ChampionDisplayData';
import SkinCard from './SkinCard';
import ChampionDisplayContainer from './ChampionDisplayContainer';

class ChampionDisplay extends React.Component{
	constructor(){
		super()
		this.state={
			champions:[],
			skinId: 0,
			skinIndex: 0
		}
		this.updateSkin = this.updateSkin.bind(this)
	}
	componentWillMount(){
		this.setState({champions: championsData.data})
	}
	componentWillReceiveProps(nextProps){
		this.setState({skinId: 0, skinIndex:0})
	}
	updateSkin(skinId, index ){
		this.setState({ skinId: skinId, skinIndex: index }) // this.state.skinIndex = index
	}
	render(){
		let champId = this.props.champ,
			champion = this.state.champions[champId]

		let skins = []
		for(var i = 0; i < champion.skins.length; i++) {
			let skinId = champion.skins[i].num,
				img = require("../img/preview/champ-" + champion.key + "_" + skinId + ".png"),
				key = champion.key + "_" + skinId
			skins.push(
				<SkinCard  champId={champId} 
							onClick={this.updateSkin.bind(null, skinId, i)}
							key={key}
							imgSrc={img} alt={key}/>
			)
		}
		return(
			<ChampionDisplayContainer champKey={champion.key}  skinId={this.state.skinId}>	
				<li className="col center container-data">
					<ChampionDisplayData champId={champId} skinIndex={this.state.skinIndex}/>
				</li>
				<li className="row flex-start align-center skin-panel-container">		
					<ul className="row skin-panel">
						{skins}
					</ul>
				</li>			
			</ChampionDisplayContainer>
		)
	}
}

export default ChampionDisplay;