import { CHAIN_KEY, EndpointId, networkToEndpointId } from '@layerzerolabs/lz-definitions'
import { ExecutorOptionType, OptionType } from '@layerzerolabs/lz-v2-utilities'

import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'

const sepoliaContract: OmniPointHardhat = {
    eid: EndpointId.SEPOLIA_V2_MAINNET,
    contractName: 'PichiToken',
}

const ethereumContract: OmniPointHardhat = {
    eid: EndpointId.ETHEREUM_V2_MAINNET,
    contractName: 'PichiToken',
}

const arbitrumContract: OmniPointHardhat = {
    eid: EndpointId.ARBITRUM_V2_MAINNET,
    contractName: 'PichiToken',
}

const mantleContract: OmniPointHardhat = {
    eid: EndpointId.MANTLE_V2_MAINNET,
    contractName: 'PichiToken',
}

const config: OAppOmniGraphHardhat = {
    contracts: [
        {
            contract: ethereumContract,
        },
        {
            contract: arbitrumContract,
        },
        {
            contract: mantleContract,
        },
    ],
    connections: [
        {
            from: ethereumContract,
            to: arbitrumContract,
            config: {
                sendLibrary: "0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1", //SendLib302 on eth
                receiveLibraryConfig: {
                    receiveLibrary: "0xc02Ab410f0734EFa3F14628780e6e695156024C2", // RecLib302 on eth
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: "0x173272739Bd7Aa6e4e214714048a9fE699453059", // executor on eth
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            '0x589dedbd617e0cbcb916a9223f4d1300c294236b', // layerzero dvn address on eth
                            '0xa59ba433ac34d2927232918ef5b2eaafcf130ba5', // nethermind dvn address on eth
                        ],
                        optionalDVNs: [],
                    }
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            '0x589dedbd617e0cbcb916a9223f4d1300c294236b', // layerzero dvn address on eth
                            '0xa59ba433ac34d2927232918ef5b2eaafcf130ba5', // nethermind dvn address on eth
                        ]
                    }
                },
            }
        },
        {
            from: arbitrumContract,
            to: ethereumContract,
            config: {
                sendLibrary: "0x975bcD720be66659e3EB3C0e4F1866a3020E493A", // SendLib302 on arb
                receiveLibraryConfig: {
                    receiveLibrary: "0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6",
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: "0x31CAe3B7fB82d847621859fb1585353c5720660D", // executor on arb
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            "0x2f55c492897526677c5b68fb199ea31e2c126416", // layerzero dvn on arb
                            "0xa7b5189bca84cd304d8553977c7c614329750d99" // nethermind dvn on arb
                        ]
                    }
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(15),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            '0x2f55c492897526677c5b68fb199ea31e2c126416', // layerzero address on eth
                            '0xa7b5189bca84cd304d8553977c7c614329750d99', // nethermind address on eth
                        ],
                        optionalDVNs: [],
                    }
                }
            }
        },
        {
            from: ethereumContract,
            to: mantleContract,
            config: {
                sendLibrary: "0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1", //SendLib302 on eth
                receiveLibraryConfig: {
                    receiveLibrary: "0xc02Ab410f0734EFa3F14628780e6e695156024C2", // RecLib302 on eth
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: "0x173272739Bd7Aa6e4e214714048a9fE699453059", // executor on eth
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            '0x589dedbd617e0cbcb916a9223f4d1300c294236b', // layerzero dvn address on eth
                            '0xa59ba433ac34d2927232918ef5b2eaafcf130ba5', // nethermind dvn address on eth
                        ],
                        optionalDVNs: [],
                    }
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            '0x589dedbd617e0cbcb916a9223f4d1300c294236b', // layerzero dvn address on eth
                            '0xa59ba433ac34d2927232918ef5b2eaafcf130ba5', // nethermind dvn address on eth
                        ]
                    }
                },

            },
        },
        {
            from: mantleContract,
            to: ethereumContract,
            config: {
                sendLibrary: "0xde19274c009A22921E3966a1Ec868cEba40A5DaC", // SendLib302 on mantle
                receiveLibraryConfig: {
                    receiveLibrary: "0x8da6512De9379fBF4F09BF520Caf7a85435ed93e", // ReceiveLib302 on mantle
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: "0x4Fc3f4A38Acd6E4cC0ccBc04B3Dd1CCAeFd7F3Cd"
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            "0x28b6140ead70cb2fb669705b3598ffb4beaa060b", // layerzero dvn on mantle
                            "0xb19a9370d404308040a9760678c8ca28affbbb76", // nethermind dvn on mantle
                        ]
                    }
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            "0x28b6140ead70cb2fb669705b3598ffb4beaa060b", // layerzero dvn on mantle
                            "0xb19a9370d404308040a9760678c8ca28affbbb76", // nethermind dvn on mantle
                        ]
                    }
                }
            }
        },
        {
            from: arbitrumContract,
            to: mantleContract,
            config: {
                sendLibrary: "0x975bcD720be66659e3EB3C0e4F1866a3020E493A", // SendLib302 on arb
                receiveLibraryConfig: {
                    receiveLibrary: "0x7B9E184e07a6EE1aC23eAe0fe8D6Be2f663f05e6",
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: "0x31CAe3B7fB82d847621859fb1585353c5720660D", // executor on arb
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            "0x2f55c492897526677c5b68fb199ea31e2c126416", // layerzero dvn on arb
                            "0xa7b5189bca84cd304d8553977c7c614329750d99" // nethermind dvn on arb
                        ]
                    }
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(15),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            '0x2f55c492897526677c5b68fb199ea31e2c126416', // layerzero address on eth
                            '0xa7b5189bca84cd304d8553977c7c614329750d99', // nethermind address on eth
                        ],
                        optionalDVNs: [],
                    }
                }
            }
        },
        {
            from: mantleContract,
            to: arbitrumContract,
            config: {
                sendLibrary: "0xde19274c009A22921E3966a1Ec868cEba40A5DaC", // SendLib302 on mantle
                receiveLibraryConfig: {
                    receiveLibrary: "0x8da6512De9379fBF4F09BF520Caf7a85435ed93e", // ReceiveLib302 on mantle
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: "0x4Fc3f4A38Acd6E4cC0ccBc04B3Dd1CCAeFd7F3Cd"
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            "0x28b6140ead70cb2fb669705b3598ffb4beaa060b", // layerzero dvn on mantle
                            "0xb19a9370d404308040a9760678c8ca28affbbb76", // nethermind dvn on mantle
                        ]
                    }
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        optionalDVNThreshold: 0,
                        requiredDVNs: [
                            "0x28b6140ead70cb2fb669705b3598ffb4beaa060b", // layerzero dvn on mantle
                            "0xb19a9370d404308040a9760678c8ca28affbbb76", // nethermind dvn on mantle
                        ]
                    }
                }
            }
        },
    ],
}

export default config
