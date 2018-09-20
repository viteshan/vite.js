const assert = require('assert');
import vitejs from '../../index.js';

const HTTP_RPC = new vitejs.HTTP_RPC({});
const ViteJS = new vitejs(HTTP_RPC);
const WalletHD = ViteJS.Wallet.Address;

describe('Wallet_Address', function () {
    let mnemonic = 'truck female picnic cactus mountain around keen letter brass assume night air shallow predict gap scheme again moon drive slender tone coin stairs seven';

    it('test_getAddrsFromMnemonic', function () {
        let as = WalletHD.getAddrsFromMnemonic(mnemonic, 10, 'm/44\'/999\'');
        let arr = [];
        as.forEach((item)=>{
            arr.push(item.hexAddr);
        });

        assert.deepEqual(arr, [
            'vite_07bd5cef6a26faf677f77ccc17a79b0d4ecbdc68953b3cf34d',
            'vite_b09b8401eec626ea6ff2b95493833b910ccf7ea9216f6cca67',
            'vite_d05aa780b45f93d3959b0ad552921e5da8a08ffb44002e12f7',
            'vite_9e465ef2e49b9d227cf7ef9f7b56a0c24f37cf6245357388d2',
            'vite_004c3c0a712775cb513b0d4b4dfe2b742ea49ce8796c0eae80',
            'vite_af6fdd10ed33d0317b21cf11f3df0bf9f79948790d36b9e2e8',
            'vite_8fdb9d9af5251f73b0a82d18c48f185a3cf8bfde70e9c3f851',
            'vite_bfca4d59638b8da52b7d74700d59bb666495f6baaf230b8b15',
            'vite_74630139fa3d47e65e63efba781b56d5a2bea820597bc73a75',
            'vite_4d49f23a4a2cbf6866788f84328181a7ee02c9fd9842e8f60c'
        ]);
    });
});
