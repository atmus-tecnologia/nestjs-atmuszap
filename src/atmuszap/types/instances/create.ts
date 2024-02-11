export interface InstanceCreated {
  instance: Instance;
  hash: Hash;
  webhook: Webhook;
  websocket: Websocket;
  settings: Settings;
  qrcode: QrCode;
}

export interface Hash {
  jwt: string;
}

export interface Instance {
  instanceName: string;
  instanceId: string;
  status: string;
}

export interface QrCode {
  pairingCode: null;
  code: string;
  base64: string;
  count: number;
}

export interface Settings {
  reject_call: boolean;
  msg_call: string;
  groups_ignore: boolean;
  always_online: boolean;
  read_messages: boolean;
  read_status: boolean;
}

export interface Webhook {
  enabled?: boolean;
  url?: string;
  webhook: string;
  webhook_base64?: string;
  webhook_by_events: boolean;
  events: string[];
}

export interface Websocket {
  enabled: boolean;
  events: string[];
}
