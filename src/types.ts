export type unavailable = 'N/A'

export type qTime = number | unavailable

export type driverResult = [string, qTime, qTime, qTime]

export type searchResult = Record<string, driverResult[]>