var React = require('react');

var TopBanner = React.createClass({
	render: function() {
		return(
			<div className="topbanner">
				<h2>{this.props.title}</h2>
			</div>
		);
	}
});
	
module.exports = TopBanner;
