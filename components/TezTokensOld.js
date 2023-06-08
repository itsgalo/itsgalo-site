//fetch Eth tokens
import { useEffect, useState } from 'react'
import { useTezContext } from '../context/Wallets'

function TezTokens() {
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
                    query: `
                    query {
                        user (id: "${tezAccount}") {
                        entireCollection {
                            issuer {
                            name
                            author {
                                name
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

    if (isLoading) return <h1>Loading...</h1>
    if (!tokenData) return <h1>You have 0 fx(hash) tokens</h1>

    return (
        <h1>You have {tokenData !== null ? tokenData.length : ''} fx(hash) tokens</h1>
    )
}

export default TezTokens