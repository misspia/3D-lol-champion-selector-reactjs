import React from 'react';

class Roles extends React.Component{
	constructor(){
		super()
		this.state = {}
	}
	render(){
		let roles = []

		this.props.data.map(function(role){
			roles.push(
				<li key={role} className="col center align-center role-item">
					<i className={"icon-role-" + role.toLowerCase()}></i>
					<span className="">{role.toUpperCase()}</span>
				</li>			
			)
			return roles;				
		})

		return(
			<ul className="cover col space-around roles-container">
				<li className="cover row align-center roles">
					<ul className="cover row align-center">
						{roles}
					</ul>					
				</li>
			</ul>
		)
	}
}

export default Roles;