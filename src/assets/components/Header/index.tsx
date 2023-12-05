import { HeaderContainer, HeaderFixed, OrderNumbers } from './styles';

import logoCoffeeDelivery from '../../images/logo-coffeeD.png';
import { ShoppingCart, MapPin } from 'phosphor-react';
import { useEffect, useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../context/CartContextProvider';

interface PosProps {
   coords: {
      latitude: number;
      longitude: number;
   };
}

export function Header() {
   const navigateToCheckout = useNavigate();
   const navigateToHome = useNavigate();
   const { SumOfnumberOfItemsInTheCart } = useContext(ShoppingCartContext);

   //LOCATION FUNCTION
   function GetLocation() {
      navigator.geolocation.getCurrentPosition(showLoc, errHand);

      async function showLoc({ coords }: PosProps) {
         const latitude = coords.latitude;
         const longitude = coords.longitude;
         const key = 'a151ef7daea3934ff5651ba1cff50c99';

         const resp = await fetch(
            `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&&limit=10&appid=${key}`
         );
         const data = await resp.json();

         const locale = data[0].name + ', ' + data[0].country;
         setLocale(locale);
      }
      function errHand(err: GeolocationPositionError) {
         switch (err.code) {
            case err.PERMISSION_DENIED:
               console.log(
                  'A aplicação não possui permissão para acessar o serviço de localização.'
               );
               break;
            case err.POSITION_UNAVAILABLE:
               console.log('A localização do dispositivo é incerta.');
               break;

            case err.TIMEOUT:
               console.log(
                  ' O tempo para buscar informações de localização excedeu o intervalo de tempo limite máximo.'
               );
               break;

            default:
               console.log('Erro desconhecido.');
               break;
         }
      }
   }
   const [locale, setLocale] = useState('');

   //EFFECT OF LOCATION
   useEffect(() => {
      GetLocation();
      // console.log(SumOfnumberOfItemsInTheCart());
   }, []);

   return (
      <HeaderFixed>
         <HeaderContainer>
            <img src={logoCoffeeDelivery} onClick={() => navigateToHome('/')} />
            <nav>
               <div>
                  <span>
                     <MapPin size={18} weight="fill" />
                  </span>

                  <span>{locale}</span>
               </div>
               <a onClick={() => navigateToCheckout('/checkout')}>
                  <ShoppingCart size={18} weight="fill" />
               </a>
               <OrderNumbers>{SumOfnumberOfItemsInTheCart()}</OrderNumbers>
            </nav>
         </HeaderContainer>
      </HeaderFixed>
   );
}
