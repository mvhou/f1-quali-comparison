export declare type unavailable = 'N/A';
export declare type qTime = number | unavailable;
export declare type driverResult = [string, qTime, qTime, qTime];
export declare type searchResult = Record<string, driverResult[]>;
