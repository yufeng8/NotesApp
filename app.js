// const fs = require('fs')

// //fs.writeFileSync('notes.text', 'My name is Yufeng.')
// fs.appendFileSync('notes.text', ' I live in Sunnyvale.')
// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)

const chalk = require('chalk')
//const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')

// const msg = getNotes()

// console.log(msg)

// //console.log(validator.isURL('https/mead.io'))
// const greenMsg = chalk.blue.inverse.bold('Error!')
// console.log(greenMsg)

// console.log(process.argv[2])
//const command = process.argv[2]
//console.log(process.argv)
//customize yargs version
yargs.version('1.1.0')
//Create add command
yargs.command({
    command: 'add',
    describe: "add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'String'
        } 
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: "Remove a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: "List your note",
    handler() {
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: "Read a note",
    builder: {
        title: 'Note title',
        demandOption: true,
        type: 'string'
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

//add, remove, read, list


yargs.parse()
//console.log(yargs.argv)

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }
