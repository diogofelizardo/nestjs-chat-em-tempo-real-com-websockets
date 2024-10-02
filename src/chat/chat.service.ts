import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class ChatService {
  private messages: CreateMessageDto[] = [];

  createMessage(message: CreateMessageDto) {
    this.messages.push(message);
  }

  getAllMessages(): CreateMessageDto[] {
    return this.messages;
  }
}