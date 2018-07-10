import React, { Component } from 'react';


class Brisbane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Brisbane Test',
            data: []
        };
    }
  
    componentDidMount() {
        //fetch('https://api.openweathermap.org/data/2.5/forecast?lat=24&lon=153&appid=dd0c79dc2c56fc2c2dbfe76ed03897d9')
        fetch('https://samples.openweathermap.org/data/2.5/forecast?lat=24&lon=153&appid=dd0c79dc2c56fc2c2dbfe76ed03897d9',{
            crossDomain:true,
            method: 'POST',
            mode: "no-cors",
            headers: {'Content-Type':'application/json'}})
            .then(res => res.json())
            .then(data => this.setState({ data }, () => console.log('data: ', data)));
    }
    render() {
        return (
            <div>
            <h1>{this.state.title}</h1>
            <p>{this.state.data}</p>
            </div>
        );
    }
}

export default Brisbane;
