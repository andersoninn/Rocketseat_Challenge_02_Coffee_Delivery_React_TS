import { ShoppingCart } from 'phosphor-react';

import { useContext, useState } from 'react';

import { TCoffeeCart, TCoffeeProps } from '../../../../@types/types';

import {
   ButtonCart,
   CardDescription,
   CardStyle,
   Shopping,
   ShoppingButton,
   TypeOfCoffee,
} from './styles';
import { ShoppingCartContext } from '../../../../assets/context/CartContextProvider';

export function CoffeeCard({
   coffee: { name, description, img, type, value },
}: TCoffeeProps) {
   // CARRINHO DE COMPRAS
   const { listOfShoppingCart, setListOfShoppingCart } =
      useContext(ShoppingCartContext);

   // MONITORING THE QUANTITY OF COFFEE SELECTED ----------------------------------
   const [quantityOfCoffeeSelected, setQuantityOfCoffeeSelected] =
      useState<number>(0);

   const disableButtom = quantityOfCoffeeSelected > 0;

   function verification() {
      // 1ª - Verificar se está vazio.
      // Se estiver vazio, executa o IF e insere o OBJETO.
      // Se existir executa o ELSE.
      if (listOfShoppingCart?.length === 0) {
         setListOfShoppingCart([
            { coffee: { name, img, value }, quantityOfCoffeeSelected },
         ]);
      } else {
         // Fazemos um reducer, percorrendo todo o objeto.
         // Se o .name do OBJETO inserido, for igual ao .name do OBJETO que já existe.
         // O "contador" daquele OBJETO recebe "contador = 1", se não ele se matem em "0" (valor inicial).
         const testeReduce = listOfShoppingCart?.reduce(
            (count, e: TCoffeeCart) =>
               e.coffee.name === name ? (count = 1) : count,
            0
         );
         // Conferimos se o "contador" do reduce é === 1.
         // Se sim executamos o IF, onde filtramos o item com o "contador = 1" e altaramos uma propriedade dele.
         // "e.quantityOfCoffeeSelected" recebe a "quantityOfCoffeeSelected" anterior + a nova "quantityOfCoffeeSelected" .
         if (testeReduce === 1) {
            const teste = listOfShoppingCart.filter((e: TCoffeeCart) =>
               e.coffee.name === name
                  ? (e.quantityOfCoffeeSelected += quantityOfCoffeeSelected)
                  : e
            );
            // Aqui usamos o "set" para executar a função a cima que muda a quantidade.
            setListOfShoppingCart(teste);
         } else {
            // Se o "contador" for igual a "0",  adicionamos o OBJETO inteiro na lista.
            setListOfShoppingCart([
               ...listOfShoppingCart,
               { coffee: { name, img, value }, quantityOfCoffeeSelected },
            ]);
         }
      }
      setQuantityOfCoffeeSelected(0);
   }

   return (
      <>
         <CardStyle>
            <img src={`src/assets/images/CoffeeVariation/${img}`} alt="" />
            <CardDescription>
               <TypeOfCoffee>
                  {type.map((e, i) => (
                     <h3 key={i}>{e}</h3>
                  ))}
               </TypeOfCoffee>
               <h2>{name}</h2>
               <p>{description}</p>
            </CardDescription>
            <Shopping>
               <div>
                  <span>R$</span>
                  <span>{value.toFixed(2)}</span>
               </div>
               <ShoppingButton>
                  <div>
                     <button
                        onClick={() =>
                           setQuantityOfCoffeeSelected(
                              quantityOfCoffeeSelected - 1
                           )
                        }
                        disabled={!disableButtom}
                     >
                        -
                     </button>
                     <span>{quantityOfCoffeeSelected}</span>
                     <button
                        onClick={() =>
                           setQuantityOfCoffeeSelected(
                              quantityOfCoffeeSelected + 1
                           )
                        }
                     >
                        +
                     </button>
                  </div>
                  <ButtonCart
                     onClick={() => verification()}
                     disabled={!disableButtom}
                  >
                     <span>
                        <ShoppingCart size={19} weight="fill" />
                     </span>
                  </ButtonCart>
               </ShoppingButton>
            </Shopping>
         </CardStyle>
      </>
   );
}
