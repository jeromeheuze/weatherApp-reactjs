var React = require('react');
var TopBanner = require('./TopBanner.js');
var ZipModal = require('./ZipModal.js');
var ZipField = require('./ZipField.js');
var BottomBanner = require('./BottomBanner.js');

var Page = React.createClass({
	getInitialState: function() {
		return {value: '', dataZip: ''};
	},
	handleChange: function(event) {
		this.setState({value: event.target.value});
		console.log("typing: "+event.target.value);
		if (event.target.value.length == 5){
			this.handleZip(event);
		}
	},
	handleZip: function(event) {
		var zip = event.target.value;
		var url = "http://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&appid=44db6a862fba0b067b1930da0d769e98";
		console.log("passed: "+event.target.value);
		$.ajax({
			url: url,
			dataType: 'JSON',
			type: 'GET',
			success:  function(data) {
				this.setState({dataZip: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.log(err);
			}.bind(this)
		});
	},
	getDefaultProps: function() {
		return {
			interval: 2000
		}
	},
	render: function() {
		return(
			<div className="col-lg-12">
				<TopBanner title="Weather App" />
				<ZipModal />
				<ZipField placeholder="Enter Zip Code i.e. 94044" updateZip={this.handleChange} />
				<BottomBanner text="Made with ReactJS and OpenWeatherMap API" />
			</div>
		);
	}
});
	
module.exports = Page;
