import "@/styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Header from "@/components/Header"
import Head from "next/head"
import { NotificationProvider } from "web3uikit"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

/**
 * Establish client to tell GraphQL where it should be making queries
 */
const client = new ApolloClient({
    uri: "https://api.studio.thegraph.com/query/41304/nft-marketplace/v0.0.1",
    cache: new InMemoryCache(),
})

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>NFT Marketplace</title>
                <meta name="description" content="NFT Marketplace" />
                <meta name="viewport" content="width=device-dwidth, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <ApolloProvider client={client}>
                    <NotificationProvider>
                        <Header />
                        <Component {...pageProps} />
                    </NotificationProvider>
                </ApolloProvider>
            </MoralisProvider>
        </div>
    )
}
