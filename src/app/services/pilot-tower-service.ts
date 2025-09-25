import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { ResponseMessage } from '../pages/pilot-tower-sockets/pilot-tower-sockets';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PilotTowerService {
  private API_URL = `${environment.API_URL}/pilot-tower`;
  private socketSocketIo: Socket | null = null;
  private socket: WebSocket | null = null;

  connect(): void {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      const wsUrl = `${environment.API_URL.replace(/^http/, 'ws')}/pilot-tower/pilot-tower-messages`;
      this.socket = new WebSocket(wsUrl);
    }
  }

  listenToMessages(): Observable<string> {
    return new Observable(subscriber => {
      if (this.socket) {
        this.socket.onmessage = (event) => {
          subscriber.next(event.data);
        };

        this.socket.onerror = (error) => {
          console.error('WebSocket error:', error);
        };

        this.socket.onclose = () => {
          console.warn('WebSocket connection closed');
        };
      }
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
  connectSocketIo(): void {
    if (!this.socketSocketIo) {
      this.socketSocketIo = io(`${this.API_URL}/pilot-tower-messages`, {
        transports: ['websocket']
      });
    }
  }

  sendSocketIoMessage(msg: string): Observable<ResponseMessage> {
    return new Observable((observer) => {
      this.socketSocketIo?.emit('messageFromBrowser', msg, (response: ResponseMessage) => {
        observer.next(response);
        observer.complete();
      });
    });
  }

  listenToSocketIoMessages(): Observable<any> {
    return new Observable((subscriber) => {
      if (this.socketSocketIo) {
        this.socketSocketIo.on('message', (data) => {
          subscriber.next(data);
        });
      }
    });
  }

  disconnectSocketIo(): void {
    if (this.socketSocketIo) {
      this.socketSocketIo.disconnect();
      this.socketSocketIo = null;
    }
  }
}
