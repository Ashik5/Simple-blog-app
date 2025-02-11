const hre = require("hardhat");

async function main() {
    const Blog = await hre.ethers.getContractFactory("BlogModel");
    const blog = await Blog.deploy();
    // await blog.deployed();
    console.log("Blog contract deployed to:", blog.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
