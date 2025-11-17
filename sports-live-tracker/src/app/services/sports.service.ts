import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
  private apiUrl = 'https://therundown-therundown-v1.p.rapidapi.com';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-RapidAPI-Key': environment.rapidApiKey,
      'X-RapidAPI-Host': environment.rapidApiHost
    });
  }

  // Ottiene le partite di oggi
  getTodayGames(sport: string = 'soccer'): Observable<any> {
    return this.http.get(`${this.apiUrl}/sports/${sport}/events/today`, {
      headers: this.getHeaders()
    });
  }

  // Ottiene partite live
  getLiveGames(sport: string = 'soccer'): Observable<any> {
    return this.http.get(`${this.apiUrl}/sports/${sport}/events/live`, {
      headers: this.getHeaders()
    });
  }

  // Dettagli partita specifica
  getEventDetails(eventId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/events/${eventId}`, {
      headers: this.getHeaders()
    });
  }
}
