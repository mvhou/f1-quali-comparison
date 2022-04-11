export type testInOut = {
    input:any,
    output:any
}

export const log = (x:any, name:string=''):any => {
    console.log(x)
    return (x)
}