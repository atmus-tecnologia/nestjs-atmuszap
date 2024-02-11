import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { WebhookDto } from '../dto/webhook.dto';
import { Webhook } from '../types/instances/create';
import { WebhookSet } from '../types/webhooks';
import { AtmusZapResponseError } from '../types';

@Injectable()
export class WebhooksService {
  constructor(private readonly httpService: HttpService) {}

  set(data: WebhookDto, instanceName: string, instanceKey: string) {
    return new Promise<WebhookSet>((resolve, reject) => {
      this.httpService
        .post<WebhookSet>(`/webhook/set/${instanceName}`, data, {
          headers: { Authorization: `Bearer ${instanceKey}` },
        })
        .subscribe({
          next: ({ data }) => resolve(data),
          error: ({ response: { data } }: AtmusZapResponseError) => reject(data),
        });
    });
  }

  find(instanceName: string, instanceKey: string) {
    return new Promise<Webhook>((resolve, reject) => {
      this.httpService
        .get<Webhook>(`/webhook/find/${instanceName}`, {
          headers: { Authorization: `Bearer ${instanceKey}` },
        })
        .subscribe({
          next: ({ data }) => resolve(data),
          error: ({ response: { data } }: AtmusZapResponseError) => reject(data),
        });
    });
  }
}
