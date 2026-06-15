# TaskChain — Decentralized To-Do App

> A full-stack Web3 application where your tasks live on the Ethereum blockchain.  
> No central database. No hidden edits. Just you, your wallet, and the chain.

🔗 **Live:** [todo-bern-app.vercel.app](https://todo-bern-app.vercel.app) &nbsp;

·&nbsp; No MetaMask needed — hit **Try Demo Account** to explore instantly.

---

## Overview

TaskChain is a production-deployed dApp that lets users manage tasks through a **Solidity smart contract** on the Ethereum Sepolia testnet. Every create, update, complete, or delete is a real signed transaction recorded on-chain — not stored in any database I control.

The project covers the full Web3 stack: smart contract development and deployment, wallet-based authentication, a React frontend wired to Ethers.js, and an Express backend for efficient read-only chain queries.

---

## Tech Stack

| Layer | Tech |
|---|---|
| Smart Contract | Solidity · Sepolia Testnet |
| Frontend | React · Ethers.js v6 · CSS3 |
| Backend | Node.js · Express · Ethers.js v6 |
| Infrastructure | Vercel · Render · Infura |

---

## Features

- **On-chain CRUD** — all task operations are smart contract transactions signed by the user's wallet
- **Dual wallet support** — MetaMask for real users; built-in demo wallet for instant access with no setup
- **Live stats dashboard** — total, completed, remaining and weekly tasks fetched live from the chain
- **Separation of concerns** — writes go frontend → contract directly; reads go through a lightweight Express API
- **Reactive UI** — animated dot-flow background that visually reacts to pending transaction state

---

## Architecture

```
Write:  React  →  Ethers.js (signer)  →  Smart Contract (Sepolia)

Read:   React  →  Express API  →  Ethers.js (provider)  →  Smart Contract
```

---

## Running Locally

```bash
# Backend
cd backend && npm install
# .env: SEPOLIA_RPC_URL, PRIVATE_KEY
node server.js

# Frontend
cd frontend && npm install
# .env: REACT_APP_CONTRACT_ADDRESS, REACT_APP_BACKEND_API,
#        REACT_APP_SEPOLIA_RPC_URL, REACT_APP_DEMO_PRIVATE_KEY
npm start
```

> Use a throwaway wallet for `REACT_APP_DEMO_PRIVATE_KEY` — generate one with `ethers.Wallet.createRandom()` and fund it from a Sepolia faucet.

---

## Smart Contract

Deployed at [`0xD7dee32c7abFAF3c52F5E71b4c7a5371E055e32f`](https://sepolia.etherscan.io/address/0xD7dee32c7abFAF3c52F5E71b4c7a5371E055e32f) on Sepolia.

Exposes: `createTask` · `updateTask` · `deleteTask` · `toggleCompleted` · `viewTask` · `allTasks`

---

*Built to demonstrate end-to-end Web3 development — from smart contract to deployed UI.*
