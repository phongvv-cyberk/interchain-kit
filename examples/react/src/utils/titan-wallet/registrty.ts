import { OS, Wallet } from "@interchain-kit/core";
import { ICON } from "./constant";

export const titanWalletInfo: Wallet = {
  name: "titan-wallet",
  prettyName: "Titan Wallet",
  logo: ICON,
  mode: "wallet-connect",
  downloads: [
    {
      device: "mobile",
      os: "android",
      link: "https://play.google.com/store/apps/details?id=com.chainapsis.keplr&hl=en&gl=US&pli=1",
    },
    {
      device: "mobile",
      os: "ios",
      link: "https://apps.apple.com/us/app/keplr-wallet/id1567851089",
    },
    {
      link: "https://www.keplr.app/download",
    },
  ],
  walletconnect: {
    name: "Titan Wallet",
    projectId: "3ef9e46f71262db45cc537afa04f816f",
    encoding: "base64",
    requiredNamespaces: {
      methods: ["signAmino", "signDirect"],
      events: ["accountsChanged"],
    },

    formatNativeUrl: (
      appUrl: string,
      wcUri: string,
      os: OS | undefined,
      _name: string
    ): string => {
      const plainAppUrl = appUrl.split(":")[0];
      const encodedWcUrl = encodeURIComponent(wcUri);
      switch (os) {
        case "ios":
          return `${plainAppUrl}://wcV2?${encodedWcUrl}`;
        case "android":
          return `intent://wcV2?${encodedWcUrl}#Intent;package=com.chainapsis.keplr;scheme=keplrwallet;end;`;
        default:
          return `${plainAppUrl}://wcV2?${encodedWcUrl}`;
      }
    },
  },
};
