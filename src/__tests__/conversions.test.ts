import * as conv from '../conversions'

describe('Conversion tests', () => {
    test('conv.toMs("0:00.000")', ()=> {
        expect(conv.toMs("0:00.000")).toStrictEqual(0)
    })
})