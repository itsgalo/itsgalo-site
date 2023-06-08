//fetch Eth tokens
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useEthContext } from '../context/Wallets'
import TokenCard from './TokenCard'
import styles from '../styles/ProductCard.module.css';

function EthTokens() {
    const [tokenData, setTokenData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    let address = useEthContext()[0];
    address = address.toLowerCase();
    const ethConnected = useEthContext()[2];

    useEffect(() => {
        setLoading(true);
        (async () => {
            await fetch('https://api.thegraph.com/subgraphs/name/artblocks/art-blocks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `
                    query {
                        tokens(where: {owner: "${address}"}) {
                            project {
                                artist {
                                id
                                }
                                name
                            }
                            tokenId
                            invocation
                        }
                    }
                    `
                })
            })
            .then((res) => res.json())
            .then((data) => {
                setTokenData(data);
                setLoading(false);
            })
        })()
    }, [ethConnected])

    if (isLoading) return (
        <div className={styles.empty}>
            <p>loading....</p>
        </div>
    )
    if (!tokenData) return (
        <div className={styles.empty}>
            <p>no token data</p>
        </div>
    )

    return (
        <div className={styles.list}>
            {tokenData !== null ? tokenData.data.tokens.map(function(d, idx){
                const src = 'https://artblocks-mainnet.s3.amazonaws.com/' + d.tokenId + '.png';
                if (d.project.artist.id === '0xedc8a7204873071cca464ed3ac68dec4c69afea4') {
                    const item = {
                        id: "abprint",
                        name: d.project.name + " #" + d.invocation,
                        price: [60.00],
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
                    //     alt={d.project.name + ' ' + d.invocation}
                    //     title={d.project.name + ' ' + d.invocation}
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
    // return (
    //     <h1>You have {tokenData !== null ? tokenData.data.tokens.length : ''} Art Blocks tokens</h1>
    // )
}

export default EthTokens