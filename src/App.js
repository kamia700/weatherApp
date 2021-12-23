import React from 'react';
import Axios from 'axios';
import './App.css';
import DisplayWeather from './components/DisplayWeather.js';
import Navbar from './components/Navbar.js';
import InfoBar from './components/InfoBar.js';

const API_KEY = '27ba8c742a54e5d3e7e1e27f3a0e5fa4';

const initialState = {
  coords: {
    latitude: 51,
    longitude: -0.12
  },
  weather: {},
  inputData: 'hi',
  units: 'metric',
  activeClassBtn: 'Cbtn'
} 

let setData = (response) => {
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
  return weatherData;
} 

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
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
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}&lang=ru&appid=${API_KEY}&units=metric`).then(response => {
          this.setState({ weather: setData(response)});
        })
        }, (error) => {
          // runs when an error occurs or when you deny access
          if (error.code === error.PERMISSION_DENIED) {
            console.log("User denied the request for Geolocation:-(");
          }
          Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Omsk&lang=ru&appid=${API_KEY}&units=metric`).then(response => {
            this.setState({ weather: setData(response)});
          })
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.")      
    }
  }


  changeWeather = (evt) => {
    evt.preventDefault();

    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputData}&lang=ru&appid=${API_KEY}&units=${this.state.units}`).then(response => {
      this.setState({ weather: setData(response)});
    }).catch(error => {
      if (error.response.status !== 200) {
        console.log(this.state.weather)
        this.setState({ 
          weather: this.state.weather
        });
        alert('Ooops, the city does not exist! Please, try again')
      }
    });
  }

  //track the input value
  changeRegion = (e) => {
    e.preventDefault();
    this.setState({ inputData: e.target.value});
  }  

  //track units value
  changeUnits=(unit,temp)=> {
    if (this.state.units !== unit) {
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
  }

  handleClick=(id) => {
     this.setState({
      activeClassBtn: id
    })

    if(this.state.activeClassBtn !== id) {
      let el = document.getElementById(id);
      el.classList.add('active');
      let prevEl = document.getElementById(this.state.activeClassBtn);
      prevEl.classList.remove('active');
    } 
  }

  render () {
    return (
      <div className="App">
        <div className={'wrap'}>
          <Navbar handleClick={this.handleClick} changeWeather = {this.changeWeather} changeRegion={this.changeRegion} changeUnits={this.changeUnits} weather={this.state.weather} units={this.state.units} activeClassBtn={this.state.activeClassBtn}/>
          <DisplayWeather weather={this.state.weather} />
          <InfoBar weather={this.state.weather} />
        </div>
      </div>
    );
  }
}

export default App;
