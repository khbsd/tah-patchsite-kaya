import { FilenSDK } from "@filen/sdk"
import os from "os"
import path from "path"
import fs from "fs"

const filen = new FilenSDK({
	metadataCache: true, // Cache decrypted metadata in memory. Recommended.
	tmpPath: path.join(os.tmpdir(), "filen-sdk") // Temporary local path used to store metadata and chunks. Only available in Node.JS.
})

async function upload_file() {
	let srcPath = process.argv[2];
	let fileName = path.basename(srcPath);
	let destFolderName = process.argv[3];

	console.log(srcPath, fileName, destFolderName);

	let isFile = await fs.stat(srcPath).isFile();
	if (!isFile) {
		return new Promise((resolve) => {
			filen.logout();
			resolve();
			console.log("source file not found, aborting");
	});
	}

	try {
		await filen.login({
			email: process.env.USERNAME,
			password: process.env.PASSWORD,
		});
		await filen.fs().upload({
			path: path.join(destFolderName, fileName),
			source: srcPath,
		}).then(() => console.log("file uploaded"));
	} catch (err) { console.log ("error: ", err) }

	filen.logout();

	return new Promise((resolve) => {
		resolve();
		console.log("done");
	});
}
upload_file();
