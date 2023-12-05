import {
   Address,
   AddressText,
   ButtonList,
   ButtonRemove,
   ButtonsCheckoutCart,
   CardCoffeeInCart,
   CheckoutCart,
   CheckoutPage,
   ConfirmOrderButton,
   DeliveyAndPayment,
   FormAddress,
   OrderSummary,
   Payment,
   ShoppingButton,
   SumaryTotalValue,
   TextPayment,
} from './styles';
import {
   Bank,
   CreditCard,
   CurrencyDollar,
   MapPinLine,
   Money,
   Trash,
} from 'phosphor-react';

import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useState, useContext } from 'react';

import { DataProps } from '../../@types/types';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../assets/context/CartContextProvider';

const newPurchaseAddressSchema = zod.object({
   zipCode: zod.number().min(1, 'Informe o código postal').max(99999999),
   street: zod.string().min(1, 'Informa a o nome da sua rua'),
   number: zod.number().min(1, 'Informa o número ou referência da sua morada'),
   apartment: zod
      .string()
      .min(1, 'Informa a referência complementar da sua morada'),
   neighborhood: zod.string().min(1, 'Informa o seu bairro'),
   city: zod.string().min(1, 'Informe a sua cidade'),
   state: zod.string().min(1, 'Informa o seu estado(UF)'),
});

