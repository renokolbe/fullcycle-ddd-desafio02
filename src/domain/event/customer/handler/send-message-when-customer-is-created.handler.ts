import EventHandlerInterface from "../../@shared/event.handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class SendMessageWhenCustomerIsCreated implements EventHandlerInterface<CustomerCreatedEvent>{

    enviaConsoleLog1Handler(): void{
        console.log("Esse é o primeiro console.log do evento: CustomerCreated")
    }

    enviaConsoleLog2Handler(): void{
        console.log("Esse é o segundo console.log do evento: CustomerCreated")
    }

    handle(event: CustomerCreatedEvent): void {
        this.enviaConsoleLog1Handler();
        this.enviaConsoleLog2Handler();
    }
}