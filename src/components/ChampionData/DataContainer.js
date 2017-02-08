import React from 'react';
import championsData from '../../json/allChampions.json';
import Header from './Header.js';
import NavItem from './NavItem.js';
import StatTable from './StatTable';
import Lore from './Lore';
import Spells from './Spells';

class DataContainer extends React.Component{
	constructor(){
		super()
		this.state={
			champions:[],
			nav: 0,
			aboutHeader:'STATS'
		};
		this.navState = this.navState.bind(this);
	}
    navState(state, aboutHeader){     
		this.setState({nav: state, aboutHeader: aboutHeader});
    }
	componentWillMount(){
		this.setState({
			champions: championsData.data
		})
	}
	render(){
		let skinIndex = this.props.skinIndex,
			champion = this.state.champions[this.props.champId];
		return (
			<ul className="cover col">
				<li className="header">
					<Header name={champion.name} title={champion.title} skinName={champion.skins[skinIndex].name}/>
				</li>		
				<li className="col center about">
					<ul className="col about-inner">
						<li className="row center self-center nav">
							<NavItem onClick={this.navState.bind(null, 0, 'STATS')} label="STATS" active={(this.state.nav === 0 ? 'active' : '')}></NavItem> 
							<NavItem onClick={this.navState.bind(null, 1, 'SPELLS')} label="SPELLS" active={(this.state.nav === 1 ? 'active' : '')}></NavItem>
							<NavItem onClick={this.navState.bind(null, 2, 'LORE')} label="LORE" active={(this.state.nav === 2 ? 'active' : '')}></NavItem>
						</li>
						<span className="title self-center">{this.state.aboutHeader}</span>				
						{this.state.nav === 0 ? <StatTable data={champion.info} subData={champion.tags}/> : null}
						{this.state.nav === 1 ? <Spells data={champion.spells}/> : null}
						{this.state.nav === 2 ? <Lore data={champion.lore}/> : null}
					</ul>
						
				</li>
			</ul>	
		)
	}
}

export default DataContainer;