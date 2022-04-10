import * as fs from 'fs';

type unavailable = 'N/A'

const driverNumbers:string[] = [
    '44',
    '77',
    '5',
    '7'
]

// type qualiResult = {
//     q1:number | unavailable,
//     q2:number | unavailable,
//     q3:number | unavailable
// }

type qualiResult = number | unavailable

type qualiDiff = {
    race:string,
    diff:Record<string, qualiResult>
}

const formatTime = (time:number, width:number):string => String(Math.round(time)).padStart(width, '0')

const thousands = (time:string | undefined | unavailable):number | unavailable => (time === undefined || time === 'N/A') ? 'N/A' : (Number.parseInt(time[0]) * 60000) + (Number.parseInt(time.slice(2,4)) * 1000) + Number.parseInt(time.slice(5))

const timeStr = (time:number | undefined | unavailable):string => (time === undefined || time === 'N/A') ? 'N/A' : `${formatTime((time/1000)/60, 2)}:${formatTime((time/1000)%60, 2)}.${formatTime(time%1000, 3)}`

const getData = (data:any) => JSON.parse(data).Races

const createDiff = (race:string, data:any[]):qualiDiff => {
    const retDiff:Record<string, qualiResult> = {}
    data.forEach(result => retDiff[result[0]] = result[1])
    return {
        race: race,
        diff: retDiff
    }
}


fs.readFile('data/2017.json', (_, f) => {
    const data = getData(f)
    const raceResults = []
    data.forEach(race => {
        raceResults.push(createDiff(race.raceName, race.QualifyingResults.filter(d => driverNumbers.includes(d.number))
            .map(driver => [driver.Driver.driverId, thousands(driver.Q3)])))
    })
    // const check:qualiResult[] = data[0].QualifyingResults.filter(d => driverNumbers.includes(d.number))
    //     .map(driver => [driver.Driver.driverId, thousands(driver.Q3)])
    // console.log(createDiff(data[0].raceName, check))
    console.log(raceResults)
})