//eth address component
import { useEthContext } from '../context/Wallets'

function Eth() {

    const address = useEthContext()[0];
    const ethConnected = useEthContext()[2];
    
    if (!ethConnected) {
        return (
            <h1>no eth wallet connected</h1>
        )
    }

    return (
        <h1>art blocks tokens owned by: {address}</h1>
    )
}

export default Eth