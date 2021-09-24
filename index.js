#!/usr/bin/env node 
const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");

welcome({
    title: pkgJSON.name,
    tagLine: `Welcome to Cyberbarbie's World`,
    bgColor: `#f5bae1`,
    color: `#000000`,
    bold: true,
    clear: true,
    description: pkgJSON.description,
    version: pkgJSON.version,
})

// ^ tells our terminal to execute this script with nodejs 
console.log(`
Tae'lur Alexis 

Also known as Cyberbarbie. Software Engineer and developer advocate. Aiming to write useful open source developer tools and publish technical content to make learning how to code accessible for everyone. Mainly writes JavaScript with a hint of Python.

🐦 Twitter: https://twitter.com/TaelurAlexis
📖 GitHub:  https://github.com/cyberbarbie
💜 Twitch:  https://twitch.com/cyberbarbie
💻 Blog:    https://TaelurAlexis.com

`);