import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@interchain-ui/react/styles";
import { BrowserRouter } from "react-router-dom";

import { ChainProvider } from "@interchain-kit/react";

import { ThemeProvider } from "@interchain-ui/react";
import { supportedAssetLists, supportedChains } from "./utils/cosmos.ts";
import { titanWallet } from "./utils/titan-wallet/titan-wallet.ts";

console.log(supportedChains);
console.log(supportedAssetLists);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ChainProvider
        chains={supportedChains}
        wallets={[titanWallet]}
        assetLists={supportedAssetLists}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChainProvider>
    </ThemeProvider>
  </React.StrictMode>
);
