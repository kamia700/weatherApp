import React from 'react';
import Axios from 'axios';
import './App.css';
import DisplayWeather from './components/DisplayWeather.js';
import Navbar from './components/Navbar.js';
import InfoBar from './components/InfoBar.js';

const API_KEY = '27ba8c742a54e5d3e7e1e27f3a0e5fa4';

class App extends React.Component {

  //state 
  constructor() {
    super();
    this.state = {
      coords: {
        latitude: 51,
        longitude: -0.12
      },
      weather: {},
      inputData: '',
      units: 'metric'
    }; 

    // this.initialData = this.initialData.bind(this);
  }

  initialData(weatherData) {
    this.setState({ weather: weatherData});

  }

  changeUnits=(unit,temp)=> {
    this.setState({
      units: unit
  })

  switch(unit) {
    case 'imperial':
      let fahrenheit = Math.round((temp * 1.8) + 32);
      this.setState({
        weather: {
        ...this.state.weather,
        temperature: fahrenheit
        }
      });
      break;
    case 'metric':
      let celsius = Math.round(((temp - 32) / 1.8));
      this.setState({
        weather: {
        ...this.state.weather,
        temperature: celsius
        }
      });
      break;
    default:
      unit='metric';
    } 
  }



  componentDidMount() {    
    // get device location
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        let currentCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        this.setState({coords:currentCoords});
        
        //API call
        Axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}&lang=ru&appid=${API_KEY}&units=metric`).then(response => {
          let weatherData = {
            location: response.data.name,
            wind: response.data.wind.speed,
            wind_dir: response.data.wind.deg,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            img: response.data.weather[0].icon,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure
          };
          this.setState({ weather: weatherData});
        })
      }, (error) => {
          // this runs when an error occurs or when you deny access
          if (error.code === error.PERMISSION_DENIED) {
            console.log("User denied the request for Geolocation:-(");
          }
          Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Omsk&lang=ru&appid=${API_KEY}&units=metric`).then(response => {
            let weatherData = {
              location: response.data.name,
              wind: response.data.wind.speed,
              wind_dir: response.data.wind.deg,
              temperature: response.data.main.temp,
              description: response.data.weather[0].description,
              img: response.data.weather[0].icon,
              humidity: response.data.main.humidity,
              pressure: response.data.main.pressure
            };
            this.setState({ weather: weatherData});
            // initialData(weatherData);
            // console.log(this);

            console.log(response);
          })
        }
      );
      // navigator.permissions.query({ name: 'geolocation' }).then(console.log("Geolocation is not supported by this browser."));
    } else {
      console.log("Geolocation is not supported by this browser.")      
    }

  }

  // options = {
  //   types: ['(cities)']
  // }  

  changeWeather = (evt) => {
    evt.preventDefault();
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputData}&lang=ru&appid=${API_KEY}&units=metric`).then(response => {
      let weatherData = {
        location: response.data.name,
        wind: response.data.wind.speed,
        wind_dir: response.data.wind.deg,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        img: response.data.weather[0].icon,
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure
      };
      this.setState({ weather: weatherData});
    })
  }
  // changeUnits={this.changeUnits}

  //track the input value
  change = (value) => {
    // this.autocompliete = new google.maps.places.Autocomplete(input, options);
    this.setState({ inputData: value});
  }  

  render () {
    return (
      <div className="App">
        <div className={'wrap'}>
          <Navbar changeWeather = {this.changeWeather} changeRegion={this.change} weather={this.state.weather} changeUnits={this.changeUnits} units={this.state.units}/>
          <DisplayWeather weather={this.state.weather} />
          <InfoBar weather={this.state.weather} />
        </div>
      </div>
    );
  }
}

export default App;
