var React = require('react');

var ZipModal = React.createClass({
	render: function() {
		return(
			<div className="zipmodal">
				<h2>{this.props.dataZip}</h2>
			</div>
		);
	}
});
	
module.exports = ZipModal;
