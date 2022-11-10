require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remain exact harvest narrow force slice'; 
let testAccounts = [
"0xcfc387fcbf51755e193bf300d34da69ece010baedc98db07d4c21e482cff1717",
"0xeae54e72c2132c20dc557440fabc0aaa72a5b035fe4ceb1a8ee8e46b66e74262",
"0x84855ffa55c7ef4bf5c0e5c0596657d090eaebc748447d6d69c52a19c517727b",
"0xc91d42e28d24ed353baeaab4edf6bb6f7fb619bbcf48dedcafa1cd79f40b344d",
"0x908d5c72fa190464cb3918fbb523d0d4505c4e87c778c28869760e844415da56",
"0x80fc61dc94496edf78b51314dfd0917860b748a5d7a8049f33baa25857805a53",
"0x4b239130be1a0ac2f9120138f260661461f3d74cd07a36e6f5c1050c84ff0be4",
"0x924c39c4a7ad5c7a9f72d76ade9128c46194168d39e948a54c440634caadcc52",
"0xb062eac81c6494b3d7959ed19b51fb5759803e0203bb64a4ba4b9a564e9559a4",
"0xc6108f5a372d151092aa3893eb55bf380a9f2d957e727342a7e78c1d7b65e8d9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

