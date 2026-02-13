import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { version: "0.8.28" },
      { version: "0.8.20" },
      { version: "0.8.0" }
    ]
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [process.env.PRIVATE_KEY?.trim() || ""]
    }
  }
};

export default config;
