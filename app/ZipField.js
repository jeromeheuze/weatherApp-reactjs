var React = require('react');

var ZipField = React.createClass({
	handleChange: function(event) {
		var value = event.target.value;
		console.log("typing: "+value);
		if (value == 5){
			this.props.handleZip(value);
		}
	},
	render: function() {
		return(
			<form className="zipfield">
				<div className="form-group">
					<input type="zip" maxLength="5" className="form-control" value={this.value} onChange={this.handleChange} placeholder={this.props.placeholder}/>
				</div>
			</form>
		);
	},
	componentDidMount: function() {

	}
});
	
module.exports = ZipField;
