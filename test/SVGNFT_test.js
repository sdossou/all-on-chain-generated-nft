const { expect } = require('chai')
const chai = require('chai')
const BN = require('bn.js')
const skipIf = require('mocha-skip-if')
chai.use(require('chai-bn')(BN))
const fs = require('fs')
const { deployments, getChainId, network, ethers } = require('hardhat')
const { networkConfig, DevelopmentChains } = require('../helper-hardhat-config')
const { isTypedArray } = require('util/types')

skipIf.if(!DevelopmentChains.includes(network.name)).
    describe('SVGNFT Unit Tests', async function () {
        let svgNFT

        beforeEach(async () => {
            await deployments.fixture(['mocks', 'svg'])
            const SVGNFT = await deployments.get("SVGNFT")
            svgNFT = await ethers.getContractAt("SVGNFT", SVGNFT.address)
        })

        it('should return the correct URI', async () => {

            let expectedURI = fs.readFileSync("./test/data/metadataBlueCircle.txt", "utf8")
            let uri = await svgNFT.tokenURI(0)
            console.log(expectedURI).to.be.true
        })
    })