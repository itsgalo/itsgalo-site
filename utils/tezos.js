import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";

export const wallet = new BeaconWallet({
    name: "itsgalo print shop"
});

export const connectTezWallet = async () => {
    await wallet.requestPermissions({ network: { type: 'ghostnet' } });
}

export const disconnectTezWallet = async () => {
    await wallet.clearActiveAccount();
}

export const getTezAccount = async () => {
    const activeAccount = await wallet.client.getActiveAccount();
    if (activeAccount) {
        return activeAccount.address;
    } else {
        return '';
    }
}

// import { TezosToolkit } from "@taquito/taquito";
// import { BeaconWallet } from "@taquito/beacon-wallet";

// const preferredNetwork = "hangzhounet";
// const options = {
//   name: "itsgalo print shop",
//   iconUrl: "https://tezostaquito.io/img/favicon.png",
//   preferredNetwork: preferredNetwork,
// };
// const rpcURL = "https://hangzhounet.smartpy.io";
// const wallet = new BeaconWallet(options);

// const getTezAccount = async () => {
//   return await wallet.client.getActiveAccount();
// };

// const connectTezWallet = async () => {
//   let account = await wallet.client.getActiveAccount();

//   if (!account) {
//     await wallet.requestPermissions({
//       network: { type: 'ghostnet' },
//     });
//     account = await wallet.client.getActiveAccount();
//   }
//   return { success: true, wallet: account.address };
// };

// const disconnectTezWallet = async () => {
//   await wallet.disconnect();
//   return { success: true, wallet: null };
// };

// const checkIfWalletConnected = async (wallet) => {
//   try {
//     const activeAccount = await wallet.client.getActiveAccount();
//     if (!activeAccount) {
//       await wallet.client.requestPermissions({
//         type: { network: preferredNetwork },
//       });
//     }
//     return {
//       success: true,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       error,
//     };
//   }
// };

// export const changeName = async (name) => {
//   // const wallet = new BeaconWallet(options);
//   const response = await checkIfWalletConnected(wallet);

//   if (response.success) {
//     const tezos = new TezosToolkit(rpcURL);
//     tezos.setWalletProvider(wallet);
//     const contract = await tezos.wallet.at(config.contractAddress);
//     const operation = await contract.methods.default(name).send();
//     const result = await operation.confirmation();
//     console.log(result);
//   }
// };

// export {
//   connectTezWallet,
//   disconnectTezWallet,
//   getTezAccount,
//   checkIfWalletConnected,
// };