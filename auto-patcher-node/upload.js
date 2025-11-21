import { FilenSDK } from "@filen/sdk"
import os from "os"
import path from "path"

const filen = new FilenSDK({
	metadataCache: true, // Cache decrypted metadata in memory. Recommended.
	connectToSocket: true, // Recommended if you are using the virtual FS class. Keeps the internal item tree up to date with remote changes.
	tmpPath: path.join(os.tmpdir(), "filen-sdk") // Temporary local path used to store metadata and chunks. Only available in Node.JS.
})
let isFile, isDir = false;

async function upload_overwrite() {
	let login;
	try {
		login = await filen.login({
			email: process.env.USERNAME,
			password: process.env.PASSWORD,
		});
		let state = await filen.fs().upload({
			path: "/test/test.txt",
			source: "./auto-patcher-node/upload-src/test.txt"
		});
	} catch (err) {
		console.log("error:", err);
	}

	console.log("yippee.jpg");
	login.logout();
}
upload_overwrite();
