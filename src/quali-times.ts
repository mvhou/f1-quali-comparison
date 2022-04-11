import { searchResult } from './types'
import * as conv from './conversions'
import { Retriever, fileReader } from './retrieve-data'

export const getQualiTimes = (year:string, drivers:string[]):searchResult => {
    const results:searchResult = new Map()
    const retriever = new Retriever(fileReader);
    const races = retriever.get({
        year: year
    }).Races;
    races.forEach((race:any) => {
        results.set(race.raceName, race.QualifyingResults.filter((d:any) => drivers.includes(d.number))
            .map((driver:any) => [driver.Driver.driverId, conv.toMs(driver.Q1), conv.toMs(driver.Q2), conv.toMs(driver.Q3)]))
    })
    return results
}