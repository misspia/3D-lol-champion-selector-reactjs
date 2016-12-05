import React from 'react';
import championsData from '../json/allChampions.json';
import ChampionDisplay from './ChampionDisplay';

class ConnectDisplayPanel extends React.Component{
	constructor(){
		super()
		this.state = {
			selectedId: 1,
			champions: [],
			skin:0
		}
	}
	componentWillMount(){
		this.setState({champions: championsData.data})
	}
	selectItem(selectedId){
		this.setState({selectedId})
	}
	render(){
		let fn = child => React.cloneElement(child, {
			onClick: this.selectItem.bind(this, child.props.value)
		})
		let items = React.Children.map(this.props.children, fn)

		return (
			<ul className="col center">
				<li className="col center align-center container-champion-display">
					<ChampionDisplay champ={this.state.selectedId}/>
				</li>
				<li className="container-selection-panel">
					<ul className="row center perspective-container">
		       			{items}
					</ul>
				</li>
			</ul>
		)	
	}
}

export default ConnectDisplayPanel;