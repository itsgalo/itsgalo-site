//layout component
import { WalletProvider } from '../context/Wallets'
import Animator from './Animator';
import Nav from './Nav'
import Head from 'next/head';
import Script from 'next/script';

function Layout({ children }) {

  return (
    <WalletProvider>
      <Nav />
        <Animator>{children}</Animator>
    </WalletProvider>
  )
}

export default Layout