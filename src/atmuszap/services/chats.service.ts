import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AtmusZapResponseError } from "../types";
import { MarkMessageAsReadDto, WhatsAppNumberDto } from "../dto/chat.dto";
import { ChatWhatsAppNumber } from "../types/chat/whatsAppNumber";
import { ChatMarkMessageAsRead } from "../types/chat/markMessageAsRead";

@Injectable()
export class ChatsService {
  constructor(private readonly httpService: HttpService) {}

  whatsAppNumbers(data: WhatsAppNumberDto, instanceName: string, instanceKey: string) {
    return new Promise<ChatWhatsAppNumber[]>((resolve, reject) => {
      this.httpService
        .post<ChatWhatsAppNumber[]>(`/chat/whatsappNumbers/${instanceName}`, data, {
          headers: { Authorization: `Bearer ${instanceKey}` },
        })
        .subscribe({
          next: ({ data }) => resolve(data),
          error: ({ response: { data } }: AtmusZapResponseError) => reject(data),
        });
    });
  }

  markMessageAsRead(data: MarkMessageAsReadDto, instanceName: string, instanceKey: string) {
    return new Promise<ChatMarkMessageAsRead>((resolve, reject) => {
      this.httpService
        .post<ChatMarkMessageAsRead>(`/chat/markMessageAsRead/${instanceName}`, data, {
          headers: { Authorization: `Bearer ${instanceKey}` },
        })
        .subscribe({
          next: ({ data }) => resolve(data),
          error: ({ response: { data } }: AtmusZapResponseError) => reject(data),
        });
    });
  }
}
