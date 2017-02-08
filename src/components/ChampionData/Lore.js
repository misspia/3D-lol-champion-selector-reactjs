import React from 'react';

class Lore extends React.Component{
	constructor(){
		super()
		this.state = {lore:''}
	}
	componentWillMount(){
		this.setState({lore: this.props.data})
	}
	render(){
		return(
			<ul className="lore cover">
				<li>
					{this.props.data}
				</li>
			</ul>
		)
	}
}

export default Lore;