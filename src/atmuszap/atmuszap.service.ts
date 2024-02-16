import { Injectable } from '@nestjs/common';
import { ChatsService, InstancesService, WebhooksService, WebsocketsService } from './services';

@Injectable()
export class AtmusZapService {
  constructor(
    private readonly instancesService: InstancesService,
    private readonly chatsService: ChatsService,
    private readonly webhooksService: WebhooksService,
    private readonly websocketsService: WebsocketsService
  ) {}

  get instances() {
    return this.instancesService;
  }
  get chats() {
    return this.chatsService;
  }
  get webhooks() {
    return this.webhooksService;
  }
  get websockets() {
    return this.websocketsService;
  }
}
