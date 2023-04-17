const { NotImplementedError } = require('../extensions/index.js')

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    console.log(date)
    if (!date) return 'Unable to determine the time of year!'

    if (!date instanceof Date || isNaN(date) === NaN) {
        throw new Error('Invalid date!')
    } else if (
        date.getFullYear() > 0 &&
        date.getFullYear() < 10000 &&
        date.getMonth() >= 0 &&
        date.getMonth() < 12 &&
        date.getDate() > 0 &&
        date.getDate() <= new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    ) {
        throw new Error('Invalid date!')
    }
    const month = date.getMonth()
    switch (month) {
        case 0:
        case 1:
        case 11:
            return 'winter'
        case 2:
        case 3:
        case 4:
            return 'spring'
        case 5:
        case 6:
        case 7:
            return 'summer'
        case 8:
        case 9:
        case 10:
            return 'autumn'
        default:
            throw new Error('Invalid date!')
    }
}

// console.log(getSeason(new Date(2020, 02, 31)))
module.exports = {
    getSeason,
}
