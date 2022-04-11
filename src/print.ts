import { searchResult, driverResult, sessionNumber, qTime } from './types'
import * as conv from './conversions'
import { S } from 'mvhou-ts'

const sessionResult = (result:driverResult, session:sessionNumber):string => S.padBack(`Q${session}: ${conv.toString(result[session])}`, 15)

const sessionDiff = (result:driverResult, session:sessionNumber):string => S.padBack(`Q${session}: ${((result[session] === 'N/A') ? 'N/A' : conv.strSeconds(result[session],1)+'.'+conv.strMs(result[session]))}`, 15)


const printDriverResult = (result:driverResult, timing:(result:driverResult, session:sessionNumber)=>string=sessionResult) => console.log(`${S.padBack(result[0], 15)}${timing(result, 1)}${timing(result, 2)}${timing(result, 3)}`)

const getDiff = (a:qTime, b:qTime):qTime => ((a === 'N/A' || b === 'N/A') ? 'N/A' : a - b)

export const printResult = (results:searchResult) => {
    results.forEach((result, race) => {
        console.log(race);
        printDriverResult(result[0])
        result.slice(1).forEach((res:driverResult) => {
            printDriverResult([res[0], getDiff(res[1], result[0][1]), getDiff(res[2], result[0][2]), getDiff(res[3], result[0][3])], sessionDiff)
        })
    });
}