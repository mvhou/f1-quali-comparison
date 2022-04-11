import * as fs from 'fs'

type retrieverType = (options:Record<string, string>) => Record<string, any>

export class Retriever {
    get:retrieverType
    constructor (get:retrieverType) {
        this.get = get
    }
}

export const fileReader = (options:Record<string, string>):Record<string, any> => {
    const folder:string = ((options.folder === undefined) ? 'data' : options.folder);
    return JSON.parse(fs.readFileSync(`${folder}/${options.year}.json`).toString())
}