export function Checkout() {
   const {
      listOfShoppingCart,
      addItem,
      subtractItem,
      remove,
      SumOfnumberOfItemsInTheCart,
      setCompletedOrderDetails,
   } = useContext(ShoppingCartContext);

   const { control, register, handleSubmit } = useForm<DataProps>({
      resolver: zodResolver(newPurchaseAddressSchema),
   });

   const navigateToNextPage = useNavigate();
   function navigate() {
      if (listOfShoppingCart.length != 0) {
         navigateToNextPage('/success');
      } else {
         navigateToNextPage('/');
      }
   }

   function handleRegisterAdress({
      street,
      number,
      apartment,
      city,
      neighborhood,
      state,
      zipCode,
   }: DataProps) {
      setCompletedOrderDetails({
         address: {
            street,
            number,
            apartment,
            city,
            neighborhood,
            state,
            zipCode,
         },
         paymentMethod: paymentMethod,
         totalValue: parseFloat(totalValue),
      });
      navigate();
      console.log(parseFloat(totalValue));
   }

   const [paymentMethod, setPaymentMethod] = useState('Cash');
   // console.log(paymentMethod);

   const delivery = 3.5;
   const valueOfItens = (SumOfnumberOfItemsInTheCart() * 9.9).toFixed(2);
   const totalValue = (parseInt(valueOfItens) + delivery).toFixed(2);

   return (
      <CheckoutPage>
         <DeliveyAndPayment>
            <h1>Complete seu pedido</h1>
            <Address>
               <AddressText>
                  <div>
                     <span>
                        <MapPinLine size={22} />
                     </span>
                  </div>
                  <div>
                     <p>Endereço de Entrega</p>
                     <p>Informe o endereço onde deseja receber seu pedido</p>
                  </div>
               </AddressText>
               <FormAddress
                  id="address"
                  onSubmit={handleSubmit(handleRegisterAdress)}
               >
                  <label htmlFor="address">
                     <input
                        id="zipCode"
                        type="number"
                        placeholder="Código Postal"
                        {...register('zipCode', { valueAsNumber: true })}
                     />
                     <input
                        id="street"
                        type="text"
                        placeholder="Rua"
                        {...register('street')}
                     />
                     <input
                        id="number"
                        type="number"
                        placeholder="Número"
                        {...register('number', { valueAsNumber: true })}
                     />
                     <input
                        id="apartment"
                        type="text"
                        placeholder="Complemento"
                        {...register('apartment')}
                     />
                     <input
                        id="neighborhood"
                        type="text"
                        placeholder="Bairro"
                        {...register('neighborhood')}
                     />
                     <input
                        id="city"
                        type="text"
                        placeholder="Cidade"
                        {...register('city')}
                     />
                     <input
                        id="state"
                        type="text"
                        placeholder="UF"
                        {...register('state')}
                     />
                  </label>
                  <DevTool control={control} />
               </FormAddress>
            </Address>

            <Payment>
               <TextPayment>
                  <div>
                     <span>
                        <CurrencyDollar size={16} />
                     </span>
                  </div>
                  <div>
                     <p>Pagamento</p>
                     <p>
                        O pagamento é feito na entrega. Escolha a forma que
                        deseja pagar
                     </p>
                  </div>
               </TextPayment>

               <ButtonList>
                  <label htmlFor="payment">
                     <button
                        type="button"
                        onClick={() => setPaymentMethod('CreditCard')}
                        data-payment={`${
                           paymentMethod === 'CreditCard' && 'credit'
                        }`}
                     >
                        <input type="radio" name="CreditCard" id="" />
                        <span>
                           <CreditCard size={16} />
                        </span>
                        CARTÃO DE CRÉDITO
                     </button>
                     <button
                        type="button"
                        onClick={() => setPaymentMethod('DebitCard')}
                        data-payment={`${
                           paymentMethod === 'DebitCard' && 'debit'
                        }`}
                     >
                        <input type="radio" name="DebitCard" id="" />
                        <span>
                           <Bank size={16} />
                        </span>
                        CARTÃO DE DÉBITO
                     </button>
                     <button
                        type="button"
                        onClick={() => setPaymentMethod('Cash')}
                        data-payment={`${paymentMethod === 'Cash' && 'cash'}`}
                     >
                        <input type="radio" name="PaymentCash" id="" />
                        <span>
                           <Money size={16} />
                        </span>
                        DINHEIRO
                     </button>
                  </label>
               </ButtonList>
            </Payment>
         </DeliveyAndPayment>
         <OrderSummary>
            <h1>Cafés selecionados</h1>
            <CheckoutCart>
               {/* //--------------------------------------------------- */}

               {listOfShoppingCart.map((e, i) => (
                  <CardCoffeeInCart key={i}>
                     <div>
                        <img
                           src={`src/assets/images/CoffeeVariation/${e.coffee.img}`}
                           alt=""
                        />
                     </div>
                     <div>
                        <h3>{e.coffee.name}</h3>
                        <ButtonsCheckoutCart>
                           <ShoppingButton>
                              <div>
                                 <button
                                    onClick={() =>
                                       subtractItem(`${e.coffee.name}`)
                                    }
                                 >
                                    -
                                 </button>
                                 <span>{e.quantityOfCoffeeSelected}</span>
                                 <button
                                    onClick={() => addItem(`${e.coffee.name}`)}
                                 >
                                    +
                                 </button>
                              </div>
                           </ShoppingButton>
                           <ShoppingButton>
                              <ButtonRemove>
                                 <button
                                    onClick={() => remove(`${e.coffee.name}`)}
                                 >
                                    <span>
                                       <Trash size={16} />
                                    </span>
                                    <p>REMOVER</p>
                                 </button>
                              </ButtonRemove>
                           </ShoppingButton>
                        </ButtonsCheckoutCart>
                     </div>
                     <div>
                        <p>R$ 9,90</p>
                     </div>
                  </CardCoffeeInCart>
               ))}

               <SumaryTotalValue>
                  <div>
                     <p>Total de itens</p>
                     <span> R$ {valueOfItens}</span>
                  </div>
                  <div>
                     <p>Entrega</p>
                     <span>R$ {delivery.toFixed(2)}</span>
                  </div>
                  <div>
                     <h2>Total</h2>
                     <h2>R$ {totalValue}</h2>
                  </div>
               </SumaryTotalValue>
               <ConfirmOrderButton type="submit" form="address">
                  CONFIRMAR PEDIDO
               </ConfirmOrderButton>
            </CheckoutCart>
         </OrderSummary>
      </CheckoutPage>
   );
}
