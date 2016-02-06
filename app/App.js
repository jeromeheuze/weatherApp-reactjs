var React = require('react');
var TopBanner = require('./TopBanner.js');
var BottomBanner = require('./BottomBanner.js');

var Page = React.createClass({
	render: function() {
		return(
			<div className="col-lg-12">
				<TopBanner title="Weather App" />
				<BottomBanner text="Made with ReactJS and OpenWeatherMap API" />
			</div>
		);
	}
});
	
module.exports = Page;
