import React from 'react';
import championsData from '../json/allChampions.json';
import ChampionDisplayData from './ChampionDisplayData';
import SkinCard from './SkinCard';

class ChampionDisplay extends React.Component{
	constructor(){
		super()
		this.state={
			champions:[],
			skinId: 0
		}
		this.updateSkin = this.updateSkin.bind(this)
	}
	componentWillMount(){
		this.setState({champions: championsData.data})
	}
	// shouldComponentUpdate(nextProps, nextState){
	// 	console.log(nextProps)
	// 	console.log(nextState)
	// }
	updateSkin(e){		
		this.setState({skinId: e})
		console.log(this.state.skinId)
	}
	render(){
		let champId = this.props.champ,
			champions = this.state.champions
		let champion = {
			key: champions[champId].key,
			skins: champions[champId].skins
		}
		let skins = []
		for(var i = 0; i < champion.skins.length; i++) {
			let skinId = champion.skins[i].num,
				img = require("../img/preview/champ-" + champion.key + "_" + skinId + ".png"),
				key = champion.key + "_" + skinId
			skins.push(
				<SkinCard champId={champId} 
							onClick={this.updateSkin.bind(null, skinId)}
							key={key}
							imgSrc={img}/>
			)
		}

		
		let bgImg= require("../img/splash/splash-" + champions[champId].key + "_" + this.state.skinId + ".png")
		let displayStyle={
			backgroundImage: "url(" + bgImg + ")"
		}

		return(
			<ul id="champion-display" className="col center" style={displayStyle}>	
				<li className="col center container-data">
					<ChampionDisplayData champId={champId}/>
				</li>
				<li className="row flex-end align-center container-img">		
					<ul className="row">
						{skins}
					</ul>
				</li>			
			</ul>
		)
	}
}

export default ChampionDisplay;

