import {Atomicals, ElectrumApi} from "./index";
import {jsonFileReader} from "./utils/file-utils";

const atomicals = new Atomicals(ElectrumApi.createClient('http://10.6.96.3:3000/proxy'));

async function mintDftInteractive() {
    const wallet: any = await jsonFileReader('./wallet.json');

    while (true) {
        try {
            const result: any = await atomicals.mintDftInteractive(wallet.primary.address, 'electron', wallet.primary.WIF, {
                satsbyte: 26
            });

            // const container = 'toothy';
            // const item = '0001';
            // const mainfest = '/root/atom-source/' + container + '/' + item + '.json';
            // const result: any = await atomicals.mintContainerItemInteractive(container, item, mainfest, wallet.primary.address, wallet.primary.WIF, wallet.primary, {
            //     satsbyte: 100,
            //     satsoutput: 1000
            // });

            if (!result.success) {
                console.log(`worker execute result fail, message: ${result.message}`);
            } else if (result.success === true && process.send) {
                process.send({ type: 'found', result: result });
                return;
            }
        } catch (err) {
            console.log('worker execute error', err);
        }
    }
}

mintDftInteractive();