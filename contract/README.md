DEPLOY GUIDE

---PRE_DEPLOYMENT---

0. Install

execute "yarn install"

1. Test contract

execute "yarn test"

2. deploy contract

execute "yarn deploy:staging"
or
execute "yarn deploy:production"


3. verify contract

execute "npx hardhat verify --network eth_mainnet [address] [owner]"