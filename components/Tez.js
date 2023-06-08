//eth address component
import { useTezContext } from '../context/Wallets'

function Tez() {
    const address = useTezContext()[0];
    const tezConnected = useTezContext()[2];
    
    if (!tezConnected) {
        return (
            <h1>no tezos wallet connected</h1>
        )
    }

    return (
        <h1>fx(hash) tokens owned by: {address}</h1>
    )
}

export default Tez