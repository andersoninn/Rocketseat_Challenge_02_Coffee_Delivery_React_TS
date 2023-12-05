import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import {
   BorderPurchaseInformation,
   PurchaseAndImage,
   PurchaseInformation,
   PurchaseInformationDescription,
   SpanCurrencyDollar,
   SpanMapPin,
   SpanTime,
   SuccessArea,
} from './styles';
import { useContext } from 'react';

import SuccessMoto from '../../assets/images/Success-moto.png';

import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../assets/context/CartContextProvider';

export function Success() {
   const { completedOrderDetails } = useContext(ShoppingCartContext);

   const navigateToHome = useNavigate();
   function navigate() {
      navigateToHome('/');
   }

   if (completedOrderDetails === undefined) {
      return navigate();
   } else {
      return (
         <SuccessArea>
            <h1>Uhu! Pedido Confirmado</h1>
            <p>Agora é só aguardar o café chegar até você</p>

            <PurchaseAndImage>
               <BorderPurchaseInformation>
                  <PurchaseInformation>
                     <div>
                        <SpanMapPin>
                           <MapPin size={16} weight="fill" />
                        </SpanMapPin>
                        <PurchaseInformationDescription>
                           <p>
                              Entrega em
                              <strong>
                                 {' '}
                                 Rua {
                                    completedOrderDetails?.address.street
                                 }, {completedOrderDetails?.address.number},{' '}
                                 {completedOrderDetails?.address.apartment}
                              </strong>
                              <p>
                                 {completedOrderDetails?.address.neighborhood},{' '}
                                 {completedOrderDetails?.address.city},{' '}
                                 {completedOrderDetails?.address.state}
                              </p>
                           </p>
                        </PurchaseInformationDescription>
                     </div>
                     <div>
                        <SpanTime>
                           <Timer size={16} weight="fill" />
                        </SpanTime>
                        <PurchaseInformationDescription>
                           <p>Previsão de entrega</p>
                           <strong>
                              <p>20 min - 30 min</p>
                           </strong>
                        </PurchaseInformationDescription>
                     </div>
                     <div>
                        <SpanCurrencyDollar>
                           <CurrencyDollar size={16} weight="fill" />
                        </SpanCurrencyDollar>
                        <PurchaseInformationDescription>
                           <p>Papamento na entrega</p>
                           <strong>
                              <p>{completedOrderDetails?.paymentMethod}</p>
                           </strong>
                        </PurchaseInformationDescription>
                     </div>
                  </PurchaseInformation>
               </BorderPurchaseInformation>
               <img src={SuccessMoto} alt="" />
            </PurchaseAndImage>
         </SuccessArea>
      );
   }
}
