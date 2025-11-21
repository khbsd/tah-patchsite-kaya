import { FilenSDK } from "@filen/sdk"
import os from "os"
import path from "path"

const filen = new FilenSDK({
	metadataCache: true, // Cache decrypted metadata in memory. Recommended.
	connectToSocket: true, // Recommended if you are using the virtual FS class. Keeps the internal item tree up to date with remote changes.
	tmpPath: path.join(os.tmpdir(), "filen-sdk") // Temporary local path used to store metadata and chunks. Only available in Node.JS.
})
let isFile, isDir = false;

filen.login({
	email: process.env.USERNAME,
	password: process.env.PASSWORD,
	//twoFactorCode: "123456" // Can be omitted if you do not have 2FA enabled.
})

console.log("checking dir");

/*try {
	isDir = filen.fs().stat({
		path: "/test"
	}).isDir;
} catch (FileNotFoundError) {
	return;
}

console.log("checking file");

try {
	isFile = filen.fs().stat({
		path: "/test/test.txt"
	}).isFile;
} catch (FileNotFoundError) {
	return;
}

console.log("removing dir");

if (isDir) {
	await filen.fs().rmdir({
		path: "/test"
	})
}

console.log("removing file");

if (isFile) {
	await filen.fs().rmfile({
		path: "/test/test.txt"
	})
}*/

console.log("uploading file");

filen.fs().upload({
	path: "/test/test.txt",
	source: "./auto-patcher-node/upload-src/test.txt"
})
