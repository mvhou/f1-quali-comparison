export type unavailable = 'N/A'

export type sessionNumber = 1 | 2 | 3

export type qTime = number | unavailable

export type driverResult = [string, qTime, qTime, qTime]

export type searchResult = Map<string, driverResult[]>