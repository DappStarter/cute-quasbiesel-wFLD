require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone foot blanket radar snow essay grace open force gauge'; 
let testAccounts = [
"0x2bded7dd7de896289ed0b7985ef990ce9b05bdc1a17d9ee91f32d858ffafd62a",
"0x625c6038ba6520b9302526639cc7a5d3fbbdfec0157972fb5b8e837c217d0e83",
"0x0fff47070c03eaec32829ed8fdd62bc61e537f016a9c8b4f890e4c8dc8f63676",
"0x2a26ab24fe44b000f79afe4f5d26aac17b34739a8bf69ca56fb2692b886f391b",
"0x81a5c69525cac7ad4a91443a096c772c1e9ed9ca8587aefb8c04fb175d804b99",
"0x1381529ba568bc05905b9e8373e32d7fad9b2037a843bfc68c7d52ae67a44c0a",
"0x65012ddd7dfdfbeec13456f22f15f8c8a5bc373d99494e2b5eea5f6af9f7ee83",
"0x5157cac17e791d52d3fcbf9b48ebf37492f055e677c87a40447e92bab4d04aa4",
"0xb5231d5ba2353d955e8139abc7854b36f2d016478f37d854514bc03b8878d2ae",
"0xf62fabb73c64207e9f50e6583055b722c3ba9de1c5191a2b697b0be244fa25a1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


