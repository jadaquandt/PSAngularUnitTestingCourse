import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { MessageService } from "./message.service"

describe('MessageService', () => {
    let service: MessageService;


    it('should have no messages to start', () => {
        service = new MessageService();

        expect(service.messages.length).toBe(0);
    })

    it('should have add a message when add is called', () => {
        service = new MessageService();

        service.add('message1');

        expect(service.messages.length).toBe(1);
    })

    it('should have remove all messages when clear is called', () => {
        service = new MessageService();
        service.add('message1');

        service.clear();

        expect(service.messages.length).toBe(0);
    })
})