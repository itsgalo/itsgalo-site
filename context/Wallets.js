//wallet contexts
import { createContext, useContext, useState, useEffect } from 'react'

const EthContext = createContext();
const TezContext = createContext();
const TestContext = createContext();

export function useEthContext() {
    return useContext(EthContext);
}

export function useTezContext() {
    return useContext(TezContext);
}

export function WalletProvider({children}) {
    const [ethAccount, setEthAccount] = useState('');
    const [tezAccount, setTezAccount] = useState('');
    const [ethConnected, setEthConnected] = useState(false);
    const [tezConnected, setTezConnected] = useState(false);

    return (
        <EthContext.Provider value={[ethAccount, setEthAccount, ethConnected, setEthConnected]}>
            <TezContext.Provider value={[tezAccount, setTezAccount, tezConnected, setTezConnected]}>
                {children}
            </TezContext.Provider>
        </EthContext.Provider>
    )
}