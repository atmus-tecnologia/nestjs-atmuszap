import { Webhook } from '../instances/create';

export type WebhookSet = {
  webhook: {
    instanceName: string;
    webhook: Webhook;
  };
};
