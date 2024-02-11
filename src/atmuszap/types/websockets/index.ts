import { Websocket } from '../instances/create';

export type WebsocketSet = {
  webhook: {
    instanceName: string;
    websocket: Websocket;
  };
};
