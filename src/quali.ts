import * as fs from 'fs';

import { searchResult } from './types'

import * as conv from './conversions'

const driverNumbers:string[] = [
    '44',
    '77',
    '5',
    '7'
]


const getData = (data:any) => JSON.parse(data).Races

fs.readFile('data/2017.json', (_, f) => {
    const data = getData(f)
    const results:searchResult = {}
    data.forEach((race:any) => {
        results[race.raceName] = race.QualifyingResults.filter((d:any) => driverNumbers.includes(d.number))
            .map((driver:any) => [driver.Driver.driverId, conv.toMs(driver.Q1), conv.toMs(driver.Q2), conv.toMs(driver.Q3)])
    })
    console.log(results)
})