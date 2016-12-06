import React from 'react';

class StatTable extends React.Component{
	constructor(){
		super()
		this.state = {
			stats: [],
			statLabels:["attack", "defense", "magic", "difficulty"]
		}
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			stats:[]
		})
	}
	render(){
		let i = 0
		for(let key in this.props.data){
			let progressStyle = {
				width: (this.props.data[key] / 10 * 100) + "%"
			}
			this.state.stats.push(
				<tr key={this.state.statLabels[i]} className="row">
					<td className={"row flex-end label icon-" + this.state.statLabels[i]}></td>
					<td className="data">
						<span className="progress" style={progressStyle}>
							<span className="shading"></span>
						</span>
					</td>
				</tr>
			)
			i ++;
		}
		return(
			<table className="stat-table">
				<tbody>
					{this.state.stats}
				</tbody>				
			</table>
		)
	}
}

export default StatTable;
