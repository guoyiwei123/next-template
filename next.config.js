const {resolve} = require("path");
const basePath = "";
module.exports = {
    basePath,
    distDir: "dist",
    serverRuntimeConfig: {
        basePath
    },
    publicRuntimeConfig: {
        basePath
    },
    sassOptions: {
        includePaths: [resolve(__dirname, 'styles')],
    },
}