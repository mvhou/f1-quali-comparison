import { unavailable, qTime } from './types'

const formatTime = (time:number, width:number):string => String(Math.floor(time)).padStart(width, '0')

export const toMs = (time:string | undefined | unavailable):qTime => (time === undefined || time === 'N/A' || time === "") ? 'N/A' : (Number.parseInt(time[0]) * 60000) + (Number.parseInt(time.slice(2,4)) * 1000) + Number.parseInt(time.slice(5))

export const toString = (time:number | undefined | unavailable):string => (time === undefined || time === 'N/A') ? 'N/A' : `${formatTime((time/1000)/60, 1)}:${formatTime((time/1000)%60, 2)}.${formatTime(time%1000, 3)}`
