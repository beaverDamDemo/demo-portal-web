import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PilotTowerService } from '../../services/pilot-tower-service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

export type ResponseMessage = {
  time: string;
  status: string,
  text: string,
  id: string,
};

@Component({
  selector: 'app-pilot-tower-sockets',
  imports: [MatButtonModule, CommonModule],
  templateUrl: './pilot-tower-sockets.html',
  styleUrl: './pilot-tower-sockets.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PilotTowerSockets implements OnInit {
  private pilotTowerService = inject(PilotTowerService);
  pilotTowerSequence: string[] = [
    "Request pushback approved",
    "Taxi to runway 27 via taxiway Bravo",
    "Hold short of runway 27",
    "Cleared for takeoff, runway 27",
    "Contact departure on 120.5",
    "Climb and maintain 5,000 feet",
    "Turn left heading 180",
    "Maintain present heading",
    "Flight level 350 confirmed",
    "Request frequency change approved",
    "Descend and maintain 3,000 feet",
    "Expect vectors for ILS runway 09",
    "Contact approach on 124.3",
    "Report established on the localizer",
    "Cleared to land, runway 09",
    "Taxi to parking via taxiway Alpha"
  ];
  private sub: Subscription | null = null;
  currentIndex = 0;
  isConnected: boolean = false;
  responseSig = signal<ResponseMessage[]>([]);

  ngOnInit(): void {
    this.pilotTowerService.connect();
  }

  startListening(): void {
    if (!this.isConnected) {
      this.sub = this.pilotTowerService
        .listenToMessages()
        .subscribe((data) => {
          this.responseSig.set(data);
        });
      this.isConnected = true;
    }
  }

  disconnect(): void {
    this.pilotTowerService.disconnect();
    this.sub?.unsubscribe();
    this.sub = null;
    this.isConnected = false;
  }

  sendMessage() {
    if (this.currentIndex < this.pilotTowerSequence.length) {
      this.pilotTowerService.sendMessage(this.pilotTowerSequence[this.currentIndex]).subscribe(res => {
        this.responseSig.update((messages) => [
          ...messages,
          {
            text: res.text,
            time: res.time,
            status: res.status,
            id: res.id
          }
        ]);

        setTimeout(() => {
          const updatedMessages = this.responseSig().filter((_, index, arr) => {
            return index === arr.length - 1;
          });
          this.responseSig.set(updatedMessages);
        }, 9000);
      });

      this.currentIndex++;
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.pilotTowerService.disconnect();
  }
}