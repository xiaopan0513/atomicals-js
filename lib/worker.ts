import {Atomicals, ElectrumApi} from "./index";
import {jsonFileReader} from "./utils/file-utils";

const atomicals = new Atomicals(ElectrumApi.createClient(''));

async function mintDftInteractive() {
    const wallet: any = await jsonFileReader('./wallet.json');
    const result: any = await atomicals.mintDftInteractive(wallet.primary.address, 'rune', wallet.primary.WIF, {
        satsbyte: 30
    });

    if (result.success === true && process.send) {
        process.send({ type: 'found', result: result });
    }
}

// @ts-ignore
mintDftInteractive();

// 保持子进程运行
setInterval(() => {}, 1000);