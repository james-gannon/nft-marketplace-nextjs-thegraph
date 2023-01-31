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