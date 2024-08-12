import {CHAIN_KEY, EndpointId, networkToEndpointId} from '@layerzerolabs/lz-definitions'
import {ExecutorOptionType, OptionType} from '@layerzerolabs/lz-v2-utilities'

import type {OAppOmniGraphHardhat, OmniPointHardhat} from '@layerzerolabs/toolbox-hardhat'

const sepoliaContract: OmniPointHardhat = {
    eid: 40161,
    contractName: 'Bob',
}

const arbitrumTestnetContract: OmniPointHardhat = {
    eid: 40231,
    contractName: 'Bob',
}

const mantleTestnetContract: OmniPointHardhat = {
    eid: 40246,
    contractName: 'Bob',
}

// const ethereumContract: OmniPointHardhat = {
//     eid: EndpointId.ETHEREUM_V2_MAINNET,
//     contractName: 'PichiToken',
// }
//
// const arbitrumContract: OmniPointHardhat = {
//     eid: EndpointId.ARBITRUM_V2_MAINNET,
//     contractName: 'PichiToken',
// }
//
// const mantleContract: OmniPointHardhat = {
//     eid: EndpointId.MANTLE_V2_MAINNET,
//     contractName: 'PichiToken',
// }

const config: OAppOmniGraphHardhat = {
    contracts: [
        {
            contract: sepoliaContract,
        },
        {
            contract: arbitrumTestnetContract,
        },
        {
            contract: mantleTestnetContract,
        },
    ],
    connections: [
        {
            from: sepoliaContract,
            to: arbitrumTestnetContract,
            config: {
                sendLibrary: "0xcc1ae8Cf5D3904Cef3360A9532B477529b177cCE", //SendLib302 on sep-eth
                // sendLibrary: "0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1", //SendLib302 on eth
                receiveLibraryConfig: {
                    receiveLibrary: "0xdAf00F5eE2158dD58E0d3857851c432E34A3A851", // RecLib302 on sep-eth
                    // receiveLibrary: "0xc02Ab410f0734EFa3F14628780e6e695156024C2", // RecLib302 on eth
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: "0x718B92b5CB0a5552039B593faF724D182A881eDA", // executor on sep-eth
                        // executor: "0x173272739Bd7Aa6e4e214714048a9fE699453059", // executor on eth
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            '0x8eebf8b423b73bfca51a1db4b7354aa0bfca9193', // layerzero dvn address on sep-eth
                            // '0x589dedbd617e0cbcb916a9223f4d1300c294236b', // layerzero dvn address on eth
                            // '0xa59ba433ac34d2927232918ef5b2eaafcf130ba5', // nethermind dvn address on eth
                        ],
                        optionalDVNs: [],
                    }
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            '0x8eebf8b423b73bfca51a1db4b7354aa0bfca9193', // layerzero dvn address on sep-eth
                            // '0x589dedbd617e0cbcb916a9223f4d1300c294236b', // layerzero dvn address on eth
                            // '0xa59ba433ac34d2927232918ef5b2eaafcf130ba5', // nethermind dvn address on eth
                        ]
                    }
                },
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 60000,
                        value: 0
                    }
                ]
            }
        },
        {
            from: arbitrumTestnetContract,
            to: sepoliaContract,
            config: {
                sendLibrary: "0x4f7cd4DA19ABB31b0eC98b9066B9e857B1bf9C0E", // SendLib302 on sep-arb
                // sendLibrary: "0x975bcD720be66659e3EB3C0e4F1866a3020E493A", // SendLib302 on arb
                receiveLibraryConfig: {
                    receiveLibrary: "0x75Db67CDab2824970131D5aa9CECfC9F69c69636",
                    // receiveLibrary: "0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6",
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: "0x5Df3a1cEbBD9c8BA7F8dF51Fd632A9aef8308897", // executor on sep-arb
                        // executor: "0x31CAe3B7fB82d847621859fb1585353c5720660D", // executor on arb
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            "0x53f488e93b4f1b60e8e83aa374dbe1780a1ee8a8", // layerzero dvn on sep-arb
                            // "0x2f55c492897526677c5b68fb199ea31e2c126416", // layerzero dvn on arb
                            // "0xa7b5189bca84cd304d8553977c7c614329750d99" // nethermind dvn on arb
                        ]
                    }
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(15),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            "0x53f488e93b4f1b60e8e83aa374dbe1780a1ee8a8", // layerzero dvn on sep-arb
                            // '0x2f55c492897526677c5b68fb199ea31e2c126416', // layerzero address on eth
                            // '0xa7b5189bca84cd304d8553977c7c614329750d99', // nethermind address on eth
                        ],
                        optionalDVNs: [],
                    }
                },
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 60000,
                        value: 0
                    }
                ]
            }
        },
        {
            from: sepoliaContract,
            to: mantleTestnetContract,
            config: {
                sendLibrary: "0xcc1ae8Cf5D3904Cef3360A9532B477529b177cCE", //SendLib302 on sep-eth
                // sendLibrary: "0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1", //SendLib302 on eth
                receiveLibraryConfig: {
                    receiveLibrary: "0xdAf00F5eE2158dD58E0d3857851c432E34A3A851", // RecLib302 on sep-eth
                    // receiveLibrary: "0xc02Ab410f0734EFa3F14628780e6e695156024C2", // RecLib302 on eth
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: "0x718B92b5CB0a5552039B593faF724D182A881eDA", // executor on sep-eth
                        // executor: "0x173272739Bd7Aa6e4e214714048a9fE699453059", // executor on eth
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            '0x8eebf8b423b73bfca51a1db4b7354aa0bfca9193', // layerzero dvn address on sep-eth
                            // '0x589dedbd617e0cbcb916a9223f4d1300c294236b', // layerzero dvn address on eth
                            // '0xa59ba433ac34d2927232918ef5b2eaafcf130ba5', // nethermind dvn address on eth
                        ],
                        optionalDVNs: [],
                    }
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            '0x8eebf8b423b73bfca51a1db4b7354aa0bfca9193', // layerzero dvn address on sep-eth
                            // '0x589dedbd617e0cbcb916a9223f4d1300c294236b', // layerzero dvn address on eth
                            // '0xa59ba433ac34d2927232918ef5b2eaafcf130ba5', // nethermind dvn address on eth
                        ]
                    }
                },
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 60000,
                        value: 0
                    }
                ]
            },
        },
        {
            from: mantleTestnetContract,
            to: sepoliaContract,
            config: {
                sendLibrary: "0x9A289B849b32FF69A95F8584a03343a33Ff6e5Fd", // SendLib302 on mantle
                // sendLibrary: "0xde19274c009A22921E3966a1Ec868cEba40A5DaC", // SendLib302 on mantle
                receiveLibraryConfig: {
                    receiveLibrary: "0x8A3D588D9f6AC041476b094f97FF94ec30169d3D", // ReceiveLib302 on mantle
                    // receiveLibrary: "0x8da6512De9379fBF4F09BF520Caf7a85435ed93e", // ReceiveLib302 on mantle
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: "0x8BEEe743829af63F5b37e52D5ef8477eF12511dE"
                        // executor: "0x4Fc3f4A38Acd6E4cC0ccBc04B3Dd1CCAeFd7F3Cd"
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            "0x9454f0eabc7c4ea9ebf89190b8bf9051a0468e03",
                            // "0x28b6140ead70cb2fb669705b3598ffb4beaa060b", // layerzero dvn on mantle
                            // "0xb19a9370d404308040a9760678c8ca28affbbb76", // nethermind dvn on mantle
                        ]
                    }
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            "0x9454f0eabc7c4ea9ebf89190b8bf9051a0468e03",
                            // "0x28b6140ead70cb2fb669705b3598ffb4beaa060b", // layerzero dvn on mantle
                            // "0xb19a9370d404308040a9760678c8ca28affbbb76", // nethermind dvn on mantle
                        ]
                    }
                },
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 60000,
                        value: 0
                    }
                ]
            }
        },
        {
            from: arbitrumTestnetContract,
            to: mantleTestnetContract,
            config: {
                sendLibrary: "0x4f7cd4DA19ABB31b0eC98b9066B9e857B1bf9C0E", // SendLib302 on sep-arb
                // sendLibrary: "0x975bcD720be66659e3EB3C0e4F1866a3020E493A", // SendLib302 on arb
                receiveLibraryConfig: {
                    receiveLibrary: "0x75Db67CDab2824970131D5aa9CECfC9F69c69636",
                    // receiveLibrary: "0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6",
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: "0x5Df3a1cEbBD9c8BA7F8dF51Fd632A9aef8308897", // executor on sep-arb
                        // executor: "0x31CAe3B7fB82d847621859fb1585353c5720660D", // executor on arb
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            "0x53f488e93b4f1b60e8e83aa374dbe1780a1ee8a8", // layerzero dvn on sep-arb
                            // "0x2f55c492897526677c5b68fb199ea31e2c126416", // layerzero dvn on arb
                            // "0xa7b5189bca84cd304d8553977c7c614329750d99" // nethermind dvn on arb
                        ]
                    }
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(15),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            "0x53f488e93b4f1b60e8e83aa374dbe1780a1ee8a8", // layerzero dvn on sep-arb
                            // '0x2f55c492897526677c5b68fb199ea31e2c126416', // layerzero address on eth
                            // '0xa7b5189bca84cd304d8553977c7c614329750d99', // nethermind address on eth
                        ],
                        optionalDVNs: [],
                    }
                },
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 60000,
                        value: 0
                    }
                ]
            }
        },
        {
            from: mantleTestnetContract,
            to: arbitrumTestnetContract,
            config: {
                sendLibrary: "0x9A289B849b32FF69A95F8584a03343a33Ff6e5Fd", // SendLib302 on mantle
                // sendLibrary: "0xde19274c009A22921E3966a1Ec868cEba40A5DaC", // SendLib302 on mantle
                receiveLibraryConfig: {
                    receiveLibrary: "0x8A3D588D9f6AC041476b094f97FF94ec30169d3D", // ReceiveLib302 on mantle
                    // receiveLibrary: "0x8da6512De9379fBF4F09BF520Caf7a85435ed93e", // ReceiveLib302 on mantle
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: "0x8BEEe743829af63F5b37e52D5ef8477eF12511dE"
                        // executor: "0x4Fc3f4A38Acd6E4cC0ccBc04B3Dd1CCAeFd7F3Cd"
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            "0x9454f0eabc7c4ea9ebf89190b8bf9051a0468e03",
                            // "0x28b6140ead70cb2fb669705b3598ffb4beaa060b", // layerzero dvn on mantle
                            // "0xb19a9370d404308040a9760678c8ca28affbbb76", // nethermind dvn on mantle
                        ]
                    }
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            "0x9454f0eabc7c4ea9ebf89190b8bf9051a0468e03",
                            // "0x28b6140ead70cb2fb669705b3598ffb4beaa060b", // layerzero dvn on mantle
                            // "0xb19a9370d404308040a9760678c8ca28affbbb76", // nethermind dvn on mantle
                        ]
                    }
                },
                enforcedOptions: [
                    {
                        msgType: 1,
                        optionType: ExecutorOptionType.LZ_RECEIVE,
                        gas: 60000,
                        value: 0
                    }
                ]
            }
        },
    ],
}

export default config
