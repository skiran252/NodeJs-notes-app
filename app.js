const add = require('./utils.js');

// const validator = require('validator')
const notesgetter = require('./notes.js');

const chalk = require('chalk')

const msg = notesgetter('notes1.txt');

const specialmsg=chalk.bold.inverse.red("Failure")
console.log(specialmsg)