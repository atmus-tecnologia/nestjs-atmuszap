export class WhatsAppNumberDto {
  numbers: string[];
}

class ReadMessage {
  remoteJid: string;
  fromMe: boolean;
  id: string;
}
export class MarkMessageAsReadDto {
  read_messages: ReadMessage[];
}
