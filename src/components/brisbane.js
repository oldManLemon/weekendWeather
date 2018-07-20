import React, { Component } from 'react';


class Brisbane extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Brisbane Test',
            data: null
        };
    }

    getMeData(){
        return fetch('http://api.apixu.com/v1/forecast.json?key=69e03ca47c2d4a998f593024181807&q=Brisbane&days=7')
            .then(res => res.json())
    }

    /**
     * 
     * 
     * @param {Forecast.RootObject} data 
     */
    handleData(data)
    {
        this.setState({title: this.title, data});
        console.log(data);
    }


    componentDidMount() {

        this.getMeData()
        .then(data => this.handleData(data))
        .catch(e => this.handleError(e));

    }

    handleError(error) {
        console.log('Looks like there was a problem: \n', error);
    }

    render() {

        /** @type {Forecast.RootObject|null} */
        var payload = this.state.data;

        if(payload == null){
            return (<p>Loading...</p>);
        }

        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>Feels like {payload.current.feelslike_c}</p>

                <h1>Forecasts</h1>
                <p>
                    <ul>
                    {payload.forecast.forecastday.map(fd => (<li>{fd.day.avgtemp_c}</li>))}
                    </ul>
                </p>
            </div>
        );
    }
}

export default Brisbane;
