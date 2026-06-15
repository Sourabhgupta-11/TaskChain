import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      {/* Animated blockchain network background */}
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

      <div className="landing-content">
        <span className="badge-pill">⛓ Built on Ethereum · Sepolia Testnet</span>

        <h1 className="landing-title">
          A To-Do List <span className="gradient-text">Owned by You</span>,
          Secured by the Blockchain
        </h1>

        <p className="landing-subtitle">
        TaskChain is a fully decentralized task manager — every action you take is a
        transaction recorded on the Ethereum blockchain.
        </p>

        <div className="highlight-row">
        <div className="highlight-item">
        <span className="highlight-icon">🚫</span>
        <span>No central database</span>
        </div>
        <div className="highlight-item">
        <span className="highlight-icon">🔍</span>
        <span>No hidden edits</span>
        </div>
        <div className="highlight-item">
        <span className="highlight-icon">🔑</span>
        <span>Your wallet is your identity</span>
        </div>
        </div>

        <div className="landing-actions">
          <button className="primary-btn" onClick={() => navigate("/connect")}>
            🚀 Launch App
          </button>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Wallet-Based Identity</h3>
            <p>
              No sign-up, no passwords. Your Ethereum wallet address is your
              account — connect with MetaMask or try our demo wallet.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📜</div>
            <h3>Smart Contract Powered</h3>
            <p>
              A Solidity smart contract deployed on Sepolia stores every task.
              Create, update, complete and delete actions are all on-chain
              transactions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Fully Transparent</h3>
            <p>
              Every change is verifiable on the blockchain. Nobody — not even
              the app's creator — can secretly alter your tasks.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Try It Instantly</h3>
            <p>
              No crypto experience needed. Use the built-in demo account to
              explore the full app on testnet — no installation required.
            </p>
          </div>
        </div>

        <div className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <p>Connect your wallet (MetaMask) or use the Demo Account</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <p>Create tasks — each one is written to the smart contract</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <p>Update, complete or delete tasks via signed transactions</p>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <p>View your dashboard — all data fetched live from the chain</p>
            </div>
          </div>
        </div>

        <footer className="landing-footer">
          <p>
            Running on the Ethereum Sepolia testnet for demonstration purposes.
            No real funds are used.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Landing;