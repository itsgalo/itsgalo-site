//token grid
import Image from 'next/image';
import { useEffect, useState } from 'react'
import { useTezContext } from "../context/Wallets";
import TokenCard from './TokenCard';
import styles from '../styles/Page.module.css';

function TokenGrid() {
    const [tokenData, setTokenData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const tezAccount = useTezContext()[0];
    const tezConnected = useTezContext()[2];

    useEffect(() => {
        setLoading(true);
        (async () => {
            await fetch('https://api.fxhash.xyz/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query:
                        `
                        query {
                            user (id: "${tezAccount}") {
                            entireCollection {
                                name
                                displayUri
                                issuer {
                                author {
                                    id
                                }
                                }
                            }
                            }
                        }
                        `
                })
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.data.user !== null) {
                    setTokenData(data.data.user.entireCollection);
                } else {
                    setTokenData(null);
                }
                setLoading(false);
            })
        })()
    }, [tezConnected, tezAccount])

    if (isLoading) return (
        <div className={styles.tokenEmpty}>
            <p>loading...</p>
        </div>
    )
    if (!tokenData) return (
        <div className={styles.tokenEmpty}>
            <p></p>
        </div>
    )

    return (
        <div className={styles.tokenList}>
            {tokenData !== null ? tokenData.map(function(d, idx){
                const src = 'https://ipfs.io/ipfs/' + d.displayUri.replace('ipfs://', '');
                if (d.issuer.author.id === 'tz1h5ggjuAGW33VPksGmpBru2B3Cn868uxsh') {
                    const item = {
                        id: "tezosprint",
                        name: d.name,
                        price: [75.00],
                        imageUrl: src,
                        description: "A tea cup",
                        url: "https://b579-217-180-201-191.ngrok-free.app/api/products/cup",
                        option1: ["17x22"],
                        category: "signed edition"
                    }
                    return (
                        <TokenCard product={item} src={src} key={idx}/>
                    // <div key={idx} style={{width: '20vh', height: '20vh', position: 'relative'}}>
                    // <Image 
                    //     key={idx}
                    //     alt={d.name}
                    //     title={d.name}
                    //     loader={() => src} 
                    //     src={src} 
                    //     unoptimized
                    //     fill
                    //     style={{objectFit:"contain"}}
                    //     />
                    // </div>
                    )
                }
            }) : ''}
        </div>
    )
  }

  export default TokenGrid