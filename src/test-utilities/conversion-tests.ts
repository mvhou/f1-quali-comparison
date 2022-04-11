import { testInOut } from './utils'

export const stringToMs:testInOut[] = [
    {
        input: "0:00.000",
        output: 0
    },
    {
        input: "0:00.001",
        output: 1
    },
    {
        input: "0:10.100",
        output: 10100
    },
    {
        input: "0:59.999",
        output: 59999
    },
    {
        input: "1:00.000",
        output: 60000
    },
    {
        input: "1:01.001",
        output: 61001
    },
    {
        input: "1:11.111",
        output: 71111
    },
    {
        input: "2:22.222",
        output: 142222
    },
];

export const msToString:testInOut[] = [
    {
        input: 0,
        output: "0:00.000"
    },
    {
        input: 1,
        output: "0:00.001"
    },
    {
        input: 10100,
        output: "0:10.100"
    },
    {
        input: 59999,
        output: "0:59.999"
    },
    {
        input: 60000,
        output: "1:00.000"
    },
    {
        input: 61001,
        output: "1:01.001"
    },
    {
        input: 71111,
        output: "1:11.111"
    },
    {
        input: 142222,
        output: "2:22.222"
    },
    {
        input: 123456,
        output: "2:03.456"
    }
]