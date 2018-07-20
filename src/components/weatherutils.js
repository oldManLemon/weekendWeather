

class WeatherUtils {


    /**
     * 
     * @param {Forecast.RootObject} weatherData 
     */
    constructor(weatherData)
    {
        this.weatherData = weathData;
    }


     getCurrentDay() {
        var date = new Date();
        var day = date.getDay();
        return day
    }
    getSundaysIndex() {
        //var dayIntheWeek = this.getDay();
        const sun = 0;
        var day = this.getCurrentDay();
        
        if (day == sun) {
            return (7);
        } else {
            return (7 -  day);
        }
    
    
    }
    
    
    
   getSaturdaysIndex() {
   
        const sat = 6;
        var day = this.getCurrentDay();
        console.log(sat - day);
        return (sat - day);
    }
    
 

}


