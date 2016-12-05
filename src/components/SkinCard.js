import React from 'react';
import championsData from '../json/allChampions.json';

class SkinCard extends React.Component{
	constructor(){
		super()
		this.state={champions:[]}
	}
	componentWillMount(){
		this.setState({champions: championsData.data})
	}
	render(){
		return(
			<li className="skin-card"
				key={this.props.key}
				onClick={this.props.onClick}>
				<img alt={this.props.key} src={this.props.imgSrc}/>
			</li>
		)
	}
}

export default SkinCard;