//nav buttons
import { useState, useEffect } from 'react'
import { useEthContext } from '../context/Wallets'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { getEthAccount } from '../utils/eth';
import styles from '../styles/Navbar.module.css';

function EthButtons() {
    const { address, connector, isConnected } = useAccount();
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
    const { disconnect } = useDisconnect();

    const [ethAccount, setEthAccount, ethConnected, setEthConnected] = useEthContext();
    //const [test, setTest] = useTestContext();

    const eConnect = useAccount({
        onConnect({ address, connector, isReconnected }) {
            console.log('connected to'+address.toLowerCase());
            setEthAccount(address.toLowerCase());
            setEthConnected(true);
        },
      })

    const eDisconnect = useAccount({
        onDisconnect() {
            console.log('disconnected')
            setEthAccount('');
            setEthConnected(false);
        },
    })

    useEffect(() => {
        setEthConnected(isConnected)
      }, []);

    if (isConnected) {
        return (
        <div className={styles.connectButtons}>
            <button onClick={() => disconnect()}>disconnect eth</button>
            {/* <div>Connected to {connector.name}</div>
            <div>{address}</div> */}
        </div>
        )
    }

    return (
        <div className={styles.connectButtons}>
        {connectors.map((connector) => (
            <button key={connector.id} onClick={() => connect({ connector })}>
                connect eth
            </button>
        ))}
    
        {error && <div className={styles.error}>{error.message}</div>}
        </div>

        // <div>
        //     <button onClick={handleEthConnection}>
        //         click me
        //     </button>
        // </div>
    )
}

export default EthButtons