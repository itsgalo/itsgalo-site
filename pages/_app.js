import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { publicProvider } from 'wagmi/providers/public';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Provider, createStore } from 'react-redux';
import Layout from '../components/Layout';
import '../styles/globals.css';

import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '../redux/cart.slice';

const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,
});

const paypalOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture"
};

export default function MyApp({ Component, pageProps, router }) {

    //setup wallet connect for eth
    const { chains, provider, webSocketProvider } = configureChains(
        [mainnet],
        [publicProvider()],
      )
       
      const client = createClient({
        connectors: [
            new MetaMaskConnector({ chains })
        ],
        provider,
        webSocketProvider,
        autoConnect: true,
      })
       

    return (
        <PayPalScriptProvider options={paypalOptions}>
            <Provider store={store}>
            <WagmiConfig client={client}>
                <Layout>
                    <Component {...pageProps} key={router.asPath} />
                </Layout>
            </WagmiConfig>
            </Provider>
        </PayPalScriptProvider>
      
    )
}