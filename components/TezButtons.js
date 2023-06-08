//nav buttons
import { useState, useEffect } from 'react'
import { useTezContext } from '../context/Wallets'
import { connectTezWallet, getTezAccount, disconnectTezWallet } from '../utils/tezos'
import styles from '../styles/Navbar.module.css';

function TezButtons() {
    const [tezAccount, setTezAccount, tezConnected, setTezConnected] = useTezContext();

    const tConnect = async () => {
        await connectTezWallet();
        const activeTezAccount = await getTezAccount()
        setTezAccount(activeTezAccount);
        setTezConnected(true);
    };

    const tDisconnect = async () => {
        await disconnectTezWallet();
        setTezAccount('');
        setTezConnected(false);
    }

    useEffect(() => {
        (async () => {
            const activeTezAccount = await getTezAccount()
            setTezAccount(activeTezAccount)
            setTezConnected(activeTezAccount != "" ? true : false);
        })()
    }, [])

    if (tezConnected) {
        return (
            <div className={styles.connectButtons}>
                <button onClick={tDisconnect}>
                    disconnect tezos
                </button>
            </div>
        )
    }

    return (
        <div className={styles.connectButtons}>
            <button onClick={tConnect}>
                connect tezos
                {/* {tezAccount !== '' ? tezAccount : 'connect tezos'} */}
            </button>
        </div>        
    )
}

export default TezButtons