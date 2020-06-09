const filesystem = require('fs')
const getNotes = function(a) {
    const text=filesystem.readFileSync(a)
    return ' (Your Notes are ):.....'+text
}

module.exports = getNotes