import { FilenSDK } from "@filen/sdk"
import os from "os"
import path from "path"
import { statSync } from "fs"

const filen = new FilenSDK({
	metadataCache: true, // Cache decrypted metadata in memory. Recommended.
	tmpPath: path.join(os.tmpdir(), "filen-sdk") // Temporary local path used to store metadata and chunks. Only available in Node.JS.
})


async function uploadFile(src, dest, fileName) {
	try {
		await filen.login({
			email: process.env.USERNAME,
			password: process.env.PASSWORD,
		});
		await filen.fs().upload({
			path: path.join(dest, fileName),
			source: src,
		}).then(() => console.log("file uploaded"));
	} catch (err) { console.log ("error: ", err) }

	filen.logout();

	return new Promise((resolve) => {
		resolve();
		console.log("done");
	});
}

function handleArgs() {
	let srcPath = process.argv[2];
	let fileName = path.basename(srcPath);
	let destFolderName = process.argv[3] ? process.argv[3] : "/romhacking-public";

	if (statSync(srcPath).isFile())
		uploadFile(srcPath, destFolderName, fileName);
}

handleArgs();

