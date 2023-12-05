import { Outlet } from 'react-router-dom';
import { Header } from '../../assets/components/Header';
import { LayoutContainer } from './styles';
import { CartContextProvider } from '../../assets/context/CartContextProvider';

export function DefaultLayout() {
   return (
      <CartContextProvider>
         <LayoutContainer>
            <Header />
            <Outlet />
         </LayoutContainer>
      </CartContextProvider>
   );
}
