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
                alert("MetaMask not found. You can still explore the app using the Demo Account below.");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const useDemoAccount = async () => {
        if (!DEMO_PRIVATE_KEY || !DEMO_RPC_URL) {
            alert("Demo mode is not configured yet. Please use Connect MetaMask instead.");
            return;
        }
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
        <div className="landing">
            <div className="network-bg">
                <svg viewBox="0 0 1200 800" preserveAspectRatio="none">
                    <g className="net-lines">
                        <line x1="100" y1="120" x2="340" y2="260" />
                        <line x1="340" y1="260" x2="620" y2="140" />
                        <line x1="620" y1="140" x2="900" y2="220" />
                        <line x1="340" y1="260" x2="280" y2="500" />
                        <line x1="620" y1="140" x2="760" y2="420" />
                        <line x1="900" y1="220" x2="1080" y2="450" />
                        <line x1="280" y1="500" x2="540" y2="620" />
                        <line x1="760" y1="420" x2="540" y2="620" />
                        <line x1="760" y1="420" x2="1080" y2="450" />
                        <line x1="100" y1="120" x2="280" y2="500" />
                        <line x1="540" y1="620" x2="900" y2="700" />
                        <line x1="1080" y1="450" x2="900" y2="700" />
                    </g>
                    <g className="net-nodes">
                        <circle cx="100" cy="120" r="6" />
                        <circle cx="340" cy="260" r="8" />
                        <circle cx="620" cy="140" r="6" />
                        <circle cx="900" cy="220" r="7" />
                        <circle cx="280" cy="500" r="6" />
                        <circle cx="760" cy="420" r="8" />
                        <circle cx="1080" cy="450" r="6" />
                        <circle cx="540" cy="620" r="7" />
                        <circle cx="900" cy="700" r="6" />
                    </g>
                </svg>
            </div>

            <div className="landing-content" style={{ paddingTop: "90px" }}>
                <div className="card" style={{ maxWidth: "520px", margin: "0 auto" }}>
                    <span
                        className="badge-pill"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigateTo("/")}
                    >
                        ← Back to Home
                    </span>

                    <h1 style={{ marginTop: "16px" }}>Connect to TaskChain</h1>
                    <p>Choose how you'd like to access your decentralized to-do list.</p>

                    <button onClick={connectWallet} disabled={loading}>
                        {loading ? "Connecting..." : "🦊 Connect MetaMask"}
                    </button>

                    <div style={{ margin: "16px 0", opacity: 0.7, fontSize: "14px" }}>
                        or
                    </div>

                    <button
                        onClick={useDemoAccount}
                        disabled={loading}
                        style={{
                            background: "linear-gradient(135deg, #facc15, #f59e0b)",
                            color: "#1e293b",
                        }}
                    >
                        {loading ? "Starting Demo..." : "🚀 Try Demo Account (No Wallet Needed)"}
                    </button>

                    <p style={{ fontSize: "13px", opacity: 0.7, marginTop: "12px" }}>
                        Recruiters/visitors: use the Demo Account to explore all features instantly —
                        no MetaMask installation required. Transactions run on the Sepolia testnet
                        using a shared demo wallet.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Connect;