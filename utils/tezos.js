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