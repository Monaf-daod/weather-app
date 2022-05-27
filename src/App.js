import React , {Component} from 'react'
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';


const Api_key = "b979a32541287e1256626d6bf9300e7b";   //my key

//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

class App extends Component {

  state = {
    tempearture :'',
    city :'',
    country :'',
    humidity :'',
    pressure :'',
    description :'',
    error:''
  }

  getWeather = async (e) =>{
        e.preventDefault();
        let city = e.target.elements.city.value;
        let country = e.target.elements.country.value;
        const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${Api_key}`);
        const data = await api.json();
        if(city && country){
          this.setState({
            tempearture :data.main.temp,
            city :data.name,
            country :data.sys.country,
            humidity :data.main.humidity,
            pressure :data.main.pressure,
            description :data.weather[0].description,
            error:''
          })
        }
        else{
          this.setState({
            tempearture :'',
            city :'',
            country :'',
            humidity :'',
            pressure :'',
            description :'',
            error:'Please Enter City & Country To Get The Weather ....'
          })
        }
      }

  render(){
    return (
      <div className="App">
      <Form  getWeather={this.getWeather}/>
      <Weather 
          tempearture = {this.state.tempearture}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          pressure = {this.state.pressure}
          description = {this.state.description}
          error = {this.state.error}
      />
      </div>
    )
  }
}

export default App;
