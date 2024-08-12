// Get the environment configuration from .env file
//
// To make use of automatic environment setup:
// - Duplicate .env.example file and name it .env
// - Fill in the environment variables
import 'dotenv/config'

import 'hardhat-deploy'
import 'hardhat-contract-sizer'
import '@nomiclabs/hardhat-ethers'
import '@layerzerolabs/toolbox-hardhat'
import { HardhatUserConfig, HttpNetworkAccountsUserConfig } from 'hardhat/types'

import { EndpointId } from '@layerzerolabs/lz-definitions'

// Set your preferred authentication method
//
// If you prefer using a mnemonic, set a MNEMONIC environment variable
// to a valid mnemonic
const MNEMONIC = process.env.MNEMONIC

// If you prefer to be authenticated using a private key, set a PRIVATE_KEY environment variable
const PRIVATE_KEY = process.env.PRIVATE_KEY

const accounts: HttpNetworkAccountsUserConfig | undefined = MNEMONIC
    ? { mnemonic: MNEMONIC }
    : PRIVATE_KEY
        ? [PRIVATE_KEY]
        : undefined

if (accounts == null) {
    console.warn(
        'Could not find MNEMONIC or PRIVATE_KEY environment variables. It will not be possible to execute transactions in your example.'
    )
}

const config: HardhatUserConfig = {
    paths: {
        cache: 'cache/hardhat',
    },
    solidity: {
        compilers: [
            {
                version: '0.8.20',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    networks: {
        'sepolia-testnet': {
            eid: EndpointId.SEPOLIA_V2_TESTNET,
            url: process.env.RPC_URL_SEPOLIA || 'https://rpc.sepolia.org/',
            accounts,
        },
        'arbitrum-testnet': {
            eid:40231,
            url: 'https://sepolia-rollup.arbitrum.io/rpc',
            accounts,
        },
        'mantle-testnet': {
            eid: 40246,
            url: 'https://lb.drpc.org/ogrpc?network=mantle-sepolia&dkey=AvM7kbbCQE_wtg3gyulIGctkFcJh9VsR7pPangOF84-p',
            // url: 'https://mantle-sepolia.infura.io/v3/16ad61e92bb34d84931f0511c3a3dbc1',
            // url: 'https://mantle-sepolia.infura.io/v3/3cac990920ac4615ac757f9628b7a087',
            // url: 'https://rpc.testnet.mantle.xyz',
            accounts,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0, // wallet address of index[0], of the mnemonic in .env
        },
    },
}

export default config
