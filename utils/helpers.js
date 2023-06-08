async function callFxHash(query) {
  const fetchUrl = `https://api.fxhash.xyz/graphql`;

  const fetchOptions = {
    endpoint: fetchUrl,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json(),
    );
    return data;
  } catch (error) {
    throw new Error("Could not fetch data!");
  }
}

export async function getFxHashTokens(address) {
  const query =
    `
    query {
        user (id: ${address}) {
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
  ;

  const response = await callFxHash(query);

  const tokens = response.data ? response.data : [];

  return tokens;
}

//https://ipfs.io/ipfs/



