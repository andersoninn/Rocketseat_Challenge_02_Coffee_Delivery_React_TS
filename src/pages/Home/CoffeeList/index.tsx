import { CoffeeTypes } from '../../../@types/types';
import { ShoppingCartContext } from '../../../assets/context/CartContextProvider';

import { CoffeeCard } from './CoffeeCard';
import { CoffeeListContent, TitleCoffeList } from './styles';
import { useContext } from 'react';

export function CoffeeList() {
   const { dataCoffee } = useContext(ShoppingCartContext);

   return (
      <>
         <TitleCoffeList>Nossos cafés</TitleCoffeList>
         <CoffeeListContent>
            {dataCoffee?.map((item: CoffeeTypes) => (
               <CoffeeCard coffee={item} key={item.id} />
            ))}
         </CoffeeListContent>
      </>
   );
}
