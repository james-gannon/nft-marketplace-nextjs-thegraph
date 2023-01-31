# Overview
[The Graph](https://thegraph.com/en/) is a decentralized layer for storing event data

For this application, smart contract events will be:
1. Indexed with TheGraph
2. Read from TheGraph 

# Frontend

## Home Screen

After the user connects their Metamask wallet, those NFTs owned by that account are queried using the GraphQL schema and The Graph Protocol are displayed and updated on the home page:

![image](https://user-images.githubusercontent.com/50316657/215548945-6fe4750f-7e6c-4c80-ab20-3f7025dc8b01.png)

## Update Listing

The owner of the listed NFTs may click on the NFT of choice and update the listing price:

![image](https://user-images.githubusercontent.com/50316657/215815572-15cda2e1-c827-41bc-aca7-2a4428134832.png)

## Sell Screen

Owners can sell their NFTs on the marketplace buy entering the `NFT Address`, `Token ID`, and `Price (in ETH)`:

![image](https://user-images.githubusercontent.com/50316657/215815775-ce2f09c5-f0dd-48cf-b84b-d98c4ba380e9.png)

# Download & Run

<p>To get a local copy up and running follow these simple example steps.</p>
<p>You will need to install either <strong>npm</strong> or <strong>yarn</strong> to run the commands, and <strong>git</strong> to clone the repository.</p>

## Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/james-gannon/nft-marketplace-nextjs-thegraph.git
   ```
2. Navigate into the subdirectory:
   ```sh
   cd nft-marketplace-nextjs-thegraph
   ```
3. Install NPM packages using `yarn` or `npm install`.

## Usage

1. You can update the contracts addresses in `constants/networkMapping.json` as fit:

```json
{

    "5": { "NftMarketplace": ["ethereum-goerli-marketplace-address"] },
    "31337": { "NftMarketplace": ["ethereum-hardhat-marketplace-address"] }

}
```

To get it to work locally, you will need to navigate to [nft-marketplace](https://github.com/james-gannon/nft-marketplace) to run a local node with `yarn hardhat node` and deploy the contracts with `yarn hardhat run deploy/01-deploy-nft-marketplace.js --network localhost` and `yarn hardhat run deploy/02-deploy-basic-nft.js --network localhost`.

2. Launch the local development server with `yarn dev` or `npm run dev`.

#

<a href="https://github.com/james-gannon/thegraph-nft-marketplace" id="The Graph"><img src="https://shields.io/badge/Mission%2012%20-%20Next.js%20&%20TheGraph%20●%20NFT%20Marketplace%20(Lesson%2015)-742EC0?style=for-the-badge&logo=target" height="35" /></a>

<a href="https://github.com/james-gannon/thegraph-nft-marketplace">Go to the TheGraph configuration repo (`thegraph-nft-marketplace`)</a>

### Achievements

- Building a subgraph to index the marketplace contract events (The Graph Studio)
- Using The Graph CLI to deploy the subgraph
- Querying the subgraph with GraphQL & Apollo client
- Hosting the Marketplace:
  - Vercel: https://nft-marketplace-nextjs-thegraph.vercel.app/
  - Fleek (IPFS): In-progress

### Bonus achievements

- Handling notifications: success, error & displaying pending transactions with Moralis & web3uikit
- Customizing the UI & UX
- Using Moralis and web3uikit for various components (Modal, Button, Input) for loading cards
- Listings filtering (All & Owned by the user)

### Skills

[![Solidity]](https://soliditylang.org/)
[![JavaScript]](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![ReactJS]](https://reactjs.org/)
[![NextJS]](https://nextjs.org/)
[![TheGraph]](https://thegraph.com/en/)
[![ApolloGraphQL]](https://www.apollographql.com/)
[![GraphQL]](https://graphql.org/)

#

### [Back to main repo](https://github.com/james-gannon/nft-marketplace-nextjs-thegraph)

[solidity]: https://custom-icon-badges.demolab.com/badge/Solidity-3C3C3D?style=for-the-badge&logo=solidity&logoColor=white
[javascript]: https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black
[reactjs]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[nextjs]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[thegraph]: https://custom-icon-badges.demolab.com/badge/TheGraph-0C0A1C?style=for-the-badge&logo=thegraph&logoColor=white
[apollographql]: https://img.shields.io/badge/Apollo%20GraphQL-311C87.svg?style=for-the-badge&logo=Apollo-GraphQL&logoColor=white
[graphql]: https://img.shields.io/badge/GraphQL-E10098.svg?style=for-the-badge&logo=GraphQL&logoColor=white