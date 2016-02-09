var React = require('react');
var ZipModal = require('./ZipModal.js');

var ZipField = React.createClass({
    getInitialState: function() {
        return {
            value: '',
            cityName: '',
            cityDesc: 'Enter Zip below',
            cityIcon: ''
        };
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
        console.log("typing: "+event.target.value);
        if (event.target.value.length == 5){
            this.handleZip(event);
        } else {
            this.setState({cityName: ''});
            this.setState({cityDesc: 'Enter Valid Zip Code below'});
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
                console.log(data);
                if (data.cod != '404') {
                    this.setState({cityName: data.name});
                    this.setState({cityDesc: data.weather[0].description});
                    this.setState({cityIcon: 'wi wi-owm-'+data.weather[0].id})
                } else {
                    this.setState({cityDesc: data.message});
                }

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
    render: function () {
        return (
            <div className="bottom">
                <div className="zipmodal">
                    <h2 className="text-center">{this.state.cityName}</h2>
                    <p className="text-center">{this.state.cityDesc}</p>
                    <p className="text-center"><i className={this.state.cityIcon}></i></p>
                </div>
                <form className="zipfield">
                    <div className="form-group">
                        <input type="zip" maxLength="5" className="form-control" value={this.value} onChange={this.handleChange} placeholder={this.props.placeholder}/>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = ZipField;
