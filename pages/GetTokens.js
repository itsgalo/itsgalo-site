import { useState, useEffect } from 'react';
import { connectWallet, getAccount } from './tezoswallet';

const GetTokens = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [account, setAccount] = useState('');
  

  useEffect(() => {

    (async () => {
        const activeAccount = await getAccount();
        setAccount(activeAccount);
        console.log(account);
    })();

    setLoading(true)
    fetch('https://api.fxhash.xyz/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          query {
            user (id: "${account}") {
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
        setData(data)
        setLoading(false)
        console.log(data.data.user);
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data.data.user.entireCollection[0].issuer.author.name}</h1>
      <p></p>
    </div>
  )
}

export default GetTokens;
