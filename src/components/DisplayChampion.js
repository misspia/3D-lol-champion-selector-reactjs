import React from 'react';
// import championsData from '../json/allChampions.json';

class DisplayChampion extends React.Component{
	constructor(){
		super()
		this.state = {selected: 'none'}
	}
	selectItem(selected){
		this.setState({selected})
	}
	render(){
		let fn = child => React.cloneElement(child, {
			onClick: this.selectItem.bind(this, child.props.value)
		})

		let items = React.Children.map(this.props.children, fn)

		return (
			<div>
				<h2>You have selected: {this.state.selected}</h2>
				<li className="perspective-container">
					<ul className="row center" id="champ-selection">
		       			{items}
					</ul>
				</li>
			</div>
		)	}
}

export default DisplayChampion;