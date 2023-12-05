import {
   DescriptionHome,
   FirstBoxDescription,
   HomeContainer,
   HomeTitle,
   SecondBoxDescription,
} from './styles';

import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react';

import MainImage from '../../assets/images/main-image.png';
import { CoffeeList } from './CoffeeList';

export function Home() {
   return (
      <>
         <HomeContainer>
            <div>
               <HomeTitle>
                  <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                  <p>
                     Com o Coffee Delivery você recebe seu café onde estiver, a
                     qualquer hora.
                  </p>
               </HomeTitle>

               <DescriptionHome>
                  <FirstBoxDescription>
                     <div>
                        <span>
                           <ShoppingCart size={16} weight="fill" />
                        </span>
                        <p>Compra Simples e segura</p>
                     </div>
                     <div>
                        <span>
                           <Timer />
                        </span>
                        <p>Entrega rápida e rastreada.</p>
                     </div>
                  </FirstBoxDescription>
                  <SecondBoxDescription>
                     <div>
                        <span>
                           <Package size={16} weight="fill" />
                        </span>
                        <p>Embalagem mantem o café intacto</p>
                     </div>
                     <div>
                        <span>
                           <Coffee size={16} weight="fill" />
                        </span>
                        <p>O café chega fresquinho até você</p>
                     </div>
                  </SecondBoxDescription>
               </DescriptionHome>
            </div>

            <img
               src={MainImage}
               alt="Copo de café cerdado de grãos de moidos "
            />
         </HomeContainer>
         <CoffeeList />
      </>
   );
}
