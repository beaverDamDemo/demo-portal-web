import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { ResponseMessage } from '../pages/pilot-tower-sockets/pilot-tower-sockets';

@Injectable({
  providedIn: 'root'
})
export class PilotTowerService {
  private socket: Socket | null = null;

  connect(): void {
    if (!this.socket) {
      this.socket = io('http://localhost:3000/pilot-tower-messages', {
        transports: ['websocket']
      });
    }
  }

  sendMessage(msg: string): Observable<ResponseMessage> {
    return new Observable((observer) => {
      this.socket?.emit('messageFromBrowser', msg, (response: ResponseMessage) => {
        observer.next(response);
        observer.complete();
      });
    });
  }

  listenToMessages(): Observable<any> {
    return new Observable((subscriber) => {
      if (this.socket) {
        this.socket.on('message', (data) => {
          subscriber.next(data);
        });
      }
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}
