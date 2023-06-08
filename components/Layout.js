//layout component
import { WalletProvider } from '../context/Wallets'
import Animator from './Animator';
import Nav from './Nav'

function Layout({ children }) {

  return (
    <WalletProvider>
      <Nav />
        <Animator>{children}</Animator>
    </WalletProvider>
  )
}

export default Layout