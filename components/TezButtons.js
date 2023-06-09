//nav buttons
import { useState, useEffect } from 'react'
import { TezosToolkit } from "@taquito/taquito";
import { useTezContext } from '../context/Wallets'
//import { connectTezWallet, getTezAccount, disconnectTezWallet } from '../utils/tezos'
import styles from '../styles/Navbar.module.css';

export default function TezButtons() {
    const [tezAccount, setTezAccount, tezConnected, setTezConnected] = useTezContext();

    const [wallet, setWallet] = useState(null);

    //const [Tezos, setTezos] = useState(new TezosToolkit("https://mainnet-tezos.giganode.io"))

    const connectTezWallet = async () => {
        if (wallet != null) {
            await wallet.requestPermissions({ network: { type: 'ghostnet' } });
        }
    }
    
    const disconnectTezWallet = async () => {
        if (wallet != null) {
            await wallet.clearActiveAccount();
        }
    }
    
    const getTezAccount = async () => {
        console.log(tezConnected)
        if (wallet != null) {
            const activeAccount = await wallet.client.getActiveAccount();
            if (activeAccount) {
                return activeAccount.address;
            } else {
                return '';
            }
        }
    }

    useEffect(() => {
      (async () => {
        if (wallet === null) {
          const _wallet = new (await import("@taquito/beacon-wallet")).BeaconWallet({ name: "itsgalo-print-shop" });
          setWallet(_wallet)
          //Tezos.setWalletProvider(_wallet);
        }
      })();
    }, []);

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
            //setTezConnected(activeTezAccount != "" ? true : false);
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

//export default TezButtons

// const wallet = new BeaconWallet({
//     name: "itsgalo print shop"
// });

