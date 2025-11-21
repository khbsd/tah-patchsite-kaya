async function bleep_bloop() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
        console.log("done");
    })
}

bleep_bloop();