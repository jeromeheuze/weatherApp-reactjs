var React = require('react');

var ZipField = React.createClass({
	render: function() {
		return(
			<form className="zipfield">
				<div className="form-group">
					<input type="zip" maxLength="5" className="form-control" id="exampleInputEmail1" placeholder={this.props.placeholder}/>
				</div>
			</form>
		);
	}
});
	
module.exports = ZipField;
