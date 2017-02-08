import React from 'react';

class Spells extends React.Component{
	constructor(){
		super()
		this.state = {spells:[]}
	}
	componentWillMount(){
		this.setState({})
	}
	componentWillReceiveProps(nextProps){
		this.setState({spells:[]})
	}
	render(){
		for(var i = 0; i < this.props.data.length; i ++){
			let spell = this.props.data[i],
			 	spellStyle = {
			 		backgroundImage: "url(" + require("../../img/spell/spell-" + spell.image.full) + ")"
			 	}

			this.state.spells.push(
				<li key={spell.name} className="spell-item">
					<ul className="row center align-center">
						<li className="col center img-container"
							style={spellStyle}>
						</li>
						<li className="col center text-container">
							<span className="title">{spell.name}</span>
							<small>Cost: {spell.costBurn + " " + spell.costType}</small>
							<small>Range: {spell.rangeBurn}</small>
						</li>
						
					</ul>
				</li>
			)
		}
		return(
			<ul className="cover col center spells">
				{this.state.spells}
			</ul>
		)
	}
}

export default Spells;
