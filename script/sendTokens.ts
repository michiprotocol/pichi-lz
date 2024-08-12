import {isFunctionExpressionWithName} from "@rushstack/eslint-patch/lib/eslint-bulk-suppressions/ast-guards";

const { ethers } = require("hardhat");

async function main() {
    // Deployed contract addresses
    const pichiTokenAddressSepolia = "0x94d66AA2BFd3FD4293A5F19f6A275D5DE8527ea8";
    const pichiTokenAddressArbitrum = "0x7aD41fa419367f09cd4DB76Bd5a15541b3518551";
    const pichiTokenAddressMantle = "0xd326bd48f05EeD255feFaf29aF3e05Ac9901203D";

    // Uncomment the network you want to send tokens from
    // let pichiAddress = pichiTokenAddressArbitrum;
    let pichiAddress = pichiTokenAddressMantle;
    // let pichiAddress = pichiTokenAddressSepolia;

    // Replace with the recipient's address
    const recipientAddressBytes32 = "0x0000000000000000000000005c1446d75be5cc718f47d196014b7a00f57ed6fe";

    // LayerZero Endpoint IDs
    const arbitrumEndpointId = 40231;
    const mantleEndpointId = 40246;
    const sepoliaEndpointId = 40161;

    // Uncomment the endpoint you want to send tokens to
    // let endpointId = arbitrumEndpointId;
    // let endpointId = mantleEndpointId;
    let endpointId = sepoliaEndpointId;

    const [deployer] = await ethers.getSigners();
    console.log("Deploying with account:", deployer.address);

    const PichiToken = await ethers.getContractFactory("Bob");
    const pichiToken = await PichiToken.attach(pichiAddress);

    // Amount to send (e.g., 100 tokens with 18 decimals)
    const amountToSend = ethers.utils.parseUnits("100", 18);

    // Prepare the send parameters including oftCmd
    const sendParam = {
        dstEid: endpointId,
        to: recipientAddressBytes32,
        amountLD: amountToSend,
        minAmountLD: amountToSend, // Adjust based on slippage tolerance if needed
        extraOptions: "0x", // No extra options
        composeMsg: "0x", // No composed message
        oftCmd: "0x" // No OFT command, replace with actual command if needed
    };

    console.log("Sending tokens to Arbitrum network...", sendParam);
    // Estimate the fee for the operation
    const fee = await pichiToken.quoteSend(sendParam, false);
    console.log("Estimated fee:", fee, fee.toString(), fee.nativeFee.toString(), fee.lzTokenFee.toString());
    // Send the transaction
    const tx = await pichiToken.send(sendParam, { nativeFee: fee.nativeFee.toString(), lzTokenFee: fee.lzTokenFee.toString() }, deployer.address, {
        value: fee.nativeFee.toString(),
    });

    console.log("Transaction sent:", tx.hash);
    await tx.wait();
    console.log("Transaction confirmed:", tx.hash);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
