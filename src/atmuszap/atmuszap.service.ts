import { Injectable } from '@nestjs/common';
import { InstancesService, WebhooksService, WebsocketsService } from './services';

@Injectable()
export class AtmusZapService {
  constructor(
    private readonly instancesService: InstancesService,
    private readonly webhooksService: WebhooksService,
    private readonly websocketsService: WebsocketsService
  ) {}

  get instances() {
    return this.instancesService;
  }
  get webhooks() {
    return this.webhooksService;
  }
  get websockets() {
    return this.websocketsService;
  }
}
