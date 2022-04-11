import { getQualiTimes } from './quali-times'
import { printResult } from './print'

(() => {
    var driverNumbers:string[] = [
        '44',
        '77',
        '5',
        '7'
    ];
    const year:string = "2017";
    if (process.argv.length >= 4) {
        driverNumbers = process.argv.slice(2)
    }
    printResult(getQualiTimes(year, driverNumbers));
})();