import { unavailable, qTime } from './types'

const formatTime = (time:number, width:number):string => String(Math.floor(time)).padStart(width, '0')

export const strMinutes = (time:number, width:number=1) => formatTime((time/1000)/60, width)

export const strSeconds = (time:number, width:number=2) => formatTime((time/1000)%60, width)

export const strMs = (time:number, width:number=3) => formatTime((time%1000), width)

export const toMs = (time:string | undefined | unavailable):qTime => (time === undefined || time === 'N/A' || time === "") ? 'N/A' : (Number.parseInt(time[0]) * 60000) + (Number.parseInt(time.slice(2,4)) * 1000) + Number.parseInt(time.slice(5))

export const toString = (time:number | undefined | unavailable):string => (time === undefined || time === 'N/A') ? 'N/A' : `${strMinutes(time)}:${strSeconds(time)}.${strMs(time)}`
