#!/usr/bin/env node 
const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const log = console.log
const dim = chalk.dim;
const blogClr = chalk.hex(`#f5bae1`).bold.inverse
const ital = chalk.italic

// Alerts
const success = chalk.green.inverse;
const warning = chalk.keyword(`orange`).inverse;
const info = chalk.blue.inverse;
const error = chalk.red.bold.inverse;

welcome({
    title: `Tae'lur Alexis`,
    tagLine: `Welcome to Cyberbarbie's World!`,
    bgColor: `#f5bae1`,
    color: `#000000`,
    bold: true,
    clear: true,
    description: pkgJSON.description,
    version: pkgJSON.version,
})

log(`${ital(
    `Also known as Cyberbarbie. Software Engineer and developer advocate. Aiming to write useful open source developer tools and publish technical content to make learning how to code accessible for everyone. Mainly writes JavaScript with a hint of Python.`
    )}

${chalk.hex(`#1da1f2`).bold.inverse(` Twitter `)} ${dim(`https://twitter.com/TaelurAlexis`)}
${chalk.hex(`#c9510c`).bold.inverse(` GitHub `)}  ${dim(`https://github.com/cyberbarbie`)}
${chalk.hex(`#9146ff`).bold.inverse(` Twitch `)}  ${dim(`https://twitch.com/cyberbarbie`)}
${blogClr(` Blog `)}    ${dim(`https://taeluralexis.com`)}

`);

console.log(`
${success(` SUCCESS `)} Thanks for checking out my CLI.
${info(` INFO `)} INFO: I'm learning how to automate with Nodejs.
${warning(` WARNING `)} This is not made for production. It literally servers no purpose for anyone.
${error(` ERROR `)} This is a work in progress.
`)
