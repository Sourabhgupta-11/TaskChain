import { ethers } from "ethers";

// Sepolia RPC for demo mode (use a public/free RPC; no secrets here)
const DEMO_RPC_URL = process.env.REACT_APP_SEPOLIA_RPC_URL;

// Demo account private key — a throwaway funded-with-test-ETH account
// created specifically so recruiters/visitors can try the app without MetaMask.
const DEMO_PRIVATE_KEY = process.env.REACT_APP_DEMO_PRIVATE_KEY;

/**
 * Returns a signer for sending transactions.
 * - If user connected via MetaMask -> returns MetaMask signer
 * - If user is in demo mode -> returns a signer for the shared demo wallet
 */
export const getSigner = async () => {
  const mode = localStorage.getItem("walletMode"); // "metamask" | "demo"

  if (mode === "demo") {
    const provider = new ethers.JsonRpcProvider(DEMO_RPC_URL);
    return new ethers.Wallet(DEMO_PRIVATE_KEY, provider);
  }

  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    return await provider.getSigner();
  }

  throw new Error("No wallet available. Please connect MetaMask or use Demo Mode.");
};

/**
 * Returns the current connected address (MetaMask or demo wallet).
 */
export const getCurrentAddress = () => {
  return localStorage.getItem("walletAddress");
};

export const isDemoMode = () => {
  return localStorage.getItem("walletMode") === "demo";
};
