import {
  assetLists as allAssetLists,
  chains as allChains,
} from "@chain-registry/v2";
import { AssetList, Chain } from "@chain-registry/v2-types";

const chainIds = ["titan_18889-1", "titan_18888-1"];

const supportedChains: Chain[] = chainIds.map(
  (chainId) => allChains.find((chain) => chain.chainId === chainId)!
);

const supportedAssetLists: AssetList[] = supportedChains.map(
  (chain) =>
    allAssetLists.find((assetList) => assetList.chainName === chain.chainName)!
);

export { supportedAssetLists, supportedChains };
