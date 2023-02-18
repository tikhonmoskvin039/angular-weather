import { WeatherData } from './models/weather.model'
import { WeatherService } from './services/weather.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (private weatherService: WeatherService) {}

  title = 'angular-weather'

  weatherData?: WeatherData
  cityName: string = 'Kaliningrad'

  ngOnInit (): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getWeatherData(this.cityName)
    this.cityName = ''

  }

  private getWeatherData (cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe(data => {
      console.log('data', data)
      this.weatherData = data
    })
  }

  onSubmit () {
    this.getWeatherData(this.cityName)
    this.cityName = ''
  }
}
