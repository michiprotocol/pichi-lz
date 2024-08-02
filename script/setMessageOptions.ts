const contractName = 'PichiToken'

const setMessageOptions = async (hre) => {
    const { getNamedAccounts } = hre;

    const { deployer } = await getNamedAccounts();

    console.log(deployer);
}