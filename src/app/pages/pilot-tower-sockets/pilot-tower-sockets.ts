import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PilotTowerService } from '../../services/pilot-tower-service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

export type ResponseMessage = {
  timestamp: string;
  status: string,
  message: string,
  // id: string,
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
  // pilotTowerSequence: string[] = [
  //   "This is Iron Fist, taking fire from the left flank—request support!",
  //   "Enemy armor spotted at 2 o’clock, about 300 meters—load AP rounds!",
  //   "Tiger tank in sight—repeat, Tiger tank in sight. Engage with caution!",
  //   "We’ve lost tracks, immobilized near the farmhouse—need recovery!",
  //   "Commander is down, gunner taking command—continuing push.",
  //   "Smoke screen deployed, advancing under cover!",
  //   "Shells running low—only three HE rounds left. Watch your shots!",
  //   "Panzer on the ridge—artillery grid coordinates 47A, fire for effect!",
  //   "Charlie squad is pinned—diverting north to flank the enemy.",
  //   "We've hit a mine—rear hull damaged, can't reverse!",
  //   "Driver, hold position! Enemy infantry moving with sticky bombs!",
  //   "Engine overheating—reduce RPM or we’re cooked!",
  //   "Command post this is Thunder—sector secured, no hostiles.",
  //   "Multiple hits but turret still operational—we're staying in the fight!",
  //   "Friendly air cover inbound—marking position with flare.",
  //   "Radioman—get HQ on the horn, we need reinforcements!",
  //   "Negative visual on support units—are they delayed?",
  //   "This is Hammer—confirming enemy retreat across riverbed.",
  //   "Cannon jammed! Switching to coaxial MG until resolved.",
  //   "Mission complete. Returning to rally point. One casualty, minimal damage."
  // ];
  private sub: Subscription | null = null;
  currentIndex = 0;
  isConnectedSig = signal<boolean>(false);
  responseSig = signal<ResponseMessage[]>([]);
  private _snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.pilotTowerService.connect().subscribe(success => {
      this.isConnectedSig.set(success);
      if (success) {
        console.log('🟢 Connected');
        this._snackBar.open("🟢 Connected to websocket", 'Close', {
          panelClass: ['snackbar-success'],
          duration: 6000
        });
      } else {
        console.log('🔴 Connection to websocket failed');
        this._snackBar.open('🔴 Connection failed', 'Close', {
          panelClass: ['snackbar-error'],
          duration: 12500
        });
      }
    });
  }

  startListening(): void {
    this.sub = this.pilotTowerService
      .listenToMessages()
      .subscribe((msg) => {
        try {
          const parsed: ResponseMessage = JSON.parse(msg);
          this.responseSig.update(current => [parsed, ...current]);
        } catch (e) {
          console.error('❌ Failed to parse message:', msg);
        }
      });
  }

  disconnect(): void {
    this.pilotTowerService.disconnect();
    this.sub?.unsubscribe();
    this.sub = null;
    this.isConnectedSig.set(false);
  }

  sendMessage() {
    // if (this.currentIndex < this.pilotTowerSequence.length) {
    //   this.pilotTowerService.sendSocketIoMessage(this.pilotTowerSequence[this.currentIndex]).subscribe(res => {
    //     this.responseSig.update((messages) => [
    //       ...messages,
    //       {
    //         text: res.text,
    //         time: res.time,
    //         status: res.status,
    //         id: res.id
    //       }
    //     ]);

    //     setTimeout(() => {
    //       const updatedMessages = this.responseSig().filter((_, index, arr) => {
    //         return index === arr.length - 1;
    //       });
    //       this.responseSig.set(updatedMessages);
    //     }, 9000);
    //   });

    //   this.currentIndex++;
    // }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.pilotTowerService.disconnect();
  }
}
