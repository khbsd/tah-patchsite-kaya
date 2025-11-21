import { FilenSDK } from "@filen/sdk"
import os from "os"
import path from "path"

/*const filen = new FilenSDK({
	metadataCache: true, // Cache decrypted metadata in memory. Recommended.
	connectToSocket: true, // Recommended if you are using the virtual FS class. Keeps the internal item tree up to date with remote changes.
	tmpPath: path.join(os.tmpdir(), "filen-sdk") // Temporary local path used to store metadata and chunks. Only available in Node.JS.
})*/

var isDone = false;

async function upload_file() {
	/*try {
		await filen.login({
			email: process.env.USERNAME,
			password: process.env.PASSWORD,
		});
		await filen.fs().upload({
			path: "/test/test.txt",
			source: "./auto-patcher-node/upload-src/test.txt"
		}).then(() => console.log("file uploaded"));

	} catch (err) {
		console.log("error: ", err);
	}

	isDone = true;*/
	// filen.logout();

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(1);
		}, 1000);
		console.log("done");
	});
}

upload_file();
