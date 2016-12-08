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
				
				onClick={this.props.onClick}>
				<img alt={this.props.alt} src={this.props.imgSrc}/>
			</li>
		)
	}
}

export default SkinCard;

// key={this.props.key}