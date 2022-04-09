const main = async () => {
    const maduContractFactory = await hre.ethers.getContractFactory("Madu");
    const maduContract = await maduContractFactory.deploy();
    await maduContract.deployed();
    console.log("Contract deployed to:", maduContract.address);
  };
  
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();