import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsService } from '../../services/sports.service';
import { GameCard } from '../game-card/game-card';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, GameCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  games: any[] = [];
  selectedSport: string = 'soccer';
  isLoading: boolean = false;
  
  sports = [
    { id: 'soccer', name: '⚽ Calcio', icon: '⚽' },
    { id: 'basketball_nba', name: '🏀 NBA', icon: '🏀' },
    { id: 'americanfootball_nfl', name: '🏈 NFL', icon: '🏈' },
    { id: 'baseball_mlb', name: '⚾ MLB', icon: '⚾' }
  ];

  constructor(private sportsService: SportsService) {}

  ngOnInit() {
    this.loadTodayGames();
  }

  loadTodayGames() {
    this.isLoading = true;
    this.sportsService.getTodayGames(this.selectedSport).subscribe({
      next: (response) => {
        this.games = response.events || [];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Errore nel caricamento partite:', error);
        this.isLoading = false;
      }
    });
  }

  onSportChange(sport: string) {
    this.selectedSport = sport;
    this.loadTodayGames();
  }

  refreshGames() {
    this.loadTodayGames();
  }
}
