import React from 'react';

class NavItem extends React.Component{
	render(){
		return(
			<span onClick={this.props.onClick}
				className={"cover col center align-center nav-item " + this.props.active}>
				{this.props.label}
			</span>
		)
	}
}

export default NavItem;