import { unavailable } from './types';
export declare const formatTime: (time: number, width: number) => string;
export declare const toMs: (time: string | undefined | unavailable) => number | unavailable;
export declare const toString: (time: number | undefined | unavailable) => string;
