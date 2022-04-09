import * as fs from 'fs';

const driverNumbers:string[] = [
    '44',
    '77',
    '5',
    '7'
]

type qualiResult = {
    q1:number,
    q2:number,
    q3:number
}

const thousands = (time:string | undefined):number | null => {
    if (time === undefined)
        return null
    return (Number.parseInt(time[0]) * 60000) + (Number.parseInt(time.slice(2,4)) * 1000) + Number.parseInt(time.slice(5))
}

const getData = (data:any) => JSON.parse(data).Races


fs.readFile('data/2017.json', (_, f) => {
    console.log(f)
    const data = getData(f)
    console.log(data)
    const check:qualiResult[] = data[0].QualifyingResults.filter(d => driverNumbers.includes(d.number))
        .map(driver => {
            return {
                q1: thousands(driver.Q1),
                q2: thousands(driver.Q2),
                q3: thousands(driver.Q3),
            }
        })
    console.log(check)
})