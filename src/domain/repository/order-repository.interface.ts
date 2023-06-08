import Order from "../entity/order";
import RepositoryInterface from "./repository.interface";

export default interface OrderRepositoyInterface 
    extends RepositoryInterface<Order>{}
