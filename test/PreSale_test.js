
/**
 * This file was created by truffle-test-generator.
 * For every test, a new contract will be created in the
 * top beforeEach block. This line uses the arguments for
 * your contract's constructor with the same variable names.
 * Each public, non-constant (view) method has a describe
 * block generated for it.
 */
const Presale = artifacts.require('Presale')

contract('Presale', (accounts) => {
  const admin = accounts[0]
  const user = accounts[3]

  describe('Tether', () => {

  })

  describe('Testing the presale contract', () => {

    it('Deploy and confirm the deployment',async function(){
      this.presale = await Presale.new("0x8468b2bDCE073A157E560AA4D9CcF6dB1DB98507","0x8468b2bDCE073A157E560AA4D9CcF6dB1DB98507");
      assert.equal(await this.presale.Tether(),"0x8468b2bDCE073A157E560AA4D9CcF6dB1DB98507");
      assert.equal(await this.presale.Token(),"0x8468b2bDCE073A157E560AA4D9CcF6dB1DB98507");
    })

    it('Fetch Ethereum Price From Chainlink', async function(){
      this.chainlink = await Presale.fetchEthPrice();
      assert(this.chainlink > 0);
    })

  })

  // describe('fetchPurchaseHistory', () => {

  // })

  // describe('fetchEthPrice', () => {

  // })
})
