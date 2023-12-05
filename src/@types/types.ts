import { Dispatch, SetStateAction } from "react";

export type CoffeeTypes = {
    id: number;
    img: string;
    type: string[];
    name: string;
    description: string;
    value: number;
 };

export interface CoffeeProps {
    listOfShoppingCart: TCoffeeCart[];
    setListOfShoppingCart: React.Dispatch<React.SetStateAction<TCoffeeCart[]>>;
}
export type TCoffeeProps = {
    coffee: CoffeeTypes

}

export type TCoffeeCart = {
    coffee: Partial<CoffeeTypes>;
    quantityOfCoffeeSelected: number;
 }

export interface DataProps {
    zipCode: number;
    street: string;
    number: string;
    apartment: string;
    neighborhood: string;
    city: string;
    state: string;
}

export type TCompletedOrderDetails = {
    address: DataProps;
    paymentMethod: string;
    totalValue: number;
}

export interface TShoppingCartContext {
    listOfShoppingCart: TCoffeeCart[];
    setListOfShoppingCart: Dispatch<SetStateAction<TCoffeeCart[]>>;
 
    SumOfnumberOfItemsInTheCart: () => number;
    dataCoffee: CoffeeTypes[];
 
    addItem: (name: string) => void;
    subtractItem: (name: string) => void;
    remove: (name: string) => void;
 
    completedOrderDetails: TCompletedOrderDetails | undefined;
    setCompletedOrderDetails: Dispatch<
       SetStateAction<TCompletedOrderDetails | undefined>
    >;
 }


