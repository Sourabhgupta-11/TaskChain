import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

const DEMO_PRIVATE_KEY = process.env.REACT_APP_DEMO_PRIVATE_KEY;
const DEMO_RPC_URL = process.env.REACT_APP_SEPOLIA_RPC_URL;

const Connect = () => {
    const navigateTo = useNavigate();
    const [loading, setLoading] = useState(false);

    const connectWallet = async () => {
        try {
            if (window.ethereum) {
                setLoading(true);
                const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
                localStorage.setItem("walletAddress", account[0]);
                localStorage.setItem("walletMode", "metamask");
                navigateTo("/home");
            } else {
                alert("MetaMask not found. You can still explore the app using Demo Mode below.");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const useDemoAccount = async () => {
        try {
            setLoading(true);
            const provider = new ethers.JsonRpcProvider(DEMO_RPC_URL);
            const wallet = new ethers.Wallet(DEMO_PRIVATE_KEY, provider);

            localStorage.setItem("walletAddress", wallet.address);
            localStorage.setItem("walletMode", "demo");
            navigateTo("/home");
        } catch (error) {
            console.log(error);
            alert("Could not start demo session. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page">
            <div className="card">
                <h1>Welcome to BernApp</h1>
                <p>A decentralized to-do list app powered by Ethereum (Sepolia testnet).</p>

                <button onClick={connectWallet} disabled={loading}>
                    {loading ? "Connecting..." : "Connect MetaMask"}
                </button>

                <div style={{ margin: "16px 0", opacity: 0.7, fontSize: "14px" }}>
                    or
                </div>

                <button onClick={useDemoAccount} disabled={loading}>
                    {loading ? "Starting Demo..." : "Try Demo Account (No Wallet Needed)"}
                </button>

                <p style={{ fontSize: "13px", opacity: 0.7, marginTop: "12px" }}>
                    Recruiters/visitors: use the Demo Account to explore all features instantly —
                    no MetaMask installation required. Transactions run on Sepolia testnet
                    using a shared demo wallet.
                </p>
            </div>
        </div>
    );
}

export default Connect
