import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-card',
  imports: [CommonModule],
  templateUrl: './game-card.html',
  styleUrl: './game-card.css',
})
export class GameCard {
  @Input() game: any;

  getStatusBadgeClass(): string {
    const status = this.game.event_status?.toLowerCase();
    if (status === 'in progress') return 'bg-danger';
    if (status === 'completed') return 'bg-success';
    return 'bg-secondary';
  }

  getStatusText(): string {
    const status = this.game.event_status;
    if (status === 'in progress') return 'LIVE';
    if (status === 'completed') return 'FINITA';
    return 'DA INIZIARE';
  }

  getScore(): string {
    if (this.game.scores && this.game.scores.length >= 2) {
      return `${this.game.scores[0].score} - ${this.game.scores[1].score}`;
    }
    return '-- vs --';
  }
}
