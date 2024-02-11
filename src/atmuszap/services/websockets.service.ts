import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { WebsocketDto } from '../dto/websocket.dto';
import { Websocket } from '../types/instances/create';
import { WebsocketSet } from '../types/websockets';
import { AtmusZapResponseError } from '../types';

@Injectable()
export class WebsocketsService {
  constructor(private readonly httpService: HttpService) {}

  set(data: WebsocketDto, instanceName: string, instanceKey: string) {
    return new Promise<WebsocketSet>((resolve, reject) => {
      this.httpService
        .post<WebsocketSet>(`/webhook/set/${instanceName}`, data, {
          headers: { Authorization: `Bearer ${instanceKey}` },
        })
        .subscribe({
          next: ({ data }) => resolve(data),
          error: ({ response: { data } }: AtmusZapResponseError) => reject(data),
        });
    });
  }

  find(instanceName: string, instanceKey: string) {
    return new Promise<Websocket>((resolve, reject) => {
      this.httpService
        .get<Websocket>(`/webhook/find/${instanceName}`, {
          headers: { Authorization: `Bearer ${instanceKey}` },
        })
        .subscribe({
          next: ({ data }) => resolve(data),
          error: ({ response: { data } }: AtmusZapResponseError) => reject(data),
        });
    });
  }
}
