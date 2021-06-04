# ChartEx Assets Info

## Overview
ChartEx token repository is a comprehensive, up-to-date collection of information about crypto tokens on alternative chains not supported by Trust Wallet. The repository structure and documentation is forked from the Trust Wallet repository.

Such a large collection can be maintained only through a community effort, so _feel free to add your token_.

## How to add token

Please note that __brand new tokens are not accepted__,
the projects have to be sound, with information available, and can and will be rejected if they appear fraudulent.

### Quick starter

Here is a quick starter summary for the most common use case.

**Adding a token checklist**:
- [ ] Make sure your smartcontract has more than 2,500 address holders, otherwise you will be rejected
- [ ] Fork the Github repository
- [ ] Create folder with name of token smartcontact address in [_checksum format_](https://developer.trustwallet.com/add_new_asset#checksum_format) `blockchains/ethereum/assets/<token_smartcontract_address>/`.
- [ ] Tell your designer that token image must be in PNG format, avoid transparent background, recommended size 256x256px, max. 512x512px, with max file size of 100kB, for further details read [image rules](https://developer.trustwallet.com/add_new_asset#image-requirements).
- [ ] Upload your logo with file named `logo.png` to previously created folder with smartcontract address, and if you done all correctly your path should look like this. `blockchains/ethereum/assets/0x1234567461d3f8Db7496581774Bd869C83D51c93/logo.png`
- [ ] Create `info.json` file with info about the token/project
- [ ] Create a pull request to the main repo

We support Polygon (polygon) and Avalanche (avax) assets at this time, but will expand this as ChartEx expands its own network support.

## Disclaimer
ChartEx team allows anyone to submit new assets to this repository. However, this does not mean that we are in direct partnership with all of the projects.

ChartEx team will reject projects that are deemed as scam or fraudulent after careful review.
ChartEx team reserves the right to change the terms of asset submissions at any time due to changing market conditions, risk of fraud, or any other factors we deem relevant.