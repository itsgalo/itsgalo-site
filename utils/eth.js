import { useAccount } from 'wagmi';

function getActiveAccount() {
  const { address, isConnected } = useAccount();
  return ({ address, isConnected });
}

export const getEthAccount = async () => {
  
  const activeAccount = getActiveAccount();
  if (activeAccount) {
      return activeAccount.address;
  } else {
      return '';
  }
}