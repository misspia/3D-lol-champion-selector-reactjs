import React from 'react';
import championsData from '../json/allChampions.json';

class ChampionBackground extends React.Component{
	constructor(){
		super()
		this.state={
			champions:[]
		}
	}
	componentWillMount(){
		this.setState({champions: championsData.data})
	}	
	render(){
		let fn = child => React.cloneElement(child)
		let items = React.Children.map(this.props.children, fn)
		
		let champKey = this.props.champKey,
			skinId = this.props.skinId

		let bgImg = require("../img/splash/splash-" + champKey + "_" + skinId + ".png")
		let displayStyle={
			backgroundImage: "url(" + bgImg + ")"
		}
		return(
			<ul id="champion-display" className="col center" style={displayStyle}>	
				{items}		
			</ul>
		)
	}
}

export default ChampionBackground;