import { createContext, useCallback, useEffect, useState } from 'react';
import {
   CoffeeTypes,
   TCoffeeCart,
   TCompletedOrderDetails,
   TShoppingCartContext,
} from '../../@types/types';
import db from '../db/db';

export const ShoppingCartContext = createContext({} as TShoppingCartContext);
export function CartContextProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   // REQUEST ---------------------------------------------------------------------
   const fetchCoffee = useCallback(async () => {
      // const resp = await fetch('/api');
      // const data = await resp.json();
      const data = db;

      setDataCoffee(data);
   }, []);
   useEffect(() => {
      fetchCoffee();
   }, [fetchCoffee]);

   const [dataCoffee, setDataCoffee] = useState<CoffeeTypes[]>([]);

   // PURCHASE CART ---------------------------------------------------------------
   const [listOfShoppingCart, setListOfShoppingCart] = useState<TCoffeeCart[]>(
      []
   );

   function addItem(name: string) {
      const addItem = listOfShoppingCart.filter((item) =>
         item.coffee.name === name ? (item.quantityOfCoffeeSelected += 1) : item
      );
      setListOfShoppingCart(addItem);
      // console.log(id);
   }

   function subtractItem(name: string) {
      const subtractItem = listOfShoppingCart.filter((item) =>
         item.coffee.name === name ? (item.quantityOfCoffeeSelected -= 1) : item
      );
      setListOfShoppingCart(subtractItem);
      // console.log(id);
   }

   function remove(name: string) {
      const remove = listOfShoppingCart.filter(
         (item) => item.coffee.name !== name && item
      );
      setListOfShoppingCart(remove);
   }

   // SUM OF THE NUMBER OF ITEMS IN THE CART --------------------------------------
   function SumOfnumberOfItemsInTheCart() {
      const initialValue = 0;

      return listOfShoppingCart?.reduce(
         (cartCount, e: TCoffeeCart) => cartCount + e.quantityOfCoffeeSelected,
         initialValue
      );
   }

   // useEffect(
   //    () => console.log(listOfShoppingCart),
   //    /*setQuantidadeNoCarrinho(sumOfPurchaseCartOfHeader)*/
   //    [listOfShoppingCart]
   // );

   // COMPLETED ORDER DETAILS -----------------------------------------------------
   const [completedOrderDetails, setCompletedOrderDetails] =
      useState<TCompletedOrderDetails>();
   useEffect(
      () => console.log(completedOrderDetails),

      [completedOrderDetails]
   );

   return (
      <ShoppingCartContext.Provider
         value={{
            listOfShoppingCart,
            setListOfShoppingCart,
            SumOfnumberOfItemsInTheCart,
            dataCoffee,
            addItem,
            subtractItem,
            remove,
            completedOrderDetails,
            setCompletedOrderDetails,
         }}
      >
         {children}
      </ShoppingCartContext.Provider>
   );
}
