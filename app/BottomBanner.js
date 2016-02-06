var React = require('react');

var BottomBanner = React.createClass({
	render: function() {
		return(
			<div className="bottombanner">
				<p>{this.props.text}</p>
			</div>
		);
	}
});
	
module.exports = BottomBanner;
