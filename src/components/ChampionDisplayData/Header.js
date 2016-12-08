import React from 'react';

class Header extends React.Component{
	render(){

		return(
			<ul>
				<li className="title">
					<span>{this.props.name}</span> 
					<small>{this.props.title}</small>
				</li>
				<li className="subtitle">{this.props.skinName.toLowerCase() === 'default' ? 'Original' : this.props.skinName}</li>
			</ul>
		)
	}
}

export default Header;

// <span>{this.props.name}</span> 