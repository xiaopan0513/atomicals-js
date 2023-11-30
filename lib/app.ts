import {Atomicals, ElectrumApi} from "./index";
import {IWalletRecord} from "./utils/validate-wallet-storage";
import {jsonFileReader} from "./utils/file-utils";

async function start() {
    const wallet: any = await jsonFileReader('./wallet.json');

    const funding: IWalletRecord = wallet.funding;
    const owner: IWalletRecord = wallet.primary;
    const address = funding.address;
    const wif = funding.WIF;

    const atomicals = new Atomicals(ElectrumApi.createClient('https://eptestnet.atomicals.xyz/proxy'));

    // const result = await atomicals.searchContainers('atom');

    // prepare-dmint-items
    // const result = await Atomicals.createDmintItemManifests('/Users/moffat/Desktop/nouns', '/Users/moffat/Desktop/nouns-output');

    // prepare-dmint
    // const result = await Atomicals.createDmint('/Users/moffat/Desktop/nouns-output-1701326901745', 0, 'bc18');

    // mint-container
    // await atomicals.mintContainerInteractive('atom-nouns', address, wif, {
    //     satsbyte: 20,
    //     satsoutput: 546,
    //     bitworkc: 'bc18'
    // });

    // enable-dmint，激活合集，实际是将部署的容器转给自己
    // const result: any = await atomicals.setContainerDmintInteractive('#atom-nouns', '/Users/moffat/Desktop/nouns-output-1701246603076/dmint-1701247137502.json', funding, owner, {
    //     satsbyte: 20,
    //     satsoutput: 546
    // });
    // console.log(result);

    // 上传文件，获得资源ID 423184ae3ab9bafb05ee85ac21e9a93f929b396bc3cbc4cf6a24606adcdd1cfei0
    // const result = await atomicals.mintDatInteractive('/Users/moffat/Desktop/nouns/logo.png', 'nouns.png', address, wif, {
    //     satsbyte: 15,
    //     satsoutput: 546,
    // });

    // 设置合集信息
    // const result: any = await atomicals.setContainerDataInteractive('#atom-nouns', '/Users/moffat/Desktop/nouns-output-1701246603076/container-dmint-metadata.json', funding, owner, {
    //     satsbyte: 10,
    //     satsoutput: 546,
    // });

    // 获取容器中的NFT列表
    // const result: any = await atomicals.getContainerItems('punk', 10, 0);

    const result: any = await atomicals.getAtomicalByContainerItem('punk', 'punk0');

    // validate-container-item
    // const result: any = await atomicals.getAtomicalByContainerItemValidated('#atom-nouns', 'item-1', '/Users/moffat/Desktop/nouns-output-1701246603076/item-1.json');

    // const result: any = await atomicals.sealInteractive('#atom-nouns', funding, owner, {
    //     satsbyte: 10
    // });

    // const result: any = await atomicals.mintContainerItemInteractive('atom-nouns', 'item-0', '/Users/moffat/Desktop/nouns-output-1701246603076/item-0.json', address, wif, owner, {
    //     satsbyte: 10,
    //     satsoutput: 546
    // });

    // const result: any = await atomicals.mintNftInteractive(['/Users/moffat/Desktop/arcs.txt'], address, wif, {
    //     satsbyte: 40,
    //     satsoutput: 1000,
    //     bitworkc: '0000'
    // });

    // mint-dft
    // const result: any = await atomicals.mintDftInteractive(address, 'electron', wif, {
    //     satsbyte: 30
    // });

    console.log(JSON.stringify(result));
}

start();