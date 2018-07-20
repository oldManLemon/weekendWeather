import React, { Component } from 'react';

import { WeatherService } from "../WeatherService";

class Brisbane extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Brisbane Test',
            data: null
        };

        this.weatherService = new WeatherService();
    }

    handleData(data) {
        this.setState({ title: this.title, data });
        console.log(data);
    }

    componentDidMount() {
        this.weatherService.getData()
            .then(data => this.handleData(data))
            .catch(e => this.handleError(e));
    }

    handleError(error) {
        console.log('Looks like there was a problem: \n', error);
    }

    render() {

        /** @type {Forecast.RootObject|null} */
        var payload = this.state.data;

        if (payload == null) {
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
