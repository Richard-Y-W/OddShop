import { useState } from 'react';
import { s } from './style.js';
import IOSDevice from './components/IOSDevice.jsx';
import SplashScreen from './components/SplashScreen.jsx';
import MonoMarket from './screens/MonoMarket.jsx';
import ProductDetail from './screens/ProductDetail.jsx';
import { APP_SCREENS, getInitialScreen, openProductDetail, returnToMarket } from './appFlow.js';

export default function App() {
  const [flow, setFlow] = useState(() => ({
    screen: getInitialScreen(),
    selectedListing: null,
  }));

  const isProductDetail = flow.screen === APP_SCREENS.productDetail;

  return (
    <div style={s("min-height:100vh;padding:28px 24px 46px;box-sizing:border-box;display:flex;align-items:flex-start;justify-content:center")}>
      <SplashScreen />
      <IOSDevice>
        {isProductDetail ? (
          <ProductDetail listing={flow.selectedListing} onBack={() => setFlow(returnToMarket())} />
        ) : (
          <MonoMarket onOpenProduct={(listing, trigger) => setFlow(openProductDetail(listing, trigger))} />
        )}
      </IOSDevice>
    </div>
  );
}
