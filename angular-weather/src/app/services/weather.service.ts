import { WeatherData } from './../models/weather.model'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor (private http: HttpClient) {}

  private apiKey = 'da87f6bf26138ad195ee7d48f6e60123'

  getWeatherData (city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
    )
  }
}
